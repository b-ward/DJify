import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Landing from './Landing/landingpage';

const Main = () => (
    <Router>
        <Switch>
            <Route exact path ="/" component={Landing}/>
        </Switch>
    </Router>
)

export default Main;