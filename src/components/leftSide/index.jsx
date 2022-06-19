import React from "react";

import { Link } from "react-router-dom";
import "./index.scss";
import Geo from "../../assets/svg/Group.svg";

function LeftSide() {
  return (
    <div className="left-Container">
      <header className="left-Container_head">
        <h2 className="left-Container_head__name">Need for drive</h2>
        <ul className="clear">
          <li className="left-Container_head__geolocation">
            <img
              className="left-Container_head__geolocation_img"
              src={Geo}
              alt="Геолокация"
            ></img>
            <span className="left-Container_head__geolocation_city">
              Ульяновск
            </span>
          </li>
        </ul>
      </header>

      <div className="left-Container_mainContent">
        <h1>
          <span className="left-Container_mainContent_title">Каршеринг</span>
          <br></br>{" "}
          <span className="left-Container_mainContent-title">
            Need for drive
          </span>
        </h1>
        <ul className="left-Container_mainContent__container clear">
          <li className="left-Container_mainContent__container_text">
            <span>Поминутная аренда авто твоего города</span>
          </li>
        </ul>
        <Link to="/order">
          <button className="left-Container_mainContent_button" type="button">
            Забронировать
          </button>
        </Link>
      </div>

      <footer className="left-Container_foot">
        <p className="left-Container_foot__year">
          © 2016-2019 «Need for drive»
        </p>
        <p className="left-Container_foot__number">8 (495) 234-22-44</p>
      </footer>
    </div>
  );
}

export default LeftSide;
