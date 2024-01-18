import { Box, Button, FormControl, FormControlLabel, FormHelperText, FormLabel, Grid, Radio, RadioGroup, Typography } from '@mui/material'
import React, { useState } from 'react'

import { styled } from '@mui/material/styles';
import MuiRadio from '@mui/material/Radio'

import './Radio.css'

const RadioNew = props => {
    return (
        <MuiRadio
            {...props}
            disableRipple={true}
            sx={{ '& svg': { height: 18, width: 18 } }}
            checkedIcon={
                <svg width='24' height='24' viewBox='0 0 24 24'>
                    <path fill='currentColor' d='M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z' />
                </svg>
            }
            icon={
                <svg width='24' height='24' viewBox='0 0 24 24'>
                    <path
                        fill='currentColor'
                        d='M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z'
                    />
                </svg>
            }
        />
    )
}


const BpIcon = styled('span')(({ theme }) => ({
    borderRadius: '50%',
    width: 16,
    height: 16,
    boxShadow:
        theme.palette.mode === 'dark'
            ? '0 0 0 1px rgb(16 22 26 / 40%)'
            : 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
    backgroundColor: theme.palette.mode === 'dark' ? '#394b59' : '#f5f8fa',
    backgroundImage:
        theme.palette.mode === 'dark'
            ? 'linear-gradient(180deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,0))'
            : 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
    '.Mui-focusVisible &': {
        outline: '2px auto rgba(19,124,189,.6)',
        outlineOffset: 2,
    },
    'input:hover ~ &': {
        backgroundColor: theme.palette.mode === 'dark' ? '#30404d' : '#ebf1f5',
    },
    'input:disabled ~ &': {
        boxShadow: 'none',
        background:
            theme.palette.mode === 'dark' ? 'rgba(57,75,89,.5)' : 'rgba(206,217,224,.5)',
    },
}));

const BpCheckedIcon = styled(BpIcon)({
    backgroundColor: '#137cbd',
    backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
    '&::before': {
        display: 'block',
        width: 16,
        height: 16,
        backgroundImage: 'radial-gradient(#fff,#fff 28%,transparent 32%)',
        content: '""',
    },
    'input:hover ~ &': {
        backgroundColor: '#106ba3',
    },
});

function BpRadio(props) {
    return (
        <Radio
            disableRipple
            color="default"
            checkedIcon={<BpCheckedIcon />}
            icon={<BpIcon />}
            {...props}
        />
    );
}



