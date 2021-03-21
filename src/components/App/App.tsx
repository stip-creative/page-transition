import React, { FunctionComponent } from "react";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";

import RootRouter from "../../router";

import './App.scss';

const App: FunctionComponent = () => {
    const history = createBrowserHistory();

    return (
        <Router history={history}>
            <RootRouter />
        </Router>
    );
};

export default App;
