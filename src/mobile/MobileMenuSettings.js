import React, { useState } from "react";

import info from "../info";
import {
  Container,
  Row,
  Col,
  ButtonGroup,
  ToggleButton,
  Modal,
} from "react-bootstrap";
import { FiExternalLink, FiSettings } from "react-icons/fi";

export const MenuSettingsModal = (props) => {
  const { isMenuVisible, onClose } = props;

  return (
    <Modal show={isMenuVisible} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>
          <FiSettings />
          <span>Settings</span>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <MobileSettings />
      </Modal.Body>
      <Modal.Footer></Modal.Footer>
    </Modal>
  );
};

const MobileSettings = (props) => {
  const [state, setState] = useState({ lang: "en" });

  const changeLang = (code) => {
    setState({
      ...state,
      lang: code,
    });
  };

  const renderLangButtons = () =>
    info.languages.map((lang) => {
      const active = state.lang === lang.code;
      const id = "lang-" + lang.code;
      return (
        <ToggleButton
          key={id}
          id={id}
          type="radio"
          variant="outline-info"
          name="language"
          value={lang.code}
          checked={active}
          onClick={active ? null : () => changeLang(lang.code)}
        >
          {`${lang.flag} ${lang.code}`}
        </ToggleButton>
      );
    });

  return (
    <Container>
      <Row md={4}>
        <Col xs={6}>Language / Язык</Col>
        <Col xs="auto">
          <ButtonGroup>{renderLangButtons()}</ButtonGroup>
        </Col>
      </Row>
      <Row md={4}>
        <Col xs={6}>This site source on github.com</Col>
        <Col>
          <a href={info.github_source} target="_blank" rel="noreferrer">
            <FiExternalLink />
          </a>
        </Col>
      </Row>
    </Container>
  );
};
