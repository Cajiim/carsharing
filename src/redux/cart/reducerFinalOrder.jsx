import { createSlice } from "@reduxjs/toolkit";

const finalOrderSlice = createSlice({
  name: "finalOrder",
  initialState: {
    modelInCart: null,
    arendTime: null,
    checkFuelState: false,
    checkedBabyChairState: false,
    checkedThree: false,
    classCar: null,
    colorCar: null,
    durationArend: null,
    durationArendTwo: null,
  },
  reducers: {
    setModelInCart: (state, action) => {
      state.modelInCart =
        state.modelInCart?.id === action.payload.id
          ? null
          : action.payload;
    },
    deleteModelFromCart: (state) => {
      state.modelInCart = null;
    },
    setArendTime: (state, action) => {
      state.arendTime = action.payload;
    },
    deleteArendTime: (state) => {
      state.arendTime = null;
    },
    setCheckFuel: (state) => {
      state.checkFuelState = !state.checkFuelState;
      
    },
    deleteCheckedFuel: (state) => {
      state.checkFuelState = false;
    },
    setCheckBabyChair: (state, action) => {
      state.checkedBabyChairState = action.payload;
    },
    deleteCheckedBabyChair: (state) => {
      state.checkedBabyChairState = false;
    },
    setCheckThree: (state, action) => {
      state.checkedThree = action.payload;
    },
    deleteCheckedThree: (state) => {
      state.checkedThree = false;
    },
    setClass: (state, action) => {
      state.classCar = action.payload;
    },
    deleteClass: (state) => {
      state.classCar = null;
    },
    setColor: (state, action) => {
      state.colorCar = action.payload;
    },
    deleteColor: (state) => {
      state.colorCar = null;
    },
    setDurationArend: (state, action) => {
      state.durationArend = action.payload;
    },
    deleteDurationArend: (state) => {
      state.durationArend = null;
    },
    setDurationArendTwo: (state, action) => {
      state.durationArendTwo = action.payload;
    },
    deleteDurationArendTwo: (state) => {
      state.durationArendTwo = null;
    },
  },
});

export const {
  setModelInCart,
  deleteModelFromCart,
  setArendTime,
  deleteArendTime,
  setCheckFuel,
  deleteCheckedFuel,
  setCheckBabyChair,
  deleteCheckedBabyChair,
  setCheckThree,
  deleteCheckedThree,
  setClass,
  deleteClass,
  setColor,
  deleteColor,
  setDurationArend,
  deleteDurationArend,
  setDurationArendTwo,
  deleteDurationArendTwo
} = finalOrderSlice.actions;

export default finalOrderSlice.reducer;
