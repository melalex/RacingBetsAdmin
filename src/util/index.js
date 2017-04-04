/**
 * Created by Alexander Melashchenko on 4/2/17.
 */

function fullName(person) {
    return person.firstName + ' ' + person.lastName;
}

function basicAuthHeader(login, password) {
    return 'Basic ' + window.btoa(login + ':' + password);
}

function bearerAuthHeader(getState) {
    return 'Bearer ' + getState().appUser.accessToken;
}

export {fullName, basicAuthHeader, bearerAuthHeader}