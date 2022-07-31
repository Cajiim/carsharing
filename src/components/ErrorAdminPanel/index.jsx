import React from "react";
import "./index.scss";

const ErrorAdminPanel = () => (
  <div className="ErrorAdminPanel">
    <h2 className="ErrorAdminPanel__title">500</h2>
    <p className="ErrorAdminPanel__textOne">Что то пошло не так</p>
    <p className="ErrorAdminPanel__textTwo">
      Попробуйте перезагрузить страницу
    </p>
    <button type="button" className="ErrorAdminPanel__button">
      Назад
    </button>
  </div>
);

export default ErrorAdminPanel;
