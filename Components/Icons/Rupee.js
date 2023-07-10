import React from 'react'
import { HiOutlineCurrencyRupee } from "react-icons/hi";
import {styled } from '@mui/material';

function Rupee({sx}) {
    const ShareIcon =styled(HiOutlineCurrencyRupee)({
        color:'black',
        transition:'1.5s',
        width:'30px',height:'30px',
        '&:hover':{
            color:' #00a7ce',
        },
        ...sx
    });
  return (
    <div>
        <ShareIcon style={{height:'30px',width:'30px'}}/>
    </div>
  )
}

export default Rupee