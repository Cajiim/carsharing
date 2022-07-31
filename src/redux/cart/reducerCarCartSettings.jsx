import { createSlice } from "@reduxjs/toolkit";

const CarCartSettingsSlice = createSlice({
  name: "CarSettings",
  initialState: {
    modelCarCart: "",
    typeCarCart: "",
    minPrice: "",
    maxPrice: "",
    colorForCar: "",
    colorForCheckbox: [],
    imgCar:
      "https://www.figma.com/file/654FNQuhGQxrLOT4ByXeoA/image/c31940b4825e7de08c4523e9a81ebe8d0ad04616?fuid=1073273349188760991",
    descriptionCar: "",
    arrAllColors: [],
  },
  reducers: {
    setModelCarCart: (state, action) => {
      state.modelCarCart = action.payload;
    },
    setTypeCarCart: (state, action) => {
      state.typeCarCart = action.payload;
    },
    setMinPrice: (state, action) => {
      state.minPrice = action.payload;
    },
    setMaxPrice: (state, action) => {
      state.maxPrice = action.payload;
    },
    setColorForCar: (state, action) => {
      state.colorForCar = action.payload;
    },
    setArrAllColorsForCar: (state, action) => {
      state.arrAllColors = action.payload;
    },
    setImgForCar: (state, action) => {
      state.imgCar = action.payload;
    },
    setDescriptionCar: (state, action) => {
      state.descriptionCar = action.payload;
    },
    setColorForCheckbox: (state, action) => {
      state.colorForCheckbox = action.payload;
    },
    deleteColorFromCar: (state) => {
      state.colorForCar = "";
    },
    clearData: (state) => {
      state.modelCarCart = "";
      state.typeCarCart = "";
      state.minPrice = "";
      state.maxPrice = "";
      state.colorForCar = "";
      state.arrAllColors = [];
      state.imgCar = "";
      state.descriptionCar = "";
      state.colorForCheckbox = [];
    },
  },
});

export const {
  setModelCarCart,
  setTypeCarCart,
  setMinPrice,
  setMaxPrice,
  setColorForCar,
  setImgForCar,
  setDescriptionCar,
  setArrAllColorsForCar,
  setColorForCheckbox,
  deleteColorFromCar,
  clearData,
} = CarCartSettingsSlice.actions;

export default CarCartSettingsSlice.reducer;