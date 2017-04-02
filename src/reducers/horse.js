/**
 * Created by Alexander Melashchenko on 4/1/17.
 */

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

const initialState = {
    content: [],
    errors: [],
    info: '',
    fetching: false
};

export default function horse(state = initialState, action) {

    switch (action.type) {
        case CREATE_HORSE_REQUEST:
            return { ...state, year: action.payload, fetching: true, error: '' };

        case CREATE_HORSE_SUCCESS:
            return { ...state, photos: action.payload, fetching: false, error: '' };

        case CREATE_HORSE_FAILED:
            return { ...state, error: action.payload.message, fetching: false };

        default:
            return state;
    }

};