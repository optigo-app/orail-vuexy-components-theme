import React from "react";
import CustomTextField from "../../mui/text-field";
import { MenuItem } from "@mui/material";
import MultipleSelects from "./MultipleSelects";

const SelectDropDowns = () => {
  return (
    <div style={{ margin: "0 auto", marginTop: "2rem", width: "50%" }}>
        <div><h1>Select & DropDown Types</h1></div>
      <div style={{ margin: "1rem" }}>
        <CustomTextField
          select
          defaultValue=""
          fullWidth
          label="Default"
          id="custom-select"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </CustomTextField>
      </div>
      <div style={{ margin: "1rem" }}>
        <CustomTextField
          fullWidth
          select
          defaultValue=""
          label="Native"
          id="custom-select-native"
          SelectProps={{ native: true }}
        >
          <option aria-label="None" value="" />
          <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
        </CustomTextField>
      </div>
      <div style={{ margin: "1rem" }}>
        <CustomTextField
          fullWidth
          select
          disabled
          defaultValue=""
          label="Disabled"
          id="custom-select-disabled"
          SelectProps={{ native: true }}
        >
          <option aria-label="None" value="" />
          <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
        </CustomTextField>
      </div>
      <div style={{ margin: "1rem" }}>
        <CustomTextField
          error
          select
          defaultValue=""
          label="Age"
          id="select-error"
          fullWidth
          helperText="Error"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </CustomTextField>
      </div>
      <div style={{ margin: "1rem" }}>
        <CustomTextField
          required
          select
          defaultValue=""
          label="Age"
          id="select-error"
          fullWidth
          helperText="Required"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </CustomTextField>
      </div>
      <div style={{ margin: "1rem" }}>
        <CustomTextField
          select
          defaultValue=""
          fullWidth
          id="select-without-label"
          helperText="Without label"
          SelectProps={{ displayEmpty: true }}
          inputProps={{ "aria-label": "Without label" }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </CustomTextField>
      </div>
      <div style={{margin:'2rem'}}>
        <div><h1>Multiple Select</h1></div>
        <div><MultipleSelects /></div>
      </div>
    </div>
  );
};

export default SelectDropDowns;
