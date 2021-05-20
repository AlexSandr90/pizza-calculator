import React from 'react';

import '../../utils/variables.css';
import classes from './header.module.scss';
import {NavLink} from "react-router-dom";


const Header = () => {

    const {
        header,
        active,
        logoBlock,
        headerNavWrap
    } = classes;

    return (
        <header className={ header }>
            <div className={ logoBlock }>
                <a href="/">
                    <img src="https://www.logaster.ru/blog/wp-content/uploads/sites/2/2018/10/0080_t_pizza-logo_1.png"
                         alt="logo"
                    />
                </a>
            </div>
            <nav className={ headerNavWrap }>
                <li>
                    <NavLink to="/" activeClassName={active}>Home</NavLink>
                </li>
                <li>
                    <NavLink to="/menu" activeClassName={active}>Menu</NavLink>
                </li>
                <li>
                    <NavLink to="/delivery" activeClassName={active}>Delivery</NavLink>
                </li>
                <li>
                    <NavLink to="/about" activeClassName={active}>About Me</NavLink>
                </li>
                <li>
                    <NavLink to="/calculator" activeClassName={active}>Calculator</NavLink>
                </li>
                <li>
                    <NavLink to="/contacts" activeClassName={active}>Contacts</NavLink>
                </li>
            </nav>
        </header>
    )
};

export default Header;