/**
 * Created by Alexander Melashchenko on 4/1/17.
 */

import {create, get, search, update, remove} from './CrudUtil'
import * as actions from '../constants/Horse'

const path = '/api/horse';

let createHorse = horse => {
    return create({
        entity: horse,
        path: path,
        requestType: actions.CREATE_HORSE_REQUEST,
        failType: actions.CREATE_HORSE_FAILED,
        successType: actions.CREATE_HORSE_SUCCESS
    })
};

let getHorses = page => {
    return get({
        page: page,
        path: path,
        requestType: actions.GET_HORSES_REQUEST,
        failType: actions.GET_HORSES_FAILED,
        successType: actions.GET_HORSES_SUCCESS
    })
};

let getOneHorse = id => {
    return getOneHorse({
        page: id,
        path: path,
        requestType: actions.GET_ONE_HORSE_REQUEST,
        failType: actions.GET_HORSES_FAILED,
        successType: actions.GET_HORSES_SUCCESS
    })
};

let searchHorse = (req, page) => {
    return search({
        req: req,
        page: page,
        path: path,
        requestType: actions.SEARCH_HORSES_REQUEST,
        failType: actions.SEARCH_HORSES_FAILED,
        successType: actions.SEARCH_HORSES_SUCCESS
    })
};

let updateHorse = horse => {
    return update({
        entity: horse,
        path: path,
        requestType: actions.UPDATE_HORSE_REQUEST,
        failType: actions.UPDATE_HORSE_FAILED,
        successType: actions.UPDATE_HORSE_SUCCESS
    })
};

let deleteHorse = id => {
    return remove({
        id: id,
        path: path,
        requestType: actions.DELETE_HORSE_REQUEST,
        failType: actions.DELETE_HORSE_FAILED,
        successType: actions.DELETE_HORSE_SUCCESS
    })
};

export {createHorse, getHorses, getOneHorse, searchHorse, updateHorse, deleteHorse}