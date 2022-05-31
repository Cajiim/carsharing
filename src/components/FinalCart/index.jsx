import {React, useState, useEffect} from "react";
import axios from "axios";
import { useSelector } from "react-redux";

import "./index.scss";

function carNumber() {
  let number = "";
  const possible = "АБВГДЕЖЗКЛМНОПРСТФХЧШ";
  for (let i = 0; i < 2; i+=1)
    number += possible.charAt(Math.floor(Math.random() * possible.length));
  return number;
}
function carNumberTwo() {
  let number = "";
  const possible = "АБВГДЕЖЗКЛМНОПРСТФХЧШ";
  for (let i = 0; i < 1; i+=1)
    number += possible.charAt(Math.floor(Math.random() * possible.length));
  return number;
}

function randomLevel(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function FinalCart() {

  const [contentModel, setContentModel] = useState([]);
  
  useEffect (() => {
    async function fetchData () {
      try {
         const [contentModelResponse] = await Promise.all ([
           axios.get('https://6288c18410e93797c15e9916.mockapi.io/FinalOrder')
         ]);
        setContentModel(contentModelResponse.data)
        
      }catch(error) {
        console.error(error);
      }

    }
    fetchData();
    
  }, 
  []);
  /* console.log(contentModel[0]) */

  const modelFromBack = contentModel[0]?.model;
  const additionallyOptionsFromBack = contentModel[0]?.additionalOptions;
  const startDateFromBack = additionallyOptionsFromBack?.startDate
  /* console.log(startDateFromBack)  */

  /* async function */
  
/*   const a = contentModel[0].model.name;
  console.log(a) */
/*   console.log(b) */

  const checkedOne = useSelector((state) => state.finalOrder.checkFuelState);
  const model = useSelector((state) => state.finalOrder.modelInCart);
  const startDate = useSelector((state) => state.finalOrder.durationArend);

  const nameCar =  model?.name === undefined ? modelFromBack?.name : model?.name;
  const modelCar = model?.model === undefined ? modelFromBack?.model : model?.model;
  const imgCar = model?.img === undefined ? modelFromBack?.img : model?.img;
  
  
  const fuelLevelFromBack = additionallyOptionsFromBack?.checkedFuel;
  const fuelLevel = (fuelLevelFromBack !== undefined ? fuelLevelFromBack : checkedOne)  === true ? "100%" : randomLevel(10, 40) + "%";
  

  const tabIndex = useSelector((state) => state.tableIndex.tabIndex);
  
  

  /* console.log(tabIndex, 'таб индекс')
  console.log(additionallyOptionsFromBack) */
  /* console.log(tabIndexFromBack,'таб индекс с бекенда') */
  return (
    <div className="finalCard_container">
      <div className="finalCard_text_content">
      {/* tabIndex === '4' ? tabIndex : additionallyOptionsFromBack?.tabIndex ? additionallyOptionsFromBack?.tabIndex :  tabIndex             */}
        {(/* additionallyOptionsFromBack?.tabIndex ? additionallyOptionsFromBack?.tabIndex :  tabIndex */
        tabIndex === '4' ? tabIndex : additionallyOptionsFromBack?.tabIndex ? additionallyOptionsFromBack?.tabIndex :  tabIndex
        )  === "5" ? (
          <h3 className="finalCard_container_title">Ваш заказ подтвержден</h3>
        ) : null}
        
        <p className="finalCard_text_content_title">
          {modelCar}, {nameCar}
        </p>
        <div className="finalCard_text_content_carNumber_container">
          <span className="finalCard_text_content_carNumber">
            {carNumberTwo()} {randomLevel(100, 999)} {carNumber()} 73
          </span>
        </div>
        <p className="finalCard_text_content_gas">
          <b>Топливо</b> {fuelLevel}
        </p>
        <p className="finalCard_text_content_availableTime">
          <b>Доступна с</b> {startDateFromBack !== undefined ? startDateFromBack : startDate}
        </p>
      </div>
      <img src={imgCar} alt="car" className="finalCard_img"></img>
    </div>
  );
}

export default FinalCart;
