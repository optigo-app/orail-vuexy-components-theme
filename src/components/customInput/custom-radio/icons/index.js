// ** MUI Imports
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Radio from '@mui/material/Radio'
import Typography from '@mui/material/Typography'
import IconifyIcon from '../../../icon'
import { FormControlLabel } from '@mui/material'
import { styled } from '@mui/material/styles';


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


const CustomRadioIcons = props => {
  // ** Props
  const { data, icon, name, selected, gridProps, iconProps, handleChange, color = 'primary' } = props
  const { title, value, content } = data

  const renderComponent = () => {
    return (
      <Grid item {...gridProps}>
        <Box
          onClick={() => handleChange(value)}
          sx={{
            p: 4,
            height: '100%',
            display: 'flex',
            borderRadius: 1,
            cursor: 'pointer',
            position: 'relative',
            alignItems: 'center',
            flexDirection: 'column',
            border: theme => `1px solid ${theme.palette.divider}`,
            ...(selected === value
              ? {
                  borderColor: `${color}.main`,
                  '& svg': { color: theme => `${theme.palette.primary.main} !important` }
                }
              : { '&:hover': { borderColor: theme => `rgba(47, 43, 61, 0.25)` } })
          }}
        >
          {icon ? <IconifyIcon icon={icon} {...iconProps} /> : null}
          {title ? (
            typeof title === 'string' ? (
              <Typography variant='h6' sx={{ ...(content ? { mb: 2 } : { my: 'auto' }) }}>
                {title}
              </Typography>
            ) : (
              title
            )
          ) : null}
          {content ? (
            typeof content === 'string' ? (
              <Typography variant='body2' sx={{ my: 'auto', textAlign: 'center' }}>
                {content}
              </Typography>
            ) : (
              content
            )
          ) : null}
          <FormControlLabel
            name={name}
            size='small'
            color={color}
            value={value}
            control={<BpRadio />}
            onChange={handleChange}
            checked={selected === value}
            sx={{ mb: -2, ...(!icon && !title && !content && { mt: -2 }) }}
          />
        </Box>
      </Grid>
    )
  }

  return data ? renderComponent() : null
}

export default CustomRadioIcons
