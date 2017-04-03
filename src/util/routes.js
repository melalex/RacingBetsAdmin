/**
 * Created by Alexander Melashchenko on 4/3/17.
 */

import React from 'react'
import {Route, IndexRoute} from 'react-router'
import App from "../containers/App";

export const routes = (
    <div>
        <Route path='/' component={App}>

        </Route>
        <Route path='*' component={NotFound}/>
    </div>
);