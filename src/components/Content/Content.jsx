import React from 'react';

import '../../utils/variables.css';
import classes from './content.module.scss';

const Content = props => {

        const {
            mainContent,
            productCard
        } = classes;

        return (
            <section className={ mainContent }>
                <div className={ productCard }>
                    <div>
                        <a href="/">
                            <img src="" alt=""/>
                        </a>
                        <div></div>
                    </div>
                </div>
                <div className={ productCard }>Product Card</div>
                <div className={ productCard }>Product Card</div>
                <div className={ productCard }>Product Card</div>
                <div className={ productCard }>Product Card</div>
                <div className={ productCard }>Product Card</div>
                <div className={ productCard }>Product Card</div>
                <div className={ productCard }>Product Card</div>
                <div className={ productCard }>Product Card</div>
                <div className={ productCard }>Product Card</div>
                <div className={ productCard }>Product Card</div>
            </section>
        )

    }
;

export default Content;