import axios from "axios";

export const getNews = async (url) => await axios.get(`${url}.json`);
export const getNewsByItem = (item) => axios.get(`item/${item}.json`);