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

const App = () => {

    const {
        app_wrap,
        mainContent
    } = classes;

    return (
        <Router>
            <div className={app_wrap}>
                <Header/>
                <Sidebar/>

                <main className={ mainContent }>

                    <Route path='/menu' component={Menu} exact/>
                    <Route path='/delivery' component={Delivery} exact/>
                    <Route path='/about' component={About} exact/>
                    <Route path='/calculator' component={Calculator} eact/>
                    <Route path='/contacts' component={Contacts} exact/>
                    <Route path='/' component={Content} exact/>

                </main>
                {/*<Content/>*/}
                <Footer/>
            </div>
        </Router>
    );
};

export default App;
