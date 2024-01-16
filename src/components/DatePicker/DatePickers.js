import { useState } from 'react'
import Box from '@mui/material/Box'
import addDays from 'date-fns/addDays'
import setHours from 'date-fns/setHours'
import setMinutes from 'date-fns/setMinutes'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import './DatePicker.css'

const DatePickers = ({ popperPlacement }) => {
  const [date, setDate] = useState(new Date())
  const [time, setTime] = useState(new Date())

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap' ,margin: '30px' }} className='demo-space-x'>
      <div>
        <DatePicker
          selected={date}
          id='specific-date'
          minDate={new Date()}
          maxDate={addDays(new Date(), 5)}
          popperPlacement={popperPlacement}
          onChange={date => setDate(date)}
          customInput={<input label='Specific Date Range' />}
        />
      </div>

      <div>
        <DatePicker
          showTimeSelect
          selected={time}
          id='specific-time'
          dateFormat='MM/dd/yyyy h:mm aa'
          popperPlacement={popperPlacement}
          onChange={date => setTime(date)}
          minTime={setHours(setMinutes(new Date(), 0), 17)}
          maxTime={setHours(setMinutes(new Date(), 30), 20)}
          customInput={<input label='Specific Time' />}
        />
      </div>
    </Box>
  )
}

export default DatePickers;