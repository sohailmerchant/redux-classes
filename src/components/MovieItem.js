const MovieItem = ({ movie }) => {
  return (
    <div
      className="w-1/7 border bg-slate-400 text-white font-bold text-lg cursor-pointer float-left m-1 test"
      style={{ height: "677px" }}
    >
      <img src={`${movie.Poster}`} className="w-full" />
      <h1>{movie.Title}</h1>
      <div>
        <span>Year: </span>
        <span>{movie.Year}</span>
      </div>
    </div>
  );
};

export default MovieItem;
