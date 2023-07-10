import React from 'react'
import { HiHome } from "react-icons/hi";
import {styled } from '@mui/material';


function Home({sx}) {
    const HomeIcon =styled(HiHome)({
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
        <HomeIcon style={{height:'30px',width:'30px'}}/>

    </div>
  )
}

export default Home