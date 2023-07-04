import React,{useState} from 'react'


function From({from,setFrom}) {
  const [fromArray, setFromArray] = useState([
    "Bangalore",
    "Nagpur",
    "Mumbai",
    "Goa",
  ]);
  const [show, setShow] = useState(false);
  const clickHandler = (input) => {
    setFrom(input);
    setShow(false);
  };

  return (
    <div>
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
    </div>
  )
}

export default From