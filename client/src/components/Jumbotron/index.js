import React from "react";
import { Row, Col } from "../Grid";

function Jumbotron(props) {
  return (
    <Row>
      <Col size={"s12"}>
        <div className="card z-depth-3">
          <div className="card-image">
            <img src={require("../../images/Open-Book.jpg")} alt="Open-Book"/>
            <span className="card-title white-text"><h3>{props.children}</h3></span>
          </div>
        </div>
      </Col>
    </Row>
  );
}

export default Jumbotron;