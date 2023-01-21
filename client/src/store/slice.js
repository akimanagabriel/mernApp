import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "mode",
  initialState: {
    value: "dark",
  },
  reducers: {
    changeMode: (state) => {
      state.value = state.value === "dark" ? "light" : "dark";
    },
  },
});

export const { changeMode } = slice.actions;
export default slice.reducer;
