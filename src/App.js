import React from 'react'
import Alerts from './components/Alerts/Alerts'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Index from './components/Index'
import Accordians from './components/Accordian/Accordians';
import Lists from './components/List/Lists';
import TreeView from './components/TreeView/TreeView';
import TextFields from './components/TextFields/TextFields';
import Dailogs from './components/Dailogs/Dailogs'
import Avatars from './components/Avatars/Avatars'
import MenuList from './components/Menu/Menu'
import DatePickers from './components/DatePicker/DatePickers'
import TextArea from './components/TextArea/TextArea';

export default function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<Index />} /> 
      <Route path='/alerts' element={<Alerts />} /> 
      <Route path='/accordions' element={<Accordians />} />
      <Route path='/list' element={<Lists />} />
      <Route path='/treeview' element={<TreeView />} />
      <Route path='/treeview' element={<TreeView />} />
      <Route path='/textfields' element={<TextFields />} /> 
      <Route path='/textfields' element={<TextFields />} /> 
      
      <Route path='/dailogs' element={<Dailogs />} /> 
      <Route path='/Avatars' element={<Avatars />} /> 
      <Route path='/Menu' element={<MenuList />} /> 
      <Route path='/DatePicker' element={<DatePickers />} /> 
      <Route path='/TextArea' element={<TextArea />} /> 
      <Route path='/dailogs' element={<Dailogs />} /> 
      <Route path='/Avatars' element={<Avatars />} /> 
      <Route path='/Menu' element={<MenuList />} /> 
      <Route path='/DatePicker' element={<DatePickers />} /> 
      <Route path='/TextArea' element={<TextArea />} /> 
    </Routes>
   </BrowserRouter>
  )
}