export default function RadioBtn() {

    const [value, setValue] = useState('checked')
    const [value2, setValue2] = useState('controlled-checked')

    const handleChange = event => {
        setValue(event.target.value)
    }


    const handleChange2 = event => {
        setValue2(event.target.value)
    }


    const [value3, setValue3] = useState('')
    const [error, setError] = useState(false)
    const [helperText, setHelperText] = useState('Choose wisely')

    const handleRadioChange = event => {
        setError(false)
        setHelperText(' ')
        setValue3(event.target.value)
    }

    const handleSubmit = event => {
        event.preventDefault()
        if (value3 === 'best') {
            setError(false)
            setHelperText('You got it!')
        } else if (value === 'worst') {
            setError(true)
            setHelperText('Sorry, wrong answer!')
        } else {
            setError(true)
            setHelperText('Please select an option.')
        }
    }


    return (
        <Grid className='match-height' container sx={{ marginY: 5, padding: "0 !important" }} >
            <Grid item xs={12} md={4}>
                <Box sx={{ boxShadow: 3, borderRadius: 1, padding: 2 }} m={2}>
                    <Box sx={{ fontSize: "18px", fontWeight: 400, padding: 2 }}>RadioGroup</Box>
                    <FormControl sx={{ flexWrap: 'wrap', flexDirection: 'row' }}>
                        <RadioGroup row value={value} name='simple-radio' onChange={handleChange} aria-label='simple-radio'>
                            <FormControlLabel value='checked' control={<BpRadio />} label='Checked' />
                            <FormControlLabel value='unchecked' control={<BpRadio />} label='Unchecked' />
                        </RadioGroup>

                        <RadioGroup row value='disabled-checked' name='simple-disabled-radio' aria-label='simple-disabled-radio'>
                            <FormControlLabel disabled value='disabled-checked' label='Disabled Checked' control={<BpRadio />} />
                            <FormControlLabel disabled value='disabled-unchecked' label='Disabled Unchecked' control={<BpRadio />} />
                        </RadioGroup>
                    </FormControl>
                </Box>
            </Grid>

            <Grid item xs={12} sm={4}>
                <Box sx={{ boxShadow: 3, borderRadius: 1, padding: 2 }} m={2}>
                    <Box sx={{ fontSize: "18px", fontWeight: 400, padding: 2 }}>Controlled and Uncontrolled</Box>

                    <Typography>Controlled</Typography>
                    <RadioGroup row aria-label='controlled' name='controlled' value={value2} onChange={handleChange2}>
                        <FormControlLabel value='controlled-checked' control={<BpRadio />} label='Checked' />
                        <FormControlLabel value='controlled-unchecked' control={<BpRadio />} label='Unchecked' />
                    </RadioGroup>
                    <Typography>Uncontrolled</Typography>
                    <RadioGroup row aria-label='uncontrolled' name='uncontrolled' defaultValue='uncontrolled-checked'>
                        <FormControlLabel value='uncontrolled-checked' control={<BpRadio />} label='Checked' />
                        <FormControlLabel value='uncontrolled-unchecked' control={<BpRadio />} label='Unchecked' />
                    </RadioGroup>
                </Box>
            </Grid>

            <Grid item xs={12} sm={4}>
                <Box sx={{ boxShadow: 3, borderRadius: 1, padding: 2 }} m={2}>
                    <Box sx={{ fontSize: "18px", fontWeight: 400, padding: 2 }}>RadioGroup</Box>
                    <RadioGroup row aria-label='colored' name='colored' defaultValue='primary'>
                        <FormControlLabel value='primary' control={<BpRadio />} label='Primary' />
                        <FormControlLabel value='secondary' control={<BpRadio color='secondary' />} label='Secondary' />
                        <FormControlLabel value='success' label='Success' control={<BpRadio color='success' />} />
                        <FormControlLabel value='error' label='Error' control={<BpRadio color='error' />} />
                        <FormControlLabel value='warning' label='Warning' control={<BpRadio color='warning' />} />
                        <FormControlLabel value='info' label='Info' control={<BpRadio color='info' />} />
                    </RadioGroup>
                </Box>
            </Grid>

            <Grid item xs={12} sm={4}>
                <Box sx={{ boxShadow: 3, borderRadius: 1, padding: 2 }} m={2}>
                    <Box sx={{ fontSize: "18px", fontWeight: 400, padding: 2 }}>Customized Radio</Box>
                    <FormControl>
                        <FormLabel component='legend'>Gender</FormLabel>
                        <RadioGroup row defaultValue='female' aria-label='gender' name='customized-radios'>
                            <FormControlLabel value='female' control={<RadioNew />} label='Female' />
                            <FormControlLabel value='male' control={<RadioNew />} label='Male' />
                            <FormControlLabel value='other' control={<RadioNew />} label='Other' />
                            <FormControlLabel value='disabled' disabled control={<RadioNew />} label='Disabled' />
                        </RadioGroup>
                    </FormControl>
                </Box>
            </Grid>

            <Grid item xs={12} sm={4}>
                <Box sx={{ boxShadow: 3, borderRadius: 1, padding: 2 }} m={2}>
                    <Box sx={{ fontSize: "18px", fontWeight: 400, padding: 2 }}>Label Placement</Box>
                    <FormControl>
                        <RadioGroup row aria-label='position' name='vertical' defaultValue='top'>
                            <FormControlLabel value='top' label='Top' labelPlacement='top' sx={{ mr: 8.8 }} control={<BpRadio />} />
                            <FormControlLabel value='bottom' control={<BpRadio />} label='Bottom' labelPlacement='bottom' />
                        </RadioGroup>
                        <RadioGroup row aria-label='position' name='horizontal' defaultValue='start' sx={{ mt: 4 }}>
                            <FormControlLabel value='start' label='Start' labelPlacement='start' sx={{ mr: 4 }} control={<BpRadio />} />
                            <FormControlLabel value='end' control={<BpRadio />} label='End' />
                        </RadioGroup>
                    </FormControl>
                </Box>
            </Grid>

            <Grid item xs={12} sm={4}>
                <Box sx={{ boxShadow: 3, borderRadius: 1, padding: 2 }} m={2}>
                    <Box sx={{ fontSize: "18px", fontWeight: 400, padding: 2 }}>Show Error</Box>
                    <form onSubmit={handleSubmit}>
                        <FormControl error={error}>
                            <FormLabel component='legend'>Pop quiz: MUI is...</FormLabel>
                            <RadioGroup aria-label='quiz' name='quiz' value={value3} onChange={handleRadioChange}>
                                <FormControlLabel value='best' control={<BpRadio />} label='The best!' />
                                <FormControlLabel value='worst' control={<BpRadio />} label='The worst.' />
                            </RadioGroup>
                            <FormHelperText sx={{ mx: 0, fontSize: theme => theme.typography.body2.fontSize }}>{helperText}</FormHelperText>
                            <Button type='submit' variant='outlined' sx={{ mt: 3 }}>
                                Check Answer
                            </Button>
                        </FormControl>
                    </form>
                </Box>
            </Grid>


        </Grid>
    )
}
