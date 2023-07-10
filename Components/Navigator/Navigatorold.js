import {
  AppBar,
  Toolbar,
  Button,
  Stack,
  Menu,
  MenuItem,
  List,
    ListItem,
    ListItemIcon,
    ListItemText,
    ListItemButton,
} from '@mui/material'
import Image from 'next/image';

import Divider from '@mui/material/Divider';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import { useState } from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Home from '@mui/icons-material/Home';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import People from '@mui/icons-material/People';
import PermMedia from '@mui/icons-material/PermMedia';
import Dns from '@mui/icons-material/Dns';
import Public from '@mui/icons-material/Public';
import SchoolIcon from '@mui/icons-material/School';
import ArrowRight from '@mui/icons-material/ArrowRight';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';

import btechIcon from '/public/icons/kicons-1.png';
import mbaIcon from '/public/icons/kicons-2.png';
import mbbsIcon from '/public/icons/kicons-3.png';
import designIcon from '/public/icons/kicons-4.png';
import lawIcon from '/public/icons/kicons-5.png';
import scienceIcon from '/public/icons/kicons-6.png';
import abroadIcon from '/public/icons/kicons-7.png';

import { experimentalStyled as styled } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';

const Navigatorold = () => {
  const [anchorEl, setAnchorEl] = useState(null)
  const open1 = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  const [anchorE2, setAnchorE2] = useState(null)
  const open2 = Boolean(anchorE2)
  const handleClick2 = (event) => {
    setAnchorE2(event.currentTarget)
  }
  const handleClose2 = () => {
    setAnchorE2(null)
  }
  const [anchorE3, setAnchorE3] = useState(null)
  const open3 = Boolean(anchorE3)
  const handleClick3 = (event) => {
    setAnchorE3(event.currentTarget)
  }
  const handleClose3 = () => {
    setAnchorE3(null)
  }

  const [anchorE4, setAnchorE4] = useState(null)
  const open4 = Boolean(anchorE4)
  const handleClick4 = (event) => {
    setAnchorE4(event.currentTarget)
  }
  const handleClose4 = () => {
    setAnchorE4(null)
  }

  const [anchorE5, setAnchorE5] = useState(null)
  const open5 = Boolean(anchorE5)
  const handleClick5 = (event) => {
    setAnchorE5(event.currentTarget)
  }
  const handleClose5 = () => {
    setAnchorE5(null)
  }

  const [anchorE6, setAnchorE6] = useState(null)
  const open6 = Boolean(anchorE6)
  const handleClick6 = (event) => {
    setAnchorE6(event.currentTarget)
  }
  const handleClose6 = () => {
    setAnchorE6(null)
  }

  const [anchorE7, setAnchorE7] = useState(null)
  const open7 = Boolean(anchorE7)
  const handleClick7 = (event) => {
    setAnchorE7(event.currentTarget)
  }
  const handleClose7 = () => {
    setAnchorE7(null)
  }

  const FireNav = styled(List)({
    '& .MuiListItemButton-root': {
      paddingLeft: 24,
      paddingRight: 24,
    },
    '& .MuiListItemIcon-root': {
      minWidth: 0,
      marginRight: 16,
    },
    '& .MuiSvgIcon-root': {
      fontSize: 20,
    },
  });
 
  const colWidth = { xs: 12, sm: 6, md: 4, lg: 3 };
  const btechdata = [
    { icon: <SchoolIcon />, label: 'Top NITs in India' },
    { icon: <SchoolIcon />, label: 'Top IIITs in India' },
    { icon: <SchoolIcon />, label: 'Top IITs in India' },
    { icon: <SchoolIcon />, label: 'Government B.Tech Colleges in India' },
    { icon: <SchoolIcon />, label: 'Top Private B.Tech Colleges in India' },
    { icon: <SchoolIcon />, label: 'B.Tech Colleges with Lowest Fees' },
  ];
  const btechdatacollege = [
    { icon: <RadioButtonCheckedIcon />, label: 'COMPUTER SCIENCE [3843]' },
    { icon: <RadioButtonCheckedIcon />, label: 'MECHANICAL ENGINEERING [3623]' },
    { icon: <RadioButtonCheckedIcon />, label: 'ELECTRONICS & COMMUNICATION [3424]' },
    { icon: <RadioButtonCheckedIcon />, label: 'CIVIL ENGINEERING [3305]' },
    { icon: <RadioButtonCheckedIcon />, label: 'ELECTRICAL & ELECTRONICS [2000]' },
    { icon: <RadioButtonCheckedIcon />, label: 'INFORMATION TECHNOLOGY [1766]' },
    { icon: <RadioButtonCheckedIcon />, label: 'ELECTRICAL [1392]' },
    { icon: <RadioButtonCheckedIcon />, label: 'CHEMICAL ENGINEERING [419]' },
  ];


  const mbaIndia = [
    { icon: <SchoolIcon />, label: 'Top MBA in India' },
    { icon: <SchoolIcon />, label: 'Top IIITs in India' },
    { icon: <SchoolIcon />, label: 'Top IITs in India' },
    { icon: <SchoolIcon />, label: 'Government B.Tech Colleges in India' },
    { icon: <SchoolIcon />, label: 'Top Private B.Tech Colleges in India' },
    { icon: <SchoolIcon />, label: 'B.Tech Colleges with Lowest Fees' },
  ];
  const mbaStreams = [
    { icon: <People />, label: 'ACCOUNTS [3843]' },
    { icon: <Dns />, label: 'MECHANICAL ENGINEERING [3623]' },
    { icon: <PermMedia />, label: 'ELECTRONICS & COMMUNICATION [3424]' },
    { icon: <Public />, label: 'CIVIL ENGINEERING [3305]' },
    { icon: <Public />, label: 'ELECTRICAL & ELECTRONICS [2000]' },
    { icon: <Public />, label: 'INFORMATION TECHNOLOGY [1766]' },
    { icon: <Public />, label: 'ELECTRICAL [1392]' },
   
  ];


  const mbbsIndia = [
    { icon: <SchoolIcon />, label: 'Top MBBS Colleges in India' },
    { icon: <SchoolIcon />, label: 'Top IIITs in India' },
    { icon: <SchoolIcon />, label: 'Top IITs in India' },
    { icon: <SchoolIcon />, label: 'Government B.Tech Colleges in India' },
    { icon: <SchoolIcon />, label: 'Top Private B.Tech Colleges in India' },
    { icon: <SchoolIcon />, label: 'B.Tech Colleges with Lowest Fees' },
  ];
  const mbbsStreams = [
    { icon: <People />, label: 'DENTAL [3843]' },
    { icon: <Dns />, label: 'MECHANICAL ENGINEERING [3623]' },
    { icon: <PermMedia />, label: 'ELECTRONICS & COMMUNICATION [3424]' },
    { icon: <Public />, label: 'CIVIL ENGINEERING [3305]' },
    { icon: <Public />, label: 'ELECTRICAL & ELECTRONICS [2000]' },
    { icon: <Public />, label: 'INFORMATION TECHNOLOGY [1766]' },
    { icon: <Public />, label: 'ELECTRICAL [1392]' },
   
  ];

  const designIndia = [
    { icon: <SchoolIcon />, label: 'Top Design Colleges in Bangalore' },
    { icon: <SchoolIcon />, label: 'Top Design Colleges in Chennai' },
    { icon: <SchoolIcon />, label: 'Top Design Colleges in Mumbai' },
    { icon: <SchoolIcon />, label: 'Top Design Colleges in Kolkata' },
    { icon: <SchoolIcon />, label: 'Top Design Colleges in New Delhi' },
    { icon: <SchoolIcon />, label: 'Top Design Colleges in Coimbatore' },
  ];
  const designStreams = [
    { icon: <People />, label: 'FASHION DESIGN [774]' },
    { icon: <Dns />, label: 'INTERIOR DESIGN [565]' },
    { icon: <PermMedia />, label: 'TEXTILE DESIGN [254] ' },
    { icon: <Public />, label: 'COMMUNICATION STUDIES [143]' },
    { icon: <Public />, label: 'INDUSTRIAL DESIGN' },
    { icon: <Public />, label: 'JEWELLERY DESIGN' },
    { icon: <Public />, label: 'AUTOMOBILE DESIGN [45]' },
   
  ];


  const lawIndia = [
    { icon: <SchoolIcon />, label: 'Top law Colleges in Bangalore' },
    { icon: <SchoolIcon />, label: 'Top law Colleges in Chennai' },
    { icon: <SchoolIcon />, label: 'Top law Colleges in Mumbai' },
    { icon: <SchoolIcon />, label: 'Top law Colleges in Kolkata' },
    { icon: <SchoolIcon />, label: 'Top law Colleges in New Delhi' },
    { icon: <SchoolIcon />, label: 'Top law Colleges in Coimbatore' },
  ];
  const lawStreams = [
    { icon: <People />, label: 'FASHION DESIGN [774]' },
    { icon: <Dns />, label: 'INTERIOR DESIGN [565]' },
    { icon: <PermMedia />, label: 'TEXTILE DESIGN [254] ' },
    { icon: <Public />, label: 'COMMUNICATION STUDIES [143]' },
    { icon: <Public />, label: 'INDUSTRIAL DESIGN' },
    { icon: <Public />, label: 'JEWELLERY DESIGN' },
    { icon: <Public />, label: 'AUTOMOBILE DESIGN [45]' },
   
  ];

  const scienceIndia = [
    { icon: <SchoolIcon />, label: 'Top Science Colleges in Bangalore' },
    { icon: <SchoolIcon />, label: 'Top Science Colleges in Chennai' },
    { icon: <SchoolIcon />, label: 'Top Science Colleges in Mumbai' },
    { icon: <SchoolIcon />, label: 'Top Science Colleges in Kolkata' },
    { icon: <SchoolIcon />, label: 'Top Science Colleges in New Delhi' },
    { icon: <SchoolIcon />, label: 'Top Science Colleges in Coimbatore' },
  ];
  const scienceStreams = [
    { icon: <People />, label: 'FASHION DESIGN [774]' },
    { icon: <Dns />, label: 'INTERIOR DESIGN [565]' },
    { icon: <PermMedia />, label: 'TEXTILE DESIGN [254] ' },
    { icon: <Public />, label: 'COMMUNICATION STUDIES [143]' },
    { icon: <Public />, label: 'INDUSTRIAL DESIGN' },
    { icon: <Public />, label: 'JEWELLERY DESIGN' },
    { icon: <Public />, label: 'AUTOMOBILE DESIGN [45]' },
   
  ];

  const abroadIndia = [
    { icon: <SchoolIcon />, label: 'MBA' },
    { icon: <SchoolIcon />, label: 'MS' },
    { icon: <SchoolIcon />, label: 'MS IN DATA SCIENCE ' },
    { icon: <SchoolIcon />, label: 'LLM ' },
    { icon: <SchoolIcon />, label: 'BBA ' },
  ];
  const abroadStreams = [
    { icon: <People />, label: 'Data Science & Analytics' },
    { icon: <Dns />, label: 'Computer Science & Engineering' },
    { icon: <PermMedia />, label: 'Engineering ' },
    { icon: <Public />, label: 'Business' },
    { icon: <Public />, label: 'Medicine' },

   
  ];
  
return (
  <AppBar position='static' color='transparent' sx={{ bgcolor: 'common.white', color:'#000', height: 'auto' , overflowX:{xs: 'scroll', sm: 'scroll', md: 'hidden', lg: 'hidden'}, textAlign:'center', margin:'auto', boxSizing:'border-box',
  whiteSpace: 'nowrap', justifyContent:{sm: 'normal', md: 'center', lg: 'center'}, width: '100%', }} >
  <Toolbar sx={{justifyContent:{sm: 'normal', md: 'center', lg: 'center'}, marginTop:'5px', 
  marginLeft:{sm: '10px', md: '0', lg: '0'}}}>
      <Stack direction='row' spacing={2}>
      <Button sx={{fontSize:{sm: '13px', md: '15px', lg: '16px'}, textAlign:'center', 
      flexDirection:'column', display:'block', 
      marginRight:{sm: '15px', md: '5px', lg: '8px'}, 
      marginLeft:{sm: '15px', md: '5px', lg: '8px'}}}
        color='inherit'
        id='menu-button'
        aria-controls={open1 ? 'menu-menu' : undefined}
        aria-haspopup='true'
        aria-expanded={open1 ? 'true' : undefined}
        // endIcon={<KeyboardArrowDownIcon sx={{display:{xs: 'none', md: 'flex', lg: 'flex'}}} />}
        onClick={handleClick}>
            <ListItemIcon sx={{marginBottom:'8px', marginRight:'0', display:'block'}}>
                      <Image
                className='micon'
                src={btechIcon}
                alt="B.Tech"
                width={'50'}
                height={'50'}
                onSelect={{color:'#ddd'}}
                
            />
                      </ListItemIcon>
       B.Tech
      </Button>
      <Button sx={{fontSize:{sm: '13px', md: '15px', lg: '16px'}, textAlign:'center', 
      flexDirection:'column', display:'block', 
      marginRight:{sm: '15px', md: '5px', lg: '8px'}, 
      marginLeft:{sm: '15px', md: '5px', lg: '8px'}}}
        color='inherit'
        id='menu2-button'
        aria-controls={open2 ? 'menu2-menu' : undefined}
        aria-haspopup='true'
        aria-expanded={open2 ? 'true' : undefined}
        // endIcon={<KeyboardArrowDownIcon sx={{display:{xs: 'none', md: 'flex', lg: 'flex'}}}/>}
        onClick={handleClick2}>
          <ListItemIcon sx={{marginBottom:'8px', marginRight:'0', display:'block'}}>
                      <Image
                className='micon'
                src={mbaIcon}
                alt="MBA"
                width={'50'}
                height={'50'}
            />
                      </ListItemIcon>
        MBA
      </Button>
  
      <Button sx={{fontSize:{sm: '13px', md: '15px', lg: '16px'}, textAlign:'center', 
      flexDirection:'column', display:'block', 
      marginRight:{sm: '15px', md: '5px', lg: '8px'}, 
      marginLeft:{sm: '15px', md: '5px', lg: '8px'}}}
        color='inherit'
        id='menu3-button'
        aria-controls={open3 ? 'menu3-menu' : undefined}
        aria-haspopup='true'
        aria-expanded={open3 ? 'true' : undefined}
        // endIcon={<KeyboardArrowDownIcon sx={{display:{xs: 'none', md: 'flex', lg: 'flex'}}} />}
        onClick={handleClick3}>
           <ListItemIcon sx={{marginBottom:'8px', marginRight:'0', display:'block'}}>
                      <Image
                className='micon'
                src={mbbsIcon}
                alt="MBBS"
                width={'50'}
                height={'50'}
            />
                      </ListItemIcon>
        MBBS
      </Button>

      <Button sx={{fontSize:{sm: '13px', md: '15px', lg: '16px'}, textAlign:'center', 
      flexDirection:'column', display:'block', 
      marginRight:{sm: '15px', md: '5px', lg: '8px'}, 
      marginLeft:{sm: '15px', md: '5px', lg: '8px'}}}
      color='inherit'
        id='menu4-button'
        aria-controls={open4 ? 'menu4-menu' : undefined}
        aria-haspopup='true'
        aria-expanded={open4 ? 'true' : undefined}
        // endIcon={<KeyboardArrowDownIcon sx={{display:{xs: 'none', md: 'flex', lg: 'flex'}}}/>}
        onClick={handleClick4}>
           <ListItemIcon sx={{marginBottom:'8px', marginRight:'0', display:'block'}}>
                      <Image
                className='micon'
                src={designIcon}
                alt="Design"
                width={'50'}
                height={'50'}
            />
                      </ListItemIcon>
          Design</Button>

          <Button sx={{fontSize:{sm: '13px', md: '15px', lg: '16px'}, textAlign:'center', 
      flexDirection:'column', display:'block', 
      marginRight:{sm: '15px', md: '5px', lg: '8px'}, 
      marginLeft:{sm: '15px', md: '5px', lg: '8px'}}}
          color='inherit'
        id='menu5-button'
        aria-controls={open5 ? 'menu5-menu' : undefined}
        aria-haspopup='true'
        aria-expanded={open5 ? 'true' : undefined}
        // endIcon={<KeyboardArrowDownIcon sx={{display:{xs: 'none', md: 'block', lg: 'block'}}}/>}
        onClick={handleClick5}>
          <ListItemIcon sx={{marginBottom:'8px', marginRight:'0', display:'block'}}>
                      <Image 
                className='micon'
                src={lawIcon}
                label="Law"
                alt="Law"
                width={'50'}
                height={'50'}
            />
                      </ListItemIcon>
                      Law
          </Button>


          <Button sx={{fontSize:{sm: '13px', md: '15px', lg: '16px'}, textAlign:'center', 
      flexDirection:'column', display:'block', 
      marginRight:{sm: '15px', md: '5px', lg: '8px'}, 
      marginLeft:{sm: '15px', md: '5px', lg: '8px'}}}
          color='inherit'
        id='menu6-button'
        aria-controls={open6 ? 'menu6-menu' : undefined}
        aria-haspopup='true'
        aria-expanded={open6 ? 'true' : undefined}
        // endIcon={<KeyboardArrowDownIcon sx={{display:{xs: 'none', md: 'flex', lg: 'flex'}}}/>}
        onClick={handleClick6}>
           <ListItemIcon sx={{marginBottom:'8px', marginRight:'0', display:'block'}}>
                      <Image
                className='micon'
                src={scienceIcon}
                alt="Science"
                width={'50'}
                height={'50'}
            />
                      </ListItemIcon>
          Science</Button>

          <Button sx={{fontSize:{sm: '13px', md: '15px', lg: '16px'}, textAlign:'center', 
      flexDirection:'column', display:'block', 
      marginRight:{sm: '15px', md: '5px', lg: '8px'}, 
      marginLeft:{sm: '15px', md: '5px', lg: '8px'}}}
          color='inherit'
        id='menu7-button'
        aria-controls={open7 ? 'menu7-menu' : undefined}
        aria-haspopup='true'
        aria-expanded={open7 ? 'true' : undefined}
        // endIcon={<KeyboardArrowDownIcon sx={{display:{xs: 'none', md: 'flex', lg: 'flex'}}}/>}
        onClick={handleClick7}>
           <ListItemIcon sx={{marginBottom:'8px', marginRight:'0', display:'block'}}>
                      <Image className='micon'
                src={abroadIcon}
                alt="Study Abroad"
                width={'50'}
                height={'50'}
                
            />
                      </ListItemIcon>
         Study Abroad</Button>




    </Stack>

    <Menu sx={{display:{xs: 'none', md: 'block', lg: 'block'}}}
      id='menu-menu'
      anchorEl={anchorEl}
      open={open1}
      onClose={handleClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right'
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right'
      }}
      MenuListProps={{
        'aria-labelledby': 'menu-button'
      }}>
      <Box sx={{ width: 728,  }}>
              <Grid sx={{ pb: 0,}} container spacing={{ xs: 0, md: 1 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      <Grid xs={2} sm={4} md={6}>
       <FireNav component="nav" disablePadding>
            <ListItemButton component="a" href="#customized-list">
              <ListItemIcon sx={{ fontSize: 18 }}>🔥</ListItemIcon>
              <ListItemText
                sx={{ my: 0 }}
                primary="TOP B.TECH COLLEGES IN INDIA"
                primaryTypographyProps={{
                  fontSize: 16,
                  fontWeight: 'medium',
                  letterSpacing: 0,
                }}
              />
            </ListItemButton>
            <Divider />
      
            <Box
              sx={{
                bgcolor: open1 ? '#f0f4f7' : null,
                pb: open1 ? 2 : 0,
               
              }}
            >
          
              {open1 &&
                btechdata.map((item) => (
                  <ListItemButton
                    key={item.label}
                    sx={{ py: 0, minHeight: 32, color: '#666',}}
                  >
                    <ListItemIcon sx={{ color: 'inherit', }}>
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={item.label}
                      primaryTypographyProps={{ fontSize: 14, fontWeight: 'medium' }}
                    />
                  </ListItemButton>
                ))}
            </Box>
                  <ListItem component="div" disablePadding>
              <ListItemButton sx={{ height: 56 }}>
                <ListItemIcon>
                  <AccountBalanceIcon color="primary" />
                </ListItemIcon>
                <ListItemText
                  primary="FEATURED B.TECH COLLEGES IN INDIA"
                  primaryTypographyProps={{
                    color: 'primary',
                    fontWeight: 'medium',
                    variant: 'body2',
                    
                  }}
                />
              </ListItemButton>
             
            </ListItem>
          
          </FireNav>
         
        </Grid>
       
          <Grid xs={2} sm={4} md={6}>
        <Box
              sx={{
                bgcolor: open1 ? '#fff' : null,
                pb: open1 ? 2 : 0,
              }}
            >
              <ListItem component="div" disablePadding>
              <ListItemButton sx={{ height: 44 }}>
                <ListItemIcon>
                  <MenuBookIcon color="primary" />
                </ListItemIcon>
                <ListItemText
                  primary="B.Tech Colleges Popular Streams"
                  primaryTypographyProps={{
                    color: 'primary',
                    fontWeight: 'medium',
                    variant: 'body2',
                    fontSize: 16,
                    
                  }}
                />
              </ListItemButton>
             
            </ListItem>
            <Divider />
              {open1 &&
                btechdatacollege.map((item) => (
                  <ListItemButton
                    key={item.label}
                    sx={{ py: 0, minHeight: 32, color: '#666',}}
                  > 
                    {/* <ListItemIcon sx={{ color: '#ccc' }}>
                      {item.icon}
                    </ListItemIcon> */}
                    <ListItemText
                      primary={item.label}
                      primaryTypographyProps={{ fontSize: 14, fontWeight: 'medium' }}
                    />
                  </ListItemButton>
                ))}
            </Box>
          </Grid>
        
      </Grid>
            </Box>
    </Menu>

   {/*  MBA dropdown  */}

    <Menu sx={{display:{xs: 'none', md: 'block', lg: 'block'}}}
      id='menu2-menu'
      anchorEl={anchorE2}
      open={open2}
      onClose={handleClose2}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right'
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right'
      }}
      MenuListProps={{
        'aria-labelledby': 'menu2-button'
      }}>
      <Box sx={{ width: 728,  }}>
              <Grid sx={{ pb: 0,}} container spacing={{ xs: 0, md: 1 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      <Grid xs={2} sm={4} md={6}>
       <FireNav component="nav" disablePadding>
            <ListItemButton component="a" href="#customized-list">
              <ListItemIcon sx={{ fontSize: 18 }}>🔥</ListItemIcon>
              <ListItemText
                sx={{ my: 0 }}
                primary="TOP MBA COLLEGES IN INDIA"
                primaryTypographyProps={{
                  fontSize: 16,
                  fontWeight: 'medium',
                  letterSpacing: 0,
                }}
              />
            </ListItemButton>
            <Divider />
      
            <Box
              sx={{
                bgcolor: open2 ? '#f0f4f7' : null,
                pb: open2 ? 2 : 0,
               
              }}
            >
          
              {open2 &&
                mbaIndia.map((item) => (
                  <ListItemButton
                    key={item.label}
                    sx={{ py: 0, minHeight: 32, color: '#666',}}
                  >
                    <ListItemIcon sx={{ color: 'inherit' }}>
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={item.label}
                      primaryTypographyProps={{ fontSize: 14, fontWeight: 'medium' }}
                    />
                  </ListItemButton>
                ))}
            </Box>
                  <ListItem component="div" disablePadding>
              <ListItemButton sx={{ height: 56 }}>
                <ListItemIcon>
                  <AccountBalanceIcon color="primary" />
                </ListItemIcon>
                <ListItemText
                  primary="FEATURED MBA COLLEGES IN INDIA"
                  primaryTypographyProps={{
                    color: 'primary',
                    fontWeight: 'medium',
                    variant: 'body2',
                    
                  }}
                />
              </ListItemButton>
             
            </ListItem>
          
          </FireNav>
         
        </Grid>
       
          <Grid xs={2} sm={4} md={6}>
        <Box
              sx={{
                bgcolor: open2 ? '#fff' : null,
                pb: open2 ? 2 : 0,
              }}
            >
              <ListItem component="div" disablePadding>
              <ListItemButton sx={{ height: 44 }}>
                <ListItemIcon>
                  <MenuBookIcon color="primary" />
                </ListItemIcon>
                <ListItemText
                  primary="MBA Colleges Popular Streams"
                  primaryTypographyProps={{
                    color: 'primary',
                    fontWeight: 'medium',
                    variant: 'body2',
                    fontSize: 16,
                    
                  }}
                />
              </ListItemButton>
             
            </ListItem>
            <Divider />
              {open2 &&
                mbaStreams.map((item) => (
                  <ListItemButton
                    key={item.label}
                    sx={{ py: 0, minHeight: 32, color: '#666',}}
                  >
                    
                    <ListItemText
                      primary={item.label}
                      primaryTypographyProps={{ fontSize: 14, fontWeight: 'medium' }}
                    />
                  </ListItemButton>
                ))}
            </Box>
          </Grid>
        
      </Grid>
            </Box>
    </Menu>

    {/*  MBBS dropdown  */}

    <Menu sx={{display:{xs: 'none', md: 'block', lg: 'block'}}}
      id='menu3-menu'
      anchorEl={anchorE3}
      open={open3}
      onClose={handleClose3}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right'
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right'
      }}
      MenuListProps={{
        'aria-labelledby': 'menu3-button'
      }}>
        <Box sx={{ width: 728,  }}>
              <Grid sx={{ pb: 0,}} container spacing={{ xs: 0, md: 1 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      <Grid xs={2} sm={4} md={6}>
       <FireNav component="nav" disablePadding>
            <ListItemButton component="a" href="#customized-list">
              <ListItemIcon sx={{ fontSize: 18 }}>🔥</ListItemIcon>
              <ListItemText
                sx={{ my: 0 }}
                primary="TOP MBBS COLLEGES IN INDIA"
                primaryTypographyProps={{
                  fontSize: 16,
                  fontWeight: 'medium',
                  letterSpacing: 0,
                }}
              />
            </ListItemButton>
            <Divider />
      
            <Box
              sx={{
                bgcolor: open3 ? '#f0f4f7' : null,
                pb: open3 ? 2 : 0,
               
              }}
            >
          
              {open3 &&
                mbbsIndia.map((item) => (
                  <ListItemButton
                    key={item.label}
                    sx={{ py: 0, minHeight: 32, color: '#666',}}
                  >
                    <ListItemIcon sx={{ color: 'inherit' }}>
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={item.label}
                      primaryTypographyProps={{ fontSize: 14, fontWeight: 'medium' }}
                    />
                  </ListItemButton>
                ))}
            </Box>
                  <ListItem component="div" disablePadding>
              <ListItemButton sx={{ height: 56 }}>
                <ListItemIcon>
                  <AccountBalanceIcon color="primary" />
                </ListItemIcon>
                <ListItemText
                  primary="FEATURED MBBS COLLEGES IN INDIA"
                  primaryTypographyProps={{
                    color: 'primary',
                    fontWeight: 'medium',
                    variant: 'body2',
                    
                  }}
                />
              </ListItemButton>
             
            </ListItem>
          
          </FireNav>
         
        </Grid>
       
          <Grid xs={2} sm={4} md={6}>
        <Box
              sx={{
                bgcolor: open3 ? '#fff' : null,
                pb: open3 ? 2 : 0,
              }}
            >
              <ListItem component="div" disablePadding>
              <ListItemButton sx={{ height: 44 }}>
                <ListItemIcon>
                  <MenuBookIcon color="primary" />
                </ListItemIcon>
                <ListItemText
                  primary="MBBS Colleges Popular Streams"
                  primaryTypographyProps={{
                    color: 'primary',
                    fontWeight: 'medium',
                    variant: 'body2',
                    fontSize: 16,
                    
                  }}
                />
              </ListItemButton>
             
            </ListItem>
            <Divider />
              {open3 &&
                mbbsStreams.map((item) => (
                  <ListItemButton
                    key={item.label}
                    sx={{ py: 0, minHeight: 32, color: '#666',}}
                  >
                    
                    <ListItemText
                      primary={item.label}
                      primaryTypographyProps={{ fontSize: 14, fontWeight: 'medium' }}
                    />
                  </ListItemButton>
                ))}
            </Box>
          </Grid>
        
      </Grid>
            </Box>
    </Menu>

{/*  Design dropdown  */}

    <Menu sx={{display:{xs: 'none', md: 'block', lg: 'block'}}}
      id='menu4-menu'
      anchorEl={anchorE4}
      open={open4}
      onClose={handleClose4}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right'
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right'
      }}
      MenuListProps={{
        'aria-labelledby': 'menu4-button'
      }}>
      <Box sx={{ width: 728,  }}>
              <Grid sx={{ pb: 0,}} container spacing={{ xs: 0, md: 1 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      <Grid xs={2} sm={4} md={6}>
       <FireNav component="nav" disablePadding>
            <ListItemButton component="a" href="#customized-list">
              <ListItemIcon sx={{ fontSize: 18 }}>🔥</ListItemIcon>
              <ListItemText
                sx={{ my: 0 }}
                primary="TOP DESIGN COLLEGES IN INDIA"
                primaryTypographyProps={{
                  fontSize: 16,
                  fontWeight: 'medium',
                  letterSpacing: 0,
                }}
              />
            </ListItemButton>
            <Divider />
      
            <Box
              sx={{
                bgcolor: open4 ? '#f0f4f7' : null,
                pb: open4 ? 2 : 0,
               
              }}
            >
          
              {open4 &&
                designIndia.map((item) => (
                  <ListItemButton
                    key={item.label}
                    sx={{ py: 0, minHeight: 32, color: '#666',}}
                  >
                    <ListItemIcon sx={{ color: 'inherit' }}>
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={item.label}
                      primaryTypographyProps={{ fontSize: 14, fontWeight: 'medium' }}
                    />
                  </ListItemButton>
                ))}
            </Box>
                  <ListItem component="div" disablePadding>
              <ListItemButton sx={{ height: 56 }}>
                <ListItemIcon>
                  <AccountBalanceIcon color="primary" />
                </ListItemIcon>
                <ListItemText
                  primary="FEATURED DESIGN COLLEGES IN INDIA"
                  primaryTypographyProps={{
                    color: 'primary',
                    fontWeight: 'medium',
                    variant: 'body2',
                    
                  }}
                />
              </ListItemButton>
             
            </ListItem>
          
          </FireNav>
         
        </Grid>
       
          <Grid xs={2} sm={4} md={6}>
        <Box
              sx={{
                bgcolor: open4 ? '#fff' : null,
                pb: open4 ? 2 : 0,
              }}
            >
              <ListItem component="div" disablePadding>
              <ListItemButton sx={{ height: 44 }}>
                <ListItemIcon>
                  <MenuBookIcon color="primary" />
                </ListItemIcon>
                <ListItemText
                  primary="Design Colleges Popular Streams"
                  primaryTypographyProps={{
                    color: 'primary',
                    fontWeight: 'medium',
                    variant: 'body2',
                    fontSize: 16,
                    
                  }}
                />
              </ListItemButton>
             
            </ListItem>
            <Divider />
              {open4 &&
                designStreams.map((item) => (
                  <ListItemButton
                    key={item.label}
                    sx={{ py: 0, minHeight: 32, color: '#666',}}
                  >
                    
                    <ListItemText
                      primary={item.label}
                      primaryTypographyProps={{ fontSize: 14, fontWeight: 'medium' }}
                    />
                  </ListItemButton>
                ))}
            </Box>
          </Grid>
        
      </Grid>
            </Box>
    </Menu>

{/*  Law dropdown  */}

    <Menu sx={{display:{xs: 'none', md: 'block', lg: 'block'}}}
      id='menu5-menu'
      anchorEl={anchorE5}
      open={open5}
      onClose={handleClose5}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right'
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right'
      }}
      MenuListProps={{
        'aria-labelledby': 'menu5-button'
      }}>
      <Box sx={{ width: 728,  }}>
              <Grid sx={{ pb: 0,}} container spacing={{ xs: 0, md: 1 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      <Grid xs={2} sm={4} md={6}>
       <FireNav component="nav" disablePadding>
            <ListItemButton component="a" href="#customized-list">
              <ListItemIcon sx={{ fontSize: 18 }}>🔥</ListItemIcon>
              <ListItemText
                sx={{ my: 0 }}
                primary="TOP LAW COLLEGES IN INDIA"
                primaryTypographyProps={{
                  fontSize: 16,
                  fontWeight: 'medium',
                  letterSpacing: 0,
                }}
              />
            </ListItemButton>
            <Divider />
      
            <Box
              sx={{
                bgcolor: open5 ? '#f0f4f7' : null,
                pb: open5 ? 2 : 0,
               
              }}
            >
          
              {open5 &&
                lawIndia.map((item) => (
                  <ListItemButton
                    key={item.label}
                    sx={{ py: 0, minHeight: 32, color: '#666',}}
                  >
                    <ListItemIcon sx={{ color: 'inherit' }}>
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={item.label}
                      primaryTypographyProps={{ fontSize: 14, fontWeight: 'medium' }}
                    />
                  </ListItemButton>
                ))}
            </Box>
                  <ListItem component="div" disablePadding>
              <ListItemButton sx={{ height: 56 }}>
                <ListItemIcon>
                  <AccountBalanceIcon color="primary" />
                </ListItemIcon>
                <ListItemText
                  primary="FEATURED LAW COLLEGES IN INDIA"
                  primaryTypographyProps={{
                    color: 'primary',
                    fontWeight: 'medium',
                    variant: 'body2',
                    
                  }}
                />
              </ListItemButton>
             
            </ListItem>
          
          </FireNav>
         
        </Grid>
       
          <Grid xs={2} sm={4} md={6}>
        <Box
              sx={{
                bgcolor: open5 ? '#fff' : null,
                pb: open5 ? 2 : 0,
              }}
            >
              <ListItem component="div" disablePadding>
              <ListItemButton sx={{ height: 44 }}>
                <ListItemIcon>
                  <MenuBookIcon color="primary" />
                </ListItemIcon>
                <ListItemText
                  primary="Law Colleges Popular Streams"
                  primaryTypographyProps={{
                    color: 'primary',
                    fontWeight: 'medium',
                    variant: 'body2',
                    fontSize: 16,
                    
                  }}
                />
              </ListItemButton>
             
            </ListItem>
            <Divider />
              {open5 &&
                lawStreams.map((item) => (
                  <ListItemButton
                    key={item.label}
                    sx={{ py: 0, minHeight: 32, color: '#666',}}
                  >
                    
                    <ListItemText
                      primary={item.label}
                      primaryTypographyProps={{ fontSize: 14, fontWeight: 'medium' }}
                    />
                  </ListItemButton>
                ))}
            </Box>
          </Grid>
        
      </Grid>
            </Box>
    </Menu>

{/*  Science dropdown  */}

    <Menu sx={{display:{xs: 'none', md: 'block', lg: 'block'}}}
      id='menu6-menu'
      anchorEl={anchorE6}
      open={open6}
      onClose={handleClose6}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right'
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right'
      }}
      MenuListProps={{
        'aria-labelledby': 'menu6-button'
      }}>
     <Box sx={{ width: 728,  }}>
              <Grid sx={{ pb: 0,}} container spacing={{ xs: 0, md: 1 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      <Grid xs={2} sm={4} md={6}>
       <FireNav component="nav" disablePadding>
            <ListItemButton component="a" href="#customized-list">
              <ListItemIcon sx={{ fontSize: 18 }}>🔥</ListItemIcon>
              <ListItemText
                sx={{ my: 0 }}
                primary="TOP SCIENCE COLLEGES IN INDIA"
                primaryTypographyProps={{
                  fontSize: 16,
                  fontWeight: 'medium',
                  letterSpacing: 0,
                }}
              />
            </ListItemButton>
            <Divider />
      
            <Box
              sx={{
                bgcolor: open6 ? '#f0f4f7' : null,
                pb: open6 ? 2 : 0,
               
              }}
            >
          
              {open6 &&
                scienceIndia.map((item) => (
                  <ListItemButton
                    key={item.label}
                    sx={{ py: 0, minHeight: 32, color: '#666',}}
                  >
                    <ListItemIcon sx={{ color: 'inherit' }}>
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={item.label}
                      primaryTypographyProps={{ fontSize: 14, fontWeight: 'medium' }}
                    />
                  </ListItemButton>
                ))}
            </Box>
                  <ListItem component="div" disablePadding>
              <ListItemButton sx={{ height: 56 }}>
                <ListItemIcon>
                  <AccountBalanceIcon color="primary" />
                </ListItemIcon>
                <ListItemText
                  primary="FEATURED SCIENCE COLLEGES IN INDIA"
                  primaryTypographyProps={{
                    color: 'primary',
                    fontWeight: 'medium',
                    variant: 'body2',
                    
                  }}
                />
              </ListItemButton>
             
            </ListItem>
          
          </FireNav>
         
        </Grid>
       
          <Grid xs={2} sm={4} md={6}>
        <Box
              sx={{
                bgcolor: open6 ? '#fff' : null,
                pb: open6 ? 2 : 0,
              }}
            >
              <ListItem component="div" disablePadding>
              <ListItemButton sx={{ height: 44 }}>
                <ListItemIcon>
                  <MenuBookIcon color="primary" />
                </ListItemIcon>
                <ListItemText
                  primary="Science Colleges Popular Streams"
                  primaryTypographyProps={{
                    color: 'primary',
                    fontWeight: 'medium',
                    variant: 'body2',
                    fontSize: 16,
                    
                  }}
                />
              </ListItemButton>
             
            </ListItem>
            <Divider />
              {open6 &&
                scienceStreams.map((item) => (
                  <ListItemButton
                    key={item.label}
                    sx={{ py: 0, minHeight: 32, color: '#666',}}
                  >
                    
                    <ListItemText
                      primary={item.label}
                      primaryTypographyProps={{ fontSize: 14, fontWeight: 'medium' }}
                    />
                  </ListItemButton>
                ))}
            </Box>
          </Grid>
        
      </Grid>
            </Box>
    </Menu>

{/*  Study Abroad dropdown  */}
    <Menu sx={{display:{xs: 'none', md: 'block', lg: 'block'}}}
      id='menu7-menu'
      anchorEl={anchorE7}
      open={open7}
      onClose={handleClose7}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right'
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right'
      }}
      MenuListProps={{
        'aria-labelledby': 'menu7-button'
      }}>
     <Box sx={{ width: 728,  }}>
              <Grid sx={{ pb: 0,}} container spacing={{ xs: 0, md: 1 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      <Grid xs={2} sm={4} md={6}>
       <FireNav component="nav" disablePadding>
            <ListItemButton component="a" href="#customized-list">
              <ListItemIcon sx={{ fontSize: 18 }}>🔥</ListItemIcon>
              <ListItemText
                sx={{ my: 0 }}
                primary="TOP DEGREES"
                primaryTypographyProps={{
                  fontSize: 16,
                  fontWeight: 'medium',
                  letterSpacing: 0,
                }}
              />
            </ListItemButton>
            <Divider />
      
            <Box
              sx={{
                bgcolor: open7 ? '#f0f4f7' : null,
                pb: open7 ? 2 : 0,
               
              }}
            >
          
              {open7 &&
                abroadIndia.map((item) => (
                  <ListItemButton
                    key={item.label}
                    sx={{ py: 0, minHeight: 32, color: '#666',}}
                  >
                    <ListItemIcon sx={{ color: 'inherit' }}>
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={item.label}
                      primaryTypographyProps={{ fontSize: 14, fontWeight: 'medium' }}
                    />
                  </ListItemButton>
                ))}
            </Box>
                  <ListItem component="div" disablePadding>
              <ListItemButton sx={{ height: 56 }}>
                <ListItemIcon>
                  <AccountBalanceIcon color="primary" />
                </ListItemIcon>
                <ListItemText
                  primary="Why Study in Canada?"
                  primaryTypographyProps={{
                    color: 'primary',
                    fontWeight: 'medium',
                    variant: 'body2',
                    
                  }}
                />
              </ListItemButton>
             
            </ListItem>
          
          </FireNav>
         
        </Grid>
       
          <Grid xs={2} sm={4} md={6}>
        <Box
              sx={{
                bgcolor: open7 ? '#fff' : null,
                pb: open7 ? 2 : 0,
              }}
            >
              <ListItem component="div" disablePadding>
              <ListItemButton sx={{ height: 44 }}>
                <ListItemIcon>
                  <MenuBookIcon color="primary" />
                </ListItemIcon>
                <ListItemText
                  primary="Abroad Colleges Popular Streams"
                  primaryTypographyProps={{
                    color: 'primary',
                    fontWeight: 'medium',
                    variant: 'body2',
                    fontSize: 16,
                    
                  }}
                />
              </ListItemButton>
             
            </ListItem>
            <Divider />
              {open7 &&
                abroadStreams.map((item) => (
                  <ListItemButton
                    key={item.label}
                    sx={{ py: 0, minHeight: 32, color: '#666',}}
                  >
                    
                    <ListItemText
                      primary={item.label}
                      primaryTypographyProps={{ fontSize: 14, fontWeight: 'medium' }}
                    />
                  </ListItemButton>
                ))}
            </Box>
          </Grid>
        
      </Grid>
            </Box>
    </Menu>

  </Toolbar>
</AppBar>
)
}

export default Navigatorold
