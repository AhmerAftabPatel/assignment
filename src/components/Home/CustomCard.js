import React, { Fragment, useEffect, useState } from "react";
import { Card } from "semantic-ui-react";
import { TimeLogo } from "../../assets/logo";
import { getNewsByItem } from "../../helpers/News";
import TimeAgo from 'javascript-time-ago'
import ReactTimeAgo from "react-time-ago";
import en from 'javascript-time-ago/locale/en'
TimeAgo.addDefaultLocale(en)
// import TimeAgo from "javascript-time-ago";
// import en from "javascript-time-ago/locale/en";
// import ru from "javascript-time-ago/locale/ru";

// TimeAgo.addDefaultLocale(en);
// TimeAgo.addLocale(ru);
/**
 * @author
 * @function CustonCard
 **/

const CustonCard = ({ id }) => {
  const [item, setItem] = useState([]);
  const preload = id => {
    getNewsByItem(id)
      .then(res => {
        setItem(res.data);
      })
      .catch(err => console.log(err.response));
  };

  useEffect(() => {
    preload(id);
  }, [id]);
  let date = item.time ? new Date(item.time * 1000) : "";
  return (
    <Fragment>
      <Card style={cardStyle} onClick={() => (window.location.href = item.url)}>
        <Card.Content style={{ height: "50%" }}>
          <Card.Header style={{ fontSize: "12px", fotnWeight: "bold" }}>
            {item.title}
          </Card.Header>
          <Card.Description>
            <p style={textStyle}>
              {item.text
                ? item.text.slice(0, 50)
                : "Lorem Ipsum has been the industry's standard dummy text ever since Lorem Ipsum has been the industry's standard dummy text ever since scrambled"}
            </p>
          </Card.Description>
          <br />
          <p
            style={{
              position: "absolute",
              marginBottom: "10px",
              bottom: "0",
              fontWeight: "normal",
              fontSize: "8px",
              color: "rgba(0, 0, 0, 0.5)"
            }}
          >
            <TimeLogo />{" "}
            {item.time ? <ReactTimeAgo date={date} locale="en-US" /> : ""} |{" "}
            {item.descendants ? item.descendants : 0} comments
          </p>
        </Card.Content>
      </Card>
    </Fragment>
  );
};

export default CustonCard;

const cardStyle = {
  width: "100%",
  height: "123px",
  borderRadius: "12px",
  boxShadow: "0px 3px 28px rgba(0, 0, 0, 0.08)"
};
const textStyle = {
  // whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
  fontSize: "10px"
  // maxHeight: "75ch"
};
