import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { FormControlLabel } from "@mui/material";
import { Checkbox } from "@mui/material";
import { Icon } from "@iconify/react";

const AccordionAdvanced = () => {
  const handleChange2 = (e, isExpanded) => {
    // console.log(e);
  };
  return (
    <div>
      <div style={{ margin: "2rem", backgroundColor:"rgb(245 242 245)", padding:"1rem" }}>
        <div style={{ padding: "10px" }}>Additional Actions In Accordion</div>
        <div style={{margin:"1rem"}}>
          <Accordion onChange={(e, isExpanded) => handleChange2(e, isExpanded)}>
            <AccordionSummary
              expandIcon={
                <Icon fontSize="1.25rem" icon="tabler:chevron-down" />
              }
            >
              <FormControlLabel
                label="Accordion 3"
                control={<Checkbox disableRipple />}
                onClick={(event) => event.stopPropagation()}
                onFocus={(event) => event.stopPropagation()}
              />
            </AccordionSummary>
            <AccordionDetails>
              Simple Details About Vuexy Accordion
            </AccordionDetails>
          </Accordion>
        </div>
        <div style={{margin:"1rem"}}>
          <Accordion onChange={(e, isExpanded) => handleChange2(e, isExpanded)}>
            <AccordionSummary
              expandIcon={
                <Icon fontSize="1.25rem" icon="tabler:chevron-down" />
              }
            >
              <FormControlLabel
                label="Accordion 3"
                control={<Checkbox disableRipple />}
                onClick={(event) => event.stopPropagation()}
                onFocus={(event) => event.stopPropagation()}
              />
            </AccordionSummary>
            <AccordionDetails>
              Simple Details About Vuexy Accordion
            </AccordionDetails>
          </Accordion>
        </div>
        <div style={{margin:"1rem"}}>
          <Accordion onChange={(e, isExpanded) => handleChange2(e, isExpanded)}>
            <AccordionSummary
              expandIcon={
                <Icon fontSize="1.25rem" icon="tabler:chevron-down" />
              }
            >
              <FormControlLabel
                label="Accordion 3"
                control={<Checkbox disableRipple />}
                onClick={(event) => event.stopPropagation()}
                onFocus={(event) => event.stopPropagation()}
              />
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

export default AccordionAdvanced;
