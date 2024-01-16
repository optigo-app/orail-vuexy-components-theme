import React from 'react'
import Badge1 from './Badge1';
import Badge2 from './Badge2';
import Badge3 from './Badge3';
import Badge4 from './Badge4';

const Badges = () => {
  return (
    <div>
      <div style={{margin:"2rem"}}><Badge1 bgcolor="#00CEF8" /></div>
      <div style={{margin:"2rem"}}><Badge2 bgcolor="#00CEF8"/></div>
      <div style={{margin:"2rem"}}><Badge3 bgcolor="#00CEF8" /></div>
      <div style={{margin:"2rem"}}><Badge4 bgcolor="#00CFE829" color='#00CEF8' /></div>
    </div>
  )
}

export default Badges