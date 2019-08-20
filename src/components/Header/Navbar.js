import React from 'react';
import {NavLink} from "react-router-dom"; 
import s from "./Navbar.module.css"

const Navbar = () => {
    return (
            <nav>
                <ul>
                    <li><NavLink to="/">Головна</NavLink></li>
                    <li><NavLink to="/ecp-base">БД електронно-довірчих послуг</NavLink></li>
                    <li><NavLink to="#">БД захищених носіїв</NavLink></li>
                </ul>
            </nav>
            )
}

export default Navbar;
