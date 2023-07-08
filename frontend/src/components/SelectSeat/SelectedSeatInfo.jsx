import React from 'react'
import { useNavigate } from "react-router-dom";
import { useBusContext } from '../../context/context';

function SelectedSeatInfo() {
  const {cardArray,setCardArray,price,from,to,date} = useBusContext()
  const navigate = useNavigate()

    const deleteHandler = (id) => {
        /*
        //* 1st way --> kind off cool :)
        setCardArray(
          cardArray.map((e) => {
            if (e.id === id) return { ...e, selected: !e.selected };
            return e;
          })
          );
          */
        //* 2nd way
        const filter = cardArray.filter((e)=>e.id!=id)
        setCardArray(filter)
      }
    
      const nameChangeHandler = (input,id) =>{
         let copy = [...cardArray]
         copy = copy.map((x)=>{
          if(x.id===id) x.name = input.target.value
          return x
         })
         setCardArray(copy)
      }
    
    
  return (
      <div className="selected-seat-info">
        <h2>Price : {price}</h2>
        <h2>{from} to {to}</h2>
        <h2>{date}</h2>
        {cardArray.map((e, index) => {
            return (
              <div key={index} className='info-card' >
                <h3>
                  {e.seatNo}
                  </h3>
                <input type="text" placeholder="Enter Name" value={e.name} onChange={input=>nameChangeHandler(input,e.id)} />
                <button onClick={() => deleteHandler(e.id)}>Delete</button>
              </div>
            );
        })}
      <button onClick={()=>navigate('/booking-confirmation')}>Confirm Details</button>
      </div>
  )
}

export default SelectedSeatInfo