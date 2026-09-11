import { configureStore } from "@reduxjs/toolkit";
import useReducer from "./userSlice";

const appStore = configureStore({
  reducer: {
    user: useReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export default appStore;
