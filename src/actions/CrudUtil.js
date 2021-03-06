/**
 * Created by Alexander Melashchenko on 4/1/17.
 */

import {ajax} from "jquery"
import {bearerAuthHeader, getErrorsFromResponse} from '../util'
import * as crudAction from '../constants/Crud'
import {refresh} from '../actions/AppUser'
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
            crossDomain: true,
            dataType: 'json',
            data: JSON.stringify(entity),
            headers: bearerAuthHeader(getStore),
            success: [
                response => dispatch({
                    type: crudAction.CREATE_SUCCESS,
                    payload: response.result[0]
                })
            ],
            error: [
                response => {
                    let errors = getErrorsFromResponse(response);
                    dispatch({
                        type: crudAction.CREATE_FAILED,
                        payload: errors
                    })
                }
            ]
        });
    });
}

function get(type, page, path) {
    return refresh((dispatch, getStore) => {
        dispatch({
            type: crudAction.GET_REQUEST,
            payload: type
        });

        ajax({
            type: 'GET',
            url: API_ROOT + path,
            crossDomain: true,
            dataType: 'json',
            headers: bearerAuthHeader(getStore),
            data: {page: page},
            success: [
                response => {
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
                    let errors = getErrorsFromResponse(response);
                    dispatch({
                        type: crudAction.GET_FAILED,
                        payload: errors
                    })
                }
            ]
        });
    });
}

function getOne(type, id, path) {
    return refresh((dispatch, getStore) => {
        dispatch({
            type: crudAction.GET_ONE_REQUEST,
            payload: type
        });

        ajax({
            type: 'GET',
            url: API_ROOT + path + '/' + id,
            crossDomain: true,
            dataType: 'json',
            headers: bearerAuthHeader(getStore),
            success: [
                response => dispatch({
                    type: crudAction.GET_ONE_SUCCESS,
                    payload: response.result[0]
                })
            ],
            error: [
                response => {
                    let errors = getErrorsFromResponse(response);
                    dispatch({
                        type: crudAction.GET_ONE_FAILED,
                        payload: errors
                    })
                }
            ]
        });
    })
}

function search(type, req, page, path) {
    return refresh((dispatch, getStore) => {
        dispatch({
            type: crudAction.SEARCH_REQUEST,
            payload: type
        });

        ajax({
            type: 'GET',
            url: API_ROOT + path,
            crossDomain: true,
            dataType: 'json',
            headers: bearerAuthHeader(getStore),
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
                response => {
                    let errors = getErrorsFromResponse(response);
                    dispatch({
                        type: crudAction.SEARCH_FAILED,
                        payload: errors
                    })
                }
            ]
        });
    })
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
            crossDomain: true,
            dataType: 'json',
            data: JSON.stringify(entity),
            headers: bearerAuthHeader(getStore),
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

        let {searchString, page, type} = getStore().crud;

        ajax({
            type: 'DELETE',
            url: API_ROOT + path + '/' + id,
            crossDomain: true,
            dataType: 'json',
            headers: bearerAuthHeader(getStore),
            success: [
                response => {
                    dispatch({
                        type: crudAction.DELETE_SUCCESS,
                        payload: response.result[0]
                    });

                    if (searchString) {
                        dispatch(search(type, searchString, page, path));
                    } else {
                        dispatch(get(type, page, path));
                    }
                }
            ],
            error: [
                response => {
                    let errors = getErrorsFromResponse(response);
                    dispatch({
                        type: crudAction.DELETE_FAILED,
                        payload: errors
                    })
                }
            ]
        });
    })
}

export {create, get, getOne, search, update, remove}