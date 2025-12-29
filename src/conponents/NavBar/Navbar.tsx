import {useState} from "react";

import {Link, useNavigate} from "react-router-dom";
import logo from "../../assets/logo-avo.png"
import "./style.css"

const Navbar = () => {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const handleClick = () => {
        const token = localStorage.getItem("token");

        if (token) {
            navigate("/account"); // личный кабинет
        } else {
            navigate("/login"); // логин
        }
    };

    return (
        <nav className="navbar">
            <div className="container">
                <div className="navbar-wrapper">
                    <div className="navbar-logo">
                        <img src={logo} alt="logo" />
                    </div>
                    <ul className={`navbar_links ${open ? "active" : ""}`}>
                        <li><Link to="/home" className="custom_link" onClick={() => setOpen(false)}>ГЛАВНАЯ</Link></li>
                        <li><Link to="/sale" className="custom_link" onClick={() => setOpen(false)}>КУРСЫ</Link></li>
                        <li><Link to="/contact" className="custom_link" onClick={() => setOpen(false)}>СВЯЗАТЬСЯ</Link></li>
                        <li><Link to="/account" className="account_link" onClick={handleClick}>Личный кабинет</Link></li>
                    </ul>
                    <div className={`burger ${open ? "active" : ""}`}
                         onClick={() => setOpen(!open)}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
        </nav>
    )
}
export default Navbar;