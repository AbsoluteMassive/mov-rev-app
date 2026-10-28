import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import "../nav/navbar.css";
const Navbar = ({ children, logoName, movieSearch, setMovieSearch }) => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="navC">
      <span alt="logo">{logoName}</span>
      <div className="inputC">
        <input
          type="search"
          id="search"
          placeholder=" "
          value={movieSearch}
          onChange={(e) => setMovieSearch(e.target.value)}
          pattern=".*\S.*"
          required
        />
        <label htmlFor="search">Search</label>
      </div>

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
        {open && <div className="linkCs">{children}</div>}
      </div>
    </nav>
  );
};

export default Navbar;
