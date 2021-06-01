import React from 'react';
import {NavLink} from "react-router-dom";

const MenuItem = props => {

    const {
        id,
        path,
        menuItemName,
        activeClassName
    } = props;

    return (
        <li key={ id }>
            <NavLink
                to={`/${ path }`}
                exact
                activeClassName={ activeClassName }
            >
                { menuItemName }
            </NavLink>
        </li>
    )
};

export default MenuItem;