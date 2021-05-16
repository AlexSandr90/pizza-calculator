import React from 'react';

import classes from './ingredients.module.scss';

const Ingredients = props => {
    const { listItem } = classes;

    const {
        id,
        since,
        selectId,
        ingredient,
        priceToOne,
        selectName
    } = props;

    return (
        <li key={ id } className={ listItem }>
            <span>{ ingredient }</span>
            <span>{ priceToOne }</span>
            <span>{ since }</span>
            <select name={ selectName } id={ selectId }>
                <option value="1">1</option>
                <option value="2" selected>2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
        </li>
    )
};

export default Ingredients;