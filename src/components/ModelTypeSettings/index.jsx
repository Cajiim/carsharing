import React, { useState, useEffect } from "react";
import classNames from "classnames";
import { useSelector, useDispatch } from "react-redux";
import {
  setModelCarCart,
  setTypeCarCart,
} from "../../redux/cart/reducerCarCartSettings";
import {
  setCarNameError,
  setCarTypeError,
} from "../../redux/cart/reducerValidateErrors";
import style from "./index.scss";

const cn = classNames.bind(style);

const ModelTypeSettings = () => {
  const dispatch = useDispatch();
  const { modelCarCart, typeCarCart } = useSelector(
    ({ carSettings }) => carSettings
  );
  const { carNameError, carTypeError } = useSelector(
    ({ validateErrors }) => validateErrors
  );

  const [modelCarDirty, setModelCarDirty] = useState(false);
  const [typeCarDirty, setTypeCarDirty] = useState(false);

  const handlClickBlur = (e) => {
    switch (e.target.name) {
      case "carModel":
        setModelCarDirty(true);
        break;
      case "carType":
        setTypeCarDirty(true);
        break;

      default:
    }
  };

  const handlChangeModel = (value) => {
    const re = /["a-zA-Z]+[, ]+["a-zA-Z]/g;

    if (!re.test(String(value).toLowerCase())) {
      dispatch(
        setCarNameError(
          "Введите корретно модель автомобиля, разделив марку с названием запятой"
        )
      );
      dispatch(setModelCarCart(value));
    } else {
      dispatch(setModelCarCart(value));
      dispatch(setCarNameError(""));
    }
  };

  const handlChangeType = (value) => {
    const re = String(value).toLowerCase();
    if (re !== "business" && re !== "economy") {
      dispatch(setCarTypeError("Выберете класс: business или economy"));
      dispatch(setTypeCarCart(value));
    } else {
      dispatch(setTypeCarCart(value));
      dispatch(setCarTypeError(""));
    }
  };

  const { dataCarList } = useSelector(({ getData }) => getData);

  const modelCarFromBack = dataCarList?.model;
  const nameCarFromBack = dataCarList?.name;
  const typeCarFromBack = dataCarList?.typeCarCart;
  const fullModel =
    modelCarFromBack && nameCarFromBack
      ? `${modelCarFromBack}, ${nameCarFromBack}`
      : null;

  useEffect(() => {
    setTimeout(() => {
      dispatch(setModelCarCart(fullModel || modelCarCart));
      dispatch(setTypeCarCart(typeCarFromBack || typeCarCart));
      dispatch(
        setCarNameError(modelCarFromBack ? "" : "Поле не должно быть пустым")
      );
      dispatch(
        setCarTypeError(
          typeCarFromBack ? "" : "Поле не должно быть пустым"
        )
      );
    }, 0);
  }, [
    fullModel,
    typeCarFromBack,
    modelCarFromBack,
    typeCarFromBack,
  ]);

  return (
    <div className="modelTypeSettings_container_setting">
      <div className="modelTypeSettings_container_setting_carModel">
        <span className="modelTypeSettings_container_setting_carModel_title">
          Модель автомобиля
        </span>
        <input
          className={cn("modelTypeSettings_container_setting_carModel_input", {
            modelTypeSettings_container_setting_carModel_input_error:
              modelCarDirty && carNameError,
          })}
          value={modelCarCart}
          onChange={(e) => handlChangeModel(e.target.value)}
          onBlur={(e) => handlClickBlur(e)}
          name="carModel"
        ></input>
        {modelCarDirty && carNameError && (
          <div className="modelTypeSettings_container_setting_carModel_input_textError">
            {carNameError}
          </div>
        )}
      </div>
      <div className="modelTypeSettings_container_setting_carType">
        <span className="modelTypeSettings_container_setting_carType_title">
          Тип автомобиля
        </span>
        <input
          className={cn("modelTypeSettings_container_setting_carType_input", {
            modelTypeSettings_container_setting_carType_input_error:
              typeCarDirty && carTypeError,
          })}
          value={typeCarCart}
          onBlur={(e) => handlClickBlur(e)}
          onChange={(e) => handlChangeType(e.target.value)}
          name="carType"
        ></input>
        {typeCarDirty && carTypeError && (
          <div className="modelTypeSettings_container_setting_carType_input_textError">
            {carTypeError}
          </div>
        )}
      </div>
    </div>
  );
};

export default ModelTypeSettings;
