import React from "react";
import { NavLink } from "react-router-dom";
import Geo from "../../assets/svg/Group.svg";

import "./index.scss";

function HeaderPage() {
  return (
    <header className="header_content">
      <div className="header__title">
        <h1 className="header__title__name">
          <NavLink to="/" className="link" activeclassname="selected">
            Need for drive
          </NavLink>
        </h1>
        <ul className="header__geo clear">
          <li className="header__title__geolocation">
            <img className="" src={Geo} alt="Геолокация"></img>
            <span className="header__title__city">Ульяновск</span>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default HeaderPage;
