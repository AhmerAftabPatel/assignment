import React, { Fragment } from "react";
import { Container } from "semantic-ui-react";
import CustomButton from "../components/Home/CustomButton";
import CustonCard from "../components/Home/CustomCard";
import CustomFilter from "../components/Home/CustomFilter";
import Base from "../core/Base";

/**
 * @author
 * @function Home
 **/

const Home = props => {
  return (
    <Fragment>
      <Base title="HackerNews">
        <CustomFilter />
        <CustonCard />
        <CustonCard />
        <CustonCard />
        <CustomButton title="Load More"/>
      </Base>
    </Fragment>
  );
};

export default Home;
