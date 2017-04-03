/**
 * Created by Alexander Melashchenko on 4/1/17.
 */

import {create, get, getOne, search, update, remove} from './CrudUtil'

const path = '/api/owner';

function createOwner(horse) {
    return create(horse, path);
}

function getOwners(page) {
    return get(page, path)
}

function getOneOwner(id) {
    return getOne(id, path)
}

function searchOwner(req, page) {
    return search(req, page, path)
}

function updateOwner(horse) {
    return update(horse, path)
}

function deleteOwner(id) {
    return remove(id, path)
}

export {createOwner, getOwners, getOneOwner, searchOwner, updateOwner, deleteOwner}