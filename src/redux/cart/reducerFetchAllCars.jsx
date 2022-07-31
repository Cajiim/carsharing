import { createSlice } from "@reduxjs/toolkit";
import  fetchAllCars  from "../dataThunk/fetchAllCars";

const initialState = {
  dataCars: [],
  loadingCars: false,
  errorCars: "",
};

const dataCarsSlice = createSlice({
  name: "dataCars",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchAllCars.pending]: (state) => {
      state.loadingCars = true;
      state.errorCars = "";
    },
    [fetchAllCars.fulfilled]: (state, action) => {
      state.loadingCars = false;
      state.dataCars = action.payload;
    },
    [fetchAllCars.error]: (state, action) => {
      state.loadingCars = false;
      state.errorCars = action.payload;
    },
  },
});

export default dataCarsSlice.reducer;
