import { React } from "react";
import { useDispatch, useSelector } from "react-redux";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./index.scss";
import {
  setColor,
  setArendTime,
  setDurationArend,
  setDurationArendTwo,
  setCheckFuel,
  setCheckBabyChair,
  setCheckRightHand,
  deleteDurationArend,
  deleteDurationArendTwo,
} from "../../redux/cart/reducerFinalOrder";

function Additionally() {
  const dispatch = useDispatch();
  const handleClick = (value) => {
    dispatch(setColor(value));
  };
  const handleClickDuration = (date) => {
    dispatch(setDurationArend(Date.parse(date)));
  };
  const handleClickDurationTwo = (date) => {
    dispatch(setDurationArendTwo(Date.parse(date)));
  };

  const handleClickFare = (value) => {
    dispatch(setArendTime(value));
  };
  const handleClickCheckboxFuel = () => {
    dispatch(setCheckFuel());
  };
  const handleClickCheckboxBabyChair = () => {
    dispatch(setCheckBabyChair());
  };
  const handleClickCheckboxThree = () => {
    dispatch(setCheckRightHand());
  };

  const handleClickCloseFirstDate = () => {
    dispatch(deleteDurationArend());
  };
  const handleClickCloseSecondDate = () => {
    dispatch(deleteDurationArendTwo());
  };

  const {
    checkFuelState: Fuel,
    checkedBabyChairState: BabyChair,
    checkedRightHand: RightHand,
    durationArend: startDate,
    durationArendTwo: endDate,
    arendTime: tarifRate,
    colorCar,
  } = useSelector(({ finalOrder }) => finalOrder);

  return (
    <div>
      <p className="tabs_left_content_radioContent_title">Цвет</p>

      <div className="tabs_left_content_radioContent">
        <label className="radio_text" htmlFor="allRadio">
          <input
            className="radio_box"
            name="color"
            type="radio"
            value="all"
            id="allRadio"
            checked={colorCar === ("all" && null)}
            onChange={(e) => handleClick(e.target.value)}
          ></input>
          <span className="fake"></span>
          <span className="radio_text_color">Любой</span>
        </label>

        <label className="radio_text" htmlFor="redRadio">
          <input
            className="radio_box"
            name="color"
            type="radio"
            value="red"
            id="redRadio"
            checked={colorCar === "red"}
            onChange={(e) => handleClick(e.target.value)}
          ></input>
          <span className="fake"></span>
          <span className="radio_text_color">Красный</span>
        </label>

        <label className="radio_text" htmlFor="blueRadio">
          <input
            className="radio_box"
            name="color"
            type="radio"
            value="blue"
            id="blueRadio"
            checked={colorCar === "blue"}
            onChange={(e) => handleClick(e.target.value)}
          ></input>
          <span className="fake"></span>
          <span className="radio_text_color">Голубой</span>
        </label>
      </div>

      <div>
        <p className="tabs_left_content_date_title">Дата аренды</p>
        <div className="tabs_left_content_date_content">
          <p className="tabs_left_content_date_content_text">С</p>
          <div className="tabs_left_content_date_content_text_datapickerContainer">
            <DatePicker
              selected={startDate}
              onChange={(date) => handleClickDuration(date)}
              showTimeSelect
              timeFormat="HH:mm"
              timeIntervals={15}
              dateFormat="d.MM.yyyy HH:mm"
              placeholderText="Введите дату и время"
            />
            <button
              type="button"
              className={
                startDate === null || Number.isNaN(startDate)
                  ? "tabs_left_content_date_content_text_datapickerContainer_button_datapicker_one tabs_left_content_date_content_text_datapickerContainer_button_datapicker_one_disabled"
                  : "tabs_left_content_date_content_text_datapickerContainer_button_datapicker_one"
              }
              onClick={() => {
                handleClickCloseFirstDate();
              }}
            >
              &times;
            </button>
          </div>
        </div>

        <div className="tabs_left_content_date_content">
          <p>По</p>
          <div className="tabs_left_content_date_content_text_datapickerContainer">
            <DatePicker
              selected={endDate}
              onChange={(date) => handleClickDurationTwo(date)}
              showTimeSelect
              timeFormat="HH:mm"
              timeIntervals={15}
              dateFormat="d.MM.yyyy HH:mm"
              placeholderText="Введите дату и время"
            />
            <button
              type="button"
              className={
                endDate === null || Number.isNaN(endDate)
                  ? "tabs_left_content_date_content_text_datapickerContainer_button_datapicker_two tabs_left_content_date_content_text_datapickerContainer_button_datapicker_two_disabled"
                  : "tabs_left_content_date_content_text_datapickerContainer_button_datapicker_two"
              }
              onClick={() => {
                handleClickCloseSecondDate();
              }}
            >
              &times;
            </button>
            {startDate > endDate &&
              startDate !== null &&
              endDate !== null &&
              Number.isNaN(endDate) === false &&
              Number.isNaN(startDate) === false && (
                <span className="tabs_left_content_date_content_text_datapickerContainer_datapicker_error">
                  Введите корректную дату
                </span>
              )}
          </div>
        </div>
      </div>
      <p className="tabs_left_content_radioContent_title">Тариф</p>
      <div className="tabs_left_content_radioContent_arend">
        <div className="tabs_left_content_radioContent_arend_content">
          <label className="radio_text" htmlFor="fareTypeMin">
            <input
              className="radio_box"
              name="tax"
              type="radio"
              value="minut"
              id="fareTypeMin"
              checked={tarifRate === "minut"}
              onChange={(e) => handleClickFare(e.target.value)}
            ></input>
            <span className="fake"></span>
            <span className="radio_text_color">Поминутно, 7Р/мин</span>
          </label>
        </div>
        <div className="tabs_left_content_radioContent_arend_content">
          <label className="radio_text" htmlFor="fareTypeDay">
            <input
              className="radio_box"
              name="tax"
              type="radio"
              value="days"
              id="fareTypeDay"
              onChange={(e) => handleClickFare(e.target.value)}
              checked={tarifRate === "days"}
            ></input>
            <span className="fake"></span>
            <span className="radio_text_color">На сутки, 1999Р/сутки</span>
          </label>
        </div>
      </div>

      <div className="tabs_left_content_additional_services">
        <p>Доп услуги</p>

        <form className="tabs_left_content_additional_services_content">
          <label
            htmlFor="gasoline"
            className="tabs_left_content_additional_services_content_label"
          >
            <input
              value="gasoline"
              id="gasoline"
              type="checkbox"
              className="tabs_left_content_additional_services_content_input"
              checked={Fuel}
              onChange={() => {
                handleClickCheckboxFuel();
              }}
            ></input>
            <span className="fake_checkbox"></span>
            <span className="radio_text_color">Полный бак, 500р</span>
          </label>
        </form>

        <form className="tabs_left_content_additional_services_content">
          <label
            htmlFor="babyChair"
            className="tabs_left_content_additional_services_content_label"
          >
            <input
              value="babyChair"
              id="babyChair"
              type="checkbox"
              className="tabs_left_content_additional_services_content_input"
              checked={BabyChair}
              onChange={() => handleClickCheckboxBabyChair()}
            ></input>
            <span className="fake_checkbox"></span>
            <span className="radio_text_color">Детское кресло, 200р</span>
          </label>
        </form>

        <form className="tabs_left_content_additional_services_content">
          <label
            htmlFor="rightHand"
            className="tabs_left_content_additional_services_content_label"
          >
            <input
              value="rightHand"
              id="rightHand"
              type="checkbox"
              className="tabs_left_content_additional_services_content_input"
              checked={RightHand}
              onChange={() => handleClickCheckboxThree()}
            ></input>
            <span className="fake_checkbox"></span>
            <span className="radio_text_color">Правый руль, 1600р</span>
            <span className="fake_checkbox_two"></span>
          </label>
        </form>
      </div>
    </div>
  );
}

export default Additionally;
