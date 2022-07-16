import React from "react";

import searchIcon from "../../assets/svg/adminPanelSvg/Shape.svg";
import Notifications from "../../assets/svg/adminPanelSvg/Notifications.svg";
import userAvatar from "../../assets/svg/adminPanelSvg/user-avatar.png";
import dropDown from "../../assets/svg/adminPanelSvg/dropdown_icon.png";
import "./index.scss";

function HeaderAdmin() {
  return (
    <header className="headerAdmin_container">
      <img
        src={searchIcon}
        alt="search"
        className="headerAdmin_container_img"
      ></img>
      <input
        className="headerAdmin_container_input"
        placeholder="Поиск ..."
      ></input>
      <div className="headerAdmin_container_notifications">
        <img src={Notifications} alt="Notifications"></img>
      </div>
      <div className="headerAdmin_container_user">
        <img
          src={userAvatar}
          alt="userAvatar"
          className="headerAdmin_container_user_photo"
        ></img>
        <span className="headerAdmin_container_user_name">Admin</span>
        <img
          className="headerAdmin_container_user_dropDown"
          src={dropDown}
          alt="dropDown"
        ></img>
      </div>
    </header>
  );
}

export default HeaderAdmin;
