import React, { useState, createContext, useContext } from "react";

type BusContextProviderProps = {
  children: React.ReactNode;
};

//* We need to create a type which is array(since cardArray is an array,if we dont use this way,use [] later in our code,this will give error)
type seatInput = {
  seatNo: string;
  id: number;
  selected: boolean;
  name: string;
}[];

export type searchResult = {
  price: number;
  brand: string;
}[];

type BusContextType = {
  cardArray: seatInput | null;
  setCardArray: React.Dispatch<React.SetStateAction<seatInput | null>>;

  filteredArray: searchResult | null;
  setFilteredArray: React.Dispatch<React.SetStateAction<searchResult | null>>;

  from: string;
  setFrom: React.Dispatch<React.SetStateAction<string>>;

  to: string;
  setTo: React.Dispatch<React.SetStateAction<string>>;

  date: string;
  setDate: React.Dispatch<React.SetStateAction<string>>;

  brand: string;
  setBrand: React.Dispatch<React.SetStateAction<string>>;

  price: number;
  setPrice: React.Dispatch<React.SetStateAction<number>>;
};

const BusContext = createContext<BusContextType | null>(null);

export const useBusContext = () => useContext(BusContext);

export const BusContextProvider = ({ children }: BusContextProviderProps) => {
  const [filteredArray, setFilteredArray] = useState<searchResult | null>([]);
  const [cardArray, setCardArray] = useState<seatInput | null>([]);

  const [from, setFrom] = useState<string>("From");
  const [to, setTo] = useState("To");
  const [date, setDate] = useState("");

  const [price, setPrice] = useState<number>(0);
  const [brand, setBrand] = useState<string>("");

  const final = {
    cardArray,
    setCardArray,
    from,
    setFrom,
    to,
    setTo,
    date,
    setDate,
    price,
    setPrice,
    brand,
    setBrand,
    filteredArray,
    setFilteredArray,
  };
  return <BusContext.Provider value={final}>{children}</BusContext.Provider>;
};
