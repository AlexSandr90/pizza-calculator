import React from 'react';

import '../../utils/variables.css';
import classes from './content.module.scss';

const Content = () => {

    const { main_content } = classes;

    return (
        <main className={ main_content }>
            <h3>Калькулятор стоимости пиццы</h3>
            <div>
                <label htmlFor='base' >Размер основы</label>
                <input type="number" id='base'/>
            </div>
            <div>
                <ul>
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
                        <select name="" id="">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </li>
                    <li>
                        <span>Ананас</span>
                        <span>12</span>
                        <span>50</span>
                        <select name="" id="">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </li>
                    <li>
                        <span>Сыр</span>
                        <span>18</span>
                        <span>100</span>
                        <select name="" id="">
                            <option value="1">1</option>
                            <option value="2">2</option>
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