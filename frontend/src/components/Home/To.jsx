import React, { useState } from "react";

function To({ to, setTo }) {
  const [toArray, setToArray] = useState([
    "Bangalore",
    "Nagpur",
    "Mumbai",
    "Goa",
  ]);
  const [show2, setShow2] = useState(false);

  const clickHandler2 = (input) => {
    setTo(input);
    setShow2(false);
  };
  return (
      <div className="to">
        <button onClick={() => setShow2((e) => !e)}>{to}</button>
        <div value={to} className="to-dropdown" onChange={(e) => setTo(e.target.value)}>
          {show2 &&
            toArray.map((e, i) => {
              return (
                <li
                  key={i}
                  style={{ listStyle: "none" }}
                  onClick={() => clickHandler2(e)}
                >
                  {e}
                </li>
              );
            })}
        </div>
      </div>
  );
}

export default To;
