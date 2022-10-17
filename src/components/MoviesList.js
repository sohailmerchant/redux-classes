import { useEffect, useState } from "react";
import MovieItem from "./MovieItem";
import { useSelector, useDispatch } from "react-redux";
import Configuration from "../config/default";

import { getMovies } from "../store/movies";

const MoviesList = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.movies);
  const [search, setSearch] = useState("harry");
  const [loading, setLoading] = useState(false);
  const [pageNumber, setPageNumber] = useState(2);
  const [totalRecords, setTotalRecords] = useState(0);
  console.log(pageNumber);
  const getMoviesList = async () => {
    setLoading(true);
    const resp = await fetch(
      `http://www.omdbapi.com/?apikey=${Configuration.MoviesApiKey}&s=${search}&page=${pageNumber}`
    );
    const responseJson = await resp.json();

    if (responseJson.Response === "True") {
      setTotalRecords(responseJson.totalResults);
      dispatch(getMovies(responseJson.Search));
    } else {
      dispatch(getMovies([]));
    }
    setLoading(false);
  };

  useEffect(() => {
    getMoviesList();
    // fetchMovies();
  }, [dispatch, getMovies, search, pageNumber]);

  // filterData
  return (
    <div className="p-6">
      <input
        type="text"
        name="search"
        onChange={(e) => setSearch(e.target.value)}
        value={search}
        className="border text-4xl p-2"
      />
      <div>
        <button
          className="bg-black text-white p-2 border"
          disabled={true}
          onClick={(e) =>
            setPageNumber((prev) => {
              if (prev > 1) {
                return prev - 1;
              } else {
                return prev;
              }
            })
          }
        >
          {"< Left"}{" "}
        </button>
        <button
          className="bg-black text-white p-2 border"
          onClick={console.log}
        >
          {pageNumber - 1}{" "}
        </button>
        <button
          className="bg-black text-white p-2 border bg-red-600"
          onClick={console.log}
        >
          {pageNumber}{" "}
        </button>
        <button
          className="bg-black text-white p-2 border"
          onClick={console.log}
        >
          {pageNumber + 1}{" "}
        </button>
        <button
          className="bg-black text-white p-2 border"
          onClick={(e) =>
            setPageNumber((prev) => {
              if (prev < Math.ceil(totalRecords / 10)) {
                return prev + 1;
              } else {
                return prev;
              }
            })
          }
        >
          {" "}
          {"Right >"}{" "}
        </button>
      </div>
      <div className="clearfix"></div>

      {loading && <h1>Loading...</h1>}
      {!loading && movies.length === 0 && <h1>No Movies found</h1>}
      {movies.map((movie, i) => (
        <MovieItem movie={movie} key={i} />
      ))}
    </div>
  );
};

export default MoviesList;
