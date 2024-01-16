import { Avatar, Chip } from "@mui/material";
import React, { useState } from "react";

const Chip3 = () => {
  const [chipData, setChipData] = useState([
    {
      key: 0,
      avatar: "/images/avatars/1.png",
      avatarAlt: "User Avatar",
      label: "Norman Santiago",
    },
    {
      key: 1,
      avatar: "/images/avatars/2.png",
      avatarAlt: "User Avatar",
      label: "Cecelia Tucker",
    },
    { key: 2, label: "Max Burns" },
    {
      key: 3,
      avatar: "/images/avatars/4.png",
      avatarAlt: "User Avatar",
      label: "Ellen Nguyen",
    },
    {
      key: 4,
      avatar: "/images/avatars/5.png",
      avatarAlt: "User Avatar",
      label: "Edward Francis",
    },
  ]);
  const handleDelete  = (e) => {
    console.info('deleted', e?.key)
  }
  return (
    <div>
      <div style={{ margin: "1rem" }}>Chips Array</div>
      <div style={{ display: "flex", margin: "1rem" }}>
        <div>
          {chipData?.map((e, i) => {
            return (
              <div key={i}>
                <Chip key={e?.key} label={e?.label} avatar={<Avatar src={e?.avatar} />} onDelete={(e) => handleDelete(e)} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Chip3;
