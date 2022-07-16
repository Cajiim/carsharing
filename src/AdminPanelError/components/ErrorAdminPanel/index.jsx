import React from "react";
import './index.scss'


function ErrorAdminPanel() {
  return (
    <div className="ErrorAdminPanel_ErrorBlock">
      <h2 className="ErrorAdminPanel_ErrorBlock_title">
        500
      </h2>
      <p className="ErrorAdminPanel_ErrorBlock_textOne">
        Что то пошло не так
      </p>
      <p className="ErrorAdminPanel_ErrorBlock_textTwo">
        Попробуйте перезагрузить страницу
      </p>
      <button
        type="button"
        className="ErrorAdminPanel_ErrorBlock_button"
      >
        Назад
      </button>
    </div>
  );
}

export default ErrorAdminPanel;
