import React from "react";
import CarOrders from "../CarOrders";

import "./index.scss";

const CarOrdersAdminPanel = () => (
    <div className="ordersContainer-wrapper">
      <h3 className="ordersContainer-wrapper__title">Заказы</h3>
      <div className="ordersContainer-wrapper__mainContent">
        <CarOrders />
      </div>
    </div>
  )

export default CarOrdersAdminPanel;
