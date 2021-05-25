import React from 'react';

import '../../utils/variables.css';
import classes from './App.module.scss';

import Header from "../Header";
import Footer from "../Footer";
import Sidebar from "../Sidebar";
import Content from "../Content";

import {
    Route,
    BrowserRouter as Router
} from "react-router-dom";

import {
    Menu,
    About,
    Delivery,
    Contacts,
    Calculator
} from "../Pages";

const App = props => {

    const {
        app_wrap,
        mainContent
    } = classes;

    const {
        menuItems,
        menuFields,
        productFields
    } = props.state;

    return (
        <Router>
            <div className={app_wrap}>
                <Header menuItems={ menuItems } />
                {/*<Sidebar/>*/}

                <main className={ mainContent }>

                    <Route
                        path='/menu'
                        exact
                        render={ () => <Menu/> }
                    />
                    <Route
                        path='/delivery'
                        exact
                        render={ () => <Delivery/> }
                    />
                    <Route
                        path='/about'
                        exact
                        render={ () => <About/> }
                    />
                    <Route
                        path='/calculator'
                        exact
                        render={ () => <Calculator menuFields={ menuFields }/> }
                    />
                    <Route
                        path='/contacts'
                        exact
                        render={ () => <Contacts/> }
                    />
                    <Route
                        path='/'
                        exact
                        render={ () => <Content productFields={ productFields } /> }
                    />

                </main>
                <Footer/>
            </div>
        </Router>
    );
};

export default App;
