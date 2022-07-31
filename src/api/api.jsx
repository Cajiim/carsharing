import axios from "axios";

const baseURL = process.env.REACT_APP_API_BASE_ADDRESS;
const instance = axios.create({
  baseURL,
});

export const getCities = () => instance.get("/Cities");

export const getStreet = () => instance.get("/Streets");

export const getSingleCar = (urlId) => instance.get(`/Cars/${urlId}`);

export const getFullCarList = (urlFilter, page, limit) =>
  instance.get(`/Cars`, {
    params: {
      maxPrice: urlFilter.maxPrice || undefined,
      minPrice: urlFilter.minPrice || undefined,
      name: urlFilter.name || undefined,
      typeCarCart: urlFilter.typeCarCart || undefined,
      _page: page,
      _limit: limit,
    },
  });

export const getSelectivityOrder = (urlCurr) => instance.get(`/FinalOrders?orderNumber=${urlCurr}`, {
    params: { _expand: "Cars", },
  });

/* export const getFullCarOrders = 123; */

export const getCarFiltrInput = () => (instance.get(`/Cars`));

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
