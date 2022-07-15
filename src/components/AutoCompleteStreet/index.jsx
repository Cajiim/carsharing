import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames";
import axios from "axios";
import {
  setPointIssue,
  deletePointOfIssue,
  setDeliveryChangeStreetInput,
  deleteDeliveryChangeStreetInput,
} from "../../redux/cart/reducerFinalOrder";
import style from "./index.scss";

const cn = classNames.bind(style);

function AutoCompleteStreet() {
  const [pointOfIssueComplete, setPointOfIssue] = useState([]);
  const [streets, setStreets] = useState([]);
  const dispatch = useDispatch();

  const loadPointOfIssue = async () => {
    const response = await axios.get(
      "https://6288c18410e93797c15e9916.mockapi.io/Cities"
    );
    setPointOfIssue(response.data[0].streets);
  };

  useEffect(() => {
    loadPointOfIssue();
  }, []);

  const {
    pointChangeOfIssue: textStreetAutoChange,
    deliveryChangeCityInput: textCityAutoChange,
  } = useSelector(({ finalOrder }) => finalOrder);

  const onChangeHandlInputPointOfIssue = (value) => {
    let pointOfIssue = [];
    if (value.length > 0) {
      pointOfIssue = pointOfIssueComplete.filter((el) => {
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
    <div className="autoCompleteStreet">
      <p className="autoCompleteStreet_street">Пункт выдачи</p>
      <div className="autoCompleteStreet_container">
        <input
          className="autoCompleteStreet_container_input"
          placeholder="Начните вводить пункт ..."
          type="pointOfIssue"
          value={textStreetAutoChange}
          onChange={(e) => onChangeHandlInputPointOfIssue(e.target.value)}
          disabled={Disabled}
        ></input>
        <button
          type="button"
          className={cn("autoCompleteStreet_container_cancelButton", {
            autoCompleteStreet_container_cancelButton_disabled:
              !textStreetAutoChange || textStreetAutoChange === "",
          })}
          onClick={() => {
            handlClearStreet();
          }}
        >
          &times;
        </button>
        <div
          className={cn("autoCompleteStreet_container_choice", {
            autoCompleteStreet_container_choice_disabled: streets.length === 0,
          })}
        >
          <ul>
            {streets &&
              streets.map((street) => (
                <li
                  key={street.id}
                  className="autoCompleteStreet_container_choice_received"
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
}

export default AutoCompleteStreet;
