import React from 'react';

import classes from './sidebar.module.scss';

const Sidebar = () => {

    const { sidebar } = classes;

    return (
        <aside className={ sidebar }>
            Sidebar
        </aside>
    )
};

export default Sidebar;