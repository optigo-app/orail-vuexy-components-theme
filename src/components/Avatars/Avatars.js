import React from 'react'
import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar'

import MuiAvatar from '@mui/material/Avatar'

import demo1 from '../../assets/Images/demo1.jpeg'
import demo2 from '../../assets/Images/demo2.jpg'
import demo3 from '../../assets/Images/demo3.jpg'
import demo4 from '../../assets/Images/demo4.jpeg'
import demo5 from '../../assets/Images/demo5.jpg'
import IconifyIcon from '../icon'
import { AvatarGroup, Badge, Tooltip } from '@mui/material'
import styled from '@emotion/styled'

const BadgeContentSpan = styled('span')(({ theme }) => ({
  width: 8,
  height: 8,
  borderRadius: '50%',
  backgroundColor: 'green',
  boxShadow: '0 0 0 2px 2px'
}))


export default function Avatars() {
  return (
    <div>
      <h1>Image Avatars</h1>
      <Box className='demo-space-x' sx={{ display: 'flex' }}>
        <Avatar src={demo1} alt='Victor Anderson' style={{ margin: '10px' }} />
        <Avatar src={demo2} alt='Alice Cobb' style={{ margin: '10px' }} />
        <Avatar src={demo3} alt='Jeffery Warner' style={{ margin: '10px' }} />
      </Box>

      <h1>Letter Avatars</h1>
      <Box className='demo-space-x' sx={{ display: 'flex' }}>
        <MuiAvatar>H</MuiAvatar>
        <Avatar>N</Avatar>
        <Avatar skin='light' color='error'>
          OP
        </Avatar>
        <Avatar skin='light-static' color='error'>
          AB
        </Avatar>
      </Box>

      <h1>Variants</h1>
      <Box className='demo-space-x' sx={{ display: 'flex' }}>
        <Avatar variant='square'>
          <IconifyIcon icon='tabler:bell' />
        </Avatar>
        <Avatar color='success' variant='rounded'>
          <IconifyIcon icon='tabler:device-floppy' />
        </Avatar>
        <Avatar skin='light' variant='square'>
          <IconifyIcon icon='tabler:bell' />
        </Avatar>
        <Avatar skin='light' color='success' variant='rounded'>
          <IconifyIcon icon='tabler:device-floppy' />
        </Avatar>
      </Box>

      <h1>Avatars With Badge</h1>
      <Box className='demo-space-x' sx={{ display: 'flex' }}>
        <Badge
          overlap='circular'
          badgeContent={<BadgeContentSpan />}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right'
          }}
          style={{ margin: '10px' }}

        >
          <Avatar alt='Marie Garza' src={demo2} />
        </Badge>
        <Badge
          overlap='circular'
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right'
          }}
          badgeContent={
            <Avatar
              alt='Marie Garza'
              src={demo1}
            // sx={{ width: 22, height: 22, border: theme => 2px solid {theme.palette.background.paper} }}
            />
          }
          style={{ margin: '10px' }}
        >
          <Avatar alt='Olivia Sparks' src={demo2} />
        </Badge>
      </Box>

      <h1>Grouped Avatars With PullUp</h1>
      <AvatarGroup max={4}>
        <Avatar src={demo1} alt='Victor Anderson' />
        <Avatar src={demo2} alt='Alice Cobb' />
        <Avatar src={demo3} alt='Jeffery Warner' />
        <Avatar src={demo1} alt='Victor Anderson' />
        <Avatar src={demo2} alt='Alice Cobb' />
        <Avatar src={demo3} alt='Jeffery Warner' />
      </AvatarGroup>

      <h1>Grouped Avatars With PullUp & Tooltip</h1>
      <AvatarGroup className='pull-up' max={4}>
        <Tooltip title='Olivia Sparks'>
          <Avatar src={demo4} alt='Olivia Sparks' />
        </Tooltip>
        <Tooltip title='Howard Lloyd'>
          <Avatar src={demo3} alt='Howard Lloyd' />
        </Tooltip>
        <Tooltip title='Hallie Richards'>
          <Avatar src={demo2} alt='Hallie Richards' />
        </Tooltip>
        <Tooltip title='Alice Cobb'>
          <Avatar src={demo1} alt='Alice Cobb' />
        </Tooltip>
        <Tooltip title='Jeffery Warner'>
          <Avatar src={demo5} alt='Jeffery Warner' />
        </Tooltip>
      </AvatarGroup>
    </div >
  )
}
