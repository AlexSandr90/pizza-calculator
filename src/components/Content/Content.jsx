import React from 'react';

import '../../utils/variables.css';
import classes from './content.module.scss';

const Content = () => {

    const {
        calc,
        calcTable,
        calcHeader,
        mainContent
    } = classes;

    return (
        <main className={mainContent}>
            <div className={calc}>
                <h3>Калькулятор стоимости пиццы</h3>
                <div className={ calcHeader }>
                    <span>Размер основы</span>
                    <select name="radius" id="radius">
                        <option value="35">35 см</option>
                        <option value="55" selected>55 см</option>
                        <option value="75">75 см</option>
                    </select>
                </div>
                <ul className={ calcTable }>
                    <li>
                        <span>Ингредиент</span>
                        <span>Цена за порцию, грн</span>
                        <span>Размер порции, гр</span>
                        <span>Количество порций</span>
                    </li>
                    <li>
                        <span>Ветчина</span>
                        <span>15</span>
                        <span>50</span>
                        <select name="ham" id="ham">
                            <option value="1">1</option>
                            <option value="2" selected>2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </li>
                    <li>
                        <span>Ананас</span>
                        <span>12</span>
                        <span>50</span>
                        <select name="pineapple" id="pineapple">
                            <option value="1">1</option>
                            <option value="2" selected>2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </li>
                    <li>
                        <span>Сыр</span>
                        <span>18</span>
                        <span>100</span>
                        <select name="cheese" id="cheese">
                            <option value="1">1</option>
                            <option value="2" selected>2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </li>
                </ul>
            </div>
        </main>
    )
};

export default Content;