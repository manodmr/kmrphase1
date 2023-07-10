import React from 'react'
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';





export default function DetailMenu() {
    const pages = ['Info', 'Courses & Fees',  'Reviews', 
    // 'CutOff', 'Scholarship', 'Admission 2023',
    'Placement', 'Ranking', 'Gallery','Videos','Faculty','News','Q&A',];
    const [value, setValue] = React.useState(0);

   
  return (
    <div>
       <AppBar position="sticky" sx={{marginBottom:'20px', minHeight:'45px'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{whiteSpace:'nowrap', overflowX:'auto', WebkitOverflowScrolling:'touch', justifyContent:'space-around', minHeight:'45px!important'}}>
        
          

        
         
          <Box sx={{ justifyContent:'space-between', alignContent:'center', flexDirection:'row', display:'flex', margin:'0'}}>
            {pages.map((page) => (
              <Button
                key={page}
                
                sx={{  color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

        
        </Toolbar>
      </Container>
    </AppBar> 


    </div>
  )
}
