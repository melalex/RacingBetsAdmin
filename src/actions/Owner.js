/**
 * Created by Alexander Melashchenko on 4/1/17.
 */

import {create, get, getOne, search, update, remove} from './CrudUtil'
import {OWNER_TYPE} from '../constants/Crud'

const path = '/api/owner';

function createOwner(owner) {
    return create(owner, path);
}

function getOwners(page) {
    return get(OWNER_TYPE, page, path)
}

function getOneOwner(id) {
    return getOne(OWNER_TYPE, id, path)
}

function searchOwner(req, page) {
    return search(OWNER_TYPE, req, page, path)
}

function updateOwner(owner) {
    return update(owner, path)
}

function deleteOwner(id) {
    return remove(id, path)
}

export {createOwner, getOwners, getOneOwner, searchOwner, updateOwner, deleteOwner}