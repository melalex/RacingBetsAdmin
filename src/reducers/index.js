/**
 * Created by Alexander Melashchenko on 4/1/17.
 */

import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'
import crud from './crud'
import appUser from './appUser'

export default combineReducers({
    crud,
    appUser,
    routing: routerReducer
});