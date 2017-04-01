/**
 * Created by Alexander Melashchenko on 4/1/17.
 */

let createHorse = horse => {
  return {
      type: "CREATE_HORSE",
      horse
  }
};

let updateHorse = horse => {
  return {
      type: "UPDATE_HORSE",
      horse
  }
};

let deleteHorse = horse => {
  return {
      type: "DELETE_HORSE",
      horse
  }
};

export {createHorse, updateHorse, deleteHorse}