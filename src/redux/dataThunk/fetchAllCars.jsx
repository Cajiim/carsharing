import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllCars } from "../../api/api";

const fetchAllCars = createAsyncThunk(
  "dataAllCars/fetchAllCars",
  async (_, { rejectWithValue }) => {
    try {
      const response = await getAllCars();
      const data = await response.data;
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export default fetchAllCars;
