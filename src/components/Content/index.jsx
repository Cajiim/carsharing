import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import PropTypes from "prop-types";
import Geo from "../../assets/svg/Group.svg";
import style from "./index.scss";

const cn = classNames.bind(style);

const Content = ({ overflow }) => (
  <div
    className={cn("content__wrapper", {         
    content__wrapper_disabled: overflow,
    })}
  >
    <header className="content__wrapper__header header">    
      <h2 className="header__title">Need for drive</h2> 
        <li className="header__container">       
          <img
            className="header__imgGeo"      
            src={Geo}
            alt="geo"
          ></img>
          <span className="header__city">
            Ульяновск
          </span>
        </li>
    </header>

    <main className="content__wrapper__mainContent mainContent">                              
      <h1 className="mainContent__titleContainer">          
        <span className="mainContent__title">Каршеринг</span>    
        <br></br>
        <span className="mainContent-title">Need for drive</span>  
      </h1>
      <p className="mainContent__text">             
        Поминутная аренда авто твоего города
      </p>
      <Link to="/order" className="mainContent__link">     
        Забронировать
      </Link>
    </main>

    <footer className="content__wrapper__footer footer">                  
      <span className="footer__year">          
        © 2016-2019 «Need for drive»
      </span>
      <a className="footer__phoneNumber" href="tel:+7 (495) 234-22-44"> 
        8 (495) 234-22-44
      </a>
    </footer>
  </div>
);

Content.propTypes = {
  overflow: PropTypes.bool,
};
Content.defaultProps = {
  overflow: false,
};

export default Content;
