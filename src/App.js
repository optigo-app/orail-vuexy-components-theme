import React from 'react'
import Alerts from './components/Alerts/Alerts'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Index from './components/Index'
import Accordians from './components/Accordian/Accordians';
import List from './components/List/List';
import TreeViews from './components/TreeViews/TreeViews';


export default function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<Index />} /> 
      <Route path='/alerts' element={<Alerts />} /> 
      <Route path='/accordions' element={<Accordians />} />
      <Route path='/list' element={<List />} />
      <Route path='/treeviews' element={<TreeViews />} />
      
    </Routes>
   </BrowserRouter>
  )
}
