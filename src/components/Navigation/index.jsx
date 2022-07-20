import React, { useState, memo } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import Menu from "../Menu";

import style from "./index.scss";

const cn = classNames.bind(style);

const Navigation = ({ overflow, setOverflow, setOverflowHome }) => {
  const [menuActive, setMenuActive] = useState(false);
  const [language, setLangauge] = useState(false);
  const handlClickBurger = () => {
    setMenuActive(!menuActive);
    setOverflowHome(!menuActive);
  };
  return (
    <div className="aside">
      <div className="aside__content">
        <li
          className={cn("aside__menu", {
            aside__menu_active: menuActive,
          })}
          onClick={handlClickBurger}
        >
          <span></span>
        </li>
        <li
          className={cn("aside__language", {
            aside__language_active: menuActive,
          })}
          onClick={() => setLangauge(!language)}
        >
          <p>{language ? "Рус" : "Eng"}</p>
        </li>
      </div>
      <Menu
        active={menuActive}
        setActive={setMenuActive}
        overflow={overflow}
        setOverflow={setOverflow}
      />
    </div>
  );
};

Navigation.propTypes = {
  overflow: PropTypes.bool,
  setOverflow: PropTypes.bool,
  setOverflowHome: PropTypes.bool,
};
Navigation.defaultProps = {
  overflow: false,
  setOverflow: false,
  setOverflowHome: false,
};

export default memo(Navigation);
