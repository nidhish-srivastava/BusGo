import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div className='nav'>
        <Link to='/'>Home</Link>
        <Link to='/select-seat'>Select Seat</Link>
        <Link to='/booking-confirmation' >Confirm</Link>
    </div>
  )
}

export default Nav