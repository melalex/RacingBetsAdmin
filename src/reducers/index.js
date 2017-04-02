/**
 * Created by Alexander Melashchenko on 4/1/17.
 */

import {combineReducers} from 'redux'
import horse from './horse'
import jockey from './jockey'
import owner from './owner'
import race from './race'
import racecourse from './racecourse'
import trainer from './trainer'
import user from './user'


export default combineReducers({
    horse,
    jockey,
    owner,
    race,
    racecourse,
    trainer,
    user
});