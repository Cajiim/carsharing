import React, { useState, useEffect, /* memo, */  /* useMemo */  } from "react";
import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames";
import axios from "axios";
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
  const [cityComplete, setCityComplete] = useState([]);
  const [suggestions, setSuggestions] = useState([]);

  const loadCities = async () => {
    const response = await axios.get(
      "https://6288c18410e93797c15e9916.mockapi.io/Cities"
    );
    setCityComplete(response.data[0].сities);
  };
  useEffect(() => {
    loadCities();
  }, []);

  const {deliveryChangeCityInput: textCityAutoChange} = useSelector(
    ({finalOrder}) => finalOrder
  );

  const onChangeHandlInputCity = (value) => {
    let matches = [];
    if (value.length > 0) {
      matches = cityComplete.filter((el) => {
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
      <p className="autoCompleteCity_city">Город</p>

      <div className="autoCompleteCity_container">
        <input
          placeholder="Начните вводить город ..."
          type="textCity"
          value={textCityAutoChange}
          className="autoCompleteCity_container_input"
          onChange={(e) => {
            onChangeHandlInputCity(e.target.value);
          }}
        ></input>
        <button
          type="button"
          className={cn("autoCompleteCity_container_cancelButton", {
            autoCompleteCity_container_cancelButton_disabled:
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
          className={cn("autoCompleteCity_container_choice", {
            autoCompleteCity_container_choice_disabled:
              suggestions.length === 0,
          })}
        >
          <ul>
            {suggestions &&
              suggestions.map((sugg) => (
                <li
                  key={sugg.id}
                  className="autoCompleteCity_container_choice_received"
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
}

export default AutoCompleteCity;
