import React from 'react'
import {styled } from '@mui/material';
import { FaToggleOff } from "react-icons/fa";

function ToggleLeft({sx}) {
    const ToggleL =styled(FaToggleOff)({
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
        <ToggleL  style={{height:'30px',width:'30px'}}/>
    </div>
  )
}

export default ToggleLeft