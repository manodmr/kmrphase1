import React from 'react'
import { FaFacebook } from "react-icons/fa";
import {styled } from '@mui/material';

function Facebook({sx}) {
    const FacebookIcon =styled(FaFacebook)({
            color:'grey',
            transition:'0.8s',
            width:'30px',height:'30px',
            '&:hover':{
                
                color:'#3b5996',
            },
            ...sx
        });
  return (
    <div>
    <FacebookIcon style={{height:'40px',width:'40px'}}/>
    </div>
  )
}

export default Facebook