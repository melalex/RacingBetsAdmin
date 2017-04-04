/**
 * Created by Alexander Melashchenko on 4/1/17.
 */

import {create, get, getOne, search, update, remove} from './CrudUtil'

const path = '/api/trainer';

function createTrainer(trainer) {
    return create(trainer, path);
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

function updateTrainer(trainer) {
    return update(trainer, path)
}

function deleteTrainer(id) {
    return remove(id, path)
}

export {createTrainer, getTrainers, getOneTrainer, searchTrainer, updateTrainer, deleteTrainer}