import React, { useEffect, useState } from "react";

function App() {

  const [fromArray,setFromArray] = useState(["Bangalore", "Nagpur", "Mumbai", "Goa"])
  const [toArray,setToArray] = useState(["Bangalore", "Nagpur", "Mumbai", "Goa"])

  const resultArray = [{
    brand : "Sharma Travels",price : 1000
  },{
    brand : "Volvo",price : 3000
  },{

  }]

  const [from, setFrom] = useState("From");
  const [to, setTo] = useState("To");
  const [show, setShow] = useState(false);
  const [show2,setShow2] = useState(false);
  const [date,setDate] = useState("")

  const clickHandler = (input) => {
    setFrom(input);
    setShow(false);
  };
  const clickHandler2 = (input) => {
    setTo(input);
    setShow2(false);
  };
  useEffect(() => {

  },[]);
  return (
    <main>
      <h1>Book Bus Tickets</h1>
      <div className="from">
      <button onClick={() => setShow((e) => !e)}>{from}</button>
      <div value={from} onChange={(e) => setFrom(e.target.value)}>
        {show &&
          fromArray.map((e, i) => {
            return (
                <li
                  style={{ listStyle: "none" }}
                  onClick={() => clickHandler(e)}
                  >
                  {e}
                </li>
            );
          })}
      </div>
          </div>

<div className="to">
      <button onClick={() => setShow2((e) => !e)}>{to}</button>
      <div value={to} onChange={(e) => setTo(e.target.value)}>
        {show2 &&
          toArray.map((e, i) => {
            return (
              <li
                style={{ listStyle: "none" }}
                onClick={() => clickHandler2(e)}
                >
                {e}
              </li>
            );
          })}
      </div>
          </div>
          <input type="date" value={date}  onChange={e=>setDate(e.target.value)} />
          <button>Submit</button>
    <div className="result-container">
          {resultArray.map((e,i)=>{
            return(
              <div className="result-card">
                 <h2>{e.brand}</h2>
                 <h2>{e.price}</h2>
              </div>
            )
          })}
    </div>
    </main>
  );
}

export default App;
