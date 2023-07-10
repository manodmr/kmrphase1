import React from 'react'
import {styled } from '@mui/material';
import { TiTick } from "react-icons/ti";

function Apply({sx}) {
    const Tick =styled(TiTick )({
        color:'black',
        transition:'1.5s',       
        '&:hover':{
            color:'#E96479',
        },
        ...sx
      });
  return (
    <div>
    <Tick style={{height:'30px',width:'30px'}}/><br/>
    </div>
  )
}

export default Apply