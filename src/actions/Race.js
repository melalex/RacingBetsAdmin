/**
 * Created by Alexander Melashchenko on 4/1/17.
 */

let createRace = race => {
    return {
        type: "CREATE_RACE",
        race
    }
};

let updateRace = race => {
    return {
        type: "UPDATE_RACE",
        race
    }
};

let deleteRace = race => {
    return {
        type: "DELETE_RACE",
        race
    }
};

export {createRace, updateRace, deleteRace}