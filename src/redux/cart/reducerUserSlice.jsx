import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    email: "",
    token: "",
    id: "",
  },
  reducers: {
    setUser: (state, action) => {
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.id = action.payload.id;
    },
    deleteUser: (state) => {
      state.email = "";
      state.token = "";
      state.id = "";
    },
  },
});

export const { setUser, deleteUser } = userSlice.actions;

export default userSlice.reducer;
