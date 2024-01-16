import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import ListItemButton from '@mui/material/ListItemButton'
import { Fragment, useState } from 'react'
import { Icon } from '@iconify/react'
import { Avatar, Box, Checkbox, Collapse, Container, Grid, IconButton, ListItemAvatar, ListItemSecondaryAction, ListSubheader, Paper, Switch } from '@mui/material';
import { makeStyles, styled } from '@mui/styles';

// ** Custom Component Imports

// backgroundColor: "#7367f014 !important",
// color: "#7367F0 !important",

const ListItems = styled(ListItem)(({ theme }) => ({
  '&:hover': {
    backgroundColor: "#7367f014 !important",
    color: "#7367F0 !important",
    '& svg': {
      color: "#7367F0 !important",
    }
  },
}));

const SelectedListItems = styled(Box)(({ theme }) => ({
  '& .listItemSelected': {
    backgroundColor: "#7367F0 !important",
    color: "#fff !important",
    '& svg': {
      color: "#fff   !important",
    }
  },
  '&:hover': {
    backgroundColor: "#7367f014 !important",
    color: "#7367F0 !important",
    '& svg': {
      color: "#7367F0 !important",
    }
  },
}));

const CheckBoxes = styled(Checkbox)(({ theme }) => ({
  color: "#a8a6ae !important", 
  '& span': {
  },
  "& input": {
},
'&.selected': {
  color: "#7367F0 !important", 
}
}));

const SwitchCheckBoxes = styled(Switch)(({ theme }) => ({
  zIndex: "0",
  verticalAlign: "middle",
  marginRight: "-8px",
  width: "54px",
  height: "42px",  
  border: "1px solid #d5d5d8 !important",
'& span': {
  // backgroundColor: "transparent !important",
  // background: "transparent !important",
  // border: "1px solid #d5d5d8 !important",
  // borderRadius: "10px !important",
  // width: '54px !important',
  // height: '42px !important',
  // zIndex: "0",
  // verticalAlign: "middle",
  // marginRight: "-8px",
  // width: "54px",
  // height: "42px",

}
}));



