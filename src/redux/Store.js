import { configureStore } from "@reduxjs/toolkit";
import itemsReducer from "./reducers";

const store = configureStore({
  reducer: {
    items: itemsReducer,
  },
});

export const setupStore = (preloadedState) => {
  return configureStore({
    reducer: {
      items: itemsReducer,
    },
    preloadedState,
  });
};

export default store;
