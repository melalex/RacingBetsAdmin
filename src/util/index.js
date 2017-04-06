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

function nowSeconds() {
    return new Date().getSeconds();
}

function isExpired(appUser) {
    return appUser.expiresIn !== 0 && (appUser.expiresIn + 60) > nowSeconds();
}

export {fullName, basicAuthHeader, bearerAuthHeader, nowSeconds, isExpired}