/**
 * Created by Alexander Melashchenko on 4/1/17.
 */

let createOwner = owner => {
    return {
        type: "CREATE_OWNER",
        owner
    }
};

let updateOwner = owner => {
    return {
        type: "UPDATE_OWNER",
        owner
    }
};

let deleteOwner = owner => {
    return {
        type: "DELETE_OWNER",
        owner
    }
};

export {createOwner, updateOwner, deleteOwner}