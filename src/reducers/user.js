import {} from '../actions/types'
import { CHANGE_USER_NAME } from '../actions/types'
import { CHANGE_USER_AGE } from '../actions/types'

const initialState = {
  name: 'Stanislav',
  age: 30
}

function userReducer (state = initialState, action) {
  switch (action.type) {
    case CHANGE_USER_NAME:
      return {...state, name: action.payload}
    case CHANGE_USER_AGE:
      return {...state, age: action.payload}
    default:
      return state
  }
}

export default userReducer