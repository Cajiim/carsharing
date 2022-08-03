import axios from "axios";

const baseURL = process.env.REACT_APP_API_BASE_ADDRESS;
const instance = axios.create({ baseURL });

export const getCities = () => instance.get("/Cities");

export const getStreet = () => instance.get("/Streets");

export const getSingleCar = (urlId) => instance.get(`/Cars/${urlId}`);

export const getFullCarList = (urlFilter, page, limit) => {
  const paramsObj = {
    _page: page,
    _limit: limit,
  };
  const { maxPrice, minPrice, typeCarCart, name } = urlFilter;
  if (maxPrice) paramsObj.maxPrice = maxPrice;
  if (minPrice) paramsObj.minPrice = minPrice;
  if (typeCarCart) paramsObj.typeCarCart = typeCarCart;
  if (name) paramsObj.name = name;

  return instance.get(`/Cars`, { params: paramsObj });
};

export const getSelectivityOrder = (urlCurr) =>
  instance.get(`/FinalOrders?orderNumber=${urlCurr}`, {
    params: { _expand: "Cars" },
  });

export const getFullCarOrders = (urlFilter, page, limit) => {
  const paramsObj = {
    _expand: "Cars",
    _page: page,
    _limit: limit,
  };
  const { CarsId } = urlFilter;
  if (CarsId) paramsObj.CarsId = CarsId;
  const url = window.location.href
    .slice(window.location.href.indexOf("?"))
    .split(/[&?]{1}[\w\d]+=/);
  const filterString = url[0] !== "s" ? url[0] : "";
  return instance.get(`/FinalOrders${filterString}`, {
    params: paramsObj,
  });
};

export const getCarFiltrInput = () => instance.get(`/Cars`);

export const getOrderFiltrInput = () =>
  instance.get(`FinalOrders`, {
    params: {
      _expand: "Cars",
    },
  });

export const putCar = (
  model,
  name,
  typeCarCart,
  minPrice,
  maxPrice,
  imgCar,
  descriptionCar,
  arrAllColors,
  urlId
) =>
  instance.put(`/Cars/${urlId}`, {
    model,
    name,
    typeCarCart,
    minPrice,
    maxPrice,
    imgCar,
    descriptionCar,
    arrAllColors,
  });

export const postCar = (
  model,
  name,
  typeCarCart,
  minPrice,
  maxPrice,
  imgCar,
  descriptionCar,
  arrAllColors
) =>
  instance.post(`/Cars`, {
    model,
    name,
    typeCarCart,
    minPrice,
    maxPrice,
    imgCar,
    descriptionCar,
    arrAllColors,
  });

export const deleteCar = (urlId) => instance.delete(`/Cars/${urlId}`);

export const deleteFinalOrder = (orderId) =>
  instance.delete(`/FinalOrders/${orderId}`);

export const postHandleSelectCar = (orderNumber, CarsId, additionalOptions) =>
  instance.post(`/FinalOrders?orderNumber=${orderNumber}`, {
    orderNumber,
    CarsId,
    additionalOptions,
  });

export const getAllCars = () => instance.get(`/Cars`);
