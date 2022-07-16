import React from "react";
import './index.scss'

function MapWithAuto() {
  return (
    <>
      <p className="mapWithAuto_title">Выбрать на карте:</p>
      <img
        className="mapWithAuto_map"
        src="https://annamap.ru/karta-mira.jpg"
        alt="карта"
      ></img>
    </>
  );
}

export default MapWithAuto;