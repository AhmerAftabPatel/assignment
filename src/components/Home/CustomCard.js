import React, { Fragment } from "react";
import { Card } from "semantic-ui-react";
/**
 * @author
 * @function CustonCard
 **/

const CustonCard = props => {
  return (
    <Fragment>
      <Card style={cardStyle}>
        <Card.Content style={{ height: "50%" }}>
          <Card.Header>Lorem Ipsum is simply dummy text.</Card.Header>
          {/* <Card.Meta>Co-Worker</Card.Meta> */}
          <Card.Description>
            <p style={textStyle}>
              {" "}
              Lorem Ipsum has been the industry's standard dummy text ever since
              Lorem Ipsum has been the industry's standard dummy text ever since
              scrambled
            </p>
          </Card.Description>
          <br />
          <p
            style={{ position: "absolute",marginBottom : "10px", bottom: "0", fontWeight: "lighter" }}
          >
            10 likes | 50 comments
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
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis"
  // maxHeight: "75ch"
};
