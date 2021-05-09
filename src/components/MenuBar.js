import React from "react";
import GithubLogo from "./GithubLogo.js";
import "./MenuBar.less";
import info from "../info";

const MenuBar = () => {
  return (
    <div className="main-menu">
      <a href="/">
        <div className="logo-name">{info.full_name}</div>
      </a>
      <GithubLogo
        href="https://github.com/adolin-negash/personal-info"
        className="github-link"
      />
    </div>
  );
};

export default MenuBar;
