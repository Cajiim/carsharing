import { createAsyncThunk } from "@reduxjs/toolkit";
import { getCarFiltrInput, getOrderFiltrInput } from "../../api/api";

export const fetchCarFilter = createAsyncThunk(
  "dataCarList/fetchCarFilter",
  async (_, { rejectWithValue }) => {
    try {
      const response = await getCarFiltrInput();
      const data = await response.data;
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchOrderFilter = createAsyncThunk(
  "dataOrderList/fetchOrderFilter",
  async (_, { rejectWithValue }) => {
    try {
      const response = await getOrderFiltrInput();
      const data = await response.data;
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
