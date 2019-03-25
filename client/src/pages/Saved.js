import React, { Component } from "react";
import API from "../utils/API";
import { Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import SavedResults from "../components/SavedResults";

class Saved extends Component {

  state = {
    results: [],
    error: ""
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks()
      .then(res => {
        this.setState({results: res.data});
      })
      .catch(err => this.setState({ error: err.message }));
  }

  handleBtnClick = id => {
    const chosenBook = this.state.results.filter(result => result._id === id);
    console.log(chosenBook);
    API.deleteBook(chosenBook[0]._id)
      .then(res => {
        console.log(res.data);
        this.loadBooks();
      })
      .catch(err => this.setState({ error: err.message }));
  }

  render() {
    return (
      <Container>
        <Jumbotron>Google Books Saved</Jumbotron>
        <SavedResults
          handleBtnClick={this.handleBtnClick}
          results={this.state.results}
        />
      </Container>
    );
  }
}

export default Saved;