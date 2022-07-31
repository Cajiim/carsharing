import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import PropTypes from "prop-types";
import Geo from "../../assets/svg/Group.svg";
import style from "./index.scss";

const cn = classNames.bind(style);

const Content = ({ overflow }) => (
  <div
    className={cn("content", {
      content_disabled: overflow,
    })}
  >
    <header className="content__header">
      <h2 className="content__headerTitle">Need for drive</h2>
      <li className="content__headerContainer">
        <img className="content__imgGeo" src={Geo} alt="geo"></img>
        <span className="content__city">Ульяновск</span>
      </li>
    </header>
    <main className="content__mainContent">
      <h1 className="content__mainTitleContainer">
        <span className="content__title">Каршеринг</span>
        <br></br>
        <span className="content-title">Need for drive</span>
      </h1>
      <p className="content__text">Поминутная аренда авто твоего города</p>
      <Link to="/order" className="content__link">
        Забронировать
      </Link>
    </main>
    <footer className="content__footer">
      <span className="content__year">© 2016-2019 «Need for drive»</span>
      <a className="content__phoneNumber" href="tel:+7 (495) 234-22-44">
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
