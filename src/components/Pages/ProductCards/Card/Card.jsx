import React from "react";

import classes from './card.module.scss';
import {withRouter} from "react-router-dom";


const Card = props => {
    // console.log('Card props: ', props);
    // console.log('Card props.state.path: ', props.state.path);
    // console.log('Card props.state.productFields[0].productName: ', props.state.productFields[0].productName);
    // console.log('Card props.state: ', props.state);
    // console.log('Card props.location.pathname: ', props.location.pathname);
    //
    //
    //
    // const currentPath = Number(props.location.pathname.slice(1));
    // console.log('Card currentPath: ', currentPath);
    // console.log('typeof currentPath: ', (typeof currentPath));
    //
    // const {
    //     id,
    //     path,
    //     imgSrc,
    //     productName,
    //     productPrice
    // } = props.state.productFields[currentPath - 1 ];


    return (
        <div className={ classes.card }>
            {/*<img src={ imgSrc } alt={productName}/>*/}
            {/*<h1>{ productName }</h1>*/}
            {/*<p>Цена: { productPrice } грн</p>*/}

            <h1>{ props.state.params.name }</h1>
        </div>
    )
};

// export default withRouter(Card);
export default Card;
