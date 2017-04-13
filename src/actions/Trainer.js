/**
 * Created by Alexander Melashchenko on 4/1/17.
 */

import {create, get, getOne, search, update, remove} from './CrudUtil'
import {TRAINER_TYPE} from '../constants/Crud'

const path = '/api/trainer';

function createTrainer(trainer) {
    return create(trainer, path);
}

function getTrainers(page) {
    return get(TRAINER_TYPE, page, path)
}

function getOneTrainer(id) {
    return getOne(TRAINER_TYPE, id, path)
}

function searchTrainer(req, page) {
    return search(TRAINER_TYPE, req, page, path)
}

function updateTrainer(trainer) {
    return update(trainer, path)
}

function deleteTrainer(id) {
    return remove(id, path)
}

export {createTrainer, getTrainers, getOneTrainer, searchTrainer, updateTrainer, deleteTrainer}