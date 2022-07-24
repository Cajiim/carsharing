import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

/* import {QueryStringCarList} from '../helpers/queryStringCarList' */

export const fetchDataCitys = createAsyncThunk(
  "dataCityStreet/fetchDataCitys",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `https://6288c18410e93797c15e9916.mockapi.io/Cities`
      );
      const data = await response.data[0].сities;
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchDataStreets = createAsyncThunk(
  "dataCityStreet/fetchDataStreet",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `https://6288c18410e93797c15e9916.mockapi.io/Cities`
      );
      const data = await response.data[0].streets;
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
