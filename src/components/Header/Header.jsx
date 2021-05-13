import React from 'react';

import '../../utils/variables.css';
import classes from './header.module.scss';

const Header = () => {

    const {
        header,
        header__nav_wrap
    } = classes;

    return (
        <header className={ header }>
            <nav className={ header__nav_wrap }>
                <li><a href="/">Menu</a></li>
                <li><a href="/">Delivery</a></li>
                <li><a href="/">About Me</a></li>
                <li><a href="/">Pizza Calculator</a></li>
                <li><a href="/">Contacts</a></li>
            </nav>
        </header>
    )
};

export default Header;