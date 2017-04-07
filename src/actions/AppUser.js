/**
 * Created by Alexander Melashchenko on 4/4/17.
 */

import * as actionConst from '../constants/AppUser'
import {API_ROOT} from  '../constants/Api'
import {ajax} from "jquery";
import {push} from 'react-router-redux';
import {basicAuthHeader, isExpired, getErrorsFromResponse} from "../util";

function signIn(login, password) {
    window.localStorage.removeItem(actionConst.APP_USER_KEY);
    return dispatch => {
        dispatch({
            type: actionConst.LOGIN_REQUEST,
            payload: {
                login: login,
                password: password
            }
        });

        ajax({
            type: 'GET',
            url: API_ROOT + '/api/account/admin/login',
            crossDomain: true,
            dataType: 'json',
            headers: {'Authorization': basicAuthHeader(login, password)},
            success: [
                response => {
                    let token = response.result[0];
                    dispatch({
                        type: actionConst.LOGIN_SUCCESS,
                        payload: {
                            tokenType: token.tokenType,
                            accessToken: token.accessToken,
                            expiresIn: token.expiresIn,
                            refreshToken: token.refreshToken,
                        }
                    });
                    dispatch(push('/'));
                }
            ],
            error: [
                response => {
                    let errors = getErrorsFromResponse(response);
                    dispatch({
                        type: actionConst.LOGIN_FAILED,
                        payload: errors
                    })
                }
            ]
        });
    }
}

function signOut() {
    window.localStorage.removeItem(actionConst.APP_USER_KEY);
    return dispatch => {
        dispatch({
            type: actionConst.LOGOUT,
        });

        dispatch(push('/login'));
    }
}

function refresh(next) {
    return (dispatch, getState) => {
        let appUser = getState().appUser;
        if (isExpired(appUser)) {
            window.localStorage.removeItem(actionConst.APP_USER_KEY);

            dispatch({
                type: actionConst.REFRESH_REQUEST,
            });

            let refreshToken = appUser.refreshToken;

            ajax({
                type: 'GET',
                url: API_ROOT + '/api/account/admin/refresh/' + refreshToken,
                dataType: 'json',
                crossDomain: true,
                success: [
                    response => {
                        let token = response.result[0];
                        dispatch({
                            type: actionConst.REFRESH_SUCCESS,
                            payload: {
                                tokenType: token.tokenType,
                                accessToken: token.accessToken,
                                expiresIn: token.expiresIn,
                                refreshToken: token.refreshToken,
                            }
                        });
                        dispatch(next)
                    }
                ],
                error: [
                    response => {
                        dispatch(push('/login'));
                        let errors = getErrorsFromResponse(response);
                        dispatch({
                            type: actionConst.REFRESH_FAILED,
                            payload: errors
                        });
                    }
                ]
            });
        } else {
            dispatch(next)
        }
    }
}

export {signIn, signOut, refresh};