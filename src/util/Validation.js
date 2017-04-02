/**
 * Created by Alexander Melashchenko on 4/2/17.
 */

function notEmpty(value) {
    return !!value && value.trim() !== '';
}

function validateLength(value, min, max) {
    return value.length >= min && value.length <= max;
}

export {notEmpty, validateLength}