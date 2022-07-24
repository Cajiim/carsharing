import React, {memo} from "react";
import axios from "axios";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setOrderNumber } from "../../redux/cart/reducerFinalOrder";
import {setTabIndex} from '../../redux/cart/reducerTableIndex'
import "./index.scss";

const Modal = ({ active, setActive }) => {

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
    modelInCart: modelCar,
    carNumber,
    randomFuelLvl,
  } = useSelector(({ finalOrder }) => finalOrder);
  const {tabIndex} = useSelector(({ tableIndex }) => tableIndex);
  
  const carClass = modelCar?.class;
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

  const orderNumber = uuidv4();
  const handlSelectOrderNumber = () => {
    dispatch(setOrderNumber(orderNumber));
  };

  const additionalOptions = {
    cityAuto,
    streetAuto,
    color,
    startDate,
    endDate,
    arendRate,
    checkedFuel,
    checkedBabyChair,
    checkedRightHand,
    tabIndex: "5",
    correctPriceRate,
    rateRent,
    gas,
    baby,
    rightHand,
    additional,
    totalPrice,
    arendTimeForBlock,
    carNumber,
    randomFuelLvl,
  };

  const handleSelectCar = () => {
    axios
      .post(
        `https://6288c18410e93797c15e9916.mockapi.io/FinalOrder?orderNumber=${orderNumber}`,
        {
          orderNumber,
          modelCar,
          additionalOptions,
        }
      )
      .then((Response) => console.log(Response, "posting data"))
      .catch((error) => console.log(error));
  };

  const handlClickButton = () => {
    dispatch(setTabIndex(String(Number(tabIndex) + 1)));
  };

  return (
    <div className={active ? "modal modal_active" : "modal"}>
      <h3 className="modal__title">Подтвердить заказ</h3>
      <div className="modal__button">
        <form>
          <Link
            to={`/myOrder?orderNumber=${orderNumber}`}
            className="modal__button_confirm"
            onClick={() => {
              handleSelectCar();
              handlSelectOrderNumber();
              handlClickButton();
            }}
          >
            Подтвердить
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

Modal.propTypes = {
  active: PropTypes.bool,
  setActive: PropTypes.func,
};
Modal.defaultProps = {
  active: false,
  setActive: () => {},
};

export default memo(Modal);
