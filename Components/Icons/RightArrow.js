import React from 'react'
import { CgChevronDoubleRightR } from "react-icons/cg";
import {styled } from '@mui/material';

function RightArrow({sx}) {
    const RightAr =styled(CgChevronDoubleRightR)({
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
        <RightAr  style={{height:'30px',width:'30px'}}/>
    </div>
  )
}

export default RightArrow