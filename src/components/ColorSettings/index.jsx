import { React, useState, useEffect } from "react";
import classNames from "classnames";
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

  const { dataCarList } = useSelector(({ getData }) => getData);
  const arrColors = dataCarList?.arrAllColors;
  useEffect(() => {
    setTimeout(() => {
      dispatch(setArrAllColorsForCar(arrColors || []));
      dispatch(setColorForCheckbox(arrColors || []));
      dispatch(setColorError(arrColors ? "" : "Выберите хотябы один цвет"));
    }, 0);
  }, [arrColors, dataCarList?.arrAllColors]);

  const noСolors =
    minPrice &&
    maxPrice &&
    arrAllColors &&
    colorError === "" &&
    arrAllColors.length === 0;

  const handlAddColorForArr = () =>
    arrAllColors.includes(colorForCar.trim()) ||
    colorForCheckbox.includes(colorForCar.trim()) ||
    colorForCar === "" ||
    colorError !== ""
      ? null
      : (dispatch(setArrAllColorsForCar([...arrAllColors, colorForCar.trim()])),
        dispatch(
          setColorForCheckbox([...colorForCheckbox, colorForCar.trim()])
        ),
        handlDeleteColorForm());

  return (
    <>
      <div className="addСolorBlock">
        <span className="addСolorBlock__title">Доступные цвета</span>
        <input
          className={cn("addСolorBlock__input ", {
            addСolor__input_error: colorDirty && colorError,
          })}
          value={colorForCar}
          onInput={(e) => handlAddColor(e.target.value)}
          type="textColor"
          name="colorCar"
          onBlur={handlClickBlur}
        ></input>
        {colorDirty && colorError && (
          <div className="addСolorBlock__textError">{colorError}</div>
        )}
        {noСolors && (
          <div className="addСolorBlock__textError">Выберите хотябы один цвет</div>
        )}
        <button
          type="button"
          className="addСolorBlock__addColorButton"
          aria-label="addColor"
          onClick={handlAddColorForArr}
        ></button>
      </div>
      <div className="checkBoxColors">
        <form id="colorForm">
          {colorForCheckbox &&
            colorForCheckbox.map((el) => (
              <label
                htmlFor={el}
                className="checkBoxColors__label"
                key={el.toString()}
              >
                <input
                  value={el}
                  id={el}
                  type="checkbox"
                  className="checkBoxColors__input"
                  checked={arrAllColors.includes(el)}
                  onChange={handleChangeColor}
                ></input>

                <span className="checkBoxColors__fakeCheckbox"></span>
                <span className="checkBoxColors__text">{el}</span>
              </label>
            ))}
        </form>
      </div>
    </>
  );
};

export default ColorSettings;
