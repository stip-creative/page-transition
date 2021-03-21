import React, { FunctionComponent } from "react";
import { Switch, Route, /* Redirect */ } from "react-router";

import About from "../components/Pages/About";
import Home from "../components/Pages/Home";


const RootRouter: FunctionComponent = () => (
    <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
    </Switch>
);

export default RootRouter;
