import React from "react";
import GithubLogo from "../common/GithubLogo.js";
import "../style/MenuBar.less";
import info from "../info";
import messages from "../messages";

const DesktopMenuBar = (props) => {
  return (
    <div className="main-menu desktop">
      <a href="/">
        <div className="logo-name">{info.full_name}</div>
      </a>
      <GithubLogo
        href="https://github.com/adolin-negash/personal-info"
        className="github-link"
        isMobile={false}
        type="github"
        title={messages["github-link"]}
      />
    </div>
  );
};

DesktopMenuBar.propTypes = {  
};

export default DesktopMenuBar;
