import React from "react";
import SeatContainerGrid from "./SeatContainerGrid";
import SelectedSeatInfo from "./SelectedSeatInfo";

function SelectSeat() {

  
  return (
    <div className="main-route-container">
      <SeatContainerGrid/>
      <SelectedSeatInfo/>
    </div>

  );
}

export default SelectSeat;
