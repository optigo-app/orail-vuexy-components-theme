import { TextField } from "@mui/material";
import React from "react";

const TextField2 = () => {
  return (
    <div>
      <div style={{ marginTop: "1rem" }}>
        <TextField
          color="secondary"
          id="outlined-basic"
          label="Outlined"
          placeholder="enter text"
          fullWidth
        />
      </div>
      <div style={{ marginTop: "1rem" }}>
        <TextField
          id="filled-basic"
          label="Filled"
          variant="filled"
          placeholder="enter text"
          fullWidth
        />
      </div>
      <div style={{ marginTop: "1rem" }}>
        <TextField
          id="standard-basic"
          label="Standard"
          variant="standard"
          placeholder="enter text"
          fullWidth
        />
      </div>
    </div>
  );
};

export default TextField2;
