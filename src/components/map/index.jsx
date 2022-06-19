/* eslint-disable no-shadow */
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setDeliveryCity,
  setPointIssue,
  deleteDeliveryCity,
  deletePointOfIssue,
  setDeliveryChangeCityInput,
  deleteDeliveryChangeCityInput,
  setDeliveryChangeStreetInput,
  deleteDeliveryChangeStreetInput,
} from "../../redux/cart/reducerFinalOrder";
import "./index.scss";

function Map() {
  const [cityComplete, setCityComplete] = useState([]);
  const [suggestions, setSuggestions] = useState([]);

  const [pointOfIssueComplete, setPointOfIssue] = useState([]);
  const [streets, setStreets] = useState([]);
  const dispatch = useDispatch();

  const loadCities = async () => {
    const response = await axios.get(
      "https://6288c18410e93797c15e9916.mockapi.io/Cities"
    );
    setCityComplete(response.data[0].сities);
  };
  const loadPointOfIssue = async () => {
    const response = await axios.get(
      "https://6288c18410e93797c15e9916.mockapi.io/Cities"
    );
    setPointOfIssue(response.data[0].streets);
  };

  useEffect(() => {
    loadCities();
    loadPointOfIssue();
  }, []);

  const textCityAutoChange = useSelector(
    (state) => state.finalOrder.deliveryChangeCityInput
  );
  const textStreetAutoChange = useSelector(
    (state) => state.finalOrder.pointChangeOfIssue
  );

  const onChangeHandlInputCity = (textCityAutoChange) => {
    let matches = [];
    if (textCityAutoChange.length > 0) {
      matches = cityComplete.filter((сities) => {
        const reg = new RegExp(`${textCityAutoChange.toLowerCase()}`);
        return сities.toLowerCase().match(reg);
      });
    }
    setSuggestions(matches);
    dispatch(setDeliveryChangeCityInput(textCityAutoChange));
    /* setText(); */
  };

  const dispatchCity = (suggestions) => {
    dispatch(setDeliveryCity(suggestions));
  };

  const dispatchPointOfIssue = (streets) => {
    dispatch(setPointIssue(streets));
  };

  const cityHundler = (textCityAutoChange) => {
    /* text */
    /* setText(textCityAutoChange); */ /* text */
    dispatch(setDeliveryChangeCityInput(textCityAutoChange));
    setSuggestions([]);
  };

  const onChangeHandlInputPointOfIssue = (
    /* textPoint */ textStreetAutoChange
  ) => {
    let pointOfIssue = [];
    if (textStreetAutoChange.length > 0) {
      pointOfIssue = pointOfIssueComplete.filter((streets) => {
        const regex = new RegExp(`${textStreetAutoChange.toLowerCase()}`);
        return streets.toLowerCase().match(regex);
      });
    }
    setStreets(pointOfIssue);
    dispatch(setDeliveryChangeStreetInput(textStreetAutoChange));
    /* setTextPoint();  */
  };

  const streetHundler = (textStreetAutoChange) => {
    /* setTextPoint(textPoint); */
    dispatch(setDeliveryChangeStreetInput(textStreetAutoChange));
    setStreets([]);
  };

  const handlClearCity = () => {
    dispatch(deleteDeliveryChangeCityInput()); // диспатч если что
    dispatch(deleteDeliveryCity());
  };

  const handlClearStreet = () => {
    dispatch(deleteDeliveryChangeStreetInput());
    dispatch(deletePointOfIssue());
  };

  for (let i = 0; i <= suggestions.length; i += 1);
  // eslint-disable-next-line no-unreachable-loop
  for (let g = 0; g <= streets.length; g += 1);

  const Disabled = textCityAutoChange === null || textCityAutoChange === "";

  return (
    <div className="map_mainContent">
      <div className="map_mainContent_autocomplete">
        <p className="map_mainContent_autocomplete_city">Город</p>

        <div className="map_mainContent_autocomplete_city_input_container">
          <input
            placeholder="Начните вводить город ..."
            type="textCity"
            value={textCityAutoChange}
            className="map_mainContent_autocomplete_city_input"
            onChange={(e) => {
              onChangeHandlInputCity(e.target.value);
            }}
          ></input>
          <button
            type="button"
            className={
              textCityAutoChange === "" || !textCityAutoChange
                ? "map_mainContent_autocomplete_city_input_cancelButton"
                : "map_mainContent_autocomplete_city_input_cancelButton map_mainContent_autocomplete_city_input_cancelButton_active"
            }
            onClick={() => {
              handlClearCity();
              handlClearStreet();
            }}
          >
            &times;
          </button>
          <div
            className={
              suggestions.length !== 0
                ? "map_mainContent_autocomplete_choice"
                : "map_mainContent_autocomplete_choice_disabled"
            }
          >
            {suggestions &&
              suggestions.map((suggestions) => (
                <div
                  key={suggestions.i}
                  className="map_mainContent_autocomplete_city_input_container_received"
                  onClick={() => {
                    cityHundler(suggestions);
                    dispatchCity(suggestions);
                  }}
                  onKeyDown={() => {
                    cityHundler(suggestions);
                  }}
                  role="button"
                  tabIndex={0}
                >
                  {suggestions}
                </div>
              ))}
          </div>
        </div>
      </div>

      <div className="map_mainContent_autocomplete">
        <p className="map_mainContent_autocomplete_storeIssue">Пункт выдачи</p>

        <div className="map_mainContent_autocomplete_city_input_container">
          <input
            className="map_mainContent_autocomplete_city_input"
            placeholder="Начните вводить пункт ..."
            type="pointOfIssue"
            value={textStreetAutoChange}
            onChange={(e) => onChangeHandlInputPointOfIssue(e.target.value)}
            disabled={Disabled}
          ></input>
          <button
            type="button"
            className={
              !textStreetAutoChange || textStreetAutoChange === ""
                ? "map_mainContent_autocomplete_city_input_cancelButton"
                : "map_mainContent_autocomplete_city_input_cancelButton map_mainContent_autocomplete_city_input_cancelButton_active"
            }
            onClick={() => {
              handlClearStreet();
            }}
          >
            &times;
          </button>
          <div
            className={
              streets.length !== 0
                ? "map_mainContent_autocomplete_choice"
                : "map_mainContent_autocomplete_choice_disabled"
            }
          >
            {streets &&
              streets.map((streets) => (
                <div
                  key={streets.g}
                  className="map_mainContent_autocomplete_city_input_container_received"
                  onClick={() => {
                    streetHundler(streets);
                    dispatchPointOfIssue(streets);
                  }}
                  onKeyDown={() => {
                    streetHundler(streets);
                  }}
                  role="button"
                  tabIndex={0}
                >
                  {streets}
                </div>
              ))}
          </div>
        </div>
      </div>

      <p className="map_mainContent_autocomplete_map">Выбрать на карте:</p>
      <img
        className="tabs-img"
        src="https://annamap.ru/karta-mira.jpg"
        alt="карта"
      ></img>
    </div>
  );
}

export default Map;
