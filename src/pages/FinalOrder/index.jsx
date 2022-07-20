import React, { useState } from "react";

import Navigation from "../../components/Navigation";
import HeaderPage from "../../components/common/HeaderPage";
import FinalCart from "../../components/common/FinalCart";
import RightSideBlockStory from "../../components/common/RightSideBlockStory";
import "./index.scss";

const FinalOrderPage = () => {
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
