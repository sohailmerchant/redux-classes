const MovieItem = () => {
  return (
    <div className="w-1/4 border bg-slate-400 text-white font-bold text-lg cursor-pointer">
      <img
        src="https://m.media-amazon.com/images/M/MV5BMjE0ODEwNjM2NF5BMl5BanBnXkFtZTcwMjU2Mzg3NA@@._V1_SX300.jpg"
        className="w-full"
      />
      <h1>When Harry Met Sally</h1>
      <div>
        <span>Year: </span>
        <span>1998</span>
      </div>
    </div>
  );
};

export default MovieItem;
