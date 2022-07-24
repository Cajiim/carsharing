import React, { useState, memo } from "react";
import CarCardSetup from "../CarCardSetup";
import CarSettings from "../CarSettings";
import ConfirmationBar from "../ConfirmationBar";
import "./index.scss";

const CarCardAdminPanel = () => {
  const [activeConfirmation, setActiveConfirmation] = useState(false);
  return (
    <div className="carCardAdminPanel-wrapper">
      <ConfirmationBar
        activeConfirmation={activeConfirmation}
        setActiveConfirmation={setActiveConfirmation}
      />
      <h2 className="carCardAdminPanel-wrapper__title">Карточка автомобиля</h2>
      <main className="carCardAdminPanel-wrapper__main">
        <CarCardSetup />
        <CarSettings setActiveConfirmation={setActiveConfirmation} />
      </main>
    </div>
  );
};

export default memo(CarCardAdminPanel);
