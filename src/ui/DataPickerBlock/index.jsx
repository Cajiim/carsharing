import React from "react";
import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  setDurationArend,
  setDurationArendTwo,
  deleteDurationArend,
  deleteDurationArendTwo,
} from "../../redux/cart/reducerFinalOrder";

import style from "./index.scss";

const cn = classNames.bind(style);

function DataPickerBlock() {
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

  return (
    <div className="dataPicker_container">
      <p className="dataPicker_container_title">Дата аренды</p>
      <div className="dataPicker_container_startDate">
        <p className="dataPicker_container_startDate_text">С</p>
        <div className="dataPicker_container_startDate_content">
          <DatePicker
            selected={durationArend}
            onChange={(date) => handleClickDuration(date)}
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={15}
            dateFormat="d.MM.yyyy HH:mm"
            placeholderText="Введите дату и время"
          />
          <button
            type="button"
            className={cn("dataPicker_container_startDate_content_button", {
              dataPicker_container_startDate_content_button_disabled:
                durationArend === null || Number.isNaN(durationArend),
            })}
            onClick={() => {
              handleClickCloseFirstDate();
            }}
          >
            &times;
          </button>
        </div>
      </div>

      <div className="dataPicker_container_endDate">
        <p className="dataPicker_container_endDate_text">По</p>
        <div className="dataPicker_container_endDate_content">
          <DatePicker
            selected={durationArendTwo}
            onChange={(date) => handleClickDurationTwo(date)}
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={15}
            dateFormat="d.MM.yyyy HH:mm"
            placeholderText="Введите дату и время"
          />
          <button
            type="button"
            className={cn("dataPicker_container_endDate_content_button", {
              dataPicker_container_endDate_content_button_disabled:
                durationArendTwo === null || Number.isNaN(durationArendTwo),
            })}
            onClick={() => {
              handleClickCloseSecondDate();
            }}
          >
            &times;
          </button>
          {durationArend >= durationArendTwo &&
            durationArend !== null &&
            durationArendTwo !== null &&
            Number.isNaN(durationArendTwo) === false &&
            Number.isNaN(durationArend) === false && (
              <span className="dataPicker_container_endDate_content_error">
                Введите корректную дату
              </span>
            )}
        </div>
      </div>
    </div>
  );
}

export default DataPickerBlock;
