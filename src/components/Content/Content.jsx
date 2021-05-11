import React from 'react';

import classes from './content.module.scss';

const Content = () => {

    const { main_content } = classes;

    return (
        <main className={ main_content }>
            Main Content
        </main>
    )
};

export default Content;