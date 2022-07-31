import { createSlice } from "@reduxjs/toolkit";
import { fetchDataCitys, fetchDataStreets } from "../dataThunk/fetchCityStreet";

const initialState = {
  dataCitys: [],
  dataStreets: [],
  loadingCitys: false,
  loadingStreets: false,
  errorCitys: "",
  errorStreets: "",
};

const cityStreetDataSlice = createSlice({
  name: "dataCityStreet",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchDataCitys.pending]: (state) => {
      state.loadingCitys = true;
      state.errorCitys = "";
    },
    [fetchDataCitys.fulfilled]: (state, action) => {
      state.loadingCitys = false;
      state.dataCitys = action.payload;
    },
    [fetchDataCitys.error]: (state, action) => {
      state.loadingCitys = false;
      state.errorCitys = action.payload;
    },

    [fetchDataStreets.pending]: (state) => {
      state.loadingStreets = true;
      state.errorStreets = "";
    },
    [fetchDataStreets.fulfilled]: (state, action) => {
      state.loadingStreets = false;
      state.dataStreets = action.payload;
    },
    [fetchDataStreets.error]: (state, action) => {
      state.loadingStreets = false;
      state.errorStreets = action.payload;
    },
  },
});

export default cityStreetDataSlice.reducer;
