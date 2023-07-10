import React from 'react'
import {styled } from '@mui/material';
import { MdSportsCricket } from "react-icons/md";

// import { FcSportsMode } from "react-icons/fc";
function Sports({sx}) {
    const Sportsui =styled(MdSportsCricket)({
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
    <Sportsui style={{height:'30px',width:'30px'}}/><br/>
    
    {/* <FcSportsMode style={{height:'40px',width:'40px'}}/> */}
    </div>
  )
}

export default Sports