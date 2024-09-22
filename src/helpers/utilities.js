var locale = localStorage.getItem("locale")
  ? localStorage.getItem("locale")
  : "en";

function hideEmail(email) {
  let term1 = email.split("@")[0];
  term1 = term1.slice(0, 3) + term1.slice(3).replace(/.(?=..)/g, "*");
  let term2 = email.split("@")[1];
  return `${term1}@${term2}`;
}
/////////////////////////////////////////////////////////////////////////////////
function hidePhone(phone) {
  return (phone = phone.slice(0, 4) + phone.slice(4).replace(/.(?=..)/g, "*"));
}
//////////////////////////////////////////////////////////////////////////////////////
function convertDate(date) {
  date = new Date(date);
  // convert date to "YYYY-MM-DD" format
  var yyyy = date.getFullYear().toString();
  var mm = (date.getMonth() + 1).toString();
  var dd = date.getDate().toString();
  var mmChars = mm.split("");
  var ddChars = dd.split("");
  return (
    yyyy +
    "-" +
    (mmChars[1] ? mm : "0" + mmChars[0]) +
    "-" +
    (ddChars[1] ? dd : "0" + ddChars[0])
  );
}
////////////////////Randa/////////////////////
function convertTimeDate(time) {
  time = new Date(time);
  console.log(time);
  // convert date to "YYYY-MM-DD" format
  var yyyy = time.getFullYear().toString();
  var mm = (time.getMonth() + 1).toString();
  var dd = time.getDate().toString();
  var mmChars = mm.split("");
  var ddChars = dd.split("");
  // valid date HH:MN:sec
  var hh = (time.getUTCHours() + 3).toString();
  var min = (time.getUTCMinutes()).toString();
  var sec = (time.getUTCSeconds()).toString();
  var hhChars = hh.split("");
  var minChars = min.split("");
  var secChars = min.split("");

  return (
    (ddChars[1] ? dd : "0" + ddChars[0]) + "-" + 
    (mmChars[1] ? mm : "0" + mmChars[0]) + "-" +
    yyyy + "," + " " +
    (hhChars[1] ? hh : "0" + hhChars[0]) + ":" +
    (minChars[1] ? min : "0" + minChars[0]) + ":" +
    (secChars[1] ? sec : "0" + secChars[0])

    
   
   
  );
}
////////////////////Randa/////////////////////
function convertTime(time) {
  time = new Date(time);
  console.log(time);
  // valid date HH:MN:sec
  var hh = (time.getUTCHours() + 3).toString();
  var min = (time.getUTCMinutes()).toString();
  var sec = (time.getUTCSeconds()).toString();
  var hhChars = hh.split("");
  var minChars = min.split("");
  var secChars = min.split("");

  return (
    (hhChars[1] ? hh : "0" + hhChars[0]) + ":" +
    (minChars[1] ? min : "0" + minChars[0]) + ":" +
    (secChars[1] ? sec : "0" + secChars[0])

    
   
   
  );
}
//////////////////////////////////////////////////////////////////////////////////
function compareDates(date1, date2) {
  const d1 = Date.parse(date1);
  const d2 = Date.parse(date2);
  if (isNaN(d1) || isNaN(d2)) {
    return 0;
  }
  const diff = d1 - d2;
  return Math.round(diff / 86400000);
}
//////////////////////////////////////////////////////////////////////////////////
function getIsoDateTime(value) {
  let isoDateTime=new Date(value).toISOString();
  return isoDateTime;
}
function getLocaleDateTime(value) {
  let isoDateTime = getIsoDateTime(value);
  let localTimeZone =Intl.DateTimeFormat().resolvedOptions().timeZone;
  let dateTimeOptions = {timeZone:localTimeZone,timestyle:'full',hourCycle:'h24'};
  let localDateTime = new Date(isoDateTime).toLocaleString(this.locale,dateTimeOptions);
  return localDateTime
}
//////////////////////////////////////////////////////////////////////////////////
function convertFileToBase64(file) {
  return new Promise (resolve  =>{
      let base = null;
      var reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
          base = reader.result
          resolve(base)
      };
  })
}
function dataURItoBlob(dataURI) {
  const byteString = atob(dataURI.split(',')[1]);
  const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
  const byteArray = new Uint8Array(byteString.length);
  for (let i = 0; i < byteString.length; i++) {
    byteArray[i] = byteString.charCodeAt(i);
  }
  return new Blob([byteArray], { type: mimeString });
}
function dataURLToBase64(imageUrl){
  // imageUrl = Image URL from the backend API response
  return new Promise((resolve, reject) => {
    // Fetch the image data
    fetch(imageUrl)
    .then(response => response.blob())
    .then(blob => {
      // Read the image data as a base64 string
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result;
        resolve(base64String); // Resolve the base64 string
      };
      reader.readAsDataURL(blob);
    })
    .catch(error => {
      console.error('Error fetching image:', error);
      reject(error);
    })
  })
}
//////////////////////////////////////////////////////////////////////////////////
function getFileNameFromBase64(base64String) {
  console.log(base64String)
  const metadata = base64String.split(',')[0]; // Get the metadata part of the base64 string
  const contentType = metadata.split(';')[0].split(':')[1]; // Extract the content type
  const fileExtension = contentType.split('/')[1]; // Extract the file extension
  const fileName = `file.${fileExtension}`; // Construct the file name
  console.log(fileName)
  return fileName;
}
//////////////////////////////////////////////////////////////////////////////////////
function truncateNumber(num,digits){
  if(num){
    num = Math.floor(num * 100) / 100;
    return num.toFixed(digits);
  }
}
////////////////////////////////////////////////
// function findLocaleOption(list,value){
//   if(value){
//     const result=list.find(el=>el.key == value)
//     return result[this.locale];
//   }
// }
function findLocaleOption(list,value){
  let item = list.find(item=>item.key == value)
  if(item)
    return item[this.locale]
  else
    return value
}

function findOptionNameById(list,id){
  let item = list.find(item=>item.id == id)
  if(item)
    return item['name']
  else
    return id
}

function convertStaticData(data, level = 0) {
  const result = {};
  if (level >= 3) {
    return data;
  }
  data.forEach(obj => {
    Object.entries(obj).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        result[key] = convertStaticData(value, level + 1);
      } else {
        result[key] = value;
      }
    });
  });
  return result;
}

function destructOptionsList(list) {
  const result = [];
  for (const item of list) {
    if (item.id && item.translations) {
      result.push({ id: item.id, value: item.translations[locale] });
    } else if (item.other) {
      for (const otherItem of item.other) {
        result.push({ id: otherItem.id, value: otherItem.value });
      }
    }
  }
  return result;
}

function hideOverflow(container){
  let parent = document.getElementsByClassName(container)
  for (let i = 0; i < parent.length; i++) {
      parent[i].style.overflow="hidden";
  }
}
function showOverflow(container){
  let parent = document.getElementsByClassName(container)
  for (let i = 0; i < parent.length; i++) {
      parent[i].style.overflow="visible";
  }
}
module.exports = {
  hideEmail,
  hidePhone,
  convertDate,
  compareDates,
  convertFileToBase64,
  dataURItoBlob,
  dataURLToBase64,
  getFileNameFromBase64,
  truncateNumber,
  findLocaleOption,
  findOptionNameById,
  destructOptionsList,
  convertStaticData,
  hideOverflow,
  showOverflow,
  getIsoDateTime,
  getLocaleDateTime,
  convertTimeDate,
  convertTime,
};
