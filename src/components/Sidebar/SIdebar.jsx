import React from 'react';

import '../../utils/variables.css';
import classes from './sidebar.module.scss';

const Sidebar = () => {

    const {
        sidebar,
        sidebar_menu
    } = classes;

    return (
        <aside className={ sidebar }>
            <ul className={ sidebar_menu }>
                <li><a href="/">Item 1</a></li>
                <li><a href="/">Item 2</a></li>
                <li><a href="/">Item 3</a></li>
                <li><a href="/">Item 4</a></li>
                <li><a href="/">Item 5</a></li>
                <li><a href="/">Item 6</a></li>
                <li><a href="/">Item 7</a></li>
                <li><a href="/">Item 8</a></li>
            </ul>
        </aside>
    )
};

export default Sidebar;