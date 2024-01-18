import React, { useState } from "react";
import CustomTextField from "../../mui/text-field";
import { Box, Chip, MenuItem } from "@mui/material";
import { INFO, WHITE } from "../../colorVariables";
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      width: 250,
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
    },
  },
};

const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];
const MultipleSelects = () => {
  const [personName, setPersonName] = useState([]);
  const [personNameNative, setPersonNameNative] = useState([]);

  const handleChange = (event) => {
    setPersonName(event.target.value);
  };
  const handleChangeMultipleNative = (event) => {
    const { options } = event.target;
    const value = [];
    for (let i = 0, l = options.length; i < l; i += 1) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }
    setPersonNameNative(value);
  };
  const customStyle = {
    "&.Mui-selected": {
      backgroundColor: `${INFO}`, // Change the background color for the selected MenuItem
      color: `${WHITE}`,
      fontWeight: "bold", // Change the text color for the selected MenuItem
    },
    "&.Mui-selected:hover": {
      backgroundColor: `#5ce9fa`, // Change the background color for the selected MenuItem
      color: `${WHITE}`, // Change the text color for the selected MenuItem
    },
  };

  return (
    <div style={{ margin: "1rem" }}>
      <div style={{ margin: "1rem" }}>
        <CustomTextField
          select
          fullWidth
          label="Default"
          id="select-multiple-default"
          SelectProps={{
            MenuProps,
            multiple: true,
            value: personName,
            onChange: (e) => handleChange(e),
          }}
        >
          {names?.map((name) => (
            <MenuItem key={name} value={name}>
              {name}
            </MenuItem>
          ))}
        </CustomTextField>
      </div>
      <div style={{ margin: "1rem" }}>
        <CustomTextField
          select
          fullWidth
          label="Chip"
          id="select-multiple-chip"
          SelectProps={{
            MenuProps,
            multiple: true,
            value: personName,
            onChange: (e) => handleChange(e),
            renderValue: (selected) => (
              <Box sx={{ display: "flex", flexWrap: "wrap" }}>
                {selected?.map((value) => (
                  <Chip
                    key={value}
                    variant="contained"
                    label={value}
                    sx={{
                      m: 0.75,
                      backgroundColor: `${INFO}`,
                      color: `${WHITE}`,
                    }}
                  />
                ))}
              </Box>
            ),
          }}
        >
          {names.map((name) => (
            <MenuItem key={name} value={name} sx={customStyle}>
              {name}
            </MenuItem>
          ))}
        </CustomTextField>
      </div>
      <div style={{ margin: "1rem" }}>
        <CustomTextField
          select
          fullWidth
          label="Native"
          id="select-multiple-native"
          SelectProps={{
            MenuProps,
            native: true,
            multiple: true,
            value: personNameNative,
            onChange: (e) => handleChangeMultipleNative(e),
          }}
        >
          {names.map((name) => (
            <option key={name} value={name}>
              {name}
            </option>
          ))}
        </CustomTextField>
      </div>
    </div>
  );
};

export default MultipleSelects;
