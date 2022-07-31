import React from "react";
import { NavLink } from "react-router-dom";
import Geo from "../../../assets/svg/Group.svg";

import "./index.scss";

const HeaderPage = () => (
  <header className="header-container">
    <h1 className="header-container__title">
      <NavLink to="/" className="link" activeclassname="selected">
        Need for drive
      </NavLink>
    </h1>
    <div className="header-container__geolocation">
      <li className="header-container__geolocationLine">
        <img src={Geo} alt="Геолокация"></img>
        <span className="header-container__city">Ульяновск</span>
      </li>
    </div>
  </header>
);

export default HeaderPage;
