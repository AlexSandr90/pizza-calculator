import React from 'react';

import '../../utils/variables.css';
import classes from './header.module.scss';
import MenuItem from "../menuItem";


const Header = props => {

    const {
        header,
        active,
        logoBlock,
        headerNavWrap
    } = classes;

    const { menuItems } = props.state;

    const headerMenu = menuItems.map(menuItem => {
        const {
            id,
            path,
            menuItemName
        } = menuItem;

        return (
            <MenuItem
                key={ id }
                path={ path }
                menuItemName={ menuItemName }
                activeClassName={ `${active}` }
            />
        )
    });

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
                { headerMenu }
            </nav>
        </header>
    )
};

export default Header;