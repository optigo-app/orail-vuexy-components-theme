import { Alert } from '@mui/material'
import React from 'react'
import './Alerts.css';

export default function Alerts() {
  return (
    <div>
      <h1>Basic Alerts</h1>
      <Alert severity='error' className='alerts'>This is an error alert — check it out!</Alert>
      <Alert severity='warning' className='alerts'>This is an warning alert — check it out!</Alert>
      <Alert severity='info' className='alerts'>This is an info alert — check it out!</Alert>
      <Alert severity='success' className='alerts'>This is an success alert — check it out!</Alert>

      <h1>Outlined Alerts</h1>
      <Alert variant='outlined' severity='error' className='alerts'>
        This is an error alert — check it out!
      </Alert>
      <Alert variant='outlined' severity='warning' className='alerts'>
        This is an warning alert — check it out!
      </Alert>
      <Alert variant='outlined' severity='info' className='alerts'>
        This is an info alert — check it out!
      </Alert>
      <Alert variant='outlined' severity='success' className='alerts'>
        This is an success alert — check it out!
      </Alert>
    </div>
  )
}
