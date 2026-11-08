import "../Footer/Footer.css";

const Footer = ({ children }) => {
  return (
    <footer className="fC">
      <div className="flc">{children}</div>
      <div className="credits">
        <a
          href="https://www.themoviedb.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://www.themoviedb.org/assets/v4/logos/v2/blue_long_2-9665a76b1ae401a510ec1e0ca40ddcb3b0cfe45f1d51b77a308fea0845885648.svg"
            alt="TMDB logo"
            className="tmdbLogo"
          />
        </a>{" "}
      </div>
      <p>© 2026 All rights reserved.</p>
    </footer>
  );
};

export default Footer;
