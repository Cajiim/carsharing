import React from "react";
import { useSelector } from "react-redux";
import "./index.scss";

function carNumber() {
  let number = "";
  const possible = "АБВГДЕЖЗКЛМНОПРСТФХЧШ";
  for (let i = 0; i < 2; i++)
    number += possible.charAt(Math.floor(Math.random() * possible.length));
  return number;
}
function carNumberTwo() {
  let number = "";
  const possible = "АБВГДЕЖЗКЛМНОПРСТФХЧШ";
  for (let i = 0; i < 1; i++)
    number += possible.charAt(Math.floor(Math.random() * possible.length));
  return number;
}

function randomLevel(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function FinalCart() {
  const checkedOne = useSelector((state) => state.finalOrder.checkedFuel);
  const model = useSelector((state) => state.finalOrder.modelInCart);
  const startDate = useSelector((state) => state.finalOrder.durationArend);
  const nameCar = model?.name;
  const modelCar = model?.model;
  const imgCar = model?.img;
  const fuelLevel = checkedOne === true ? "100%" : randomLevel(10, 40) + "%";

  const tabIndex = useSelector((state) => state.tableIndex.tabIndex);

  return (
    <div className="finalCard_container">
      <div className="finalCard_text_content">
        {tabIndex === "5" ? (
          <h3 className="finalCard_container_title">Ваш заказ подтвержден</h3>
        ) : null}
        
        <p className="finalCard_text_content_title">
          {modelCar}, {nameCar}
        </p>
        <div className="finalCard_text_content_carNumber_container">
          <span className="finalCard_text_content_carNumber">
            {carNumberTwo()} {randomLevel(100, 999)} {carNumber()} 73
          </span>
        </div>
        <p className="finalCard_text_content_gas">
          <b>Топливо</b> {fuelLevel}
        </p>
        <p className="finalCard_text_content_availableTime">
          <b>Доступна с</b> {startDate}
        </p>
      </div>
      <img src={imgCar} alt="car" className="finalCard_img"></img>
    </div>
  );
}

export default FinalCart;
