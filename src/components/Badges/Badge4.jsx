import React from "react";
import Badge from "../../mui/badge";
import { Avatar } from "@mui/material";

const Badge4 = (props) => {
  return (
    <div style={{ margin: "1rem", display:'flex', alignItems:'center' }}>
      <div style={{ marginRight:'2rem' }}>Custom Badge</div>
      <div style={{ margin: "1rem" }}>
        <Badge
          skin="light"
          badgeContent={4}
          sx={{
            "& .MuiBadge-badge": {
              color: `${props?.color ?? "#00CEF8"}`,
              backgroundColor: `${props?.bgcolor ?? "#00CFE829"}`,
            },
          }}
        >
          <Avatar />
        </Badge>
      </div>
      <div style={{ margin: "1rem" }}>
        <Badge
          skin="light"
          badgeContent={4}
          sx={{
            "& .MuiBadge-badge": {
              color: `${'#A8AAAE' ?? "#00CEF8"}`,
              backgroundColor: `${'#A8AAAE29' ?? "#00CFE829"}`,
            },
          }}
        >
          <Avatar />
        </Badge>
      </div>
      <div style={{ margin: "1rem" }}>
        <Badge
          skin="light"
          badgeContent={4}
          sx={{
            "& .MuiBadge-badge": {
              color: `${'#28C76F' ?? "#00CEF8"}`,
              backgroundColor: `${'#28C76F29' ?? "#00CFE829"}`,
            },
          }}
        >
          <Avatar />
        </Badge>
      </div>
      <div style={{ margin: "1rem" }}>
        <Badge
          skin="light"
          badgeContent={4}
          sx={{
            "& .MuiBadge-badge": {
              color: `${'#EA5455' ?? "#00CEF8"}`,
              backgroundColor: `${'#EA545529' ?? "#00CFE829"}`,
            },
          }}
        >
          <Avatar />
        </Badge>
      </div>
    </div>
  );
};

export default Badge4;
