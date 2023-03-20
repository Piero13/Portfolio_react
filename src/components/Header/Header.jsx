import { useState } from "react";
import { NavLink } from "react-router-dom";

import ToggleIcon from '../../assets/icons/toggle_icon.png'
import './Header.css';

function Header() {
    const [showNavbar, setShowNavbar] = useState(false);
    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar)
    }

    return (
        <header id="header" className="header">
            <nav className="navbar">
                <div className="container">
                    <div className="ham-menu" onClick={ handleShowNavbar }>
                        <img src={ToggleIcon} alt="menu format mobile" />
                    </div>
                    <div className={ `nav-elements ${ showNavbar && 'active'}` }>
                        <ul>
                            <li>
                                <NavLink to="/">Accueil</NavLink>
                            </li>
                            <li>
                                <NavLink to="/contact">Contact</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header;