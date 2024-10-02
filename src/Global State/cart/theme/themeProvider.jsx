import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  darkMode: false,
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleThemeButton: (state) => {
      state.darkMode = !state.darkMode;
    },
  },
});

export const { toggleThemeButton } = themeSlice.actions;
export default themeSlice.reducer;
