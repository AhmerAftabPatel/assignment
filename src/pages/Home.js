import React, { Fragment, useEffect, useState } from "react";
import CustomButton from "../components/Home/CustomButton";
import CustonCard from "../components/Home/CustomCard";
import CustomFilter from "../components/Home/CustomFilter";
import Base from "../core/Base";
import { getNews } from "../helpers/News";

/**
 * @author
 * @function Home
 **/

const Home = props => {
  const [apiUrl, setUrl] = useState("newstories");
  const [news, setNews] = useState([]);
  const [newsLimit, setNewsLimit] = useState(4);
  const preload = (limit, url) => {
    getNews(url)
      .then(res => {
        let data = res.data;
        setNews(data.slice(0, limit));
      })
      .catch(err => {setNews([]); alert(err.response.data.error); });
  };

 
  const NewsCard = news.map(nw => {
    return (
      <>
        <CustonCard id={nw} />
      </>
    );
  });
  const TabSwitch = value => {
    setUrl(value);
  };
  useEffect(() => {
    preload(newsLimit, apiUrl);
  }, [newsLimit, apiUrl]);
  return (
    <Fragment>
      <Base title="HackerNews">
        <CustomFilter onTabSwitch={TabSwitch} />
        {NewsCard}
        <CustomButton
          onLoadMore={() => setNewsLimit(newsLimit + 4)}
          customButtomStyle={buttonStyle}
          title="Load More"
        />
      </Base>
    </Fragment>
  );
};

export default Home;

const buttonStyle = {
  width: "100%",
  position: "static",
  borderRadius: "12px",
  padding: "15px",
  fontSize: "16px",
  fontWeight: "bold",
  backgroundColor: "#FFC700"
};
