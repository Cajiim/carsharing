import React from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setTabIndex } from "../../redux/cart/reducerTableIndex";
import "./index.scss";

function Modal({ active, setActive }) {
  const dispatch = useDispatch();

  const tabIndex = useSelector((state) => state.tableIndex.tabIndex);
  const color = useSelector((state) => state.finalOrder.colorCar);
  const startDate = useSelector((state) => state.finalOrder.durationArend);
  const endDate = useSelector((state) => state.finalOrder.durationArendTwo);
  const arendRate = useSelector((state) => state.finalOrder.arendTime);
  const checkedFuel = useSelector((state) => state.finalOrder.checkFuelState);
  const checkedBabyChair = useSelector(
    (state) => state.finalOrder.checkedBabyChairState
  );
  const checkedThree = useSelector((state) => state.finalOrder.checkedThree);
  const model = useSelector((state) => state.finalOrder.modelInCart);

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
  const rightHand = checkedThree === true ? (c += 1600) : c;
  const additional = gas + baby + rightHand;
  const totalPrice = correctPriceRate + additional;
  const arendTimeForBlock = arendRate === "minut" ? diffMinutes : diffDays;

  const additionalOptions = {
    colorCarForBlock,
    startDate,
    endDate,
    arendRate,
    checkedFuel,
    checkedBabyChair,
    checkedThree,
    tabIndex: "5",
    correctPriceRate,
    rateRent,
    gas,
    baby,
    rightHand,
    additional,
    totalPrice,
    arendTimeForBlock,
  };
  /* console.log(additionalOptions); */

  const handlClickButton = () => {
    dispatch(setTabIndex(String(Number(tabIndex) + 1)));
  }; 

  /* console.log(tabIndex); */

  const handleSelectCar = () => {
    axios
      .post("https://6288c18410e93797c15e9916.mockapi.io/FinalOrder", {
        model,
        additionalOptions,
      })
      .then((Response) => console.log(Response, "posting data"))
      .catch((error) => console.log(error));
  };

  /* function handlClickButton() {
    return new Promise(function (resolve) {
      setTimeout(function () {
        dispatch(setTabIndex(String(Number(tabIndex) + 1)));
        resolve();
      }, 10);
    });
  }
  function handleSelectCar() {
    return new Promise(function (resolve) {
      setTimeout(function () {
        axios
          .post("https://6288c18410e93797c15e9916.mockapi.io/FinalOrder", {
            model,
            additionalOptions,
          })
          .then((Response) => console.log(Response, "posting data"))
          .catch((error) => console.log(error));
        resolve();
      }, 40);
    });
  } */

  return (
    <div className={active ? "modal active" : "modal"}>
      <h3 className="modal__title">Подтвердить заказ</h3>
      <div className="modal__button">
        <form>
          <Link to="/myOrder">
            <button
              className="modal__button_confirm"
              type="button"
              onClick={() => {
                handlClickButton();
                handleSelectCar();

                /* handlClickButton().then(handleSelectCar) */
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
