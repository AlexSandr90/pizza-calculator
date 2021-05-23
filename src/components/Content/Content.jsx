import React from 'react';

import '../../utils/variables.css';
import classes from './content.module.scss';
import {productFields} from "../../state";
import ProductCards from "../Pages/ProductCards";
import MenuItem from "../Header/MenuItem/MenuItem";


const Content = props => {

        const {
            mainContent,
            productCard,
        } = classes;

        const productCards = productFields.map(product => {
            const {
                id,
                path,
                imgSrc,
                productName,
                productPrice
            } = product;

            return (
                <ProductCards
                    key={ id }
                    path={ path }
                    imgSrc={ imgSrc }
                    productName={ productName }
                    productPrice={ productPrice }
                />
            )
        });

        return (
            <section className={mainContent}>

                { productCards }


            </section>
        )

    }
;

export default Content;