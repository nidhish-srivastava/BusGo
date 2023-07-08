import React, { useEffect } from 'react'
import { useBusContext } from '../context/context'

function BookingConfirmation({filteredArray}) {
  const {cardArray} = useBusContext()
  const {from,to,date,price} = useBusContext()
  useEffect(()=>{
    console.log(cardArray);
  },[])
  return (
    <div className='booking-confirmation'>
      <h2>Amount to Pay  : &#8377;{price}</h2>
      <h2>From {from} to {to} </h2>
      <h2>Date of Travelling : {date}</h2>
      {cardArray.map((e,i)=>(
        <div>
          Seat No : {e.seatNo} {" "} Name : {e.name}
        </div>
      ))}
    </div>
  )
}

export default BookingConfirmation