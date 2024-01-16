import React from "react";
import AccordionSimple from "./AccordionSimple.jsx";
import AccordionCustomize from "./AccordionCustomize.jsx";
import AccordionAdvanced from "./AccordionAdvanced.jsx";
const Accordians = () => {
  return (
    <div>
      <AccordionSimple />
      <AccordionCustomize />
      <AccordionAdvanced />
    </div>
  );
};

export default Accordians;
