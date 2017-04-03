/**
 * Created by Alexander Melashchenko on 4/2/17.
 */

import rootReducer from '../reducers'
import {createStore, applyMiddleware} from 'redux'
import {routerReducer} from 'react-router-redux'
import combineReducers from "redux/es/combineReducers";

export default function configureStore(initialState) {
    const store = createStore(
        combineReducers({
            ...rootReducer,
            routing: routerReducer
        }),
        initialState
    );
    return store;
};