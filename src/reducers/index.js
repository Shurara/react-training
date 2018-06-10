import { combineReducers } from 'redux'
import user from './user'
import likes from './likes'

const rootReducer = combineReducers({
  user,
  likes
})

export default rootReducer
