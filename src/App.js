import React from "react";
import MenuBar from "./components/MenuBar";
import Page from "./components/cv/Page";

import "./columns.less";

const Workspace = (props) => {
  return <div className="workspace">{props.children}</div>;
};

const App = () => {
  return (
    <div className="app">
      <MenuBar />
      <Workspace>
        <Page />
      </Workspace>
    </div>
  );
};

export default App;
