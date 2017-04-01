/**
 * Created by Alexander Melashchenko on 4/1/17.
 */

import {create, get, search, update, remove} from './CrudUtil'
import {
    CREATE_RACECOURSE_REQUEST,
    CREATE_RACECOURSE_SUCCESS,
    CREATE_RACECOURSE_FAILED,
    GET_RACECOURSES_REQUEST,
    GET_RACECOURSES_SUCCESS,
    GET_RACECOURSES_FAILED,
    SEARCH_RACECOURSES_REQUEST,
    SEARCH_RACECOURSES_SUCCESS,
    SEARCH_RACECOURSES_FAILED,
    UPDATE_RACECOURSE_REQUEST,
    UPDATE_RACECOURSE_SUCCESS,
    UPDATE_RACECOURSE_FAILED,
    DELETE_RACECOURSE_REQUEST,
    DELETE_RACECOURSE_SUCCESS,
    DELETE_RACECOURSE_FAILED
} from '../constants/Racecourse'

let createRacecourse = racecourse => {
    return create({
        entity: racecourse,
        path: '/api/racecourse',
        requestType: CREATE_RACECOURSE_REQUEST,
        failType: CREATE_RACECOURSE_FAILED,
        successType: CREATE_RACECOURSE_SUCCESS
    })
};

let getRacecourses = page => {
    return get({
        page: page,
        path: '/api/racecourse',
        requestType: GET_RACECOURSES_REQUEST,
        failType: GET_RACECOURSES_FAILED,
        successType: GET_RACECOURSES_SUCCESS
    })
};

let searchRacecourse = (req, page) => {
    return search({
        req: req,
        page: page,
        path: '/api/racecourse',
        requestType: SEARCH_RACECOURSES_REQUEST,
        failType: SEARCH_RACECOURSES_FAILED,
        successType: SEARCH_RACECOURSES_SUCCESS
    })
};

let updateRacecourse = racecourse => {
    return update({
        entity: racecourse,
        path: '/api/racecourse',
        requestType: UPDATE_RACECOURSE_REQUEST,
        failType: UPDATE_RACECOURSE_FAILED,
        successType: UPDATE_RACECOURSE_SUCCESS
    })
};

let deleteRacecourse = id => {
    return remove({
        id: id,
        path: '/api/racecourse',
        requestType: DELETE_RACECOURSE_REQUEST,
        failType: DELETE_RACECOURSE_FAILED,
        successType: DELETE_RACECOURSE_SUCCESS
    })
};

export {createRacecourse, getRacecourses, searchRacecourse, updateRacecourse, deleteRacecourse}