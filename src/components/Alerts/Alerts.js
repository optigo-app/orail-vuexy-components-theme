import { Alert, AlertTitle, Box, Button, Collapse, Fade, Grow, IconButton, Slide } from '@mui/material'
import React, { useState } from 'react'
import './Alerts.css';
import { Icon } from '@iconify/react';

export default function Alerts() {

  
  const [open1, setOpen1] = useState(true)
  const [open2, setOpen2] = useState(true)
  const [open3, setOpen3] = useState(true)
  const [open4, setOpen4] = useState(true)


  return (
    <div>
      <h1>Basic Alerts</h1>
      <Alert severity='error' className='alerts'><b>This is an error alert — check it out!</b></Alert>
      <Alert severity='warning' className='alerts'><b>This is an warning alert — check it out!</b></Alert>
      <Alert severity='info' className='alerts'><b>This is an info alert — check it out!</b></Alert>
      <Alert severity='success' className='alerts'><b>This is an success alert — check it out!</b></Alert>

      <h1>Outlined Alerts</h1>
      <Alert variant='outlined' severity='error' className='alerts'>
        <b>This is an error alert — check it out!</b>
      </Alert>
      <Alert variant='outlined' severity='warning' className='alerts'>
        <b>This is an warning alert — check it out!</b>
      </Alert>
      <Alert variant='outlined' severity='info' className='alerts'>
        <b>This is an info alert — check it out!</b>
      </Alert>
      <Alert variant='outlined' severity='success' className='alerts'>
        <b>This is an success alert — check it out!</b>
      </Alert>

      <h1>Filled Alert</h1>
      <Alert variant='filled' severity='error' className='alerts'>
        <b>This is an error alert — check it out!</b>
      </Alert>
      <Alert variant='filled' severity='warning' className='alerts'>
        <b>This is an warning alert — check it out!</b>
      </Alert>
      <Alert variant='filled' severity='info' className='alerts'>
        <b>This is an info alert — check it out!</b>
      </Alert>
      <Alert variant='filled' severity='success' className='alerts'>
        <b>This is an success alert — check it out!</b>
      </Alert>

      <h1>Action Alerts</h1>
      <Alert
        onClose={e => {
          e.preventDefault()
        }}
        className='alerts'
      >
        <b>This is a success alert — check it out!</b>
      </Alert>
      <Alert
        action={
          <Button color='inherit' size='small'>
            Undo
          </Button>
        }
        variant='outlined'
        className='alerts'
      >
        <b>This is a success alert — check it out!</b>
      </Alert>
      <Alert
        action={
          <Button color='inherit' size='small'>
            Undo
          </Button>
        }
        variant='filled'
        className='alerts'
      >
        <b>This is a success alert — check it out!</b>
      </Alert>

      <h1>Description Alerts</h1>
      <Alert severity='error' className='alerts'>
        <AlertTitle>Error</AlertTitle>
        This is an error alert — <strong>check it out!</strong>
      </Alert>
      <Alert severity='warning' className='alerts'>
        <AlertTitle>Warning</AlertTitle>
        This is an warning alert — <strong>check it out!</strong>
      </Alert>
      <Alert severity='info' className='alerts'>
        <AlertTitle>Info</AlertTitle>
        This is an info alert — <strong>check it out!</strong>
      </Alert>
      <Alert severity='success' className='alerts'>
        <AlertTitle>Success</AlertTitle>
        This is an success alert — <strong>check it out!</strong>
      </Alert>

      <h1>Dismissible Alerts</h1>
      <Box sx={{ mb: 6 }}>
        <Collapse in={open1}>
          <Alert className='alerts'
            action={
              <IconButton size='small' color='inherit' aria-label='close' onClick={() => setOpen1(false)}>
                <Icon icon='tabler:x' />
              </IconButton>
            }
          >
            Close me!
          </Alert>
        </Collapse>
        <Button disabled={open1} variant='outlined' sx={{ mt: 2 }} onClick={() => setOpen1(true)}>
          Open Collapse
        </Button>
      </Box>

      <Box sx={{ mb: 6 }}>
        <Fade in={open2} {...(open2 ? { timeout: 700 } : {})}>
          <Alert className='alerts'
            action={
              <IconButton size='small' color='inherit' aria-label='close' onClick={() => setOpen2(false)}>
                <Icon icon='tabler:x' />
              </IconButton>
            }
          >
            Close me!
          </Alert>
        </Fade>
        <Button disabled={open2} variant='outlined' sx={{ mt: 2 }} onClick={() => setOpen2(true)}>
          Open Fade
        </Button>
      </Box>

      <Box sx={{ mb: 6 }}>
        <Grow in={open3} {...(open3 ? { timeout: 700 } : {})}>
          <Alert className='alerts'
            action={
              <IconButton size='small' color='inherit' aria-label='close' onClick={() => setOpen3(false)}>
                <Icon icon='tabler:x' />
              </IconButton>
            }
          >
            Close me!
          </Alert>
        </Grow>
        <Button disabled={open3} variant='outlined' sx={{ mt: 2 }} onClick={() => setOpen3(true)}>
          Open Grow
        </Button>
      </Box>

      <div>
        <Slide in={open4} direction='left' {...(open4 ? { timeout: 500 } : {})}>
          <Alert className='alerts'
            action={
              <IconButton size='small' color='inherit' aria-label='close' onClick={() => setOpen4(false)}>
                <Icon icon='tabler:x' />
              </IconButton>
            }
          >
            Close me!
          </Alert>
        </Slide>
        <Button disabled={open4} variant='outlined' sx={{ mt: 2 }} onClick={() => setOpen4(true)}>
          Open Slide
        </Button>
      </div>

    </div>
  )
}
