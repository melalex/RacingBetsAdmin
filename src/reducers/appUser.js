/**
 * Created by Alexander Melashchenko on 4/4/17.
 */

import * as actionConst from '../constants/AppUser'

const nonAuth = {
    tokenType: 'jwt',
    accessToken: '',
    expiresIn: 0,
    refreshToken: '',
    isAuthenticated: false,
    isFetching: false,
    login: '',
    errors: []
};

const initialState = window.localStorage.getItem(actionConst.APP_USER_KEY) || nonAuth;

export default function appUser(state = initialState, action) {
    switch (action.type) {
        case actionConst.LOGIN_REQUEST:
            return {...state, fetching: true, errors: [], login: action.payload.login};

        case actionConst.REFRESH_REQUEST:
                return {...state, fetching: true, errors: []};

        case actionConst.REFRESH_SUCCESS:
        case actionConst.LOGIN_SUCCESS:
            let nextState = {
                ...state,
                fetching: false,
                isAuthenticated: true,
                errors: [],
                tokenType: action.payload.tokenType,
                accessToken: action.payload.accessToken,
                expiresIn: action.payload.expiresIn,
                refreshToken: action.payload.refreshToken,
            };
            window.localStorage.setItem(actionConst.APP_USER_KEY, nextState);
            return nextState;

        case actionConst.REFRESH_FAILED:
        case actionConst.LOGIN_FAILED:
            return {...nonAuth, errors: action.payload};

        case actionConst.LOGOUT:
            return nonAuth;

        default:
            return state;
    }

};