import React from 'react'
import { RiCoinsFill } from "react-icons/ri";
import {styled } from '@mui/material';

function Economics({sx}) {
    const Eco =styled(RiCoinsFill)({
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
        <Eco style={{height:'30px',width:'30px'}}/>
    </div>
  )
}

export default Economics