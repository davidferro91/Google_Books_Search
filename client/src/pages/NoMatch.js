import React from "react";
import { Col, Row, Container } from "../components/Grid";

function NoMatch() {
  return (
    <Container>
      <Row>
        <Col size="s12 l6 push-l3">
            <h1>404 Page Not Found</h1>
            <h1>
              <span role="img" aria-label="Face With Rolling Eyes Emoji">
                🙄
              </span>
            </h1>
        </Col>
      </Row>
    </Container>
  );
}

export default NoMatch;