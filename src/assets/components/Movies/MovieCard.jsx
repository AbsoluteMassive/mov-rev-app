import "./MovieCard.css";
const MovieCard = ({ movie }) => {
  return (
    <div className="container">
      <div className="imageC">
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={movie.title}
        />
      </div>
      <div className="card-info">
        <h2>{movie.title}</h2>
        <span>{movie.release_date}</span>
      </div>
    </div>
  );
};

export default MovieCard;
