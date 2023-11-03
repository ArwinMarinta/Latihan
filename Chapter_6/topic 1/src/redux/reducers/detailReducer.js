import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  detailMovie: [],
  searchMovie: [],
};

const detailMovie = createSlice({
  name: "detail",
  initialState,
  reducers: {
    setDetailMovie: (state, action) => {
      state.detailMovie = action.payload;
    },
    setSearchMovie: (state, action) => {
      state.searchMovie = action.payload;
    },
  },
});

export const { setDetailMovie } = detailMovie.actions;
export default detailMovie.reducer;
