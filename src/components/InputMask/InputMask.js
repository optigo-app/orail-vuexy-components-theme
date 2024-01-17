import React from 'react'
import { Grid, InputLabel   } from '@mui/material'
import './inputmask.css'


import Cleave from 'cleave.js/react'
import 'cleave.js/dist/addons/cleave-phone.us'
// import styled from '@emotion/styled'

// const InputLabel = styled(InputLabel )(({ theme }) => ({
//     lineHeight: 1.154,
//     maxWidth: 'max-content',
//     marginBottom: theme.spacing(1),
//     color: theme.palette.text.primary,
//     fontSize: theme.typography.body2.fontSize
//   }))

// color: 'rgba(47, 43, 61,0.78)',
//     fontSize: '0.8125rem'

const InpLabelSx = {
    fontSize: '0.8125rem',
    color: 'rgba(47, 43, 61,0.78)',
    
}

const InputMask = () => {
  return (
    <div style={{width:'100%',marginTop:'80px'}}>
      <Grid container spacing={6} sx={{ marginLeft: "0px" }}>
        <Grid item xs={12} sm={6} lg={4}>
          <InputLabel htmlFor="credit-card" sx={InpLabelSx}>
            Credit Card
          </InputLabel>
          <Cleave
            id="credit-card"
            options={{ creditCard: true }}
            placeholder="0000 0000 0000 0000"
            className="inputmask" 
          />
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <InputLabel htmlFor="phone-number" sx={InpLabelSx}>
            Phone Number
          </InputLabel>
          <Cleave
            id="phone-number"
            placeholder="1 234 567 8900"
            options={{ phone: true, phoneRegionCode: "US" }}
            className="inputmask" 
          />
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <InputLabel htmlFor="date" sx={InpLabelSx}>
            Date
          </InputLabel>
          <Cleave
            id="date"
            placeholder="2001-01-01"
            options={{
              date: true,
              delimiter: "-",
              datePattern: ["Y", "m", "d"],
            }}
            className="inputmask" 
          />
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <InputLabel htmlFor="time" sx={InpLabelSx}>
            Time
          </InputLabel>
          <Cleave
            id="time"
            placeholder="12:00:00"
            options={{ time: true, timePattern: ["h", "m", "s"] }}
            className="inputmask" 
          />
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <InputLabel htmlFor="numeral" sx={InpLabelSx}>
            Numeral
          </InputLabel>
          <Cleave
            id="numeral"
            placeholder="10,000"
            options={{ numeral: true, numeralThousandsGroupStyle: "thousand" }}
            className="inputmask" 
          />
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <InputLabel htmlFor="blocks" sx={InpLabelSx}>
            Blocks
          </InputLabel>
          <Cleave
            id="blocks"
            placeholder="Blocks [4, 3, 3]"
            options={{ blocks: [4, 3, 3], uppercase: true }}
            className="inputmask" 
          />
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <InputLabel htmlFor="delimiter" sx={InpLabelSx}>
            Delimiter
          </InputLabel>
          <Cleave
            id="delimiter"
            placeholder="Delimiter: '.'"
            options={{ delimiter: "·", blocks: [3, 3, 3], uppercase: true }}
            className="inputmask" 
          />
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <InputLabel htmlFor="custom-delimiter" sx={InpLabelSx}>
            Custom Delimiters
          </InputLabel>
          <Cleave
            id="custom-delimiter"
            placeholder="Delimiter: ['.', '.', '-']"
            options={{
              delimiters: [".", ".", "-"],
              blocks: [3, 3, 3, 2],
              uppercase: true,
            }}
            className="inputmask" 
          />
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <InputLabel htmlFor="prefix" sx={InpLabelSx}>
            Prefix
          </InputLabel>
          <Cleave
            id="prefix"
            options={{ prefix: "+63", blocks: [3, 3, 3, 4], uppercase: true }}
            className="inputmask" 
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default InputMask