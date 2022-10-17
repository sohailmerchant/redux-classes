import { createSlice } from "@reduxjs/toolkit";
import Configuration from "../config/default";

export const moviesState = createSlice({
  name: "movies",
  initialState: {
    movies: [],
  },
  reducers: {
    getMovies: (state, { payload }) => {
      state.movies = payload;
    },
  },
});

export const { getMovies } = moviesState.actions;
export default moviesState.reducer;
