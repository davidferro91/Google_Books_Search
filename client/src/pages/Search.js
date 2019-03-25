import React, { Component } from "react";
import API from "../utils/API";
import { Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import SearchBar from "../components/SearchBar";
import SearchResults from "../components/SearchResults";

class Search extends Component {

  state = {
    search: "",
    books: [],
    results: [],
    error: ""
  };

  handleInputChange = event => {
    this.setState({ search: event.target.value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.search) {
      API.search(this.state.search)
        .then(res => {
          console.log(res.data);
          this.setState({ results: res.data, error: "" });
        })
        .catch(err => this.setState({ error: err.message }));
    }
  }

  handleBtnClick = () => {

  }

  render() {
    return (
      <Container>
        <Jumbotron>Google Books Search</Jumbotron>
        <SearchBar
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />
        <SearchResults
          handleBtnClick={this.handleBtnClick}
          results={this.state.results}
        />
      </Container>
    )
  }
}

export default Search;