//  import moment from 'moment';
const moment = require('moment');
 
// const space="/(\s)+/g"
// const special_chars=/(!|@|#|\$|%|\^|\*|\+|-|&|\(|\)|\[|\]|\\|~|\.|;|:|\?|<|>|`|,)+/g;
// const user_name_chars=/(!|@|#|\$|%|\^|\*|\+|&|\(|\)|\[|\]|\\|~|\.|;|:|\?|<|>|`|,)+/g;
const html_tags = /(<\w*>.*<\/\w*>|<\w*>|<\/\w*>)+/g;
// const numbers= /^(\d+|\d{1,3}(,\d{3})*)(\.\d+)?\b$/g;
const date = /^(\d{4}-\d{2}-\d{2})$/g;
const time_ = /^(\d{1,2}:\d{1,2}(:\d{1,2})?)$/g;
const alpha_ = /[^\u0621-\u064Aa-zA-Z ]+/g;
const english_ = /[^a-zA-Z ]+/g;
const arabic_ = /[^\u0621-\u064A ]+/g;
// const numeric =/[^0-9\u0660-\u0669]+/g ;
const alphaNumeric_ = /[^\u0621-\u064Aa-zA-Z0-9\u0660-\u0669 ]+/g;
//////////////////////Randa/////////////////////
const timeval_ =/^([01]\d|2[0-3]):([0-5]\d)$/g;

// const strength= /^(\d{1,4}(\/|\:|\-)\d{1,5})$|^(\d{1,4})$/g;

// function notContainsSpaceBetween(value){
//     if (value.search(space) != -1)
//         return false;
//     return true;
// }
function formateDoBDate(date) {
  // console.log(date)
  if (date) {
    var date = new Date(date);
    let dobFormatedDate =
      date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
    return dobFormatedDate;
  }
  return date;
}

function checkDoBDate(input) {
  console.log(input);

  if (input) {
    let newVal = formateDoBDate(input);
    console.log(newVal);
    if (newVal == "NaN-NaN-NaN") {
      return false;
    } else {
      return true;
    }
  } else {
    return true;
  }
}
//////////////////////////
// function checkDoBDate(input) {
//   console.log(input);

//   if (input) {
//     let newVal = convertTimeDate(input);
//     console.log(newVal);
//     if (newVal == "NaN-NaN-NaN NaN:NaN " ) {
//       return false;
//     } else {
//       return true;
//     }
//   } else {
//     return true;
//   }
// }
//////////////////////////////////////
function convertTimeDate(date) {
  date = new Date(date);
  console.log(date);
  // convert date to "YYYY-MM-DD" format
  var yyyy = date.getFullYear().toString();
  var mm = (date.getMonth() + 1).toString();
  var dd = date.getDate().toString();
  var mmChars = mm.split("");
  var ddChars = dd.split("");
  // valid date YYYY-MM-DDTHH:MN:SS.MSSZ
  var hh = (date.getHours()).toString();
  var min = (date.getMinutes()).toString();
  var sec = (date.getSeconds()).toString();


  return (
    (ddChars[1] ? dd : "0" + ddChars[0]) + "-" 
     + (mmChars[1] ? mm : "0" + mmChars[0]) + "-"  
    + yyyy + hh + ":" + min + ":" + sec
    
   
   
  );
}
//////////////////////////////////////
function convertTime(date) {
     date = new Date(date);
    console.log(date);
    // convert date to "YYYY-MM-DD" format
    // var yyyy = date.getFullYear().toString();
    // var mm = (date.getMonth() + 1).toString();
    // var dd = date.getDate().toString();
    // var mmChars = mm.split("");
    // var ddChars = dd.split("");
    // valid date YYYY-MM-DDTHH:MN:SS.MSSZ
    var hh = (date.getHours()).toString();
    var min = (date.getMinutes()).toString();
    var sec = (date.getSeconds()).toString();

  return (
    hh + ":" + min + ":" + sec
 
  );
}
/////////////////////////////
function alpha(value) {
  if (value == "" || value == null) return true;
  if (value.search(alpha_) == -1) return true;
  return false;
}

