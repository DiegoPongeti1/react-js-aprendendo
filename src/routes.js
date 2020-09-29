import React from 'react';
import { isAuthenticated } from './auth'

import { BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'


const PrivateRoute = ({ component: Component, ... rest }) => (
    <Route { ... rest} render={props => (
        isAuthenticated() ? (
            <Component { ... props } />
        ) : (
            <Redirect to={{ pathname: '/', state: { from: props.location } }} />
        )
    )} />
)


const Routes = () => (
    <BrowserRouter>
        <switch>
            <Route exact path="/" component={() => <h1> Hello Word</h1>} />
            <PrivateRoute path="/app" component={() => <h1> Você esta logado </h1>} />
        </switch>
    </BrowserRouter>
)

export default Routes;
