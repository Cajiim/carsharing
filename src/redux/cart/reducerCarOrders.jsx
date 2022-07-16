import { createSlice } from "@reduxjs/toolkit";

const carOrders = createSlice({
  name: "carOrders",
  initialState: {
    carOrders: [],
    periodOfTimeForFiltr: "",
    carNameForFiltr: "",
    cityForFiltr: "",
    orderStatusForFiltr: "",
  },
  reducers: {
    setCarOrders: (state, action) => {
      state.carOrders = action.payload;
    },
    deleteCarOrders: (state) => {
      state.carOrders = [];
    },
    setPeriodOfTimeForFiltr: (state, action) => {
      state.periodOfTimeForFiltr = action.payload;
    },

    setCarNameForFiltr: (state, action) => {
      state.carNameForFiltr = action.payload;
    },
    setCityForFiltr: (state, action) => {
      state.cityForFiltr = action.payload;
    },
    setOrderStatusForFiltr: (state, action) => {
      state.orderStatusForFiltr = action.payload;
    },
  },
});

export const {
  setCarOrders,
  deleteCarOrders,
  setPeriodOfTimeForFiltr,
  setCarNameForFiltr,
  setCityForFiltr,
  setOrderStatusForFiltr,
} = carOrders.actions;

export default carOrders.reducer;
