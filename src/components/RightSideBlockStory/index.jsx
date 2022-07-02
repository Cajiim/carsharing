import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import classNames from "classnames";
import { useSelector, useDispatch } from "react-redux";
import { setCarNumber, setFuelLvl } from "../../redux/cart/reducerFinalOrder";
import { setTabIndex } from "../../redux/cart/reducerTableIndex";

import Modal from "../Modal";
import style from "./index.scss";

const cn = classNames.bind(style);

function RightSideBlockStory() {
  const dispatch = useDispatch();
  const [contentModel, setContentModel] = useState([]);

  async function fetchData() {
    const url = window.location.href
      .slice(window.location.href.indexOf("?"))
      .split(/[&?]{1}[\w\d]+=/);
    try {
      axios
        .get(
          `https://6288c18410e93797c15e9916.mockapi.io/FinalOrder?search=${
            url[1] ? url[1] : null
          }`
        )
        .then((response) => {
          axios
            .get(
              `https://6288c18410e93797c15e9916.mockapi.io/Cars/${
                response.data[0] ? response.data[0].model : ""
              }`
            )
            .then((res) => {
              const fullOrder = response.data[0] ? response.data[0] : null;
              if (fullOrder !== null) {
                fullOrder.model = res.data;
              }

              setContentModel(fullOrder);
            });
        });
    } catch (error) {
      console.error(error);
    }
  }

  function idNumber() {
    const y = contentModel?.id;
    return y;
  }

  useEffect(() => {
    fetchData();
    fetchData(() => {
      idNumber();
    });
  }, []);

  const CarFromBack = contentModel?.model;
  const additionallyOptionsFromBack = contentModel?.additionalOptions;

  const handleDelete = () => {
    axios
      .delete(
        `https://6288c18410e93797c15e9916.mockapi.io/FinalOrder/${idNumber()}`
      )
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
  const handlClickButtonTotal = () => {
    dispatch(setCarNumber(carNumberTotal()));
    dispatch(setFuelLvl(levelFuel));
  };

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

  const [activeModal, setActiveModal] = useState(false);

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
      : `от ${minPrice} до ${maxPrice}`;

  const handlClickButtonDecrement = () => {
    dispatch(
      setTabIndex(
        String(checkModel ? Number(tabIndex) - 1 : Number(tabIndex) - 4)
      )
    );
  };
  return (
    <div className="rightSideBlock_container">
      <Modal active={activeModal} setActive={setActiveModal} />
      <h4 className="rightSideBlock_container_order">Ваш заказ:</h4>
      <ul className="rightSideBlock_content clear">
        <li className="rightSideBlock__text">
          <span className="rightSideBlock__text_name">Пункт выдачи</span>
          <div></div>
          <p className="rightSideBlock__text_container">
            <span className="rightSideBlock__text_container_content">
              {cityAutoFromBack ||
                (textCityAutoChange &&
                cityAuto &&
                textCityAutoChange === cityAuto
                  ? cityAuto
                  : "Выберите город")}
              ,
            </span>
            <span className="rightSideBlock__text_container_content">
              {streetAutoFromBack ||
                (textStreetAutoChange &&
                streetAuto &&
                textStreetAutoChange === streetAuto
                  ? streetAuto
                  : "Выберите пункт выдачи")}
            </span>
          </p>
        </li>

        {(model?.name === undefined ? CarFromBack?.name : model?.name) && (
          <li className="rightSideBlock__text">
            <span className="rightSideBlock__text_name">Модель</span>
            <div></div>
            <p className="rightSideBlock__text_container">
              <span className="rightSideBlock__text_container_content">
                {model?.model === undefined ? CarFromBack?.model : model?.model}
                , {model?.name === undefined ? CarFromBack?.name : model?.name}
              </span>
            </p>
          </li>
        )}

        {(colorCarFromBack || color) && (
          <li className="rightSideBlock__text">
            <span className="rightSideBlock__text_name">Цвет</span>
            <div></div>
            <p className="rightSideBlock__text_container">
              <span className="rightSideBlock__text_container_content">
                {colorCarFromBack !== undefined ? colorCarFromBack : color}
              </span>
            </p>
          </li>
        )}

        {((correctPriceRate && startDate < endDate) || totalPriceFromBack) && (
          <li className="rightSideBlock__text">
            <span className="rightSideBlock__text_name">
              Длительность аренды
            </span>
            <div></div>
            <p className="rightSideBlock__text_container">
              <span className="rightSideBlock__text_container_content">
                {arendTimeFromBack !== undefined
                  ? arendTimeFromBack
                  : arendTimeForBlock}
                {(rentalType !== undefined ? rentalType : arendRate) ===
                "minut" ? (
                  <span>&nbsp;мин.</span>
                ) : (
                  <span>&nbsp;д.</span>
                )}
              </span>
            </p>
          </li>
        )}
        {(((priceRate === 0 ? undefined : priceRate) &&
          startDate !== undefined &&
          endDate !== undefined) ||
          rateRentFromBack) && (
          <li className="rightSideBlock__text">
            <span className="rightSideBlock__text_name">Тариф</span>
            <div></div>
            <p className="rightSideBlock__text_container">
              <span className="rightSideBlock__text_container_content">
                {rateRentFromBack !== undefined ? rateRentFromBack : rateRent}
              </span>
            </p>
          </li>
        )}
        {(checkedFuelFromBack !== undefined
          ? checkedFuelFromBack
          : checkedFuel) === false ? null : (
          <li className="rightSideBlock__text">
            <span className="rightSideBlock__text_name">Полный бак</span>
            <div></div>
            <p className="rightSideBlock__text_container">
              <span className="rightSideBlock__text_container_content">Да</span>
            </p>
          </li>
        )}
        {(checkedBabyChairFromBack !== undefined
          ? checkedBabyChairFromBack
          : checkedBabyChair) === false ? null : (
          <li className="rightSideBlock__text">
            <span className="rightSideBlock__text_name">Детское кресло</span>
            <div></div>
            <p className="rightSideBlock__text_container">
              <span className="rightSideBlock__text_container_content">Да</span>
            </p>
          </li>
        )}
        {(checkedRightHandFromBack !== undefined
          ? checkedRightHandFromBack
          : checkedRightHand) === false ? null : (
          <li className="rightSideBlock__text">
            <span className="rightSideBlock__text_name">Правый руль</span>
            <div></div>
            <p className="rightSideBlock__text_container">
              <span className="rightSideBlock__text_container_content">Да</span>
            </p>
          </li>
        )}
      </ul>

      <div className="rightSideBlock_container__price">
        <span className="rightSideBlock_container__price_text">Цена:</span>
        &nbsp;
        {resultCorrectPriceFromBack ||
          (startDate && endDate && startDate < endDate
            ? resultCorrectPrice
            : orderedPrice)}
        &nbsp;₽
      </div>

      <button
        type="button"
        className={cn("rightSideBlock_container__button", {
          rightSideBlock_container__button_disabled:
            (textCityAutoChange &&
              cityAuto &&
              textCityAutoChange === cityAuto &&
              textStreetAutoChange &&
              streetAuto &&
              textStreetAutoChange === streetAuto) !== true,
          rightSideBlock_container__button_hidden: tabIndex !== "1",
        })}
        onClick={() => handlClickButton()}
      >
        Выбрать модель
      </button>

      <button
        onClick={() => handlClickButton()}
        className={cn("rightSideBlock_container__button", {
          rightSideBlock_container__button_disabled: model === null,
          rightSideBlock_container__button_hidden: tabIndex !== "2",
        })}
        type="button"
      >
        Дополнительно
      </button>

      <button
        onClick={() => {
          handlClickButton();
          handlClickButtonTotal();
        }}
        className={cn("rightSideBlock_container__button", {
          rightSideBlock_container__button_disabled:
            endDate === null ||
            Number.isNaN(endDate) ||
            startDate === null ||
            Number.isNaN(startDate) ||
            endDate <= startDate ||
            color === null,
          rightSideBlock_container__button_hidden: tabIndex !== "3",
        })}
        type="button"
      >
        Итого
      </button>

      <button
        className={cn("rightSideBlock_container__button", {
          rightSideBlock_container__button_hidden: tabIndex !== "4",
        })}
        onClick={() => setActiveModal(true)}
        type="button"
      >
        Заказать
      </button>
      <Link
        to="/order"
        className={cn("rightSideBlock_container__button_cancel", {
          rightSideBlock_container__button_hidden: tabIndex !== "5",
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
}

export default RightSideBlockStory;

/* [
{
"id":	"1",
"name":	"ELANTRA",
"minPrice":	"12 000",
"maxPrice":	"25 000",
"model":	"Hyundai",
"img":	"https://www.figma.com/file/654FNQuhGQxrLOT4ByXeoA/image/c31940b4825e7de08c4523e9a81ebe8d0ad04616?fuid=1073273349188760991",
"class":	"economy"
},
{
"id":	"2",
"name":	"i30 N",
"minPrice":	"10 000",
"maxPrice":	"32 000",
"model":	"Hyundai",
"img":	"https://www.figma.com/file/654FNQuhGQxrLOT4ByXeoA/image/4e4ea22ab31217afaaad6cc7af61ec4ca2f2f058?fuid=1073273349188760991",
"class":	"business"
},
{
"id":	"3",
"name":	"CRETA",
"minPrice":	"12 000",
"maxPrice":	"25 000",
"model":	"Hyundai",
"img":	"https://www.figma.com/file/654FNQuhGQxrLOT4ByXeoA/image/fa7d238c33edb42d3aaf49466e5400c66da0415d?fuid=1073273349188760991",
"class":	"economy"
},
{
"id":	"4",
"name":	"SONATA",
"minPrice":	"10 000",
"maxPrice":	"32 000",
"model":	"Hyundai",
"img":	"https://www.figma.com/file/654FNQuhGQxrLOT4ByXeoA/image/0050d35a3265deaece85bdd8cb88e6ae6c3b9401?fuid=1073273349188760991",
"class":	"business"
},
{
"id":	"5",
"name":	"Elantra",
"minPrice":	"12 000",
"maxPrice":	"25 000",
"model":	"Hyundai",
"img":	"https://www.figma.com/file/654FNQuhGQxrLOT4ByXeoA/image/c31940b4825e7de08c4523e9a81ebe8d0ad04616?fuid=1073273349188760991",
"class":	"economy"
},
{
"id":	"6",
"name":	"i30 N",
"minPrice":	"10 000",
"maxPrice":	"32 000",
"model":	"Hyundai",
"img":	"https://www.figma.com/file/654FNQuhGQxrLOT4ByXeoA/image/4e4ea22ab31217afaaad6cc7af61ec4ca2f2f058?fuid=1073273349188760991",
"class":	"business"
}
]
 */
