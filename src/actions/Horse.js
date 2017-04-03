/**
 * Created by Alexander Melashchenko on 4/1/17.
 */

import {create, get, search, update, remove} from './CrudUtil'

const path = '/api/horse';

let createHorse = horse => {
    return create({
        entity: horse,
        path: path,
    })
};

let getHorses = page => {
    return get({
        page: page,
        path: path,
    })
};

let getOneHorse = id => {
    return getOneHorse({
        page: id,
        path: path,
    })
};

let searchHorse = (req, page) => {
    return search({
        req: req,
        page: page,
        path: path,
    })
};

let updateHorse = horse => {
    return update({
        entity: horse,
        path: path,
    })
};

let deleteHorse = id => {
    return remove({
        id: id,
        path: path,
    })
};

export {createHorse, getHorses, getOneHorse, searchHorse, updateHorse, deleteHorse}