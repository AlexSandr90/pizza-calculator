import React, { Component } from 'react';

import '../../utils/variables.css';
import classes from './content.module.scss';
import Ingredients from "./Ingredients";

class Content extends Component {

    state = {
        sum: 0,
        menuFields: [
            {
                id: 0,
                since: 50,
                selectId: 'ham',
                ingredient: 'Ветчина',
                priceToOne: 15,
                selectName: 'ham'
            },
            {
                id: 1,
                since: 50,
                selectId: 'pineapple',
                ingredient: 'Ананас',
                priceToOne: 12,
                selectName: 'pineapple'
            },
            {
                id: 2,
                since: 100,
                selectId: 'cheese',
                ingredient: 'Сыр',
                priceToOne: 18,
                selectName: 'cheese'
            }
        ]

    };

    render() {
        const {
            btn,
            calc,
            price,
            calcTable,
            calcHeader,
            priceBlock,
            mainContent
        } = classes;

        const listItem = this.state.menuFields.map(item => {
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
                pizzaBaseCost = 55
            }
            if ( pizzaBaseSIze === '55' ) {
                pizzaBaseCost = 65
            }
            if ( pizzaBaseSIze === '75' ) {
                pizzaBaseCost = 75
            }

            console.log('pizzaBaseCost: ', pizzaBaseCost);
            console.log(numberHam);

            console.log('click');

            const result = pizzaBaseCost + (numberHam * 15) + (numberCheese * 18) + (numberPineapple * 12);

            this.setState(() => ({
                sum: result
            }))

        };

        return (
            <main className={mainContent}>
                <div className={calc}>
                    <h3>Калькулятор стоимости пиццы</h3>
                    <div className={ calcHeader }>
                        <span>Размер основы</span>
                        <select name="radius" id="radius">
                            <option value={35}>35 см</option>
                            <option value={55} selected>55 см</option>
                            <option value={75}>75 см</option>
                        </select>
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
                            <span>{ this.state.sum } грн</span>
                        </p>
                    </div>

                </div>


            </main>
        )
    }

};

export default Content;