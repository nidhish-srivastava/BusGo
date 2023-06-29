import React, { useEffect, useState } from "react";

function App() {

  const [fromArray,setFromArray] = useState(["Bangalore", "Nagpur", "Mumbai", "Goa"])
  const [toArray,setToArray] = useState(["Bangalore", "Nagpur", "Mumbai", "Goa"])
  const [filteredArray,setFilteredArray] = useState([])

  const busesInfoArray = [{
    brand : "Sharma Travels",price : 1000,from : ["Bangalore"],to : ["Mumbai","Goa"]
  },{
    brand : "Volvo",price : 3000,from : ["Bangalore","Mumbai"],to : ["Goa","Nagpur"]
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


  // function searching(){
  //   for(let i=0;i<busesInfoArray.length-1;i++){
  //     let info = busesInfoArray[i]
  //     // if(info.from.includes(from)) console.log();
  //     console.log(info.from.includes(from));
  //     // console.log(info.from.includes(to));
  //   }
  // }
  const filteredHandler = () =>{
    const filteredArray = busesInfoArray.filter((e)=>{
      // console.log(e.from.includes(from));
      let fromCheck  = e.from.includes(from)
      let toCheck = e.to.includes(to);
      if(fromCheck && toCheck) {
        return []   // we just need to return an array,doesnt matter what,coz the if condition does the filtering for us
      }
    })
    console.log(filteredArray);
    setFilteredArray(filteredArray);
  }






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
              key={i}
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
          <input type="date" value={date}  onChange={e=>setDate(e.target.value)} />
          <button onClick={filteredHandler}>Submit</button>
    <div className="result-container">
          {filteredArray.map((e,i)=>{ // The catch here is,we need to create an array where the filtered objects are inserted
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
