import { React, useState, useEffect } from "react";
import classNames from "classnames";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import {
  setColorForCar,
  setArrAllColorsForCar,
  deleteColorFromCar,
  setColorForCheckbox,
} from "../../redux/cart/reducerCarCartSettings";
import { setColorError } from "../../redux/cart/reducerValidateErrors";
import style from "./index.scss";

const cn = classNames.bind(style);

const ColorSettings = () => {
  const dispatch = useDispatch();
  const { colorForCar, arrAllColors, colorForCheckbox, minPrice, maxPrice } =
    useSelector(({ carSettings }) => carSettings);
  const { colorError } = useSelector(({ validateErrors }) => validateErrors);

  const handlDeleteColorForm = () => {
    dispatch(deleteColorFromCar());
  };

  const handleChangeColor = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      dispatch(setArrAllColorsForCar([...arrAllColors, value]));
    } else {
      dispatch(
        setArrAllColorsForCar(arrAllColors.filter((el) => el !== value))
      );
    }
  };

  const [colorDirty, setColorDirty] = useState(false);

  const handlClickBlur = (e) => {
    switch (e.target.name) {
      case "colorCar":
        setColorDirty(true);
        break;

      default:
    }
  };

  const handlAddColor = (value) => {
    const re = /^[а-яА-ЯёЁ\s-]+$/;

    if (!re.test(String(value).toLowerCase()) && value !== "") {
      dispatch(setColorError("Введите корректно цвет автомобиля"));
      dispatch(setColorForCar(value));
    } else {
      dispatch(setColorForCar(value));
      dispatch(setColorError(""));
    }
  };

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
      .then((res) => {
        dispatch(
          setArrAllColorsForCar(
            res.data.arrAllColors ? res.data.arrAllColors : []
          )
        );
        dispatch(
          setColorForCheckbox(
            res.data.arrAllColors ? res.data.arrAllColors : []
          )
        );
        dispatch(
          setColorError(
            res.data.arrAllColors ? "" : "Выберите хотябы один цвет"
          )
        );
      })
      .catch((error) => console.log(error, "Ошибка"));
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="colorSettings_container_availableСolors">
        <span className="colorSettings_container_availableСolors_title">
          Доступные цвета
        </span>
        <input
          className={cn("colorSettings_container_availableСolors_input", {
            colorSettings_container_availableСolors_input_error:
              colorDirty && colorError,
          })}
          value={colorForCar}
          onInput={(e) => handlAddColor(e.target.value)}
          type="textColor"
          name="colorCar"
          onBlur={handlClickBlur}
        ></input>
        {colorDirty && colorError && (
          <div className="colorSettings_container_availableСolors_input_textError">
            {colorError}
          </div>
        )}
        {minPrice &&
          maxPrice &&
          arrAllColors &&
          colorError === "" &&
          arrAllColors.length === 0 && (
            <div className="colorSettings_container_availableСolors_input_textError">
              Выберите хотябы один цвет
            </div>
          )}
        <button
          type="button"
          className="colorSettings_container_availableСolors_button"
          aria-label="addColor"
          onClick={() =>
            arrAllColors.includes(colorForCar.trim()) ||
            colorForCheckbox.includes(colorForCar.trim()) ||
            colorForCar === "" ||
            colorError !== ""
              ? null
              : (dispatch(
                  setArrAllColorsForCar([...arrAllColors, colorForCar.trim()])
                ),
                dispatch(
                  setColorForCheckbox([...colorForCheckbox, colorForCar.trim()])
                ),
                handlDeleteColorForm())
          }
        ></button>
      </div>
      <div className="colorSettings_container_checkBoxColors">
        <form
          className="colorSettings_container_checkBoxColors_form"
          id="colorForm"
        >
          {colorForCheckbox &&
            colorForCheckbox.map((el) => (
              <label
                htmlFor={el}
                className="colorSettings_container_checkBoxColors_form_label"
                key={el.toString()}
              >
                <input
                  value={el}
                  id={el}
                  type="checkbox"
                  className="colorSettings_container_checkBoxColors_form_label_checkBox"
                  checked={arrAllColors.includes(el)}
                  onChange={handleChangeColor}
                ></input>

                <span className="colorSettings_container_checkBoxColors_form_label_fakeCheckBox"></span>
                <span className="colorSettings_container_checkBoxColors_form_label_text">
                  {el}
                </span>
              </label>
            ))}
        </form>
      </div>
    </>
  );
};

export default ColorSettings;
