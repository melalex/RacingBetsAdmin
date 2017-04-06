import React from 'react'
import ReactDom from 'react-dom'
import {Provider} from 'react-redux'
import 'bootstrap/dist/css/bootstrap.css'
import '../src/styles/App.css'
import '../public/favicon.ico'
import configureStore from './store'
import {Router, browserHistory} from 'react-router'
import routes from "./routes"
import {syncHistoryWithStore} from 'react-router-redux'

const store = configureStore(browserHistory);
const history = syncHistoryWithStore(browserHistory, store);

ReactDom.render(
    <Provider store={store}>
        <Router history={history} routes={routes}/>
    </Provider>,
    document.getElementById('root')
);

