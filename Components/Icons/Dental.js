import React from 'react'
import { FaTooth } from "react-icons/fa";
import {styled } from '@mui/material';
function Dental({sx}) {
    const Tooth =styled(FaTooth)({
        color:'black',
        transition:'1.5s',
        width:'30px',height:'30px',
        '&:hover':{
            color:'blue',
        },
        ...sx
    });
  return (
    <div>
    <Tooth style={{height:'30px',width:'30px'}}/><br/>
    </div>
  )
}

export default Dental