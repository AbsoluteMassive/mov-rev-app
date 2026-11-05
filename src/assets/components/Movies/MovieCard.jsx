import "./MovieCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faBookmark, faEye } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const MovieCard = ({
  movie,
  watchlist,
  handleBookmark,
  watched,
  handleWatched,
}) => {
  const bookmarked = watchlist.some((savedMovie) => savedMovie.id === movie.id);
  const watchedMovie = watched.some((savedMovie) => savedMovie.id === movie.id);
  const [showReview, setShowReview] = useState(false);
  const [review, setReview] = useState("");
  const handleImageError = (e) => {
    e.target.src = "https://via.placeholder.com/500x750?text=No+Image";
    e.target.alt = "No image available";
    e.target.onerror = null;
  };
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
          onError={handleImageError}
        />
        <div className="buttons">
          <button
            className="bookmarkbutton"
            aria-label={
              bookmarked ? "Remove from watchlist" : "Add to watchlist"
            }
            onClick={() => handleBookmark(movie)}
          >
            <FontAwesomeIcon
              className={bookmarked ? "bookmark active" : "bookmark"}
              icon={faBookmark}
            />
          </button>
          <button
            className="watchedbutton"
            aria-label={
              watchedMovie ? "Mark as not watched" : "Mark as watched"
            }
            onClick={() => handleWatched(movie)}
          >
            <FontAwesomeIcon
              className={watchedMovie ? "eye active2" : "eye"}
              icon={faEye}
            />
          </button>
        </div>
        <div className="rating">
          <span>
            <FontAwesomeIcon icon={faStar} className="star" />
          </span>
          <span>{movie.vote_average.toFixed(1)}</span>
        </div>
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

        {movie.release_date && <span>{movie.release_date.slice(0, 4)}</span>}
      </div>
    </div>
  );
};

export default MovieCard;
