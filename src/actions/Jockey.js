/**
 * Created by Alexander Melashchenko on 4/1/17.
 */

import {create, get, getOne, search, update, remove} from './CrudUtil'
import {JOCKEY_TYPE} from '../constants/Crud'

const path = '/api/jockey';

function createJockey(jockey) {
    return create(jockey, path);
}

function getJockeys(page) {
    return get(JOCKEY_TYPE, page, path)
}

function getOneJockey(id) {
    return getOne(JOCKEY_TYPE, id, path)
}

function searchJockey(req, page) {
    return search(JOCKEY_TYPE, req, page, path)
}

function updateJockey(jockey) {
    return update(jockey, path)
}

function deleteJockey(id) {
    return remove(id, path)
}

export {createJockey, getJockeys, getOneJockey, searchJockey, updateJockey, deleteJockey}