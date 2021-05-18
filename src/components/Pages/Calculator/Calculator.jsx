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
    const [ pizzaBase, setPizzaBase ] = useState(65);
    const [ pizzaRadius, setPizzaSize ] = useState();


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
        const numberCheese = document.getElementById('cheese').value;
        const numberPineapple = document.getElementById('pineapple').value;

        console.log(numberHam);
        console.log('click');

        const result = pizzaBase + (numberHam * 15) + (numberCheese * 18) + (numberPineapple * 12);

        setOrderPrice(result);
    };

    const handleCost = (event, setHook) => {
        if ( event.target.value === '35' ) {
            setHook(SMALL_BASE);
        }

        if ( event.target.value === '55' ) {
            setHook(MEDIUM_BASE)
        }

        if ( event.target.value === '75' ) {
            setHook(BIG_BASE)
        }

        return event.target.value;
    };

    return (
        <div className={calc}>
            <h3>Калькулятор стоимости пиццы</h3>

            <div className={ calcHeader }>
                <span>Размер основы</span>
                <select name="radius" onChange={event => handleCost(event, setPizzaBase)}>
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
