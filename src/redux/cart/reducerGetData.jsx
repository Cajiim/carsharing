import { createSlice } from "@reduxjs/toolkit";

import {
  fetchDataCarList,
  fetchDataCarOrders,
  fetchDataFullCarList,
  fetchDataSelectivelyCarOrders,
} from "../../api/fetchDataThunk";

const initialState = {
  dataCarList: [],
  dataFullCarList: [],
  dataOrders: [],
  dataSelectOrder: [],
  loadingCarList: false,
  loadingFullCarList: false,
  loadingOrders: false,
  loadingSelectOrder: false,
  errorCarList: "",
  errorFullCarList: "",
  errorOrders: "",
  errorSelectOrder: "",
};

const getData = createSlice({
  name: "getData",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchDataCarList.pending]: (state) => {
      state.loadingCarList = true;
      state.errorCarList = "";
    },
    [fetchDataCarList.fulfilled]: (state, action) => {
      state.loadingCarList = false;
      state.dataCarList = action.payload;
    },
    [fetchDataCarList.error]: (state, action) => {
      state.loadingCarList = false;
      state.errorCarList = action.payload;
    },

    [fetchDataFullCarList.pending]: (state) => {
      state.loadingFullCarList = true;
      state.errorFullCarList = "";
    },
    [fetchDataFullCarList.fulfilled]: (state, action) => {
      state.loadingFullCarList = false;
      state.dataFullCarList = action.payload;
    },
    [fetchDataFullCarList.error]: (state, action) => {
      state.loadingFullCarList = false;
      state.errorFullCarList = action.payload;
    },

    [fetchDataSelectivelyCarOrders.pending]: (state) => {
      state.loadingSelectOrder = true;
      state.errorSelectOrder = "";
    },
    [fetchDataSelectivelyCarOrders.fulfilled]: (state, action) => {
      state.loadingSelectOrder = false;
      state.dataSelectOrder = action.payload;
    },
    [fetchDataSelectivelyCarOrders.error]: (state, action) => {
      state.loadingSelectOrder = false;
      state.errorSelectOrder = action.payload;
    },

    [fetchDataCarOrders.pending]: (state) => {
      state.loadingOrders = true;
      state.errorOrders = "";
    },
    [fetchDataCarOrders.fulfilled]: (state, action) => {
      state.loadingOrders = false;
      state.dataOrders = action.payload;
    },
    [fetchDataCarOrders.error]: (state, action) => {
      state.loadingOrders = false;
      state.errorOrders = action.payload;
    },
  },
});

export default getData.reducer;
