import React from 'react'
import { FaToggleOn } from "react-icons/fa";
import {styled } from '@mui/material';

function ToggleRight({sx}) {
    const ToggleR =styled(FaToggleOn)({
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
        <ToggleR  style={{height:'30px',width:'30px'}}/>
    </div>
  )
}

export default ToggleRight