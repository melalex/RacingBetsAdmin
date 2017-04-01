let createRacecourse = racecourse => {
    return {
        type: "CREATE_RACECOURSE",
        racecourse
    }
};

let updateRacecourse = racecourse => {
    return {
        type: "UPDATE_RACECOURSE",
        racecourse
    }
};

let deleteRacecourse = racecourse => {
    return {
        type: "DELETE_RACECOURSE",
        racecourse
    }
};

export {createRacecourse, updateRacecourse, deleteRacecourse}