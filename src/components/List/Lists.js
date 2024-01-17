import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import ListItemButton from '@mui/material/ListItemButton'
import { Fragment, useState } from 'react'
import { Icon } from '@iconify/react'
import { Avatar, Box, Checkbox, Collapse, Container, Grid, IconButton, ListItemAvatar, ListItemSecondaryAction, ListSubheader, Paper, Switch, Button, Typography, LinearProgress } from '@mui/material';
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
  }
}));

const StyledList = styled(List)(({ theme }) => ({
  padding: "10px 15px 30px 15px !important",
  '& .MuiListItem-container': {
    border: "1px solid rgba(47, 43, 61, 0.16)",
    '&:first-of-type': {
      borderTopLeftRadius: "6px !important",
      borderTopRightRadius: "6px !important"
    },
    '&:last-child': {
      borderBottomLeftRadius: "6px !important",
      borderBottomRightRadius: "6px !important"
    },
    '&:not(:last-child)': {
      borderBottom: 0
    },
    '& .MuiListItem-root': {
      paddingRight: "24px"
    },
    '& .MuiListItemText-root .MuiTypography-root': {
      marginTop: '0 !important',
      fontWeight: '500 !important',
      fontSize: '15px !important',
      lineHeight: '1.467 !important',
      color: 'rgba(47, 43, 61, 0.78) !important',
      opacity: "1",
      '& .MuiTypography-root': {
        fontWeight: 500
      }
    },
    '& .MuiListItem-gutters .MuiBox-root .MuiBox-root': {
      opacity: "0.5 !important",
    },
    '& .MuiButton-contained': {
      color: '#FFF !important',
      backgroundColor: '#7367F0 !important',
      textTransform: "unset !important",
      fontWeight: "500 !important",
      fontSize: "13px !important",
    }
  }
}))

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

  const switchStyle = {
    '&.MuiSwitch-sizeMedium': {
      zIndex: "0 !important",
      verticalAlign: "middle !important",
      marginRight: "-8px !important",
      width: "54px !important",
      height: "42px !important",
      border: "0 !important",
    },
    '& .MuiSwitch-switchBase.MuiSwitch-colorPrimary': {
      top: "6px !important",
      right: "12px !important",

    },
    '& .PrivateSwitchBase-root .MuiSwitch-thumb': {
      right: "0px!important",
      position: "relative!important",
      width: "12px!important",
      height: "12px!important",
      color: "#d5d5d8 !important",
      top: "1px",
    },
    '& .Mui-checked.PrivateSwitchBase-root .MuiSwitch-thumb': {
      right: "8px!important",
      position: "relative!important",
      width: "12px!important",
      height: "12px!important",
      color: "#fff !important",
    },
    '& .MuiSwitch-track': {
      borderRadius: "20px !important",
      backgroundColor: "#fff !important",
      border: "1.5px solid #909090",
    },
    '& PrivateSwitchBase-root +.MuiSwitch-track': {
      opacity: "1 !important",
    },
    '& .Mui-checked.PrivateSwitchBase-root +.MuiSwitch-track': {
      backgroundColor: "#7367f0 !important",
      opacity: "1 !important",
      border: "1.5px solid #7367f0!important",
    }
  }

  const StyledList2 ={
    padding: "10px 15px 30px 15px !important",
    '& .MuiList-root': {
      border: "1px solid #2f2b3d21 !important", 
      borderRadius: "10px !important",
      '& .MuiListItem-root': {
        borderBottom: "1px solid #2f2b3d21 !important", 
        padding: "15px !important",
        '& .MuiListItemText-primary': {
          color: "rgba(47, 43, 61, 0.78) !important",
          fontWeight: "500 !important",
        }
      },
      '& .MuiListItem-root:nth-child(1)': {
        '& .MuiAvatar-root': {
          backgroundColor: "rgba(0, 207, 232, 0.16) !important",
          color: '#00CFE8 !important',
          }
      },
      '& .MuiListItem-root:nth-child(2)': {
        '& .MuiAvatar-root': {
          backgroundColor: "rgba(115, 103, 240, 0.16) !important",
          color: '#7367F0 !important',
          }
      }, 
      '& .MuiListItem-root:nth-child(3)': {
        '& .MuiAvatar-root': {
          backgroundColor: "rgba(40, 199, 111, 0.16) !important",
          color: '#28C76F !important',
          }
      }, 
      '& .MuiListItem-root:nth-child(4)': {
        '& .MuiAvatar-root': {
          backgroundColor: "rgba(234, 84, 85, 0.16) !important",
          color: '#EA5455 !important',
          }
      }, 
      '& .MuiListItem-root:nth-child(5)': {
        '& .MuiAvatar-root': {
          backgroundColor: "rgba(255, 159, 67, 0.16) !important",
          color: '#FF9F43 !important',
          }
      }

    },
    '& .MuiListItem-container': {
      border: "1px solid rgba(47, 43, 61, 0.78)",
      '&:first-of-type': {
        borderTopLeftRadius: "6px",
        borderTopRightRadius: "6px"
      },
      '&:last-child': {
        borderBottomLeftRadius: "6px",
        borderBottomRightRadius: "6px"
      },
      '&:not(:last-child)': {
        borderBottom: 0
      },
      '& .MuiListItem-root': {
        paddingRight: "15px"
      },
      '& .MuiListItemText-root': {
        marginTop: 0,
        '& .MuiTypography-root': {
          fontWeight: 500
        }
      }
    }
  }

  const [stickyChecked, setStickyChecked] = useState(['wifi', 'location']);


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
          <List subheader={<ListSubheader sx={{ fontSize: "0.8203125rem", fontWeight: 500, color: "rgba(47, 43, 61, 0.42)", textTransform: "uppercase", lineHeight: "120%" }}>Settings</ListSubheader>} sx={{ paddingX: 2 }}>
            <ListItem>
              <ListItemIcon>
                <Icon icon='tabler:wifi' fontSize={20} />
              </ListItemIcon>
              <ListItemText primary='Wi-Fi' />
              <ListItemSecondaryAction>
                <SwitchCheckBoxes
                  sx={switchStyle}
                  edge='end'
                  checked={switchChecked.indexOf('wifi') !== -1} onChange={handleToggleSwitch('wifi')} />
              </ListItemSecondaryAction>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Icon icon='tabler:bluetooth' fontSize={20} />
              </ListItemIcon>
              <ListItemText primary='Bluetooth' />
              <ListItemSecondaryAction>
                <SwitchCheckBoxes edge='end' checked={switchChecked.indexOf('bluetooth') !== -1} onChange={handleToggleSwitch('bluetooth')} sx={switchStyle} />
              </ListItemSecondaryAction>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Icon icon='tabler:map-pin' fontSize={20} />
              </ListItemIcon>
              <ListItemText primary='Location' />
              <ListItemSecondaryAction>
                <SwitchCheckBoxes edge='end' checked={switchChecked.indexOf('location') !== -1} onChange={handleToggleSwitch('location')} sx={switchStyle} />
              </ListItemSecondaryAction>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Icon icon='tabler:plane-tilt' fontSize={20} />
              </ListItemIcon>
              <ListItemText primary='Airplane Mode' />
              <ListItemSecondaryAction>
                <SwitchCheckBoxes edge='end' checked={switchChecked.indexOf('airplane') !== -1} onChange={handleToggleSwitch('airplane')} sx={switchStyle} />
              </ListItemSecondaryAction>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Icon icon='tabler:broadcast' fontSize={20} />
              </ListItemIcon>
              <ListItemText primary='Hotspot' />
              <ListItemSecondaryAction>
                <SwitchCheckBoxes edge='end' checked={switchChecked.indexOf('hotspot') !== -1} onChange={handleToggleSwitch('hotspot')} sx={switchStyle} />
              </ListItemSecondaryAction>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Icon icon='tabler:circle-minus' fontSize={20} />
              </ListItemIcon>
              <ListItemText primary='Do not disturb' />
              <ListItemSecondaryAction>
                <SwitchCheckBoxes edge='end' checked={switchChecked.indexOf('do-not-disturb') !== -1} onChange={handleToggle('do-not-disturb')} sx={switchStyle}
                />
              </ListItemSecondaryAction>
            </ListItem>
          </List>
        </Box>
      </Grid>

      <Grid item xs={12} md={4} >
        <Box sx={{ boxShadow: 3, borderRadius: 1 }} m={2}>
          <Box sx={{ fontSize: "18px", fontWeight: 400, padding: 2 }}>Sticky Subheader </Box>
          <List subheader={<li />} sx={{ maxHeight: 300, overflow: 'auto', position: 'relative' }}>
            {[0, 1, 2, 3, 4].map(sectionId => (
              <Box component='li' key={`section-${sectionId}`} sx={{ backgroundColor: 'background.paper' }}>
                <Box component='ul' sx={{ p: 0, backgroundColor: 'inherit' }}>
                  <ListSubheader>{`I'm sticky ${sectionId}`}</ListSubheader>
                  {[0, 1, 2].map(item => (
                    <ListItem key={item - { sectionId } - { item }}>
                      <ListItemText primary={`Item ${item}`} />
                    </ListItem>
                  ))}
                </Box>
              </Box>
            ))}
          </List>
        </Box>
      </Grid>

      <Grid item xs={12} md={4} >
        <Box sx={{ boxShadow: 3, borderRadius: 1 }} m={2}>
          <Box sx={{ fontSize: "18px", fontWeight: 400, padding: 2 }}> Users List</Box>
          <StyledList disablePadding>
            <ListItem>
              <ListItemAvatar>
                <Avatar src='https://cdn-icons-png.flaticon.com/512/3135/3135715.png' alt='Caroline Black' />
              </ListItemAvatar>
              <div>
                <ListItemText primary='Caroline Black' />
                <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
                  <Box sx={{ mr: 3, display: 'flex', alignItems: 'center', '& svg': { mr: 1, color: 'success.main' } }}>
                    <Icon icon='mdi:circle' fontSize='0.625rem' />
                    <Typography variant='caption'>Online</Typography>
                  </Box>
                  <Typography variant='caption' sx={{ color: 'text.disabled' }}>
                    13 minutes ago
                  </Typography>
                </Box>
              </div>
              <ListItemSecondaryAction>
                <Button variant='contained' size='small'>
                  Add
                </Button>
              </ListItemSecondaryAction>
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar src='https://cdn-icons-png.flaticon.com/512/3135/3135715.png' alt='Alfred Copeland' />
              </ListItemAvatar>
              <div>
                <ListItemText primary='Alfred Copeland' />
                <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
                  <Box sx={{ mr: 3, display: 'flex', alignItems: 'center', '& svg': { mr: 1, color: 'warning.main' } }}>
                    <Icon icon='mdi:circle' fontSize='0.625rem' />
                    <Typography variant='caption'>Away</Typography>
                  </Box>
                  <Typography variant='caption' sx={{ color: 'text.disabled' }}>
                    11 minutes ago
                  </Typography>
                </Box>
              </div>
              <ListItemSecondaryAction>
                <Button variant='contained' size='small'>
                  Add
                </Button>
              </ListItemSecondaryAction>
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar src='https://cdn-icons-png.flaticon.com/512/3135/3135715.png' alt='Celia Schneider' />
              </ListItemAvatar>
              <div>
                <ListItemText primary='Celia Schneider' />
                <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
                  <Box sx={{ mr: 3, display: 'flex', alignItems: 'center', '& svg': { mr: 1, color: 'secondary.main' } }}>
                    <Icon icon='mdi:circle' fontSize='0.625rem' />
                    <Typography variant='caption'>Offline</Typography>
                  </Box>
                  <Typography variant='caption' sx={{ color: 'text.disabled' }}>
                    9 minutes ago
                  </Typography>
                </Box>
              </div>

              <ListItemSecondaryAction>
                <Button variant='contained' size='small'>
                  Add
                </Button>
              </ListItemSecondaryAction>
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar src='https://cdn-icons-png.flaticon.com/512/3135/3135715.png' alt='Celia Schneider' />
              </ListItemAvatar>
              <div>
                <ListItemText primary='Max Rogan' />
                <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
                  <Box sx={{ mr: 3, display: 'flex', alignItems: 'center', '& svg': { mr: 1, color: 'error.main' } }}>
                    <Icon icon='mdi:circle' fontSize='0.625rem' />
                    <Typography variant='caption'>In Meeting</Typography>
                  </Box>
                  <Typography variant='caption' sx={{ color: 'text.disabled' }}>
                    28 minutes ago
                  </Typography>
                </Box>
              </div>

              <ListItemSecondaryAction>
                <Button variant='contained' size='small'>
                  Add
                </Button>
              </ListItemSecondaryAction>
            </ListItem>
          </StyledList>
        </Box>
      </Grid>

      <Grid item xs={12} md={4} >
        <Box sx={{ boxShadow: 3, borderRadius: 1 }} m={2}>
          <Box sx={{ fontSize: "18px", fontWeight: 400, padding: 2 }}> Users List</Box>
        <Box sx={StyledList2}>
        <List disablePadding>
            <ListItem>
              <ListItemAvatar>
                <Avatar skin='light' variant='rounded' color='info' sx={{ height: 36, width: 36 }}>
                  <Icon icon='tabler:brand-react' />
                </Avatar>
              </ListItemAvatar>
              <Box sx={{ width: '100%' }}>
                <ListItemText primary='React is a JavaScript library for building user interfaces' />
                <LinearProgress color='info' value={90} sx={{ height: 5 }} variant='determinate' />
              </Box>
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar skin='light' variant='rounded' sx={{ height: 36, width: 36 }}>
                  <Icon icon='tabler:brand-bootstrap' />
                </Avatar>
              </ListItemAvatar>
              <Box sx={{ width: '100%' }}>
                <ListItemText primary='Bootstrap is an open source toolkit' />
                <LinearProgress value={75} sx={{ height: 5 }} variant='determinate' />
              </Box>
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar skin='light' variant='rounded' color='success' sx={{ height: 36, width: 36 }}>
                  <Icon icon='tabler:brand-vue' />
                </Avatar>
              </ListItemAvatar>
              <Box sx={{ width: '100%' }}>
                <ListItemText primary='Vue.js is the Progressive JavaScript Framework' />
                <LinearProgress color='success' value={85} sx={{ height: 5 }} variant='determinate' />
              </Box>
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar skin='light' variant='rounded' color='error' sx={{ height: 36, width: 36 }}>
                  <Icon icon='tabler:brand-angular' />
                </Avatar>
              </ListItemAvatar>
              <Box sx={{ width: '100%' }}>
                <ListItemText primary='Angular implements Functional Programming concepts' />
                <LinearProgress color='error' value={60} sx={{ height: 5 }} variant='determinate' />
              </Box>
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar skin='light' variant='rounded' color='warning' sx={{ height: 36, width: 36 }}>
                  <Icon icon='tabler:brand-javascript' />
                </Avatar>
              </ListItemAvatar>
              <Box sx={{ width: '100%' }}>
                <ListItemText primary='JavaScript is the programming language of the Web' />
                <LinearProgress color='warning' value={70} sx={{ height: 5 }} variant='determinate' />
              </Box>
            </ListItem>
          </List>
        </Box>
        </Box>
      </Grid>

    </Grid>
  )
}

export default Lists