/**
 * Created by Alexander Melashchenko on 4/1/17.
 */

import {create, get, getOne, search, update, remove} from './CrudUtil'

const path = '/api/trainer';

function createTrainer(horse) {
    return create(horse, path);
}

function getTrainers(page) {
    return get(page, path)
}

function getOneTrainer(id) {
    return getOne(id, path)
}

function searchTrainer(req, page) {
    return search(req, page, path)
}

function updateTrainer(horse) {
    return update(horse, path)
}

function deleteTrainer(id) {
    return remove(id, path)
}

export {createTrainer, getTrainers, getOneTrainer, searchTrainer, updateTrainer, deleteTrainer}