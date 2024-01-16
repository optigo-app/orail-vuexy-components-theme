import React, { useState } from "react";
import Badge from "../../mui/badge";
import {
  Avatar,
  Button,
  ButtonGroup,
  FormControlLabel,
  Switch,
} from "@mui/material";
import { Icon } from "@iconify/react";

const Badge3 = (props) => {
  const [count, setCount] = useState(1);
  const [invisible, setInvisible] = useState(false);
  const handleBadgeVisibility = () => {
    setInvisible(!invisible);
  };
  return (
    <div>
      <div style={{ display: "flex" }}>
        <div style={{ margin: "1rem", marginRight:'2.5rem' }}>Badge Counter</div>
        <div
          style={{
            margin: "1rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div style={{ paddingRight: "2rem" }}>
            <Badge
              badgeContent={count}
              color="primary"
              sx={{
                "& .MuiBadge-badge": {
                  backgroundColor: `${props?.bgcolor ?? "#00CEF8"}`,
                },
                
              }}
            >
              <Avatar />
            </Badge>
          </div>
          <ButtonGroup size="small">
            <Button
              aria-label="reduce"
              onClick={() => setCount(Math.max(count - 1, 0))}
              sx={{
                color: `${props?.bgcolor}`,
                borderColor: `${props?.bgcolor}`,
                '&:hover': {
                    borderColor:"#00CEF8", // Set the border color on hover
                  },
              }}
            >
              <Icon icon="tabler:minus" fontSize={20} />
            </Button>
            <Button
              aria-label="increase"
              onClick={() => setCount(count + 1)}
              sx={{
                color: `${props?.bgcolor}`,
                borderColor: `${props?.bgcolor}`,
                '&:hover': {
                    borderColor:"#00CEF8", // Set the border color on hover
                  },
              }}
            >
              <Icon icon="tabler:plus" fontSize={20} />
            </Button>
          </ButtonGroup>
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <div style={{ margin: "1rem", marginRight:'2.4rem' }}>Badge Visibility</div>
        <div
          style={{
            margin: "1rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div style={{ paddingRight: "2rem" }}>
            <Badge
              variant="dot"
              invisible={invisible}
              sx={{
                "& .MuiBadge-badge": {
                  backgroundColor: `${props?.bgcolor ?? "#00CEF8"}`,
                },
              }}
            >
              <Avatar />
            </Badge>
          </div>
          <div>
            <FormControlLabel
              label="Show Badge"
              sx={{ color: "#989898" }}
              control={
                <Switch checked={!invisible} onChange={handleBadgeVisibility} />
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};
// MuiSwitch-track css-1yjjitx-MuiSwitch-track
// css-5ryogn-MuiButtonBase-root-MuiSwitch-switchBase.Mui-checked
export default Badge3;
