/**
 * Created by Alexander Melashchenko on 4/1/17.
 */

import {create, get, getOne, search, update, remove} from './CrudUtil'

const path = '/api/horse';

function createHorse(horse) {
    return create(horse, path);
}

function getHorses(page) {
    return get(page, path)
}

function getOneHorse(id) {
    return getOne(id, path)
}

function searchHorse(req, page) {
    return search(req, page, path)
}

function updateHorse(horse) {
    return update(horse, path)
}

function deleteHorse(id) {
    return remove(id, path)
}

export {createHorse, getHorses, getOneHorse, searchHorse, updateHorse, deleteHorse}