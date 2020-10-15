import React from 'react';

import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from '../pages/login.js';
import Home from '../pages/home.js';
import Default from '../pages/default.js'
import Account from '../pages/account.js'

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={ Default } />
                <Route exact path="/login" component={ Login } />
                <Route exact path="/home/" component={ Home } />
                <Route exact path="/account" component={ Account } />
            </Switch>
        </BrowserRouter> 
    )
};

export default Routes;