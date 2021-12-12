import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import HomePage from "../pages/HomePage";
import About from "../pages/About";
import Login from "../pages/Login";

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={ HomePage } />
                <Route exact path="/search" component={ HomePage } />
                <Route path="/about" component={ About } />
                <Route path="/login" component={ Login } />
            </Switch>
        </BrowserRouter>
    );
}