import React from "react";
import classNames from "classnames";
import "./index.scss";

function slideContainer(props) {
  return (
    <div className="slideContainer">
      <h3 className="slideContainer_title">{props.title}</h3>
      <p className="slideContainer_text">{props.text}</p>
      <button
        className={classNames("slideContainer_button_information", [
          props.buttonStyle,
        ])}
        type="button"
      >
        {props.buttonText}
      </button>
    </div>
  );
}

export default slideContainer;
