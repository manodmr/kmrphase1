import React from 'react'
import {styled } from '@mui/material';
import { IoLocationOutline } from "react-icons/io5";

function Location({sx}) {
    const Gps =styled(IoLocationOutline)({
        color:'black',
        transition:'1.5s',
        width:'30px',height:'30px',
        '&:hover':{
            color:'#55ceb4',
        },
        ...sx
    });
  return (
    <div>
        <Gps style={{height:'30px',width:'30px'}}/>
    </div>
  )
}

export default Location