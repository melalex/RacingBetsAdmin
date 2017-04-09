/**
 * Created by Alexander Melashchenko on 4/1/17.
 */

import {ajax} from "jquery"
import {RACE_UPDATE_REQUEST, RACE_UPDATE_SUCCESS, RACE_UPDATE_FAILED} from '../constants/Race'
import {create, get, getOne, search, update, remove} from './CrudUtil'
import {bearerAuthHeader, getErrorsFromResponse} from "../util/index";
import {API_ROOT} from "../constants/Api";
import {refresh} from "./AppUser";

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

function changeRaceStatus(race, newStatus, path) {
    return refresh((dispatch, getStore) => {
        dispatch({
            type: RACE_UPDATE_REQUEST,
            payload: race
        });

        ajax({
            type: 'PUT',
            url: API_ROOT + path,
            crossDomain: true,
            dataType: 'json',
            data: JSON.stringify(race),
            headers: bearerAuthHeader(getStore),
            success: [
                response => dispatch({
                    type: RACE_UPDATE_SUCCESS,
                    payload: {
                        response: response.result[0],
                        entity: {...race, raceStatus: newStatus}
                    }
                })
            ],
            error: [
                response => {
                    console.log(response);
                    let errors = getErrorsFromResponse(response);
                    dispatch({
                        type: RACE_UPDATE_FAILED,
                        payload: errors
                    })
                }
            ]
        });
    });
}

function startRace(race) {
    return changeRaceStatus(race, 'riding', path + '/start/' + race.id)


}

function rejectRace(race) {
    return changeRaceStatus(race, 'rejected', path + '/reject/' + race.id)
}


function finishRace(race) {
    return changeRaceStatus(race, 'finished', path + '/finish/' + race.id)
}

export {createRace, getRaces, getOneRace, searchRace, updateRace, deleteRace, startRace, rejectRace, finishRace}