import React, { useState } from "react";
import Navigation from "../../components/Navigation";
import HeaderPage from "../../components/Common/HeaderPage";
import FinalCart from "../../components/Common/FinalCart";
import RightSideBlockStory from "../../components/Common/RightSideBlockStory";
import OrderNumber from "../../components/OrderNumber";
import "./index.scss";

const FinalOrderPage = () => {
  const [overflowActive, setOverflowActive] = useState(true);
  return (
    <div className="finalOrder">
      <nav>
        <Navigation overflow={overflowActive} setOverflow={setOverflowActive} />
      </nav>
      <main className="finalOrder__main">
        <HeaderPage />
        <OrderNumber />
        <div className="finalOrder__content">
          <div className="finalOrder__finalCart">
            <FinalCart />
          </div>
          <div className="finalOrder__storyBlock">
            <RightSideBlockStory />
          </div>
        </div>
      </main>
    </div>
  );
};

export default FinalOrderPage;
