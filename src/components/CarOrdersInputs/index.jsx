import React, { useState, memo } from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import Select from "../../ui/SelectedList";
import Button from "../../ui/ButtonCarSetting";
import {
  setPeriodOfTimeForFiltr,
  setCarNameForFiltr,
  setCityForFiltr,
  setOrderStatusForFiltr,
} from "../../redux/cart/reducerCarOrders";
import "./index.scss";

const CarOrdersInput = ({ contentOrder }) => {
  console.log(contentOrder, "что тут");
  const dispatch = useDispatch();
  const [periodOfTimeFromList, setPeriodOfTimeFromList] = useState("");
  const [carNameFromList, setCarNameFromList] = useState("");
  const [cityFromList, setCityFromList] = useState("");
  const [orderStatusFromList, setOrderStatusFromList] = useState("");

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

  const handlAccept = () => {
    dispatch(setPeriodOfTimeForFiltr(periodOfTimeFromList));
    dispatch(setCarNameForFiltr(carNameFromList));
    dispatch(setCityForFiltr(cityFromList));
    dispatch(setOrderStatusForFiltr(orderStatusFromList));
  };

  return (
    <div className="carOrdersInputs-wrapper">
      <form className="carOrdersInputs-wrapper__container">
        <Select
          handlChange={setPeriodOfTimeFromList}
          text="Период времени"
          uniqueArr={uniquePeriodOfTimes}
        />
        <Select
          handlChange={setCarNameFromList}
          text="Навание машины"
          uniqueArr={uniqueCarNames}
        />
        <Select
          handlChange={setCityFromList}
          text="Город"
          uniqueArr={uniqueCities}
        />
        <Select
          handlChange={setOrderStatusFromList}
          text="Статус заказа"
          uniqueArr={uniqueOrderStatus}
        />
      </form>
      <Button
        handlClick={handlAccept}
        buttonControl="buttons__apply"
        name="Применить"
        active="buttons__apply_nextPosition"
      />
    </div>
  );
};

CarOrdersInput.propTypes = {
  contentOrder: PropTypes.shape([
    {
      id: PropTypes.string,
      orderNumber: PropTypes.string,
      additionalOptions: PropTypes.shape({
        cityAuto: PropTypes.string,
        streetAuto: PropTypes.string,
        color: PropTypes.string,
        startDate: PropTypes.number,
        endDate: PropTypes.number,
        arendRate: PropTypes.string,
        checkedFuel: PropTypes.bool,
        checkedBabyChair: PropTypes.bool,
        checkedRightHand: PropTypes.bool,
        tabIndex: PropTypes.string,
        correctPriceRate: PropTypes.number,
        rateRent: PropTypes.string,
        gas: PropTypes.number,
        baby: PropTypes.number,
        rightHand: PropTypes.number,
        additional: PropTypes.number,
        totalPrice: PropTypes.number,
        arendTimeForBlock: PropTypes.number,
        carNumber: PropTypes.string,
        randomFuelLvl: PropTypes.number,
      }),
      modelCar: PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        minPrice: PropTypes.string,
        maxPrice: PropTypes.string,
        model: PropTypes.string,
        imgCar: PropTypes.string,
        typeCarCart: PropTypes.string,
        descriptionCar: PropTypes.string,
        arrAllColors: PropTypes.arrayOf(PropTypes.string),
      }),
    },
  ]),
};
CarOrdersInput.defaultProps = {
  contentOrder: PropTypes.shape([
    {
      id: "",
      orderNumber: "",
      additionalOptions: PropTypes.shape([
        {
          cityAuto: "",
          streetAuto: "",
          color: "",
          startDate: null,
          endDate: null,
          arendRate: "",
          checkedFuel: false,
          checkedBabyChair: false,
          checkedRightHand: false,
          tabIndex: "",
          correctPriceRate: null,
          rateRent: "",
          gas: null,
          baby: null,
          rightHand: null,
          additional: null,
          totalPrice: null,
          arendTimeForBlock: null,
          carNumber: "",
          randomFuelLvl: null,
        },
      ]),
      modelCar: PropTypes.shape([
        {
          id: "",
          name: "",
          minPrice: "",
          maxPrice: "",
          model: "",
          imgCar: "",
          typeCarCart: "",
          descriptionCar: "",
          arrAllColors: [],
        },
      ]),
    },
  ]),
};

export default memo(CarOrdersInput);
