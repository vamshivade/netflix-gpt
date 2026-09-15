import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSearchGpt: false,
  isGptLoading: false,
};

const searchGptSlice = createSlice({
  name: "searchgpt",
  initialState,

  reducers: {
    setIsSearchGpt: (state, action) => {
      state.isSearchGpt = !state.isSearchGpt;
    },
    setIsGptLoading: (state, action) => {
      state.isGptLoading = action.payload;
    },
  },
});

export const { setIsSearchGpt, setIsGptLoading } = searchGptSlice.actions;

export default searchGptSlice.reducer;
