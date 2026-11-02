import MovieCard from "./MovieCard.jsx";
import "./Movies.css";
const Movies = ({ sectionTitle, movies }) => {
  return (
    <>
      <div className="titleC" id={sectionTitle}>
        <h2>{sectionTitle}</h2>
        <p>{movies.length} movies.</p>
      </div>
      <section className="grid-section">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </section>
    </>
  );
};

export default Movies;
