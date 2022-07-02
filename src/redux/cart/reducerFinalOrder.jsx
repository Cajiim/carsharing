import { createSlice } from "@reduxjs/toolkit";

const finalOrderSlice = createSlice({
  name: "finalOrder",
  initialState: {
    deliveryСity: null,
    deliveryChangeCityInput:'',
    pointOfIssue: '',
    pointChangeOfIssue:'',
    modelInCart: null,
    arendTime: 'days',
    checkFuelState: false,
    checkedBabyChairState: false,
    checkedRightHand: false,
    classCar: 'all',
    colorCar: null,
    durationArend: null,
    durationArendTwo: null,
    orderNumber:null,
    carNumber:null,
    randomFuelLvl:null,
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
      state.deliveryChangeCityInput = '';
    },
    setDeliveryChangeStreetInput: (state, action) => {
      state.pointChangeOfIssue = action.payload;
    },
    deleteDeliveryChangeStreetInput: (state) => {
      state.pointChangeOfIssue = '';
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
    deleteModelFromCart: (state) => {
      state.modelInCart = null;
    },
    setArendTime: (state, action) => {
      state.arendTime = action.payload;
    },
    deleteArendTime: (state) => {
      state.arendTime = 'days';
    },
    setCheckFuel: (state) => {
      state.checkFuelState = !state.checkFuelState;
    },
    deleteCheckedFuel: (state) => {
      state.checkFuelState = false;
    },
    setCheckBabyChair: (state) => {
      state.checkedBabyChairState = !state.checkedBabyChairState;
    },
    deleteCheckedBabyChair: (state) => {
      state.checkedBabyChairState = false;
    },
    setCheckRightHand: (state) => {
      state.checkedRightHand = !state.checkedRightHand;
    },
    deleteCheckedRightHand: (state) => {
      state.checkedRightHand = false;
    },
    setClass: (state, action) => {
      state.classCar = action.payload;
    },
    deleteClass: (state) => {
      state.classCar = 'all';
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
    setOrderNumber: (state, action) => {
      state.orderNumber = action.payload;
    },
    setCarNumber: (state, action) => {
      state.carNumber = action.payload;
    },
    setFuelLvl: (state, action) => {
      state.randomFuelLvl = action.payload;
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
  deleteModelFromCart,
  setArendTime,
  deleteArendTime,
  setCheckFuel,
  deleteCheckedFuel,
  setCheckBabyChair,
  deleteCheckedBabyChair,
  setCheckRightHand,
  deleteCheckedRightHand,
  setClass,
  deleteClass,
  setColor,
  deleteColor,
  setDurationArend,
  deleteDurationArend,
  setDurationArendTwo,
  deleteDurationArendTwo,
  setOrderNumber,
  setCarNumber,
  setFuelLvl,
} = finalOrderSlice.actions;

export default finalOrderSlice.reducer;
