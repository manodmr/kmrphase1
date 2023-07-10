import React from 'react'
import { FaSignInAlt } from "react-icons/fa";
import {styled } from '@mui/material';

function SignOut({sx}) {
    const Lock =styled(FaSignInAlt)({
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
    <Lock style={{height:'30px',width:'30px'}}/>
    </div>
  )
}

export default SignOut