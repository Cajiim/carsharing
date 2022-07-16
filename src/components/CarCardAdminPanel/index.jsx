import React, { useState, memo } from "react";

import CarCardSetup from "../CarCardSetup";
import CarSettings from "../CarSettings";
import ConfirmationBar from "../ConfirmationBar";

import "./index.scss";

function CarCardAdminPanel() {
  const [activeConfirmation, setActiveConfirmation] = useState(false);
  return (
    <div className="carCardAdminPanel_container">
      <ConfirmationBar
        activeConfirmation={activeConfirmation}
        setActiveConfirmation={setActiveConfirmation}
      />
      <h2 className="carCardAdminPanel_container_title">Карточка автомобиля</h2>
      <div className="carCardAdminPanel_container_autoCart">
        <CarCardSetup />
        <CarSettings setActiveConfirmation={setActiveConfirmation} />
      </div>
    </div>
  );
}

export default memo(CarCardAdminPanel);
