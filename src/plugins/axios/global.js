import axios from 'axios';
let locale = localStorage.getItem("locale") || 'en';
let refreshToken 
let accessToken 

if(localStorage.getItem('accessToken')){
    accessToken =localStorage.getItem('accessToken')
}
if(localStorage.getItem('refreshToken')){
    refreshToken =localStorage.getItem('refreshToken')
}

function hasTokenExpired(accessToken) {
    try {
        const tokenParts = accessToken.split('.');
        const payload = JSON.parse(atob(tokenParts[1]));
        
        if (payload && payload.exp) {
        const currentTime = Math.floor(Date.now() / 1000);
        return payload.exp < currentTime;
        }
    } catch (error) {
        console.error('Error decoding access token:', error);
    }
    return true; // Default to considering the token expired if decoding fails
}

async function refreshingToken() {
  refreshToken =  localStorage.getItem('refreshToken')
  // print success messages in the console with green color using ANSI escape sequences
  console.log('\x1b[32m%s\x1b[0m', 'Refresh token is Found');
  try {
    const {data} = await axios.post('users/token/refresh',{refresh:refreshToken})
    // console.log(data)
    // print success messages in the console with green color using ANSI escape sequences
    console.log('\x1b[32m%s\x1b[0m', 'success in refreshing token');
    localStorage.removeItem('accessToken')
    localStorage.setItem("accessToken",data.access)
  } 
  catch (err) {
    console.log(err);
    console.log('error in refreshing token');
    // localStorage.removeItem("accessToken");
    // localStorage.removeItem("refreshToken");
    // window.location.href = "/auth/signin";
  }
}
export {
  locale,
  hasTokenExpired,
  refreshingToken
}
