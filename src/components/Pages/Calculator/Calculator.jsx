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
    const [ pizzaItem, setPizzaItem ] = useState(0);
    const [ useHam, setUseHam ] = useState(2);
    const [ usePineapple, setUsePineapple ] = useState(2);
    const [ useCheese, setUseCheese ] = useState(2);

    const {
        btn,
        calc,
        price,
        calcTable,
        calcHeader,
        priceBlock
    } = classes;

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


    const listItem = menuFields.map((item) => {

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
        // const numberHam = document.getElementById('ham').value;
        // const numberCheese = document.getElementById('cheese').value;
        // const numberPineapple = document.getElementById('pineapple').value;
        // const result = pizzaBase + (numberHam * 15) + (numberCheese * 18) + (numberPineapple * 12);

        // console.log(numberHam);

        console.log('click');
        console.log('pizzaItem: ', pizzaItem);

        const result = pizzaBase + (useHam * 15) + (useCheese * 18) + (usePineapple * 12);

        setOrderPrice(result);
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

                <li key={ menuFields[0].id } className={ listItem }>
                    <span>{ menuFields[0].ingredient }</span>
                    <span>{ menuFields[0].priceToOne }</span>
                    <span>{ menuFields[0].since }</span>
                    <select
                        name={ menuFields[0].selectName }
                        id={ menuFields[0].selectId }
                        value={ useHam }
                        onChange={ event => setUseHam(event.target.value) }
                    >
                        <option value="1">1</option>
                        <option value="2" selected>2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </li>

                <li key={ menuFields[1].id } className={ listItem }>
                    <span>{ menuFields[1].ingredient }</span>
                    <span>{ menuFields[1].priceToOne }</span>
                    <span>{ menuFields[1].since }</span>
                    <select
                        name={ menuFields[1].selectName }
                        id={ menuFields[1].selectId }
                        value={ usePineapple }
                        onChange={ event => setUsePineapple(event.target.value) }
                    >
                        <option value="1">1</option>
                        <option value="2" selected>2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </li>

                <li key={ menuFields[2].id } className={ listItem }>
                    <span>{ menuFields[2].ingredient }</span>
                    <span>{ menuFields[2].priceToOne }</span>
                    <span>{ menuFields[2].since }</span>
                    <select
                        name={ menuFields[2].selectName }
                        id={ menuFields[2].selectId }
                        value={ useCheese }
                        onChange={ event => setUseCheese(event.target.value) }
                    >
                        <option value="1">1</option>
                        <option value="2" selected>2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </li>

                {/*{ listItem }*/}

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
