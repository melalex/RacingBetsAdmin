/**
 * Created by Alexander Melashchenko on 4/1/17.
 */

import {create, get, getOne, search, update, remove} from './CrudUtil'
import {RACECOURSE_TYPE} from '../constants/Crud'

const path = '/api/racecourse';

function createRacecourse(racecourse) {
    return create(racecourse, path);
}

function getRacecourses(page) {
    return get(RACECOURSE_TYPE, page, path)
}

function getOneRacecourse(id) {
    return getOne(RACECOURSE_TYPE, id, path)
}

function searchRacecourse(req, page) {
    return search(RACECOURSE_TYPE, req, page, path)
}

function updateRacecourse(racecourse) {
    return update(racecourse, path)
}

function deleteRacecourse(id) {
    return remove(id, path)
}

export {createRacecourse, getRacecourses, getOneRacecourse, searchRacecourse, updateRacecourse, deleteRacecourse}