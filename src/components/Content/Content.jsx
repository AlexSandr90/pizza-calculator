import React from 'react';

import '../../utils/variables.css';
import classes from './content.module.scss';

import Slider from "../Slider/Slider";
import ProductCards from "../Pages/ProductCards";


const Content = props => {

        const {
            mainContent,
            productWrap,
            sliderBlock
        } = classes;

        const productCards = props.productFields.map(product => {
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
                <div className={ sliderBlock }>
                    <Slider/>
                </div>

                <div className={ productWrap }>
                    { productCards }
                </div>


            </section>
        )

    }
;

export default Content;