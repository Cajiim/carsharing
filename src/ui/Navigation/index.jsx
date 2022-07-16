import React, { useState, memo } from "react";
import classNames from "classnames";
import PropTypes from 'prop-types';
import Menu from "../Menu";

import style from "./index.scss";

const cn = classNames.bind(style);

function Navigation({ overflow, setOverflow }) {

  Navigation.propTypes = {
    overflow: PropTypes.bool,
    setOverflow: PropTypes.bool,
  }
  Navigation.defaultProps = {
    overflow: false,
    setOverflow: false,
  }
  const [menuActive, setMenuActive] = useState(false);
  const [language, setLangauge] = useState(false);

  return (
    <div className="aside">
      <div className="aside__content">
        <li
          className={cn("aside__content_containerBurg", {
            aside__content_containerBurg_active: menuActive,
          })}
          onClick={() => setMenuActive(!menuActive)}
        >
          <span></span>
        </li>
        <li
          className={cn("aside__content__language", {
            aside__content__language_active: menuActive,
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
}

export default memo(Navigation);
