import {useState, createContext, useContext } from "react";

const BusContext = createContext();

export const useBusContext = () => useContext(BusContext);

export const BusContextProvider = ({ children }) => {
  const [cardArray, setCardArray] = useState([]);
  const [from,setFrom] = useState("From")
  const [to,setTo] = useState("To")
  const [date,setDate]=  useState("")
  
  const [price,setPrice] = useState("")
  const [brand,setBrand]=  useState("")

  const final = {
    cardArray,setCardArray,
    from,setFrom,
    to,setTo,
    date,setDate,
    price,setPrice,
    brand,setBrand
  };
  return <BusContext.Provider value={final}>{children}</BusContext.Provider>;
};
