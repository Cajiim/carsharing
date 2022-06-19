import React from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setTabIndex } from "../../redux/cart/reducerTableIndex";
import { setOrderNumber } from "../../redux/cart/reducerFinalOrder"
import "./index.scss";

function Modal({ active, setActive }) {
  const dispatch = useDispatch();

  const {
    deliveryСity: cityAuto,
    pointOfIssue: streetAuto,
    colorCar: color,
    durationArend: startDate,
    durationArendTwo: endDate,
    arendTime: arendRate,
    checkFuelState: checkedFuel,
    checkedBabyChairState: checkedBabyChair,
    checkedRightHand,
    modelInCart: model,
  } = useSelector(({ finalOrder }) => finalOrder);

  const { tabIndex } = useSelector(({ tableIndex }) => tableIndex);
  const handlClickButton = () => {
    dispatch(setTabIndex(String(Number(tabIndex) + 1)));
  };

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
  let a = 0;
  let b = 0;
  let c = 0;
  const gas = checkedFuel === true ? (a += 500) : a;
  const baby = checkedBabyChair === true ? (b += 200) : b;
  const rightHand = checkedRightHand === true ? (c += 1600) : c;
  const additional = gas + baby + rightHand;
  const totalPrice = correctPriceRate + additional;
  const arendTimeForBlock = arendRate === "minut" ? diffMinutes : diffDays;
  const orderNumberFunction = () => {
    const now = new Date()
    const year = now.getFullYear();
    let month = now.getMonth() + 1;
    let day = now.getDate();
    let hour = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    String(month).length < 2 ? (month = Number(`0${  month}`)) : month;
    String(day).length < 2 ? (day = Number(`0${  day}`)) : day;
    String(hour).length < 2 ? (hour = Number(`0${  hour}`)) : hour;
    String(minutes).length < 2 ? (minutes = Number(`0${  minutes}`)) : minutes;
    String(seconds).length < 2 ? (seconds = Number(`0${  seconds}`)) : seconds;
    const yyyyMMddHHmmss = `${year}${month}${day}${hour}${minutes}${seconds}`;
    return `${yyyyMMddHHmmss  }_${  Math.random().toString(36).substr(2, 9)}`;
  };

  const orderNumber = orderNumberFunction();
  const handlSelectOrderNumber = () => {
    dispatch(setOrderNumber(orderNumber));
  }
 
  const additionalOptions = {
    orderNumber,
    cityAuto,
    streetAuto,
    colorCarForBlock,
    startDate,
    endDate,
    arendRate,
    checkedFuel,
    checkedBabyChair,
    checkedRightHand,
    tabIndex: '5',
    correctPriceRate,
    rateRent,
    gas,
    baby,
    rightHand,
    additional,
    totalPrice,
    arendTimeForBlock,
  };

  const handleSelectCar = () => {
    axios
      .post(`https://6288c18410e93797c15e9916.mockapi.io/Cars/1/FinalOrder?orderNumber=${orderNumber}`, {
        orderNumber,
        model,
        additionalOptions,
      })
      .then((Response) => console.log(Response, "posting data"))
      .catch((error) => console.log(error));
  };
 /*  function FunctionOrder () {
    handlClickButton().then(handleSelectCar());
  }; */

  return (
    <div className={active ? "modal modal_active" : "modal"}>
      <h3 className="modal__title">Подтвердить заказ</h3>
      <div className="modal__button">
        <form>
          <Link to={`/order/myOrder?orderNumber=${orderNumber}`}>
            <button
              className="modal__button_confirm"
              type="button"
              onClick={() => {
                 handlClickButton();
                 handleSelectCar();
                 handlSelectOrderNumber();
               /*  setTimeout(() => {
                  handleSelectCar();  
                }, 3000);  */
                /* handlClickButton().then(handleSelectCar()); */
              }}
            >
              Подтвердить
            </button>
          </Link>
        </form>
        <form>
          <button
            className="modal__button_refuse"
            onClick={() => setActive(false)}
            type="button"
          >
            Вернуться
          </button>
        </form>
      </div>
    </div>
  );
}

export default Modal;
