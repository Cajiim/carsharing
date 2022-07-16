import React, { useState, useEffect } from "react";
import classNames from "classnames";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import {
  setMinPrice,
  setMaxPrice,
} from "../../redux/cart/reducerCarCartSettings";
import {
  setMinPriceError,
  setMaxPriceError,
} from "../../redux/cart/reducerValidateErrors";
import style from "./index.scss";

const cn = classNames.bind(style);

function PriceSettings() {
  const dispatch = useDispatch();
  const { minPrice, maxPrice } = useSelector(({ carSettings }) => carSettings);
  const { minPriceError, maxPriceError } = useSelector(
    ({ validateErrors }) => validateErrors
  );

  const [minPriceDirty, setMinPriceDirty] = useState(false);
  const [maxPriceDirty, setMaxPriceDirty] = useState(false);

  const handlClickBlur = (e) => {
    switch (e.target.name) {
      case "minPrice":
        setMinPriceDirty(true);
        break;
      case "maxPrice":
        setMaxPriceDirty(true);
        break;

      default:
    }
  };

  const handlChangeMinPrice = (value) => {
    const re = /[0-9]/g;
    if (!re.test(String(value).toLowerCase()) && value.length <= 1) {
      dispatch(setMinPriceError("Введите корректно минимальную цену"));
      dispatch(setMinPrice(value));
    } else {
      dispatch(setMinPrice(value));
      dispatch(setMinPriceError(""));
    }
  };
  const handlChangeMaxPrice = (value) => {
    const re = /[0-9]/g;
    if (!re.test(String(value).toLowerCase()) && value.length <= 1) {
      dispatch(setMaxPriceError("Введите максимальную цену"));
      dispatch(setMaxPrice(value));
    } else {
      dispatch(setMaxPrice(value));
      dispatch(setMaxPriceError(""));
    }
  };

  const [contentModelBack, setContentModelBack] = useState([]);
  function fetchData() {
    const url = window.location.href
      .slice(window.location.href.indexOf("?"))
      .split(/[&?]{1}[\w\d]+=/);
    axios
      .get(
        `https://6288c18410e93797c15e9916.mockapi.io/Cars/${
          url[1] ? url[1] : ""
        }`
      )
      .then((res) => setContentModelBack(res.data))
      .catch((error) => console.log(error, "Ошибка"));
  }


  const minPriceFromBack = contentModelBack?.minPrice;
  const maxPriceFromBack = contentModelBack?.maxPrice;
  const [state, setState] = useState();
  function returnCar () {
    setState(setTimeout(() => {
      dispatch(setMinPrice(minPriceFromBack || minPrice));
      dispatch(setMaxPrice(maxPriceFromBack || maxPrice));
      dispatch(
        setMinPriceError(
          contentModelBack?.minPrice ? "" : "Поле не должно быть пустым"
        )
      );
      dispatch(
        setMaxPriceError(
          contentModelBack?.maxPrice ? "" : "Поле не должно быть пустым"
        )
      );
    }, 0))
  }

  useEffect(() => {
    fetchData();
    returnCar();
    
    return () => {
      setState();
    };
  }, [minPriceFromBack, maxPriceFromBack]);



  return (
    <div className="priceSettings_container_setting">
      {state ? (<><div className="priceSettings_container_setting_minPrice">
        <span className="priceSettings_container_setting_minPrice_title">
          Минимальная цена
        </span>
        <input
          type="number"
          name="minPrice"
          className={cn("priceSettings_container_setting_minPrice_input", {
            priceSettings_container_setting_minPrice_input_error: minPriceDirty && minPriceError,
          })}
          value={minPrice}
          onChange={(e) => handlChangeMinPrice(e.target.value)}
          onBlur={(e) => handlClickBlur(e)}
        ></input>
        {minPriceDirty && minPriceError && (
          <div className="priceSettings_container_setting_minPrice_input_textError">
            {minPriceError}
          </div>
        )}
      </div><div className="priceSettings_container_setting_maxPrice">
          <span className="priceSettings_container_setting_maxPrice_title">
            Максимальная цена
          </span>
          <input
            type="number"
            name="maxPrice"
            className={cn("priceSettings_container_setting_maxPrice_input", {
              priceSettings_container_setting_maxPrice_input_error: maxPriceDirty && maxPriceError,
            })}
            value={maxPrice}
            onChange={(e) => handlChangeMaxPrice(e.target.value)}
            onBlur={(e) => handlClickBlur(e)}
          ></input>
          {maxPriceDirty && maxPriceError && (
            <div className="priceSettings_container_setting_maxPrice_input_textError">
              {maxPriceError}
            </div>
          )}
          {maxPrice && minPrice && Number(maxPrice) <= Number(minPrice) ? (
            <div className="priceSettings_container_setting_minMaxPrice_input_textError">
              Максимальная цена должна быть больше минимальной
            </div>
          ) : null}
        </div></>) : null}
    </div>
  );
}

export default PriceSettings;
