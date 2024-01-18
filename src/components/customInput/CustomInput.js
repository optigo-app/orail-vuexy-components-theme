import { Box, Grid, Radio } from '@mui/material'
import React, { useState } from 'react'
import './CustomInput.css'
import CustomRadioIcons from './custom-radio/icons'
import CustomCheckboxIcons from './custom-checkbox/icons'
import CustomRadioBasic from './custom-radio/basic'
import CustomCheckbox from './custom-checkbox/basic'
import demo1 from '../../assets/Images/demo4.jpeg'
import demo2 from '../../assets/Images/demo5.jpg'
import demo3 from '../../assets/Images/demo6.jpg'
import CustomRadioImg from './custom-radio/image'
import CustomCheckboxImg from './custom-checkbox/image'

const data = [
    {
        meta: 'Free',
        title: 'Basic',
        value: 'basic',
        isSelected: true,
        content: 'Get 1 project with 1 team member.'
    },
    {
        meta: '5.00',
        title: 'Premium',
        value: 'premium',
        content: 'Get 5 projects with 5 team members.'
    }
]


const data2 = [
    {
        value: 'starter',
        title: 'Starter',
        isSelected: true,
        content: 'A simple start for everyone.'
    },
    {
        value: 'standard',
        title: 'Standard',
        content: 'For small to medium businesses.'
    },
    {
        value: 'enterprise',
        title: 'Enterprise',
        content: 'Solution for big organizations.'
    }
]

const icons = [
    { icon: 'tabler:rocket', iconProps: { fontSize: '1.75rem', style: { marginBottom: 8 } } },
    { icon: 'tabler:star', iconProps: { fontSize: '1.75rem', style: { marginBottom: 8 } } },
    { icon: 'tabler:briefcase', iconProps: { fontSize: '1.75rem', style: { marginBottom: 8 } } }
]

const icons2 = [
    { icon: 'tabler:folder', iconProps: { fontSize: '1.75rem', style: { marginBottom: 8 } } },
    { icon: 'tabler:ban', iconProps: { fontSize: '1.75rem', style: { marginBottom: 8 } } },
    { icon: 'tabler:lock', iconProps: { fontSize: '1.75rem', style: { marginBottom: 8 } } }
]

const data3 = [
    {
        value: 'speaker',
        isSelected: true,
        img: demo1
    },
    {
        value: 'ear-buds',
        img: demo2
    },
    {
        value: 'headphone',
        img: demo3
    }
]

