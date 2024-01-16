import React, { useState } from 'react'

import Menu from '@mui/material/Menu'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import { List, ListItem, ListItemButton, ListItemText } from '@mui/material'


const options = [
    'Show some love to MUI',
    'Show all notification content',
    'Hide sensitive notification content',
    'Hide all notification content'
]

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
        </div>
    )
}
