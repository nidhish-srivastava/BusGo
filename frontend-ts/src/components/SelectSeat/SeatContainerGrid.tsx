import { useBusContext } from "../../context/context";
import { Link } from "react-router-dom";

function SeatContainerGrid() {
  const final = useBusContext()
  const seatArray = [
    "1a",
    "1b",
    "1c",
    "2a",
    "2b",
    "2c",
    "3a",
    "3b",
    "3c",
    "4a",
    "4b",
    "4c",
    "5a",
    "5b",
    "5c",
    "6a",
    "6b",
    "6c",
  ];

  const seatSelectHandle = (input : string,index : number) => {
    const obj = {
      seatNo : input,
      id : index+1,
      selected : true,
      name : ""
    }
      //* final?.setCardArray(e=>[...e,obj]) This line will throw error since we havent mentioned what e(input is),truthy or undefined
      final?.setCardArray(e=>e ?[...e,obj] : [obj])
      console.log(final?.cardArray);
      
  }
  return (
    <div className="seat-container-grid">
      {seatArray.map((e,i)=>(
        <div className="seat" onClick={() => seatSelectHandle(e, i)}>
        <Link to={''}>{e}</Link>
      </div>
      ))}
    </div>
  )
}

export default SeatContainerGrid