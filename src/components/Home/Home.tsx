import {useMemo} from 'react'
import { useBusContext } from "../../context/context";
import From from "./From";
import SearchResult from "./SearchResult";
import To from "./To";
import data from '../../data.json'

type BusInfoType = {
  brand: string;
  price: number;
  from: string[];
  to: string[];
}[];

function Home() {
  const final = useBusContext();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    final?.setDate(e.target.value);
  };

  const busesInfoArray: BusInfoType = useMemo(  //* from 55% in lighthouse to 66%(improvement using useMemo )
    ()=>{
      return data
    },
    []
  )

  // here using useMemo wont be that useFull since this array is being dependent on many things,so we will have to pass these in dependencies,which leads no good results at all
  const filteredHandler = () => {
    const filteredResults = busesInfoArray.filter((e) => {
      // console.log(e.from.includes(from));
      let fromCheck = e.from.includes(final?.from ?? "");
      let toCheck = e.to.includes(final?.to ?? "");
      if (fromCheck && toCheck) {
        return []; // we just need to return an array,doesnt matter what,coz the if condition does the filtering for us
      }
    });
    final?.setFilteredArray(filteredResults);
  };

  console.log("Home");
  

  return (
    <main className="book-tickets-main-container">
      <div className="user-input-div">
        <div className="top-div">
          <From />
          <To />
          <input type="date" value={final?.date} onChange={handleChange} />
        </div>
        <div
          className="lower-div"
          style={{ textAlign: "right", marginRight: "1rem" }}
        >
          <button className="btn-submit-form" onClick={filteredHandler}>
            Submit
          </button>
        </div>
        <SearchResult />
      </div>
    </main>
  );
}

export default Home;
