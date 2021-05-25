import { ADD_REST, ALL_REST, DELETE_REST, REDACT_RESTIK} from "../types/types"

export const thunkAddMessage = ({input, id}) => async (dispatch, getState) => {
  // if(input.length > 5){
    const response = await fetch("http://localhost:3000/addmessage", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({input, id}),
    })
        const serverResponse = await response.json()
        dispatch(addMessage(serverResponse))
  // }
}

export const addMessage = (newMessage) => {
  return {
    type: REDACT_RESTIK, 
    payload: newMessage,
  }
}

export const allRest = () => async (dispatch, getState) => {
  const response = await fetch("http://localhost:3000/allrest")
      const serverResponse = await response.json()
      dispatch(getAllRestThunk(serverResponse))
}

export const getAllRestThunk = (allRest) =>  {


  return {
    type: ALL_REST, 
    payload: allRest,
  }
}

  export const addRest =  (addRest) => async (dispatch, getState) =>  {

    const response = await fetch("http://localhost:3000/createrest", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(addRest),
        })
        const serverResponseRest = await response.json()
        dispatch(addNewRest(serverResponseRest))
  }

  export const addNewRest = (addRest) =>  {
    return {
      type: ADD_REST,
      payload: addRest,
    }
  }

  export const thunkRedactRestik = ({inputs, id}) => async (dispatch, getState) => {
    const response = await fetch("http://localhost:3000/redactrestik", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({inputs, id}),
    })
    const serverResponse = await response.json()
      dispatch(redactRestik(serverResponse))
  }

  export const redactRestik = (reRestik) => {
    return {
      type: REDACT_RESTIK,
      payload: reRestik,
    }
  }



  export const thunkDeleteRest = (id) => async (dispatch, getState)=> {
    const response = await fetch(`http://localhost:3000/${id}/deleterest`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      }
    })
    if (response.status === 200) {
      dispatch(deleteRest(id))
    }
  }

export const deleteRest = (id) => {
  return {
    type: DELETE_REST,
    payload: id,
  }
}



