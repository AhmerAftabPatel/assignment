import React, { Fragment } from "react";
import { Container, Header } from "semantic-ui-react";
import { LogoHeader, LogoFooter } from "../assets/logo.js";
import PropTypes from 'prop-types';
/**
 * @author
 * @function Base
 **/

const Base = ({
  title = "My Title",
  description = "My desription",
  children
}) => {
  return (
    <Fragment>
      <Header
        size="large"
        style={commonHeader}
        as="h2"
        textAlign="center"
      >
        <LogoHeader />
      </Header>
      <Container>
        {children}
      </Container>
      <Header as="h2" size="large" textAlign="center" style={commonFooter}>
        <LogoFooter />
      </Header>
    </Fragment>
  );
};

Base.propTypes = {
  children: PropTypes.element.isRequired
}

export default Base;

const commonHeader = {
  textAlign: "center",
  fontWeight: "600",
  display: "block",
  padding: "8px",
  backgroundColor: "#FFFFFF",
  boxShadow: "0px 3px 28px rgba(0, 0, 0, 0.08)"
};

const commonFooter = {
  position: "relative",
  bottom: 0,
  left : 0,
  backgroundColor: "#FBC91B",
  fontWeight: "600",
  padding: "35px",
  width: "100%"
};
