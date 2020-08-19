import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../utils/eventlar-logos/long-logo.png';

const NavBar = () => {

    const showNav = () => {
        const mobileNav = document.querySelector('.hamburger-menu');
        mobileNav.classList.toggle('show');
    }
    
    const exitNav = () => {
        const mobileNav = document.querySelector('.hamburger-menu');
        mobileNav.classList.remove('show');
    }

    return ( 
        <React.Fragment>
            <div className="nav">
                        <nav className="home-navbar">
                            <div className="brand-logo">
                                <Link to="/">
                                    <img src={logo} alt="" />
                                </Link>
                            </div>
                            <i onClick={showNav} className="material-icons hamburger">menu</i>
                            <ul className="navlinks">
                                <li>
                                    <Link className="navlink" to="/about">
                                        About
                                    </Link>
                                </li>
                                <li>
                                    <Link className="navlink" to="/login">
                                        Login
                                    </Link>
                                </li>
                                <li>
                                    <Link className="navlink" to="/signup">
                                        Signup
                                    </Link>
                                </li>
                                <li>
                                    <Link className="navlink" to="/enlist">
                                        List your venue
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <ul className="hamburger-menu">
                        <li>
                            <Link onClick={exitNav} className="link" to="/about" >
                                About
                            </Link>
                        </li>
                        <li>
                            <Link onClick={exitNav} className="link" to="/login">
                                Login
                            </Link>
                        </li>
                        <li>
                            <Link onClick={exitNav} className="link" to="/signup">
                                Signup
                            </Link>
                        </li>
                        <li>
                            <Link onClick={exitNav} className="link" to="/enlist">
                                List your venue
                            </Link>
                        </li>
                    </ul>
        </React.Fragment>
     );
}
 
export default NavBar;