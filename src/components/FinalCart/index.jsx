import React from "react";
import './index.scss'
import imgCar from "../../assets/img/image 2.png";

function FinalCart() {
  return (
    <div className="finalCard_container">
      <div className="finalCard_text_content">
        <p className="finalCard_text_content_title">Hyndai, i30 N</p>
        <div className="finalCard_text_content_carNumber_container">
        <p className="finalCard_text_content_carNumber">К 761 НА 73</p>
        </div>
        <p className="finalCard_text_content_gas"><b>Топливо</b> 100%</p>
        <p className="finalCard_text_content_availableTime">
          <b>Доступна с</b> 12.06.2019 12:00
        </p>
      </div>
      <img src={imgCar} alt="car" className="finalCard_img"></img>
    </div>
  );
}

export default FinalCart;
