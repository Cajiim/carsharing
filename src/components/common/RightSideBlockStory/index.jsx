import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import { useSelector, useDispatch } from "react-redux";
import {
  setCarNumber,
  setFuelLvl,
} from "../../../redux/cart/reducerFinalOrder";
import { setTabIndex } from "../../../redux/cart/reducerTableIndex";
import { fetchDataSelectivelyCarOrders } from "../../../redux/dataThunk/fetchDataThunk";
import { deleteFinalOrder } from "../../../api/api";
import Modal from "../../Modal";
import Button from "../../../ui/ButtonFinalOrderBlock";
import style from "./index.scss";

const cn = classNames.bind(style);

const RightSideBlockStory = () => {
  const dispatch = useDispatch();
  const [activeModal, setActiveModal] = useState(false);
  const { dataSelectOrder } = useSelector(({ getData }) => getData);

  useEffect(() => {
    dispatch(fetchDataSelectivelyCarOrders());
  }, []);

  const CarFromBack = dataSelectOrder[0]?.Cars;
  const additionallyOptionsFromBack = dataSelectOrder[0]?.additionalOptions;
  const order = dataSelectOrder[0]?.id;
  const orderId = order || "";
  const handleDelete = () => {
    deleteFinalOrder(orderId)
      .then((res) => console.log("!!!!!delete data", res))
      .catch((error) => console.log(error, "Ошибка"));
  };

  const {
    deliveryСity: cityAuto,
    deliveryChangeCityInput: textCityAutoChange,
    pointOfIssue: streetAuto,
    pointChangeOfIssue: textStreetAutoChange,
    modelInCart: model,
    colorCar: color,
    durationArend: startDate,
    durationArendTwo: endDate,
    arendTime: arendRate,
    checkFuelState: checkedFuel,
    checkedBabyChairState: checkedBabyChair,
    checkedRightHand,
  } = useSelector(({ finalOrder }) => finalOrder);

  const { tabIndex: tabId } = useSelector(({ tableIndex }) => tableIndex);
  function carNumber() {
    let number = "";
    const possible = "АБВГДЕЖЗКЛМНОРСТФХЧШ";
    for (let i = 0; i < 2; i += 1)
      number += possible.charAt(Math.floor(Math.random() * possible.length));
    return number;
  }
  function carNumberTwo() {
    let number = "";
    const possible = "АБВГДЕЖЗКЛМНОРСТФХЧШ";
    for (let i = 0; i < 1; i += 1)
      number += possible.charAt(Math.floor(Math.random() * possible.length));
    return number;
  }
  function randomLevel(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  }
  const numberCarOne = carNumber();
  const numberCarTwo = carNumberTwo();
  const levelFuel = randomLevel(10, 40);
  const randomCarNumber = randomLevel(100, 999);

  function carNumberTotal() {
    return String(
      `${String(numberCarTwo)} ${String(randomCarNumber)} ${String(
        numberCarOne
      )}`
    );
  }

  const minPrice = model?.minPrice;
  const maxPrice = model?.maxPrice;
  const carClass = model?.class;
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
  const cityAutoFromBack = additionallyOptionsFromBack?.cityAuto;
  const streetAutoFromBack = additionallyOptionsFromBack?.streetAuto;
  const colorCarFromBack = additionallyOptionsFromBack?.color;
  const arendTimeFromBack = additionallyOptionsFromBack?.arendTimeForBlock;
  const rentalType = additionallyOptionsFromBack?.arendRate;
  const rateRentFromBack = additionallyOptionsFromBack?.rateRent;
  const checkedFuelFromBack = additionallyOptionsFromBack?.checkedFuel;
  const checkedBabyChairFromBack =
    additionallyOptionsFromBack?.checkedBabyChair;
  const checkedRightHandFromBack =
    additionallyOptionsFromBack?.checkedRightHand;
  const totalPriceFromBack = additionallyOptionsFromBack?.totalPrice;
  const tabIndexFromBack = additionallyOptionsFromBack?.tabIndex;
  const tabIndex = tabIndexFromBack || tabId;

  const handlClickButton = () => {
    dispatch(setTabIndex(String(Number(tabIndex) + 1)));
  };

  const checkModel = model?.name;
  const resultCorrectPriceFromBack = totalPriceFromBack?.toLocaleString();
  const resultCorrectPrice = totalPrice?.toLocaleString();

  const orderedPrice =
    !minPrice && !maxPrice
      ? " от 8 000 до 12 000 "
      : `от ${Number(minPrice).toLocaleString()} до ${Number(
          maxPrice
        ).toLocaleString()}`;

  const handlClickButtonDecrement = () => {
    dispatch(
      setTabIndex(
        String(checkModel ? Number(tabIndex) - 1 : Number(tabIndex) - 4)
      )
    );
  };

  const citySelected =
    cityAutoFromBack ||
    (textCityAutoChange && cityAuto && textCityAutoChange === cityAuto
      ? cityAuto
      : "Выберите город");
  const streetSelected =
    streetAutoFromBack ||
    (textStreetAutoChange && streetAuto && textStreetAutoChange === streetAuto
      ? streetAuto
      : "Выберите пункт выдачи");
  const modelSelected =
    model?.name === undefined ? CarFromBack?.name : model?.name;
  const correctModelModel =
    model?.model === undefined ? CarFromBack?.model : model?.model;
  const correactModelName =
    model?.name === undefined ? CarFromBack?.name : model?.name;
  const colorSelected =
    colorCarFromBack !== undefined ? colorCarFromBack : color;
  const arendTimeSelected =
    (correctPriceRate && startDate < endDate) || totalPriceFromBack;
  const rentalTypeSelect =
    arendTimeFromBack !== undefined ? arendTimeFromBack : arendTimeForBlock;
  const rentalTypeCorrect =
    (rentalType !== undefined ? rentalType : arendRate) === "minut" ? (
      <span>&nbsp;мин.</span>
    ) : (
      <span>&nbsp;д.</span>
    );
  const tarifRateSelected =
    ((priceRate === 0 ? undefined : priceRate) &&
      startDate !== undefined &&
      endDate !== undefined) ||
    rateRentFromBack;

  const fullGasSelected =
    checkedFuelFromBack !== undefined ? checkedFuelFromBack : checkedFuel;

  const babyChairSelected =
    checkedBabyChairFromBack !== undefined
      ? checkedBabyChairFromBack
      : checkedBabyChair;

  const rightHandSelected =
    checkedRightHandFromBack !== undefined
      ? checkedRightHandFromBack
      : checkedRightHand;

  const correctPriceSelect =
    resultCorrectPriceFromBack ||
    (startDate && endDate && startDate < endDate
      ? resultCorrectPrice
      : orderedPrice);

  const modelButtonDisabled =
    textCityAutoChange &&
    cityAuto &&
    textCityAutoChange === cityAuto &&
    textStreetAutoChange &&
    streetAuto &&
    textStreetAutoChange === streetAuto;

  const totalSelect =
    endDate === null ||
    Number.isNaN(endDate) ||
    startDate === null ||
    Number.isNaN(startDate) ||
    endDate <= startDate ||
    color === null;
  const handlClickButtonTotal = () => {
    dispatch(setCarNumber(carNumberTotal()));
    dispatch(setFuelLvl(levelFuel));
    dispatch(setTabIndex(String(Number(tabIndex) + 1)));
  };
  const handlClickOrder = () => setActiveModal(true);

  return (
    <div className="orderBlock">
      <Modal active={activeModal} setActive={setActiveModal} />
      <p className="orderBlock__nameBlock">Ваш заказ:</p>
      <ul className="orderBlock__mainList">
        <li className="orderBlock__line">
          <span className="orderBlock__nameLine">Пункт выдачи</span>
          <div></div>
          <p className="orderBlock__textContainer">
            <span className="orderBlock__text">{citySelected},</span>
            <span className="orderBlock__text">{streetSelected}</span>
          </p>
        </li>
        {modelSelected && (
          <li className="orderBlock__line">
            <span className="orderBlock__nameLine">Модель</span>
            <div></div>
            <p className="orderBlock__textContainer">
              <span className="orderBlock__text">
                {correctModelModel}, {correactModelName}
              </span>
            </p>
          </li>
        )}
        {(colorCarFromBack || color) && (
          <li className="orderBlock__line">
            <span className="orderBlock__nameLine">Цвет</span>
            <div></div>
            <p className="orderBlock__textContainer">
              <span className="orderBlock__text">{colorSelected}</span>
            </p>
          </li>
        )}
        {arendTimeSelected && (
          <li className="orderBlock__line">
            <span className="orderBlock__nameLine">Длительность аренды</span>
            <div></div>
            <p className="orderBlock__textContainer">
              <span className="orderBlock__text">
                {rentalTypeSelect}
                {rentalTypeCorrect}
              </span>
            </p>
          </li>
        )}
        {tarifRateSelected && (
          <li className="orderBlock__line">
            <span className="orderBlock__nameLine">Тариф</span>
            <div></div>
            <p className="orderBlock__textContainer">
              <span className="orderBlock__text">
                {rateRentFromBack !== undefined ? rateRentFromBack : rateRent}
              </span>
            </p>
          </li>
        )}
        {!fullGasSelected ? null : (
          <li className="orderBlock__line">
            <span className="orderBlock__nameLine">Полный бак</span>
            <div></div>
            <p className="orderBlock__textContainer">
              <span className="orderBlock__text">Да</span>
            </p>
          </li>
        )}
        {!babyChairSelected ? null : (
          <li className="orderBlock__line">
            <span className="orderBlock__nameLine">Детское кресло</span>
            <div></div>
            <p className="orderBlock__textContainer">
              <span className="orderBlock__text">Да</span>
            </p>
          </li>
        )}
        {!rightHandSelected ? null : (
          <li className="orderBlock__line">
            <span className="orderBlock__nameLine">Правый руль</span>
            <div></div>
            <p className="orderBlock__textContainer">
              <span className="orderBlock__text">Да</span>
            </p>
          </li>
        )}
      </ul>

      <div className="orderBlock__priceContent">
        <span className="orderBlock__priceText">Цена:</span>
        &nbsp;
        {correctPriceSelect}
        &nbsp;₽
      </div>

      <Button
        handlClick={handlClickButton}
        className="buttonFinalOrder"
        isDisabled={!modelButtonDisabled}
        isHidden={tabIndex !== "1"}
        name="Выбрать модель"
      />
      <Button
        handlClick={handlClickButton}
        className="buttonFinalOrder"
        isDisabled={model === null}
        isHidden={tabIndex !== "2"}
        name="Дополнительно"
      />
      <Button
        handlClick={handlClickButtonTotal}
        className="buttonFinalOrder"
        isDisabled={totalSelect}
        isHidden={tabIndex !== "3"}
        name="Итого"
      />
      <Button
        handlClick={handlClickOrder}
        className="buttonFinalOrder"
        isHidden={tabIndex !== "4"}
        name="Заказать"
      />
      <Link
        to="/order"
        className={cn("orderBlock__buttonCancel", {
          orderBlock__buttonCancel_hidden: tabIndex !== "5",
        })}
        onClick={() => {
          handleDelete();
          handlClickButtonDecrement();
        }}
      >
        Отменить
      </Link>
    </div>
  );
};

export default RightSideBlockStory;
