/**
 * Created by Alexander Melashchenko on 4/2/17.
 */

import rootReducer from '../reducers'
import {createStore, applyMiddleware} from 'redux'
import createLogger from 'redux-logger'
import thunk from 'redux-thunk'

export default function configureStore(initialState) {
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunk, createLogger())
    );
};