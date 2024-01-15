import React from 'react'
import Alerts from './components/Alerts/Alerts'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Index from './components/Index'

export default function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<Index />} /> 
      <Route path='/alerts' element={<Alerts />} /> 
    </Routes>
   </BrowserRouter>
  )
}
