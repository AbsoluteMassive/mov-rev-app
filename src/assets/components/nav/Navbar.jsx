import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import "../nav/navbar.css";
const Navbar = ({
  children,
  logoName,
  movieSearch,
  setMovieSearch,
  movies,
}) => {
  const [open, setOpen] = useState(false);
  const handleMenuToggle = () => {
    setOpen((prev) => !prev);
    setShowSearch(false);
  };
  const [showSearch, setShowSearch] = useState(false);
  const handleSearch = (e) => {
    setMovieSearch(e.target.value);
    setShowSearch(true);
    setOpen(false);
  };
  const handleResultsClick = (e) => {
    setShowSearch(false);
    setMovieSearch("");
  };

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(movieSearch.trim().toLowerCase()),
  );
  return (
    <nav className="navC">
      <span alt="logo">{logoName}</span>
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
          <div className="searchResults">
            {filteredMovies.length > 0 ? (
              filteredMovies.slice(0, 8).map((movie) => (
                <a
                  href={`#${movie.id}`}
                  key={movie.id}
                  onClick={handleResultsClick}
                >
                  {movie.title}
                </a>
              ))
            ) : (
              <p>No movies found.</p>
            )}
          </div>
        )}
      </div>
      <div className="menuCs">
        <button
          className="menuC"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={handleMenuToggle}
        >
          {open ? (
            <FontAwesomeIcon icon={faX} />
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