function english(value) {
  if (value == "" || value == null) return true;
  if (value.search(english_) == -1) return true;
  return false;
}

function arabic(value) {
  if (value == "" || value == null) return true;
  if (value.search(arabic_) == -1) return true;
  return false;
}

// function numeric(value){
//     if (value == "" || value == null )
//         return true
//     if (value.search(numeric) ==-1)
//        return true ;
//     return false
// }
function alphaNumeric(value) {
  if (value == "" || value == null) return true;
  if (value.search(alphaNumeric_) == -1) return true;
  return false;
}
function validDate(value) {
  if (value == "" || value == null) return true;
  var regEx = /^\d{4}-\d{2}-\d{2}$/;
  if (!value.match(regEx)) return false; // Invalid format
  var d = new Date(value);
  var dNum = d.getTime();
  if (!dNum && dNum !== 0) return false; // NaN value, Invalid date
  return d.toISOString().slice(0, 10) === value;
}
////////////////////////////
 function validTime(value) {
  if(value == null || value == ''){
        return true;
      }
    else {
        return moment(value,'HH:mm',false).isValid();
    }
  }
  ///////////////////////////////

function time(value) {
  if (value == "" || value == null || typeof value === "object" ) return true;
  if (value.search(time_) != -1) return false;
  return true;
}
//////////////////////////////////////////////
 function timeVal(value) {
  if (value == "" || value == null || typeof value === "object" ) return true;
  if (value.search(timeval_) != -1) return false;
  return true;
}
// function notContainsSpecialChars (value){
//     if (value.search(special_chars) !=-1)
//         return false;
//     return true;
// }
function notContainsHtmlTags(value) {
  if (value == "" || value == null) return true;
  if (value.search(html_tags) != -1) return false;
  return true;
}
// function notValidUserName(value){
//     if (value.search(user_name_chars) !=-1)
//         return false
//     return true
// }
// function notNumber(value){
//     if (value.search(numbers) !=-1)
//         return false
//     return true
// }
// validate files
function validateFile(val) {
  let isValidExtension = false;

  if (
    val.name.endsWith("jpg") ||
    val.name.endsWith("jpeg") ||
    val.name.endsWith("png") ||
    val.name.endsWith("bmp")
  ) {
    isValidExtension = true;
  } else if (val.name.endsWith("pdf")) {
    isValidExtension = true;
  } else if (val.name.endsWith("docx")) {
    isValidExtension = true;
  } else {
    isValidExtension = false;
  }
  return isValidExtension;
}

function customvalidateFile(val) {
  let isValidExtension = false;
  let isValidSize = false;
  let type = "";
  if (
    val.name.endsWith("jpg") ||
    val.name.endsWith("jpeg") ||
    val.name.endsWith("png") ||
    val.name.endsWith("bmp")
  ) {
    isValidExtension = true;
    type = "image";
  } else if (val.name.endsWith("pdf")) {
    isValidExtension = true;
    type = "pdf";
  } else if (val.name.endsWith("docx")) {
    isValidExtension = true;
    type = "docx";
  } else {
    isValidExtension = false;
  }
  if (val.size > 5000000) {
    isValidSize = false;
  } //5000000 10mb
  else {
    isValidSize = true;
  }
  return {
    source: URL.createObjectURL(val),
    name: val.name,
    size: val.size,
    validExtension: isValidExtension,
    type: type,
    validSize: isValidSize,
    rawFile: val,
  };
}

