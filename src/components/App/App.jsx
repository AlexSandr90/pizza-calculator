import React from 'react';

import '../../utils/variables.css';
import classes from './App.module.scss';

import Header from "../Header";
import Footer from "../Footer";
import Content from "../Content";

import {
    Route,
    Switch,
    BrowserRouter as Router
} from "react-router-dom";

import {
    Menu,
    About,
    Delivery,
    Contacts,
    Calculator
} from "../Pages";
import Card from "../Pages/ProductCards/Card";


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
                    <Switch>
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

                        {/*<Route path={`/:name`} exact render={() => <Card state={products}/>}/>*/}
                        {/*<Route path={`/:${products.productFields.path}`} exact render={ () => <Card state={ products } /> }/>*/}

                    </Switch>
                </main>
                <Footer/>
            </div>
        </Router>
    );
};

export default App;
