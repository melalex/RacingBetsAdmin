/**
 * Created by Alexander Melashchenko on 4/1/17.
 */

import {ajax} from "jquery";
import API_DOMAIN from '../constants/Api'
import * as crudAction from '../constants/Crud'

function action(parameters, method) {
    let {entity, path, requestType, failType, successType} = parameters;
    return dispatch => {
        dispatch({
            type: requestType,
            payload: entity
        });

        ajax({
            type: method,
            url: API_DOMAIN + path,
            dataType: 'json',
            data: entity,
            success: [
                response => dispatch({
                    type: failType,
                    payload: response.result
                })
            ],
            error: [
                response => dispatch({
                    type: successType,
                    payload: response.result[0]
                })
            ]
        });
    }
}

function actionWithoutPayload(parameters, method) {
    let {id, path, requestType, failType, successType} = parameters;
    return dispatch => {
        dispatch({
            type: requestType,
            payload: id
        });

        ajax({
            type: method,
            url: API_DOMAIN + path + '/' + id,
            dataType: 'json',
            success: [
                response => dispatch({
                    type: failType,
                    payload: response.result
                })
            ],
            error: [
                response => dispatch({
                    type: successType,
                    payload: response.result[0]
                })
            ]
        });
    }
}

function create(parameters) {
    return action({
        ...parameters,
        requestType: crudAction.CREATE_REQUEST,
        failType: crudAction.CREATE_FAILED,
        successType: crudAction.CREATE_SUCCESS
    }, 'POST')
}

function get(parameters) {
    let {page, path} = parameters;

    return action({
        entity: {page: page},
        path: path,
        requestType: crudAction.GET_ONE_REQUEST,
        failType: crudAction.GET_FAILED,
        successType: crudAction.GET_SUCCESS
    }, 'GET')
}

function getOne(parameters) {
    return actionWithoutPayload({
        ...parameters,
        requestType: crudAction.GET_ONE_REQUEST,
        failType: crudAction.GET_ONE_FAILED,
        successType: crudAction.GET_ONE_SUCCESS
    }, 'GET')
}

function search(parameters) {
    let {req, page, path} = parameters;
    return action({
        entity: {
            page: page,
            req: req
        },
        path: path,
        requestType: crudAction.SEARCH_REQUEST,
        failType: crudAction.SEARCH_FAILED,
        successType: crudAction.SEARCH_SUCCESS
    }, 'GET')
}

function update(parameters) {
    return action({
        ...parameters,
        requestType: crudAction.UPDATE_REQUEST,
        failType: crudAction.UPDATE_FAILED,
        successType: crudAction.UPDATE_SUCCESS
    }, 'PUT')
}

function remove(parameters) {
    return actionWithoutPayload({
        ...parameters,
        requestType: crudAction.DELETE_REQUEST,
        failType: crudAction.DELETE_FAILED,
        successType: crudAction.DELETE_SUCCESS
    }, 'DELETE')
}

export {create, get, getOne, search, update, remove}