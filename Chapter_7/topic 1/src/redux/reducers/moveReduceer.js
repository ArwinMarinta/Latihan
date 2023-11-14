import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  popular: [],
  search: [],
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setPopular: (state, action) => {
      state.popular = action.payload;
    },
    setSearch: (state, action) => {
      state.search = action.payload;
    },
  },
});

export const { setPopular, setSearch } = movieSlice.actions;

export default movieSlice.reducer;
