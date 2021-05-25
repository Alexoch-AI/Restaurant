const Message = ({ indx, text }) => {
  return (
    <>
      <li className="d-flex justify-content-start">
        <div className="">
          <p className="m-0">{indx+1}.&nbsp;{text} </p>
        </div>
      </li >
      <hr className='m-1' />
    </>
  )
}

export default Message
