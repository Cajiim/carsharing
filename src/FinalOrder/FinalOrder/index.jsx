import React, { useState } from "react";

import Navigation from "../../ui/Navigation";
import HeaderPage from "../../common/HeaderPage";
import FinalCart from "../../common/FinalCart";
import RightSideBlockStory from "../../common/RightSideBlockStory";
import "./index.scss";

function FinalOrderPage() {
  const [overflowActive, setOverflowActive] = useState(true);
  const url = window.location.href
    .slice(window.location.href.indexOf("?"))
    .split(/[&?]{1}[\w\d]+=/);
  return (
    <div className="container_finalOrder">
      <div>
        <Navigation overflow={overflowActive} setOverflow={setOverflowActive} />
      </div>

      <div className="container_finalOrder_page">
        <HeaderPage />

        <div className="container_finalOrder_page_numberBlock">
          <ul className="container_finalOrder_page_numberBlock_orderNumber clear">
            <li className="container_finalOrder_page_numberBlock_orderNumber_text">
              <span>Заказ номер {url[1]}</span>
            </li>
          </ul>
        </div>

        <div className="container_finalOrder_page_content">
          <div className="container_finalOrder_page_content_leftSide">
            <FinalCart />
          </div>
          <div className="container_finalOrder_page_content_rightSide">
            <RightSideBlockStory />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FinalOrderPage;
