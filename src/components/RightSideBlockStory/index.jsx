/* eslint-disable no-nested-ternary */
import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import { useSelector, useDispatch } from "react-redux";
import { setTabIndex } from "../../redux/cart/reducerTableIndex";

import Modal from "../Modal";
import "./index.scss";

function RightSideBlockStory() {
  const [contentModel, setContentModel] = useState([]);

  const url = window.location.href
    .slice(window.location.href.indexOf("?"))
    .split(/[&?]{1}[\w\d]+=/);
  async function fetchData() {
    try {
      const [contentModelResponse] = await Promise.all([
        axios.get(
          `https://6288c18410e93797c15e9916.mockapi.io/Cars/1/FinalOrder?orderNumber=${url[1]}`
        ),
      ]);
      setContentModel(contentModelResponse.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const CarFromBack = contentModel[0]?.model;
  const additionallyOptionsFromBack = contentModel[0]?.additionalOptions;
  /* console.log(contentModel, 'посмотреть как удалить' )
  console.log(contentModel[0]?.id, 'должно быть одинаковое id  и номер заказа') */

  const idNumber = contentModel[0]?.id;

  const handleDelete = () => {
    axios
      .delete(
        `https://6288c18410e93797c15e9916.mockapi.io/Cars/1/FinalOrder/${idNumber}`
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

  const minPrice = model?.minPrice;
  const maxPrice = model?.maxPrice;
  const carClass = model?.class;
  const colorCar =
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

  const [activeModal, setActiveModal] = useState(false);

  const cityAutoFromBack = additionallyOptionsFromBack?.cityAuto;
  const streetAutoFromBack = additionallyOptionsFromBack?.streetAuto;
  const colorCarFromBack = additionallyOptionsFromBack?.colorCarForBlock;
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
  /* tabIndexFromBack !== undefined ? tabIndexFromBack : tabId */
  /*  console.log(tabIndexFromBack, ' табиндекс с бека')
  console.log(tabId, 'таб индекс') */
  const dispatch = useDispatch();
  const handlClickButton = () => {
    dispatch(setTabIndex(String(Number(tabIndex) + 1)));
  };
  const handlClickButtonFromBack = () => {
    dispatch(setTabIndex(String(Number(tabIndex) - 4)));
  };
  const handlClickButtonDecrement = () => {
    dispatch(setTabIndex(String(Number(tabIndex) - 1)));
  };

  const checkModel = model?.name;
  const resultCorrectPriceFromBack = totalPriceFromBack?.toLocaleString();
  const resultCorrectPrice = totalPrice?.toLocaleString();
  /* console.log(tabIndex, "таб индекс"); */
  /*  function tabCorrect () {
    handleDelete().then(handlClickButtonDecrement());
  } */
  return (
    <div className="rightSideBlock_container">
      <Modal active={activeModal} setActive={setActiveModal} />

      <h4 className="rightSideBlock_container_order">Ваш заказ:</h4>
      <ul className="rightSideBlock_content clear">
        <li className="rightSideBlock__text">
          <span className="rightSideBlock__text_post">Пункт выдачи</span>
          <div></div>
          <p className="rightSideBlock__text_city-street">
            <span className="rightSideBlock__text_city_street">
              {cityAutoFromBack ||
                (textCityAutoChange &&
                cityAuto &&
                textCityAutoChange === cityAuto
                  ? cityAuto
                  : "Выберите город")}
              ,
            </span>
            <span className="rightSideBlock__text_city_street">
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
            <span className="rightSideBlock__text_post">Модель</span>
            <div></div>
            <p className="rightSideBlock__text_city-street">
              <span className="rightSideBlock__text_city_street">
                {model?.model === undefined ? CarFromBack?.model : model?.model}
                , {model?.name === undefined ? CarFromBack?.name : model?.name}
              </span>
            </p>
          </li>
        )}
        {((((diffDays === 0 ? undefined : diffDays) ||
          (diffMinutes === 0 ? undefined : diffMinutes)) &&
          startDate !== undefined &&
          endDate !== undefined) ||
          color ||
          colorCarFromBack) && (
          <li className="rightSideBlock__text">
            <span className="rightSideBlock__text_post">Цвет</span>
            <div></div>
            <p className="rightSideBlock__text_city-street">
              <span className="rightSideBlock__text_city_street">
                {colorCarFromBack !== undefined ? colorCarFromBack : colorCar}
              </span>
            </p>
          </li>
        )}
        {
          ((correctPriceRate &&
            startDate < endDate) || totalPriceFromBack) &&  (
              <li className="rightSideBlock__text">
                <span className="rightSideBlock__text_post">
                  Длительность аренды
                </span>
                <div></div>
                <p className="rightSideBlock__text_city-street">
                  <span className="rightSideBlock__text_city_street">
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
                  {console.log(diffDays, "дифдейс")}
                  {console.log(diffDays, "дифдейс")}
                </p>
              </li>
            )
        }
        {(((priceRate === 0 ? undefined : priceRate) &&
          startDate !== undefined &&
          endDate !== undefined) ||
          rateRentFromBack) && (
          <li className="rightSideBlock__text">
            <span className="rightSideBlock__text_post">Тариф</span>
            <div></div>
            <p className="rightSideBlock__text_city-street">
              <span className="rightSideBlock__text_city_street">
                {rateRentFromBack !== undefined ? rateRentFromBack : rateRent}
              </span>
            </p>
          </li>
        )}
        {(checkedFuelFromBack !== undefined
          ? checkedFuelFromBack
          : checkedFuel) === false ? null : (
          <li className="rightSideBlock__text">
            <span className="rightSideBlock__text_post">Полный бак</span>
            <div></div>
            <p className="rightSideBlock__text_city-street">
              <span className="rightSideBlock__text_city_street">Да</span>
            </p>
          </li>
        )}
        {(checkedBabyChairFromBack !== undefined
          ? checkedBabyChairFromBack
          : checkedBabyChair) === false ? null : (
          <li className="rightSideBlock__text">
            <span className="rightSideBlock__text_post">Детское кресло</span>
            <div></div>
            <p className="rightSideBlock__text_city-street">
              <span className="rightSideBlock__text_city_street">Да</span>
            </p>
          </li>
        )}
        {(checkedRightHandFromBack !== undefined
          ? checkedRightHandFromBack
          : checkedRightHand) === false ? null : (
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
        Цена:&nbsp;
        {resultCorrectPriceFromBack ||
          (startDate && endDate && startDate < endDate
            ? resultCorrectPrice
            : !minPrice && !maxPrice
            ? " от 8 000 до 12 000 "
            : `${minPrice}-${maxPrice}`)}
        &nbsp;₽
      </b>
      {tabIndex === "1" ? (
        <button
          type="button"
          className={
            textCityAutoChange &&
            cityAuto &&
            textCityAutoChange === cityAuto &&
            textStreetAutoChange &&
            streetAuto &&
            textStreetAutoChange === streetAuto
              ? "rightSideBlock__button"
              : "rightSideBlock__button rightSideBlock__button_disabled"
          }
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
          type="button"
        >
          Дополнительно
        </button>
      ) : tabIndex === "3" ? (
        <button
          onClick={() => handlClickButton()}
          className={
            endDate === null ||
            Number.isNaN(endDate) ||
            startDate === null ||
            Number.isNaN(startDate) ||
            endDate <= startDate
              ? "rightSideBlock__button_disabled"
              : "rightSideBlock__button"
          }
          type="button"
        >
          Итого
        </button>
      ) : tabIndex === "4" ? (
        <button
          className="rightSideBlock__button"
          onClick={() => setActiveModal(true)}
          type="button"
        >
          Заказать
        </button>
      ) : tabIndex === "5" ? (
        <Link to="/order" className="button_cancel">
          <button
            className="rightSideBlock__button_cancel"
            onClick={() => {
              checkModel !== undefined
                ? (handleDelete(), handlClickButtonDecrement())
                : (handleDelete(), handlClickButtonFromBack());
            }}
            type="button"
          >
            Отменить
          </button>
        </Link>
      ) : null}
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
