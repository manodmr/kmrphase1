import React from 'react'
import { GiBus } from "react-icons/gi";
import {styled } from '@mui/material';

function Transport() {
    const BusIcon =styled(GiBus)({
        color:'primary',
        transition:'1.5s',
        width:'30px',height:'30px',
       
        
    });
  return (
    <div>
        <BusIcon style={{height:'30px',width:'30px'}}/>
    </div>
  )
}

export default Transport