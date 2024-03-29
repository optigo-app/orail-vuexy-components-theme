import React from "react";
import "./App.css"
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
import Tabs from "./components/Tabs/Tabs";
import Buttons from './components/Buttons/Buttons';
import ButtonGroup from "./components/ButtonGroup/ButtonGroup";
import Chips from "./components/Chips/Chips";
import AutoCompleteMain from "./components/autocomplete/AutoCompleteMain";
import PaginationParts from "./components/PaginationParts/PaginationParts";
import SelectDropDowns from "./components/SelectDropDowns/SelectDropDowns";
import CheckBoxes from "./components/CheckBoxes/CheckBoxes";
import Radio from "./components/Radio/Radio";
import CustomInput from "./components/customInput/CustomInput";
import FileUploader from "./components/FileUploader/FileUploader";
import Cards from './components/Cards/Cards';
import InputMask from "./components/InputMask/InputMask";
import Switchs from "./components/Switch/Switchs";
import { StyledEngineProvider } from "@mui/styled-engine";

export default function App() {
  return (
    <StyledEngineProvider injectFirst>
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
        <Route path="/Tabs" element={<Tabs />} />
        <Route path="/autoComplete" element={<AutoCompleteMain />} />
        <Route path="/PaginationParts" element={<PaginationParts />} />
        <Route path="/SelectDropDowns" element={<SelectDropDowns />} />
        <Route path="/CheckBoxes" element={<CheckBoxes />} />
        <Route path="/radio" element={<Radio />} />
        <Route path="/CustomInput" element={<CustomInput />} />
        <Route path="/FileUploader" element={<FileUploader />} />
        <Route path='/cards' element={<Cards />} />
        <Route path='/inputmask' element={<InputMask />} />
        <Route path='/switchs' element={<Switchs />} />
      </Routes>
    </BrowserRouter>
    </StyledEngineProvider>
  );
}
