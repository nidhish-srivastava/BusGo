import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import SelectSeat from "./components/SelectSeat/SelectSeat";
import BookingConfirmation from "./components/BookingConfirmation";
import Home from "./components/Home/Home";
import Hero from "./Hero";
import { BusContextProvider } from "./context/context";


function App() {
  return (
    <BrowserRouter>
    <Nav/>
    <BusContextProvider>
      <Routes>
        <Route path="/" element = {<Hero/>}/>
        <Route path="/book" element = {<Home/>} />
        <Route path="/select-seat" element={<SelectSeat />} />
        <Route path="/booking-confirmation" element={<BookingConfirmation/>} />
      </Routes>
    </BusContextProvider>
    </BrowserRouter>
  )
}

export default App