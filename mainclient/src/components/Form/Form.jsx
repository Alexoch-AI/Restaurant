import { useState } from "react"
import { useDispatch } from "react-redux"
import { addRest } from '../../redux/action/action'
import { useHistory } from 'react-router-dom'

function Form() {

  const [inputs, setInputs] = useState({
    title: '',
    text: '',
    img: ''
  })
  let history = useHistory()

  const dispatch = useDispatch()

  const inputsHandler = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value
    })
  }

  const submitHandler = async () => {
    dispatch(addRest(inputs))
    history.push('/')
  }

  return (
    <div className="d-flex align-items-center justify-content-center" style={{ paddingTop: '20px' }} >
      <div style={{ width: '500px' }}>
        <label>Название вашего ресторана</label>
        <input type='text' name='title' onChange={inputsHandler} value={inputs.title} className='form-control' placeholder='title'></input>
        <hr />
        <label>Описание вашего ресторана</label>
        <input type='text' name='text' onChange={inputsHandler} value={inputs.text} className='form-control' placeholder='text'></input>
        <hr />
        <label>Картинка вашего ресторана</label>
        <input type='text' name='img' onChange={inputsHandler} value={inputs.img} className='form-control' placeholder='img'></input>
        <br />
        <button onClick={submitHandler} type="button" className="btn btn-primary mx-1">Добавить рестик</button>
      </div>
    </div>
  )
}

export default Form
