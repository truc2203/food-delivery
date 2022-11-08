import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo:
    localStorage.getItem("user") !== "undefined"
      ? JSON.parse(localStorage.getItem("user"))
      : null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.userInfo = action.payload;
    },
    isLogout : (state,action) => {
        state.userInfo = localStorage.clear()
    }
  },
});

export const { setUser,isLogout } = userSlice.actions;

export const selectedUSer = (state) => state.user.userInfo;

export default userSlice.reducer;
