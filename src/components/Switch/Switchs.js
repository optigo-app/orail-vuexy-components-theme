import { Switch, styled } from '@mui/material';
import React from 'react'

const switchs = () => {

  const SwitchStyle = styled(Switch)(({ theme,color }) => ({
    width: 36,
    height: 20,
    padding: 0,
    display: 'flex',
    '&:active': {
      '& .MuiSwitch-thumb': {
        width: 15,
      },
      '& .MuiSwitch-switchBase.Mui-checked': {
        transform: 'translateX(9px)',
      },
    },
    '& .MuiSwitch-switchBase': {
      padding: 2,
      '&.Mui-checked': {
        transform: 'translateX(17px)',
        color: '#fff',
        '& + .MuiSwitch-track': {
          opacity: 1,
          backgroundColor: theme.palette[color]?.main || theme.palette.primary.main,
        },
      },
    },
    '& .MuiSwitch-thumb': {
      boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
      width: 15,
      height: 15,
      borderRadius: 8,
      marginTop:0.4,
      transition: theme.transitions.create(['width'], {
        duration: 200,
      }),
    },
    '& .MuiSwitch-track': {
      borderRadius: 100 / 2,
      opacity: 1,
      backgroundColor:
        theme.palette.mode === 'dark' ? 'rgba(255,255,255,.35)' : 'rgba(0,0,0,.25)',
      boxSizing: 'border-box',
    },
  }));

  return (
    <div style={{width:'100%',display:'flex',flexDirection:'column'}}>
      <div style={{marginLeft:'12px'}}>
      <h1>Customize Simple Switchs</h1>
      <div style={{gap:'12px',margin:'12px',display:'flex'}}>
       <SwitchStyle defaultChecked inputProps={{ 'aria-label': 'ant design' }} color='primary' />
       <SwitchStyle defaultChecked inputProps={{ 'aria-label': 'ant design' }} color='secondary' />
       <SwitchStyle defaultChecked inputProps={{ 'aria-label': 'ant design' }} color='info' />
       <SwitchStyle defaultChecked inputProps={{ 'aria-label': 'ant design' }} color='warning' />
       <SwitchStyle defaultChecked inputProps={{ 'aria-label': 'ant design' }} color='error' />
       <SwitchStyle defaultChecked inputProps={{ 'aria-label': 'ant design' }} color='success' />
      </div>
      </div>
    </div>
  )
}

export default switchs