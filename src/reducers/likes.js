import {NEW_LIKE} from "../actions/types";

function likesReducer (state = 10, action){
  switch (action.type) {
    case NEW_LIKE:
      return state + 1
    default:
      return state;
  }
}

export default likesReducer