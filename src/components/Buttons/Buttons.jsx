import { Button, Typography } from "@mui/material";
import React from "react";
import { SUCCESS } from "../../colorVariables";

const Buttons = () => {
  return (
    <div style={{ display: "flex" }}>
      <div style={{ margin: "1rem" }}>
        <Button
          color="success"
          variant="contained"
          sx={{
            fontWeight: "bold",
            backgroundColor: `${SUCCESS}`,
            textTransform: "none",
          }}
        >
          <Typography>Success</Typography>
        </Button>
      </div>
      <div style={{ margin: "1rem" }}>
        <Button
          color="success"
          variant="outlined"
          sx={{
            color: `${SUCCESS}`,
            borderColor: `${SUCCESS}`,
            textTransform: "none",
          }}
        >
          Success
        </Button>
      </div>
    </div>
  );
};

export default Buttons;
