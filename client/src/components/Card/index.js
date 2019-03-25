import React from "react";
import { Col, Row } from "../Grid";
import SaveDeleteBtn from "../SaveDeleteBtn";

function Card(props) {
  return (
    <Row>
      <Col size={"s12"}>
        <div className="card horizontal" key={props.id}>
          <Row>
            <Col size={"s12 m5 l3"} className="card-image waves-effect waves-block waves-light">
              <img style={{ width: "150px" }} src={props.image} alt={props.title} />
            </Col>
            <Col size={"s12 m6 l8"} className="card-content">
              <span className="card-title">{props.title}</span>
              {props.authors.map(author => (
                <p key={author}>{author}</p>
              ))}
              <blockquote>{props.description ? props.description : "No description found, but try the view button!"}</blockquote>
            </Col>
            <Col size={"s12"} className="card-action">
              <a className="waves-effect waves-light btn" href={props.link}><i className="material-icons left">chrome_reader_mode</i>View</a>
              <span>{"  "}</span>
              <SaveDeleteBtn typeOfBtn={props.typeOfBtn} onClick={props.handleBtnClick} key={props.id} id={props.id}/>
            </Col>
          </Row>
        </div>
      </Col>
    </Row>
  );
}

export default Card;