import React from 'react'
import {styled } from '@mui/material';
import { HiOutlineSearch } from "react-icons/hi";

function Search({sx}) {
    const SearchIcon =styled(HiOutlineSearch)({
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
        <SearchIcon style={{height:'30px',width:'30px'}}/>
    </div>
  )
}

export default Search