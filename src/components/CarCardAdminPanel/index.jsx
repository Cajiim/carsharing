import React from 'react';
import CarCardSetup from "../CarCardSetup";
import CarSettings from "../CarSettings";
import './index.scss'


function CarCardAdminPanel() {
  return (
    <div className="carCardAdminPanel_container">
      <h2 className="carCardAdminPanel_container_title">
        Карточка автомобиля
      </h2>
      <div className="carCardAdminPanel_container_autoCart">
        <CarCardSetup />
        <CarSettings />
      </div>
    </div>
  );
}

export default CarCardAdminPanel;