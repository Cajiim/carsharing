import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
/* import { useLocation } from "react-router-dom"; */
/* import queryString from "query-string";  */
/* import { useSearchParams } from "react-router-dom"; */

/* import {QueryStringCarList} from '../helpers/queryStringCarList' */

export const fetchDataCarList = createAsyncThunk(
  "getData/fetchData",
  async (_, { rejectWithValue }) => {
    const url = window.location.href
      .slice(window.location.href.indexOf("?"))
      .split(/[&?]{1}[\w\d]+=/);
    /* const { search } = useLocation();
    const { carNumber } = queryString.parse(search); */
    try {
      const response = await axios.get(
        `https://6288c18410e93797c15e9916.mockapi.io/Cars/${
          url[1] ? url[1] : ""
        }`
      );
      const data = await response.data;
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchDataFullCarList = createAsyncThunk(
  "getData/fetchDataFullCarList",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        "https://6288c18410e93797c15e9916.mockapi.io/Cars"
      );
      const data = await response.data;
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchDataSelectivelyCarOrders = createAsyncThunk(
  "getData/fetchDataSelectivelyCarOrders",
  async (_, { rejectWithValue }) => {
    /* const location = useLocation();
    const url = location.search
      .slice(location.search.indexOf("?"))
      .split(/[&?]{1}[\w\d]+=/); */
    const url = window.location.href
      .slice(window.location.href.indexOf("?"))
      .split(/[&?]{1}[\w\d]+=/);
    try {
      const response = await axios.get(
        `https://6288c18410e93797c15e9916.mockapi.io/FinalOrder?search=${
          url[1] ? url[1] : null
        }`
      );
      const data = await response.data;
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchDataCarOrders = createAsyncThunk(
  "getData/fetchDataCarOrders",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        "https://6288c18410e93797c15e9916.mockapi.io/FinalOrder"
      );
      const data = await response.data;
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
