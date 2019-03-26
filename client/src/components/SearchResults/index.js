import React from "react";
import Card from "../Card";

function SearchResults(props) {
  return(
    <div>
      {props.results.map(result => (
        <Card
          key={result.id}
          id={result.id}
          title={result.volumeInfo.title + (result.volumeInfo.subtitle ? (": " + result.volumeInfo.subtitle) : "")}
          authors={result.volumeInfo.authors ? result.volumeInfo.authors : ["No Author Found"]}
          description={result.volumeInfo.description}
          image={result.volumeInfo.imageLinks.thumbnail ? result.volumeInfo.imageLinks.thumbnail : "https://blog.usertesting.com/wp-content/uploads/2015/11/best-books-product-managers.jpg"}
          link={result.volumeInfo.infoLink}
          typeOfBtn={"save"}
          handleBtnClick={props.handleBtnClick}
        />
      ))}
    </div>
  );
}

export default SearchResults;