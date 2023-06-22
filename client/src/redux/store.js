import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import videoSlice from "./videoSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    video: videoSlice,
  },
});
