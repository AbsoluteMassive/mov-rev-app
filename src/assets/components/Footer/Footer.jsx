import "../Footer/Footer.css";
const Footer = ({ children }) => {
  return (
    <footer className="fC">
      <div className="flc">{children}</div>
      <p>© 2026 All rights reserved.</p>
    </footer>
  );
};

export default Footer;
