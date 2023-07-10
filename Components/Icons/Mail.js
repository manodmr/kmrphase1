import React from 'react'
import { ImMail2 } from "react-icons/im";
import {styled } from '@mui/material';

function Mail({sx}) {
    const MailIcon =styled(ImMail2)({
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
        <MailIcon style={{height:'30px',width:'30px'}}/>
    </div>
  )
}

export default Mail
