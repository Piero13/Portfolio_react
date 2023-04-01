import { useState } from "react";
import { NavLink } from "react-router-dom";

import ToggleIcon from '../../assets/icons/toggle_icon.png'
import TitleLogo from '../../assets/icons/dev-logo.png'

function Header() {
    const [showNavbar, setShowNavbar] = useState(false);
    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar)
    }

    return (
        <header id="header" className="header">
            <div className="title">
                <div className="title__img">
                    <img src={TitleLogo} alt="Logo développeur web rouge et blanc" />
                </div>
                <div className="title__text">
                    <h1>Pierre Fasce</h1>
                    <p>Web developer</p>
                </div>
            </div>
            <nav className="navbar">
                <div className="navbar__container">
                    <div className="ham-menu" onClick={ handleShowNavbar }>
                        <img src={ToggleIcon} alt="menu format mobile" />
                    </div>
                    <div className={ `navbar__elements ${ showNavbar && 'active'}` }>
                        <ul>
                            <li>
                                <NavLink to="/" onClick={handleShowNavbar} className="link">Accueil</NavLink>
                            </li>
                            <li>
                                <NavLink to="/projects" onClick={handleShowNavbar} className="link">Projets</NavLink>
                            </li>
                            <li>
                                <NavLink to="/career" onClick={handleShowNavbar} className="link">Parcours</NavLink>
                            </li>
                            <li>
                                <NavLink to="/contact" onClick={handleShowNavbar} className="link">Contact</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header;