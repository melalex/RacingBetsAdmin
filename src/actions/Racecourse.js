/**
 * Created by Alexander Melashchenko on 4/1/17.
 */

import {create, get, getOne, search, update, remove} from './CrudUtil'

const path = '/api/racecourse';

function createRacecourse(horse) {
    return create(horse, path);
}

function getRacecourses(page) {
    return get(page, path)
}

function getOneRacecourse(id) {
    return getOne(id, path)
}

function searchRacecourse(req, page) {
    return search(req, page, path)
}

function updateRacecourse(horse) {
    return update(horse, path)
}

function deleteRacecourse(id) {
    return remove(id, path)
}

export {createRacecourse, getRacecourses, getOneRacecourse, searchRacecourse, updateRacecourse, deleteRacecourse}