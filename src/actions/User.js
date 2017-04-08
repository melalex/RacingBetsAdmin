/**
 * Created by Alexander Melashchenko on 4/1/17.
 */

import {ajax} from "jquery"
import {get, search} from './CrudUtil'
import {refresh} from '../actions/AppUser'
import {API_ROOT} from  '../constants/Api'
import {UPDATE_REQUEST, UPDATE_SUCCESS, UPDATE_FAILED} from '../constants/Crud'
import {bearerAuthHeader, getErrorsFromResponse} from "../util";

const path = '/api/account';

function getUsers(page) {
    return get(page, path)
}

function searchUser(req, page) {
    return search(req, page, path)
}

function putMoney(id, amount) {
    return refresh((dispatch, getStore) => {
        dispatch({
            type: UPDATE_REQUEST,
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
                        type: UPDATE_SUCCESS,
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
                        type: UPDATE_FAILED,
                        payload: errors
                    })
                }
            ]
        });
    });
}

export {getUsers, searchUser, putMoney}