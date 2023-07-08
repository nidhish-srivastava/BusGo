import React from "react";
import { useBusContext } from "../../context/context";
import { Link } from "react-router-dom";

function SeatContainerGrid() {
  const { setCardArray } = useBusContext();
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
  const seatSelectHandle = (input, index) => {
    const obj = {
      seatNo: input,
      id: index + 1,
      selected: false,
      name: "",
    };
    setCardArray((e) => [...e, obj]);
  };
  return (
    <div className="seat-container-grid">
      {seatArray.map((e, i) => (
        <div className="seat" onClick={() => seatSelectHandle(e, i)}>
          <Link>{e}</Link>
        </div>
      ))}
    </div>
  );
}

export default SeatContainerGrid;
