let createJockey = jockey => {
    return {
        type: "CREATE_JOCKEY",
        jockey
    }
};

let updateJockey = jockey => {
    return {
        type: "UPDATE_JOCKEY",
        jockey
    }
};

let deleteJockey = jockey => {
    return {
        type: "DELETE_JOCKEY",
        jockey
    }
};

export {createJockey, updateJockey, deleteJockey}