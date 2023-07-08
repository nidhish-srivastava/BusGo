import React,{useState} from "react";
import Home from "./components/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SelectSeat from "./components/SelectSeat/SelectSeat";
import BookingConfirmation from "./components/BookingConfirmation";
import Nav from "./components/Nav";

function App() {
  const [filteredArray, setFilteredArray] = useState([]);

  return (
    <BrowserRouter>
    <Nav/>
      <Routes>
        <Route path="/" element = {<Home filteredArray={filteredArray} setFilteredArray={setFilteredArray} />} />
        <Route path="/select-seat" element={<SelectSeat />} />
        <Route path="/booking-confirmation" element={<BookingConfirmation filteredArray = {filteredArray} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
