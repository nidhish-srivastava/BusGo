import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useBusContext } from "../context/context";

function SelectSeat() {
  const navigate = useNavigate()
  
  const seatArray = [
    "1a",
    "1b",
    "1c",
    "2a",
    "2b",
    "2c",
    "3a",
    "3b",
    "3c",
    "4a",
    "4b",
    "4c",
    "5a",
    "5b",
    "5c",
    "6a",
    "6b",
    "6c",
  ];
  const {cardArray,setCardArray,price,from,to,date} = useBusContext()
  const seatSelectHandle = (input, index) => {
        const obj = {
            seatNo: input,
            id: index + 1,
            selected: false,
            name : name
        };
        setCardArray((e) => [...e, obj]);
  };

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


  return (
    <React.Fragment>
    <div className="main-route-container">
      <div className="seat-container-grid">
        {seatArray.map((e, i) => (
          <div className="seat" onClick={() => seatSelectHandle(e, i)}>
            <NavLink>
            {e}
            </NavLink>
          </div>
        ))}
      </div>
      <div className="selected-seat-info">
        <h2>Price : {price}</h2>
        <h2>{from} to {to}</h2>
        <h2>{date}</h2>
        {cardArray.map((e, index) => {
          // if(cardArray[i].completed==false){
            return (
              <div key={index}>
                {e.seatNo}
                <input type="text" placeholder="Enter Name" />
                <button onClick={() => deleteHandler(e.id)}>Delete</button>
              </div>
            );
        // }
        })}
      <button onClick={confirmHandler}>Confirm Details</button>
      </div>
    </div>
    </React.Fragment>

  );
}

export default SelectSeat;
