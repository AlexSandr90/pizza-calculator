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
                    <NavLink to="/"
                             exact
                             activeClassName={active}
                    >Home</NavLink>
                </li>
                <li>
                    <NavLink to="/menu"
                             exact
                             activeClassName={active}
                    >Menu</NavLink>
                </li>
                <li>
                    <NavLink to="/delivery"
                             exact
                             activeClassName={active}
                    >Delivery</NavLink>
                </li>
                <li>
                    <NavLink to="/about"
                             exact
                             activeClassName={active}
                    >About Me</NavLink>
                </li>
                <li>
                    <NavLink to="/calculator"
                             exact
                             activeClassName={active}
                    >Calculator</NavLink>
                </li>
                <li>
                    <NavLink to="/contacts"
                             exact
                             activeClassName={active}
                    >Contacts</NavLink>
                </li>
            </nav>
        </header>
    )
};

export default Header;