function fileExtension(val) {
  let isValidExtension = false;
  if (
    val.name.endsWith("jpg") ||
    val.name.endsWith("jpeg") ||
    val.name.endsWith("png") ||
    val.name.endsWith("bmp")
  ) {
    isValidExtension = true;
  } else if (val.name.endsWith("pdf")) {
    isValidExtension = true;
  } else if (
    val.name.endsWith("docx") ||
    val.name.endsWith("ppt") ||
    val.name.endsWith("pptx") ||
    val.name.endsWith("doc") ||
    val.name.endsWith("txt")
  ) {
    isValidExtension = true;
  } else if (
    val.name.endsWith("mp4") ||
    val.name.endsWith("mov") ||
    val.name.endsWith("avi") ||
    val.name.endsWith("mkv") ||
    val.name.endsWith("webm")
  ) {
    isValidExtension = true;
  } else {
    isValidExtension = false;
  }
  return isValidExtension;
}

function fileSize(val, fileSize, imageSize, videoSize) {
  if (
    val.name.endsWith("jpg") ||
    val.name.endsWith("jpeg") ||
    val.name.endsWith("png") ||
    val.name.endsWith("bmp")
  ) {
    if (val.size < imageSize) return true;
  } else if (
    val.name.endsWith("pdf") ||
    val.name.endsWith("docx") ||
    val.name.endsWith("ppt") ||
    val.name.endsWith("pptx") ||
    val.name.endsWith("doc") ||
    val.name.endsWith("txt")
  ) {
    if (val.size < fileSize) return true;
  } else if (
    val.name.endsWith("mp4") ||
    val.name.endsWith("mov") ||
    val.name.endsWith("avi") ||
    val.name.endsWith("mkv") ||
    val.name.endsWith("webm")
  ) {
    if (val.size < videoSize) return true;
  }
  return false;
}

//media validator

function mediaValidator(val) {
  let isValidExtension = false;

  if (
    val.name.endsWith("jpg") ||
    val.name.endsWith("jpeg") ||
    val.name.endsWith("png") ||
    val.name.endsWith("bmp")
  ) {
    isValidExtension = true;
  } else if (
    val.name.endsWith("mp4") ||
    val.name.endsWith("mov") ||
    val.name.endsWith("avi") ||
    val.name.endsWith("mkv") ||
    val.name.endsWith("webm")
  ) {
    isValidExtension = true;
  }

  return isValidExtension;
}

// validate image
function imageType(value) {
  if (value == "" || value == null) return true;
  if (value.name) {
    if (
      value.name.endsWith("jpg") ||
      value.name.endsWith("jpeg") ||
      value.name.endsWith("png") ||
      value.name.endsWith("bmp")
    )
      return true;
  } else {
    if (
      value.type.endsWith("jpg") ||
      value.type.endsWith("jpeg") ||
      value.type.endsWith("png") ||
      value.type.endsWith("bmp")
    )
      return true;
  }
  return false;
}

function imageSize(value, size) {
  // console.log(size)

  if (value == "" || value == null) return true;
  if (value.size < size) return true;
  return false;
}

