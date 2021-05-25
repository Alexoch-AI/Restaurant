import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { allRest } from "../../redux/action/action"
import Restoran from "../Restoran/Restoran"


const ListrRestoran = () => {

  const restiks = useSelector(state => state.restiks)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(allRest())
  }, [dispatch]);

  return (
    <ul>
      {
        restiks.length ? restiks.map((el, indx) => <Restoran message={el.messages} title={el.title} key={el._id} id={el._id} indx={indx} text={el.text} img={el.img} />) : <p>Nothing Rest</p>
      }
    </ul>
  )
}

export default ListrRestoran
