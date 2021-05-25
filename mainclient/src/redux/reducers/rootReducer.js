import {combineReducers} from 'redux'
import restikReducer from './restikReducer'

const rootReducer = combineReducers({
  restiks: restikReducer,
})

export default rootReducer
