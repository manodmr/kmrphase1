import React from 'react'
import { AiFillShop } from "react-icons/ai";
import {styled } from '@mui/material';
function Canteen({sx}) {
    const Cafe =styled(AiFillShop)({
        color:'primary.main',
        transition:'1.5s',
        width:'30px',height:'30px',
        '&:hover':{
            color:'#E96479',
        },
        ...sx
    });
  return (
    <div>
        <Cafe style={{height:'30px',width:'30px'}}/>
    </div>
  )
}

export default Canteen