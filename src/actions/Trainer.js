/**
 * Created by Alexander Melashchenko on 4/1/17.
 */

import {create, get, search, update, remove} from './CrudUtil'
import {
    CREATE_TRAINER_REQUEST,
    CREATE_TRAINER_SUCCESS,
    CREATE_TRAINER_FAILED,
    GET_TRAINERS_REQUEST,
    GET_TRAINERS_SUCCESS,
    GET_TRAINERS_FAILED,
    SEARCH_TRAINERS_REQUEST,
    SEARCH_TRAINERS_SUCCESS,
    SEARCH_TRAINERS_FAILED,
    UPDATE_TRAINER_REQUEST,
    UPDATE_TRAINER_SUCCESS,
    UPDATE_TRAINER_FAILED,
    DELETE_TRAINER_REQUEST,
    DELETE_TRAINER_SUCCESS,
    DELETE_TRAINER_FAILED
} from '../constants/Trainer'

let createTrainer = trainer => {
    return create({
        entity: trainer,
        path: '/api/trainer',
        requestType: CREATE_TRAINER_REQUEST,
        failType: CREATE_TRAINER_FAILED,
        successType: CREATE_TRAINER_SUCCESS
    })
};

let getTrainers = page => {
    return get({
        page: page,
        path: '/api/trainer',
        requestType: GET_TRAINERS_REQUEST,
        failType: GET_TRAINERS_FAILED,
        successType: GET_TRAINERS_SUCCESS
    })
};

let searchTrainer = (req, page) => {
    return search({
        req: req,
        page: page,
        path: '/api/trainer',
        requestType: SEARCH_TRAINERS_REQUEST,
        failType: SEARCH_TRAINERS_FAILED,
        successType: SEARCH_TRAINERS_SUCCESS
    })
};

let updateTrainer = trainer => {
    return update({
        entity: trainer,
        path: '/api/trainer',
        requestType: UPDATE_TRAINER_REQUEST,
        failType: UPDATE_TRAINER_FAILED,
        successType: UPDATE_TRAINER_SUCCESS
    })
};

let deleteTrainer = id => {
    return remove({
        id: id,
        path: '/api/trainer',
        requestType: DELETE_TRAINER_REQUEST,
        failType: DELETE_TRAINER_FAILED,
        successType: DELETE_TRAINER_SUCCESS
    })
};

export {createTrainer, getTrainers, searchTrainer, updateTrainer, deleteTrainer}