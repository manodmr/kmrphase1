import { Button } from '@/OverViews/Button'
import { useTheme } from '@mui/material/styles'
import { ArrowForward as ArrowForwardIcon } from '@mui/icons-material'
import { ThemeConsumer } from 'styled-components'
import { useContext } from 'react'
import { darkLightModeContext } from '@/Layout/Layout'
import { HiCursorArrowRipple } from 'react-icons/hi2'
import { GrWaypoint } from 'react-icons/gr'
import { FaLocationArrow } from 'react-icons/fa'



const ApplyButton = ({ children, onClick, sx }) => {
  const theme = useTheme();
  const themeMode = useContext(darkLightModeContext);

  return (
    <>
      {/* ------------------------------Light Mode-------------------------------- */}
      <Button 
        onClick={onClick}
        sx={{
          bgcolor: themeMode === true ? 'grey.500' :'primary.light' ,
          color: themeMode === true ? 'grey.200' :'primary.dark',
          fontSize:'13.5px',
          '&:hover': {
            bgcolor: themeMode === true ? 'grey.300' :'primary.main',
            color: themeMode === true ? 'primary.dark' :'common.white',
          },
          px: 1.8,
          justifyContent: "space-between",
          width: '120px',
          ...sx

        }}
        >
        <FaLocationArrow color='primary.main' style={{ fontSize:'13px' }}/>  
        {/* <ArrowForwardIcon color='primary.main' fontSize='small' />   */}
        Apply now
      </Button>


      {/* -----------------------------Dark Mode----------------------------------- */}
      {/* <KMRApplyButton
      onClick={onClick}
      sx={{ 
        bgcolor:'none',
        border:'2px solid aqua',
        color:'aqua',
        '&:hover' :{

            border:'2px solid aqua',
        },
        px:2,
        justifyContent:"space-between",
        width:'150px',
        ...sx
        
      }}
     >
       <ArrowForwardIcon />  Apply 
    </KMRApplyButton> */}
    </>
  )
}

export default ApplyButton