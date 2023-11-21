import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type stateProps = {
  isAuth: Boolean;
};

const initialState: stateProps = {
  isAuth: localStorage.getItem("user") ? true : false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authMe(state, action: PayloadAction<Boolean>) {
      state.isAuth = action.payload;
    },
  },
});

export const { authMe } = authSlice.actions;
export default authSlice.reducer;
