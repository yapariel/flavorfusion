import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import fb from "../Assets/fb-icon.png";
import In from "../Assets/in-icon.png";
import Email from "../Assets/email-icon.png";
import "./Footer.css";

function Footer() {
  return (
    <Container className="footer-container">
      <Row className="footer-title">
        <span className="foot-title">
          FLAVOR FUSION - Uniting Global Tastes in Every Bite
        </span>
      </Row>
      <Row className="footer-social">
        <img src={fb} alt="" className="fb-icon" />
        <img src={Email} alt="" className="email-icon" />
      </Row>
    </Container>
  );
}

export default Footer;
