import axios from "axios";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

export const HandleChangeCar = () => {
  const {
    modelCarCart,
    typeCarCart,
    minPrice,
    maxPrice,
    imgCar,
    descriptionCar,
    arrAllColors,
  } = useSelector(({ carSettings }) => carSettings);
  const choiseFromArr = modelCarCart.split(",");
  const model = choiseFromArr[0];
  const name = choiseFromArr[1];
  const location = useLocation();
  const url = location.search
    .slice(location.search.indexOf("?"))
    .split(/[&?]{1}[\w\d]+=/);

  axios
    .put(
      `https://6288c18410e93797c15e9916.mockapi.io/Cars/${
        url[1] ? url[1] : ""
      }`,
      {
        model,
        name,
        typeCarCart,
        minPrice,
        maxPrice,
        imgCar,
        descriptionCar,
        arrAllColors,
      }
    )
    .then((Response) => console.log(Response, "posting data"))
    .catch((error) => console.log(error));
};


export const HandleAddCar = () => {
  const {
    modelCarCart,
    typeCarCart,
    minPrice,
    maxPrice,
    imgCar,
    descriptionCar,
    arrAllColors,
  } = useSelector(({ carSettings }) => carSettings);
  const choiseFromArr = modelCarCart.split(",");
  const model = choiseFromArr[0];
  const name = choiseFromArr[1];
  axios
    .post(`https://6288c18410e93797c15e9916.mockapi.io/Cars`, {
      model,
      name,
      typeCarCart,
      minPrice,
      maxPrice,
      imgCar,
      descriptionCar,
      arrAllColors,
    })
    .then((Response) => console.log(Response, "posting data"))
    .catch((error) => console.log(error));
};


export const HandleDeleteCar = () => {
  const location = useLocation();

  const url = location.search
    .slice(location.search.indexOf("?"))
    .split(/[&?]{1}[\w\d]+=/);
  axios
    .delete(
      `https://6288c18410e93797c15e9916.mockapi.io/Cars/${url[1] ? url[1] : ""}`
    )
    .then((Response) =>
      console.log(Response, `Delete!! car with id ${url[1]} `)
    )
    .catch((error) => console.log(error));
};
