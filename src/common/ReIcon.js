import React from "react";
import TypeProps from "prop-types";
import { IconContext } from "react-icons";

const ReIcon = (props) => {
  const { size, color, style } = props;
  return (
    <IconContext.Provider value={{ size, color, style }}>
      {props.children}
    </IconContext.Provider>
  );
};

ReIcon.propTypes = {
  size: TypeProps.string,
  color: TypeProps.string,
  style: TypeProps.string
};

export default ReIcon;
