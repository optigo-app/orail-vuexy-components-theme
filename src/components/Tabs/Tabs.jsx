import React, { useState } from 'react';
import { Avatar, Box, Checkbox, Collapse, Container, List, Grid, Tab, IconButton, ListItemAvatar, ListItemSecondaryAction, ListSubheader, Paper, Switch, Button, Typography, LinearProgress } from '@mui/material';
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import TabContext from '@mui/lab/TabContext'
import { Icon } from '@iconify/react';
import styled from 'styled-components';
import MuiTabList from '@mui/lab/TabList'

const tabRippleLineCss = {
    '& .MuiTabs-indicator': {
        backgroundColor: "#7367F0 !important"
    },
    '& .MuiTab-labelIcon': {
        color: "#7367F0 !important",
        textTransform: "unset !important",
        fontWeight: 600,
        opacity: "0.8",
        '& .MuiTab-iconWrapper': {
            fontSize: "22px !important",
            fontWeight: 400,
        },
    },

}

const TabLists = styled(TabList)(({ theme }) => ({
    borderBottom: '0 !important',
    '&, & .MuiTabs-scroller': {
        boxSizing: 'content-box',
        padding: 2,
        margin: 2,
    },
    '& .MuiTabs-indicator': {
        display: 'none'
    },
    '& .Mui-selected': {
        boxShadow: "0px 2px 6px 0px rgba(47, 43, 61, 0.14)",
        backgroundColor: "#7367F0",
        color: "#fff !important",
    },
    '& .MuiTab-root': {
        lineHeight: 1,
        borderRadius: "6px",
        transition: "0.4s ease",
        margin: "0 5px !important",
        '&:hover': {
            // color: "#7367F0 !important",
            // backgroundColor: "#fff !important"
        }
    }
}));

const commonRippleLine = {
    '& .MuiTabs-fixed': {
        position: "relative",
        '&::before': {
            content: `""`,
            position: "absolute",
            bottom: 0,
            left: 0,
            height: "1px",
            width: "100%",
            backgroundColor: "#dedde0"
        }
    }

}

const paddingRemoveTab = {
    '& .MuiTab-textColorPrimary': {
        padding: "0 !important",
        minHeight: "38px",
        textTransform: "unset"
    }
}

const tabType4 = {
    '& .MuiTabs-vertical': {
        minWidth: "20% !important",
        width: "20% !important"
    },
    '& .MuiTabs-root.MuiTabs-vertical ~ .MuiTabPanel-root': {
        minWidth: "80% !important",
        width: "80% !important",
    },
    '& .MuiTab-textColorPrimary': {
        textTransform: "unset !important",
    },
    '& .Mui-selected': {
        color: "#7367F0",
    }

}

const TabList5 = {
    borderRight: 0,
    '&, & .MuiTabs-scroller': {
        boxSizing: 'content-box',
        // padding: theme.spacing(1.25, 1.25, 2),
        // margin: {theme.spacing(-1.25, -1.25, -2)} !important
    },
    '& .MuiTabs-indicator': {
        display: 'none'
    },
    '& .Mui-selected': {
        // boxShadow: theme.shadows[2],
        backgroundColor: '#7367F0',
        color: 'white !important'
    },
    '& .MuiTab-root': {
        lineHeight: 1,
        borderRadius: 2,
        '&:hover': {
            //   color: theme.palette.primary.main
        }
    },
    '& .css-1g4ac1o-MuiTabs-root': {
        overflow: 'visible!important'
    },
    '& .css-1h9z7r5-MuiButtonBase-root-MuiTab-root': {
        width: '150px',
    }
}

