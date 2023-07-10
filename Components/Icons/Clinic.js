import React from 'react'
import { AiFillMedicineBox } from "react-icons/ai";
import {styled } from '@mui/material';

function Clinic({sx}) {
    const Medical =styled(AiFillMedicineBox)({
        color:'primary.main',
        transition:'1.5s',
        width:'30px',height:'30px',
        '&:hover':{
            color:'Red',
        },
        ...sx
    });
  return (
    <div>
        <Medical style={{height:'30px',width:'30px'}}/>

    </div>
  )
}

export default Clinic