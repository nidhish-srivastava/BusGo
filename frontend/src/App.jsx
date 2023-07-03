import React from 'react'
import Home from './components/Home'
import {
 BrowserRouter,
 Routes,
 Route
} from 'react-router-dom'
import SelectSeat from './components/SelectSeat'

function App() {
  return (
    <BrowserRouter>
    <Home/>
    <Routes>
      <Route path='/select-seat' element = {<SelectSeat/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App