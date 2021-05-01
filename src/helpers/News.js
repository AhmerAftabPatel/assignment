import axios from "axios";

export const getNews = async (url) => await axios.get(`${url}.json`);
export const getNewsByItem = async (item) => await axios.get(`item/${item}.json`);