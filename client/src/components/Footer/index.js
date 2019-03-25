import React from "react";
import { Col, Row, Container } from "../Grid";
import "./style.css";

function Footer() {
  return (
    <footer className="page-footer">
      <Container>
        <Row>
          <Col size="l6 s12">
            <h5 className="white-text">Google Books Search</h5>
            <p className="grey-text text-lighten-4">The application where you can search for Google Books and save them for your reading pleasure later.</p>
          </Col>
          <Col size="l6 s12">
            
          </Col>
        </Row>
      </Container>
      <div className="footer-copyright">
        <Container>
          © 2019 David Ferro
          <a className="right white-text" href="https://github.com/davidferro91/Google_Books_Search">Code on Github</a>
        </Container>
      </div>
    </footer>
  );
}

export default Footer;
