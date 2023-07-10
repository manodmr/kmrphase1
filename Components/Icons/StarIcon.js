import React from 'react'
import {styled } from '@mui/material';
import { AiFillStar } from "react-icons/ai";

function StarIcon() {
    const Star =styled(AiFillStar)({
        color:'#FCC419',       
        width:'30px',height:'30px',   
    });

  return (
    <div>
    <Star style={{height:'30px',width:'30px'}}/>
    </div>
  )
}

export default StarIcon