import React, {  useState } from "react";
import From from "./components/From";
import To from "./components/To";
import Result from "./components/Result";

function App() {

  const [filteredArray, setFilteredArray] = useState([]);
  const [from, setFrom] = useState("From");
  const [to, setTo] = useState("To");


  const busesInfoArray = [
    {
      brand: "Sharma Travels",
      price: 1000,
      from: ["Bangalore"],
      to: ["Mumbai", "Goa"],
    },
    {
      brand: "Volvo",
      price: 3000,
      from: ["Bangalore", "Mumbai"],
      to: ["Goa", "Nagpur"],
    },
  ];

  const [date, setDate] = useState("");



 
  const filteredHandler = () => {
    const filteredArray = busesInfoArray.filter((e) => {
      // console.log(e.from.includes(from));
      let fromCheck = e.from.includes(from);
      let toCheck = e.to.includes(to);
      if (fromCheck && toCheck) {
        return []; // we just need to return an array,doesnt matter what,coz the if condition does the filtering for us
      }
    });
    console.log(filteredArray);
    setFilteredArray(filteredArray);
  };

  return (
    <main>
      <h1>Book Bus Tickets</h1>
      <From from={from} setFrom = {setFrom} />
      <To to = {to} setTo = {setTo} />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <button onClick={filteredHandler}>Submit</button>
      <Result filteredArray = {filteredArray} from={from} to={to} date={date} />
    </main>
  );
}

export default App;
