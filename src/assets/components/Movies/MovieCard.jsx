import "./MovieCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faBookmark,
  faEye,
  faPen,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const MovieCard = ({
  movie,
  watchlist,
  handleBookmark,
  watched,
  handleWatched,
  show,
}) => {
  const bookmarked = watchlist.some((savedMovie) => savedMovie.id === movie.id);
  const watchedMovie = watched.some((savedMovie) => savedMovie.id === movie.id);
  const [showReview, setShowReview] = useState(false);
  const [myReview, setMyReview] = useState("");

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
          {show.bookmark && (
            <button
              className="bookmarkButton"
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
          )}
          {show.watched && (
            <button
              className="watchedButton"
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
          )}
          {show.review && (
            <button className="reviewButton">
              <FontAwesomeIcon className="pen" icon={faPen} />
            </button>
          )}
        </div>
        {show.rating && (
          <div className="rating">
            <span>
              <FontAwesomeIcon icon={faStar} className="star" />
            </span>
            <span>{movie.vote_average.toFixed(1)}</span>
          </div>
        )}
        {show.overview && (
          <div className="card-overview">
            {!movie.overview
              ? "No overview available for this movie."
              : (movie.overview.length > 200
                  ? movie.overview.slice(0, 250) + "..."
                  : movie.overview) +
                "\n\nClick on the title below for more details."}
          </div>
        )}
      </div>

      <div className="card-info">
        <a
          href={`https://www.themoviedb.org/movie/${movie.id}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>{movie.title.replace(":", "\n")}</h2>
        </a>

        {show.year && movie.release_date && (
          <span>{movie.release_date.slice(0, 4)}</span>
        )}
      </div>
    </div>
  );
};

export default MovieCard;
