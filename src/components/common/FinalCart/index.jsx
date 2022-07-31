import { React, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";
import { fetchDataSelectivelyCarOrders } from "../../../redux/dataThunk/fetchDataThunk";
import "./index.scss";

const FinalCart = () => {
  const dispatch = useDispatch();
  moment().format();

  useEffect(() => {
    dispatch(fetchDataSelectivelyCarOrders());
  }, []);

  const { dataSelectOrder } = useSelector(({ getData }) => getData);
  const modelFromBack = dataSelectOrder[0]?.Cars;
  const additionallyOptionsFromBack = dataSelectOrder[0]?.additionalOptions;
  const startDateFromBack = additionallyOptionsFromBack?.startDate;
  const {
    checkFuelState: checkedOne,
    modelInCart: model,
    durationArend: startDate,
    randomFuelLvl,
    carNumber,
  } = useSelector(({ finalOrder }) => finalOrder);

  const nameCar = model?.name === undefined ? modelFromBack?.name : model?.name;
  const modelCar =
    model?.model === undefined ? modelFromBack?.model : model?.model;
  const imgCar =
    model?.imgCar === undefined ? modelFromBack?.imgCar : model?.imgCar;

  const randomFuelLvlForCart =
    additionallyOptionsFromBack?.randomFuelLvl || randomFuelLvl;
  const checkedFuelFromBack = additionallyOptionsFromBack?.checkedFuel;
  const fuelLevel =
    (checkedFuelFromBack !== undefined ? checkedFuelFromBack : checkedOne) ===
    true
      ? "100%"
      : `${randomFuelLvlForCart}%`;
  const carNumberForCart = additionallyOptionsFromBack?.carNumber || carNumber;
  const { tabIndex } = useSelector(({ tableIndex }) => tableIndex);
  const tabIndexFromBack = additionallyOptionsFromBack?.tabIndex;
  const startOfLease = moment(new Date(startDate)).format("DD.MM.YYYY h:mm");
  const startOfLeaseFromBack = moment(new Date(startDateFromBack)).format(
    "DD.MM.YYYY h:mm"
  );
  const lastIndex = tabIndex === "5" || tabIndexFromBack === "5";
  const correctStartDate =
    startDate && startDate !== null
      ? startOfLease.toString()
      : startOfLeaseFromBack.toString();

  return (
    <div className="finalCard">
      <div className="finalCard__main">
        {lastIndex ? (
          <h3 className="finalCard__title">Ваш заказ подтвержден</h3>
        ) : null}
        <p className="finalCard__name">
          {modelCar}, {nameCar}
        </p>
        <div className="finalCard__carNumberBlock">
          <span className="finalCard__carNumberText">
            {carNumberForCart} 73
          </span>
        </div>
        <p className="finalCard__gas">
          <b>Топливо</b> {fuelLevel}
        </p>
        <p className="finalCard__availableTime">
          <b>Доступна с </b>
          {correctStartDate}
        </p>
      </div>
      <img src={imgCar} alt="car" className="finalCard__imgCar"></img>
    </div>
  );
};

export default FinalCart;
