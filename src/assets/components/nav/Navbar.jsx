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
  const [showSearch, setShowSearch] = useState(false);
  const handleSearch = (e) => {
    setMovieSearch(e.target.value);
    setShowSearch(true);
  };
  const handleClick = (e) => {
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
                <a href={`#${movie.id}`} key={movie.id} onClick={handleClick}>
                  {movie.title}
                </a>
              ))
            ) : (
              <p>No movies found.</p>
            )}
          </div>
        )}
      </div>
      <div className="linkC">{children}</div>
      <div className="menuCs">
        <button
          className="menuC"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? (
            <FontAwesomeIcon icon={faX} />
          ) : (
            <FontAwesomeIcon icon={faBars} />
          )}
        </button>
        {open && (
          <div className="linkCs" onClick={() => setOpen(false)}>
            {children}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
