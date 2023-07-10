import React from 'react'
import { MdOutlineEngineering } from "react-icons/md";
import {styled } from '@mui/material';


function Engineering({sx}) {
    const Engineer =styled(MdOutlineEngineering)({
        color:'black',
        transition:'1.5s',
        width:'30px',height:'30px',
        '&:hover':{
            color:'#E96479',
        },
        ...sx
      });
  return (
    <div>
        <Engineer style={{height:'40px',width:'40px'}}/>

    </div>
  )
}

export default Engineering