const Tabs = () => {

    const [tabSecvalue1, setTabSecvalueValue1] = useState('1');
    const [tabSecvalue2, setTabSecvalueValue2] = useState('1');
    const [tabSecvalue3, setTabSecvalueValue3] = useState('1');
    const [tabSecvalue4, setTabSecvalueValue4] = useState('1');
    const [value, setValue] = useState('1')
    const [value6, setValue6] = useState('1')
    const [value7, setValue7] = useState('1')

    const handleChange7 = (event, newValue) => {
        setValue7(newValue)
    }

    const handleChange6 = (event, newValue) => {
        setValue6(newValue)
    }

    const handleChangeTabSec1 = (event, newValue) => {
        setTabSecvalueValue1(newValue)
    }

    const handleChangeTabSec2 = (event, newValue) => {
        setTabSecvalueValue2(newValue)
    }

    const handleChangeTabSec3 = (event, newValue) => {
        setTabSecvalueValue3(newValue)
    }

    const handleChangeTabSec4 = (event, newValue) => {
        setTabSecvalueValue4(newValue)
    }


    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

    return (
        <Grid className='match-height' container sx={{ marginY: 5, padding: "0 !important" }} >

            <Grid item xs={12} md={4}>
                <Box sx={{ boxShadow: 3, borderRadius: 1, padding: 2, ...commonRippleLine }} m={2}>
                    <Box sx={{ fontSize: "18px", fontWeight: 400, padding: 2 }}>Tabs</Box>
                    <TabContext value={tabSecvalue1}>
                        <TabList
                            textColor='secondary'
                            onChange={handleChangeTabSec1}
                            indicatorColor='secondary'
                            aria-label='secondary tabs example'
                        // variant='fullWidth' 
                        // centered 
                        >
                            <Tab value='1' label='Tab 1' />
                            <Tab value='2' label='Tab 2' />
                            <Tab
                                // disabled 
                                value='3'
                                label='Tab 3'
                            />
                        </TabList>
                        <TabPanel value='1'>
                            <Typography>
                                Cake apple pie chupa chups biscuit liquorice tootsie roll liquorice sugar plum. Cotton candy wafer wafer jelly
                                cake caramels brownie gummies.
                            </Typography>
                        </TabPanel>
                        <TabPanel value='2'>
                            <Typography>
                                Chocolate bar carrot cake candy canes sesame snaps. Cupcake pie gummi bears jujubes candy canes. Chupa chups
                                sesame snaps halvah.
                            </Typography>
                        </TabPanel>
                        <TabPanel value='3'>
                            <Typography>
                                Danish tiramisu jujubes cupcake chocolate bar cake cheesecake chupa chups. Macaroon ice cream tootsie roll
                                carrot cake gummi bears.
                            </Typography>
                        </TabPanel>
                    </TabContext>
                </Box>
            </Grid>

            <Grid item xs={12} md={4}  >
                <Box sx={{ boxShadow: 3, borderRadius: 1, padding: 2, ...commonRippleLine }} m={2}>
                    <Box sx={{ fontSize: "18px", fontWeight: 400, padding: 2 }}>Icon Tabs</Box>
                    <TabContext value={tabSecvalue2} >
                        <TabList onChange={handleChangeTabSec2} sx={tabRippleLineCss} aria-label='icon tabs example'>
                            <Tab value='1' label='Recent' icon={<Icon icon='tabler:phone' />} />
                            <Tab value='2' label='Favorites' icon={<Icon icon='tabler:heart' />} />
                            <Tab value='3' label='Contacts' icon={<Icon icon='tabler:user' />} />
                        </TabList>
                        <TabPanel value='1'>
                            <Typography>
                                Cake apple pie chupa chups biscuit liquorice tootsie roll liquorice sugar plum. Cotton candy wafer wafer jelly
                                cake caramels brownie gummies.
                            </Typography>
                        </TabPanel>
                        <TabPanel value='2'>
                            <Typography>
                                Chocolate bar carrot cake candy canes sesame snaps. Cupcake pie gummi bears jujubes candy canes. Chupa chups
                                sesame snaps halvah.
                            </Typography>
                        </TabPanel>
                        <TabPanel value='3'>
                            <Typography>
                                Danish tiramisu jujubes cupcake chocolate bar cake cheesecake chupa chups. Macaroon ice cream tootsie roll
                                carrot cake gummi bears.
                            </Typography>
                        </TabPanel>
                    </TabContext>
                </Box>
            </Grid>

            <Grid item xs={12} md={4}>
                <Box sx={{ boxShadow: 3, borderRadius: 1, padding: 2 }} m={2}>
                    <Box sx={{ fontSize: "18px", fontWeight: 400, padding: 2 }}>Customized Tabs</Box>
                    <TabContext value={tabSecvalue3}>
                        <TabLists onChange={handleChangeTabSec3} aria-label='customized tabs example' sx={paddingRemoveTab}>
                            <Tab value='1' label='Tab 1' />
                            <Tab value='2' label='Tab 2' />
                            <Tab value='3' label='Tab 3' />
                        </TabLists>
                        <TabPanel value='1'>
                            <Typography>
                                Cake apple pie chupa chups biscuit liquorice tootsie roll liquorice sugar plum. Cotton candy wafer wafer jelly
                                cake caramels brownie gummies.
                            </Typography>
                        </TabPanel>
                        <TabPanel value='2'>
                            <Typography>
                                Chocolate bar carrot cake candy canes sesame snaps. Cupcake pie gummi bears jujubes candy canes. Chupa chups
                                sesame snaps halvah.
                            </Typography>
                        </TabPanel>
                        <TabPanel value='3'>
                            <Typography>
                                Danish tiramisu jujubes cupcake chocolate bar cake cheesecake chupa chups. Macaroon ice cream tootsie roll
                                carrot cake gummi bears.
                            </Typography>
                        </TabPanel>
                    </TabContext>
                </Box>
            </Grid>

            <Grid item xs={12} md={4}>
                <Box sx={{ boxShadow: 3, borderRadius: 1, padding: 2, ...commonRippleLine, ...tabType4 }} m={2}>
                    <Box sx={{ fontSize: "18px", fontWeight: 400, padding: 2 }}>Vertical Tabs</Box>
                    <TabContext value={tabSecvalue4}>
                        <Box sx={{ display: 'flex' }}>
                            <TabList orientation='vertical' onChange={handleChangeTabSec4} aria-label='vertical tabs example'>
                                <Tab value='1' label='Tab 1' />
                                <Tab value='2' label='Tab 2' />
                                <Tab value='3' label='Tab 3' />
                            </TabList>
                            <TabPanel value='1'>
                                <Typography>
                                    Cake apple pie chupa chups biscuit liquorice tootsie roll liquorice sugar plum. Cotton candy wafer wafer
                                    jelly cake caramels brownie gummies.
                                </Typography>
                            </TabPanel>
                            <TabPanel value='2'>
                                <Typography>
                                    Chocolate bar carrot cake candy canes sesame snaps. Cupcake pie gummi bears jujubes candy canes. Chupa chups
                                    sesame snaps halvah.
                                </Typography>
                            </TabPanel>
                            <TabPanel value='3'>
                                <Typography>
                                    Danish tiramisu jujubes cupcake chocolate bar cake cheesecake chupa chups. Macaroon ice cream tootsie roll
                                    carrot cake gummi bears.
                                </Typography>
                            </TabPanel>
                        </Box>
                    </TabContext>
                </Box>
            </Grid>

            <Grid item xs={12} md={4}>
                <Box sx={{ boxShadow: 3, borderRadius: 1, padding: 2, ...commonRippleLine, ...TabList5 }} m={2}>
                    <Box sx={{ fontSize: "18px", fontWeight: 400, padding: 2 }}>Customized Vertical Tabs</Box>
                    <TabContext value={value}>
                        <Box sx={{ display: 'flex' }}>
                            <TabList orientation='vertical' onChange={handleChange} aria-label='vertical tabs example' >
                                <Tab value='1' label='Tab 1' />
                                <Tab value='2' label='Tab 2' />
                                <Tab value='3' label='Tab 3' />
                            </TabList>
                            <TabPanel value='1'>
                                <Typography>
                                    Cake apple pie chupa chups biscuit liquorice tootsie roll liquorice sugar plum. Cotton candy wafer wafer
                                    jelly cake caramels brownie gummies.
                                </Typography>
                            </TabPanel>
                            <TabPanel value='2'>
                                <Typography>
                                    Chocolate bar carrot cake candy canes sesame snaps. Cupcake pie gummi bears jujubes candy canes. Chupa chups
                                    sesame snaps halvah.
                                </Typography>
                            </TabPanel>
                            <TabPanel value='3'>
                                <Typography>
                                    Danish tiramisu jujubes cupcake chocolate bar cake cheesecake chupa chups. Macaroon ice cream tootsie roll
                                    carrot cake gummi bears.
                                </Typography>
                            </TabPanel>
                        </Box>
                    </TabContext>
                </Box>
            </Grid>

            <Grid item xs={12} md={4}>
                <Box sx={{ boxShadow: 3, borderRadius: 1, padding: 2, ...commonRippleLine }} m={2}>
                    <Box sx={{ fontSize: "18px", fontWeight: 400, padding: 2 }}>Nav Tabs</Box>
                    <TabContext value={value6}>
                        <TabList onChange={handleChange6} aria-label='nav tabs example'>
                            <Tab value='1' component='a' label='Tab 1' href='/drafts' onClick={e => e.preventDefault()} />
                            <Tab value='2' component='a' label='Tab 2' href='/trash' onClick={e => e.preventDefault()} />
                            <Tab value='3' component='a' label='Tab 3' href='/spam' onClick={e => e.preventDefault()} />
                        </TabList>
                        <TabPanel value='1'>
                            <Typography>
                                Cake apple pie chupa chups biscuit liquorice tootsie roll liquorice sugar plum. Cotton candy wafer wafer jelly
                                cake caramels brownie gummies.
                            </Typography>
                        </TabPanel>
                        <TabPanel value='2'>
                            <Typography>
                                Chocolate bar carrot cake candy canes sesame snaps. Cupcake pie gummi bears jujubes candy canes. Chupa chups
                                sesame snaps halvah.
                            </Typography>
                        </TabPanel>
                        <TabPanel value='3'>
                            <Typography>
                                Danish tiramisu jujubes cupcake chocolate bar cake cheesecake chupa chups. Macaroon ice cream tootsie roll
                                carrot cake gummi bears.
                            </Typography>
                        </TabPanel>
                    </TabContext>
                </Box>
            </Grid>

            <Grid item xs={12} md={4}>
                <Box sx={{ boxShadow: 3, borderRadius: 1, padding: 2, ...commonRippleLine }} m={2}>
                    <Box sx={{ fontSize: "18px", fontWeight: 400, padding: 2 }}>Forced Scroll Buttons</Box>
                    <TabContext value={value7}>
                        <TabList scrollButtons variant='scrollable' onChange={handleChange7} aria-label='forced scroll tabs example'>
                            <Tab value='1' label='Tab 1' icon={<Icon icon='tabler:phone' style={{fontSize: '20px'}}/>} />
                            <Tab value='2' label='Tab 2' icon={<Icon icon='tabler:heart' style={{fontSize: '20px'}}/>} />
                            <Tab value='3' label='Tab 3' icon={<Icon icon='tabler:thumb-up' style={{fontSize: '20px'}}/>} />
                            <Tab value='4' label='Tab 4' icon={<Icon icon='tabler:user' style={{fontSize: '20px'}}/>} />
                            <Tab value='5' label='Tab 5' icon={<Icon icon='tabler:thumb-down' style={{fontSize: '20px'}}/>} />
                        </TabList>
                        <TabPanel value='1'>
                            <Typography>
                                Cake apple pie chupa chups biscuit liquorice tootsie roll liquorice sugar plum. Cotton candy wafer wafer jelly
                                cake caramels brownie gummies.
                            </Typography>
                        </TabPanel>
                        <TabPanel value='2'>
                            <Typography>
                                Chocolate bar carrot cake candy canes sesame snaps. Cupcake pie gummi bears jujubes candy canes. Chupa chups
                                sesame snaps halvah.
                            </Typography>
                        </TabPanel>
                        <TabPanel value='3'>
                            <Typography>
                                Danish tiramisu jujubes cupcake chocolate bar cake cheesecake chupa chups. Macaroon ice cream tootsie roll
                                carrot cake gummi bears.
                            </Typography>
                        </TabPanel>
                        <TabPanel value='4'>
                            <Typography>
                                Cake apple pie chupa chups biscuit liquorice tootsie roll liquorice sugar plum. Cotton candy wafer wafer jelly
                                cake caramels brownie gummies.
                            </Typography>
                        </TabPanel>
                        <TabPanel value='5'>
                            <Typography>
                                Chocolate bar carrot cake candy canes sesame snaps. Cupcake pie gummi bears jujubes candy canes. Chupa chups
                                sesame snaps halvah.
                            </Typography>
                        </TabPanel>
                    </TabContext>
                </Box>
            </Grid>

        </Grid>
    )
}

export default Tabs;
