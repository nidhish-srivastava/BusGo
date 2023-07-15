import { useNavigate } from "react-router-dom";
import { useBusContext } from "../../context/context";

function SearchResult() {
  const final = useBusContext();
  const navigate = useNavigate();
  const selectBusHandler = (price: number, brand: string) => {
    final?.setPrice(price);
    final?.setBrand(brand);
    navigate("/select-seat");
  };

  return (
    <div className="result-container">
      {final?.filteredArray?.map((e) => {
        return (
          <div className="result-card">
            <h2>From - {final?.from}</h2>
            <h2>To - {final?.to}</h2>
            <h2>Brand - {e.brand}</h2>
            <h2>Price - &#8377;{e.price}</h2>
            <h2>Date - {final?.date}</h2>
            <button onClick={() => selectBusHandler(e.price, e.brand)}>
              Select Bus
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default SearchResult;