function meidaSize(value, imageSize, videoSize) {
  if (value == "" || value == null) return true;
  if (
    value.name.endsWith("jpg") ||
    value.name.endsWith("jpeg") ||
    value.name.endsWith("png") ||
    value.name.endsWith("bmp")
  ) {
    if (value.size < imageSize) return true;
  } else if (
    value.name.endsWith("mp4") ||
    value.name.endsWith("mov") ||
    value.name.endsWith("avi") ||
    value.name.endsWith("mkv") ||
    value.name.endsWith("webm")
  ) {
    if (value.size < videoSize) return true;
  }
  return false;
}
////////////////////////////////////////////////////////////////
function validIsoDateTime(value) {
    if(!value || value=='' || value==null ) return true
    if (!/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z/.test(value)) return false;
    const d = new Date(value); 
    return d instanceof Date && !isNaN(d) && d.toISOString()===value; // valid date YYYY-MM-DDTHH:MN:SS.MSSZ
}
function validBase64() {
  // Create Base64 Object
  var Base64 = {
    _keyStr:
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    encode: function (e) {
      var t = "";
      var n, r, i, s, o, u, a;
      var f = 0;
      e = Base64._utf8_encode(e);
      while (f < e.length) {
        n = e.charCodeAt(f++);
        r = e.charCodeAt(f++);
        i = e.charCodeAt(f++);
        s = n >> 2;
        o = ((n & 3) << 4) | (r >> 4);
        u = ((r & 15) << 2) | (i >> 6);
        a = i & 63;
        if (isNaN(r)) {
          u = a = 64;
        } else if (isNaN(i)) {
          a = 64;
        }
        t =
          t +
          this._keyStr.charAt(s) +
          this._keyStr.charAt(o) +
          this._keyStr.charAt(u) +
          this._keyStr.charAt(a);
      }
      return t;
    },
    decode: function (e) {
      var t = "";
      var n, r, i;
      var s, o, u, a;
      var f = 0;
      e = e.replace(/[^A-Za-z0-9\+\/\=]/g, "");
      while (f < e.length) {
        s = this._keyStr.indexOf(e.charAt(f++));
        o = this._keyStr.indexOf(e.charAt(f++));
        u = this._keyStr.indexOf(e.charAt(f++));
        a = this._keyStr.indexOf(e.charAt(f++));
        n = (s << 2) | (o >> 4);
        r = ((o & 15) << 4) | (u >> 2);
        i = ((u & 3) << 6) | a;
        t = t + String.fromCharCode(n);
        if (u != 64) {
          t = t + String.fromCharCode(r);
        }
        if (a != 64) {
          t = t + String.fromCharCode(i);
        }
      }
      t = Base64._utf8_decode(t);
      return t;
    },
    _utf8_encode: function (e) {
      e = e.replace(/\r\n/g, "\n");
      var t = "";
      for (var n = 0; n < e.length; n++) {
        var r = e.charCodeAt(n);
        if (r < 128) {
          t += String.fromCharCode(r);
        } else if (r > 127 && r < 2048) {
          t += String.fromCharCode((r >> 6) | 192);
          t += String.fromCharCode((r & 63) | 128);
        } else {
          t += String.fromCharCode((r >> 12) | 224);
          t += String.fromCharCode(((r >> 6) & 63) | 128);
          t += String.fromCharCode((r & 63) | 128);
        }
      }
      return t;
    },
    _utf8_decode: function (e) {
      var t = "";
      var n = 0;
      var r = (c1 = c2 = 0);
      while (n < e.length) {
        r = e.charCodeAt(n);
        if (r < 128) {
          t += String.fromCharCode(r);
          n++;
        } else if (r > 191 && r < 224) {
          c2 = e.charCodeAt(n + 1);
          t += String.fromCharCode(((r & 31) << 6) | (c2 & 63));
          n += 2;
        } else {
          c2 = e.charCodeAt(n + 1);
          c3 = e.charCodeAt(n + 2);
          t += String.fromCharCode(
            ((r & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63)
          );
          n += 3;
        }
      }
      return t;
    },
  };

  // Define the string, also meaning that you need to know the file extension
  var encoded = "Base64 encoded image returned from your service";

  // Decode the string
  var decoded = Base64.decode(encoded);
  console.log(decoded);

  // if the file extension is unknown
  var extension = undefined;
  // do something like this
  var lowerCase = decoded.toLowerCase();
  if (lowerCase.indexOf("png") !== -1) extension = "png";
  else if (lowerCase.indexOf("jpg") !== -1 || lowerCase.indexOf("jpeg") !== -1)
    extension = "jpg";
  else extension = "tiff";
}

module.exports = {
  // notContainsSpecialChars,
  // notValidUserName,
  // notNumber,
  // numeric,
  notContainsHtmlTags,
  alpha,
  arabic,
  english,
  alphaNumeric,
  validateFile,
  validDate,
  time,
  imageType,
  imageSize,
  fileExtension,
  fileSize,
  mediaValidator,
  meidaSize,
  checkDoBDate,
  customvalidateFile,
  validIsoDateTime,
  convertTime,
  validTime,
};
