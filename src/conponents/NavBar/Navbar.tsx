import {Link} from "react-router-dom";
import logo from "../../assets/logo-avo.png"
import "./style.css"

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="container">
                <div className="navbar-wrapper">
                    <div className="navbar-logo">
                        <img src={logo}/>
                    </div>
                    <ul className="navbar_links">
                        <li><Link to="/home" className="custom_link">ГЛАВНАЯ</Link></li>
                        <li><Link to="/sale" className="custom_link">ЦЕНЫ</Link></li>
                        <li><Link to="/contact" className="custom_link">СВЯЗАТЬСЯ</Link></li>
                        <li><Link to="/account" className="account_link">Личный кабинет</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default Navbar;