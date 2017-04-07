/**
 * Created by Alexander Melashchenko on 4/1/17.
 */

import {ajax} from "jquery"
import {refresh} from '../actions/AppUser'
import {bearerAuthHeader, getErrorsFromResponse} from '../util'
import * as crudAction from '../constants/Crud'
import {API_ROOT} from  '../constants/Api'

function create(entity, path) {
    return refresh((dispatch, getStore) => {
        dispatch({
            type: crudAction.CREATE_REQUEST,
            payload: entity
        });

        ajax({
            type: 'POST',
            url: API_ROOT + path,
            dataType: 'json',
            data: JSON.stringify(entity),
            headers: {'Authorization': bearerAuthHeader(getStore)},
            success: [
                response => dispatch({
                    type: crudAction.CREATE_SUCCESS,
                    payload: response.result[0]
                })
            ],
            error: [
                response => dispatch({
                    type: crudAction.CREATE_FAILED,
                    payload: response.result
                })
            ]
        });
    });
}

function get(page, path) {
    return refresh(dispatch => {
        dispatch({
            type: crudAction.GET_REQUEST,
            payload: page
        });

        ajax({
            type: 'GET',
            url: API_ROOT + path,
            dataType: 'json',
            data: {page: page},
            success: [
                response => {
                    console.log(response);
                    dispatch({
                        type: crudAction.GET_SUCCESS,
                        payload: {
                            count: response.count,
                            limit: response.limit,
                            page: page,
                            searchString: '',
                            content: response.result
                        }
                    })
                }
            ],
            error: [
                response => {
                    let errors = JSON.parse(response.responseText).result;
                    dispatch({
                        type: crudAction.GET_FAILED,
                        payload: errors
                    })
                }
            ]
        });
    });
}

function getOne(id, path) {
    return dispatch => {
        dispatch({
            type: crudAction.GET_ONE_REQUEST,
            payload: id
        });

        ajax({
            type: 'GET',
            url: API_ROOT + path + '/' + id,
            dataType: 'json',
            success: [
                response => dispatch({
                    type: crudAction.GET_ONE_SUCCESS,
                    payload: response.result[0]
                })
            ],
            error: [
                response => dispatch({
                    type: crudAction.GET_ONE_FAILED,
                    payload: response.result
                })
            ]
        });
    }
}

function search(req, page, path) {
    return dispatch => {
        dispatch({
            type: crudAction.SEARCH_REQUEST,
            payload: {
                query: req,
                page: page
            }
        });

        ajax({
            type: 'GET',
            url: API_ROOT + path,
            dataType: 'json',
            data: {
                query: req,
                page: page
            },
            success: [
                response => dispatch({
                    type: crudAction.SEARCH_SUCCESS,
                    payload: {
                        count: response.count,
                        limit: response.limit,
                        page: page,
                        searchString: req,
                        content: response.result
                    }
                })
            ],
            error: [
                response => dispatch({
                    type: crudAction.SEARCH_FAILED,
                    payload: response.result
                })
            ]
        });
    }
}

function update(entity, path) {
    return refresh((dispatch, getStore) => {
        dispatch({
            type: crudAction.UPDATE_REQUEST,
            payload: entity
        });

        ajax({
            type: 'PUT',
            url: API_ROOT + path,
            dataType: 'json',
            data: JSON.stringify(entity),
            headers: {'Authorization': bearerAuthHeader(getStore)},
            success: [
                response => dispatch({
                    type: crudAction.UPDATE_SUCCESS,
                    payload: response.result[0]
                })
            ],
            error: [
                response => {
                    console.log(response);
                    let errors = getErrorsFromResponse(response);
                    console.log(errors);
                    dispatch({
                        type: crudAction.UPDATE_FAILED,
                        payload: errors
                    })
                }
            ]
        });
    });
}

function remove(id, path) {
    return refresh((dispatch, getStore) => {
        dispatch({
            type: crudAction.DELETE_REQUEST,
            payload: id
        });

        ajax({
            type: 'DELETE',
            url: API_ROOT + path + '/' + id,
            dataType: 'json',
            headers: {'Authorization': bearerAuthHeader(getStore)},
            success: [
                response => dispatch({
                    type: crudAction.DELETE_SUCCESS,
                    payload: response.result[0]
                })
            ],
            error: [
                response => dispatch({
                    type: crudAction.DELETE_FAILED,
                    payload: response.result
                })
            ]
        });
    })
}

export {create, get, getOne, search, update, remove}