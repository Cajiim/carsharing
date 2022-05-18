import {React, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import "./index.scss";
import {
  setColor,
  setArendTime,
  setDurationArend,
  setDurationArendTwo,
  setCheckOne,
  setCheckTwo,
  setCheckThree,
} from "../../redux/cart/reducerFinalOrder";

function Additionally() {
  const [inputOne, setInputOne] = useState("");
  const [inputTwo, setInputTwo] = useState("");
  const [checkedOne, setCheckedOne] = useState(false);
  const [checkedTwo, setCheckedTwo] = useState(false);
  const [checkedThree, setCheckedThree] = useState(false);
 
  const dispatch = useDispatch();
  const handleClick = (value) => {
    dispatch(setColor(value));
  };
  const handleClickDuration = (value) => {
    dispatch(setDurationArend(value));
  };
  const handleClickDurationTwo = (value) => {
    dispatch(setDurationArendTwo(value));
  };
  const handleClickFare = (value) => {
    dispatch(setArendTime(value));
  };
  const handleClickCheckboxOne = () => {
    dispatch(setCheckOne(!checkedOne));
  };
  const handleClickCheckboxTwo = () => {
    dispatch(setCheckTwo(!checkedTwo));
  };
  const handleClickCheckboxThree = () => {
    dispatch(setCheckThree(!checkedThree));
  };

  const checkGas =  useSelector((state) => state.finalOrder.checkedOne);
  const checkBabyChair = useSelector((state) => state.finalOrder.checkedTwo);
  const checkRightHand = useSelector((state) => state.finalOrder.checkedThree)
  const startDate = useSelector((state) => state.finalOrder.durationArend)
  const endDate = useSelector ((state) => state.finalOrder.durationArendTwo)
  const tarifRate = useSelector ((state) => state.finalOrder.arendTime)
  const colorCar = useSelector ((state) => state.finalOrder.colorCar)
  return (
    <div>
      <p className="tabs_left_content_radioContent_title">Цвет</p>

      <div className="tabs_left_content_radioContent">
        <input
          className="radio_box"
          name="color"
          type="radio"
          value="all"
          checked={colorCar === null ? true : colorCar === 'all' ? true : false}
          onClick={(e) => handleClick(e.target.value)}
        ></input>
        <p className="radio_text">Любой</p>
        <input
          className="radio_box"
          name="color"
          type="radio"
          value="red"
          checked={colorCar === null ? false : colorCar === 'red' ? true : false}
          onClick={(e) => handleClick(e.target.value)}
        ></input>
        <p className="radio_text">Красный</p>
        <input
          className="radio_box"
          name="color"
          type="radio"
          value="blue"
          checked={colorCar === null ? false : colorCar === "blue" ? true : false }
          onClick={(e) => handleClick(e.target.value)}
        ></input>
        <p className="radio_text">Голубой</p>
      </div>

      <div>
        <p className="tabs_left_content_date_title">Дата аренды</p>
        <div className="tabs_left_content_date_content">
          <p>С</p>
          <input
            type="datetime-local"
            id="start-date"
            value={startDate === null ? undefined : inputOne}
            onInput={(e) => {
              handleClickDuration(e.target.value);
              setInputOne(e.target.value);
            }}
            className="tabs_left_content_date_one"
          ></input>{console.log(startDate)}
        </div>

        <div className="tabs_left_content_date_content">
          <p>По</p>
          <input
            type="datetime-local"
            id="end-date"
            value={endDate === null ? undefined : inputTwo}
            onInput={(e) => {
              handleClickDurationTwo(e.target.value);
              setInputTwo(e.target.value);
            }}
            className="tabs_left_content_date_two"
          ></input>{console.log(endDate)}
        </div>
      </div>
      <p className="tabs_left_content_radioContent_title">Тариф</p>
      <div className="tabs_left_content_radioContent_arend">
        <div className="tabs_left_content_radioContent_arend_content">
          <input
            className="radio_box"
            name="tax"
            type="radio"
            value="minut"
            checked={tarifRate === null ? false : tarifRate === 'minut' ? true : false}
            onClick={(e) => handleClickFare(e.target.value)}
          ></input>
          <p className="radio_text">Поминутно, 7Р/мин</p>
        </div>
        <div className="tabs_left_content_radioContent_arend_content">
          <input
            className="radio_box"
            name="tax"
            type="radio"
            value="days"
            onClick={(e) => handleClickFare(e.target.value)}
            checked={tarifRate === null ? true : tarifRate === 'days' ? true : false}
          ></input>
          <p className="radio_text">На сутки, 1999Р/сутки</p>
        </div>
      </div>

      <div className="tabs_left_content_additional_services">
        <p>Доп услуги</p>
        <form className="tabs_left_content_additional_services_content">
          <input
            value="gasoline"
            id="gasoline"
            type="checkbox"
            className="tabs_left_content_additional_services_content_input"
            checked={checkGas === false ? false : checkedOne}
            /* checked={checkedOne} */
            /* onChange={() => setCheckedOne(!checkedOne)} */
            onClick={() => {setCheckedOne(!checkedOne) ; handleClickCheckboxOne()}}
          ></input>
          <label
            htmlFor="gasoline"
            className="tabs_left_content_additional_services_content_label"
          >
            Полный бак, 500р
          </label>
        </form>
        <form className="tabs_left_content_additional_services_content">
          <input
            value="babyChair"
            id="ch_effects"
            type="checkbox"
            className="tabs_left_content_additional_services_content_input"
            checked={checkBabyChair === false ? false : checkedTwo}
            onChange={() => setCheckedTwo(!checkedTwo)}
            onClick={handleClickCheckboxTwo}
          ></input>
          <label
            htmlFor="babyChair"
            className="tabs_left_content_additional_services_content_label"
          >
            Детское кресло, 200р
          </label>
        </form>
        <form className="tabs_left_content_additional_services_content">
          <input
            value="rightHand"
            id="rightHand"
            type="checkbox"
            className="tabs_left_content_additional_services_content_input"
            checked={checkRightHand === false ? false : checkedThree}
            onChange={() => setCheckedThree(!checkedThree)}
            onClick={handleClickCheckboxThree}
          ></input>
          <label
            htmlFor="rightHand"
            className="tabs_left_content_additional_services_content_label"
          >
            Правый руль, 1600р
          </label>
        </form>
      </div>
    </div>
  );
}

export default Additionally;
