import React from 'react'
import CustomAutocomplete from './autoComplete/AutoComplete'
import CustomTextField from '../../mui/text-field'
import { top100Films } from './autocompleteFakedb'
import { Box, Checkbox, Chip } from '@mui/material'

export default function AutoCompleteMain() {
  return (
    <div>

      <h1>Custom</h1>
      <div style={{ margin: '10px' }}>
        <CustomAutocomplete
          sx={{ width: 250 }}
          options={top100Films}
          id='autocomplete-custom'
          getOptionLabel={option => option.title || ''}
          renderInput={params => <CustomTextField {...params} label='Default' />}
        />
      </div>

      <h1>Multiple Values</h1>
      <Box className='demo-space-x' sx={{ display: 'flex', flexWrap: 'wrap' }}>
        <div style={{ margin: '10px' }}>

          <CustomAutocomplete
            multiple
            sx={{ width: 325 }}
            options={top100Films}
            filterSelectedOptions
            defaultValue={[top100Films[13]]}
            id='autocomplete-multiple-outlined'
            getOptionLabel={option => option.title || ''}
            renderInput={params => <CustomTextField {...params} label='filterSelectedOptions' placeholder='Favorites' />}
          />
        </div>
        <div style={{ margin: '10px' }}>
          <CustomAutocomplete
            freeSolo
            multiple
            sx={{ width: 325 }}
            id='autocomplete-multiple-filled'
            defaultValue={[top100Films[13].title]}
            options={top100Films.map(option => option.title)}
            renderInput={params => (
              <CustomTextField {...params} variant='filled' label='freeSolo' placeholder='Favorites' />
            )}
            renderTags={(value, getTagProps) =>
              value.map((option, index) => <Chip label={option} {...getTagProps({ index })} key={index} />)
            }
          />
        </div>
        <div style={{ margin: '10px' }}>
          <CustomAutocomplete
            readOnly
            multiple
            sx={{ width: 325 }}
            options={top100Films}
            id='autocomplete-multiple-standard'
            getOptionLabel={option => option.title || ''}
            defaultValue={[top100Films[12], top100Films[13]]}
            renderInput={params => <CustomTextField {...params} label='readOnly' placeholder='Favorites' />}
          />
        </div>

      </Box>

      <h1>Checkboxes</h1>
      <div style={{ margin: '10px', width: '400px' }}>

        <CustomAutocomplete
          multiple
          disableCloseOnSelect
          options={top100Films}
          id='autocomplete-checkboxes'
          getOptionLabel={option => option.title || ''}
          renderInput={params => <CustomTextField {...params} label='Checkboxes' placeholder='Favorites' />}
          renderOption={(props, option, { selected }) => (
            <li {...props}>
              <Checkbox checked={selected} sx={{ mr: 2 }} />
              {option.title}
            </li>
          )}
        />
      </div>

    </div>
  )
}
