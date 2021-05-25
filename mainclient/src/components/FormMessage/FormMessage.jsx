import { useState } from "react"
import { useDispatch } from "react-redux"
import { thunkAddMessage } from "../../redux/action/action"

import Message from "../Message/Message"

function FormMessage({ message, id }) {
  const [input, setInput] = useState('')

  const dispatch = useDispatch()

  const inputHandler = (e) => {
    setInput(e.target.value)
  }

  const submitHandler = async () => {
    if (input.length > 0) {
      dispatch(thunkAddMessage({ input, id }))
    }
    setInput('')
  }
  return (
    <>
      <div className="d-flex align-items-center justify-content-center m-2" >
        <input type='text' name='text' onChange={inputHandler} value={input} className='form-control' placeholder='text'></input>
        <button onClick={submitHandler} type="button" className="btn btn-primary mx-1">Обсуждение</button>
      </div>
      <ul className="d-flex justify-content-evenly flex-column">
        {
          message.length ? message.map((el, indx) => {
            return <Message key={indx} indx={indx} text={el} />
          }).reverse()
            : ''
        }
      </ul>
    </>
  )
}

export default FormMessage
