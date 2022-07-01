import React from "react";
import ImgTwo from "../../assets/img/image 2.png";

import "./index.scss";

function CarCardSetup() {
  return (
    <div className="сarCardSetup_container">
      <div className="сarCardSetup_container_carSetup">
        <img
          src={ImgTwo}
          alt="carImg"
          className="сarCardSetup_container_carSetup_img"
        ></img>
        <span className="сarCardSetup_container_carSetup_carName">
          Hyndai, i30 N
        </span>
        <span className="сarCardSetup_container_carSetup_carClass">
          Компакт-кар
        </span>
        <input
          type=""
          placeholder="Введите ссылку ..."
          className="сarCardSetup_container_carSetup_input"
        ></input>
      </div>
      <div className="сarCardSetup_container_progressSetup">
        <div className="сarCardSetup_container_progressSetup_text">
          <span className="сarCardSetup_container_progressSetup_text_completed">
            Заполнено
          </span>
          <span className="сarCardSetup_container_progressSetup_text_percentage">
            74%
          </span>
        </div>
        <progress
          className="сarCardSetup_container_progressSetup_fill"
          max="100"
          value="74"
        ></progress>
      </div>
      <div className="сarCardSetup_container_progressSetup_description">
        <span className="сarCardSetup_container_progressSetup_description_title">
          Описание
        </span>
        <p className="сarCardSetup_container_progressSetup_description_text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio eaque,
          quidem, commodi soluta qui quae quod dolorum sint alias, possimus
          illum assumenda eligendi cumque?
        </p>
      </div>
    </div>
  );
}

export default CarCardSetup;
