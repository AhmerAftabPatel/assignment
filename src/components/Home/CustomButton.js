import React, { Fragment } from "react";
import { Button } from "semantic-ui-react";
import PropTypes from 'prop-types';
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
CustomButton.propTypes = {
  title: PropTypes.string.isRequired,
  customButtomStyle: PropTypes.object.isRequired,
  onLoadMore: PropTypes.func.isRequired,
}

export default CustomButton;
