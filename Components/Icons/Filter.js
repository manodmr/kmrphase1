import React from 'react'
import { HiAdjustments } from "react-icons/hi";
import {styled } from '@mui/material';

function Filter({sx}) {
    const Fill =styled(HiAdjustments)({
        color:'black',
        transition:'1.5s',
        width:'30px',height:'30px',
        '&:hover':{
            color:'#0072b1',
        },
        ...sx
    });
  return (
    <div>    
    <Fill style={{height:'30px',width:'30px'}}/>
    </div>
  )
}

export default Filter