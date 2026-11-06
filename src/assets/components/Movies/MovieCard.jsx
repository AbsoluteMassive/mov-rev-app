import "./MovieCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faBookmark,
  faEye,
  faPen,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect, useRef } from "react";

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

  const reviewKey = `movie-review-${movie.id}`;
  const savedReview = localStorage.getItem(reviewKey);

  const [showReview, setShowReview] = useState(false);
  const [myReview, setMyReview] = useState(savedReview ? savedReview : "");
  const [hasReview, setHasReview] = useState(savedReview ? true : false);
  const [isEditing, setIsEditing] = useState(savedReview ? false : true);

  const cardRef = useRef(null);
  const reviewText = myReview.trim();

  const handleImageError = (e) => {
    e.target.src = "https://via.placeholder.com/500x750?text=No+Image";
    e.target.alt = "No image available";
    e.target.onerror = null;
  };

  const handleSaveReview = () => {
    if (hasReview && !isEditing) {
      setIsEditing(true);
      return;
    }

    if (!reviewText) return;

    localStorage.setItem(reviewKey, reviewText);

    setMyReview(reviewText);
    setHasReview(true);
    setIsEditing(false);
  };

  const handleDeleteReview = () => {
    if (!hasReview) return;

    const confirmed = window.confirm(
      `Are you sure you want to delete your review for "${movie.title}"?`,
    );

    if (!confirmed) return;

    localStorage.removeItem(reviewKey);

    setMyReview("");
    setHasReview(false);
    setIsEditing(true);
  };

  useEffect(() => {
    if (!showReview) return;

    const handleOutsideClick = (e) => {
      if (!cardRef.current?.contains(e.target)) {
        setShowReview(false);
      }
    };

    document.addEventListener("pointerdown", handleOutsideClick);

    return () => {
      document.removeEventListener("pointerdown", handleOutsideClick);
    };
  }, [showReview]);

  return (
    <div className="container" id={movie.id} ref={cardRef}>
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
              type="button"
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
              type="button"
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
            <button
              className="reviewButton"
              type="button"
              aria-label={showReview ? "Close review" : "Write a review"}
              aria-expanded={showReview}
              onClick={() => setShowReview((prev) => !prev)}
            >
              <FontAwesomeIcon
                className={hasReview ? "pen active2" : "pen"}
                icon={faPen}
              />
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

      {showReview && show.review && (
        <div className="reviewPanel">
          <button
            className="closeReview"
            type="button"
            aria-label="Close review"
            onClick={() => setShowReview(false)}
          >
            <FontAwesomeIcon icon={faXmark} />
          </button>

          <h2>My review for {movie.title.replace(":", "\n")}</h2>

          <textarea
            value={myReview}
            onChange={(e) => setMyReview(e.target.value)}
            placeholder="Write your review..."
            disabled={!isEditing}
          />

          <div className="reviewActions">
            <button
              className="left"
              type="button"
              onClick={handleSaveReview}
              disabled={isEditing && !reviewText}
            >
              {hasReview
                ? isEditing
                  ? "Save Changes"
                  : "Edit Review"
                : "Save Review"}
            </button>

            <button
              className="right"
              type="button"
              onClick={handleDeleteReview}
              disabled={!hasReview}
            >
              Delete
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieCard;
