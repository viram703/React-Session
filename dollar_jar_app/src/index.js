import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '../src/User';
import Home from '../src/home';
import User from '../src/User';
import { BrowserRouter as Router, Route } from "react-router-dom";
import * as serviceWorker from './serviceWorker';

const routing=(<Router>
    <div>
        <Route exact path="/" component={Home}>
        </Route>
    </div>
    <div>
        <Route  path="/User" component={User}>
        </Route>
    </div>
    <div>
        <route exact path="/User.js">
        </route>
    </div>
</Router>);
ReactDOM.render(routing,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
