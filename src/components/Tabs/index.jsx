import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setColor } from "../../redux/cart/reducerColor";
import { setArendTime } from "../../redux/cart/reducerArendTime";
import "./index.scss";

/* import YandexMap from "../map";
import { Autocomplete } from "../Autocomplete"; */
import RightSideBlockStory from "../RightSideBlockStory";
import Model from "../Model";
import Vector from "../../assets/svg/Vector.svg";
import ImgOne from "../../assets/img/image 1.png";
import ImgTwo from "../../assets/img/image 2.png";
import ImgThree from "../../assets/img/image 3.png";
import ImgFour from "../../assets/img/image 4.png";
import FinalCart from "../FinalCart";
import { setDurationArend } from "../../redux/cart/reducerDuration";
import { setDurationArendTwo } from "../../redux/cart/reducerDurationTwo"; 
import { setCheckOne } from '../../redux/cart/reducerCheckedOne'
import { setCheckTwo } from "../../redux/cart/reducerCheckedTwo";
import { setCheckThree } from "../../redux/cart/reducerCheckedThree";
import { setClass } from "../../redux/cart/reducerClassCar";
const arrModels = [
  {
    index: "1",
    name: "ELANTRA",
    price: "12 000 - 25 000",
    img: ImgOne,
    class: "economy",
  },
  {
    index: "2",
    name: "i30 N",
    price: "10 000 - 32 000",
    img: ImgTwo,
    class: "business",
  },
  {
    index: "3",
    name: "CRETA",
    price: "12 000 - 25 000",
    img: ImgThree,
    class: "economy",
  },
  {
    index: "4",
    name: "SONATA",
    price: "10 000 - 32 000",
    img: ImgFour,
    class: "business",
  },
  {
    index: "5",
    name: "Elantra",
    price: "12 000 - 25 000",
    img: ImgOne,
    class: "economy",
  },
  {
    index: "6",
    name: "i30 N",
    price: "10 000 - 32 000",
    img: ImgTwo,
    class: "business",
  },
];

const economCar = arrModels.filter((cart) => cart.class === "economy");
const businessCar = arrModels.filter((cart) => cart.class === "business");

