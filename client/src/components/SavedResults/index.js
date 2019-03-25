import React from "react";
import Card from "../Card";

function SavedResults(props) {
  return(
    <div>
      {props.results.map(result => (
        <Card
          key={result._id}
          id={result._id}
          title={result.title}
          authors={result.authors}
          description={result.description}
          image={result.image}
          link={result.link}
          typeOfBtn={"delete"}
          handleBtnClick={props.handleBtnClick}
        />
      ))}
    </div>
  );
}

export default SavedResults;