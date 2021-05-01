import React, { Fragment } from "react";
import { Header,Segment } from "semantic-ui-react";
import Base from "../../core/Base";

/**
 * @author
 * @function MissingPage
 **/

const MissingPage = props => {
  return (
    <Fragment>
      <Base>
        <Segment placeholder textAlign = "center">
          <Header textAlign="center" style={{ color: "#FBC91B" }} as="h1">
            404 <span style={{ color: "#000000" }}>NOT</span> FOUND
            <span style={{ color: "#000000" }}>.</span>
          </Header>
          Oops!
        </Segment>
      </Base>
    </Fragment>
  );
};

export default MissingPage;
