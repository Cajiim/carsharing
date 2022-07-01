import React from "react";
import classNames from "classnames";
import style from "./index.scss";

const cn = classNames.bind(style);

function slideContainer(props) {
  return (
    <div className="slideContainer">
      <h3 className="slideContainer_title">{props.title}</h3>
      <p className="slideContainer_text">{props.text}</p>
      <button
        className={cn("slideContainer_button_information", [props.buttonStyle])}
        type="button"
      >
        {props.buttonText}
      </button>
    </div>
  );
}

export default slideContainer;
