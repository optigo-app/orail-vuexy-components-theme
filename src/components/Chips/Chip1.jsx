import { Chip } from '@mui/material';
import React from 'react'
import { SUCCESS, WHITE } from '../../colorVariables';

const Chip1 = () => {
  return (
    <div style={{margin:'1rem', display:'flex'}}>
       <div style={{margin:'1rem'}}><Chip variant='outlined' label='SUCCESS' sx={{color:`${SUCCESS}`, borderColor:`${SUCCESS}`}} /></div>
       <div style={{margin:'1rem'}}><Chip variant='contained' label='SUCCESS' sx={{backgroundColor:`${SUCCESS}`,color:`${WHITE}`,fontWeight:'bold', borderColor:`${SUCCESS}`}} /></div>
    </div>
  )
}

export default Chip1