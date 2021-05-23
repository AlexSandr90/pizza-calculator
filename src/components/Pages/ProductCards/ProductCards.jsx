import React from 'react';


import '../../../utils/variables.css';
import classes from './productCards.module.scss'
import {NavLink} from "react-router-dom";

const ProductCards = props => {

    const {
        id,
        path,
        imgSrc,
        productName,
        productPrice
    } = props;

    const {
        productCard,
        buttonBlock,
        productCardLink
    } = classes;

    return (
        <div className={productCard} key={ id }>
            <NavLink
                className={ productCardLink }
                to={`/${path}`}
                exact
            >
                <img src={imgSrc} alt={ productName }/>
                <h3>{ productName }</h3>
            </NavLink>
            <p className={ buttonBlock }>
                <span>{productPrice} грн</span>
                <button>Добавить в корзину</button>
            </p>
        </div>
    )
};

export default ProductCards;