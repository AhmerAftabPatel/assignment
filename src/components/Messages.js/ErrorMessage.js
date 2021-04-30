import React, { Fragment } from "react";
import { Message } from "semantic-ui-react";

/**
 * @author
 * @function ErrorMessage
 **/

const ErrorMessage = ({ description }) => {
  let doDisplay = description ? "" : "none";
  setTimeout(() => {
    doDisplay = "none"
  },3000)
  return (
    <Fragment>
      <Message warning style={{ display: doDisplay }}>
        <Message.Header>Error!</Message.Header>
        <p>{description}</p>
      </Message>
    </Fragment>
  );
};

export default ErrorMessage;
