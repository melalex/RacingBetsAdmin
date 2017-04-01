let createTrainer = trainer => {
    return {
        type: "CREATE_TRAINER",
        trainer
    }
};

let updateTrainer = trainer => {
    return {
        type: "UPDATE_TRAINER",
        trainer
    }
};

let deleteTrainer = trainer => {
    return {
        type: "DELETE_TRAINER",
        trainer
    }
};

export {createTrainer, updateTrainer, deleteTrainer}