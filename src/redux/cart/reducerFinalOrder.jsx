import { createSlice } from "@reduxjs/toolkit";

const finalOrderSlice = createSlice({
  name: "finalOrder",
  initialState: {
    deliveryСity: null,
    deliveryChangeCityInput: "",
    pointOfIssue: "",
    pointChangeOfIssue: "",
    modelInCart: null,
    arendTime: "days",
    checkFuelState: false,
    checkedBabyChairState: false,
    checkedRightHand: false,
    classCar: "all",
    colorCar: null,
    durationArend: null,
    durationArendTwo: null,
    orderNumber: null,
    carNumber: null,
    randomFuelLvl: null,
  },
  reducers: {
    setDeliveryCity: (state, action) => {
      state.deliveryСity = action.payload;
    },
    deleteDeliveryCity: (state) => {
      state.deliveryСity = null;
    },
    setDeliveryChangeCityInput: (state, action) => {
      state.deliveryChangeCityInput = action.payload;
    },
    deleteDeliveryChangeCityInput: (state) => {
      state.deliveryChangeCityInput = "";
    },
    setDeliveryChangeStreetInput: (state, action) => {
      state.pointChangeOfIssue = action.payload;
    },
    deleteDeliveryChangeStreetInput: (state) => {
      state.pointChangeOfIssue = "";
    },
    setPointIssue: (state, action) => {
      state.pointOfIssue = action.payload;
    },
    deletePointOfIssue: (state) => {
      state.pointOfIssue = null;
    },
    setModelInCart: (state, action) => {
      state.modelInCart =
        state.modelInCart?.id === action.payload.id ? null : action.payload;
    },

    setArendTime: (state, action) => {
      state.arendTime = action.payload;
    },

    setCheckFuel: (state) => {
      state.checkFuelState = !state.checkFuelState;
    },

    setCheckBabyChair: (state) => {
      state.checkedBabyChairState = !state.checkedBabyChairState;
    },

    setCheckRightHand: (state) => {
      state.checkedRightHand = !state.checkedRightHand;
    },

    setClass: (state, action) => {
      state.classCar = action.payload;
    },

    setColor: (state, action) => {
      state.colorCar = action.payload;
    },

    setDurationArend: (state, action) => {
      state.durationArend = action.payload;
    },

    setDurationArendTwo: (state, action) => {
      state.durationArendTwo = action.payload;
    },

    setOrderNumber: (state, action) => {
      state.orderNumber = action.payload;
    },
    setCarNumber: (state, action) => {
      state.carNumber = action.payload;
    },
    setFuelLvl: (state, action) => {
      state.randomFuelLvl = action.payload;
    },
    deleteDataLocation: (state) => {
      state.modelInCart = null;
      state.arendTime = "days";
      state.checkFuelState = false;
      state.checkedBabyChairState = false;
      state.checkedRightHand = false;
      state.classCar = "all";
      state.colorCar = null;
      state.durationArend = null;
      state.durationArendTwo = null;
    },
    deleteDataModel: (state) => {
      state.arendTime = "days";
      state.checkFuelState = false;
      state.checkedBabyChairState = false;
      state.checkedRightHand = false;
      state.classCar = "all";
      state.colorCar = null;
      state.durationArend = null;
      state.durationArendTwo = null;
    },
    deleteDurationArend: (state) => {
      state.durationArend = null;
    },
    deleteDurationArendTwo: (state) => {
      state.durationArendTwo = null;
    },
  },
});

export const {
  setDeliveryCity,
  deleteDeliveryCity,
  setDeliveryChangeCityInput,
  deleteDeliveryChangeCityInput,
  setDeliveryChangeStreetInput,
  deleteDeliveryChangeStreetInput,
  setPointIssue,
  deletePointOfIssue,
  setModelInCart,
  setArendTime,
  setCheckFuel,
  setCheckBabyChair,
  setCheckRightHand,
  setClass,
  setColor,
  setDurationArend,
  setDurationArendTwo,
  setOrderNumber,
  setCarNumber,
  setFuelLvl,
  deleteDataLocation,
  deleteDataModel,
  deleteDurationArend,
  deleteDurationArendTwo,
} = finalOrderSlice.actions;

export default finalOrderSlice.reducer;
