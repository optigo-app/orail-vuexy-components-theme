import React from "react";
import TextField1 from "./TextField1";
import TextField2 from "./TextField2";
import TextField3 from "./TextField3";

const TextFields = () => {
  return (
    <div>
      <div style={{ margin: "2rem" }}>
        <TextField1 />
      </div>
      <div style={{ margin: "2rem", marginTop:"7rem" }}>
        <TextField2 />
      </div>
      <div style={{ margin: "2rem", marginTop:"7rem" }}>
        <TextField3 />
      </div>
    </div>
  );
};

export default TextFields;
