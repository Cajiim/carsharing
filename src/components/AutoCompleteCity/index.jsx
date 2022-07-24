import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames";
import { fetchDataCitys } from "../../api/fetchCityStreet";
import {
  setDeliveryCity,
  deleteDeliveryCity,
  setDeliveryChangeCityInput,
  deleteDeliveryChangeCityInput,
  deleteDeliveryChangeStreetInput,
  deletePointOfIssue,
} from "../../redux/cart/reducerFinalOrder";
import style from "./index.scss";

const cn = classNames.bind(style);

const AutoCompleteCity = () => {
  const dispatch = useDispatch();
  const { dataCitys } = useSelector(({ cityStreetData }) => cityStreetData);
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    dispatch(fetchDataCitys());
  }, [dispatch]);

  const { deliveryChangeCityInput: textCityAutoChange } = useSelector(
    ({ finalOrder }) => finalOrder
  );

  const onChangeHandlInputCity = (value) => {
    let matches = [];
    if (value.length > 0) {
      matches = dataCitys.filter((el) => {
        const reg = new RegExp(`${value.toLowerCase()}`);
        return el.сity.toLowerCase().match(reg);
      });
    }
    setSuggestions(matches);
    dispatch(setDeliveryChangeCityInput(value));
  };

  const dispatchCity = (sugg) => {
    dispatch(setDeliveryCity(sugg));
  };
  const cityHundler = (sugg) => {
    dispatch(setDeliveryChangeCityInput(sugg));
    setSuggestions([]);
  };

  const handlClearCity = () => {
    dispatch(deleteDeliveryChangeCityInput());
    dispatch(deleteDeliveryCity());
  };

  const handlClearStreet = () => {
    dispatch(deleteDeliveryChangeStreetInput());
    dispatch(deletePointOfIssue());
  };

  return (
    <div className="autoCompleteCity">
      <h3 className="autoCompleteCity__title">Город</h3>
      <div className="autoCompleteCity__container container">
        <input
          placeholder="Начните вводить город ..."
          type="textCity"
          value={textCityAutoChange}
          className="container__inputCity"
          onChange={(e) => {
            onChangeHandlInputCity(e.target.value);
          }}
        ></input>
        <button
          type="button"
          className={cn("container__cancelButton", {
            container__cancelButton_disabled:
              textCityAutoChange === "" || !textCityAutoChange,
          })}
          onClick={() => {
            handlClearCity();
            handlClearStreet();
          }}
        >
          &times;
        </button>
        <div
          className={cn("container__choice choice", {
            container__choice_disabled: suggestions.length === 0,
          })}
        >
          <ul>
            {suggestions &&
              suggestions.map((sugg) => (
                <li
                  key={sugg.id}
                  className="choice__received"
                  onClick={() => {
                    cityHundler(sugg.сity);
                    dispatchCity(sugg.сity);
                  }}
                >
                  {sugg.сity}
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AutoCompleteCity;
