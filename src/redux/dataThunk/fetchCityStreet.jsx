import { createAsyncThunk } from "@reduxjs/toolkit";
import {getCities, getStreet} from "../../api/api";

export const fetchDataCitys = createAsyncThunk(
  "dataCityStreet/fetchDataCitys",
  async (_, { rejectWithValue }) => {
    try {
      const response = await getCities();
      const data = await response.data;
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
      const response = await getStreet();
      const data = await response.data;
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
