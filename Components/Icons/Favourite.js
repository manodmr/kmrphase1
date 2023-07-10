import React from 'react'
import { MdOutlineFavoriteBorder } from "react-icons/md";
import {styled } from '@mui/material';

function Favourite({sx}) {
    const FavIcon =styled(MdOutlineFavoriteBorder)({
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
        <FavIcon style={{height:'30px',width:'30px'}}/>
    </div>
  )
}

export default Favourite