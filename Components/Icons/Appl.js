import React from 'react'
import { AiOutlineArrowRight } from "react-icons/ai";
import {styled } from '@mui/material';
function Appl({sx}) {
    const Apply =styled(AiOutlineArrowRight )({
        color:'black',
        transition:'1.5s',
        width:'30px',height:'30px',
        '&:hover':{
            color:'#E96479',
        },
        ...sx
    });
    const ButtonIcon =styled(Button)({
        backgroundColor:'#579BB1',
        color:'black',
        transition:'1.5s',
        '&:hover':{
            backgroundColor:'#CCF2F4',
        },
        ...sx
    });
  return (
    <div>
    <ButtonIcon variant="contained" size="large" startIcon={<Apply />} >
       Apply
        </ButtonIcon>
    

    </div>
  )
}

export default Appl