import { AppBar, Avatar, Box, Button, IconButton, InputBase, Toolbar, Typography } from '@mui/material'
import { AccountCircle, Home, Login, Menu as MenuIcon, Search , AccountBalance as College , Castle as University  ,School as Stream , BusinessCenter as IIT, LanOutlined} from '@mui/icons-material';
import React, { useState } from 'react'
import kmrLogotam from '/public/icons/kalvimalar-english-logo.png';
import Image from 'next/image';
import Link from 'next/link';

function tamil() {
  return (
    <Box sx={{margin:'35px 0', textAlign: 'center'}}> 
    <Typography>
      கல்விமலருக்கு வரவேற்கிறோம் 
    </Typography>
    </Box>
  )
}

export default tamil
