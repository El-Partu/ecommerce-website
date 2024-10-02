import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "../features/cart/theme/themeProvider";

const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
});

export default store;
