import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

export default function ScrollableTabsButtonForce() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{  background: 'linear-gradient(to right, #d1f3ec, #aee0f9)', margin:"1em 0" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons
        allowScrollButtonsMobile
        aria-label="scrollable force tabs example"
      >
        <Tab label="Info" sx={{marginRight:"10px !important", color:"#0093AB !important;"}} />
        <Tab label="Courses & Fees" sx={{marginRight:"10px !important;", color:"#333 !important;"}} />
        <Tab label="Admission 2023" sx={{marginRight:"10px !important;", color:"#333 !important;"}} />
        <Tab label="Reviews" sx={{marginRight:"10px !important;", color:"#333 !important;"}} />
        <Tab label="CutOff" sx={{marginRight:"10px !important;", color:"#333 !important;"}} />
        <Tab label="Placement" sx={{marginRight:"10px !important;", color:"#333 !important;"}} />
        <Tab label="Gallery"  sx={{marginRight:"10px !important;", color:"#333 !important;"}} />
      </Tabs>
    </Box>
  );
}