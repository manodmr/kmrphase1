import React from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

export default function DetailScrollMenu() {
  
  return (
    <>
       
      <Tabs sx={{width:'68%', color:'#fff', minHeight:'22px', marginRight:'25px',}}
        // value={value}
        // onChange={handleChange}
        variant="scrollable"
        scrollButtons
        allowScrollButtonsMobile
        aria-label="scrollable force tabs example"
        textColor='#fff'
      >
        <Tab label="Info" sx={{minHeight:'22px',  background:'#0093AB', borderRadius:'50px', lineHeight:'normal'}} />
        <Tab label="Courses & Fees" sx={{minHeight:'22px',}} />
        <Tab label="Reviews" sx={{minHeight:'22px',}} />
        <Tab label="Placement" sx={{minHeight:'22px',}} />
        <Tab label="Ranking" sx={{minHeight:'22px',}} />
        <Tab label="Gallery" sx={{minHeight:'22px',}} />
        <Tab label="Videos" sx={{minHeight:'22px',}}/>
        <Tab label="Faculty" sx={{minHeight:'22px',}} />
        <Tab label="News" sx={{minHeight:'22px',}} />
        <Tab label="Q&A" sx={{minHeight:'22px',}} />
      </Tabs>
      
    </>
  )
}
