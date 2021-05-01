import React, { Fragment } from "react";
import { Button } from "semantic-ui-react";
import PropTypes from 'prop-types';
/**
 * @author
 * @function CustomButton
 **/

const CustomButton = ({ title,customButtomStyle ,onLoadMore,Disable}) => {
  return (
    <Fragment>
      <Button
        disabled = {Disable}
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
  Disable: PropTypes.bool.isRequired,
}

export default CustomButton;
