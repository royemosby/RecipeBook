import { combineReducers } from 'redux'
import { recipes } from './recipes'
import { user } from './user'
import { ui } from './ui'

export default combineReducers({
  recipes,
  user,
  ui,
})
