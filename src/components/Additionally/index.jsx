import { React, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
/* import { getDefaultMiddleware } from '@reduxjs/toolkit'; */
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
  /* console.log(selectedFirstDate, "Первое");
  console.log(selectedSecondDate, "Второе"); */
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

  const Fuel = useSelector((state) => state.finalOrder.checkFuelState);
  const BabyChair = useSelector(
    (state) => state.finalOrder.checkedBabyChairState
  );
  const RightHand = useSelector((state) => state.finalOrder.checkedRightHand);
  const startDate = useSelector((state) => state.finalOrder.durationArend);
  const endDate = useSelector((state) => state.finalOrder.durationArendTwo);
  const tarifRate = useSelector((state) => state.finalOrder.arendTime);
  const colorCar = useSelector((state) => state.finalOrder.colorCar);

/*    console.log(startDate, "Первое из редакса");
  console.log(endDate, "Второе из редакса");  */
  
  /* const customizedMiddleware = getDefaultMiddleware({
    serializableCheck: false
  }) */

  return (
    <div>
      <p className="tabs_left_content_radioContent_title">Цвет</p>

      <div className="tabs_left_content_radioContent">
        <label className="radio_text" id="allRadio">
          <input
            className="radio_box"
            name="color"
            type="radio"
            value="all"
            htmlFor="allRadio"
            checked={
              colorCar === null ? true : colorCar === "all" ? true : false
            }
            onChange={(e) => handleClick(e.target.value)}
          ></input>
          <span className="fake"></span>
          <span className="radio_text_color">Любой</span>
        </label>

        <label className="radio_text" id="redRadio">
          <input
            className="radio_box"
            name="color"
            type="radio"
            value="red"
            htmlFor="redRadio"
            checked={
              colorCar === null ? false : colorCar === "red" ? true : false
            }
            onChange={(e) => handleClick(e.target.value)}
          ></input>
          <span className="fake"></span>
          <span className="radio_text_color">Красный</span>
        </label>

        <label className="radio_text" id="blueRadio">
          <input
            className="radio_box"
            name="color"
            type="radio"
            value="blue"
            htmlFor="blueRadio"
            checked={
              colorCar === null ? false : colorCar === "blue" ? true : false
            }
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
          <DatePicker
            selected={startDate}
            onChange={(date) => 
               handleClickDuration(date)
            }
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={15}
            dateFormat="d.MM.yyyy HH:mm"
            isClearable
            placeholderText="Введите дату и время"
            /* onInputClick={() => 
              handleClickDuration(selectedFirstDate)} */
          />
          {/* <input
            type="datetime-local"
            id="start-date"
            value={startDate}
            onInput={(e) => {
              handleClickDuration(e.target.value);
            }}
            className="tabs_left_content_date_one"
          ></input> */}
        </div>

        <div className="tabs_left_content_date_content">
          <p>По</p>
          <DatePicker
            selected={endDate}
            onChange={(date) => 
               handleClickDurationTwo(date) 
            }
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={15}
            dateFormat="d.MM.yyyy HH:mm"
            isClearable
            placeholderText="Введите дату и время"
            
            /* onInputClick={(e) => {
              handleClickDurationTwo(e.value);
              console.log(e.target.value,'велью')
            }} */
            /* onInputClick={() => 
              handleClickDurationTwo(selectedSecondDate)} */
          />{/* {console.log({selectedSecondDate})} */}
          {/* <input
            type="datetime-local"
            id="end-date"
            value={endDate}
            onInput={(e) => {
              handleClickDurationTwo(e.target.value);
            }}
            className="tabs_left_content_date_two"
          ></input> */}
        </div>
      </div>
      <p className="tabs_left_content_radioContent_title">Тариф</p>
      <div className="tabs_left_content_radioContent_arend">
        <div className="tabs_left_content_radioContent_arend_content">
          <label className="radio_text" id="fareType">
            <input
              className="radio_box"
              name="tax"
              type="radio"
              value="minut"
              htmlFor="fareType"
              checked={
                tarifRate === null
                  ? false
                  : tarifRate === "minut"
                  ? true
                  : false
              }
              onChange={(e) => handleClickFare(e.target.value)}
            ></input>
            <span className="fake"></span>
            <span className="radio_text_color">Поминутно, 7Р/мин</span>
          </label>
        </div>
        <div className="tabs_left_content_radioContent_arend_content">
          <label className="radio_text" id="fareType">
            <input
              className="radio_box"
              name="tax"
              type="radio"
              value="days"
              htmlFor="fareType"
              onChange={(e) => handleClickFare(e.target.value)}
              checked={
                tarifRate === null ? true : tarifRate === "days" ? true : false
              }
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
