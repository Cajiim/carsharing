import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setMinPrice,
  setMaxPrice,
} from "../../redux/cart/reducerCarCartSettings";
import {
  setMinPriceError,
  setMaxPriceError,
} from "../../redux/cart/reducerValidateErrors";
import Input from "../../ui/InputCarSettings";
import "./index.scss";

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

  const priceValidate =
    maxPrice && minPrice && Number(maxPrice) <= Number(minPrice);

  return (
    <div className="priceSettings">
      <div className="priceSettings__minPrice">
        <span className="priceSettings__inputName">
          Минимальная цена
        </span>
        <Input
          className="inputCarSettings"
          isError={!!(minPriceDirty && minPriceError)}
          value={minPrice}
          onChange={handlChangeMinPrice}
          onBlur={handlClickBlur}
          name="minPrice"
        />
        {minPriceDirty && minPriceError && (
          <div className="priceSettings__error">
            {minPriceError}
          </div>
        )}
      </div>
      <div className="priceSettings__maxPrice">
        <span className="priceSettings__inputName">
          Максимальная цена
        </span>
        <Input
          className="inputCarSettings"
          isError={!!(maxPriceDirty && maxPriceError)}
          value={maxPrice}
          onChange={handlChangeMaxPrice}
          onBlur={handlClickBlur}
          name="maxPrice"
        />
        {maxPriceDirty && maxPriceError && (
          <div className="priceSettings__error">
            {maxPriceError}
          </div>
        )}
        {priceValidate ? (
          <div className="priceSettings__textError">
            Максимальная цена должна быть больше минимальной
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default PriceSettings;
