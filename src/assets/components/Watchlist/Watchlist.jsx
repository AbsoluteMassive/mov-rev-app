import MovieCard from "../Movies/MovieCard";
const Watchlist = ({ movies, handleBookmark }) => {
  return (
    <>
      <div className="titleC" id="watchlist">
        <h2>My Watchlist </h2>
        {movies.length > 0 && (
          <p>
            {movies.length} {movies.length === 1 ? "movie" : "movies"}.
          </p>
        )}
        {movies.length === 0 && <p>Your watchlist is empty.</p>}
      </div>

      {movies.length > 0 && (
        <section className="grid-section">
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              watchlist={movies}
              handleBookmark={handleBookmark}
            />
          ))}
        </section>
      )}
    </>
  );
};

export default Watchlist;
