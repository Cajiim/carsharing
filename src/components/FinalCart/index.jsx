import { React, useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import moment from "moment";

import "./index.scss";

function FinalCart() {
  const [contentModel, setContentModel] = useState([]);

  async function fetchData() {
    const url = window.location.href
      .slice(window.location.href.indexOf("?"))
      .split(/[&?]{1}[\w\d]+=/);
    try {
      axios
        .get(
          `https://6288c18410e93797c15e9916.mockapi.io/FinalOrder?search=${
            url[1] ? url[1] : null
          }`
        )
        .then((response) => {
          axios
            .get(
              `https://6288c18410e93797c15e9916.mockapi.io/Cars/${
                response.data[0] ? response.data[0].model : ""
              }`
            )
            .then((res) => {
              const fullOrder = response.data[0] ? response.data[0] : null;
              if (fullOrder !== null) {
                fullOrder.model = res.data;
              }

              setContentModel(fullOrder);
            });
        });
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const modelFromBack = contentModel?.model;
  const additionallyOptionsFromBack = contentModel?.additionalOptions;
  const startDateFromBack = additionallyOptionsFromBack?.startDate;

  moment().format();
  const {
    checkFuelState: checkedOne,
    modelInCart: model,
    durationArend: startDate,
    randomFuelLvl,
    carNumber,
  } = useSelector(({ finalOrder }) => finalOrder);

  const nameCar = model?.name === undefined ? modelFromBack?.name : model?.name;
  const modelCar =
    model?.model === undefined ? modelFromBack?.model : model?.model;
  const imgCar = model?.img === undefined ? modelFromBack?.img : model?.img;

  const randomFuelLvlForCart =
    additionallyOptionsFromBack?.randomFuelLvl || randomFuelLvl;
  const checkedFuelFromBack = additionallyOptionsFromBack?.checkedFuel;
  const fuelLevel =
    (checkedFuelFromBack !== undefined ? checkedFuelFromBack : checkedOne) ===
    true
      ? "100%"
      : `${randomFuelLvlForCart}%`;
  const carNumberForCart = additionallyOptionsFromBack?.carNumber || carNumber;

  const tabIndex = useSelector((state) => state.tableIndex.tabIndex);
  const tabIndexFromBack = additionallyOptionsFromBack?.tabIndex;

  const startOfLease = moment(new Date(startDate)).format("DD.MM.YYYY h:mm");
  const startOfLeaseFromBack = moment(new Date(startDateFromBack)).format(
    "DD.MM.YYYY h:mm"
  );
  return (
    <div className="finalCard_container">
      <div className="finalCard_container_text_content">
        {tabIndex === "5" || tabIndexFromBack === "5" ? (
          <h3 className="finalCard_container_title">Ваш заказ подтвержден</h3>
        ) : null}

        <p className="finalCard_container_text_content_title">
          {modelCar}, {nameCar}
        </p>
        <div className="finalCard_container_text_content_carNumber_container">
          <span className="finalCard_container_text_content_carNumber">
            {carNumberForCart} 73
          </span>
        </div>
        <p className="finalCard_container_text_content_gas">
          <b>Топливо</b> {fuelLevel}
        </p>
        <p className="finalCard_container_text_content_availableTime">
          <b>Доступна с </b>
          {startDate && startDate !== null
            ? startOfLease.toString()
            : startOfLeaseFromBack.toString()}
        </p>
      </div>
      <img src={imgCar} alt="car" className="finalCard_container_img"></img>
    </div>
  );
}

export default FinalCart;
