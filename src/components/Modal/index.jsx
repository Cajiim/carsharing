import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setTabIndex } from "../../redux/cart/reducerTableIndex";
import "./index.scss";



function Modal({ active, setActive }) {

  const dispatch = useDispatch();
  const tabIndex = useSelector((state) => state.tableIndex.tabIndex);
  const handlClickButton = () => {
    dispatch(setTabIndex((String(Number(tabIndex) + 1))));
    setActive(false);
  };

  return (
    <div className={active ? 'modal active' : 'modal'}>
      <h3 className="modal__title">Подтвердить заказ</h3>
      <div className="modal__button">
        <form>
        <button className="modal__button_confirm" type='button' onClick={() => handlClickButton()}>
          Подтвердить
        </button>
        </form>
        <form>
        <button
          className="modal__button_refuse"
          onClick={() => setActive(false)}
          type='button'
        >
          Вернуться
        </button>
        </form>
      </div>
    </div>
  );
}

export default Modal;
