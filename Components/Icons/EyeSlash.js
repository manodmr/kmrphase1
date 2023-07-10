import React from 'react'
import { FaEyeSlash } from "react-icons/fa";
import {styled } from '@mui/material';

function EyeSlash({sx}) {
    const EyeIcon =styled(FaEyeSlash)({
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

export default EyeSlash