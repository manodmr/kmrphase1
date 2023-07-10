import React from 'react'
import {styled } from '@mui/material';
import { MdOutlineBrightnessLow } from "react-icons/md";

function Lightmode({sx}) {
    const Bright =styled(MdOutlineBrightnessLow)({
        color:'black',
        transition:'1.5s',
        width:'30px',height:'30px',
        '&:hover':{
            color:'yellow',
        },
        ...sx
    });
  return (
    <div>
            <Bright style={{height:'30px',width:'30px'}}/>

    </div>
  )
}

export default Lightmode