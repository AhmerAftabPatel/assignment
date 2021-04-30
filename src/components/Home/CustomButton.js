import React, { Fragment } from "react";
import { Button } from "semantic-ui-react";

/**
 * @author
 * @function CustomButton
 **/

const CustomButton = ({ title,customButtomStyle ,onLoadMore}) => {
  return (
    <Fragment>
      <Button
        style={customButtomStyle}
        onClick ={onLoadMore}
      >
        {title}
      </Button>
    </Fragment>
  );
};

export default CustomButton;
