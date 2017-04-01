/**
 * Created by Alexander Melashchenko on 4/1/17.
 */

import {create, get, search, update, remove} from './CrudUtil'
import {
    CREATE_HORSE_REQUEST,
    CREATE_HORSE_SUCCESS,
    CREATE_HORSE_FAILED,
    GET_HORSES_REQUEST,
    GET_HORSES_SUCCESS,
    GET_HORSES_FAILED,
    SEARCH_HORSES_REQUEST,
    SEARCH_HORSES_SUCCESS,
    SEARCH_HORSES_FAILED,
    UPDATE_HORSE_REQUEST,
    UPDATE_HORSE_SUCCESS,
    UPDATE_HORSE_FAILED,
    DELETE_HORSE_REQUEST,
    DELETE_HORSE_SUCCESS,
    DELETE_HORSE_FAILED
} from '../constants/Horse'

let createHorse = horse => {
    return create({
        entity: horse,
        path: '/api/horse',
        requestType: CREATE_HORSE_REQUEST,
        failType: CREATE_HORSE_FAILED,
        successType: CREATE_HORSE_SUCCESS
    })
};

let getHorses = page => {
    return get({
        page: page,
        path: '/api/horse',
        requestType: GET_HORSES_REQUEST,
        failType: GET_HORSES_FAILED,
        successType: GET_HORSES_SUCCESS
    })
};

let searchHorse = (req, page) => {
    return search({
        req: req,
        page: page,
        path: '/api/horse',
        requestType: SEARCH_HORSES_REQUEST,
        failType: SEARCH_HORSES_FAILED,
        successType: SEARCH_HORSES_SUCCESS
    })
};

let updateHorse = horse => {
    return update({
        entity: horse,
        path: '/api/horse',
        requestType: UPDATE_HORSE_REQUEST,
        failType: UPDATE_HORSE_FAILED,
        successType: UPDATE_HORSE_SUCCESS
    })
};

let deleteHorse = id => {
    return remove({
        id: id,
        path: '/api/horse',
        requestType: DELETE_HORSE_REQUEST,
        failType: DELETE_HORSE_FAILED,
        successType: DELETE_HORSE_SUCCESS
    })
};

export {createHorse, getHorses, searchHorse, updateHorse, deleteHorse}