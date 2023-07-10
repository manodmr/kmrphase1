import React from 'react'
import { BiSortAlt2} from "react-icons/bi";
import {styled } from '@mui/material';

function Sort({sx}) {
    const SortIcon =styled(BiSortAlt2)({
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
        <SortIcon style={{height:'30px',width:'30px'}}/>
    </div>
  )
}

export default Sort