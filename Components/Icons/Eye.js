import React from 'react'
import { FaEye } from "react-icons/fa";
import {styled } from '@mui/material';

function Eye({sx}) {
    const EyeIcon =styled(FaEye)({
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
    <EyeIcon style={{height:'30px',width:'30px'}}/>
    </div>
  )
}

export default Eye