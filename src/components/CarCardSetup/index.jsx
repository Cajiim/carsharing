import React, { useEffect, useState } from "react";
import classNames from "classnames";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import {
  setImgForCar,
  setDescriptionCar,
} from "../../redux/cart/reducerCarCartSettings";
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

  const [contentModelBack, setContentModelBack] = useState([]);
  const [state, setState] = useState();
  function fetchData() {
    const url = window.location.href
      .slice(window.location.href.indexOf("?"))
      .split(/[&?]{1}[\w\d]+=/);
    setState(
      axios
        .get(
          `https://6288c18410e93797c15e9916.mockapi.io/Cars/${
            url[1] ? url[1] : ""
          }`
        )
        .then((res) => setContentModelBack(res.data))
        .catch((error) => console.log(error, "Ошибка"))
    );
  }

  const imgCarFromBack = contentModelBack?.imgCar;
  const descriptionCarFromBack = contentModelBack?.descriptionCar;
  useEffect(() => {
    fetchData();
    setTimeout(() => {
      dispatch(setImgForCar(imgCarFromBack || imgCar));
      dispatch(setDescriptionCar(descriptionCarFromBack || descriptionCar));
      dispatch(setLinkImgError(contentModelBack?.imgCar ? "" : ""));
      dispatch(
        setDescriptionError(
          contentModelBack?.descriptionCar ? "" : "Поле не должно быть пустым"
        )
      );
    }, 0);
    return () => {
      setState();
    };
  }, [
    imgCarFromBack,
    descriptionCarFromBack,
    dispatch,
    imgCar,
    descriptionCar,
    contentModelBack?.imgCar,
    contentModelBack?.descriptionCar,
  ]);

  return (
    <div className="сarCardSetup_container">
      {state ? (
        <>
          <div className="сarCardSetup_container_carSetup">
            <img
              src={imgCar}
              alt="carImg"
              className="сarCardSetup_container_carSetup_img"
            ></img>
            <span className="сarCardSetup_container_carSetup_carName">
              {model && name ? (
                <span>
                  {model}, {name}
                </span>
              ) : (
                "Введите название и модель автомобиля"
              )}
            </span>
            <span className="сarCardSetup_container_carSetup_carClass">
              {typeCarCart}
            </span>
            <form className="сarCardSetup_container_carSetup_formForInputFile">
              <label
                htmlFor="inputFile"
                className="сarCardSetup_container_carSetup_formForInputFile_label"
              >
                <input
                  className={cn(
                    "сarCardSetup_container_carSetup_formForInputFile_label_input",
                    {
                      сarCardSetup_container_carSetup_formForInputFile_label_input_error:
                        linkDirty && linkError,
                    }
                  )}
                  id="inputFile"
                  placeholder="Введите ссылку ..."
                  value={imgCar}
                  onChange={(e) => handlChangeImg(e.target.value)}
                  name="link"
                  onBlur={(e) => handlClickBlur(e)}
                ></input>
                {linkDirty && linkError && (
                  <div className="сarCardSetup_container_carSetup_formForInputFile_error">
                    {linkError}
                  </div>
                )}
                <button
                  type="button"
                  className={cn(
                    "сarCardSetup_container_carSetup_formForInputFile_label_button",
                    {
                      сarCardSetup_container_carSetup_formForInputFile_label_button_error:
                        linkDirty && linkError,
                    }
                  )}
                >
                  Обзор
                </button>
              </label>
            </form>
          </div>
          <div className="сarCardSetup_container_progressSetup">
            <div className="сarCardSetup_container_progressSetup_text">
              <span className="сarCardSetup_container_progressSetup_text_completed">
                Заполнено
              </span>
              <p className="сarCardSetup_container_progressSetup_text_percentage">
                {randomFuelLvl}%
              </p>
            </div>
            <progress
              className="сarCardSetup_container_progressSetup_fill"
              max="100"
              value={randomFuelLvl}
            ></progress>
          </div>
          <div className="сarCardSetup_container_progressSetup_description">
            <span className="сarCardSetup_container_progressSetup_description_title">
              Описание
            </span>
            <textarea
              className="сarCardSetup_container_progressSetup_description_text"
              placeholder="Введите описание ..."
              value={descriptionCar}
              onChange={(e) => handlChangeDescription(e.target.value)}
              name="description"
              onBlur={(e) => handlClickBlur(e)}
            ></textarea>
            {descriptionDirty && descriptionError && (
              <div className="сarCardSetup_container_progressSetup_description_error">
                {descriptionError}
              </div>
            )}
          </div>
        </>
      ) : null}
    </div>
  );
};

export default CarCardSetup;
