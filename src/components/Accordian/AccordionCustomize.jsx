import React, { useState } from "react";
import { Icon } from "@iconify/react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

const AccordionCustomize = () => {
//   const [expanded, setExpanded] = useState(false);
  const [expanded, setExpanded] = useState([false, false, false]);
  const handleChange = (index, isExpanded) => {
    const newExpanded = [...expanded];
    newExpanded[index] = isExpanded;
    setExpanded(newExpanded);
  };
  return (
    <div>
      <div
        style={{
          margin: "2rem",
          backgroundColor: "rgb(245 242 245)",
          padding: "1rem",
        }}
      >
        <div style={{ padding: "10px"}}>Customize Accordion</div>
        <div style={{ margin: "1rem" }}>
          <Accordion onChange={(e, isExpanded) => handleChange(0, isExpanded)}>
            <AccordionSummary
              expandIcon={
                <Icon icon={expanded[0] ? "tabler:minus" : "tabler:plus"} />
              }
            >
              Accordion 2
            </AccordionSummary>
            <AccordionDetails>
              Simple Details About Vuexy Accordion
            </AccordionDetails>
          </Accordion>
        </div>
        <div style={{ margin: "1rem" }}>
          <Accordion onChange={(e, isExpanded) => handleChange(1, isExpanded)}>
            <AccordionSummary
              expandIcon={
                <Icon icon={expanded[1] ? "tabler:minus" : "tabler:plus"} />
              }
            >
              Accordion 2
            </AccordionSummary>
            <AccordionDetails>
              Simple Details About Vuexy Accordion
            </AccordionDetails>
          </Accordion>
        </div>
        <div style={{ margin: "1rem" }}>
          <Accordion onChange={(e, isExpanded) => handleChange(2, isExpanded)}>
            <AccordionSummary
              expandIcon={
                <Icon icon={expanded[2] ? "tabler:minus" : "tabler:plus"} />
              }
            >
              Accordion 2
            </AccordionSummary>
            <AccordionDetails>
              Simple Details About Vuexy Accordion
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default AccordionCustomize;
