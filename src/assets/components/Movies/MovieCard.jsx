import "./MovieCard.css";
const MovieCard = ({ movie }) => {
  return (
    <div className="container">
      <div className="imageC">
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={movie.title}
        />
        <div className="card-overview">
          {(movie.overview.length > 200
            ? movie.overview.slice(0, 250) + "..."
            : movie.overview) +
            "\n\nClick on the title below for more details."}
        </div>
      </div>

      <div className="card-info">
        <a
          href={`https://www.themoviedb.org/movie/${movie.id}`}
          target="_blank"
        >
          <h2>{movie.title}</h2>
        </a>
        <span>{movie.release_date}</span>
      </div>
    </div>
  );
};

export default MovieCard;
