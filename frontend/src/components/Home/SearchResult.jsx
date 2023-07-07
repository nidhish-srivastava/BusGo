import React from "react";
import { useNavigate } from "react-router-dom";
import { useBusContext } from "../../context/context";

function SearchResult({ filteredArray }) {
  const { from, to, date, setBrand, setPrice } = useBusContext();
  const navigate = useNavigate();

  const selectBusHandler = (price, brand) => {
    setPrice(price);
    setBrand(brand);
    navigate("/select-seat");
  };

  return (
    <div className="result-container">
      {filteredArray.length == 0 && <p>No buses found!!!</p>}
      {filteredArray.map((e, i) => {
        // The catch here is,we need to create an array where the filtered objects are inserted
        return (
          <div className="result-card">
            {/* <div className="one"> */}
            <h2>From - {from}</h2>
            <h2>To - {to}</h2>
            <h2>Brand - {e.brand}</h2>
            {/* </div> */}
            {/* <div className="two"> */}
            <h2>Price - {e.price}</h2>
            <h2>Date - {date}</h2>
            <button onClick={() => selectBusHandler(e.price, e.brand)}>
              Select Bus
            </button>
            {/* </div> */}
          </div>
        );
      })}
    </div>
  );
}

export default SearchResult;
