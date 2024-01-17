import { Chip } from '@mui/material';
import React from 'react'
import { ERROR, INFO, PRIMARY, SECONDARY, SUCCESS, WARNING, WHITE } from '../../colorVariables';

const Chip4 = () => {
  return (
    <div style={{margin:'1rem', display:'flex'}}>
            <div>Styled Chips</div>
            <div style={{margin:'1rem'}}><Chip label='Primary' sx={{backgroundColor:`#7367F028`,fontWeight:'bold', color:`${PRIMARY}`}}  /></div>
            <div style={{margin:'1rem'}}><Chip label='Secondary' sx={{backgroundColor:'#A8AAAE28',fontWeight:'bold', color:`${SECONDARY}`}}  /></div>
            <div style={{margin:'1rem'}}><Chip label='Success' sx={{backgroundColor:`#28C76F28`,fontWeight:'bold', color:`${SUCCESS}`}}  /></div>
            <div style={{margin:'1rem'}}><Chip label='Info' sx={{backgroundColor:`#00CFE828`,fontWeight:'bold', color:`${INFO}`}}  /></div>
            <div style={{margin:'1rem'}}><Chip label='Error' sx={{backgroundColor:`#EA545528`,fontWeight:'bold', color:`${ERROR}`}}  /></div>
            <div style={{margin:'1rem'}}><Chip label='Warning' sx={{backgroundColor:`#FF9F4329`,fontWeight:'bold', color:`${WARNING}`}}  /></div>
            <div style={{margin:'1rem'}}><Chip label='Warning' sx={{backgroundColor:`#FF9F4329`,fontWeight:'bold', color:`${WHITE}`}}  /></div>
    </div>
  )
}

export default Chip4