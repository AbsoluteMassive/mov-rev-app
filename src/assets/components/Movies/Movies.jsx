import MovieCard from "./MovieCard.jsx";
import "./Movies.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDownShortWide,
  faArrowDownWideShort,
  faStar,
  faCalendar,
  faFont,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
const Movies = ({
  sectionTitle,
  movies,
  watchlist,
  handleBookmark,
  watched,
  handleWatched,
}) => {
  const [sortOrder, setSortOrder] = useState("asc");
  const [sortBy, setSortBy] = useState("rating");
  return (
    <>
      <div className="top">
        <div className="titleC" id={sectionTitle}>
          <h2>{sectionTitle}</h2>
          <p>
            {movies.length} {movies.length === 1 ? "movie" : "movies"}.
          </p>
        </div>

        <div className="SortC">
          <div>
            <label htmlFor="sortBy">
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
              name="sortBy"
              id="sortBy"
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
            <label htmlFor="sortOrder">
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
              name="sortOrder"
              id="sortOrder"
              className="select"
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
            >
              <option value="asc">Ascending</option>
              <option value="desc">Descending</option>
            </select>
          </div>
        </div>
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
