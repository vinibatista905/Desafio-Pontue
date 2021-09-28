import React from "react";
import { Route, Router, Switch } from "react-router";

import Login from "../pages/login";
import Home from "../pages/home/";
import Redacao from "../pages/redacao";
import NotFound from "./NotFound";
import PrivateRoute from './PrivateRoute';

import {history} from '../history';

const Routes = () => (
    <Router history={history}>
        <Switch>
            <Route component={Login} exact path='/login' />
            <PrivateRoute component={Home} exact path='/' />
            <PrivateRoute component={Redacao} exact path='/redacao' />
            <PrivateRoute component={NotFound} />
        </Switch>
    </Router>
)

export default Routes;