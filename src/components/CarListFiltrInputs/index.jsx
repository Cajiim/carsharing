import React, { useState, memo } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import dropDown from "../../assets/svg/dropDown.svg";
import style from "./index.scss";

const cn = classNames.bind(style);

const CarListFiltrInputs = ({
  setCarNameForFiltr,
  setMinPriceForFiltr,
  setMaxPriceForFiltr,
  setCarTypeForFiltr,
  uniqueNames,
  uniqueMinPrice,
  uniqueMaxPrice,
  uniqueTypeCars,
}) => {
  const [carNameFromList, setCarNameFromList] = useState("");
  const [minPriceFromList, setMinPriceFromList] = useState("");
  const [maxPriceFromList, setMaxPriceFromList] = useState("");
  const [carTypeFromList, setCarTypeFromList] = useState("");

  const [carList, setCarList] = useState(false);
  const [minPriceList, setMinPriceList] = useState(false);
  const [maxPriceList, setMaxPriceList] = useState(false);
  const [carTypeList, setCarTypeList] = useState(false);

  return (
    <div className="carListFiltrInputs_container_mainContent_sorting">
      <div className="carListFiltrInputs_container_mainContent_sorting_input">
        <div className="carListFiltrInputs_container_mainContent_sorting_categories">
          <input
            className="carListFiltrInputs_container_mainContent_sorting_input_name"
            value={carNameFromList}
            placeholder="Выберите название"
            onClick={() => setCarList(!carList)}
            onChange={(e) => setCarNameFromList(e.target.value)}
          ></input>
          <img
            src={dropDown}
            alt="dropDown"
            className="carListFiltrInputs_container_mainContent_sorting_input_imgDropDown"
            onClick={() => setCarList(!carList)}
          ></img>
          <ul
            className={cn(
              "carListFiltrInputs_container_mainContent_sorting_input_name_nameList",
              {
                carListFiltrInputs_container_mainContent_sorting_input_name_nameList_active:
                  carList,
              }
            )}
          >
            {uniqueNames.map((el) => (
              <li
                key={el.toString()}
                className="carListFiltrInputs_container_mainContent_sorting_input_name_nameList_carName"
                onClick={() => {
                  setCarNameFromList(el);
                  setCarList(false);
                }}
              >
                {el}
              </li>
            ))}
          </ul>
        </div>
        <div className="carListFiltrInputs_container_mainContent_sorting_categories">
          <input
            className="carListFiltrInputs_container_mainContent_sorting_input_minPrice"
            value={minPriceFromList}
            placeholder="Выберите цену"
            onClick={() => setMinPriceList(!minPriceList)}
            onChange={(e) => setMinPriceFromList(e.target.value)}
          ></input>
          <img
            src={dropDown}
            alt="dropDown"
            className="carListFiltrInputs_container_mainContent_sorting_input_imgDropDown"
            onClick={() => setMinPriceList(!minPriceList)}
          ></img>
          <ul
            className={cn(
              "carListFiltrInputs_container_mainContent_sorting_input_name_minPriceList",
              {
                carListFiltrInputs_container_mainContent_sorting_input_name_minPriceList_active:
                  minPriceList,
              }
            )}
          >
            {uniqueMinPrice.map((el) => (
              <li
                key={el.toString()}
                className="carListFiltrInputs_container_mainContent_sorting_input_name_minPriceList_minPrice"
                onClick={() => {
                  setMinPriceFromList(el);
                  setMinPriceList(false);
                }}
              >
                {el}
              </li>
            ))}
          </ul>
        </div>
        <div className="carListFiltrInputs_container_mainContent_sorting_categories">
          <input
            className="carListFiltrInputs_container_mainContent_sorting_input_maxPrice"
            value={maxPriceFromList}
            placeholder="Выберите цену"
            onClick={() => setMaxPriceList(!maxPriceList)}
            onChange={(e) => setMaxPriceFromList(e.target.value)}
          ></input>
          <img
            src={dropDown}
            alt="dropDown"
            className="carListFiltrInputs_container_mainContent_sorting_input_imgDropDown"
            onClick={() => setMaxPriceList(!maxPriceList)}
          ></img>
          <ul
            className={cn(
              "carListFiltrInputs_container_mainContent_sorting_input_name_maxPriceList",
              {
                carListFiltrInputs_container_mainContent_sorting_input_name_maxPriceList_active:
                  maxPriceList,
              }
            )}
          >
            {uniqueMaxPrice.map((el) => (
              <li
                key={el.toString()}
                className="carListFiltrInputs_container_mainContent_sorting_input_name_maxPriceList_maxPrice"
                onClick={() => {
                  setMaxPriceFromList(el);
                  setMaxPriceList(false);
                }}
              >
                {el}
              </li>
            ))}
          </ul>
        </div>
        <div className="carListFiltrInputs_container_mainContent_sorting_categories">
          <input
            className="carListFiltrInputs_container_mainContent_sorting_input_class"
            value={carTypeFromList}
            placeholder="Выберите класс"
            onClick={() => setCarTypeList(!carTypeList)}
            onChange={(e) => setCarTypeFromList(e.target.value)}
          ></input>
          <img
            src={dropDown}
            alt="dropDown"
            className="carListFiltrInputs_container_mainContent_sorting_input_imgDropDown"
            onClick={() => setCarTypeList(!carTypeList)}
          ></img>
          <ul
            className={cn(
              "carListFiltrInputs_container_mainContent_sorting_input_name_typeCarList",
              {
                carListFiltrInputs_container_mainContent_sorting_input_name_typeCarList_active:
                  carTypeList,
              }
            )}
          >
            {uniqueTypeCars.map((el) => (
              <li
                key={el.toString()}
                className="carListFiltrInputs_container_mainContent_sorting_input_name_typeCarList_typeCar"
                onClick={() => {
                  setCarTypeFromList(el);
                  setCarTypeList(false);
                }}
              >
                {el}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="carListFiltrInputs_container_mainContent_sorting_bottons">
        <button
          type="button"
          className="carListFiltrInputs_container_mainContent_sorting_bottons_reset"
          onClick={() => {
            // Убрать вверх
            setCarNameFromList("");
            setCarTypeFromList("");
            setMaxPriceFromList("");
            setMinPriceFromList("");
            setCarNameForFiltr("");
            setCarTypeForFiltr("");
            setMaxPriceForFiltr("");
            setMinPriceForFiltr("");
          }}
        >
          Reset
        </button>
        <button
          type="button"
          className="carListFiltrInputs_container_mainContent_sorting_bottons_apply"
          onClick={() => {
            // Убрать вверх
            setCarNameForFiltr(carNameFromList);
            setCarTypeForFiltr(carTypeFromList);
            setMaxPriceForFiltr(maxPriceFromList);
            setMinPriceForFiltr(minPriceFromList);
          }}
        >
          Apply
        </button>
      </div>
    </div>
  );
};

CarListFiltrInputs.propTypes = {
  setCarNameForFiltr: PropTypes.func,
  setMinPriceForFiltr: PropTypes.func,
  setMaxPriceForFiltr: PropTypes.func,
  setCarTypeForFiltr: PropTypes.func,    
  uniqueNames: PropTypes.array,  
  uniqueMinPrice: PropTypes.array,     
  uniqueMaxPrice: PropTypes.array, 
  uniqueTypeCars: PropTypes.array,
};
CarListFiltrInputs.defaultProps = {
  setCarNameForFiltr: () => {},
  setMinPriceForFiltr: () => {},
  setMaxPriceForFiltr: () => {},
  setCarTypeForFiltr: () => {},
  uniqueNames: [],
  uniqueMinPrice: [],
  uniqueMaxPrice: [],
  uniqueTypeCars: [],
};

export default memo(CarListFiltrInputs);
