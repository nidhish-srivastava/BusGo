import { useBusContext } from "../../context/context"
import { useNavigate } from "react-router-dom";


function SelectedSeatInfo() {
  const final = useBusContext()
  const navigate = useNavigate()

  

  const deleteHandler = (id : number) =>{
    const filter = final?.cardArray && final.cardArray.filter((e)=>e.id!=id)
    // final?.setCardArray(filter) //* handling null | undefined conditions 
    if(final){
      final.setCardArray(filter || null)
    }
  }

  const nameChangeHandler = (input :React.ChangeEvent<HTMLInputElement> ,id : number) =>{
    // let copy =  [...final?.cardArray]  Just checking the null and undefined shit
    let copy = final?.cardArray ? [...final.cardArray] : [];
    copy = copy.map((x)=>{
     if(x.id===id) x.name = input.target.value
     return x
    })
    final?.setCardArray(copy)
 }

  return (
    <div className="selected-seat-info">
  <div className="selected-seat-info">
    <div className="details-trip">
        <h3>Price : {final?.price}</h3>
        <h3>Brand : {final?.brand}</h3>
        <h3>{final?.from} to {final?.to}</h3>
        <h3>{final?.date}</h3>
    </div>

        {/* {  final?.cardArray.map((e, index) => THIS CODE GIVES ERROR(SINCE IT IS POTENTIALLY NULLABLE,using && oeprator,truthiness is checked) { */}
        { final?.cardArray && final.cardArray.map((e, index) => {
            return (
              <div key={index} className='info-card' >
                <h3 >
                  {e.seatNo}
                  </h3>
                <input type="text" placeholder="Enter Name" value={e.name} onChange={input=>nameChangeHandler(input,e.id)} />
                <button onClick={() => deleteHandler(e.id)}>Delete</button>
              </div>
            );
        })}
      <button onClick={()=>navigate('/booking-confirmation')}>Confirm Details</button>
    </div>
    </div>
  )
}

export default SelectedSeatInfo