import React from "react";
import { Col, Row, Container } from "../Grid";
import "./style.css";

function Footer() {
  return (
    <footer className="page-footer">
      <Container>
        <Row>
          <Col size="l6 s12">
            <h5 className="white-text">Footer Content</h5>
            <p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
          </Col>
          <Col size="l4 offset-l2 s12">
            <h5 className="white-text">Links</h5>
          </Col>
        </Row>
      </Container>
      <div class="footer-copyright">
        <Container>
          © 2019 David Ferro
          <a className="right white-text" href="">Code on Github</a>
        </Container>
      </div>
    </footer>
  );
}

export default Footer;
