/**
 * Created by Alexander Melashchenko on 4/3/17.
 */

import * as crudConst from '../constants/Crud'
import * as userConst from '../constants/User'
import * as raceConst from '../constants/Race'

const initialState = {
    content: [],
    type: '',
    errors: [],
    page: 1,
    count: 0,
    limit: 20,
    searchString: '',
    info: '',
    fetching: false,
    entity: {}
};

export default function crud(state = initialState, action) {

    switch (action.type) {
        case crudConst.UPDATE_REQUEST:
            return {...state, entity: action.payload, fetching: true, errors: [], info: ''};

        case raceConst.RACE_UPDATE_REQUEST:
        case userConst.ADD_MONEY_REQUEST:
        case crudConst.CREATE_REQUEST:
        case crudConst.DELETE_REQUEST:
            return {...state, fetching: true, errors: [], info: ''};

        case crudConst.GET_ONE_REQUEST:
        case crudConst.GET_REQUEST:
        case crudConst.SEARCH_REQUEST:
            return {...state, type: action.payload, fetching: true, errors: [], info: ''};

        case crudConst.GET_ONE_SUCCESS:
            return {...state, fetching: false, entity: action.payload};

        case crudConst.GET_SUCCESS:
        case crudConst.SEARCH_SUCCESS:
            return {
                ...state,
                fetching: false,
                content: action.payload.content,
                count: action.payload.count,
                limit: action.payload.limit,
                page: action.payload.page,
                searchString: action.payload.searchString,
            };

        case userConst.ADD_MONEY_SUCCESS:
        case crudConst.CREATE_SUCCESS:
        case crudConst.UPDATE_SUCCESS:
        case crudConst.DELETE_SUCCESS:
            return {...state, fetching: false, info: action.payload};

        case raceConst.RACE_UPDATE_SUCCESS:
            return {...state, fetching: false, info: action.payload.response, entity: action.payload.entity};

        case raceConst.RACE_UPDATE_FAILED:
        case userConst.ADD_MONEY_FAILED:
        case crudConst.CREATE_FAILED:
        case crudConst.GET_ONE_FAILED:
        case crudConst.GET_FAILED:
        case crudConst.SEARCH_FAILED:
        case crudConst.UPDATE_FAILED:
        case crudConst.DELETE_FAILED:
            return {...state, fetching: false, errors: action.payload};

        default:
            return state;
    }
};