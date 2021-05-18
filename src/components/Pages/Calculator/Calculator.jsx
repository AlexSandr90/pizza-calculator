import React, { useState } from 'react';

import '../../../utils/variables.css';
import classes from '../pages.module.scss';
import Ingredients from "./Ingredients";

import {
    BIG_BASE,
    SMALL_BASE,
    MEDIUM_BASE
} from "../../../utils/consants";
import { menuFields } from "../../../state";

const Calculator = () => {

    const [ orderPrice, setOrderPrice ] = useState(0);
    const [ pizzaBase, setPizzaBase ] = useState(0);

    const {
        btn,
        calc,
        price,
        calcTable,
        calcHeader,
        priceBlock
    } = classes;

    const listItem = menuFields.map(item => {
        const {
            id,
            since,
            selectId,
            ingredient,
            priceToOne,
            selectName
        } = item;

        return (
            <Ingredients
                key={ id }
                since={ since }
                selectId={ selectId }
                ingredient={ ingredient }
                priceToOne={ priceToOne }
                selectName={ selectName }
            />
        )
    });

    const handleCalculateSum = () => {
        const numberHam = document.getElementById('ham').value;
        const pizzaBaseSIze = document.getElementById('radius').value;
        const numberCheese = document.getElementById('cheese').value;
        const numberPineapple = document.getElementById('pineapple').value;

        let pizzaBaseCost;

        console.log('pizzaBaseSIze: ', pizzaBaseSIze);

        if ( pizzaBaseSIze === '35' ) {
            pizzaBaseCost = SMALL_BASE;
            setPizzaBase(SMALL_BASE);
        }
        if ( pizzaBaseSIze === '55' ) {
            pizzaBaseCost = MEDIUM_BASE;
            setPizzaBase(MEDIUM_BASE)
        }
        if ( pizzaBaseSIze === '75' ) {
            pizzaBaseCost = BIG_BASE;
            setPizzaBase(BIG_BASE)
        }

        console.log('pizzaBaseCost: ', pizzaBaseCost);
        console.log(numberHam);

        console.log('click');

        const result = pizzaBaseCost + (numberHam * 15) + (numberCheese * 18) + (numberPineapple * 12);

        setOrderPrice(result);

    };

    return (
        <div className={calc}>
            <h3>Калькулятор стоимости пиццы</h3>

            <div className={ calcHeader }>
                <span>Размер основы</span>
                <select name="radius" id="radius">
                    <option value={35}>35 см</option>
                    <option value={55} selected>55 см</option>
                    <option value={75}>75 см</option>
                </select>

                <span>
                    Цена: {pizzaBase} грн
                </span>
            </div>

            <ul className={ calcTable }>
                <li>
                    <span>Ингредиент</span>
                    <span>Цена за порцию, грн</span>
                    <span>Размер порции, гр</span>
                    <span>Количество порций</span>
                </li>

                { listItem }

            </ul>


            <div className={ priceBlock }>
                <button
                    className={ btn }
                    onClick={ handleCalculateSum }
                >
                    Посчитать
                </button>

                <p className={ price }>
                    <span>Сумма заказа: </span>
                    <span>{ orderPrice } грн</span>
                </p>
            </div>

        </div>
    )
};

export default Calculator
