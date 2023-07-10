import React from 'react'
import { HiLanguage } from "react-icons/hi2";
import {styled } from '@mui/material';

function Language({sx}) {
    const LangIcon =styled(HiLanguage)({
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
        <LangIcon style={{height:'30px',width:'30px'}}/>

    </div>
  )
}

export default Language