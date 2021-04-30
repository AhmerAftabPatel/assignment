import React, { Fragment, useState } from "react";
import { Menu } from "semantic-ui-react";

/**
 * @author
 * @function CustomFilter
 **/

const CustomFilter = ({onTabSwitch}) => {
  const [activeItem, setActiceItem] = useState("New");
  const handleItemClick = (e, { name }) => {
    let value = name === "New" ? "newstories" : "showstories"
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
      </Menu>
    </Fragment>
  );
};

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
