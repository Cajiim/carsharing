import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { setTabIndex } from "../../redux/cart/reducerTableIndex";
import Modal from "../Modal";
import "./index.scss";

function RightSideBlockStory() {
  const [contentModel, setContentModel] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const [contentModelResponse] = await Promise.all([
          axios.get("https://6288c18410e93797c15e9916.mockapi.io/FinalOrder"),
        ]);
        setContentModel(contentModelResponse.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);
  const CarFromBack = contentModel[0]?.model;
  const additionallyOptionsFromBack = contentModel[0]?.additionalOptions;

  console.log(contentModel);
  /* const {
    model,
    color,
    startDate,
    endDate,
    arendRate,
    checkedOne,
    checkedTwo,
    checkedThree,
  } = useSelector(
    (state) => state.finalOrder
  );  */

  const handleDelete = () => {
    axios
      .delete("https://6288c18410e93797c15e9916.mockapi.io/FinalOrder/1")
      .then((res) => console.log("!!!!!delete data", res))
      .catch((error) => console.log(error, "Ошибка"));
  };

  const model = useSelector((state) => state.finalOrder.modelInCart);
  const color = useSelector((state) => state.finalOrder.colorCar);
  const startDate = useSelector((state) => state.finalOrder.durationArend);
  const endDate = useSelector((state) => state.finalOrder.durationArendTwo);
  const arendRate = useSelector((state) => state.finalOrder.arendTime);
  const checkedFuel = useSelector((state) => state.finalOrder.checkFuelState);
  const checkedBabyChair = useSelector(
    (state) => state.finalOrder.checkedBabyChairState
  );
  const checkedThree = useSelector((state) => state.finalOrder.checkedThree);

  const tabIndex = useSelector((state) => state.tableIndex.tabIndex);

  const dispatch = useDispatch();
  const handlClickButton = () => {
    dispatch(setTabIndex(String(Number(tabIndex) + 1)));
  };
  const handlClickButtonDecrement = () => {
    dispatch(setTabIndex(String(Number(tabIndex) - 1)));
  };

  const minPrice = model?.minPrice;
  const maxPrice = model?.maxPrice;
  const carClass = model?.class;

  const colorCarForBlock =
    (color !== undefined
      ? color
      : additionallyOptionsFromBack.colorCarForBlock) === null
      ? "Любой"
      : (color !== undefined
          ? color
          : additionallyOptionsFromBack.colorCarForBlock) === "red"
      ? "Красный"
      : (color !== undefined
          ? color
          : additionallyOptionsFromBack.colorCarForBlock) === "blue"
      ? "Голубой"
      : "Любой";

  const diffTime = Math.abs(
    new Date(
      endDate !== undefined ? endDate : additionallyOptionsFromBack?.endDate
    ).getTime() -
      new Date(
        startDate !== undefined
          ? startDate
          : additionallyOptionsFromBack?.startDate
      ).getTime()
  );
  const diffDays = Math.ceil(diffTime / (1000 * 3600 * 24));
  const diffMinutes = Math.ceil(diffTime / (1000 * 60));

  const priceRate =
    (arendRate !== undefined
      ? arendRate
      : additionallyOptionsFromBack?.arendRate) === "minut"
      ? 7 * diffMinutes
      : 1999 * diffDays;
  /* console.log(arendRate) */
  const rateRent =
    (arendRate !== undefined
      ? arendRate
      : additionallyOptionsFromBack?.arendRate) === "minut"
      ? "Поминутно"
      : "На сутки";
  const correctPriceRate =
    (carClass !== undefined ? carClass : CarFromBack?.class) === "business"
      ? 10000 + priceRate
      : 12000 + priceRate;
  let a = 0;
  let b = 0;
  let c = 0;
  const gas = checkedFuel === true ? (a += 500) : a;
  const baby = checkedBabyChair === true ? (b += 200) : b;
  const rightHand = checkedThree === true ? (c += 1600) : c;
  const additional =
    (gas === undefined ? additionallyOptionsFromBack?.gas : gas) +
    (baby === undefined ? additionallyOptionsFromBack?.baby : baby) +
    (rightHand === undefined
      ? additionallyOptionsFromBack?.rightHand
      : rightHand);
  const totalPrice = correctPriceRate + additional;
  const arendTimeForBlock =
    (arendRate !== undefined
      ? arendRate
      : additionallyOptionsFromBack?.arendRate) === "minut"
      ? diffMinutes
      : diffDays;

  const [activeModal, setActiveModal] = useState(false);

  /*   const carModel = modelFromBack.model !== undefined ? modelFromBack.model : model?.model !== undefined ? model?.model : null;
  const carName = modelFromBack.name !== undefined ? modelFromBack.name : model?.name !== undefined ? model?.name : null; 

   console.log(carModel, 'модель')
  console.log(carName, 'имя')   */
  return (
    <div className="rightSideBlock_container">
      <Modal active={activeModal} setActive={setActiveModal} />

      <h4 className="rightSideBlock_container_order">Ваш заказ:</h4>
      <ul className="rightSideBlock_content clear">
        <li className="rightSideBlock__text">
          <span className="rightSideBlock__text_post">Пункт выдачи</span>
          <div></div>
          <p className="rightSideBlock__text_city-street">
            <span className="rightSideBlock__text_city_street">Ульяновск,</span>
            <span className="rightSideBlock__text_city_street">
              Нариманова 42
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
          startDate !== null &&
          endDate !== null) ||
          (color !== undefined
            ? color
            : additionallyOptionsFromBack.colorCarForBlock)) && (
          <li className="rightSideBlock__text">
            <span className="rightSideBlock__text_post">Цвет</span>
            <div></div>
            <p className="rightSideBlock__text_city-street">
              <span className="rightSideBlock__text_city_street">
                {additionallyOptionsFromBack?.colorCarForBlock === undefined
                  ? colorCarForBlock
                  : additionallyOptionsFromBack?.colorCarForBlock}
              </span>
            </p>
          </li>
        )}
        {((diffDays === 0 ? undefined : diffDays) ||
          (diffMinutes === 0 ? undefined : diffMinutes)) &&
          startDate !== null &&
          endDate !== null && (
            <li className="rightSideBlock__text">
              <span className="rightSideBlock__text_post">
                Длительность аренды
              </span>
              <div></div>
              <p className="rightSideBlock__text_city-street">
                <span className="rightSideBlock__text_city_street">
                  {arendTimeForBlock}
                  {(arendRate !== undefined
                    ? arendRate
                    : additionallyOptionsFromBack?.arendRate) === "minut" ? (
                    <span>мин.</span>
                  ) : (
                    <span>д.</span>
                  )}
                </span>
              </p>
            </li>
          )}
        {(priceRate === 0 ? undefined : priceRate) &&
          (
            startDate !== undefined ? startDate : additionallyOptionsFromBack?.startDate
          ) !== null &&
          (
            endDate !== undefined ? endDate : additionallyOptionsFromBack?.endDate
          ) !== null && (
            <li className="rightSideBlock__text">
              <span className="rightSideBlock__text_post">Тариф</span>
              <div></div>
              <p className="rightSideBlock__text_city-street">
                <span className="rightSideBlock__text_city_street">
                  {rateRent}
                </span>
              </p>
            </li>
          )}
        {checkedFuel === false ? null : (
          <li className="rightSideBlock__text">
            <span className="rightSideBlock__text_post">Полный бак</span>
            <div></div>
            <p className="rightSideBlock__text_city-street">
              <span className="rightSideBlock__text_city_street">Да</span>
            </p>
          </li>
        )}
        {checkedBabyChair === false ? null : (
          <li className="rightSideBlock__text">
            <span className="rightSideBlock__text_post">Детское кресло</span>
            <div></div>
            <p className="rightSideBlock__text_city-street">
              <span className="rightSideBlock__text_city_street">Да</span>
            </p>
          </li>
        )}
        {checkedThree === false ? null : (
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
        Цена:{" "}
        {startDate !== null && endDate !== null
          ? totalPrice
          : minPrice === undefined && maxPrice === undefined
          ? null
          : minPrice + "-" + maxPrice}{" "}
        Р
      </b>
      {tabIndex === "1" ? (
        <button
          className="rightSideBlock__button"
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
        >
          Дополнительно
        </button>
      ) : tabIndex === "3" ? (
        <button
          onClick={() => handlClickButton()}
          className={
            (startDate && endDate) === null
              ? "rightSideBlock__button_disabled"
              : "rightSideBlock__button"
          }
        >
          Итого
        </button>
      ) : tabIndex === "4" ? (
        <button
          className="rightSideBlock__button"
          onClick={() => setActiveModal(true)}
        >
          Заказать
        </button>
      ) : (
        <Link to="/category/map" className="button_cancel">
          <button
            className="rightSideBlock__button_cancel"
            onClick={() => {
              handleDelete(), handlClickButtonDecrement();
            }}
          >
            Отменить
          </button>
        </Link>
      )}
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
