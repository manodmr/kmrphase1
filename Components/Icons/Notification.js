import React from 'react'
import {styled } from '@mui/material';
import { HiOutlineBell } from "react-icons/hi";

function Notification({sx}) {
    const Bell =styled(HiOutlineBell)({
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
        <Bell style={{height:'30px',width:'30px'}}/>
    </div>
  )
}

export default Notification