import React from 'react'
import { GiFizzingFlask } from "react-icons/gi";
import {styled } from '@mui/material';

function ChemicalLab({sx}) {
    const Lab =styled(GiFizzingFlask)({
        color:'primary.main',
        transition:'1.5s',
        width:'30px',height:'30px',
        '&:hover':{
            color:'yellow',
        },
        ...sx
    });
  return (
    <div>
        <Lab style={{height:'30px',width:'30px'}}/>

    </div>
  )
}

export default ChemicalLab