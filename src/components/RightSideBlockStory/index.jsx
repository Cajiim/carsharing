import React from "react";

import { useSelector } from "react-redux";
import "./index.scss";

function RightSideBlockStory() {
  const model = useSelector((state) => state.cart.modelInCart);

  const price = model?.price;
  const carClass = model?.class;
  const color = useSelector((state) => state.color.colorCar);
  const colorCarForBlock =
    color === null
      ? "Любой"
      : color === "red"
      ? "Красный"
      : color === "blue"
      ? "Голубой"
      : "Любой";

  const startDate = useSelector((state) => state.durationOne.durationArend);

  const endDate = useSelector((state) => state.durationTwo.durationArendTwo);
  const arendRate = useSelector((state) => state.arendTime.arendTime);
  const checkedOne = useSelector((state) => state.checkedOne.checkedOne);
  const checkedTwo = useSelector((state) => state.checkedTwo.checkedTwo);
  const checkedThree = useSelector((state) => state.checkedThree.checkedThree);

  const diffTime = Math.abs(
    new Date(endDate).getTime() - new Date(startDate).getTime()
  );
  const diffDays = Math.ceil(diffTime / (1000 * 3600 * 24));

  const diffMinutes = Math.ceil(diffTime / (1000 * 60));

  const priceRate = arendRate === "minut" ? 7 * diffMinutes : 1999 * diffDays;
  const rateRent = arendRate === "minut" ? "Поминутно" : "На сутки";
  const correctPriceRate =
    carClass === "business" ? 10000 + priceRate : 12000 + priceRate;

  let a = 0;
  let b = 0;
  let c = 0;
  const gas = checkedOne === true ? (a += 500) : a;
  const baby = checkedTwo === true ? (b += 200) : b;
  const rightHand = checkedThree === true ? (c += 1600) : c;
  const additional = gas + baby + rightHand;
  const totalPrice = correctPriceRate + additional;

  const arendTimeForBlock = arendRate === "minut" ? diffMinutes : diffDays;

  return (
    <div className="rightSideBlock_container">
      <h4 className="rightSideBlock_container_order">Ваш заказ:</h4>
      <ul className="rightSideBlock_content clear">
        <li className="rightSideBlock__text">
          <span className="rightSideBlock__text_post">Пункт выдачи</span>
          <div></div>
          <p className="rightSideBlock__text_city-street">
            <span className="rightSideBlock__text_city_street">Ульяновск,</span>
            <span className="rightSideBlock__text_city_street">
              Нариманова 42
            </span>
          </p>
        </li>
        {model?.name && (
          <li className="rightSideBlock__text">
            <span className="rightSideBlock__text_post">Модель</span>
            <div></div>
            <p className="rightSideBlock__text_city-street">
              <span className="rightSideBlock__text_city_street">
                {model?.name}
              </span>
            </p>
          </li>
        )}
        {(((diffDays === 0 ? undefined : diffDays) ||
          (diffMinutes === 0 ? undefined : diffMinutes)) &&
          startDate !== null &&
          endDate !== null || color) && (
          <li className="rightSideBlock__text">
            <span className="rightSideBlock__text_post">Цвет</span>
            <div></div>
            <p className="rightSideBlock__text_city-street">
              <span className="rightSideBlock__text_city_street">
                {colorCarForBlock}
              </span>
            </p>
          </li>
        )}
        {((diffDays === 0 ? undefined : diffDays) ||
          (diffMinutes === 0 ? undefined : diffMinutes)) &&
          startDate !== null &&
          endDate !== null && (
            <li className="rightSideBlock__text">
              <span className="rightSideBlock__text_post">
                Длительность аренды
              </span>
              <div></div>
              <p className="rightSideBlock__text_city-street">
                <span className="rightSideBlock__text_city_street">
                  {arendTimeForBlock}{" "}
                  {arendRate === "minut" ? <span>мин.</span> : <span>д.</span>}
                </span>
              </p>
            </li>
          )}
        {(priceRate === 0 ? undefined : priceRate) &&
          startDate !== null &&
          endDate !== null && (
            <li className="rightSideBlock__text">
              <span className="rightSideBlock__text_post">Тариф</span>
              <div></div>
              <p className="rightSideBlock__text_city-street">
                <span className="rightSideBlock__text_city_street">
                  {rateRent}
                </span>
              </p>
            </li>
          )}
        {checkedOne === false ? null : (
          <li className="rightSideBlock__text">
            <span className="rightSideBlock__text_post">Полный бак</span>
            <div></div>
            <p className="rightSideBlock__text_city-street">
              <span className="rightSideBlock__text_city_street">Да</span>
            </p>
          </li>
        )}
        {checkedTwo === false ? null : (
          <li className="rightSideBlock__text">
            <span className="rightSideBlock__text_post">Детское кресло</span>
            <div></div>
            <p className="rightSideBlock__text_city-street">
              <span className="rightSideBlock__text_city_street">Да</span>
            </p>
          </li>
        )}
        {checkedThree === false ? null : (
          <li className="rightSideBlock__text">
            <span className="rightSideBlock__text_post">Правый руль</span>
            <div></div>
            <p className="rightSideBlock__text_city-street">
              <span className="rightSideBlock__text_city_street">Да</span>
            </p>
          </li>
        )}
      </ul>
      <b className="rightSideBlock__price">
        Цена: {startDate !== null && endDate !== null ? totalPrice : price} Р
        {/* (priceRate === 0 ? undefined : priceRate) && ((startDate !== null) && (endDate !== null)) && totalPrice) */}
        {/* totalPrice != 10000 ? totalPrice : totalPrice != 12000 ? totalPrice : price} */}{" "}
      </b>
      <button className="rightSideBlock__button" type="button">
        Выбрать модель
      </button>
    </div>
  );
}

export default RightSideBlockStory;
