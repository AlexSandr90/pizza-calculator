import React from 'react';

import classes from './App.module.scss';

import Header from "../Header";
import Footer from "../Footer";
import Sidebar from "../Sidebar";
import Content from "../Content";

const App = () => {

    const { App } = classes;

    return (
        <div className={ App }>
            <Header/>
            <Sidebar/>
            <Content/>
            <Footer/>
        </div>
    );
};

export default App;
