import React from "react";
import { Row, Col } from "../Grid";

function SearchBar(props) {
  return (
      <form>
        <Row>
          <Col size={"s12"}>
            <div className="input-field">
              <input 
                id="search" 
                type="text" 
                required 
                placeholder="Search"
                value = {props.search}
                onChange = {props.handleInputChange}
              />
            </div>
          </Col>
        </Row>
        <Row>
          <button className="btn waves-effect waves-light" type="submit" onClick={props.handleFormSubmit}>Search
            <i className="material-icons right">send</i>
          </button>
        </Row>
      </form>
  );
}

export default SearchBar;
