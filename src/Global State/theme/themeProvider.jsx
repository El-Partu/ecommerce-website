import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  darkMode: null,
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setDarkMode: (state) => {
      state.darkMode = "dark";
    },
    setLightMode: (state) => {
      state.darkMode = "light";
    },
    toggleThemeButton: (state) => {
      state.darkMode = state.darkMode === "dark" ? "light" : "dark";
    },
  },
});

export const { toggleThemeButton, setDarkMode, setLightMode } =
  themeSlice.actions;
export default themeSlice.reducer;
