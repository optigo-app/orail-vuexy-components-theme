import { Button, ButtonGroup } from "@mui/material";
import React from "react";
import { SUCCESS, WHITE } from "../../colorVariables";

const ButtonGroup1 = () => {
  const hoverStyles = {
    borderColor: `#35f28a !important`,
    "&:hover": {
      backgroundColor: "#dcffeb", // Change this to the desired hover background color
      borderColor: `${SUCCESS} !important`,
    },
  };
  const hoverStyles2 = {
    borderColor: `#35f28a !important`,
    "&:hover": {
      backgroundColor: "#0cc051", // Change this to the desired hover background color
      borderColor: `${SUCCESS}`,
    },
    "& .MuiButtonGroup-firstButton": {
      borderRight: `${SUCCESS}`,
    },
  };
  return (
    <div style={{ display: "flex" }}>
      <div style={{ margin: "1rem" }}>Basic Button Group</div>
      <div style={{ display: "flex" }}>
        <div style={{ margin: "1rem" }}>
          <ButtonGroup variant="outlined">
            <Button
              sx={{
                color: `${SUCCESS}`,
                borderColor: `${SUCCESS}`,
                ...hoverStyles,
              }}
            >
              One
            </Button>
            <Button
              sx={{
                color: `${SUCCESS}`,
                borderColor: `${SUCCESS}`,
                ...hoverStyles,
              }}
            >
              Two
            </Button>
            <Button
              sx={{
                color: `${SUCCESS}`,
                borderColor: `${SUCCESS}`,
                ...hoverStyles,
              }}
            >
              Three
            </Button>
          </ButtonGroup>
        </div>
        <div style={{ margin: "1rem" }}>
          <ButtonGroup variant="contained">
            <Button
              sx={{
                color: `${WHITE}`,
                backgroundColor: `${SUCCESS}`,
                ...hoverStyles2,
              }}
            >
              One
            </Button>
            <Button
              sx={{
                color: `${WHITE}`,
                backgroundColor: `${SUCCESS}`,
                ...hoverStyles2,
              }}
            >
              Two
            </Button>
            <Button
              sx={{
                color: `${WHITE}`,
                backgroundColor: `${SUCCESS}`,
                ...hoverStyles2,
              }}
            >
              Three
            </Button>
          </ButtonGroup>
        </div>
        <div style={{ margin: "1rem" }}>
          <ButtonGroup variant="text">
            <Button sx={{ color: `${SUCCESS}`, ...hoverStyles }}>One</Button>
            <Button sx={{ color: `${SUCCESS}`, ...hoverStyles }}>Two</Button>
            <Button sx={{ color: `${SUCCESS}`, ...hoverStyles }}>Three</Button>
          </ButtonGroup>
        </div>
      </div>
    </div>
  );
};

export default ButtonGroup1;
