import { Chip } from '@mui/material';
import React from 'react'
import { SUCCESS, WHITE } from '../../colorVariables';
import { Icon } from '@iconify/react';


const Chip2 = () => {
    const handleDelete = () => {
        console.info('You clicked the delete icon.')
    }
    const chipStyle = {
        "& .MuiChip-deleteIcon" : {
            color:`${SUCCESS}`
        },
        "& .MuiChip-deleteIcon:hover": {
            color: '#12ac57'
          },
    }
    const chipStyle2 = {
        "& .MuiChip-deleteIcon" : {
            color: `${SUCCESS}`
        },
        "& .MuiChip-deleteIcon:hover": {
            color: '#12ac57'
          },
    }
    const chipStyle3 = {
        "& .MuiChip-deleteIcon" : {
            color: `${WHITE}`
        },
        "& .MuiChip-deleteIcon:hover": {
            color: '#c4c4c4'
          },
    }
  return (
    <div style={{display:'flex', margin:'1rem'}}>
        <div style={{margin:'1rem'}}>
            <Chip label='Basic' variant='outlined'  onDelete={handleDelete}  />
        </div>
        <div style={{margin:'1rem'}}>
            <Chip label='Basic' variant='outlined' sx={{color:`${SUCCESS}`, borderColor:`${SUCCESS}`, ...chipStyle}}  onDelete={handleDelete}  />
        </div>
        <div style={{margin:'1rem'}}>
            <Chip label='Basic' variant='outlined'  onDelete={handleDelete}  deleteIcon={<Icon icon='tabler:trash' />} sx={{color:`${SUCCESS}`, borderColor:`${SUCCESS}`, ...chipStyle2}} />
        </div>
        <div style={{margin:'1rem'}}>
            <Chip label='Basic' variant='contained'  onDelete={handleDelete}  deleteIcon={<Icon icon='tabler:trash' />} sx={{backgroundColor:`${SUCCESS}`,color:`${WHITE}`, fontWeight:'bold', ...chipStyle3}} />
        </div>
        <div style={{margin:'1rem'}}>
            <Chip label='Clickable Link' component='a' href='https://pixinvent.com/' target='_blank' clickable />
        </div>
    </div>
  )
}

export default Chip2