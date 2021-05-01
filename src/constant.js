import axios from 'axios';
export const API = "https://hacker-news.firebaseio.com/v0/"
export default function setAxiosDefaultHeaders() {
 
  axios.defaults.headers.post['Content-Type'] = 'application/json';
  axios.defaults.baseURL = API;
  axios.defaults.headers.post.Accept = 'application/json';
}
export const dummyText = "Lorem Ipsum has been the industry's standard dummy text ever since Lorem Ipsum has been the industry's standard dummy text ever since scrambled"
