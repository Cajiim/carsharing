import { React, useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import moment from "moment";

import "./index.scss";

function carNumber() {
  let number = "";
  const possible = "АБВГДЕЖЗКЛМНОРСТФХЧШ";
  for (let i = 0; i < 2; i += 1)
    number += possible.charAt(Math.floor(Math.random() * possible.length));
  return number;
}
function carNumberTwo() {
  let number = "";
  const possible = "АБВГДЕЖЗКЛМНОРСТФХЧШ";
  for (let i = 0; i < 1; i += 1)
    number += possible.charAt(Math.floor(Math.random() * possible.length));
  return number;
}

function randomLevel(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}


function FinalCart() {
  const [contentModel, setContentModel] = useState([]);
  /* async function fetchData() {
    try {
      const [contentModelResponse] = await Promise.all([
        axios.get(
          `https://6288c18410e93797c15e9916.mockapi.io/FinalOrder?orderNumber=${orderNumber}`
        ),
      ]);
      setContentModel(contentModelResponse.data);
    } catch (error) {
      console.error(error);
    }
  } */ /*  blogs?=blog1 */

  /* const nowUrl = document.location.toString().toLowerCase();;
  const url = nowUrl;
  const c = 'orderNumber';
  const comment = url.split('/').filter(e => e).find(e => e.startsWith(c) && +e.replace(c, '') > 0)
 console.log( comment, 'коментарий') */
  

 /* let url = window.location.href
 const c = 'orderNumber'
 
 url = url.slice(-1) === '/' ? url.slice(0, -1) : url
 const comment = url.split('/').slice(-1)[0]
 console.log(`comment exists = ${comment.startsWith(c) && +comment.replace(c, '') > 0}`) */
 

/*  let params = (new URL(document.location)).searchParams; 
console.log(params.get("data")); */
/* function getUrlVars()
{
return window.location.href.slice(window.location.href.indexOf('?')).split(/[&?]{1}[\w\d]+=/);
}  */
const url = window.location.href.slice(window.location.href.indexOf('?')).split(/[&?]{1}[\w\d]+=/);

  async function fetchData() {
    try {
      const [contentModelResponse] = await Promise.all([
        axios.get(
          `https://6288c18410e93797c15e9916.mockapi.io/Cars/1/FinalOrder?search=${url[1]}`
        ),
      ]);
      setContentModel(contentModelResponse.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const modelFromBack = contentModel[0]?.model;
  const additionallyOptionsFromBack = contentModel[0]?.additionalOptions;
  const startDateFromBack = additionallyOptionsFromBack?.startDate;

  moment().format();
  const {
    checkFuelState: checkedOne,
    modelInCart: model,
    durationArend: startDate,
  } = useSelector(({ finalOrder }) => finalOrder);

  const nameCar = model?.name === undefined ? modelFromBack?.name : model?.name;
  const modelCar =
    model?.model === undefined ? modelFromBack?.model : model?.model;
  const imgCar = model?.img === undefined ? modelFromBack?.img : model?.img;

  const fuelLevelFromBack = additionallyOptionsFromBack?.checkedFuel;
  const fuelLevel =
    (fuelLevelFromBack !== undefined ? fuelLevelFromBack : checkedOne) === true
      ? "100%"
      : `${randomLevel(10, 40)}%`;

  const tabIndex = useSelector((state) => state.tableIndex.tabIndex);

  const mom = moment(new Date(startDate)).format("DD.MM.YYYY h:mm");

  const momTwo = moment(new Date(startDateFromBack)).format("DD.MM.YYYY h:mm");

  return (
    <div className="finalCard_container">
      <div className="finalCard_text_content">
        {(tabIndex === "4"
          ? tabIndex
          : additionallyOptionsFromBack?.tabIndex
          ? additionallyOptionsFromBack?.tabIndex
          : tabIndex) === "5" ? (
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
          <b>Доступна с</b>{" "}
          {(startDate && startDate!==null) ? mom.toString() : momTwo.toString()}
        </p>
      </div>
      <img src={imgCar} alt="car" className="finalCard_img"></img>
    </div>
  );
}

export default FinalCart;
