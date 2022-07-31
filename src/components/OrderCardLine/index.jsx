import React, { memo } from "react";
import moment from "moment";
import PropTypes from "prop-types";
import Complete from "../../assets/svg/completeButton.svg";
import Cancel from "../../assets/svg/cancelButton.svg";
import Change from "../../assets/svg/changeButton.svg";
import CardLineCheckBox from "../../ui/OrderCardLineCheckBox";
import OrderCardLineButton from "../../ui/OrderCardLineButton";
import "./index.scss";

const OrderCardLine = ({ dataCurrent }) => (
  <ul className="orderCardLine">
    {dataCurrent &&
      dataCurrent.map((el) => (
        <li className="orderCardLine__line" key={el.id}>
          <img
            alt="carImg"
            src={el.Cars?.imgCar}
            className="orderCardLine__imgCar"
          ></img>
          <div className="orderCardLine__orderDescription">
            <span>
              <span className="orderCardLine__carName">{el.Cars?.name}</span>
              &nbsp; в &nbsp;
              <span className="orderCardLine__placeOfDelivery">
                {el.additionalOptions?.cityAuto},&nbsp;
              </span>
              {el.additionalOptions?.streetAuto}
            </span>
            <span>
              {moment(new Date(el.additionalOptions?.startDate)).format(
                "DD.MM.YYYY h:mm"
              )}
              &nbsp;—&nbsp;
              {moment(new Date(el.additionalOptions?.endDate)).format(
                "DD.MM.YYYY h:mm"
              )}
            </span>
            <span>
              Цвет:&nbsp;
              <span className="orderCardLine__colorText">
                {el.additionalOptions?.color}
              </span>
            </span>
          </div>
          <div className="orderCardLine__checkboxBlock">
            <CardLineCheckBox
              classNameLabel="cardLineCheckbox"
              classNameInput="cardLineCheckbox__input"
              classNameFake="cardLineCheckbox__fake"
              classNameText="cardLineCheckbox__text"
              id="gas"
              isChecked={el.additionalOptions?.gas !== 0}
              text="Полный бак"
            />
            <CardLineCheckBox
              classNameLabel="cardLineCheckbox"
              classNameInput="cardLineCheckbox__input"
              classNameFake="cardLineCheckbox__fake"
              classNameText="cardLineCheckbox__text"
              id="chair"
              isChecked={el.additionalOptions?.baby !== 0}
              text="Детское кресло"
            />
            <CardLineCheckBox
              classNameLabel="cardLineCheckbox"
              classNameInput="cardLineCheckbox__input"
              classNameFake="cardLineCheckbox__fake"
              classNameText="cardLineCheckbox__text"
              id="rightHandDrive"
              isChecked={el.additionalOptions?.rightHand !== 0}
              text="Правый руль"
            />
          </div>
          <span className="orderCardLine__textPrice">
            {Number(el.additionalOptions?.totalPrice).toLocaleString()}
          </span>
          <div className="orderCardLine__buttons">
            <OrderCardLineButton
              className="orderButtonReady"
              classNameImg="cardLineOrderButton__imgComplete"
              src={Complete}
              text="Готово"
            />
            <OrderCardLineButton
              className="orderButtonCancel"
              classNameImg="cardLineOrderButton__imgCancel"
              src={Cancel}
              text="Отмена"
            />
            <OrderCardLineButton
              className="orderButtonChange"
              classNameImg="cardLineOrderButton__imgChange"
              src={Change}
              text="Изменить"
            />
          </div>
        </li>
      ))}
  </ul>
);

OrderCardLine.propTypes = {
  dataCurrent: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      minPrice: PropTypes.string,
      maxPrice: PropTypes.string,
      model: PropTypes.string,
      imgCar: PropTypes.string,
      typeCarCart: PropTypes.string,
      descriptionCar: PropTypes.string,
      arrAllColors: PropTypes.arrayOf(PropTypes.string),
    })
  ),
};
OrderCardLine.defaultProps = {
  dataCurrent: PropTypes.arrayOf(
    PropTypes.shape({
      id: "",
      name: "",
      minPrice: "",
      maxPrice: "",
      model: "",
      imgCar: "",
      typeCarCart: "",
      descriptionCar: "",
      arrAllColors: [],
    })
  ),
};

export default memo(OrderCardLine);
