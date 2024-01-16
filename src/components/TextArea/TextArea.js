import React, { useState } from 'react'
import CustomTextField from '../../mui/text-field'
import { Box, TextField } from '@mui/material'

export default function TextArea() {

  const [value, setValue] = useState('Controlled')

  const handleChange = event => {
    setValue(event.target.value)
  }


  return (
    <div>
      <h1>Custom</h1>
      <div style={{ display: 'flex' }}>

        <div style={{ margin: '10px' }}>
          <CustomTextField
            customBorderColor="#e8e8e8"
            borderoutlinedColor="#00CFE8"
            customTextColor="#2F2B3DC7"
            customFontSize="0.8125rem" label='Specific Time'
          />
        </div>

        <div style={{ margin: '10px' }}>
          <CustomTextField
            multiline
            maxRows={4}
            value={value}
            label='Multiline'
            onChange={handleChange}
            id='textarea-outlined-controlled'
            customBorderColor="#e8e8e8"
            borderoutlinedColor="#00CFE8"
            customTextColor="#2F2B3DC7"
            customFontSize="0.8125rem"
          />
        </div>


        <div style={{ margin: '10px' }}>
          <CustomTextField multiline id='textarea-outlined' customBorderColor="#e8e8e8"
            borderoutlinedColor="#00CFE8"
            customTextColor="#2F2B3DC7"
            customFontSize="0.8125rem" placeholder='Placeholder' label='Multiline Placeholder' />
        </div>

        <div style={{ margin: '10px' }}>
          <CustomTextField
            rows={4}
            multiline
            label='Multiline'
            customBorderColor="#e8e8e8"
            borderoutlinedColor="#00CFE8"
            customTextColor="#2F2B3DC7"
            customFontSize="0.8125rem"
            defaultValue='Default Value'
            id='textarea-outlined-static'
          />
        </div>
      </div>


      <h1>Variants</h1>

      <Box className='demo-space-x' sx={{ mb: 4 , display : 'flex'}}>
        <div style={{ margin: '10px' }}>
          <TextField
            multiline
            maxRows={4}
            value={value}
            label='Multiline'
            onChange={handleChange}
            id='textarea-outlined-controlled'
          />
        </div>
        <div style={{ margin: '10px' }}>
          <TextField multiline id='textarea-outlined' placeholder='Placeholder' label='Multiline Placeholder' />
        </div>
        <div style={{ margin: '10px' }}>
          <TextField rows={4} multiline label='Multiline' defaultValue='Default Value' id='textarea-outlined-static' />
        </div>
      </Box>

      <Box className='demo-space-x' sx={{ mb: 4 ,display : 'flex' }}>
        <div style={{ margin: '10px' }}>
          <TextField
            multiline
            maxRows={4}
            value={value}
            variant='filled'
            label='Multiline'
            onChange={handleChange}
            id='textarea-filled-controlled'
          />
        </div>

        <div style={{ margin: '10px' }}>
          <TextField
            multiline
            variant='filled'
            id='textarea-filled'
            placeholder='Placeholder'
            label='Multiline Placeholder'
          />
        </div>

        <div style={{ margin: '10px' }}>
          <TextField
            rows={4}
            multiline
            variant='filled'
            label='Multiline'
            id='textarea-filled-static'
            defaultValue='Default Value'
          />
        </div>
      </Box>
      <div className='demo-space-x' style={{display : 'flex'}}>
        <div style={{ margin: '10px' }}>
          <TextField
            multiline
            maxRows={4}
            value={value}
            label='Multiline'
            variant='standard'
            onChange={handleChange}
            id='textarea-standard-controlled'
          />
        </div>

        <div style={{ margin: '10px' }}>
          <TextField
            multiline
            variant='standard'
            id='textarea-standard'
            placeholder='Placeholder'
            label='Multiline Placeholder'
          />
        </div>

        <div style={{ margin: '10px' }}>
          <TextField
            rows={4}
            multiline
            label='Multiline'
            variant='standard'
            defaultValue='Default Value'
            id='textarea-standard-static'
          />
        </div>
      </div>
    </div>
  )
}
