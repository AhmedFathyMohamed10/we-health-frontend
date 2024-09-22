import axios from 'axios';
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
let locale = localStorage.getItem("locale") || 'en';
axios.defaults.baseURL = urls.global.baseUrl;
axios.defaults.headers.common['lang'] = locale;
axios.defaults.headers.common['Content-Type'] = 'application/json';














