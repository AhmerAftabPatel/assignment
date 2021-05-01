import axios from "axios";
//get news items
export const getNews = async (url) => await axios.get(`${url}.json`);
//get new by single item
export const getNewsByItem = async (item) => await axios.get(`item/${item}.json`);