import { createSlice } from "@reduxjs/toolkit";
const appConfigSice = createSlice({
  name: "appConfig",
  initialState: {
    lang: "en",
  },
  reducers: {
    changeLanguage: (state, action) => {
      state.lang = action.payload;
    },
  },
});

export const { changeLanguage } = appConfigSice.actions;
export default appConfigSice.reducer;
