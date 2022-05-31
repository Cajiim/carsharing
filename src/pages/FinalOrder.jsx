import React from "react";

import Navigation from "../components/navigation";
import HeaderPage from "../components/HeaderPage";
import FinalCart from "../components/FinalCart";
import RightSideBlockStory from "../components/RightSideBlockStory";




function FinalOrderPage() {
  return (
    <div className="container__finalOrder">
      <div className="navigation">
        <Navigation />
      </div>
      <div className="container__finalOrder__page">
        <HeaderPage />

        <div className="container__finalOrder_numberBlock">
          <li className="container__finalOrder-orderNumber">
            <span className="container__finalOrder_orderNumber">
              Заказ номер 666
            </span>
          </li>
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
