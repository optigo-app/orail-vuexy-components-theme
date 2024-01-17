import React, { useState } from 'react';
import { Avatar, Box, Checkbox, Collapse, Container, List, Grid, Tab, IconButton, ListItemAvatar, ListItemSecondaryAction, ListSubheader, Paper, Switch, Button, Typography, LinearProgress } from '@mui/material';
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import TabContext from '@mui/lab/TabContext'
import { Icon } from '@iconify/react';
import styled from 'styled-components';

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
const Tabs = () => {

    const [tabSecvalue1, setTabSecvalueValue1] = useState('1');
    const [tabSecvalue2, setTabSecvalueValue2] = useState('1');
    const [tabSecvalue3, setTabSecvalueValue3] = useState('1');
    const [tabSecvalue4, setTabSecvalueValue4] = useState('1');
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
                    <Box sx={{ fontSize: "18px", fontWeight: 400, padding: 2 }}>Tabs</Box>
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

        </Grid>
    )
}

export default Tabs;