const Lists = () => {
  const [open, setOpen] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [checked, setChecked] = useState([0]);
  const [switchChecked, setSwitchChecked] = useState(['wifi', 'location'])

  const handleClick = () => {
    setOpen(!open)
  }

  const handleListItemClick = index => {
    setSelectedIndex(index)
  }


  const handleToggle = value => () => {
    const currentIndex = checked.indexOf(value)
    const newChecked = [...checked]
    if (currentIndex === -1) {
      newChecked.push(value)
    } else {
      newChecked.splice(currentIndex, 1)
    }
    setChecked(newChecked)
  }


  const handleToggleSwitch = value => () => {
    const currentIndex = switchChecked.indexOf(value)
    const newChecked = [...switchChecked]
    if (currentIndex === -1) {
      newChecked.push(value)
    } else {
      newChecked.splice(currentIndex, 1)
    }
    setSwitchChecked(newChecked)
  }


  return (
    <Grid className='match-height' container sx={{ marginY: 5, padding: "0 !important" }} >
      <Grid item xs={12} md={4}  >
        <Box sx={{ boxShadow: 3, borderRadius: 1 }} m={2}>
          <Box sx={{ fontSize: "18px", fontWeight: 400, padding: 2 }}>Simple List</Box>
          <List component='nav' aria-label='main mailbox'>
            <ListItems disablePadding >
              <ListItemButton>
                <ListItemIcon sx={{ minWidth: 30 }}>
                  <Icon icon='tabler:mail' fontSize={20} />
                </ListItemIcon>
                <ListItemText primary='Inbox' sx={{ '&:hover': "background-color: rgba(115, 103, 240, 0.08) !important" }} />
              </ListItemButton>
            </ListItems>
            <ListItems disablePadding >
              <ListItemButton>
                <ListItemIcon sx={{ minWidth: 30 }}>
                  <Icon icon='tabler:copy' fontSize={20} />
                </ListItemIcon>
                <ListItemText primary='Draft' />
              </ListItemButton>
            </ListItems>
          </List>
          <Divider sx={{ m: '0 !important' }} />
          <List component='nav' aria-label='secondary mailbox'>
            <ListItems disablePadding >
              <ListItemButton>
                <ListItemIcon sx={{ minWidth: 30 }} >
                  <Icon icon='tabler:clock' fontSize={20} />
                </ListItemIcon>
                <ListItemText primary='Snoozed' />
              </ListItemButton>
            </ListItems>
            <ListItems disablePadding>
              <ListItemButton component='a' href='#simple-list'>
                <ListItemIcon sx={{ minWidth: 30 }}>
                  <Icon icon='tabler:alert-circle' fontSize={20} />
                </ListItemIcon>
                <ListItemText primary='Spam' />
              </ListItemButton>
            </ListItems>
          </List>
        </Box>
      </Grid>

      <Grid item xs={12} md={4}>
        <Box sx={{ boxShadow: 3, borderRadius: 1 }} m={2}>
          <Box sx={{ fontSize: "18px", fontWeight: 400, padding: 2 }}>Nested List </Box>
          <List component='nav' aria-label='main mailbox'>
            <ListItems disablePadding >
              <ListItemButton onClick={handleClick}>
                <ListItemIcon sx={{ minWidth: 30 }}>
                  <Icon icon='tabler:mail' fontSize={20} />
                </ListItemIcon>
                <ListItemText primary='Inbox' />
                <Icon icon={open ? 'tabler:chevron-up' : 'tabler:chevron-down'} />
              </ListItemButton>
            </ListItems>
            <Collapse in={open} timeout='auto' unmountOnExit>
              <List component='div' disablePadding>
                <ListItems disablePadding >
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon sx={{ mr: 0, minWidth: 30 }}>
                      <Icon icon='tabler:clock-play' fontSize={20} />
                    </ListItemIcon>
                    <ListItemText primary='Scheduled' />
                  </ListItemButton>
                </ListItems>
              </List>
            </Collapse>
            <ListItems disablePadding >
              <ListItemButton>
                <ListItemIcon sx={{ minWidth: 30 }}>
                  <Icon icon='tabler:copy' fontSize={20} />
                </ListItemIcon>
                <ListItemText primary='Draft' />
              </ListItemButton>
            </ListItems>
          </List>
          <Divider sx={{ m: '0 !important' }} />
          <List component='nav' aria-label='secondary mailbox'>
            <ListItems disablePadding >
              <ListItemButton>
                <ListItemIcon sx={{ minWidth: 30 }}>
                  <Icon icon='tabler:copy' fontSize={20} />
                </ListItemIcon>
                <ListItemText primary='Snoozed' />
              </ListItemButton>
            </ListItems>
            <ListItems disablePadding >
              <ListItemButton>
                <ListItemIcon sx={{ minWidth: 30 }}>
                  <Icon icon='tabler:alert-circle' fontSize={20} />
                </ListItemIcon>
                <ListItemText primary='Spam' />
              </ListItemButton>
            </ListItems>
          </List>
        </Box>
      </Grid>

      <Grid item xs={12} md={4}>
        <Box sx={{ boxShadow: 3, borderRadius: 1 }} m={2}>
          <Box sx={{ fontSize: "18px", fontWeight: 400, padding: 2 }} mx={1}>Dense List </Box>
          <List dense>
            <ListItems disablePadding >
              <ListItemButton>
                <ListItemIcon>
                  <Icon icon='tabler:mail' fontSize='1.125rem' />
                </ListItemIcon>
                <ListItemText primary='Inbox' />
              </ListItemButton>
            </ListItems>
            <ListItems disablePadding >
              <ListItemButton>
                <ListItemIcon>
                  <Icon icon='tabler:copy' fontSize='1.125rem' />
                </ListItemIcon>
                <ListItemText primary='Draft' />
              </ListItemButton>
            </ListItems>
          </List>
          <Divider sx={{ m: '0 !important' }} />
          <List dense>
            <ListItems disablePadding >
              <ListItemButton>
                <ListItemIcon>
                  <Icon icon='tabler:clock' fontSize='1.125rem' />
                </ListItemIcon>
                <ListItemText primary='Snoozed' />
              </ListItemButton>
            </ListItems>
            <ListItems disablePadding >
              <ListItemButton>
                <ListItemIcon>
                  <Icon icon='tabler:alert-circle' fontSize='1.125rem' />
                </ListItemIcon>
                <ListItemText primary='Spam' />
              </ListItemButton>
            </ListItems>
          </List>
        </Box>
      </Grid>

      <Grid item xs={12} md={4} >
        <Box sx={{ boxShadow: 3, borderRadius: 1 }} m={2}>
          <Box sx={{ fontSize: "18px", fontWeight: 400, padding: 2 }}>List with Secondary Text</Box>
          <List>
            <ListItems>
              <ListItemAvatar>
                <Avatar src='https://cdn-icons-png.flaticon.com/512/3135/3135715.png' alt='Caroline Black' sx={{ height: 36, width: 36 }} />
              </ListItemAvatar>
              <ListItemText primary='Caroline Black' secondary='Sweet dessert brownie.' />
              <ListItemSecondaryAction>
                <IconButton edge='end'>
                  <Icon icon='tabler:plus' />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItems>
            <ListItems>
              <ListItemAvatar>
                <Avatar src='https://cdn-icons-png.flaticon.com/512/3135/3135715.png' alt='Alfred Copeland' sx={{ height: 36, width: 36 }} />
              </ListItemAvatar>
              <ListItemText primary='Alfred Copeland' secondary='Pudding pie tiramisu.' />
              <ListItemSecondaryAction>
                <IconButton edge='end'>
                  <Icon icon='tabler:plus' />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItems>
            <ListItems>
              <ListItemAvatar>
                <Avatar src='https://cdn-icons-png.flaticon.com/512/3135/3135715.png' alt='Celia Schneider' sx={{ height: 36, width: 36 }} />
              </ListItemAvatar>
              <ListItemText primary='Celia Schneider' secondary='Muffin pie chupa chups.' />
              <ListItemSecondaryAction>
                <IconButton edge='end'>
                  <Icon icon='tabler:plus' />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItems>
          </List>
        </Box>
      </Grid>

      <Grid item xs={12} md={4} >
        <Box sx={{ boxShadow: 3, borderRadius: 1 }} m={2}>
          <Box sx={{ fontSize: "18px", fontWeight: 400, padding: 2 }}>Selected List Item</Box>
          <List>
            <SelectedListItems>
              <ListItems disablePadding className={` ${selectedIndex === 0 && "listItemSelected"}`}>
                <ListItemButton selected={selectedIndex === 0} onClick={() => handleListItemClick(0)}>
                  <ListItemAvatar>
                    <Avatar src='https://cdn-icons-png.flaticon.com/512/3135/3135715.png' alt='Caroline Black' sx={{ height: 32, width: 32 }} />
                  </ListItemAvatar>
                  <ListItemText primary='Caroline Black' />
                  <ListItemSecondaryAction>
                    <IconButton edge='end'>
                      <Icon icon='tabler:message' fontSize={20} />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItemButton>
              </ListItems>
            </SelectedListItems>
            <SelectedListItems>
              <ListItems disablePadding className={` ${selectedIndex === 1 && "listItemSelected"}`} onClick={() => handleListItemClick(1)}>
                <ListItemButton selected={selectedIndex === 1} onClick={() => handleListItemClick(1)}>
                  <ListItemAvatar>
                    <Avatar src='https://cdn-icons-png.flaticon.com/512/3135/3135715.png' alt='Alfred Copeland' sx={{ height: 32, width: 32 }} />
                  </ListItemAvatar>
                  <ListItemText primary='Alfred Copeland' />
                  <ListItemSecondaryAction>
                    <IconButton edge='end'>
                      <Icon icon='tabler:message' fontSize={20} />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItemButton>
              </ListItems>
            </SelectedListItems>
            <SelectedListItems>
              <ListItems disablePadding className={` ${selectedIndex === 2 && "listItemSelected"}`} onClick={() => handleListItemClick(2)}>
                <ListItemButton selected={selectedIndex === 2} onClick={() => handleListItemClick(2)}>
                  <ListItemAvatar>
                    <Avatar src='https://cdn-icons-png.flaticon.com/512/3135/3135715.png' alt='Celia Schneider' sx={{ height: 32, width: 32 }} />
                  </ListItemAvatar>
                  <ListItemText primary='Celia Schneider' />
                  <ListItemSecondaryAction>
                    <IconButton edge='end'>
                      <Icon icon='tabler:message' fontSize={20} />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItemButton>
              </ListItems>
            </SelectedListItems>
          </List>
        </Box>
      </Grid>

      <Grid item xs={12} md={4} >
        <Box sx={{ boxShadow: 3, borderRadius: 1 }} m={2}>
          <Box sx={{ fontSize: "18px", fontWeight: 400, padding: 2 }}>List with Checkbox</Box>
          <List>
            <ListItems disablePadding>
              <ListItemButton onClick={handleToggle(0)}>
                <ListItemAvatar>
                  <Avatar src='https://cdn-icons-png.flaticon.com/512/3135/3135715.png' alt='Caroline Black' sx={{ height: 32, width: 32 }} />
                </ListItemAvatar>
                <ListItemText id='checkbox-list-label-0' primary='Caroline Black' />
                <ListItemSecondaryAction>
                  <CheckBoxes
                    edge='end'
                    tabIndex={-1}
                    disableRipple
                    onChange={handleToggle(0)}
                    checked={checked.indexOf(0) !== -1}
                    inputProps={{ 'aria-labelledby': 'checkbox-list-label-0' }}
                    className={`${checked.indexOf(0) !== -1 && 'selected'}`}
                  />
                </ListItemSecondaryAction>
              </ListItemButton>
            </ListItems>
            <ListItems disablePadding>
              <ListItemButton onClick={handleToggle(1)}>
                <ListItemAvatar>
                  <Avatar src='https://cdn-icons-png.flaticon.com/512/3135/3135715.png' alt='Alfred Copeland' sx={{ height: 32, width: 32 }} />
                </ListItemAvatar>
                <ListItemText id='checkbox-list-label-1' primary='Alfred Copeland' />
                <ListItemSecondaryAction>
                  <CheckBoxes
                    edge='end'
                    tabIndex={-1}
                    disableRipple
                    onChange={handleToggle(1)}
                    checked={checked.indexOf(1) !== -1}
                    inputProps={{ 'aria-labelledby': 'checkbox-list-label-1' }}
                    className={`${checked.indexOf(1) !== -1 && 'selected'}`}
                  />
                </ListItemSecondaryAction>
              </ListItemButton>
            </ListItems>
            <ListItems disablePadding>
              <ListItemButton onClick={handleToggle(2)}>
                <ListItemAvatar>
                  <Avatar src='https://cdn-icons-png.flaticon.com/512/3135/3135715.png' alt='Celia Schneider' sx={{ height: 32, width: 32 }} />
                </ListItemAvatar>
                <ListItemText id='checkbox-list-label-2' primary='Celia Schneider' />
                <ListItemSecondaryAction>
                  <CheckBoxes
                    edge='end'
                    tabIndex={-1}
                    disableRipple 
                    onChange={handleToggle(2)}
                    checked={checked.indexOf(2) !== -1}
                    inputProps={{ 'aria-labelledby': 'checkbox-list-label-2' }}
                    className={`${checked.indexOf(2) !== -1 && 'selected'}`}
                  />
                </ListItemSecondaryAction>
              </ListItemButton>
            </ListItems>
          </List>
        </Box>
      </Grid>

      <Grid item xs={12} md={4} >
        <Box sx={{ boxShadow: 3, borderRadius: 1 }} m={2}>
          <Box sx={{ fontSize: "18px", fontWeight: 400, padding: 2 }}>List with Switch</Box>
          {/* <Box sx={{ fontSize: "0.8203125rem", fontWeight: 500, color: "rgba(47, 43, 61, 0.42)", paddingX: 2, paddingBottom: 2}}>SETTINGS</Box> */}
          <List subheader={<ListSubheader sx={{ fontSize: "0.8203125rem", fontWeight: 500, color: "rgba(47, 43, 61, 0.42)",textTransform: "uppercase", lineHeight: "120%"  }}>Settings</ListSubheader>} sx={{paddingX: 2}}>
      <ListItem>
        <ListItemIcon>
          <Icon icon='tabler:wifi' fontSize={20} />
        </ListItemIcon>
        <ListItemText primary='Wi-Fi' />
        <ListItemSecondaryAction>
          <SwitchCheckBoxes edge='end' checked={switchChecked.indexOf('wifi') !== -1} onChange={handleToggleSwitch('wifi')} />
        </ListItemSecondaryAction>
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <Icon icon='tabler:bluetooth' fontSize={20} />
        </ListItemIcon>
        <ListItemText primary='Bluetooth' />
        <ListItemSecondaryAction>
          <SwitchCheckBoxes edge='end' checked={switchChecked.indexOf('bluetooth') !== -1} onChange={handleToggleSwitch('bluetooth')} />
        </ListItemSecondaryAction>
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <Icon icon='tabler:map-pin' fontSize={20} />
        </ListItemIcon>
        <ListItemText primary='Location' />
        <ListItemSecondaryAction>
          <SwitchCheckBoxes edge='end' checked={switchChecked.indexOf('location') !== -1} onChange={handleToggleSwitch('location')} />
        </ListItemSecondaryAction>
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <Icon icon='tabler:plane-tilt' fontSize={20} />
        </ListItemIcon>
        <ListItemText primary='Airplane Mode' />
        <ListItemSecondaryAction>
          <SwitchCheckBoxes edge='end' checked={switchChecked.indexOf('airplane') !== -1} onChange={handleToggleSwitch('airplane')} />
        </ListItemSecondaryAction>
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <Icon icon='tabler:broadcast' fontSize={20} />
        </ListItemIcon>
        <ListItemText primary='Hotspot' />
        <ListItemSecondaryAction>
          <SwitchCheckBoxes edge='end' checked={switchChecked.indexOf('hotspot') !== -1} onChange={handleToggleSwitch('hotspot')} />
        </ListItemSecondaryAction>
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <Icon icon='tabler:circle-minus' fontSize={20} />
        </ListItemIcon>
        <ListItemText primary='Do not disturb' />
        <ListItemSecondaryAction>
          <SwitchCheckBoxes
            edge='end'
            checked={switchChecked.indexOf('do-not-disturb') !== -1}
            onChange={handleToggle('do-not-disturb')}
          />
        </ListItemSecondaryAction>
      </ListItem>
    </List>
        </Box>
      </Grid>

    </Grid>
  )
}

export default Lists