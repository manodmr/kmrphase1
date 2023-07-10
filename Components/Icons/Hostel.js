import React from 'react'
import { FaBed } from "react-icons/fa";
import {styled } from '@mui/material';

function Hostel({sx}) {
    const Hostelui =styled(FaBed)({
        color:'primary.main',
        transition:'1.5s',
        width:'30px',height:'30px',
        '&:hover':{
            color:'#E96479',
        },
        ...sx
      });
  return (
    <div>
    <Hostelui style={{height:'30px',width:'30px'}}/>
    </div>
  )
}

export default Hostel