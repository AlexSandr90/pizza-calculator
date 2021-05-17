import React from 'react';

import '../../utils/variables.css';
import classes from './App.module.scss';

import Header from "../Header";
import Footer from "../Footer";
import Sidebar from "../Sidebar";
import Content from "../Content";

import {
    Route,
    BrowserRouter
} from "react-router-dom";

import {
    Menu,
    About,
    Delivery,
    Contacts,
    Calculator
} from "../Pages";

const App = () => {

    const {
        app_wrap,
        mainContent
    } = classes;

    return (
        <BrowserRouter>
            <div className={app_wrap}>
                <Header/>
                <Sidebar/>

                <main className={ mainContent }>
                    {/*<Route component={Content} path='/'/>*/}

                    <Route path='/menu' component={Menu}/>
                    <Route path='/delivery' component={Delivery}/>
                    <Route path='/about' component={About}/>
                    <Route path='/calculator' component={Calculator}/>
                    <Route path='/contacts' component={Contacts}/>

                </main>
                {/*<Content/>*/}
                <Footer/>
            </div>
        </BrowserRouter>
    );
};

export default App;
