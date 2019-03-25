import React from "react";

function SaveDeleteBtn(props) {
  return (
    <button onClick={props.onClick} className={props.typeOfBtn === "save" ? "waves-effect waves-light btn" : "waves-effect waves-light btn red"} id={props.id}>
      <i className="material-icons left">{props.typeOfBtn === "save" ? "save" : "delete"}</i>
      {props.typeOfBtn === "save" ? "Save" : "Delete"}
    </button>
  );
}

export default SaveDeleteBtn;