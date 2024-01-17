import { forwardRef, useState } from 'react'
import Box from '@mui/material/Box'
import addDays from 'date-fns/addDays'
import subDays from 'date-fns/subDays'
import setHours from 'date-fns/setHours'
import setMinutes from 'date-fns/setMinutes'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import './DatePicker.css'
import CustomTextField from '../../mui/text-field'
import format from 'date-fns/format'

let popperPlacement = 'bottom-start'

const DatePickers = () => {
    const [date, setDate] = useState(new Date())
    const [time, setTime] = useState(new Date())

    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(addDays(new Date(), 15))
    const [startDateRange, setStartDateRange] = useState(new Date())
    const [endDateRange, setEndDateRange] = useState(addDays(new Date(), 45))

    const [dateFormat, setDateFormat] = useState(new Date())
    const [dateHighlight, setDateHighlight] = useState(new Date())

    const [year, setYear] = useState(new Date())
    const [month, setMonth] = useState(new Date())
    const [monthYear, setMonthYear] = useState(new Date())


    const handleOnChange = dates => {
        const [start, end] = dates
        setStartDate(start)
        setEndDate(end)
    }

    const handleOnChangeRange = dates => {
        const [start, end] = dates
        setStartDateRange(start)
        setEndDateRange(end)
    }


    const CustomInput = forwardRef((props, ref) => {
        const startDate = format(props.start, 'MM/dd/yyyy');
        const endDate = props.end !== null ? format(props.end, 'MM/dd/yyyy') : null;
        const value = `${startDate}${endDate !== null ? ` - ${endDate}` : ''}`;

        return <CustomTextField inputRef={ref} label={props.label || ''} {...props} value={value} />;
    });




    return (
        <div>
          

            <h1>Date Range Pickers</h1>
            <Box sx={{ display: 'flex', flexWrap: 'wrap' }} className='demo-space-x'>
                <div style={{ margin: '20px' }}>
                    <DatePicker
                        selectsRange
                        endDate={endDate}
                        selected={startDate}
                        startDate={startDate}
                        id='date-range-picker'
                        onChange={handleOnChange}
                        shouldCloseOnSelect={false}
                        popperPlacement={popperPlacement}
                        customInput={<CustomTextField
                            customBorderColor="#e8e8e8"
                            borderoutlinedColor="#00CFE8"
                            customTextColor="#2F2B3DC7"
                            customFontSize="0.8125rem"
                            label='Specific Date Range' />}
                    />
                </div>

                <div style={{ margin: '20px' }}>
                    <DatePicker
                        selectsRange
                        monthsShown={2}
                        endDate={endDateRange}
                        selected={startDateRange}
                        startDate={startDateRange}
                        shouldCloseOnSelect={false}
                        id='date-range-picker-months'
                        onChange={handleOnChangeRange}
                        popperPlacement={popperPlacement}
                        customInput={<CustomTextField
                            customBorderColor="#e8e8e8"
                            borderoutlinedColor="#00CFE8"
                            customTextColor="#2F2B3DC7"
                            customFontSize="0.8125rem"
                            label='Specific Date Range' />}
                    />
                </div>
            </Box>


            <h1>Specific Range</h1>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', margin: '30px' }} className='demo-space-x'>
                <div style={{ margin: '20px' }}>
                    <DatePicker
                        selected={date}
                        id='specific-date'
                        minDate={new Date()}
                        maxDate={addDays(new Date(), 5)}
                        popperPlacement={popperPlacement}
                        onChange={date => setDate(date)}
                        customInput={<CustomTextField
                            customBorderColor="#e8e8e8"
                            borderoutlinedColor="#00CFE8"
                            customTextColor="#2F2B3DC7"
                            customFontSize="0.8125rem"
                            label='Specific Date Range' />}
                    />
                </div>
                <div style={{ margin: '20px' }}>
                    <DatePicker
                        showTimeSelect
                        selected={time}
                        id='specific-time'
                        dateFormat='MM/dd/yyyy h:mm aa'
                        popperPlacement={popperPlacement}
                        onChange={date => setTime(date)}
                        minTime={setHours(setMinutes(new Date(), 0), 17)}
                        maxTime={setHours(setMinutes(new Date(), 30), 20)}
                        customInput={<CustomTextField
                            customBorderColor="#e8e8e8"
                            borderoutlinedColor="#00CFE8"
                            customTextColor="#2F2B3DC7"
                            customFontSize="0.8125rem" label='Specific Time' />}
                    />
                </div>
            </Box>

            <h1>Customization</h1>
            <Box sx={{ display: 'flex', flexWrap: 'wrap' }} className='demo-space-x'>
                <div style={{ margin: '20px' }}>
                    <DatePicker
                        id='custom-format'
                        selected={dateFormat}
                        dateFormat='MMMM d, yyyy'
                        popperPlacement={popperPlacement}
                        onChange={date => setDateFormat(date)}
                        customInput={<CustomTextField
                            customBorderColor="#e8e8e8"
                            borderoutlinedColor="#00CFE8"
                            customTextColor="#2F2B3DC7"
                            customFontSize="0.8125rem" label='Specific Time' />}
                    />
                </div>
                <div style={{ margin: '20px' }}>
                    <DatePicker
                        id='highlight-dates'
                        selected={dateHighlight}
                        popperPlacement={popperPlacement}
                        onChange={date => setDateHighlight(date)}
                        customInput={<CustomTextField
                            customBorderColor="#e8e8e8"
                            borderoutlinedColor="#00CFE8"
                            customTextColor="#2F2B3DC7"
                            customFontSize="0.8125rem" label='Specific Time' />}
                        highlightDates={[subDays(new Date(), 7), addDays(new Date(), 7)]}
                    />
                </div>
            </Box>

            <h1>Month & Year Dropdowns</h1>
            <Box sx={{ display: 'flex', flexWrap: 'wrap' }} className='demo-space-x'>
                <div style={{ margin: '20px' }}>
                    <DatePicker
                        selected={month}
                        showMonthDropdown
                        id='month-dropdown'
                        placeholderText='MM-DD-YYYY'
                        popperPlacement={popperPlacement}
                        onChange={date => setMonth(date)}
                        customInput={<CustomTextField
                            customBorderColor="#e8e8e8"
                            borderoutlinedColor="#00CFE8"
                            customTextColor="#2F2B3DC7"
                            customFontSize="0.8125rem" label='Specific Time' />}
                    />
                </div>
                <div style={{ margin: '20px' }}>
                    <DatePicker
                        selected={year}
                        showYearDropdown
                        id='year-dropdown'
                        placeholderText='MM-DD-YYYY'
                        popperPlacement={popperPlacement}
                        onChange={date => setYear(date)}
                        customInput={<CustomTextField
                            customBorderColor="#e8e8e8"
                            borderoutlinedColor="#00CFE8"
                            customTextColor="#2F2B3DC7"
                            customFontSize="0.8125rem" label='Specific Time' />}
                    />
                </div>
                <div style={{ margin: '20px' }}>
                    <DatePicker
                        showYearDropdown
                        showMonthDropdown
                        selected={monthYear}
                        id='month-year-dropdown'
                        placeholderText='MM-DD-YYYY'
                        popperPlacement={popperPlacement}
                        onChange={date => setMonthYear(date)}
                        customInput={<CustomTextField
                            customBorderColor="#e8e8e8"
                            borderoutlinedColor="#00CFE8"
                            customTextColor="#2F2B3DC7"
                            customFontSize="0.8125rem" label='Specific Time' />}
                    />
                </div>
            </Box>
        </div>

    )
}

export default DatePickers;