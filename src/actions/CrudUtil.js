/**
 * Created by Alexander Melashchenko on 4/1/17.
 */

import {ajax} from "jquery";
import API_DOMAIN from '../constants/Api'

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
                    payload: response.result
                })
            ]
        });
    }
}

function create(parameters) {
    return action(parameters, 'POST')
}

function get(parameters) {
    let {page, path, requestType, failType, successType} = parameters;

    return action({
        entity: {page: page},
        path: path,
        requestType: requestType,
        failType: failType,
        successType: successType
    }, 'GET')
}

function search(parameters) {
    let {req, page, action, requestType, failType, successType} = parameters;
    return action({
        entity: {
            page: page,
            req: req
        },
        path: path,
        requestType: requestType,
        failType: failType,
        successType: successType
    }, 'GET')
}

function update(parameters) {
    return action(parameters, 'PUT')
}

function remove(parameters) {
    let {id, path, requestType, failType, successType} = parameters;
    return dispatch => {
        dispatch({
            type: requestType,
            payload: id
        });

        ajax({
            type: 'DELETE',
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
                    payload: response.result
                })
            ]
        });
    }
}

export {create, get, search, update, remove}