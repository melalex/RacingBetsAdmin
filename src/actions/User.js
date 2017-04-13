/**
 * Created by Alexander Melashchenko on 4/1/17.
 */

import {ajax} from "jquery"
import {get, search} from './CrudUtil'
import {refresh} from '../actions/AppUser'
import {API_ROOT} from  '../constants/Api'
import {ADD_MONEY_REQUEST, ADD_MONEY_SUCCESS, ADD_MONEY_FAILED} from '../constants/User'
import {bearerAuthHeader, getErrorsFromResponse} from "../util";
import {USER_TYPE} from '../constants/Crud'

const path = '/api/account';

function getUsers(page) {
    return get(USER_TYPE, page, path)
}

function searchUser(req, page) {
    return search(USER_TYPE, req, page, path)
}

function putMoney(id, amount) {
    return refresh((dispatch, getStore) => {
        dispatch({
            type: ADD_MONEY_REQUEST,
        });

        let {searchString, page} = getStore().crud;

        ajax({
            type: 'PUT',
            url: API_ROOT + '/api/account/balance/' + id,
            crossDomain: true,
            data: '' + amount,
            headers: bearerAuthHeader(getStore),
            success: [
                response => {
                    dispatch({
                        type: ADD_MONEY_SUCCESS,
                        payload: response.result[0]
                    });

                    if (searchString) {
                        dispatch(search(searchString, page, path));
                    } else {
                        dispatch(get(page, path));
                    }
                }
            ],
            error: [
                response => {
                    let errors = getErrorsFromResponse(response);
                    dispatch({
                        type: ADD_MONEY_FAILED,
                        payload: errors
                    })
                }
            ]
        });
    });
}

export {getUsers, searchUser, putMoney}