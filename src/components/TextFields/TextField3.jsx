import React, { useState } from 'react'
import CustomTextField from '../../mui/text-field';

const TextField3 = () => {
    const [name, setName] = useState('');
    const handleChange = (e) => {
        console.log(e?.target?.value);
        setName(e?.target?.value)
    }
  return (
    <div>
        <CustomTextField fullWidth label='Controlled' value={name} placeholder='Enter here' onChange={(e) => handleChange(e)} />
    </div>
  )
}

export default TextField3;