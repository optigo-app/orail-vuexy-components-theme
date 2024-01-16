import React from "react";
import Badge from "../../mui/badge";
import { Avatar } from "@mui/material";

const Badge2 = (props) => {
  return (
    <div style={{ display: "flex" }}>
        <div style={{margin:'1rem', marginRight:'4.5rem'}}>Dot Badge</div>
      <div style={{ margin: "1rem" }}>
        <Badge
          variant="dot"
          badgeContent={4}
          overlap="circular"
          sx={{
            "& .MuiBadge-badge": {
              backgroundColor: `${props?.bgcolor ?? "#00CEF8"}`,
            },
          }}
        >
          <Avatar />
        </Badge>
      </div>
      <div style={{ margin: "1rem" }}>
        <Badge
          variant="dot"
          badgeContent={4}
          sx={{
            "& .MuiBadge-badge": {
              backgroundColor: `${props?.bgcolor ?? "#00CEF8"}`,
            },
          }}
        >
          <Avatar variant="square" />
        </Badge>
      </div>
      <div style={{ margin: "1rem" }}>
        <Badge
          variant="dot"
          badgeContent=" "
          overlap="circular"
          sx={{
            "& .MuiBadge-badge": {
              backgroundColor: `${props?.bgcolor ?? "#00CEF8"}`,
              borderRadius: "50%",
              padding: "10px",
            },
          }}
        >
          <Avatar />
        </Badge>
      </div>
      <div style={{ margin: "1rem" }}>
        <Badge
          variant="dot"
          badgeContent={4}
          sx={{
            "& .MuiBadge-badge": {
              backgroundColor: `${props?.bgcolor ?? "#00CEF8"}`,
            },
          }}
        >
          <Avatar />
        </Badge>
      </div>
    </div>
  );
};

export default Badge2;
