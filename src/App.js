import React from "react";
import "./App.less";

import DesktopMenuBar from "./desktop/DesktopMenuBar";
import MobileMenuBar from "./mobile/MobileMenuBar";
import Page from "./desktop/Page";
import { useMediaQuery } from "react-responsive";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import MobileContent from "./mobile/MobileContent";

const App = () => {
  const isDesktopOrLaptop = useMediaQuery({ query: "(min-width: 1000px)" });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 800px)" });
  const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });

  console.log(isDesktopOrLaptop);

  // set langauge
  const userLang = navigator.language || navigator.userLanguage;
  console.log("The language is: ", userLang);

  const renderContent = () => {
    if (isDesktopOrLaptop) {
      return (
        <>
          <DesktopMenuBar />
          <div className="workspace">
            <Page />
          </div>
        </>
      );
    } else if (isTabletOrMobile) {
      return (
        <div className="app">
          <Container fluid="true" style={{ paddingTop: "70px" }}>
            <MobileMenuBar isMobile={isTabletOrMobile} />
            <MobileContent />
          </Container>
        </div>
      );
    } else {
      return <Page />;
    }
  };

  return <div className="app">{renderContent()}</div>;
};

export default App;
