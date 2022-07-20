import React from "react";
import CarOrders from "../CarOrders";

import "./index.scss";

const CarOrdersAdminPanel = () => (
    <div className="carOrders_container">
      <h3 className="carOrders_container_title">Заказы</h3>
      <div className="carOrders_container_mainContent">
        <CarOrders />
      </div>
    </div>
  )

export default CarOrdersAdminPanel;
