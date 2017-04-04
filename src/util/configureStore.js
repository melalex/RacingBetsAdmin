/**
 * Created by Alexander Melashchenko on 4/2/17.
 */

import rootReducer from '../reducers'
import {createStore, applyMiddleware} from 'redux'
import {routerReducer} from 'react-router-redux'
import combineReducers from "redux/es/combineReducers";
import createLogger from 'redux-logger'
import thunk from 'redux-thunk'

export default function configureStore(initialState) {
    return createStore(
        combineReducers({
            ...rootReducer,
            routing: routerReducer,
        }),
        initialState,
        applyMiddleware(thunk, createLogger())
    );
};