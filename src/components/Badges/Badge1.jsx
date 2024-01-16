import React from "react";
import Badge from "../../mui/badge";
import { Avatar } from "@mui/material";
import demo1 from '../../assets/Images/demo1.jpeg';

const Badge1 = (props) => {
  
  return (
    <div style={{display:"flex"}}>
      <div style={{margin:'1rem', marginRight:'4rem'}}>Basic Badge</div>
    <div style={{margin:'1rem'}}>
      <Badge badgeContent={4} color="info" sx={{"& .MuiBadge-badge":{backgroundColor:`${props?.bgcolor}`}}}>
        <Avatar src={demo1} />
      </Badge>
    </div>
    <div style={{margin:'1rem'}}>
      <Badge badgeContent={4} color="error" >
        <Avatar  />
      </Badge>
    </div>
    <div style={{margin:'1rem'}}>
      <Badge badgeContent={4} sx={{"& .MuiBadge-badge":{backgroundColor:`#28C76F`, color:'white'}}}>
        <Avatar  />
      </Badge>
    </div>
    <div style={{margin:'1rem'}}>
      <Badge badgeContent={4} color="info" sx={{"& .MuiBadge-badge":{backgroundColor:`${props?.bgcolor}`}}}>
        <Avatar  />
      </Badge>
    </div>
    </div>
  );
};

export default Badge1;
