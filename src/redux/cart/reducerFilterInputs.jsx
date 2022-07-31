import { createSlice } from "@reduxjs/toolkit";
import { fetchCarFilter, fetchOrderFilter } from "../dataThunk/fetchFiltrInputs";

const initialState = {
  dataCarsInput: [],
  dataOrdersInput: [],
  loadingCarsInput: false,
  loadingOrdersInput: false,
  errorCarsInput: "",
  errorOrdersInput: "",
};

const filterInputsDataSlice = createSlice({
  name: "dataFilterInput",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchCarFilter.pending]: (state) => {
      state.loadingCarsInput = true;
      state.errorCarsInput = "";
    },
    [fetchCarFilter.fulfilled]: (state, action) => {
      state.loadingCarsInput = false;
      state.dataCarsInput = action.payload;
    },
    [fetchCarFilter.error]: (state, action) => {
      state.loadingCarsInput = false;
      state.errorCarsInput = action.payload;
    },

    [fetchOrderFilter.pending]: (state) => {
      state.loadingOrdersInput = true;
      state.errorOrdersInput = "";
    },
    [fetchOrderFilter.fulfilled]: (state, action) => {
      state.loadingOrdersInput = false;
      state.dataOrdersInput = action.payload;
    },
    [fetchOrderFilter.error]: (state, action) => {
      state.loadingOrdersInput = false;
      state.errorOrdersInput = action.payload;
    },
  },
});

export default filterInputsDataSlice.reducer;
