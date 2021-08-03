import React, { useState } from "react";
import info from "../info";
import { MenuSettingsModal } from "./MobileMenuSettings";
import { AiOutlineMenu } from "react-icons/ai";
import ReIcon from "../common/ReIcon";
import { Container, Navbar, Button } from "react-bootstrap";

const MobileMenuBar = () => {
  const [isMenuVisible, setMenuVisible] = useState(false);

  const onMenuClick = () => {
    setMenuVisible(true);
  };

  const handleClose = () => {
    setMenuVisible(false);
  };

  return (
    <>
      {isMenuVisible ? <MenuSettingsModal isMenuVisible={isMenuVisible} onClose={handleClose} /> : null}
      <Navbar fill="true" bg="primary" variant="dark" fixed="top">
        <Container>
          <Navbar.Brand>{info.full_name}</Navbar.Brand>
          <Button
            variant="outline-light"
            className="justify-content-end"
            onClick={onMenuClick}
          >
            <ReIcon size="30px">
              <AiOutlineMenu />
            </ReIcon>
          </Button>
        </Container>
      </Navbar>
    </>
  );
};

MobileMenuBar.propTypes = {};

export default MobileMenuBar;
