import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getSingleCar,
  getFullCarList,
  getSelectivityOrder,
  getFullCarOrders,
} from "../../api/api";

export const fetchDataCarList = createAsyncThunk(
  "getData/fetchData",
  async (_, { rejectWithValue }) => {
    const url = window.location.href
      .slice(window.location.href.indexOf("?"))
      .split(/[&?]{1}[\w\d]+=/);
    const urlId = url[1] ? url[1] : "";
    try {
      const response = await getSingleCar(urlId);
      const data = await response.data;
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchDataFullCarList = createAsyncThunk(
  "getData/fetchDataFullCarList",
  async ({ urlFilter, page, limit }, { rejectWithValue }) => {
    try {
      const response = await getFullCarList(urlFilter, page, limit);
      const data = await response.data;
      const totalCars = response.headers["x-total-count"];
      return { data, totalCars };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchDataSelectivelyCarOrders = createAsyncThunk(
  "getData/fetchDataSelectivelyCarOrders",
  async (_, { rejectWithValue }) => {
    const url = window.location.href
      .slice(window.location.href.indexOf("?"))
      .split(/[&?]{1}[\w\d]+=/);
    const urlCurr = url[1] ? url[1] : "";
    try {
      const response = await getSelectivityOrder(urlCurr);
      const data = await response.data;
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchDataCarOrders = createAsyncThunk(
  "getData/fetchDataCarOrders",
  async ({ urlFilter, page, limit }, { rejectWithValue }) => {
    try {
      const response = await getFullCarOrders(urlFilter, page, limit);
      const data = await response.data;
      const totalCars = response.headers["x-total-count"];
      return { data, totalCars };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
