const Navbar = () => {
  return (
    <nav className="navC">
      <span alt="logo">Movie Review</span>
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
      <div className="linkC">
        <a href="#">link1</a>
        <a href="#">link2</a>
        <a href="#">link3</a>
      </div>
      <button className="menuC" aria-label="Open menu">
        H
      </button>
    </nav>
  );
};

export default Navbar;
