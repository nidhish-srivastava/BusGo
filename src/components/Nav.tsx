import { Link, useNavigate} from 'react-router-dom'
import {useState} from 'react'

function Nav() {
  const [show,setShow] = useState(false)
  const navigate = useNavigate()
  console.log("Nav render");
  
  return (
    <div className='nav'>
      <h2 className='logo'>
          BusGo
      </h2>
      <div onClick={()=>{
        setShow(true)
        navigate('/book')
      }}>Book</div>
      {show && (
        <>
        <Link to='/select-seat'>Select Seat</Link>
        <Link to='/booking-confirmation' >Confirm</Link>
        </>
      )}
    </div>
  )
}

export default Nav