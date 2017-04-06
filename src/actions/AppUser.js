/**
 * Created by Alexander Melashchenko on 4/4/17.
 */

import * as actionConst from '../constants/AppUser'
import {ajax} from "jquery";
import {push} from 'react-router-redux';
import {basicAuthHeader, isExpired} from "../util";

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
            url: 'http://localhost:8080/api/account/admin/login',
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
                    dispatch({
                        type: actionConst.LOGIN_FAILED,
                        payload: response.result
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
    window.localStorage.removeItem(actionConst.APP_USER_KEY);
    return (dispatch, getState) => {
        dispatch({
            type: actionConst.REFRESH_REQUEST,
        });

        let appUser = getState().appUser;
        if (isExpired(appUser)) {
            let refreshToken = appUser.refreshToken;

            ajax({
                type: 'GET',
                url: '/api/account/admin/refresh/' + refreshToken,
                dataType: 'json',
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
                        dispatch({
                            type: actionConst.REFRESH_FAILED,
                            payload: response.result
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