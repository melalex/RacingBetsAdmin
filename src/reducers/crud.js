/**
 * Created by Alexander Melashchenko on 4/3/17.
 */

import * as actionConst from '../constants/Crud'

const initialState = {
    content: [],
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
        case actionConst.CREATE_REQUEST:
        case actionConst.UPDATE_REQUEST:
        case actionConst.DELETE_REQUEST:
            return {...state, errors: [], info: ''};

        case actionConst.GET_ONE_REQUEST:
        case actionConst.GET_REQUEST:
        case actionConst.SEARCH_REQUEST:
            return {...state, fetching: true, errors: [], info: ''};

        case actionConst.GET_ONE_SUCCESS:
            return {...state, fetching: false, entity: action.payload};

        case actionConst.GET_SUCCESS:
        case actionConst.SEARCH_SUCCESS:
            return {
                ...state,
                fetching: false,
                content: action.payload.content,
                count: action.payload.count,
                limit: action.payload.limit,
                page: action.payload.page,
                searchString: action.payload.searchString,
            };

        case actionConst.CREATE_SUCCESS:
        case actionConst.UPDATE_SUCCESS:
        case actionConst.DELETE_SUCCESS:
            return {...state, info: action.payload};

        case actionConst.CREATE_FAILED:
        case actionConst.GET_ONE_FAILED:
        case actionConst.GET_FAILED:
        case actionConst.SEARCH_FAILED:
        case actionConst.UPDATE_FAILED:
        case actionConst.DELETE_FAILED:
            return {...state, fetching: false, errors: action.payload.content};

        default:
            return state;
    }
};