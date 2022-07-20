import React, { memo } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { ReactComponent as Telegram } from "../../assets/svg/Telegram.svg";
import { ReactComponent as Facebook } from "../../assets/svg/Facebook.svg";
import { ReactComponent as Instagram } from "../../assets/svg/Instagram.svg";
import style from "./index.scss";

const cn = classNames.bind(style);

const Menu = ({ active, overflow }) => (
  <div
    className={cn("menu", {
      menu_active: active,
    })}
  >
    <div className="menu__overflow">
      <div
        className={cn("menu__content", {
          menu__content_completelyBlack: overflow,
        })}
      >
        <div className="menu__navigation">
          <div className="menu__list">
            <p className="menu__items">Парковка</p>
            <p className="menu__items">Страховка</p>
            <p className="menu__items">Бензин</p>
            <p className="menu__items">Обслуживание</p>
          </div>
          <div className="menu__social social">
            <Telegram className="social__telegram" />
            <Facebook className="social__facebook" />
            <Instagram className="social__instagram" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

Menu.propTypes = {
  active: PropTypes.bool,
  overflow: PropTypes.bool,
};
Menu.defaultProps = {
  active: false,
  overflow: false,
};

export default memo(Menu);
