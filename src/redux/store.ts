import appReducer from "@/redux/features/appSlice";
import servicesReducer from "./features/servicesSlice";

const store = configureStore({
  reducer: {
    bannerSelected: appReducer,
    services: servicesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
