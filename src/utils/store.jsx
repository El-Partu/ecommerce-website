import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "../Global State/theme/themeProvider";

const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
});

export default store;
