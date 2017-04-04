import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import 'bootstrap/dist/css/bootstrap.css';
import configureStore from './util/configureStore'
import {Router, browserHistory} from 'react-router'
import {routes} from "./util/routes";
import {syncHistoryWithStore} from 'react-router-redux'

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
    <Provider store={store}>
        <Router history={history} router={routes}/>
    </Provider>,
    document.getElementById('root')
);
