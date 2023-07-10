import React from 'react'
import { TfiYoutube } from "react-icons/tfi";
import {styled } from '@mui/material';
function Youtube({sx}) {
    const YouIcon =styled(TfiYoutube)({
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
        <YouIcon style={{height:'30px',width:'30px'}}/>
    </div>
  )
}

export default Youtube