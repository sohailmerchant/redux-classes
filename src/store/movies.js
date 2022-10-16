import { createSlice } from "@reduxjs/toolkit";
import Configuration from "../config/default";

export const moviesState = createSlice({
  name: "movies",
  initialState: {
    movies: [],
  },
  reducers: {
    getMovies: async (state) => {
      const resp = await fetch(
        `http://www.omdbapi.com/?apikey=${Configuration.MoviesApiKey}&s=harry`
      );
      const responseJson = await resp.json();
      state.movies = payload.Search;
    },
  },
});

export const { getMovies } = moviesState.actions;
export default moviesState.reducer;
