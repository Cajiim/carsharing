import {React, useState} from "react";

import { useSelector, useDispatch } from "react-redux";
import { setTabIndex } from "../../redux/cart/reducerTableIndex";
import Modal from "../Modal";
import "./index.scss";

function RightSideBlockStory() {
  /* const {
    model,
    color,
    startDate,
    endDate,
    arendRate,
    checkedOne,
    checkedTwo,
    checkedThree,
  } = useSelector(
    (state) => state.finalOrder
  );  */

  const model = useSelector((state) => state.finalOrder.modelInCart);

  const color = useSelector((state) => state.finalOrder.colorCar);
  const startDate = useSelector((state) => state.finalOrder.durationArend);
  const endDate = useSelector((state) => state.finalOrder.durationArendTwo);
  const arendRate = useSelector((state) => state.finalOrder.arendTime);
  const checkedFuel = useSelector((state) => state.finalOrder.checkFuelState);
  const checkedBabyChair = useSelector((state) => state.finalOrder.checkedBabyChairState);
  const checkedThree = useSelector((state) => state.finalOrder.checkedThree);

  const dispatch = useDispatch();

  const tabIndex = useSelector((state) => state.tableIndex.tabIndex);
  /* const tabIndexe = (String(Number(tabIndex) + 1));
  console.log(tabIndexe)  */

  const handlClickButton = () => {
    dispatch(setTabIndex((String(Number(tabIndex) + 1))));
  };
  const handlClickButtonDecrement = () => {
    dispatch(setTabIndex((String(Number(tabIndex) - 1))))
  }

  const minPrice = model?.minPrice;
  const maxPrice = model?.maxPrice;
  const carClass = model?.class;

  const colorCarForBlock =
    color === null
      ? "Любой"
      : color === "red"
      ? "Красный"
      : color === "blue"
      ? "Голубой"
      : "Любой";

  const diffTime = Math.abs(
    new Date(endDate).getTime() - new Date(startDate).getTime()
  );
  const diffDays = Math.ceil(diffTime / (1000 * 3600 * 24));
  const diffMinutes = Math.ceil(diffTime / (1000 * 60));

  const priceRate = arendRate === "minut" ? 7 * diffMinutes : 1999 * diffDays;
  const rateRent = arendRate === "minut" ? "Поминутно" : "На сутки";
  const correctPriceRate =
    carClass === "business" ? 10000 + priceRate : 12000 + priceRate;
  /*  console.log(rateRent); */
  let a = 0;
  let b = 0;
  let c = 0;
  const gas = checkedFuel === true ? (a += 500) : a;
  const baby = checkedBabyChair === true ? (b += 200) : b;
  const rightHand = checkedThree === true ? (c += 1600) : c;
  const additional = gas + baby + rightHand;
  const totalPrice = correctPriceRate + additional;

  const arendTimeForBlock = arendRate === "minut" ? diffMinutes : diffDays;

  const [activeModal, setActiveModal] = useState(false);

  return (
    <div className="rightSideBlock_container">

      <Modal active={activeModal} setActive={setActiveModal} />

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
                {model?.model}, {model?.name}
              </span>
            </p>
          </li>
        )}
        {((((diffDays === 0 ? undefined : diffDays) ||
          (diffMinutes === 0 ? undefined : diffMinutes)) &&
          startDate !== null &&
          endDate !== null) ||
          color) && (
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
        {checkedFuel === false ? null : (
          <li className="rightSideBlock__text">
            <span className="rightSideBlock__text_post">Полный бак</span>
            <div></div>
            <p className="rightSideBlock__text_city-street">
              <span className="rightSideBlock__text_city_street">Да</span>
            </p>
          </li>
        )}
        {checkedBabyChair === false ? null : (
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
        Цена:{" "}
        {startDate !== null && endDate !== null
          ? totalPrice
          : minPrice === undefined && maxPrice === undefined
          ? null
          : minPrice + "-" + maxPrice}{" "}
        Р
      </b>
      {tabIndex === "1" ? (
        <button
          className="rightSideBlock__button"
          onClick={() => handlClickButton()} 
        >
          Выбрать модель
        </button>
      ) : tabIndex === "2" ? (
        <button
          onClick={() => handlClickButton()}
          className={
            model === null
              ? "rightSideBlock__button_disabled"
              : "rightSideBlock__button"
          }
        >
          Дополнительно
        </button>
      ) : tabIndex === "3" ? (
        <button
          onClick={() => handlClickButton()}
          className={
            (startDate && endDate) === null
              ? "rightSideBlock__button_disabled"
              : "rightSideBlock__button"
          }
        >
          Итого
        </button>
      ) : tabIndex === '4' ? (
        <button
          className="rightSideBlock__button"
          onClick={() => setActiveModal(true)}
        >
          Заказать
        </button>
      ) : (<button
        className="rightSideBlock__button_cancel"
        onClick={() => handlClickButtonDecrement()} 
      >
        Отменить
      </button>)}
      
    </div>
  );
}

export default RightSideBlockStory;
