import React, { useState, memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { fetchOrderFilter } from "../../redux/dataThunk/fetchFiltrInputs";
import fetchAllCars from "../../redux/dataThunk/fetchAllCars";
import useParameters from "../../hooks/useParametersCarOrders";
import Select from "../../ui/SelectedList";
import Button from "../../ui/ButtonCarSetting";
import "./index.scss";

const CarOrdersInput = () => {
  const dispatch = useDispatch();
  const [periodOfTimeFromList, setPeriodOfTimeFromList] = useState("");
  const [carNameFromList, setCarNameFromList] = useState("");
  const [cityFromList, setCityFromList] = useState("");
  const [orderStatusFromList, setOrderStatusFromList] = useState("");
  const { setCarOrdersQuery, deleteCarOrdersQuery } = useParameters();
  const { dataOrdersInput } = useSelector(({ filterInputs }) => filterInputs);
  const { dataCars } = useSelector(({ allCars }) => allCars);
  useEffect(() => {
    dispatch(fetchOrderFilter());
    dispatch(fetchAllCars());
  }, []);
  const now = new Date();
  const nowDate = new Date(now).getTime();

  const allPeriodOfTimes = dataOrdersInput.map((el) => {
    if (
      Math.ceil(
        Math.abs(nowDate - new Date(el.additionalOptions.startDate).getTime()) /
          (1000 * 3600 * 24)
      ) < 7
    )
      return "За неделю";
    if (
      Math.ceil(
        Math.abs(nowDate - new Date(el.additionalOptions.startDate).getTime()) /
          (1000 * 3600 * 24)
      ) < 30
    )
      return "За месяц";
    return "За год";
  });
  const allOrderStatus = dataOrdersInput.map((el) =>
    Math.abs(nowDate < new Date(el.additionalOptions.endDate).getTime())
      ? "В процессе"
      : "Завершен"
  );

  const uniquePeriodOfTimes = [...new Set(allPeriodOfTimes)];
  const uniqueCarNames = [
    ...new Set(dataOrdersInput.map((el) => el.Cars?.name)),
  ];
  const uniqueCities = [
    ...new Set(dataOrdersInput.map((el) => el.additionalOptions.cityAuto)),
  ];
  const uniqueOrderStatus = [...new Set(allOrderStatus)];

  const weekMicroseconds = 604800000;
  const periodOfWeek = new Date(now).getTime() - weekMicroseconds;
  const month = 2629700000;
  const periodOfMonth = new Date(now).getTime() - month;
  const year = 31556952000;
  const periodOfYear = new Date(now).getTime() - year;
  const statusPeriod = 1280508033000;
  const endStatusPeriod = nowDate + year;

  const test = dataCars.find((el) => el.name === carNameFromList);
  
  const handlAccept = () => {
    setCarOrdersQuery("CarsId", test?.id);
    if (carNameFromList === "") {
      deleteCarOrdersQuery("CarsId");
    }
    if (periodOfTimeFromList === "За неделю") {
      setCarOrdersQuery(`additionalOptions.startDate_gte`, periodOfWeek);
      setCarOrdersQuery(`additionalOptions.startDate_lte`, nowDate);
    }
    if (periodOfTimeFromList === "За месяц") {
      setCarOrdersQuery(`additionalOptions.startDate_gte`, periodOfMonth);
      setCarOrdersQuery(`additionalOptions.startDate_lte`, nowDate);
    }
    if (periodOfTimeFromList === "За год") {
      setCarOrdersQuery(`additionalOptions.startDate_gte`, periodOfYear);
      setCarOrdersQuery(`additionalOptions.startDate_lte`, nowDate);
    }
    if (periodOfTimeFromList === "") {
      deleteCarOrdersQuery(`additionalOptions.startDate_gte`);
      deleteCarOrdersQuery(`additionalOptions.startDate_lte`);
    }
    setCarOrdersQuery("additionalOptions.cityAuto", cityFromList);
    if (cityFromList === "") {
      deleteCarOrdersQuery("additionalOptions.cityAuto");
    }
    if (orderStatusFromList === "Завершен") {
      setCarOrdersQuery(`additionalOptions.endDate_gte`, statusPeriod);
      setCarOrdersQuery(`additionalOptions.endDate_lte`, nowDate);
    }
    if (orderStatusFromList === "В процессе") {
      setCarOrdersQuery(`additionalOptions.endDate_gte`, nowDate);
      setCarOrdersQuery(`additionalOptions.endDate_lte`, endStatusPeriod);
    }
    if (orderStatusFromList === "") {
      deleteCarOrdersQuery("additionalOptions.endDate_gte");
      deleteCarOrdersQuery("additionalOptions.endDate_lte");
    }
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
        className="buttonApplyNextPosition"
        name="Применить"
      />
    </div>
  );
};

export default memo(CarOrdersInput);
