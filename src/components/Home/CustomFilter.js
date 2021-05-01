import React, { Fragment, useState } from "react";
import { Menu } from "semantic-ui-react";
import PropTypes from 'prop-types';
/**
 * @author
 * @function CustomFilter
 **/

const CustomFilter = ({ onTabSwitch, Results }) => {
  const [activeItem, setActiceItem] = useState("New");
  const handleItemClick = (e, { name }) => {
    let value = name === "New" ? "newstories" : "showstories";
    setActiceItem(name);
    onTabSwitch(value);
  };
  return (
    <Fragment>
      <Menu secondary>
        <Menu.Item
          name="New"
          value="newstories"
          active={activeItem === "New"}
          style={Object.assign(
            {},
            styleFixed,
            activeItem === "New" ? menuStyle : menuStyleDefault
          )}
          onClick={handleItemClick}
        />
        <Menu.Item
          name="Past"
          value="past"
          active={activeItem === "Past"}
          style={Object.assign(
            {},
            styleFixed,
            activeItem === "Past" ? menuStyle : menuStyleDefault
          )}
          onClick={handleItemClick}
        />
        <Menu.Menu position="right">
          <Menu.Item
            active={activeItem === "logout"}
            onClick={handleItemClick}
          >
            <p style={secondaryText}>{Results ? Results : 0} results found.</p>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    </Fragment>
  );
};

CustomFilter.propTypes = {
  Results: PropTypes.number.isRequired,
  onTabSwitch: PropTypes.func.isRequired,
}

export default CustomFilter;
const styleFixed = {
  fontFamily: "Open Sans",
  fontStyle: "normal",
  fontWeight: "bold",
  fontSize: "16px",
  borderRadius: "15px",
  padding: "4px 12px"
};
const menuStyle = {
  background: "#FBC91B",
  color: "#000000"
};
const menuStyleDefault = {
  background: "#F2F2F2",
  color: "#000000"
};
const secondaryText = { fontWeight: "lighter", fontSize: "10px" };
