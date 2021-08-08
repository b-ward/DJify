import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Landing from './Landing/landing';
import Login from './Login/login';
import Callback from './Callback/callback';

const Main = () => (
    <Router>
        <Switch>
            <Route exact path ="/" component={Landing}/>
            <Route exact path ="/login" component={Login}/>
            <Route exact path ="/callback" component={Callback}/>
        </Switch>
    </Router>
)

export default Main;