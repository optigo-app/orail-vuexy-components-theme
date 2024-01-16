import React from "react";
import CustomTextField from "../../mui/text-field";

const TextField1 = () => {
  return (
    <CustomTextField
      customColor="#989898"
      fullWidth
      autoFocus
      label="Default"
      value={""}
      placeholder="input field"
      
    />
  );
};

export default TextField1;
