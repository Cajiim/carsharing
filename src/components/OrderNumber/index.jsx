import React from "react";
import { useLocation } from "react-router-dom";
import "./index.scss";

const queryString = require("query-string");

const OrderNumber = () => {
  const location = useLocation();
  const parsed = queryString.parse(location.search).orderNumber;
  return (
    <div className="orderNumber">
      <li className="orderNumber__text">
        <span>Заказ номер {parsed}</span>
      </li>
    </div>
  );
};

export default OrderNumber;
