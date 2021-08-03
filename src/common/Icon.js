import React from "react";

import { FiMail, FiPhone } from "react-icons/fi";
import { BiMapPin } from "react-icons/bi";
import { SiLinkedin, SiGithub } from "react-icons/si";

const icons = {
  email: <FiMail />,
  phone: <FiPhone />,
  map: <BiMapPin />,
  linkedin: <SiLinkedin />,
  github: <SiGithub />,
};

const Icon = (props) => {
  const code = props.code;
  const icon = icons[code];

  if (!icon) {
    console.assert(true, "icon with code " + code + "not found");
    return null;
  }
  return <span style={{ verticalAlign: "center" }}>{icon}</span>;
};

export default Icon;
