import { useEffect, useState } from "react";
import MovieItem from "./MovieItem";
import { useSelector, useDispatch } from "react-redux";

import { getMovies } from "../store/movies";

const MoviesList = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies);

  console.log(movies);
  useEffect(() => {
    // fetchMovies();
  }, [dispatch, getMovies]);

  return (
    <div className="p-6">
      <h1>Movies length {movies.length}</h1>
      <button onClick={(e) => dispatch(getMovies())}>TEst</button>
    </div>
  );
};

export default MoviesList;
