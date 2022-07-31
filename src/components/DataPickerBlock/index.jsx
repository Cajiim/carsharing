import React from "react";
import { useDispatch, useSelector } from "react-redux";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  setDurationArend,
  setDurationArendTwo,
  deleteDurationArend,
  deleteDurationArendTwo,
} from "../../redux/cart/reducerFinalOrder";
import Button from "../../ui/ButtonClose";
import "./index.scss";

const DataPickerBlock = () => {
  const dispatch = useDispatch();
  const handleClickDuration = (date) => {
    dispatch(setDurationArend(Date.parse(date)));
  };
  const handleClickDurationTwo = (date) => {
    dispatch(setDurationArendTwo(Date.parse(date)));
  };
  const handleClickCloseFirstDate = () => {
    dispatch(deleteDurationArend());
  };
  const handleClickCloseSecondDate = () => {
    dispatch(deleteDurationArendTwo());
  };
  const { durationArend, durationArendTwo } = useSelector(
    ({ finalOrder }) => finalOrder
  );
  const errorDate =
    durationArend >= durationArendTwo &&
    durationArend !== null &&
    durationArendTwo !== null &&
    Number.isNaN(durationArendTwo) === false &&
    Number.isNaN(durationArend) === false;

  return (
    <>
      <p className="dataPicker__name">Дата аренды</p>
      <div className="dataPicker__startDate">
        <p className="dataPicker__text">С</p>
        <div className="dataPicker__container">
          <DatePicker
            selected={durationArend}
            onChange={(date) => handleClickDuration(date)}
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={15}
            dateFormat="d.MM.yyyy HH:mm"
            placeholderText="Введите дату и время"
          />
          <Button
            className="clearDateButton"
            handlClick={handleClickCloseFirstDate}
            isDisabled={durationArend === null || Number.isNaN(durationArend)}
          />
        </div>
      </div>
      <div className="dataPicker__endDate">
        <p className="dataPicker__textTwo">По</p>
        <div className="dataPicker__container">
          <DatePicker
            selected={durationArendTwo}
            onChange={(date) => handleClickDurationTwo(date)}
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={15}
            dateFormat="d.MM.yyyy HH:mm"
            placeholderText="Введите дату и время"
          />
          <Button
            className="clearDateButton"
            handlClick={handleClickCloseSecondDate}
            isDisabled={
              durationArendTwo === null || Number.isNaN(durationArendTwo)
            }
          />
          {errorDate && (
            <span className="dataPicker__textError">
              Введите корректную дату
            </span>
          )}
        </div>
      </div>
    </>
  );
};

export default DataPickerBlock;
