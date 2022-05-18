import { createSlice } from "@reduxjs/toolkit";

const tableIndexSlice = createSlice({
  name: "tabIndex",
  initialState: {
    tabIndex: '1',
  },
  reducers: {
    setTabIndex: (state, action) => {
      state.tabIndex = action.payload;
    },
    deleteTabIndex: (state) => {
      state.tabIndex = null;
    }
}
});

export const {setTabIndex, deleteTabIndex} = tableIndexSlice.actions;

export default tableIndexSlice.reducer;