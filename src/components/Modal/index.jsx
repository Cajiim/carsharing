import React from "react";

import "./index.scss";

function Modal({ active, setActive }) {
  return (
    <div className="modal">
      <h3 className="modal__title">Подтвердить заказ</h3>
      <div className="modal__button">
        <button type="button" className="modal__button_confirm">
          Подтвердить
        </button>
        <button
          type="button"
          className="modal__button_refuse"
          onClick={() => setActive(false)}
        >
          Вернуться
        </button>
      </div>
    </div>
  );
}

export default Modal;
