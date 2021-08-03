import React from "react";
import PropTypes from "prop-types";
import info from "../info";
import { Container, Row } from "react-bootstrap";

const MobileContent = (props) => {
  return (
    <Container>
      <Row>
        <div style={{ backgroundColor: "white" }}>{info.description}</div>
      </Row>
      <Row>
        <div style={{ backgroundColor: "silver" }}>{info.description}</div>
      </Row>
    </Container>
  );
};

MobileContent.propTypes = {};

export default MobileContent;
