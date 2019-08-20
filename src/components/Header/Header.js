import React from 'react';
import Navbar from './Navbar';
import {NavLink} from "react-router-dom"; 
import Logo from "./logo.jpg";

const Header = () => {
    return (
            <header className="center">
                <NavLink to='/' className='logo'>
                <img src={Logo} width='70' height='50' alt="logo"/>
                </NavLink>
                <Navbar />
                <div className="clr"></div>
            </header>
            )
}

export default Header;