function Tabs() {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  const [classCar, setClassCar] = useState();

  const [inputOne, setInputOne] = useState("");
  const [inputTwo, setInputTwo] = useState("");
/*   const [colorCar, setColorCar] = useState(); */
  const [arendRate, setArendRate] = useState();
  const [checkedOne, setCheckedOne] = useState(false);
  const [checkedTwo, setCheckedTwo] = useState(false);
  const [checkedThree, setCheckedThree] = useState(false);

  const startDate = inputOne;
  const endDate = inputTwo;
  /* console.log(startDate);
  console.log(endDate); */

  const diffTime = Math.abs(
    new Date(endDate).getTime() - new Date(startDate).getTime()
  );
  const diffDays = Math.ceil(diffTime / (1000 * 3600 * 24));
  /* console.log(diffDays); */
  const diffMinutes = Math.ceil(diffTime / (1000 * 60));
  /*  console.log(diffMinutes); */
  const dispatch = useDispatch();
   /* console.log(colorCar); */
  /* let Color =
    colorCar === "red" ? "Красный" : colorCar === "blue" ? "Голубой" : "Любой"; */

  /* console.log(Color); */

  const handleClick = (value) => {
    /* console.log(value) */
    dispatch(setColor(value));
  };

  const handleClickDuration = (value) => {
    dispatch(setDurationArend(value));
  };
 const handleClickDurationTwo = (value) => {
    dispatch(setDurationArendTwo(value));
  }; 
  const handleClickClassCar = (value) => {
    dispatch(setClass(value));
  };

  const classCart = useSelector((state) => state.classCar.classCar)
  
 /*  ((state) => state.durationOne.durationArend); */
  
  const priceRate = arendRate === "minut" ? 7 * diffMinutes : 1999 * diffDays;

  /* const fullPrice =
    classCar === "business" ? 10000 + priceRate : 12000 + priceRate; */

  
  /* console.log(priceRate);
  console.log(fullPrice); */
  /* console.log(addOptions); */
  let a = 0;
  let b = 0;
  let c = 0;
  const gas = checkedOne === true ? (a += 500) : a;
  const baby = checkedTwo === true ? (b += 200) : b;
  const rightHand = checkedThree === true ? (c += 1600) : c;
  const d = gas + baby + rightHand;
  /* const totalPrice = fullPrice + d; */
  /* console.log(totalPrice) */
    /* console.log(setInputOne)
    console.log(setInputTwo) */
  const handleClickFare = (value) => {
    
    dispatch (setArendTime(value));
  };

  const handleClickCheckboxOne = () => {
    dispatch(setCheckOne(!checkedOne));
  };

  const handleClickCheckboxTwo = () => {
    dispatch(setCheckTwo(!checkedTwo));
  };
  const handleClickCheckboxThree = () => {
    dispatch(setCheckThree(!checkedThree));
  };

  /* console.log(totalPrice);   */

  return (
    <div className="container_tabs">
      <div className="block-tabs">
        <nav className="">
          <ul className="navigation__category clear">
            <li
              className={
                toggleState === 1
                  ? "margin-left active"
                  : " margin-left complete"
              }
              onClick={() => toggleTab(1)}
              onKeyDown={() => toggleTab(1)}
            >
              <span className="nav_category__type">Местоположение</span>
              <img
                src={Vector}
                alt="Vector"
                className="navigation__category_img"
              />
            </li>
            <li
              className={
                toggleState === 2
                  ? "active"
                  : toggleState < 2
                  ? "disabled"
                  : "complete"
              }
              onClick={() => toggleTab(2)}
              onKeyDown={() => toggleTab(2)}
            >
              <span className="nav_category__type">Модель</span>
              <img
                src={Vector}
                alt="Vector"
                className="navigation__category_img"
              />
            </li>
            <li
              className={
                toggleState === 3
                  ? "active"
                  : toggleState < 3
                  ? "disabled"
                  : "complete"
              }
              onClick={() => toggleTab(3)}
              onKeyDown={() => toggleTab(3)}
            >
              <span className="nav_category__type">Дополнительно</span>
              <img
                src={Vector}
                alt="Vector"
                className="navigation__category_img"
              />
            </li>
            <li
              className={toggleState === 4 ? "active" : "disabled"}
              onClick={() => toggleTab(4)}
              onKeyDown={() => toggleTab(4)}
            >
              <span className="nav_category__type">Итого</span>
            </li>
          </ul>
        </nav>
      </div>
      <div className="tabs-maincontent">
        <div className="tabs_left_content">
          <div
            className={
              toggleState === 1 ? "active-tabs-content" : "content-tabs"
            }
          >
            <img
              className="tabs-img"
              src="https://annamap.ru/karta-mira.jpg"
              alt="карта"
            ></img>
          </div>
          <div
            className={
              toggleState === 2
                ? "active-tabs-content active-tabs-content_model_cart"
                : "content-tabs"
            }
          >
            <div className="tabs_left_content_radioContent">
              <input
                className="radio_box"
                name="elem"
                type="radio"
                value="all"
                defaultChecked
                onClick={(e) => handleClickClassCar(e.target.value)}
                onChange={() => console.log(1)}
              ></input>
              <p className="radio_text">Все модели</p>
              <input
                className="radio_box"
                name="elem"
                type="radio"
                value="economy"
                
                onClick={(e) => handleClickClassCar(e.target.value)}
                /* onChange={(e) => setClassCar(e.target.value)} */
              ></input>
              <p className="radio_text">Эконом</p>
              <input
                className="radio_box"
                name="elem"
                type="radio"
                value="business"
                color="secondary"
                onClick={(e) => handleClickClassCar(e.target.value)}
                /* onChange={(e) => setClassCar(e.target.value)} */
              ></input>
              <p className="radio_text">Бизнес</p>
            </div>
            {classCart === "business" ? (
              <div className="active-tabs-content-model_cart">
                {businessCar.map((cart) => (
                  <Model cart={cart} key={cart.index} />
                ))}
              </div>
            ) : classCart === "economy" ? (
              <div className="active-tabs-content-model_cart">
                {economCar.map((cart) => (
                  <Model cart={cart} key={cart.index} />
                ))}
              </div>
            ) : (
              <div className="active-tabs-content-model_cart">
                {arrModels.map((cart) => (
                  <Model cart={cart} key={cart.index} />
                ))}
              </div>
            )}
          </div>

          <div
            className={
              toggleState === 3 ? "active-tabs-content" : "content-tabs"
            }
          >
            <p className="tabs_left_content_radioContent_title">Цвет</p>

            <div className="tabs_left_content_radioContent">
              <input
                className="radio_box"
                name="color"
                type="radio"
                value="all"
                defaultChecked
                /* onChange={(e) => setColorCar(e.target.value)} */
                onClick={(e) => handleClick(e.target.value)}
              ></input>
              <p className="radio_text">Любой</p>
              <input
                className="radio_box"
                name="color"
                type="radio"
                value="red"
                
                /* onChange={(e) => setColorCar(e.target.value)} */
                onClick={(e) => handleClick(e.target.value)}
                
              ></input>
              <p className="radio_text">Красный</p>
              <input
                className="radio_box"
                name="color"
                type="radio"
                value="blue"
                
                /* onChange={(e) => setColorCar(e.target.value)} */
                onClick={(e) => handleClick(e.target.value)}
              ></input>
              {/* {console.log(colorCar)} */}
              <p className="radio_text">Голубой</p>
            </div>

            <div>
              <p className="tabs_left_content_date_title">Дата аренды</p>
              <div className="tabs_left_content_date_content">
                <p>С</p>
                <input /* const [inputOne, setInputOne] = useState(''); */
                  type="datetime-local"
                  id="start-date"
                  value={inputOne}
                  onInput={(e) => {handleClickDuration(e.target.value); setInputOne(e.target.value)}}
                  className="tabs_left_content_date_one"
                ></input>
              </div>
               {/* {console.log(inputOne)} */} 
              <div className="tabs_left_content_date_content">
                <p>По</p>
                <input
                  type="datetime-local"
                  id="end-date"
                  value={inputTwo}
                  onInput={(e) => {handleClickDurationTwo(e.target.value);setInputTwo(e.target.value)}}
                  className="tabs_left_content_date_two"
                ></input>
              </div>
               {/* {console.log(inputTwo)} */} 
            </div>
            <p className="tabs_left_content_radioContent_title">Тариф</p>
            <div className="tabs_left_content_radioContent_arend">
              <div className="tabs_left_content_radioContent_arend_content">
                <input
                  className="radio_box"
                  name="tax"
                  type="radio"
                  value="minut"
                  onClick={(e) => handleClickFare(e.target.value)}
                  /* onChange={(e) => setArendRate(e.target.value)}
                  onClick={handleClickFare} */
                  /* {handleClickFare} */
                ></input>
                <p className="radio_text">Поминутно, 7Р/мин</p>
              </div>
              <div className="tabs_left_content_radioContent_arend_content">
                <input
                  className="radio_box"
                  name="tax"
                  type="radio"
                  value="days"
                  onClick={(e) => handleClickFare(e.target.value)}
                  defaultChecked
                  /* onClick={handleClickFare} */
                  /* {handleClickFare} */
                  /* {(e) => setArendRate(e.target.value)} */
                ></input>
                <p className="radio_text">На сутки, 1999Р/сутки</p>
              </div>
            </div>

            <div className="tabs_left_content_additional_services">
              <p>Доп услуги</p>
              <form className="tabs_left_content_additional_services_content">
                <input
                  value="gasoline"
                  id="gasoline"
                  type="checkbox"
                  className="tabs_left_content_additional_services_content_input"
                  checked={checkedOne}
                  onChange={() => setCheckedOne(!checkedOne)}
                  onClick={handleClickCheckboxOne}
                 /*  onClick={handleClickCheckboxOne} 
                 onChange={() => {setCheckedTwo(!checkedTwo); handleClickCheckboxOne()}}
                 */
                ></input>
                <label
                  htmlFor="gasoline"
                  className="tabs_left_content_additional_services_content_label"
                >
                  Полный бак, 500р
                </label>
              </form>
              <form className="tabs_left_content_additional_services_content">
                <input
                  value="babyChair"
                  id="ch_effects"
                  type="checkbox"
                  className="tabs_left_content_additional_services_content_input"
                  checked={checkedTwo}
                  onChange={() => setCheckedTwo(!checkedTwo)}
                  onClick={handleClickCheckboxTwo}
                /*   onClick={handleClickCheckboxTwo} */
                ></input>
                <label
                  htmlFor="babyChair"
                  className="tabs_left_content_additional_services_content_label"
                >
                  Детское кресло, 200р
                </label>
              </form>
              <form className="tabs_left_content_additional_services_content">
                <input
                  value="rightHand"
                  id="rightHand"
                  type="checkbox"
                  className="tabs_left_content_additional_services_content_input"
                  checked={checkedThree}
                  onChange={() => setCheckedThree(!checkedThree)}
                  onClick={handleClickCheckboxThree}
                ></input>
                <label
                  htmlFor="rightHand"
                  className="tabs_left_content_additional_services_content_label"
                >
                  Правый руль, 1600р
                </label>
              </form>
            </div>
          </div>

          <div
            className={
              toggleState === 4 ? "active-tabs-content" : "content-tabs"
            }
          >
            <FinalCart />
          </div>
        </div>
        <div className="tabs_right_content">
          <RightSideBlockStory />
        </div>
      </div>
    </div>
  );
}
export default Tabs;
