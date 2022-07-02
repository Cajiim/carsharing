import axios from "axios";
import React, { useState, useEffect } from "react";
import classNames from "classnames";
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
import style from "./index.scss";

const cn = classNames.bind(style);

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

  const handlClearCity = () => {
    dispatch(deleteDeliveryChangeCityInput());
    dispatch(deleteDeliveryCity());
  };

  const handlClearStreet = () => {
    dispatch(deleteDeliveryChangeStreetInput());
    dispatch(deletePointOfIssue());
  };

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
            className={cn(
              "map_mainContent_autocomplete_city_input_cancelButton",
              {
                map_mainContent_autocomplete_city_input_cancelButton_disabled:
                  textCityAutoChange === "" || !textCityAutoChange,
              }
            )}
            onClick={() => {
              handlClearCity();
              handlClearStreet();
            }}
          >
            &times;
          </button>
          <div
            className={cn("map_mainContent_autocomplete_choice", {
              map_mainContent_autocomplete_choice_disabled:
                suggestions.length === 0,
            })}
          >
            <ul>
              {suggestions &&
                suggestions.map((sugg) => (
                  <li
                    key={sugg.id}
                    className="map_mainContent_autocomplete_city_input_container_received"
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
            className={cn(
              "map_mainContent_autocomplete_city_input_cancelButton",
              {
                map_mainContent_autocomplete_city_input_cancelButton_disabled:
                  !textStreetAutoChange || textStreetAutoChange === "",
              }
            )}
            onClick={() => {
              handlClearStreet();
            }}
          >
            &times;
          </button>
          <div
            className={cn("map_mainContent_autocomplete_choice", {
              map_mainContent_autocomplete_choice_disabled:
                streets.length === 0,
            })}
          >
            <ul>
              {streets &&
                streets.map((street) => (
                  <li
                    key={street.id}
                    className="map_mainContent_autocomplete_city_input_container_received"
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

/* "Ульяновск",
   "Кострома",
   "Гудермес",
   "Гуково",
   "Тольятти",
   "Томск",
   "Устюжна",
   "Хабаровск",
   "Чапаевск",
   "Унеча",
   "Шумерля",
   "Щигры",
   "Чадан",
   "Уссурийск",
   "Темрюк",
   "Суздаль",
   "Спасск",
   "Соликамск" */
/* 
   {
    "citi":"Ульяновск",
    "id": "1"
   },
   {
    "citi":"Кострома",
    "id": "2"
   },
    {
    "citi":"Гудермес",
    "id": "3"
   },
    {
    "citi":"Гуково",
    "id": "4"
   },
    {
    "citi":"Тольятти",
    "id": "5"
   },
   {
    "citi":"Томск",
    "id": "6"
   },
   {
    "citi":"Устюжна",
    "id": "7"
   },
   {
    "citi":"Хабаровск",
    "id": "8"
   },
   {
    "citi":"Чапаевск",
    "id": "9"
   },
   {
    "citi":"Унеча",
    "id": "10"
   },
   {
    "citi":"Шумерля",
    "id": "11"
   },
   {
    "citi":"Щигры",
    "id": "12"
   },
   {
    "citi":"Чадан",
    "id": "13"
   },
   {
    "citi":"Уссурийск",
    "id": "14"
   },
   {
    "citi":"Темрюк",
    "id": "15"
   },
   {
    "citi":"Суздаль",
    "id": "16"
   },
   {
    "citi":"Спасск",
    "id": "17"
   },
   {
    "citi":"Соликамск",
    "id": "18"
   }


 */
