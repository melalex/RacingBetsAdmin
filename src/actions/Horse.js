/**
 * Created by Alexander Melashchenko on 4/1/17.
 */

import {ajax} from "jquery";
import API_DOMAIN from '../constants/Api'

import {
    CREATE_HORSE_REQUEST,
    CREATE_HORSE_SUCCESS,
    CREATE_HORSE_FAILED,
    GET_HORSES_REQUEST,
    GET_HORSES_SUCCESS,
    GET_HORSES_FAILED,
    SEARCH_HORSES_REQUEST,
    SEARCH_HORSES_SUCCESS,
    SEARCH_HORSES_FAILED,
    UPDATE_HORSE_REQUEST,
    UPDATE_HORSE_SUCCESS,
    UPDATE_HORSE_FAILED,
    DELETE_HORSE_REQUEST,
    DELETE_HORSE_SUCCESS,
    DELETE_HORSE_FAILED
} from '../constants/Horse'

let createHorse = horse => {
    return dispatch => {
        dispatch({
            type: CREATE_HORSE_REQUEST,
            payload: horse
        });

        ajax({
            type: 'POST',
            url: API_DOMAIN + '/api/horse',
            dataType: 'json',
            data: horse,
            success: response => {
                if (response.status === 'error') {
                    dispatch({
                        type: CREATE_HORSE_FAILED,
                        payload: response.result
                    })
                } else {
                    dispatch({
                        type: CREATE_HORSE_SUCCESS,
                        payload: response.result
                    })
                }
            }
        });
    }
};

let getHorses = page => {
    return dispatch => {
        dispatch({
            type: GET_HORSES_REQUEST,
            payload: page
        });

        ajax({
            type: 'GET',
            url: API_DOMAIN + '/api/horse',
            dataType: 'json',
            data: {
                page: page
            },
            success: response => {
                if (response.status === 'error') {
                    dispatch({
                        type: GET_HORSES_FAILED,
                        payload: response.result
                    })
                } else {
                    dispatch({
                        type: GET_HORSES_SUCCESS,
                        payload: response.result
                    })
                }
            }
        });
    }
};

let searchHorse = (req, page) => {
    return dispatch => {
        dispatch({
            type: SEARCH_HORSES_REQUEST,
            payload: {
                req: req,
                page: page
            }
        });

        ajax({
            type: 'GET',
            url: API_DOMAIN + '/api/horse',
            dataType: 'json',
            data: {
                req: req,
                page: page
            },
            success: response => {
                if (response.status === 'error') {
                    dispatch({
                        type: SEARCH_HORSES_FAILED,
                        payload: response.result
                    })
                } else {
                    dispatch({
                        type: SEARCH_HORSES_SUCCESS,
                        payload: response.result
                    })
                }
            }
        });
    }
};

let updateHorse = horse => {
    return dispatch => {
        dispatch({
            type: UPDATE_HORSE_REQUEST,
            payload: horse
        });

        ajax({
            type: 'PUT',
            url: API_DOMAIN + '/api/horse',
            dataType: 'json',
            data: horse,
            success: response => {
                if (response.status === 'error') {
                    dispatch({
                        type: UPDATE_HORSE_FAILED,
                        payload: response.result
                    })
                } else {
                    dispatch({
                        type: UPDATE_HORSE_SUCCESS,
                        payload: response.result
                    })
                }
            }
        });
    }
};

let deleteHorse = horse => {
    return dispatch => {
        dispatch({
            type: DELETE_HORSE_REQUEST,
            payload: horse
        });

        ajax({
            type: 'DELETE',
            url: API_DOMAIN + '/api/horse',
            dataType: 'json',
            data: horse,
            success: response => {
                if (response.status === 'error') {
                    dispatch({
                        type: DELETE_HORSE_FAILED,
                        payload: response.result
                    })
                } else {
                    dispatch({
                        type: DELETE_HORSE_SUCCESS,
                        payload: response.result
                    })
                }
            }
        });
    }
};

export {createHorse, getHorses, searchHorse, updateHorse, deleteHorse}