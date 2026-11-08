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
  show,
}) => {
  const [sortOrder, setSortOrder] = useState("desc");
  const [sortBy, setSortBy] = useState("rating");
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
      <div className={movies.length === 0 ? "top G" : "top"}>
        <div className="titleC" id={sectionTitle}>
          <h2>{sectionTitle.replaceAll("_", " ")}</h2>
          {movies.length === 0 &&
            (sectionTitle.toLowerCase() === "watched" ? (
              <p>
                You have watched...<strong>NOTHING</strong>, really?
              </p>
            ) : (
              <p>No movies available.</p>
            ))}
          {movies.length > 0 && (
            <p>
              {movies.length} {movies.length === 1 ? "movie" : "movies"}.
            </p>
          )}
        </div>

        {movies.length > 0 && (
          <div className="SortC">
            <div>
              <label htmlFor={`sortBy-for-${sectionTitle}`}>
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
                name={`sortBy-for-${sectionTitle}`}
                id={`sortBy-for-${sectionTitle}`}
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
              <label htmlFor={`sortOrder-for-${sectionTitle}`}>
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
                name={`sortOrder-for-${sectionTitle}`}
                id={`sortOrder-for-${sectionTitle}`}
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
              watchlist={watchlist}
              handleBookmark={handleBookmark}
              watched={watched}
              handleWatched={handleWatched}
              show={show}
            />
          ))}
        </section>
      )}
    </>
  );
};

export default Movies;
