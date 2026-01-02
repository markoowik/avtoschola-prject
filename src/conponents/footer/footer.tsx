import {Link} from "react-router-dom";
import "./style.css"
import logo from "../../assets/logo-avo.png";

const Footer = () => {
  return (
      <footer className="footer">
          <div className="container">
              <div className="footer-wrapper">
                  <div className="footer-logo">
                      <img src={logo}/>
                  </div>
                  <ul className="navbar_links footer_links">
                      <li><Link to="/home" className="custom_link">Главный</Link></li>
                      <li><Link to="/sale" className="custom_link">Цены</Link></li>
                      <li><Link to="/contact" className="custom_link">Связаться</Link></li>
                  </ul>
                  <div className="copyright"><span>@ashon.s06 | Все права защищены 2025
                   </span></div>
              </div>
          </div>
      </footer>
  )
}

export default Footer;