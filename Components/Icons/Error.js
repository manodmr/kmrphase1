import React from 'react'
import { IoAlertCircle } from "react-icons/io5";
import {styled } from '@mui/material';


function Error({sx}) {
    const Err =styled(IoAlertCircle)({
        color:'black',
        transition:'1.5s',
        width:'30px',height:'30px',
        '&:hover':{
            color:'red',
        },
        ...sx
    });
  return (
    <div>
        <Err style={{height:'30px',width:'30px'}}/>
    </div>
  )
}

export default Error