import React, { Fragment, useEffect, useState } from "react";
import { Card } from "semantic-ui-react";
import { TimeLogo } from "../../assets/logo";
import { getNewsByItem } from "../../helpers/News";
import ReactTimeAgo from "react-time-ago";
import { dummyText } from "../../constant";
import PropTypes from 'prop-types';
/**
 * @author
 * @function CustonCard
 **/

const CustomCard = ({ id }) => {
  const [item, setItem] = useState([]);
  const preload = id => {
    getNewsByItem(id)
      .then(res => {
        setItem(res.data);
      })
      .catch(err => console.log(err.response));
  };
  const changeLocation = (url) => {
    window.location.href = url
  }

  useEffect(() => {
    preload(id);
  }, [id]);
  if(item === null){
    return ""
  }
  let date = item.time && item.time !== null ? new Date(item.time * 1000) : "";
  return (
    <Fragment>
      <Card style={cardStyle} onClick={() => changeLocation(item.url)}>
        <Card.Content>
          <Card.Header style={itemHeader}>{item.title}</Card.Header>
          <Card.Description>
            <p style={textStyle}>
              {item.text ? item.text.slice(0, 50) : dummyText}
            </p>
          </Card.Description>
          <p style={feedStyle}>
            <TimeLogo /> &nbsp;
            {item.time ? <ReactTimeAgo date={date} locale="en-US" /> : ""} |
            {item.descendants ? item.descendants : 0} comments
          </p>
        </Card.Content>
      </Card>
    </Fragment>
  );
};
CustomCard.propTypes = {
  id: PropTypes.string.isRequired
}

export default CustomCard;

const cardStyle = {
  width: "100%",
  height: "123px",
  marginBottom: "10px",
  borderRadius: "12px",
  boxShadow: "0px 3px 28px rgba(0, 0, 0, 0.08)"
};
const textStyle = {
  overflow: "hidden",
  textOverflow: "ellipsis",
  fontSize: "10px"
};
const feedStyle = {
  position: "absolute",
  marginBottom: "10px",
  bottom: "0",
  fontWeight: "normal",
  fontSize: "8px",
  color: "rgba(0, 0, 0, 0.5)"
};
const itemHeader = { fontSize: "12px", fotnWeight: "bold" };
