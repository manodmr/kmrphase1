import { Box } from '@/OverViews/Box';
import { Home, LocalHotel, TwoWheeler } from '@mui/icons-material';
import { Slider, SliderThumb, Tooltip, Typography } from '@mui/material';
import React, { useState } from 'react'
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { BiBusSchool } from 'react-icons/bi';
import Hostel from '../Icons/Hostel';
 

const marks = [
    {
      value: 50,
      label: "Bikers"
    },
    {
        value: 100,
        label: "DaySchollers"
      },
    {
      value: 200,
      label: "Hostelers"
    }
  ];
  
  function valuetext(value) {
    return `${value}m`;
  }

const NearBySlider = ({onchange, value}) => {

  const DistanceSlider = styled(Slider)(({ theme }) => ({
    color: '#3a8589',
    height: 3,
    padding: '13px 0',
    '& .MuiSlider-thumb': {
      height: 27,
      width: 27,
      backgroundColor: '#fff',
      border: '1px solid currentColor',
      '&:hover': {
        boxShadow: '0 0 0 8px rgba(58, 133, 137, 0.16)',
      },
      '& .airbnb-bar': {
        height: 9,
        width: 1,
        backgroundColor: 'currentColor',
        marginLeft: 1,
        marginRight: 1,
      },
    },
    '& .MuiSlider-track': {
      height: 3,
    },
    
  }));

  function ThumbComponent(props) {
    const { children, ...other } = props;
    return (
      <SliderThumb {...other}>
        {children}
        {
        value === 0 ? 
        <>
         <Tooltip title="HOME" >
          <Home fontSize='small'  />
        </Tooltip> 
        </>
        : value <= 50 ? 
        <>
        <TwoWheeler fontSize='small'  />
      
        </>
        :value <=100 ?
        <>
        <BiBusSchool />
       
        </>
        :
        <>
        <LocalHotel fontSize='small' />
       
        </>
        }
      </SliderThumb>
    );
  }
  
  ThumbComponent.propTypes = {
    children: PropTypes.node,
  };
   
  return (
    <div>
    <Box sx={{ width: '100%',height:'100%', display:{md:'grid', sm:'grid'} , justifyContent:'center' , alignItems:'center' , py:2 , px:1}}>
    <Typography variant='subtitle1' sx={{  justifyContent:'center' , display:{md:'flex',sm:'flex'} ,pb:1 }}>
     { value < 50 ? `Colleges for DaySchollers with Bike` :value <=100 ? `Colleges for DaySchollers` : value > 100 ? `Colleges for Hostelar` : null}
      </Typography>
      <DistanceSlider
        size='small'
        // value={value}
        sx={{width:{md:'320px',sm:'100%'}}}
        // aria-label="Custom marks"
        defaultValue={200}
        // getAriaValueText={valuetext}
        value={value}
        min={0}
        max={600}
        step={10}
        slots={{ thumb: ThumbComponent }}
        color="primary"
        onChange={onchange}
        valueLabelDisplay="auto"
        // marks={marks}
      />
       <Typography variant='body2' sx={{ justifyContent:'center' , display:{xs:"none" , sm:'none',md:'flex'}}} >
        Distance <b> {` ${value}`}</b>kms
      </Typography>
    </Box>
    </div>
  )
}

export default NearBySlider