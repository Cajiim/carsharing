import React, { useState } from "react";
import classNames from "classnames";
import CarCardSetup from "../CarCardSetup";
import CarSettings from "../CarSettings";
import acceptImg from "../../assets/svg/adminPanelSvg/ShapeOk.svg";
import cancelImg from "../../assets/svg/adminPanelSvg/ShapeCancel.svg";
import style from "./index.scss";

const cn = classNames.bind(style);

function CarCardAdminPanel() {
  const [activeConfirmation, setActiveConfirmation] = useState(false);
  return (
    <div className="carCardAdminPanel_container">
      <div
        className={cn("carCardAdminPanel_container_confirmationBar", {
          carCardAdminPanel_container_confirmationBar_active:
            activeConfirmation,
        })}
      >
        <li className="carCardAdminPanel_container_confirmationBar_textContent">
          <img
            src={acceptImg}
            className="carCardAdminPanel_container_confirmationBar_textContent_imgAccept"
            alt="acceptImg"
          ></img>
          <span className="carCardAdminPanel_container_confirmationBar_textContent_text">
            Успех! Машина сохранена
          </span>
        </li>
        <img
          src={cancelImg}
          className="carCardAdminPanel_container_confirmationBar_textContent_imgCancel"
          alt="cancelImg"
          onClick={() => setActiveConfirmation(!activeConfirmation)}
        ></img>
      </div>

      <h2 className="carCardAdminPanel_container_title">Карточка автомобиля</h2>
      <div className="carCardAdminPanel_container_autoCart">
        <CarCardSetup />
        <CarSettings setActiveConfirmation={setActiveConfirmation} />
      </div>
    </div>
  );
}

export default CarCardAdminPanel;
