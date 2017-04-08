/**
 * Created by Alexander Melashchenko on 4/1/17.
 */

import {create, get, getOne, search, update, remove} from './CrudUtil'

const path = '/api/race';

function createRace(race) {
    return create(race, path);
}

function getRaces(page) {
    return get(page, path)
}

function getOneRace(id) {
    return getOne(id, path)
}

function searchRace(req, page) {
    return search(req, page, path)
}

function updateRace(race) {
    return update(race, path)
}

function deleteRace(id) {
    return remove(id, path)
}

export {createRace, getRaces, getOneRace, searchRace, updateRace, deleteRace}