/**
 * Created by Alexander Melashchenko on 4/2/17.
 */

import rootReducer from '../reducers'
import {createStore, applyMiddleware} from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import {routerMiddleware} from 'react-router-redux'


function configureStore(browserHistory) {
    const createStoreWithMiddleware = applyMiddleware(thunk, logger, routerMiddleware(browserHistory))(createStore);
    return createStoreWithMiddleware(rootReducer);
}

export default configureStore