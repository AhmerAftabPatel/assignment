import axios from 'axios';
const API = "https://hacker-news.firebaseio.com/v0/"
export default function setAxiosDefaultHeaders() {
 
  axios.defaults.headers.post['Content-Type'] = 'application/json';
  axios.defaults.baseURL = API;
  axios.defaults.headers.post.Accept = 'application/json';
}
