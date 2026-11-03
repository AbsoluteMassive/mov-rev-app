import MovieCard from "./MovieCard.jsx";
import "./Movies.css";
const Movies = ({
  sectionTitle,
  movies,
  watchlist,
  handleBookmark,
  watched,
  handleWatched,
}) => {
  return (
    <>
      <div className="titleC" id={sectionTitle}>
        <h2>{sectionTitle}</h2>
        <p>
          {movies.length} {movies.length === 1 ? "movie" : "movies"}.
        </p>
      </div>
      <section className="grid-section">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            watchlist={watchlist}
            handleBookmark={handleBookmark}
            watched={watched}
            handleWatched={handleWatched}
          />
        ))}
      </section>
    </>
  );
};

export default Movies;
