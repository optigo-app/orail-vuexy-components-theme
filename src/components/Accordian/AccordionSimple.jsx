import React from 'react'
import { Icon } from '@iconify/react';
import  Accordion  from '@mui/material/Accordion';
import  AccordionSummary  from '@mui/material/AccordionSummary';
import  AccordionDetails  from '@mui/material/AccordionDetails';

const AccordionSimple = () => {
  return (
    <div>
        <div style={{ margin: "2rem", backgroundColor: "rgb(245 242 245)",padding: "1rem", }}>
        <div style={{ padding: "10px" }}>Simple Accordion</div>
        <div style={{ margin: "1rem" }}>
          <Accordion>
            <AccordionSummary
             id='actions-panel-header-1'
             aria-controls='panel-content-1'
              expandIcon={
                <Icon fontSize="1.25rem" icon="tabler:chevron-down" />
              }
            >
              Accordion 1
            </AccordionSummary>
            <AccordionDetails sx={{color: 'text.secondary'}}>
              Simple Details About Vuexy Accordion
            </AccordionDetails>
          </Accordion>
        </div>
        <div style={{ margin: "1rem" }}>
          <Accordion>
            <AccordionSummary
             id='actions-panel-header-1'
             aria-controls='panel-content-1'
              expandIcon={
                <Icon fontSize="1.25rem" icon="tabler:chevron-down" />
              }
            >
              Accordion 1
            </AccordionSummary>
            <AccordionDetails>
              Simple Details About Vuexy Accordion
            </AccordionDetails>
          </Accordion>
        </div>
        <div style={{ margin: "1rem" }}>
          <Accordion>
            <AccordionSummary
            id='actions-panel-header-1'
            aria-controls='panel-content-1'
              expandIcon={
                <Icon fontSize="1.25rem" icon="tabler:chevron-down" />
              }
            >
              Accordion 1
            </AccordionSummary>
            <AccordionDetails>
              Simple Details About Vuexy Accordion
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </div>
  )
}

export default AccordionSimple