import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import useSettings from '@/theme/hooks/useSettings';
import { Button, CardActionArea, Grid, RadioGroup } from '@mui/material';
import Iconify from '@/theme/Iconify';
import BoxMask from '@/theme/hooks/mode/BoxMask';



const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 58,
  height: 34,
  padding: 7,
  '& .MuiSwitch-switchBase': {
    margin: 0,
    padding: 0,
    transform: 'translateX(6px)',
    '&.Mui-checked': {
      color: '#fff',
      transform: 'translateX(22px)',
      '& .MuiSwitch-thumb:before': {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          '#000',
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor:'primary.main',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: 'primary.main',
    width: 32,
    height: 32,
    '&:before': {
      content: "''",
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundColor:'primary.main',
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="15" width="15" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        '#00',
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: theme.palette.mode === 'dark' ? 'primary.main' : 'primary.main',
    borderRadius: 20 / 2,
  },
}));








// ------------------------------------------------------

export default function DayNight({onChange , state}) {
  const theme =useTheme();
  // const isLight = theme.palette.mode == 'dark'
  const [check, setCheck] = React.useState(false);
  const handleTheme = ()=>{
   setCheck(!check);
  }
  const isLight = theme.palettemode === check ? 'dark' : 'light';

  const { themeMode, onChangeMode , onToggleMode} = useSettings();
  console.log(check);
  
  // const isSelected = themeMode === mode;
  return (
    <FormGroup  >
      <FormControlLabel 
        // color='primary.main'
        control={
        <MaterialUISwitch 
          sx={{ mt: { xs: '8px', md: '0', lg: '0' }, marginRight:{ xs: '-12px', md: '2px', lg: '2px' }, }}  
          checked={state}  
          onChange={onChange} 
          />
        }
       
      />
      
      {/* <Stack direction="row" spacing={1} alignItems="center">
        <Typography>Off</Typography>
        <AntSwitch defaultChecked inputProps={{ 'aria-label': 'ant design' }} />
        <Typography>On</Typography>
      </Stack> */}
    </FormGroup>







    // <RadioGroup name='themeMode' value={themeMode} onChange={onChangeMode}  >
    //   <Grid  container dir='ltr' spacing={2.5} width={100} mr={2} >
    //   {['light' , 'dark'].map((mode, index) => {
    //     const isSelected = themeMode === mode;
    //     console.log(themeMode);
    //     return(
    //       <>
    //       <Grid key={mode} item lg={6} xs={6} display='flex'  >
    //       <BoxStyle
    //       sx={{ 
    //         bgcolor: mode === 'light' ? 'common.white' : 'grey.600',
    //         ...(isSelected && {
    //           color: 'primary.main',
    //           boxShadow: (theme) => theme.customShadows.z10,
              
    //         }),
    //         display:'flex'
    //       }}
    //       onChange={onChangeMode}
    //       >   
        
    //       <Iconify icon={index === 0 ? 'ph:sun-duotone' : 'ph:moon-duotone'} width={28} height={28}   />
    //       <BoxMask value={mode}  />
    //       </BoxStyle>
    //       </Grid>
    //       </>
    //     )
    //   })}
    //   </Grid>

    // </RadioGroup>
  );
}