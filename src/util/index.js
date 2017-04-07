/**
 * Created by Alexander Melashchenko on 4/2/17.
 */

import dateformat from 'dateformat'

function fullName(person) {
    return person.firstName + ' ' + person.lastName;
}

function basicAuthHeader(login, password) {
    return 'Basic ' + window.btoa(login + ':' + password);
}

function bearerAuthHeader(getState) {
    return 'Bearer ' + getState().appUser.accessToken;
}

function nowSeconds() {
    return new Date().getTime();
}

function isExpired(appUser) {
    return appUser.expiresIn !== 0 && (appUser.expiresIn + 60) < nowSeconds();
}

function dateFromTimestamp(timestamp) {
    return dateformat(new Date(timestamp), "mmmm dS, yyyy");
}

function dateFromTimestampForm(timestamp) {
    return dateformat(new Date(timestamp ? timestamp : 0), "mm/dd/yyyy");
}

function getErrorsFromResponse(response) {
    if (response.responseText) {
        return JSON.parse(response.responseText).result;
    } else {
        return [{message: response.statusText}]
    }
}

export {
    fullName,
    basicAuthHeader,
    bearerAuthHeader,
    nowSeconds,
    isExpired,
    dateFromTimestamp,
    dateFromTimestampForm,
    getErrorsFromResponse
}