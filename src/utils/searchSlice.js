import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {},
  reducers: {
    addSearchValue: (state, action) => {
      state = { ...action.payload, ...state };
    },
  },
});

export const { addSearchValue } = searchSlice.actions;
export default searchSlice.reducer;
