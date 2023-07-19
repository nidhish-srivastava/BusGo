import  { useState } from "react";
import { useBusContext } from "../../context/context";

function From() {
  const final = useBusContext()
  const [fromArray, _] = useState([
    "Bangalore",
    "Nagpur",
    "Mumbai",
    "Goa",
  ]);
  const [show, setShow] = useState(false);


  const handleClick = (e : string)=>{
    final?.setFrom(e)
    setShow(false)
  }

  console.log("From");
  

  return (
      <div className="from">
        <button onClick={() => setShow((e) => !e)}>{final?.from}</button>
        <div  className="from-dropdown" >
          {show &&
            fromArray.map((e, i) => {
              return (
                <li
                  key={i}
                  style={{ listStyle: "none" }}
                  onClick={()=>handleClick(e)}
                >
                  {e}
                </li>
              );
            })}
        </div>
      </div>
  );
}

export default From;
