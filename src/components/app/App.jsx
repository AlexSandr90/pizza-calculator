import React from 'react';

import '../../utils/variables.css';
import classes from './App.module.scss';

import Header from "../header";
import Footer from "../footer";
import Content from "../content";

import {
    Route,
    Switch,
    BrowserRouter as Router
} from "react-router-dom";

import ProductCard from "../productCard";
import Menu from "../menu";
import Delivery from "../delivery";
import About from "../about";
import Calculator from "../calculator";
import Contacts from "../contacts";


const App = props => {

    const {app_wrap, mainContent} = classes;
    const {
        menu,
        products,
        headerMenu
    } = props.state;

    return (
        <Router>
            <div className={app_wrap}>
                <Header state={headerMenu}/>

                <main className={mainContent}>
                    <Switch >
                        <Route
                            path='/menu'
                            render={() => <Menu/>}
                        />
                        <Route
                            path='/delivery'
                            render={() => <Delivery/>}
                        />
                        <Route
                            path='/about'
                            render={() => <About/>}
                        />
                        <Route
                            path='/calculator'
                            render={() => <Calculator state={menu}/>}
                        />
                        <Route
                            path='/contacts'
                            render={() => <Contacts/>}
                        />
                        <Route
                            path='/'
                            exact
                            render={() => <Content state={products}/>}
                        />

                        <Route path={`/:name`} exact render={() => <ProductCard state={products}/>}/>
                    </Switch>
                </main>
                <Footer/>
            </div>
        </Router>
    );
};

export default App;
