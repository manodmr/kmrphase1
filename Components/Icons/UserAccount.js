import React from 'react'
import { MdOutlineAccountCircle } from "react-icons/md";
import {styled } from '@mui/material';

function UserAccount({sx}) {
    const UserIcon =styled(MdOutlineAccountCircle)({
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
        <UserIcon style={{height:'30px',width:'30px'}}/>
    </div>
  )
}

export default UserAccount