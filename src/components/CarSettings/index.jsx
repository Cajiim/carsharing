import React from "react";

import "./index.scss";

function CarSettings() {
  return (
    <div className="carSettings_container">
      <h2 className="carSettings_container_title">Настройки автомобиля</h2>

      <div className="carSettings_container_setting">
        <div className="carSettings_container_setting_carModel">
          <span className="carSettings_container_setting_carModel_title">
            Модель автомобиля
          </span>
          <input className="carSettings_container_setting_carModel_input"></input>
        </div>
        <div className="carSettings_container_setting_carType">
          <span className="carSettings_container_setting_carType_title">
            Тип автомобиля
          </span>
          <input className="carSettings_container_setting_carType_input"></input>
        </div>
      </div>

      <div className="carSettings_container_availableСolors">
        <span className="carSettings_container_availableСolors_title">
          Доступные цвета
        </span>
        <input className="carSettings_container_availableСolors_input"></input>

        <span
          type="button"
          className="carSettings_container_availableСolors_button"
        ></span>
      </div>
      <div className="carSettings_container_checkBoxColors">
        <form className="carSettings_container_checkBoxColors_form">
          <label
            htmlFor="colorRed"
            className="carSettings_container_checkBoxColors_form_label"
          >
            <input
              value="red"
              id="colorRed"
              type="checkbox"
              className=""
            ></input>
            <span className="carSettings_container_checkBoxColors_form_label_text">
              Красный
            </span>
          </label>
        </form>
        <form className="carSettings_container_checkBoxColors_form">
          <label
            htmlFor="colorWhite"
            className="carSettings_container_checkBoxColors_form_label"
          >
            <input
              value="white"
              id="colorWhite"
              type="checkbox"
              className=""
            ></input>

            <span className="carSettings_container_checkBoxColors_form_label_text">
              Белый
            </span>
          </label>
        </form>
        <form className="carSettings_container_checkBoxColors_form">
          <label
            htmlFor="colorBlack"
            className="carSettings_container_checkBoxColors_form_label"
          >
            <input
              value="black"
              id="colorBlack"
              type="checkbox"
              className=""
            ></input>
            <span className="carSettings_container_checkBoxColors_form_label_text">
              Черный
            </span>
          </label>
        </form>
      </div>
      <div className="carSettings_container_buttons">
        <div className="carSettings_container_buttons_control">
          <button type='button' className="carSettings_container_buttons_control_save">
          Сохранить</button>
          <button type='button' className="carSettings_container_buttons_control_cancel">
          Отменить</button>
        </div>
        <button type='button' className="carSettings_container_buttons_control_delete">
          Удалить</button> 
      </div>
    </div>
  );
}

export default CarSettings;
