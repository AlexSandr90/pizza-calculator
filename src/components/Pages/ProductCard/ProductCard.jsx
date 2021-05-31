import React from 'react';

import '../../../utils/variables.css';
import classes from './productCards.module.scss'
import {
    NavLink,
    useLocation
} from "react-router-dom";

const ProductCard = props => {

    let location = useLocation();
    const currentPath = Number(location.pathname.slice(1));
    let currentProps;

    if ( location.pathname === '/' ) {
        currentProps = props;
    } else {
        currentProps = props.state.productFields[currentPath];
    }

    const {
        id,
        path,
        imgSrc,
        productName,
        productPrice
    } = currentProps;

    const {
        productCard,
        buttonBlock,
        productCardLink
    } = classes;

    return (
        <div
            className={productCard}
            key={ id }
        >
            <NavLink
                className={ productCardLink }
                to={ {
                    pathname: `/${path}`,
                    state: location
                } }
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

export default ProductCard;