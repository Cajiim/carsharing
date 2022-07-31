import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames";
import { fetchDataStreets } from "../../redux/dataThunk/fetchCityStreet";
import {
  setPointIssue,
  deletePointOfIssue,
  setDeliveryChangeStreetInput,
  deleteDeliveryChangeStreetInput,
} from "../../redux/cart/reducerFinalOrder";
import InputAutocomplete from "../../ui/InputAutocomplete";
import Button from "../../ui/ButtonClose";
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
  const handleClickButton = () => {
    handlClearStreet();
  };
  return (
    <div className="autoCompleteStreet">
      <div className="autoCompleteStreet__container">
        <InputAutocomplete
          id="inputStreet"
          labelText="Пункт выдачи"
          classNameLabel="inputStreet__label"
          placeholder="Начните вводить пункт ..."
          type="textStreet"
          value={textStreetAutoChange}
          className="inputStreet"
          onChange={onChangeHandlInputPointOfIssue}
          disabled={Disabled}
        />
        <Button
          className="clearStreetButton"
          handlClick={handleClickButton}
          isDisabled={!textStreetAutoChange || textStreetAutoChange === ""}
        />
        <ul
          className={cn("autoCompleteStreet__choice", {
            autoCompleteStreet__choice_disabled: streets.length === 0,
          })}
        >
          {streets &&
            streets.map((street) => (
              <li
                key={street.id}
                className="autoCompleteStreet__received"
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
  );
};

export default AutoCompleteStreet;
