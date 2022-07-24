import React, { useState, useEffect, useCallback } from "react";
import classNames from "classnames";
import { useSelector, useDispatch } from "react-redux";
import {
  setMinPrice,
  setMaxPrice,
} from "../../redux/cart/reducerCarCartSettings";
import { fetchDataCarList } from "../../api/fetchDataThunk";
import {
  setMinPriceError,
  setMaxPriceError,
} from "../../redux/cart/reducerValidateErrors";
import style from "./index.scss";

const cn = classNames.bind(style);

const PriceSettings = () => {
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

  const { dataCarList } = useSelector(({ getData }) => getData);

  const minPriceFromBack = dataCarList?.minPrice;
  const maxPriceFromBack = dataCarList?.maxPrice;

  useEffect(() => {
    setTimeout(() => {
      dispatch(setMinPrice(minPriceFromBack || minPrice));
      dispatch(setMaxPrice(maxPriceFromBack || maxPrice));
      dispatch(
        setMinPriceError(minPriceFromBack ? "" : "Поле не должно быть пустым")
      );
      dispatch(
        setMaxPriceError(maxPriceFromBack ? "" : "Поле не должно быть пустым")
      );
    }, 0);
  }, [minPriceFromBack, maxPriceFromBack]);

  return (
    <div className="priceSettings_container_setting">
      <div className="priceSettings_container_setting_minPrice">
        <span className="priceSettings_container_setting_minPrice_title">
          Минимальная цена
        </span>
        <input
          type="number"
          name="minPrice"
          className={cn("priceSettings_container_setting_minPrice_input", {
            priceSettings_container_setting_minPrice_input_error:
              minPriceDirty && minPriceError,
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
      </div>
      <div className="priceSettings_container_setting_maxPrice">
        <span className="priceSettings_container_setting_maxPrice_title">
          Максимальная цена
        </span>
        <input
          type="number"
          name="maxPrice"
          className={cn("priceSettings_container_setting_maxPrice_input", {
            priceSettings_container_setting_maxPrice_input_error:
              maxPriceDirty && maxPriceError,
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
      </div>
    </div>
  );
};

export default PriceSettings;
