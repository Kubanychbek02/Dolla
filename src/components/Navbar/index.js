import React from "react";
import {FaBars} from 'react-icons/fa';
import "react-router-dom";
import './navbar.scss';
import { NavLink } from "react-router-dom";

import {
    // Nav, 
    // NavbarContainer,
    // NavLogo, 
    // MobileIcon, 
    // NavMenu, 
    // NavItem, 
    NavLinks,
    // NavBtn,
    // NavBtnLink
} from './NavbarElements';

const Navbar = ({ toggle }) => {
    return (
        <>
            <nav className="nav">
                <div className="nav__container">
                    <NavLinks className="nav__logo"  
                    smooth={true} duration={900} spy={true} exect={true} offset={-80}
                    to='herosection'>dola</NavLinks>
                    <div onClick={toggle} className="nav__icon">
                        <FaBars/>
                    </div>
                    <ul className="nav__menu">
                        <li className="nav__item">
                            <NavLinks className='nav__link' 
                            smooth={true} duration={500} spy={true} exect={true} offset={-80}
                            to='about'>About</NavLinks>
                        </li>
                        <li className="nav__item">
                            <NavLinks className='nav__link' 
                            smooth={true} duration={500} spy={true} exect={true} offset={-80}
                            to='services'>Discover</NavLinks>
                        </li>
                        <li className="nav__item">
                            <NavLinks className='nav__link'
                            smooth={true} duration={500} spy={true} exect={true} offset={-80}
                            to='discover'>Services</NavLinks>
                        </li>
                        <li className="nav__item">
                            <NavLinks className='nav__link' 
                            smooth={true} duration={500} spy={true} exect={true} offset={-80}
                            to='signup'>Sign Up</NavLinks>
                        </li>
                    </ul>
                    <div className="nav__btn">
                        <NavLink to='/signin' className="nav__btn-link">Sign In</NavLink>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;