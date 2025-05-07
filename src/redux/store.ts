import { configureStore } from "@reduxjs/toolkit";
import appReducer from "@/redux/features/appSlice";

const store = configureStore({
  reducer: {
    bannerSelected: appReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
