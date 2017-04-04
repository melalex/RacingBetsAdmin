/**
 * Created by Alexander Melashchenko on 4/4/17.
 */

import * as actionConst from '../constants/AppUser'

const initialState = window.localStorage.getItem('app-user') || {
    tokenType: 'jwt',
    accessToken: '',
    expiresIn: 0,
    refreshToken: '',
    isAuthenticated: false,
    isFetching: false,
    login: '',
    errors: []
};

export default function appUser(state = initialState, action) {

    switch (action.type) {
        case actionConst.LOGIN_REQUEST:
            return {...state, errors: [], info: ''};

        case actionConst.LOGIN_SUCCESS:
            return {...state, fetching: true, errors: [], info: ''};

        case actionConst.LOGIN_FAILED:
            return {...state, fetching: false, entity: action.payload};

        case actionConst.LOGOUT:
            return initialState;

        default:
            return state;
    }
};