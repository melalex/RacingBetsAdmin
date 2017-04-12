import React from 'react'
import ReactDom from 'react-dom'
import {Provider} from 'react-redux'
import 'bootstrap/dist/css/bootstrap.css'
import 'react-progress-2/main.css'
import '../src/styles/App.css'
import '../src/styles/DateTime.css'
import configureStore from './store'
import {Router, hashHistory} from 'react-router'
import routes from "./routes"
import {syncHistoryWithStore} from 'react-router-redux'

const store = configureStore(hashHistory);
const history = syncHistoryWithStore(hashHistory, store);

ReactDom.render(
    <Provider store={store}>
        <Router history={history} routes={routes}/>
    </Provider>,
    document.getElementById('root')
);

