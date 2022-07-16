import { createSlice } from "@reduxjs/toolkit";

const ValidateErrorsSlice = createSlice({
  name: "ValidateErrors",
  initialState: {
    linkError:"",
    descriptionError:"Поле не должно быть пустым",
    carNameError:"Поле не должно быть пустым",
    carTypeError:"Поле не должно быть пустым",
    minPriceError:"Поле не должно быть пустым" ,
    maxPriceError:"Поле не должно быть пустым" , 
    colorError:"Выберите хотябы один цвет",
  },
  reducers: {
    setLinkImgError: (state, action) => {
      state.linkError = action.payload;
    },
    setDescriptionError: (state, action) => {
      state.descriptionError = action.payload;
    },
    setCarNameError: (state, action) => {
      state.carNameError = action.payload;
    },
    setCarTypeError: (state, action) => {
      state.carTypeError = action.payload;
    },
    setMinPriceError: (state, action) => {
      state.minPriceError = action.payload;
    },
    setMaxPriceError: (state, action) => {
      state.maxPriceError = action.payload;
    },
    setColorError: (state, action) => {
      state.colorError = action.payload;
    },
    
  },
});

export const {
  setLinkImgError,
  setDescriptionError,
  setCarNameError,
  setCarTypeError,
  setMinPriceError,
  setMaxPriceError,
  setColorError
} = ValidateErrorsSlice.actions; 

export default ValidateErrorsSlice.reducer;