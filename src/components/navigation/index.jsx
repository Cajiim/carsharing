import React, { useState } from "react";
import "./index.scss";
import Menu from "../Menu";

function Navigation({ overflow, setOverflow  }) {
  const [menuActive, setMenuActive] = useState(false);

  return (
    <div className="aside">
      <div className="aside__content">
        <div
          className={
            menuActive ? "containerBurg containerBurg_active" : "containerBurg"
          }
          onClick={() => setMenuActive(!menuActive)}
          role="presentation"
        >
          <span></span>
        </div>
        <div
          className={
            menuActive
              ? "aside__content__language aside__content__language_active"
              : "aside__content__language"
          }
        >
          <p>Eng</p>
        </div>
      </div>
      <Menu active={menuActive} setActive={setMenuActive} overflow={overflow} setOverflow={setOverflow} />
    </div>
  );
}

export default Navigation;
