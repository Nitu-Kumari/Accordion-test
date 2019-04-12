import React from "react";
function List(props) {
  return (
    <ul className="holder">
      <li
        className="title"
        onClick={() => props.handleChange(props.index)}>{props.title}</li>
      {props.currentIndex === props.index &&
        <li className="detail">{props.detail}</li>}
    </ul>
  );
}
export default List;