export default function CustomInput() {

    const initialSelected = data.filter(item => item.isSelected)[data.filter(item => item.isSelected).length - 1].value
    const [selected, setSelected] = useState(initialSelected)
    const handleChange = prop => {
        if (typeof prop === 'string') {
            setSelected(prop)
        } else {
            setSelected(prop.target.value)
        }
    }


    const initialSelected2 = data.filter(item => item.isSelected).map(item => item.value)
    const [selected2, setSelected2] = useState(initialSelected2)
    const handleChange2 = value => {
        if (selected2.includes(value)) {
            const updatedArr = selected2.filter(item => item !== value)
            setSelected2(updatedArr)
        } else {
            setSelected2([...selected2, value])
        }
    }


    const initialSelected3 = data2.filter(item => item.isSelected)[data.filter(item => item.isSelected).length - 1].value
    const [selected3, setSelected3] = useState(initialSelected3)
    const handleChange3 = prop => {
        if (typeof prop === 'string') {
            setSelected3(prop)
        } else {
            setSelected3(prop.target.value)
        }
    }

    const initialSelected4 = data.filter(item => item.isSelected).map(item => item.value)
    const [selected4, setSelected4] = useState(initialSelected4)

    const handleChange4 = value => {
        if (selected4.includes(value)) {
            const updatedArr = selected4.filter(item => item !== value)
            setSelected4(updatedArr)
        } else {
            setSelected4([...selected4, value])
        }
    }


    const initialSelected5 = data3.filter(item => item.isSelected)[data.filter(item => item.isSelected).length - 1].value
    const [selected5, setSelected5] = useState(initialSelected5)

    const handleChange5 = prop => {
        if (typeof prop === 'string') {
            setSelected5(prop)
        } else {
            setSelected5(prop.target.value)
        }
    }

    const initialSelected6 = data3.filter(item => item.isSelected).map(item => item.value)
    const [selected6, setSelected6] = useState(initialSelected6)

    const handleChange6 = value => {
        if (selected6.includes(value)) {
            const updatedArr = selected6.filter(item => item !== value)
            setSelected6(updatedArr)
        } else {
            setSelected6([...selected6, value])
        }
    }

    return (
        <Grid className='match-height' container columns={16} sx={{ marginY: 5, padding: "0 !important" }} >

            <Grid item xs={8}>
                <Box sx={{ boxShadow: 3, borderRadius: 1, padding: 2 }} m={2}>
                    <Box sx={{ fontSize: "18px", fontWeight: 400, padding: 2 }}>Custom Radios</Box>
                    <Grid container spacing={4}>
                        {data.map((item, index) => (
                            <CustomRadioBasic
                                key={index}
                                data={data[index]}
                                selected={selected}
                                name='custom-radios-basic'
                                handleChange={handleChange}
                                gridProps={{ sm: 6, xs: 12 }}
                            />
                        ))}
                    </Grid>
                </Box>
            </Grid>

            <Grid item xs={8}>
                <Box sx={{ boxShadow: 3, borderRadius: 1, padding: 2 }} m={2}>
                    <Box sx={{ fontSize: "18px", fontWeight: 400, padding: 2 }}>Custom Checkboxes</Box>
                    <Grid container spacing={4}>
                        {data.map((item, index) => (
                            <CustomCheckbox
                                key={index}
                                data={data[index]}
                                selected={selected2}
                                handleChange={handleChange2}
                                name='custom-checkbox-basic'
                                gridProps={{ sm: 6, xs: 12 }}
                            />
                        ))}
                    </Grid>
                </Box>
            </Grid>

            <Grid item xs={8}>
                <Box sx={{ boxShadow: 3, borderRadius: 1, padding: 2 }} m={2}>
                    <Box sx={{ fontSize: "18px", fontWeight: 400, padding: 2 }}>Custom Checkboxes</Box>
                    <Grid container spacing={4}>
                        {data2.map((item, index) => (
                            <CustomRadioIcons
                                key={index}
                                data={data2[index]}
                                selected={selected3}
                                icon={icons[index].icon}
                                name='custom-radios-icons'
                                handleChange={handleChange3}
                                gridProps={{ sm: 4, xs: 12 }}
                                iconProps={icons[index].iconProps}
                            />
                        ))}
                    </Grid>
                </Box>
            </Grid>


            <Grid item xs={8}>
                <Box sx={{ boxShadow: 3, borderRadius: 1, padding: 2 }} m={2}>
                    <Box sx={{ fontSize: "18px", fontWeight: 400, padding: 2 }}>Custom Checkboxes with Icons</Box>
                    <Grid container spacing={4}>
                        {data2.map((item, index) => (
                            <CustomCheckboxIcons
                                key={index}
                                data={data2[index]}
                                selected={selected4}
                                icon={icons2[index].icon}
                                handleChange={handleChange4}
                                name='custom-checkbox-icons'
                                gridProps={{ sm: 4, xs: 12 }}
                                iconProps={icons2[index].iconProps}
                            />
                        ))}
                    </Grid>
                </Box>
            </Grid>

            <Grid item xs={8}>
                <Box sx={{ boxShadow: 3, borderRadius: 1, padding: 2 }} m={2}>
                    <Box sx={{ fontSize: "18px", fontWeight: 400, padding: 2 }}>Custom Radios with Images</Box>
                    <Grid container spacing={4}>
                        {data3.map((item, index) => (
                            <CustomRadioImg
                                key={index}
                                data={data3[index]}
                                selected={selected5}
                                name='custom-radios-img'
                                handleChange={handleChange5}
                                gridProps={{ sm: 4, xs: 12 }}
                            />
                        ))}
                    </Grid>
                </Box>
            </Grid>


            <Grid item xs={8}>
                <Box sx={{ boxShadow: 3, borderRadius: 1, padding: 2 }} m={2}>
                    <Box sx={{ fontSize: "18px", fontWeight: 400, padding: 2 }}>Custom Radios with Images</Box>
                    <Grid container spacing={4}>
                        {data3.map((item, index) => (
                            <CustomCheckboxImg
                                key={index}
                                data={data3[index]}
                                selected={selected6}
                                name='custom-checkbox-img'
                                handleChange={handleChange6}
                                gridProps={{ sm: 4, xs: 12 }}
                            />
                        ))}
                    </Grid>
                </Box>
            </Grid>


        </Grid>
    )
}
