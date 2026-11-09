import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faXmark,
  faBookmark,
  faEye,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import "../nav/navbar.css";

const Navbar = ({
  children,
  logoName,
  movieSearch,
  setMovieSearch,
  movies,
  watchlist,
  handleBookmark,
  watched,
  handleWatched,
  show,
  showSearch,
  setShowSearch,
}) => {
  const [open, setOpen] = useState(false);

  const handleMenuToggle = () => {
    setOpen((prev) => !prev);
    setShowSearch(false);
  };

  const handleSearch = (e) => {
    setMovieSearch(e.target.value);
    setShowSearch(true);
    setOpen(false);
  };

  const handleResultsClick = () => {
    setShowSearch(false);
    setMovieSearch("");
  };

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(movieSearch.trim().toLowerCase()),
  );

  return (
    <nav className="navC">
      <span>{logoName}</span>

      <div className="inputC">
        <input
          type="search"
          id="search"
          placeholder=" "
          value={movieSearch}
          onChange={handleSearch}
          pattern=".*\S.*"
          required
        />

        <label htmlFor="search">Search</label>

        {showSearch && movieSearch.trim().length >= 2 && (
          <div className="resultC">
            {filteredMovies.length > 0 ? (
              filteredMovies.slice(0, 8).map((movie) => {
                const bookmarked = watchlist.some(
                  (savedMovie) => savedMovie.id === movie.id,
                );

                const watchedMovie = watched.some(
                  (savedMovie) => savedMovie.id === movie.id,
                );

                return (
                  <div className="result" key={movie.id}>
                    <a href={`#${movie.id}`} onClick={handleResultsClick}>
                      {movie.title}
                    </a>

                    {(show.bookmark || show.watched) && (
                      <div className="btnC">
                        {show.bookmark && (
                          <button
                            type="button"
                            aria-label={
                              bookmarked ? "Remove bookmark" : "Add bookmark"
                            }
                            onClick={() => handleBookmark(movie)}
                          >
                            <FontAwesomeIcon
                              className={
                                bookmarked
                                  ? "resultBookmark active"
                                  : "resultBookmark"
                              }
                              icon={faBookmark}
                            />
                          </button>
                        )}

                        {show.watched && (
                          <button
                            type="button"
                            aria-label={
                              watchedMovie
                                ? "Mark as not watched"
                                : "Mark as watched"
                            }
                            onClick={() => handleWatched(movie)}
                          >
                            <FontAwesomeIcon
                              className={
                                watchedMovie
                                  ? "resultWatched active2"
                                  : "resultWatched"
                              }
                              icon={faEye}
                            />
                          </button>
                        )}
                      </div>
                    )}
                  </div>
                );
              })
            ) : (
              <p>No movies found.</p>
            )}
          </div>
        )}
      </div>

      <div className="menuCs">
        <button
          type="button"
          className={open ? "menuC x" : "menuC y"}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={handleMenuToggle}
        >
          {open ? (
            <FontAwesomeIcon icon={faXmark} />
          ) : (
            <FontAwesomeIcon icon={faBars} />
          )}
        </button>

        {open && (
          <div className="linkCs" onClick={handleMenuToggle}>
            {children}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
