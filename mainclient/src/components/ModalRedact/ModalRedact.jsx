import { useState } from "react";
import { Button, Modal } from 'react-bootstrap'
import { useDispatch } from "react-redux";
import { thunkRedactRestik } from "../../redux/action/action";

function ModalRedact({ title, text, img, id }) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [inputs, setInputs] = useState({
    title: title,
    text: text,
    img: img,
  })

  const dispatch = useDispatch()

  const inputsHandler = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value
    })
  }

  const submitHandler = async () => {
    dispatch(thunkRedactRestik({ inputs, id }))
    setShow(!show)
  }

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Редактировать
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Redaction</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="align-items-center justify-content-center text-center" >
            <div>
              <label>Название вашего ресторана</label>
              <input type='text' name='title' onChange={inputsHandler} value={inputs.title} className='form-control' placeholder='title'></input>
            </div>
            <hr />
            <div>
              <label>Описание вашего ресторана</label>
              <input type='text' name='text' onChange={inputsHandler} value={inputs.text} className='form-control' placeholder='text'></input>
            </div>
            <hr />
            <div>
              <label>Картинка ресторана</label>
              <input type='text' name='img' onChange={inputsHandler} value={inputs.img} className='form-control' placeholder='img'></input>
            </div>
            <hr />
            <button onClick={submitHandler} type="button" className="btn btn-primary mx-1">Редактирование</button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default ModalRedact
