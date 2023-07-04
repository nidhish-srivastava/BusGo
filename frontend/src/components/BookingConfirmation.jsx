import React from 'react'
import { useBusContext } from '../context/context'

function BookingConfirmation({filteredArray}) {
  const {cardArray} = useBusContext()
  const {from,to,date,price} = useBusContext()
  return (
    <div className='booking-confirmation'>
      <h2>Amount to Pay  : {price}</h2>
      <h2>{from} to {to} </h2>
      <h2>{date}</h2>
      {cardArray.map((e,i)=>(
        <div>
          Seat No : {e.seatNo}
          Name : {e.name}
        </div>
      ))}
    </div>
  )
}

export default BookingConfirmation