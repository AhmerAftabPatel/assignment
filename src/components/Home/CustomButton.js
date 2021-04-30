import React, { Fragment } from "react";
import { Button } from "semantic-ui-react";

/**
 * @author
 * @function CustomButton
 **/

const CustomButton = ({ title }) => {
  return (
    <Fragment>
      <Button
        style={{
          width: "100%",
          display: "block",
          bottom: "0",
        //   position: "fixed",
        }}
      >
        {title}
      </Button>
    </Fragment>
  );
};

export default CustomButton;
