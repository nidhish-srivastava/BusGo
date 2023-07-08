import React from "react";
import SeatContainerGrid from "./SelectSeat/SeatContainerGrid";
import SelectedSeatInfo from "./SelectSeat/SelectedSeatInfo";

function SelectSeat() {

  
  return (
    <div className="main-route-container">
      <SeatContainerGrid/>
      <SelectedSeatInfo/>
    </div>

  );
}

export default SelectSeat;
