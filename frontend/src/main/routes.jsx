import React from 'react'
import { Router, Route, Redirect, hashHistory } from "react-router"

import Default from '../default/default'
import App from './../app/app'

export default props => (
    <Router history={hashHistory}>
        <Route path='/' component={Default}>
        </Route>
        <Route path='/app' component={App}>
        </Route>
    </Router>
)