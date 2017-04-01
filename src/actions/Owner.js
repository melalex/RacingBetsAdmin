/**
 * Created by Alexander Melashchenko on 4/1/17.
 */

import {create, get, search, update, remove} from './CrudUtil'
import {
    CREATE_OWNER_REQUEST,
    CREATE_OWNER_SUCCESS,
    CREATE_OWNER_FAILED,
    GET_OWNERS_REQUEST,
    GET_OWNERS_SUCCESS,
    GET_OWNERS_FAILED,
    SEARCH_OWNERS_REQUEST,
    SEARCH_OWNERS_SUCCESS,
    SEARCH_OWNERS_FAILED,
    UPDATE_OWNER_REQUEST,
    UPDATE_OWNER_SUCCESS,
    UPDATE_OWNER_FAILED,
    DELETE_OWNER_REQUEST,
    DELETE_OWNER_SUCCESS,
    DELETE_OWNER_FAILED
} from '../constants/Owner'

let createOwner = owner => {
    return create({
        entity: owner,
        path: '/api/owner',
        requestType: CREATE_OWNER_REQUEST,
        failType: CREATE_OWNER_FAILED,
        successType: CREATE_OWNER_SUCCESS
    })
};

let getOwners = page => {
    return get({
        page: page,
        path: '/api/owner',
        requestType: GET_OWNERS_REQUEST,
        failType: GET_OWNERS_FAILED,
        successType: GET_OWNERS_SUCCESS
    })
};

let searchOwner = (req, page) => {
    return search({
        req: req,
        page: page,
        path: '/api/owner',
        requestType: SEARCH_OWNERS_REQUEST,
        failType: SEARCH_OWNERS_FAILED,
        successType: SEARCH_OWNERS_SUCCESS
    })
};

let updateOwner = owner => {
    return update({
        entity: owner,
        path: '/api/owner',
        requestType: UPDATE_OWNER_REQUEST,
        failType: UPDATE_OWNER_FAILED,
        successType: UPDATE_OWNER_SUCCESS
    })
};

let deleteOwner = id => {
    return remove({
        id: id,
        path: '/api/owner',
        requestType: DELETE_OWNER_REQUEST,
        failType: DELETE_OWNER_FAILED,
        successType: DELETE_OWNER_SUCCESS
    })
};

export {createOwner, getOwners, searchOwner, updateOwner, deleteOwner}