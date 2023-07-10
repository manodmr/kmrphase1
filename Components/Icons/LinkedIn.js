import React from 'react'
import { RiLinkedinBoxFill } from "react-icons/ri";
import {styled } from '@mui/material';

function LinkedIn({sx}) {
    const Linked =styled(RiLinkedinBoxFill)({
        color:'black',
        transition:'1.5s',
        width:'30px',height:'30px',
        '&:hover':{
            color:'#0072b1',
        },
        ...sx
    });
  return (
    <div>
    <Linked style={{height:'30px',width:'30px'}}/>

    </div>
  )
}

export default LinkedIn

