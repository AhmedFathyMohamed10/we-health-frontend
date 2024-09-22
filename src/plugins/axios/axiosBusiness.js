import axios from 'axios';
import { locale,hasTokenExpired,refreshingToken} from "./global";
import { urls as local } from "@/backend/urls";
import { urls as dev } from "@/backend/dev";
let urls 
if (process.env.NODE_ENV === 'development') {
  // Set the base URL for localhost
  urls = local
} else {
  urls = dev
  // Set the base URL for production
}

const axiosBusiness = axios.create({
    baseURL: urls.business.baseUrl,
    headers: {
        'Content-Type': 'application/json',
        'lang': locale,
        'dashboard-id' : 1,
        'org-id' : 1,
    },
});
        
        
// Add a request interceptor
axiosBusiness.interceptors.request.use(
  async (config) => {
  // Get the token from the store
  let accessToken = localStorage.getItem('accessToken')
  if(accessToken){
    // print success messages in the console with green color using ANSI escape sequences
    console.log('\x1b[32m%s\x1b[0m', 'Access token is Found');
    config.headers["Authorization"] = `Bearer ${accessToken}`;
  }
  // Check if the token has expired
  if (accessToken && hasTokenExpired(accessToken)) {
    console.error('Token has expired');
    // Refresh the token
    await refreshingToken();
    // Update the Authorization header with the new token
    accessToken = localStorage.getItem('accessToken')
    config.headers["Authorization"] = `Bearer ${accessToken}`;
  }
  return config;
},
(error) => {
  return Promise.reject(error);
}
);

// Add a response interceptor
axiosBusiness.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    console.log(error);
    // Throw an error to cancel the request
    if (error.response && error.response.status === 500) {
        throw new Error('Internal Server Error');
    } 
    // Check if the error is due to an expired token
    if (error.response.status === 401 && error.config && !error.config.__isRetryRequest) {
      // Set the __isRetryRequest flag to prevent an infinite loop
      error.config.__isRetryRequest = true;
      // Refresh the token
      await refreshingToken();
      // Update the Authorization header with the new token
      let accessToken = localStorage.getItem('accessToken')
      error.config.headers["Authorization"] = `Bearer ${accessToken}`;
      // Retry the original request with the new token
      return axiosBusiness(error.config);
    }
    return Promise.reject(error);
  }
);
  

export {axiosBusiness};