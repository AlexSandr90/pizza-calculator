import React from 'react';

import classes from './header.module.scss';

const Header = () => {

    const { header } = classes;

    return (
        <header className={ header }>
            Header
        </header>
    )
};

export default Header;