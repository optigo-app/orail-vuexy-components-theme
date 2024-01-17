import React, { useState } from "react";
import CustomTextField from "../../mui/text-field";
import { Box, Chip, MenuItem } from "@mui/material";
import { PRIMARY, WARNING, WHITE } from "../../colorVariables";
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
    "& .MuiPaper-root.MuiList-root.MuiButtonBase-root.MuiMenuItem-root.Mui-selected" : {
        backgroundColor:`${PRIMARY} !important`,
        color:`${WHITE}`,

    }
  }
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
          customBorderColor= {`${PRIMARY}`}
          SelectProps={{
            MenuProps,
            multiple: true,
            value: personName,
            onChange: (e) => handleChange(e),
            renderValue: (selected) => (
              <Box sx={{ display: "flex", flexWrap: "wrap", borderColor:`${PRIMARY}` }}>
                {selected?.map((value) => (
                  <Chip
                    key={value}
                    label={value}
                    sx={{ m: 0.75, backgroundColor:`${PRIMARY}`, color:`${WHITE}` }}
                    
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
    </div>
  );
};

export default MultipleSelects;
