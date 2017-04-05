import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux'
import 'bootstrap/dist/css/bootstrap.css';
import configureStore from './store/index'
import {Router, browserHistory} from 'react-router'
import routes from "./routes/index";
import {syncHistoryWithStore} from 'react-router-redux'

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

render(
    <Provider store={store}>
        <Router history={history} router={routes}/>
    </Provider>,
    document.getElementById('root')
);
