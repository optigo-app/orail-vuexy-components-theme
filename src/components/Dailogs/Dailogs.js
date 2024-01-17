import React, { Fragment, forwardRef, useEffect, useRef, useState } from 'react'

import List from '@mui/material/List'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import MuiAvatar from '@mui/material/Avatar'
import ListItem from '@mui/material/ListItem'
import Typography from '@mui/material/Typography'
import DialogTitle from '@mui/material/DialogTitle'
import ListItemText from '@mui/material/ListItemText'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import { Icon } from '@iconify/react'
import { DialogActions, DialogContent, DialogContentText, Slide } from '@mui/material'
// import Avatar from '../Avatars/CustomeAvatar'


const emails = ['username@gmail.com', 'user02@gmail.com']

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction='up' ref={ref} {...props} />
})

const dialog = {
    '& .MuiListItemAvatar-root':{
        display: 'flex',
        justifyContent: 'center',
        color: '#7367F0',
        backgroundColor: 'rgba(115, 103, 240, 0.16)',
        borderRadius: '50%',
        height: '50px',
        margin: '5px 15px',
        alignItems:'center'
        
    },
    '& .MuiAvatar-root':{
       backgroundColor: 'transparent !important'
    }
}

export default function Dailogs() {

    const [open, setOpen] = useState(false)
    const [selectedValue, setSelectedValue] = useState(emails[1])
    const handleClickOpen = () => setOpen(true)
    const handleDialogClose = () => setOpen(false)
    const handleClose = value => {
        setOpen(false)
        setSelectedValue(value)
    }

    const [open1, setOpen1] = useState(false)
    const handleClickOpen1 = () => setOpen1(true)
    const handleClose1 = () => setOpen1(false)

    const [open2, setOpen2] = useState(false)
    const handleClickOpen2 = () => setOpen2(true)
    const handleClose2 = () => setOpen2(false)

    const [open3, setOpen3] = useState(false)
    const handleClickOpen3 = () => setOpen3(true)
    const handleClose3 = () => setOpen3(false)

    const [open4, setOpen4] = useState(false)
    const [scroll, setScroll] = useState('paper')
    const descriptionElementRef = useRef(null)
    const handleClickOpen4 = scrollType => () => {
        setOpen4(true)
        setScroll(scrollType)
    }
    const handleClose4 = () => setOpen4(false)
    useEffect(() => {
        if (open4) {
            const { current: descriptionElement } = descriptionElementRef
            if (descriptionElement !== null) {
                descriptionElement.focus()
            }
        }
    }, [open4])

    return (
        <div>
            <h1>Simple Dialog</h1>
            <div>
                <Typography variant='subtitle1' sx={{ mb: 2 }}>
                    Selected: {selectedValue}
                </Typography>
                <Button variant='outlined' onClick={handleClickOpen}>
                    Open simple dialog
                </Button>
                <Dialog onClose={handleDialogClose} aria-labelledby='simple-dialog-title' open={open} sx={dialog}>
                    <DialogTitle id='simple-dialog-title'>Set backup account</DialogTitle>
                    <List sx={{ pt: 0, px: '0 !important' }}>
                        {emails.map(email => (
                            <ListItem key={email} disablePadding onClick={() => handleClose(email)}>
                                <ListItemButton>
                                    <ListItemAvatar>
                                        {/* <Avatar skin='light'> */}
                                        <Icon icon='tabler:user' style={{fontSize: '32px' ,height: '100%'}}/>
                                        {/* </Avatar> */}
                                    </ListItemAvatar>
                                    <ListItemText primary={email} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                        <ListItem disablePadding onClick={() => handleClose('addAccount')}>
                            <ListItemButton>
                                <ListItemAvatar>
                                    <MuiAvatar>
                                        <Icon icon='tabler:plus' style={{fontSize: '35px' ,height: '100px' ,color: 'gray'}}/>
                                    </MuiAvatar>
                                </ListItemAvatar>
                                <ListItemText primary='Add account' />
                            </ListItemButton>
                        </ListItem>
                    </List>
                </Dialog>
            </div>

            <h1>Alerts</h1>
            <Fragment>
                <Button variant='outlined' onClick={handleClickOpen1}>
                    Open dialog
                </Button>
                <Dialog
                    open={open1}
                    onClose={handleClose1}
                    aria-labelledby='alert-dialog-title'
                    aria-describedby='alert-dialog-description'
                >
                    <DialogTitle id='alert-dialog-title'>Use Google's location service?</DialogTitle>
                    <DialogContent>
                        <DialogContentText id='alert-dialog-description'>
                            Let Google help apps determine location. This means sending anonymous location data to Google, even when no
                            apps are running.
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions className='dialog-actions-dense'>
                        <Button onClick={handleClose1}>Disagree</Button>
                        <Button onClick={handleClose1}>Agree</Button>
                    </DialogActions>
                </Dialog>
            </Fragment>

            <h1>Transitions</h1>
            <Fragment>
                <Button variant='outlined' onClick={handleClickOpen2}>
                    Slide in alert dialog
                </Button>
                <Dialog
                    open={open2}
                    keepMounted
                    onClose={handleClose2}
                    TransitionComponent={Transition}
                    aria-labelledby='alert-dialog-slide-title'
                    aria-describedby='alert-dialog-slide-description'
                >
                    <DialogTitle id='alert-dialog-slide-title'>Use Google's location service?</DialogTitle>
                    <DialogContent>
                        <DialogContentText id='alert-dialog-slide-description'>
                            Let Google help apps determine location. This means sending anonymous location data to Google, even when no
                            apps are running.
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions className='dialog-actions-dense'>
                        <Button onClick={handleClose}>Disagree</Button>
                        <Button onClick={handleClose}>Agree</Button>
                    </DialogActions>
                </Dialog>
            </Fragment>

            <h1>Form Dialog</h1>
            <Fragment>
                <Button variant='outlined' onClick={handleClickOpen3}>
                    Open form dialog
                </Button>
                <Dialog open={open3} onClose={handleClose3} aria-labelledby='form-dialog-title'>
                    <DialogTitle id='form-dialog-title'>Subscribe</DialogTitle>
                    <DialogContent>
                        <DialogContentText sx={{ mb: 3 }}>
                            To subscribe to this website, please enter your email address here. We will send updates occasionally.
                        </DialogContentText>
                        {/* <CustomTextField id='name' autoFocus fullWidth type='email' label='Email Address' /> */}
                        <input id='name' autoFocus fullWidth type='email' label='Email Address' />
                    </DialogContent>
                    <DialogActions className='dialog-actions-dense'>
                        <Button onClick={handleClose3}>Disagree</Button>
                        <Button onClick={handleClose3}>Agree</Button>
                    </DialogActions>
                </Dialog>
            </Fragment>

            <h1>Scrolling Long Content</h1>
            <Button variant='outlined' onClick={handleClickOpen4('paper')}>
                scroll=paper
            </Button>
            <Button variant='outlined' onClick={handleClickOpen4('body')}>
                scroll=body
            </Button>
            <Dialog
                open={open4}
                scroll={scroll}
                onClose={handleClose4}
                aria-labelledby='scroll-dialog-title'
                aria-describedby='scroll-dialog-description'
            >
                <DialogTitle
                    id='scroll-dialog-title' >
                    Subscribe
                </DialogTitle>
                <DialogContent dividers={scroll === 'paper'}>
                    <DialogContentText id='scroll-dialog-description' ref={descriptionElementRef} tabIndex={-1}>
                        {[...new Array(50)].map(
                            () =>
                                <>
                                    Cotton candy sesame snaps toffee chupa chups caramels.Candy icing gummi bears pastry cake icing brownie
                                    oat cake.Tootsie roll biscuit chupa chups apple pie muffin jelly - o caramels.Muffin chocolate bar sweet
                                    cookie chupa chups.
                                </>
                        )}
                    </DialogContentText>
                </DialogContent>
                <DialogActions
                    className='dialog-actions-dense'>
                    <Button onClick={handleClose4}>Cancel</Button>
                    <Button onClick={handleClose4}>Subscribe</Button>
                </DialogActions>
            </Dialog >


        </div >
    )
}
