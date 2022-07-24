import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames";
import { fetchDataStreets } from "../../api/fetchCityStreet";
import {
  setPointIssue,
  deletePointOfIssue,
  setDeliveryChangeStreetInput,
  deleteDeliveryChangeStreetInput,
} from "../../redux/cart/reducerFinalOrder";
import style from "./index.scss";

const cn = classNames.bind(style);

const AutoCompleteStreet = () => {
  const dispatch = useDispatch();
  const [streets, setStreets] = useState([]);
  const { dataStreets } = useSelector(({ cityStreetData }) => cityStreetData);

  useEffect(() => {
    dispatch(fetchDataStreets());
  }, [dispatch]);

  const {
    pointChangeOfIssue: textStreetAutoChange,
    deliveryChangeCityInput: textCityAutoChange,
  } = useSelector(({ finalOrder }) => finalOrder);

  const onChangeHandlInputPointOfIssue = (value) => {
    let pointOfIssue = [];
    if (value.length > 0) {
      pointOfIssue = dataStreets.filter((el) => {
        const regex = new RegExp(`${value.toLowerCase()}`);
        return el.street.toLowerCase().match(regex);
      });
    }
    setStreets(pointOfIssue);
    dispatch(setDeliveryChangeStreetInput(value));
  };

  const streetHundler = (street) => {
    dispatch(setDeliveryChangeStreetInput(street));
    setStreets([]);
  };

  const dispatchPointOfIssue = (street) => {
    dispatch(setPointIssue(street));
  };

  const handlClearStreet = () => {
    dispatch(deleteDeliveryChangeStreetInput());
    dispatch(deletePointOfIssue());
  };

  const Disabled = textCityAutoChange === null || textCityAutoChange === "";

  return (
    <div className="autoCompleteStreet-wrapper">
      <h3 className="autoCompleteStreet-wrapper__title">Пункт выдачи</h3>
      <div className="autoCompleteStreet-wrapper__container container">
        <input
          className="container__inputStreet"
          placeholder="Начните вводить пункт ..."
          type="pointOfIssue"
          value={textStreetAutoChange}
          onChange={(e) => onChangeHandlInputPointOfIssue(e.target.value)}
          disabled={Disabled}
        ></input>
        <button
          type="button"
          className={cn("container__cancelButton", {
            container__cancelButton_disabled:
              !textStreetAutoChange || textStreetAutoChange === "",
          })}
          onClick={() => {
            handlClearStreet();
          }}
        >
          &times;
        </button>
        <div
          className={cn("container__choice choice", {
            container__choice_disabled: streets.length === 0,
          })}
        >
          <ul>
            {streets &&
              streets.map((street) => (
                <li
                  key={street.id}
                  className="choice__received"
                  onClick={() => {
                    streetHundler(street.street);
                    dispatchPointOfIssue(street.street);
                  }}
                >
                  {street.street}
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AutoCompleteStreet;
