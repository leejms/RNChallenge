/**
 * Reducer root
 * 
 * import and combine all of the app reducers
 */
import { combineReducers } from 'redux'
import followers from './followers'

const followerApp = combineReducers({
  followers
})

export default followerApp