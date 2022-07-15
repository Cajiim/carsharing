import React, { useState } from "react";
import classNames from "classnames";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import {
  setPeriodOfTimeForFiltr,
  setCarNameForFiltr,
  setCityForFiltr,
  setOrderStatusForFiltr,
} from "../../redux/cart/reducerCarOrders";
import dropDown from "../../assets/svg/adminPanelSvg/dropDown.svg";
import style from "./index.scss";

const cn = classNames.bind(style);

function CarOrdersInput({ contentOrder }) {
  CarOrdersInput.propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    contentOrder: PropTypes.array,
  };
  CarOrdersInput.defaultProps = {
    contentOrder: [],
  };

  const [periodOfTimeFromList, setPeriodOfTimeFromList] = useState("");
  const [carNameFromList, setCarNameFromList] = useState("");
  const [cityFromList, setCityFromList] = useState("");
  const [orderStatusFromList, setOrderStatusFromList] = useState("");

  const [periodOfTimeList, setPeriodOfTimeList] = useState(false);
  const [carNameList, setCarNameList] = useState(false);
  const [cityList, setCityList] = useState(false);
  const [orderStatusList, setOrderStatusList] = useState(false);

  const dispatch = useDispatch();

  const now = new Date();

  const allPeriodOfTimes = contentOrder.map((el) => {
    if (
      Math.ceil(
        Math.abs(
          new Date(now).getTime() -
            new Date(el.additionalOptions.startDate).getTime()
        ) /
          (1000 * 3600 * 24)
      ) < 7
    )
      return "За неделю";
    if (
      Math.ceil(
        Math.abs(
          new Date(now).getTime() -
            new Date(el.additionalOptions.startDate).getTime()
        ) /
          (1000 * 3600 * 24)
      ) < 30
    )
      return "За месяц";
    return "За год";
  });

  const allCarNames = contentOrder.map((el) => el.modelCar.name);
  const allCities = contentOrder.map((el) => el.additionalOptions.cityAuto);
  const allOrderStatus = contentOrder.map((el) =>
    Math.abs(
      new Date(now).getTime() < new Date(el.additionalOptions.endDate).getTime()
    )
      ? "В процессе"
      : "Завершен"
  );

  const uniquePeriodOfTimes = [...new Set(allPeriodOfTimes)];
  const uniqueCarNames = [...new Set(allCarNames)];
  const uniqueCities = [...new Set(allCities)];
  const uniqueOrderStatus = [...new Set(allOrderStatus)];

  return (
    <div className="carOrdersInputs">
      <div className="carOrdersInputs_container">
        <div className="carOrdersInputs_container_time">
          <input
            className="carOrdersInputs_container_time_input"
            value={periodOfTimeFromList}
            placeholder="Период времени"
            onClick={() => setPeriodOfTimeList(!periodOfTimeList)}
            onChange={(e) => setPeriodOfTimeFromList(e.target.value)}
          ></input>
          <img
            src={dropDown}
            alt="dropDown"
            className="carOrdersInputs_container_time_img"
            onClick={() => setPeriodOfTimeList(!periodOfTimeList)}
          ></img>
          <ul
            className={cn("carOrdersInputs_container_time_list", {
              carOrdersInputs_container_time_list_active: periodOfTimeList,
            })}
          >
            {uniquePeriodOfTimes &&
              uniquePeriodOfTimes.map((el) => (
                <li
                  key={el.toString()}
                  className="carOrdersInputs_container_time_list_string"
                  onClick={() => {
                    setPeriodOfTimeFromList(el);
                    setPeriodOfTimeList(false);
                  }}
                >
                  {el}
                </li>
              ))}
          </ul>
        </div>

        <div className="carOrdersInputs_container_carName">
          <input
            className="carOrdersInputs_container_carName_input"
            value={carNameFromList}
            placeholder="Название машины"
            onClick={() => setCarNameList(!carNameList)}
            onChange={(e) => setCarNameFromList(e.target.value)}
          ></input>
          <img
            src={dropDown}
            alt="dropDown"
            className="carOrdersInputs_container_carName_img"
            onClick={() => setCarNameList(!carNameList)}
          ></img>
          <ul
            className={cn("carOrdersInputs_container_carName_list", {
              carOrdersInputs_container_carName_list_active: carNameList,
            })}
          >
            {uniqueCarNames.map((el) => (
              <li
                key={el.toString()}
                className="carOrdersInputs_container_carName_list_string"
                onClick={() => {
                  setCarNameFromList(el);
                  setCarNameList(false);
                }}
              >
                {el}
              </li>
            ))}
          </ul>
        </div>

        <div className="carOrdersInputs_container_city">
          <input
            className="carOrdersInputs_container_city_input"
            value={cityFromList}
            placeholder="Город"
            onClick={() => setCityList(!cityList)}
            onChange={(e) => setCityFromList(e.target.value)}
          ></input>
          <img
            src={dropDown}
            alt="dropDown"
            className="carOrdersInputs_container_city_img"
            onClick={() => setCityList(!cityList)}
          ></img>
          <ul
            className={cn("carOrdersInputs_container_city_list", {
              carOrdersInputs_container_city_list_active: cityList,
            })}
          >
            {uniqueCities.map((el) => (
              <li
                key={el.toString()}
                className="carOrdersInputs_container_city_list_string"
                onClick={() => {
                  setCityFromList(el);
                  setCityList(false);
                }}
              >
                {el}
              </li>
            ))}
          </ul>
        </div>

        <div className="carOrdersInputs_container_orderStatus">
          <input
            className="carOrdersInputs_container_orderStatus_input"
            value={orderStatusFromList}
            placeholder="Статус заказа"
            onClick={() => setOrderStatusList(!orderStatusList)}
            onChange={(e) => setOrderStatusFromList(e.target.value)}
          ></input>
          <img
            src={dropDown}
            alt="dropDown"
            className="carOrdersInputs_container_orderStatus_img"
            onClick={() => setOrderStatusList(!orderStatusList)}
          ></img>
          <ul
            className={cn("carOrdersInputs_container_orderStatus_list", {
              carOrdersInputs_container_orderStatus_list_active:
                orderStatusList,
            })}
          >
            {uniqueOrderStatus.map((el) => (
              <li
                key={el.toString()}
                className="carOrdersInputs_container_orderStatus_list_string"
                onClick={() => {
                  setOrderStatusFromList(el);
                  setOrderStatusList(false);
                }}
              >
                {el}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <button
        type="button"
        className="carOrdersInputs_container_bottonApply"
        onClick={() => {
          dispatch(setPeriodOfTimeForFiltr(periodOfTimeFromList));
          dispatch(setCarNameForFiltr(carNameFromList));
          dispatch(setCityForFiltr(cityFromList));
          dispatch(setOrderStatusForFiltr(orderStatusFromList));
        }}
      >
        Применить
      </button>
    </div>
  );
}

export default CarOrdersInput;
