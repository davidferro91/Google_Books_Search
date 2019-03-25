import React from "react";
import { Link } from "react-router-dom";
import { Container } from "../Grid";


function Nav() {
  return (
    <nav>
      <Container>
        <div className="nav-wrapper">
          <Link className="brand-logo" to="/">
            Google Books Search
        </Link>
          <ul id="nav-mobile" className="right">
            <li>
              <Link to="/">Search</Link>
            </li>
            <li>
              <Link to="/saved">Saved</Link>
            </li>
          </ul>
        </div>
      </Container>
    </nav>
  );
}

export default Nav;