import { useState } from "react";
import { useBusContext } from "../../context/context";

function To() {
  const final = useBusContext();
  const [toArray, _] = useState([
    "Bangalore",
    "Nagpur",
    "Mumbai",
    "Goa",
  ]);
  const [show2, setShow2] = useState(false);

  const clickHandler2 = (input: string) => {
    final?.setTo(input);
    setShow2(false);
  };

  console.log("To render");
  

  return (
    <div className="to">
      <button onClick={() => setShow2((e) => !e)}>{final?.to}</button>
      <div
        className="to-dropdown"
      >
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
