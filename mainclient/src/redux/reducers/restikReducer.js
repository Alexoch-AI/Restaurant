import { ADD_REST, ALL_REST, DELETE_REST, REDACT_RESTIK } from "../types/types"

const restikReducer = (state = [], action) => {
  switch (action.type) {

    case ALL_REST:
      return action.payload
    

    case ADD_REST:
      return [
        ...state,
        action.payload
    ]

    case DELETE_REST:
      return state.filter(el => el._id !== action.payload)
   
    case REDACT_RESTIK:
        return state.map(el=> {
          if(el._id === action.payload._id){
            return {
              ...state,
              ...action.payload
            }
          }
          return el
        })

    default:
      return state
  }
}

export default restikReducer
