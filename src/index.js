import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import App from './containers/App';
import 'bootstrap/dist/css/bootstrap.css';
import configureStore from './util/configureStore'
import { Router, browserHistory } from 'react-router'
import {routes} from "./util/routes";

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory} router={routes} />
    </Provider>,
    document.getElementById('root')
);
