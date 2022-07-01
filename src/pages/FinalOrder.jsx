import React, { useState } from "react";

import Navigation from "../components/navigation";
import HeaderPage from "../components/HeaderPage";
import FinalCart from "../components/FinalCart";
import RightSideBlockStory from "../components/RightSideBlockStory";

function FinalOrderPage() {
  const [overflowActive, setOverflowActive] = useState(true);
  const url = window.location.href
    .slice(window.location.href.indexOf("?"))
    .split(/[&?]{1}[\w\d]+=/);
  return (
    <div className="container__finalOrder">
      <div className="navigation">
        <Navigation overflow={overflowActive} setOverflow={setOverflowActive} />
      </div>

      <div className="container__finalOrder__page">
        <HeaderPage />

        <div className="container__finalOrder_numberBlock">
          <ul className="container__finalOrder-orderNumber clear">
            <li className="container__finalOrder-orderNumber_text">
              <span>Заказ номер {url[1]}</span>
            </li>
          </ul>
        </div>

        <div className="container__finalOrder__content">
          <div className="container__finalOrder_leftSide">
            <FinalCart />
          </div>
          <div className="container__finalOrder_rightSide">
            <RightSideBlockStory />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FinalOrderPage;
