/**
 * Created by Alexander Melashchenko on 4/4/17.
 */

import * as actionConst from '../constants/AppUser'
import {ajax} from "jquery";
import {push} from 'react-router-redux';
import API_DOMAIN from '../constants/Api'
import {basicAuthHeader} from "../util";

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
            url: API_DOMAIN + '/account/admin/login',
            dataType: 'json',
            beforeSend: [
                request => {
                    request.setRequestHeader("Authorization", basicAuthHeader(login, password));
                }
            ],
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
                    })
                }
            ],
            error: [
                response => dispatch({
                    type: actionConst.LOGIN_FAILED,
                    payload: response.result
                })
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

        let refreshToken = getState().appUser.refreshToken;

        ajax({
            type: 'GET',
            url: API_DOMAIN + '/account/admin/refresh/' + refreshToken,
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
    }
}

export {signIn, signOut, refresh};