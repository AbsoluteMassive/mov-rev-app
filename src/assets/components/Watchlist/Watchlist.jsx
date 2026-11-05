import MovieCard from "../Movies/MovieCard";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDownShortWide,
  faArrowDownWideShort,
  faStar,
  faCalendar,
  faFont,
} from "@fortawesome/free-solid-svg-icons";
const Watchlist = ({ movies, handleBookmark, watched, handleWatched }) => {
  const [sortOrder, setSortOrder] = useState("asc");
  const [sortBy, setSortBy] = useState("title");
  const sortedMovies = [...movies].sort((a, b) => {
    let comparison = 0;

    switch (sortBy) {
      case "rating":
        comparison = a.vote_average - b.vote_average;
        break;

      case "release-date":
        comparison = (a.release_date || "9999-12-31").localeCompare(
          b.release_date || "9999-12-31",
        );
        break;

      case "title":
        comparison = a.title.localeCompare(b.title);
        break;

      default:
        break;
    }

    return sortOrder === "asc" ? comparison : -comparison;
  });
  return (
    <>
      <div className="top">
        <div className="titleC" id="Watchlist">
          <h2>My Watchlist </h2>
          {movies.length > 0 && (
            <p>
              {movies.length} {movies.length === 1 ? "movie" : "movies"}.
            </p>
          )}
          {movies.length === 0 && <p>Your watchlist is empty.</p>}
        </div>
        {movies.length > 0 && (
          <div className="SortC">
            <div>
              <label htmlFor="sortBy-watchlist">
                <FontAwesomeIcon
                  icon={
                    sortBy === "rating"
                      ? faStar
                      : sortBy === "release-date"
                        ? faCalendar
                        : faFont
                  }
                />{" "}
                Sort by
              </label>
              <select
                name="sortBy-watchlist"
                id="sortBy-watchlist"
                className="select"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="rating">Rating</option>
                <option value="release-date">Release date</option>
                <option value="title">Movie title</option>
              </select>
            </div>

            <div>
              <label htmlFor="sortOrder-watchlist">
                <FontAwesomeIcon
                  icon={
                    sortOrder === "asc"
                      ? faArrowDownShortWide
                      : faArrowDownWideShort
                  }
                />{" "}
                Direction
              </label>
              <select
                name="sortOrder-watchlist"
                id="sortOrder-watchlist"
                className="select"
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
              >
                <option value="asc">Ascending</option>
                <option value="desc">Descending</option>
              </select>
            </div>
          </div>
        )}
      </div>

      {movies.length > 0 && (
        <section className="grid-section">
          {sortedMovies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              watchlist={movies}
              handleBookmark={handleBookmark}
              watched={watched}
              handleWatched={handleWatched}
            />
          ))}
        </section>
      )}
    </>
  );
};

export default Watchlist;
