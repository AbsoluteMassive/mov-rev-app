import "./MovieCard.css";
const MovieCard = ({ movie }) => {
  return (
    <div className="container" id={movie.id}>
      <div className="imageC">
        <img
          loading="lazy"
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
              : "https://via.placeholder.com/500x750?text=No+Image"
          }
          alt={movie.title}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "https://via.placeholder.com/500x750?text=No+Image";
          }}
        />
        <div className="card-overview">
          {!movie.overview
            ? "No overview available for this movie."
            : (movie.overview.length > 200
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
