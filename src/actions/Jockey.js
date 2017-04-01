/**
 * Created by Alexander Melashchenko on 4/1/17.
 */

import {create, get, search, update, remove} from './CrudUtil'
import {
    CREATE_JOCKEY_REQUEST,
    CREATE_JOCKEY_SUCCESS,
    CREATE_JOCKEY_FAILED,
    GET_JOCKEYS_REQUEST,
    GET_JOCKEYS_SUCCESS,
    GET_JOCKEYS_FAILED,
    SEARCH_JOCKEYS_REQUEST,
    SEARCH_JOCKEYS_SUCCESS,
    SEARCH_JOCKEYS_FAILED,
    UPDATE_JOCKEY_REQUEST,
    UPDATE_JOCKEY_SUCCESS,
    UPDATE_JOCKEY_FAILED,
    DELETE_JOCKEY_REQUEST,
    DELETE_JOCKEY_SUCCESS,
    DELETE_JOCKEY_FAILED
} from '../constants/Jockey'

let createJockey = jockey => {
    return create({
        entity: jockey,
        path: '/api/jockey',
        requestType: CREATE_JOCKEY_REQUEST,
        failType: CREATE_JOCKEY_FAILED,
        successType: CREATE_JOCKEY_SUCCESS
    })
};

let getJockeys = page => {
    return get({
        page: page,
        path: '/api/jockey',
        requestType: GET_JOCKEYS_REQUEST,
        failType: GET_JOCKEYS_FAILED,
        successType: GET_JOCKEYS_SUCCESS
    })
};

let searchJockey = (req, page) => {
    return search({
        req: req,
        page: page,
        path: '/api/jockey',
        requestType: SEARCH_JOCKEYS_REQUEST,
        failType: SEARCH_JOCKEYS_FAILED,
        successType: SEARCH_JOCKEYS_SUCCESS
    })
};

let updateJockey = jockey => {
    return update({
        entity: jockey,
        path: '/api/jockey',
        requestType: UPDATE_JOCKEY_REQUEST,
        failType: UPDATE_JOCKEY_FAILED,
        successType: UPDATE_JOCKEY_SUCCESS
    })
};

let deleteJockey = id => {
    return remove({
        id: id,
        path: '/api/jockey',
        requestType: DELETE_JOCKEY_REQUEST,
        failType: DELETE_JOCKEY_FAILED,
        successType: DELETE_JOCKEY_SUCCESS
    })
};

export {createJockey, getJockeys, searchJockey, updateJockey, deleteJockey}