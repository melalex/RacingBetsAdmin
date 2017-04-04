/**
 * Created by Alexander Melashchenko on 4/1/17.
 */

import {create, get, getOne, search, update, remove} from './CrudUtil'

const path = '/api/jockey';

function createJockey(jockey) {
    return create(jockey, path);
}

function getJockeys(page) {
    return get(page, path)
}

function getOneJockey(id) {
    return getOne(id, path)
}

function searchJockey(req, page) {
    return search(req, page, path)
}

function updateJockey(jockey) {
    return update(jockey, path)
}

function deleteJockey(id) {
    return remove(id, path)
}

export {createJockey, getJockeys, getOneJockey, searchJockey, updateJockey, deleteJockey}