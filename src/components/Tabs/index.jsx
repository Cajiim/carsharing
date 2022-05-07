import { useState } from "react";
import Vector from "../../assets/svg/Vector.svg";
import s from "./index.scss";

import YandexMap from "../map";
import { Autocomplete } from "../Autocomplete";
import RightSideBlockStory from "../RightSideBlockStory";
import Model from "../Model";

import ImgOne from "../../assets/img/image 1.png";
import ImgTwo from "../../assets/img/image 2.png";
import ImgThree from "../../assets/img/image 3.png";
import ImgFour from "../../assets/img/image 4.png";

const arrModels = [
  {
    index: "1",
    name: "ELANTRA",
    price: "12 000 - 25 000 Р",
    img: ImgOne,
  },
  {
    index: "2",
    name: "i30 N",
    price: "10 000 - 32 000 Р",
    img: ImgTwo,
  },
  {
    index: "3",
    name: "CRETA",
    price: "12 000 - 25 000 Р",
    img: ImgThree,
  },
  {
    index: "4",
    name: "SONATA",
    price: "10 000 - 32 000 Р",
    img: ImgFour,
  },
  {
    index: "5",
    name: "Elantra",
    price: "12 000 - 25 000 Р",
    img: ImgOne,
  },
  {
    index: "6",
    name: "i30 N",
    price: "10 000 - 32 000 Р",
    img: ImgTwo,
  },
];

function Tabs() {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };

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
                name="type"
                type="radio"
                value="all"
              ></input>
              <p className="radio_text">Все модели</p>
              <input
                className="radio_box"
                name="type"
                type="radio"
                value="economy"
              ></input>
              <p className="radio_text">Эконом</p>
              <input
                className="radio_box"
                name="type"
                type="radio"
                value="business"
              ></input>

              <p className="radio_text">Бизнес</p>
            </div>
            <div className="active-tabs-content-model_cart">
              {arrModels.map((cart) => (
                <Model
                  cart={cart}
                  key={cart.index}
                />
              ))}
            </div>
          </div>
          <div
            className={
              toggleState === 3 ? "active-tabs-content" : "content-tabs"
            }
          >
            <h2>Дополнительно</h2>
          </div>
          <div
            className={
              toggleState === 4 ? "active-tabs-content" : "content-tabs"
            }
          >
            <h2>Итого</h2>
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
