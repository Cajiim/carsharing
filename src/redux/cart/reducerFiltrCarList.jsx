import { createSlice } from "@reduxjs/toolkit";

const filtrCarListSlice = createSlice({
  name: "filtrCarList",
  initialState: {
    filtrCarListName: "",
    filtrCarListMinPrice: "",
    filtrCarListMaxPrice: "",
    filtrCarListCarType: "",
    searchString:'',
  },
  reducers: {
    setFiltrCarListName: (state, action) => {
      state.filtrCarListName = action.payload;
    },

    setFiltrCarListMinPrice: (state, action) => {
      state.filtrCarListMinPrice = action.payload;
    },

    setFiltrCarListMaxPrice: (state, action) => {
      state.filtrCarListMaxPrice = action.payload;
    },

    setFiltrCarListCarType: (state, action) => {
      state.filtrCarListCarType = action.payload;
    },

    deleteFiltrsCarList: (state) => {
      state.filtrCarListName = "";
      state.filtrCarListMinPrice = "";
      state.filtrCarListMaxPrice = "";
      state.filtrCarListCarType = "";
    },
    setSearchString: (state, action) => {
      state.searchString = action.payload;
    },
  },
});

export const {
  setFiltrCarListName,
  setFiltrCarListMinPrice,
  setFiltrCarListMaxPrice,
  setFiltrCarListCarType,
  deleteFiltrsCarList,
  setSearchString
} = filtrCarListSlice.actions;

export default filtrCarListSlice.reducer;
