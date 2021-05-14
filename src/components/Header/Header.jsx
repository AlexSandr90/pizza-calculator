import React from 'react';

import '../../utils/variables.css';
import classes from './header.module.scss';

const Header = () => {

    const {
        header,
        logo_block,
        header__nav_wrap
    } = classes;

    return (
        <header className={ header }>
            <div className={ logo_block }>
                <a href="/">
                    <img src="https://www.logaster.ru/blog/wp-content/uploads/sites/2/2018/10/0080_t_pizza-logo_1.png"
                         alt="logo"
                    />
                </a>
            </div>
            <nav className={ header__nav_wrap }>
                <li><a href="/">Menu</a></li>
                <li><a href="/">Delivery</a></li>
                <li><a href="/">About Me</a></li>
                <li><a href="/">Calculator</a></li>
                <li><a href="/">Contacts</a></li>
            </nav>
        </header>
    )
};

export default Header;