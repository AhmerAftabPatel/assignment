import React, { Fragment, useEffect, useState } from "react";
import CustomButton from "../components/Home/CustomButton";
import CustonCard from "../components/Home/CustomCard";
import CustomFilter from "../components/Home/CustomFilter";
import Base from "../core/Base";
import { getNews } from "../helpers/News";
import { Loader } from "semantic-ui-react";
import ErrorMessage from "../components/Messages.js/ErrorMessage";
import { Animated } from "react-animated-css";
/**
 * @author
 * @function Home
 **/

const Home = props => {
  const [apiUrl, setUrl] = useState("newstories");
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [newsLimit, setNewsLimit] = useState(4);
  const preload = (limit, url) => {
    setLoading(true);
    getNews(url)
      .then(res => {
        let data = res.data;
        setNews(data.slice(0, limit));
        setLoading(false);
        setError("");
      })
      .catch(err => {
        setNews([]);
        setLoading(false);
        setError(err.response.data.error);
      });
  };
  const TabSwitch = value => {
    setUrl(value);
  };
  // looping news cards
  const NewsCard = news.map((nw, index) => {
    return (
      <>
        <Animated
          animationIn="fadeInUp"
          isVisible={true}
          animationInDelay={200 * index}
        >
          <CustonCard id={nw} key={nw.id}/>
        </Animated>
      </>
    );
  });
  
  useEffect(() => {
    preload(newsLimit, apiUrl);
  }, [newsLimit, apiUrl]);
  return (
    <Fragment>
      <Base title="HackerNews">
        <ErrorMessage description={error} />
        <CustomFilter onTabSwitch={TabSwitch} />
        {NewsCard}
        {loading ? (
          <Loader active inline="centered" />
        ) : error ? (
          ""
        ) : (
          <CustomButton
            onLoadMore={() => setNewsLimit(newsLimit + 4)}
            customButtomStyle={buttonStyle}
            title="Load More"
          />
        )}
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
  color: "#000000",
  backgroundColor: "#FFC700"
};
