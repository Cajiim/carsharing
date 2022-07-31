import React, { useEffect, useState } from "react";
import classNames from "classnames";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import {
  setImgForCar,
  setDescriptionCar,
} from "../../redux/cart/reducerCarCartSettings";
import {  fetchDataCarList  } from "../../redux/dataThunk/fetchDataThunk";
import {
  setLinkImgError,
  setDescriptionError,
} from "../../redux/cart/reducerValidateErrors";
import style from "./index.scss";


const cn = classNames.bind(style);

function randomLevel(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}
const randomFuelLvl = randomLevel(20, 50);

const CarCardSetup = () => {
  const dispatch = useDispatch();

  const { imgCar, modelCarCart, typeCarCart, descriptionCar } = useSelector(
    ({ carSettings }) => carSettings
  );
  const { linkError, descriptionError } = useSelector(
    ({ validateErrors }) => validateErrors
  );

  const [linkDirty, setLinkDirty] = useState(false);
  const [descriptionDirty, setDescriptionDirty] = useState(false);

  const handlClickBlur = (e) => {
    switch (e.target.name) {
      case "link":
        setLinkDirty(true);
        break;
      case "description":
        setDescriptionDirty(true);
        break;
      default:
    }
  };

  const handlChangeImg = (value) => {
    const re =
      /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/g;
    if (!re.test(String(value).toLowerCase())) {
      dispatch(setLinkImgError("Некорректная ссылка"));
      dispatch(setImgForCar(value));
    } else {
      dispatch(setImgForCar(value));
      dispatch(setLinkImgError(""));
    }
  };

  const handlChangeDescription = (value) => {
    const re = /^[а-яА-Яa-zA-Z0-9\s?!,.'Ёё]+$/;
    if (value.length < 10 || !re.test(value)) {
      dispatch(setDescriptionError("Введите корректное описание"));
      dispatch(setDescriptionCar(value));
    } else {
      dispatch(setDescriptionCar(value));
      dispatch(setDescriptionError(""));
    }
  };

  const choiseFromArr = modelCarCart.split(",");
  const model = choiseFromArr[0];
  const name = choiseFromArr[1];

  const { dataCarList } = useSelector(({ getData }) => getData);
  const imgCarFromBack = dataCarList?.imgCar;
  const descriptionCarFromBack = dataCarList?.descriptionCar;
  
  const location = useLocation();
  useEffect(() => {
    dispatch(fetchDataCarList());
    setTimeout(() => {
      dispatch(setImgForCar(imgCarFromBack || imgCar));
      dispatch(setDescriptionCar(descriptionCarFromBack || descriptionCar));
      dispatch(setLinkImgError(""));
      dispatch(
        setDescriptionError(
          descriptionCarFromBack ? "" : "Поле не должно быть пустым"
        )
      );
    }, 0);
  }, [imgCarFromBack, descriptionCarFromBack, location]);

  return (
    <div className="сarCardSetup">
      <div className="сarCardSetup__carSetup">
        <img src={imgCar} alt="carImg" className="сarCardSetup__img"></img>
        <span className="сarCardSetup__carName">
          {model && name ? (
            <span>
              {model}, {name}
            </span>
          ) : (
            "Введите название и модель автомобиля"
          )}
        </span>
        <span className="сarCardSetup__carClass">{typeCarCart}</span>
        <form className="сarCardSetup__formForInputFile ">
          <label htmlFor="inputFile" className="сarCardSetup__label">
            <input
              className={cn("сarCardSetup__input", {
                сarCardSetup__input_error: linkDirty && linkError,
              })}
              id="inputFile"
              placeholder="Введите ссылку ..."
              value={imgCar}
              onChange={(e) => handlChangeImg(e.target.value)}
              name="link"
              onBlur={(e) => handlClickBlur(e)}
            ></input>
            {linkDirty && linkError && (
              <div className="сarCardSetup__textError">{linkError}</div>
            )}
            <button
              type="button"
              className={cn("сarCardSetup__button", {
                сarCardSetup__button_error: linkDirty && linkError,
              })}
            >
              Обзор
            </button>
          </label>
        </form>
      </div>
      <div className="сarCardSetup__progressSetup">
        <div className="сarCardSetup__textContainer">
          <span className="сarCardSetup__textCompleted">Заполнено</span>
          <p className="сarCardSetup__textPercentage">{randomFuelLvl}%</p>
        </div>
        <progress max="100" value={randomFuelLvl}></progress>
      </div>
      <div className="сarCardSetup__description">
        <span className="сarCardSetup__titleDescription">Описание</span>
        <textarea
          className="сarCardSetup__textArea"
          placeholder="Введите описание ..."
          value={descriptionCar}
          onChange={(e) => handlChangeDescription(e.target.value)}
          name="description"
          onBlur={(e) => handlClickBlur(e)}
        ></textarea>
        {descriptionDirty && descriptionError && (
          <div className="сarCardSetup__textError">{descriptionError}</div>
        )}
      </div>
    </div>
  );
};

export default CarCardSetup;
