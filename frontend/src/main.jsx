import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BusContextProvider } from './context/context.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <BusContextProvider>
    <App />
    </BusContextProvider>
)
