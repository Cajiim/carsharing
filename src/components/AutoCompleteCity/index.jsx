import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames";
import { fetchDataCitys } from "../../redux/dataThunk/fetchCityStreet";
import {
  setDeliveryCity,
  deleteDeliveryCity,
  setDeliveryChangeCityInput,
  deleteDeliveryChangeCityInput,
  deleteDeliveryChangeStreetInput,
  deletePointOfIssue,
} from "../../redux/cart/reducerFinalOrder";
import InputAutocomplete from "../../ui/InputAutocomplete";
import Button from "../../ui/ButtonClose";
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

  const handlClickButton = () => {
    handlClearCity();
    handlClearStreet();
  };

  return (
    <div className="autoCompleteCity">
      <div className="autoCompleteCity__container">
        <InputAutocomplete
          id="cityInput"
          labelText="Город"
          classNameLabel="inputCity__label"
          placeholder="Начните вводить город ..."
          type="textCity"
          value={textCityAutoChange}
          className="inputCity"
          onChange={onChangeHandlInputCity}
          disabled={false}
        />
        <Button
          className="clearCityButton"
          handlClick={handlClickButton}
          isDisabled={textCityAutoChange === "" || !textCityAutoChange}
        />
        <ul
          className={cn("autoCompleteCity__choice", {
            autoCompleteCity__choice_disabled: suggestions.length === 0,
          })}
        >
          {suggestions &&
            suggestions.map((sugg) => (
              <li
                key={sugg.id}
                className="autoCompleteCity__received"
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
  );
};

export default AutoCompleteCity;
