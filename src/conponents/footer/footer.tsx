import { Link } from "react-router-dom";
import "./style.css";
import logo from "../../assets/logo-avo.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-wrapper">
          <div className="footer-logo">
            <img src={logo} />
          </div>
          <ul className="navbar_links footer_links">
            <li>
              <Link to="/home" className="custom_link">
                Главная
              </Link>
            </li>
            <li>
              <Link to="/sale" className="custom_link">
                Курсы
              </Link>
            </li>
            <li>
              <Link to="/contact" className="custom_link">
                Связаться
              </Link>
            </li>
          </ul>
          <div className="copyright">
            <span>© 2026 markoowik-dev - учебный проект для портфолио</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
