import FormMessage from "../FormMessage/FormMessage";

import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { thunkDeleteRest } from '../../redux/action/action'
import ModalRedact from '../ModalRedact/ModalRedact'
import './Restoran.css'



const Restoran = ({ message, title, text, img, id }) => {
  const [flagMessage, setFlagMessage] = useState(false)
  const dispatch = useDispatch()

  const deleteResFetch = async (id) => {
    dispatch(thunkDeleteRest(id))
  }

  return (
    <li className="">
      <div className="page">
        <div className="row">
          <div className="col-sm">
            <div className="card card-cascade card-ecommerce wider shadow mb-5 ">
              <div className="view view-cascade overlay text-center"> <img className="card-img-top" src={`${img}`} alt="" />
                <div className="mask rgba-white-slight"></div>
              </div>
              <div className="card-body card-body-cascade text-center">
                <h4 className="card-title"><strong>{title}</strong></h4>
                <p className="card-text">{text} </p>
                <div className="card-footer ">
                  <ModalRedact title={title} id={id} text={text} img={img} />
                  <button onClick={() => deleteResFetch(id)} className='btn btn-danger m-2 '>Удаление</button>
                  <button onClick={() => setFlagMessage(!flagMessage)} className='btn btn-success m-1'>Обсуждение</button>
                  {
                    flagMessage ? <FormMessage message={message} key={id} id={id} />
                      : ''
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li >

  )
}

export default Restoran
