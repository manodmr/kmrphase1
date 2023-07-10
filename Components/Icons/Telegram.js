import React from 'react'
import { FaTelegramPlane } from "react-icons/fa";
import {styled } from '@mui/material';
function Telegram({sx}) {
    const TeleIcon =styled(FaTelegramPlane)({
        color:'black',
        transition:'1.5s',
        width:'30px',height:'30px',
        '&:hover':{
            color:'#0088cc',
        },
        ...sx
    });
  return (
    <div>
        <TeleIcon style={{height:'30px',width:'30px'}}/>

    </div>
  )
}

export default Telegram