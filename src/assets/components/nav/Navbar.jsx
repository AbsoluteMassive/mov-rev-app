import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "../nav/navbar.css";
const Navbar = ({ children, logoName, movieSearch, setMovieSearch }) => {
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
      <div className="linkC">{children}</div>
      <button className="menuC" aria-label="Open menu">
        <FontAwesomeIcon icon={faBars} />
      </button>
    </nav>
  );
};

export default Navbar;
