import { useBusContext } from '../context/context'

function BookingConfirmation() {
  const final = useBusContext()

  return (
    <div className='booking-confirmation'>
      <h2>Amount to Pay  : &#8377;{final?.price}</h2>
      <h2>From {final?.from} to {final?.to} </h2>
      <h2>Date of Travelling : {final?.date}</h2>
      {final?.cardArray?.map(e=>(
        <div>
          Seat No : {e.seatNo} {" "} Name : {e.name}
        </div>
      ))}
    </div>
  )
}

export default BookingConfirmation