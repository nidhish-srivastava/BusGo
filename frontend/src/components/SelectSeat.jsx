import React, { useEffect, useState } from "react";

function SelectSeat() {
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
  const [cardArray, setCardArray] = useState([]);
  const [toggle,setToggle]=  useState(false)

  const seatSelectHandle = (input, index) => {
    const obj = {
      seatNo: input,
      id: index + 1,
      selected: false,
    };
    setCardArray((e) => [...e, obj]); // We just need to increase the count of the array(without caring about whats inside)
  };

  const deleteHandler = (id) => {
    setCardArray(
      cardArray.map((e) => {
        if (e.id === id) return { ...e, selected: !e.selected };
        return e;
      })
    );
  };

  return (
    <div className="main-route-container">
      <div className="seat-container-grid">
        {seatArray.map((e, i) => (
          <div className="seat" onClick={() => seatSelectHandle(e, i)}>
            {e}
          </div>
        ))}
      </div>
      <div className="selected-seat-info">
        {cardArray.map((e, i) => {
          if (cardArray[i].selected == false) {
            return (
              <div>
                {e.seatNo}
                <input type="text" placeholder="Enter Name" />
                <button onClick={() => deleteHandler(e.id)}>Delete</button>
              </div>
            );
          }
        })}
      <button>Confirm Details</button>
      </div>
    </div>
  );
}

export default SelectSeat;
