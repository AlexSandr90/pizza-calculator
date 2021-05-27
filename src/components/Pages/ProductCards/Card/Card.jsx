import React from "react";

import classes from './card.module.scss';

const Card = props => {
    console.log('Card props: ', props);
    return (
        <div className={ classes.card }>
            <h1>{ props.match.params.name }</h1>
        </div>
    )
};

export default Card;
