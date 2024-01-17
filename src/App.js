import React from "react";
import Alerts from "./components/Alerts/Alerts";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./components/Index";
import Accordians from "./components/Accordian/Accordians";
import Lists from "./components/List/Lists";
import TreeViews from "./components/TreeViews/TreeViews";
import TextFields from "./components/TextFields/TextFields";
import Dailogs from "./components/Dailogs/Dailogs";
import Avatars from "./components/Avatars/Avatars";
import MenuList from "./components/Menu/Menu";
import DatePickers from "./components/DatePicker/DatePickers";
import TextArea from "./components/TextArea/TextArea";
import Badges from "./components/Badges/Badges";
import Buttons from './components/Buttons/Buttons';
import ButtonGroup from "./components/ButtonGroup/ButtonGroup";
import Chips from "./components/Chips/Chips";
import AutoCompleteMain from "./components/autocomplete/AutoCompleteMain";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/alerts" element={<Alerts />} />
        <Route path="/accordions" element={<Accordians />} />
        <Route path="/list" element={<Lists />} />
        <Route path="/treeviews" element={<TreeViews />} />
        <Route path="/textfields" element={<TextFields />} />
        <Route path="/textfields" element={<TextFields />} />
        <Route path="/dailogs" element={<Dailogs />} />
        <Route path="/Avatars" element={<Avatars />} />
        <Route path="/Menu" element={<MenuList />} />
        <Route path="/DatePicker" element={<DatePickers />} />
        <Route path="/TextArea" element={<TextArea />} />
        <Route path="/Buttons" element={<Buttons />} />
        <Route path="/ButtonGroup" element={<ButtonGroup />} />
        <Route path="/Chips" element={<Chips />} />
        <Route path="/Badges" element={<Badges />} />
        <Route path="/autoComplete" element={<AutoCompleteMain />} />
      </Routes>
    </BrowserRouter>
  );
}
