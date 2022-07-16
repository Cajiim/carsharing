import React from "react";
import { NavLink } from "react-router-dom";
import Geo from "../../assets/svg/Group.svg";

import "./index.scss";

function HeaderPage() {
  return (
    <header className="header_container">
      <div className="header_container_content">
        <h1 className="header_container_content_title">
          <NavLink to="/" className="link" activeclassname="selected">
            Need for drive
          </NavLink>
        </h1>
        <ul className="header_container_content_geolocation clear">
          <li className="header_container_content_geolocation_title">
            <img
              className="header_container_content_geolocation_img"
              src={Geo}
              alt="Геолокация"
            ></img>
            <span className="header_container_content_geolocation_city">
              Ульяновск
            </span>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default HeaderPage;
