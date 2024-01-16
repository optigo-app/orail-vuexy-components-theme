import React, { useEffect, useRef, useState } from 'react'

import Menu from '@mui/material/Menu'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import { IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'

import Grow from '@mui/material/Grow'
import Paper from '@mui/material/Paper'
import Popper from '@mui/material/Popper'
import ClickAwayListener from '@mui/material/ClickAwayListener'
import IconifyIcon from '../icon'

const options = [
    'Show some love to MUI',
    'Show all notification content',
    'Hide sensitive notification content',
    'Hide all notification content'
]



const options2 = [
    'None',
    'Atria',
    'Callisto',
    'Dione',
    'Ganymede',
    'Hangouts Call',
    'Luna',
    'Oberon',
    'Phobos',
    'Pyxis',
    'Sedna',
    'Titania',
    'Triton',
    'Umbriel'
]

const ITEM_HEIGHT = 48


export default function MenuList() {

    const [anchorEl, setAnchorEl] = useState(null)
    const handleClick = event => {
        setAnchorEl(event.currentTarget)
    }
    const handleClose = () => {
        setAnchorEl(null)
    }

    const [selectedIndex, setSelectedIndex] = useState(1)
    const [anchorEl2, setAnchorEl2] = useState(null)
    const handleClickListItem = event => {
        setAnchorEl(event.currentTarget)
    }
    const handleMenuItemClick = (event, index) => {
        setAnchorEl(null)
        setSelectedIndex(index)
    }
    const handleClose2 = () => {
        setAnchorEl2(null)
    }

    const [anchorEl3, setAnchorEl3] = useState(null)

    const handleClick3 = event => {
        setAnchorEl3(event.currentTarget)
    }

    const handleClose3 = () => {
        setAnchorEl3(null)
    }


    const [anchorEl4, setAnchorEl4] = useState(null)
    const handleClick4 = event => {
        setAnchorEl4(event.currentTarget)
    }
    const handleClose4 = () => {
        setAnchorEl4(null)
    }

    return (
        <div>
            <h1>Simple Menu</h1>
            <Button variant='outlined' aria-controls='simple-menu' aria-haspopup='true' onClick={handleClick}>
                Open Menu
            </Button>
            <Menu keepMounted id='simple-menu' anchorEl={anchorEl} onClose={handleClose} open={Boolean(anchorEl)}>
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>

            <h1>Selected Menu</h1>
            <List component='nav' sx={{ p: 0 }} aria-label='Device settings'>
                <ListItem
                    disablePadding
                    aria-haspopup='true'
                    aria-controls='lock-menu'
                    onClick={handleClickListItem}
                    aria-label='when device is locked'
                >
                    <ListItemButton>
                        <ListItemText primary='When device is locked' secondary={options[selectedIndex]} />
                    </ListItemButton>
                </ListItem>
            </List>
            <Menu id='lock-menu' anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
                {options.map((option, index) => (
                    <MenuItem
                        key={option}
                        disabled={index === 0}
                        selected={index === selectedIndex}
                        onClick={event => handleMenuItemClick(event, index)}
                    >
                        {option}
                    </MenuItem>
                ))}
            </Menu>


            <Button variant='outlined' aria-haspopup='true' onClick={handleClick3} aria-controls='customized-menu' style={{ margin: '10px' }}>
                Open Menu
            </Button>
            <Menu
                keepMounted
                elevation={0}
                anchorEl={anchorEl3}
                id='customized-menu'
                onClose={handleClose3}
                open={Boolean(anchorEl3)}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center'
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center'
                }}
            >
                <MenuItem>
                    <ListItemIcon>
                        <IconifyIcon icon='tabler:send' fontSize={20} />
                    </ListItemIcon>
                    <ListItemText primary='Sent mail' />
                </MenuItem>
                <MenuItem>
                    <ListItemIcon>
                        <IconifyIcon icon='tabler:mail-opened' fontSize={20} />
                    </ListItemIcon>
                    <ListItemText primary='Drafts' />
                </MenuItem>
                <MenuItem>
                    <ListItemIcon>
                        <IconifyIcon icon='tabler:inbox' fontSize={20} />
                    </ListItemIcon>
                    <ListItemText primary='Inbox' />
                </MenuItem>
            </Menu>

            <h1>Max Height Menu</h1>
            <IconButton aria-label='more' aria-controls='long-menu' aria-haspopup='true' onClick={handleClick4}>
                <IconifyIcon icon='tabler:dots-vertical' />
            </IconButton>
            <Menu
                keepMounted
                id='long-menu'
                anchorEl={anchorEl4}
                onClose={handleClose4}
                open={Boolean(anchorEl4)}
                PaperProps={{
                    style: {
                        maxHeight: ITEM_HEIGHT * 4.5
                    }
                }}
            >
                {options2.map(option => (
                    <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
                        {option}
                    </MenuItem>
                ))}
            </Menu>
        </div >
    )
}
