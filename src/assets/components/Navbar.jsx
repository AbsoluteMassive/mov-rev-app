import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
const Navbar = ({ children, logoName }) => {
  return (
    <nav className="navC">
      <span alt="logo">{logoName}</span>
      <div className="inputC">
        <input
          type="search"
          id="search"
          placeholder=" "
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
