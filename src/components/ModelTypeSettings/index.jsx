import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import InputCarSettings from "../../ui/InputCarSettings";
import {
  setModelCarCart,
  setTypeCarCart,
} from "../../redux/cart/reducerCarCartSettings";
import {
  setCarNameError,
  setCarTypeError,
} from "../../redux/cart/reducerValidateErrors";
import "./index.scss";

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
        setCarTypeError(typeCarFromBack ? "" : "Поле не должно быть пустым")
      );
    }, 0);
  }, [fullModel, typeCarFromBack, modelCarFromBack, typeCarFromBack]);

  return (
    <div className="modelTypeSettings">
      <div className="modelTypeSettings__carModel">
        <span className="modelTypeSettings__nameText">
          Модель автомобиля
        </span>
        <InputCarSettings
          className="inputCarSettings"
          isError={!!((modelCarDirty && carNameError))}
          value={modelCarCart}
          onChange={handlChangeModel}
          onBlur={handlClickBlur}
          name="carModel"
        />
        {modelCarDirty && carNameError && (
          <div className="modelTypeSettings__text_error">
            {carNameError}
          </div>
        )}
      </div>
      <div className="modelTypeSettings__carType">
        <span className="modelTypeSettings__nameText">
          Тип автомобиля
        </span>
        <InputCarSettings
          className="inputCarSettings"
          isError={!!((typeCarDirty && carTypeError))}
          value={typeCarCart}
          onChange={handlChangeType}
          onBlur={handlClickBlur}
          name="carType"
        />
        {typeCarDirty && carTypeError && (
          <div className="modelTypeSettings__text_error">
            {carTypeError}
          </div>
        )}
      </div>
    </div>
  );
};

export default ModelTypeSettings;
