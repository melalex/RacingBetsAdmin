/**
 * Created by Alexander Melashchenko on 4/2/17.
 */

import rootReducer from '../reducers'
import {createStore, applyMiddleware} from 'redux'

export default function configureStore(initialState) {
    const store = createStore(rootReducer, initialState);
    return store;
};