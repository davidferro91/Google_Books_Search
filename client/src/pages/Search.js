import React, { Component } from "react";
import API from "../utils/API";
import { Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import SearchBar from "../components/SearchBar";
import SearchResults from "../components/SearchResults";
import Loader from "../components/Loader";

class Search extends Component {

  state = {
    search: "",
    books: [],
    results: [],
    error: ""
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.search("How to Read Books")
      .then(res => {
        this.setState({ results: res.data, error: "" });
      })
      .catch(err => this.setState({ error: err.message }));
  }

  handleInputChange = event => {
    this.setState({ search: event.target.value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.search) {
      API.search(this.state.search)
        .then(res => {
          // console.log(res.data);
          this.setState({ results: res.data, error: "" });
        })
        .catch(err => this.setState({ error: err.message }));
    }
  }

  handleBtnClick = id => {
    const chosenBook = this.state.results.filter(result => result.id === id);
    console.log(chosenBook);
    const submitBook = {
      title: chosenBook[0].volumeInfo.title + (chosenBook[0].volumeInfo.subtitle ? (": " + chosenBook[0].volumeInfo.subtitle) : ""),
      authors: chosenBook[0].volumeInfo.authors,
      description: chosenBook[0].volumeInfo.description,
      image: chosenBook[0].volumeInfo.imageLinks.thumbnail,
      link: chosenBook[0].volumeInfo.infoLink
    };
    API.saveBook(submitBook)
      .then(res => {
        console.log(res.data);
        const bookShelf = this.state.books;
        bookShelf.push(res.data);
        this.setState({ books: bookShelf });
        console.log(this.state.books);
      })
      .catch(err => this.setState({ error: err.message }));
  }

  render() {
    return (
      <Container>
        <Jumbotron>Google Books Search</Jumbotron>
        <SearchBar
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />
        {this.state.results === [] ?
          <Loader /> :
          <SearchResults
            handleBtnClick={this.handleBtnClick}
            results={this.state.results}
          />
        }
      </Container>
    );
  }
}

export default Search;