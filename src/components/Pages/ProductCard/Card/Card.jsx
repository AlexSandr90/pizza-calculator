import React from "react";

import classes from './card.module.scss';
import { NavLink } from "react-router-dom";

const Card = props => {
debugger
    const {
        id,
        imgSrc,
        productName,
        productPrice
    } = props;

    return (
        <div className={ classes.card } key={ id }>
            <img src={ imgSrc } alt={ productName }/>
            <h1>{ productName }</h1>
            <p>Цена: { productPrice } грн</p>

            <h1>{ props.state.params.name }</h1>
        </div>
    )
};

export default Card;
