import React from "react";
import searchIcon from "../../../assets/svg/Shape.svg";
import Notifications from "../../../assets/svg/Notifications.svg";
import userAvatar from "../../../assets/img/user-avatar.png";
import dropDown from "../../../assets/img/dropdown_icon.png";
import "./index.scss";

const HeaderAdmin = () => (
    <header className="headerAdmin">   
      <img
        src={searchIcon}
        alt="search"
        className="headerAdmin__searchIcon"   
      ></img>
      <input
        className="headerAdmin__input"    
        placeholder="Поиск ..."
      ></input>
      <div className="headerAdmin__notifications">    
        <img src={Notifications} alt="Notifications"></img>
      </div>
      <div className="headerAdmin__user user">   
        <img
          src={userAvatar}
          alt="userAvatar"
          className="user__photo"    
        ></img> 
        <span className="user__name">Admin</span>    
        <img
          className="user__imgDropDown"   
          src={dropDown}
          alt="dropDown"
        ></img>
      </div>
    </header>
  )

export default HeaderAdmin;
