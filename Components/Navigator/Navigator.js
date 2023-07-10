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
    capitalize,
} from '@mui/material'
import Image from 'next/image';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import AppsIcon from '@mui/icons-material/Apps';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
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
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import EngineeringIcon from '@mui/icons-material/Engineering';
import BusinessIcon from '@mui/icons-material/Business';
import DvrIcon from '@mui/icons-material/Dvr';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import SpaIcon from '@mui/icons-material/Spa';

import btechIcon from '/public/icons/kicons-1.png';
import mbaIcon from '/public/icons/kicons-2.png';
import mbbsIcon from '/public/icons/kicons-3.png';
import designIcon from '/public/icons/kicons-4.png';
import lawIcon from '/public/icons/kicons-5.png';
import scienceIcon from '/public/icons/kicons-6.png';
import abroadIcon from '/public/icons/kicons-7.png';

import { experimentalStyled as styled } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';

const Navigator = () => {
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

  const [anchorE8, setAnchorE8] = useState(null)
  const open8 = Boolean(anchorE8)
  const handleClick8 = (event) => {
    setAnchorE8(event.currentTarget)
  }
  const handleClose8 = () => {
    setAnchorE8(null)
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
 
  // const colWidth = { xs: 12, sm: 6, md: 4, lg: 3 };
  const btechIndia = [
    { icon: <ChevronRightIcon />, label: 'Top NITs in India' },
    { icon: <ChevronRightIcon />, label: 'Top IIITs in India' },
    { icon: <ChevronRightIcon />, label: 'Top IITs in India' },
    { icon: <ChevronRightIcon />, label: 'Government B.Tech Colleges in India' },
    { icon: <ChevronRightIcon />, label: 'Top Private B.Tech Colleges in India' },
    { icon: <ChevronRightIcon />, label: 'B.Tech Colleges with Lowest Fees' },
  ];
  const btechStreams = [
    { icon: <ChevronRightIcon />, label: 'COMPUTER SCIENCE [3843]' },
    { icon: <ChevronRightIcon />, label: 'MECHANICAL ENGINEERING [3623]' },
    { icon: <ChevronRightIcon />, label: 'ELECTRONICS & COMMUNICATION [3424]' },
    { icon: <ChevronRightIcon />, label: 'CIVIL ENGINEERING [3305]' },
    { icon: <ChevronRightIcon />, label: 'ELECTRICAL & ELECTRONICS [2000]' },
    { icon: <ChevronRightIcon />, label: 'INFORMATION TECHNOLOGY [1766]' },
    { icon: <ChevronRightIcon />, label: 'ELECTRICAL [1392]' },
    { icon: <ChevronRightIcon />, label: 'CHEMICAL ENGINEERING [419]' },
  ];


  const mbaIndia = [
    { icon: <ChevronRightIcon />, label: 'Top MBA in India' },
    { icon: <ChevronRightIcon />, label: 'Top IIITs in India' },
    { icon: <ChevronRightIcon />, label: 'Top IITs in India' },
    { icon: <ChevronRightIcon />, label: 'Government MBA Colleges in India' },
    { icon: <ChevronRightIcon />, label: 'Top Private MBA Colleges in India' },
    { icon: <ChevronRightIcon />, label: 'MBA Colleges with Lowest Fees' },
  ];
  const mbaStreams = [
    { icon: <ChevronRightIcon />, label: 'ACCOUNTS [3843]' },
    { icon: <ChevronRightIcon />, label: 'MECHANICAL ENGINEERING [3623]' },
    { icon: <ChevronRightIcon />, label: 'ELECTRONICS & COMMUNICATION [3424]' },
    { icon: <ChevronRightIcon />, label: 'CIVIL ENGINEERING [3305]' },
    { icon: <ChevronRightIcon />, label: 'ELECTRICAL & ELECTRONICS [2000]' },
    { icon: <ChevronRightIcon />, label: 'INFORMATION TECHNOLOGY [1766]' },
    { icon: <ChevronRightIcon />, label: 'ELECTRICAL [1392]' },
   
  ];


  const mbbsIndia = [
    { icon: <ChevronRightIcon />, label: 'Top MBBS Colleges in India' },
    { icon: <ChevronRightIcon />, label: 'Top IIITs in India' },
    { icon: <ChevronRightIcon />, label: 'Top IITs in India' },
    { icon: <ChevronRightIcon />, label: 'Government MBBS Colleges in India' },
    { icon: <ChevronRightIcon />, label: 'Top Private MBBS Colleges in India' },
    { icon: <ChevronRightIcon />, label: 'MBBS Colleges with Lowest Fees' },
  ];
  const mbbsStreams = [
    { icon: <ChevronRightIcon />, label: 'DENTAL [3843]' },
    { icon: <ChevronRightIcon />, label: 'MECHANICAL ENGINEERING [3623]' },
    { icon: <ChevronRightIcon />, label: 'ELECTRONICS & COMMUNICATION [3424]' },
    { icon: <ChevronRightIcon />, label: 'CIVIL ENGINEERING [3305]' },
    { icon: <ChevronRightIcon />, label: 'ELECTRICAL & ELECTRONICS [2000]' },
    { icon: <ChevronRightIcon />, label: 'INFORMATION TECHNOLOGY [1766]' },
    { icon: <ChevronRightIcon />, label: 'ELECTRICAL [1392]' },
   
  ];

  const designIndia = [
    { icon: <ChevronRightIcon />, label: 'Top Design Colleges in Bangalore' },
    { icon: <ChevronRightIcon />, label: 'Top Design Colleges in Chennai' },
    { icon: <ChevronRightIcon />, label: 'Top Design Colleges in Mumbai' },
    { icon: <ChevronRightIcon />, label: 'Top Design Colleges in Kolkata' },
    { icon: <ChevronRightIcon />, label: 'Top Design Colleges in New Delhi' },
    { icon: <ChevronRightIcon />, label: 'Top Design Colleges in Coimbatore' },
  ];
  const designStreams = [
    { icon: <ChevronRightIcon />, label: 'FASHION DESIGN [774]' },
    { icon: <ChevronRightIcon />, label: 'INTERIOR DESIGN [565]' },
    { icon: <ChevronRightIcon />, label: 'TEXTILE DESIGN [254] ' },
    { icon: <ChevronRightIcon />, label: 'COMMUNICATION STUDIES [143]' },
    { icon: <ChevronRightIcon />, label: 'INDUSTRIAL DESIGN' },
    { icon: <ChevronRightIcon />, label: 'JEWELLERY DESIGN' },
    { icon: <ChevronRightIcon />, label: 'AUTOMOBILE DESIGN [45]' },
   
  ];


  const lawIndia = [
    { icon: <ChevronRightIcon />, label: 'Top law Colleges in Bangalore' },
    { icon: <ChevronRightIcon />, label: 'Top law Colleges in Chennai' },
    { icon: <ChevronRightIcon />, label: 'Top law Colleges in Mumbai' },
    { icon: <ChevronRightIcon />, label: 'Top law Colleges in Kolkata' },
    { icon: <ChevronRightIcon />, label: 'Top law Colleges in New Delhi' },
    { icon: <ChevronRightIcon />, label: 'Top law Colleges in Coimbatore' },
  ];
  const lawStreams = [
    { icon: <ChevronRightIcon />, label: 'FASHION DESIGN [774]' },
    { icon: <ChevronRightIcon />, label: 'INTERIOR DESIGN [565]' },
    { icon: <ChevronRightIcon />, label: 'TEXTILE DESIGN [254] ' },
    { icon: <ChevronRightIcon />, label: 'COMMUNICATION STUDIES [143]' },
    { icon: <ChevronRightIcon />, label: 'INDUSTRIAL DESIGN' },
    { icon: <ChevronRightIcon />, label: 'JEWELLERY DESIGN' },
    { icon: <ChevronRightIcon />, label: 'AUTOMOBILE DESIGN [45]' },
   
  ];

  const scienceIndia = [
    { icon: <ChevronRightIcon />, label: 'Top Science Colleges in Bangalore' },
    { icon: <ChevronRightIcon />, label: 'Top Science Colleges in Chennai' },
    { icon: <ChevronRightIcon />, label: 'Top Science Colleges in Mumbai' },
    { icon: <ChevronRightIcon />, label: 'Top Science Colleges in Kolkata' },
    { icon: <ChevronRightIcon />, label: 'Top Science Colleges in New Delhi' },
    { icon: <ChevronRightIcon />, label: 'Top Science Colleges in Coimbatore' },
  ];
  const scienceStreams = [
    { icon: <ChevronRightIcon />, label: 'FASHION DESIGN [774]' },
    { icon: <ChevronRightIcon />, label: 'INTERIOR DESIGN [565]' },
    { icon: <ChevronRightIcon />, label: 'TEXTILE DESIGN [254] ' },
    { icon: <ChevronRightIcon />, label: 'COMMUNICATION STUDIES [143]' },
    { icon: <ChevronRightIcon />, label: 'INDUSTRIAL DESIGN' },
    { icon: <ChevronRightIcon />, label: 'JEWELLERY DESIGN' },
    { icon: <ChevronRightIcon />, label: 'AUTOMOBILE DESIGN [45]' },
   
  ];

  const abroadIndia = [
    { icon: <ChevronRightIcon />, label: 'MBA' },
    { icon: <ChevronRightIcon />, label: 'MS' },
    { icon: <ChevronRightIcon />, label: 'MS IN DATA SCIENCE ' },
    { icon: <ChevronRightIcon />, label: 'LLM ' },
    { icon: <ChevronRightIcon />, label: 'BBA ' },
  ];
  const abroadStreams = [
    { icon: <ChevronRightIcon />, label: 'Data Science & Analytics' },
    { icon: <ChevronRightIcon />, label: 'Computer Science & Engineering' },
    { icon: <ChevronRightIcon />, label: 'Engineering ' },
    { icon: <ChevronRightIcon />, label: 'Business' },
    { icon: <ChevronRightIcon />, label: 'Medicine' },
  ];
  
  const allCoursesIndiaEng = [
    { icon: <ChevronRightIcon />, label: 'B.TECH COLLEGES' },
    { icon: <ChevronRightIcon />, label: 'M.TECH COLLEGES' },
    { icon: <ChevronRightIcon />, label: 'POLYTECHNIC COLLEGES ' },
    { icon: <ChevronRightIcon />, label: 'CERTIFICATE COLLEGES ' },
  ];
  const allCoursesIndiaManagement = [
    { icon: <ChevronRightIcon />, label: 'BBA COLLEGES' },
    { icon: <ChevronRightIcon />, label: 'MBA COLLEGES' },
  ];
  const allCoursesIndiaCA = [
    { icon: <ChevronRightIcon />, label: 'BCA COLLEGES' },
    { icon: <ChevronRightIcon />, label: 'MCA COLLEGES' },
  ];
  const allCoursesIndiaDental = [
    { icon: <ChevronRightIcon />, label: 'BDS COLLEGES' },
    { icon: <ChevronRightIcon />, label: 'MDS COLLEGES' },
  ];
  const allCoursesIndiaHM = [
    { icon: <ChevronRightIcon />, label: 'BHM COLLEGES' },
    { icon: <ChevronRightIcon />, label: 'B.SC HOTEL MANAGEMENT' },
    { icon: <ChevronRightIcon />, label: 'MASTERS IN HOTEL MANAGEMENT' },
  ];
  const allCoursesIndiaEducation = [
    { icon: <ChevronRightIcon />, label: 'B.ED COLLEGES' },
    { icon: <ChevronRightIcon />, label: 'M.ED HOTEL MANAGEMENT' },
  ];
  const allCoursesIndiaMC = [
    { icon: <ChevronRightIcon />, label: 'BACHELORS IN MASS COMM' },
    { icon: <ChevronRightIcon />, label: 'MASTERS IN MASS COMM' },
  ];
  const allCoursesStreams = [
    { icon: <ChevronRightIcon sx={{fontSize:'20px'}} />, label: 'ARTS' },
    { icon: <ChevronRightIcon sx={{fontSize:'20px'}} />, label: 'COMMERCE' },
    { icon: <ChevronRightIcon sx={{fontSize:'20px'}} />, label: 'PHARMACY ' },
    { icon: <ChevronRightIcon sx={{fontSize:'20px'}} />, label: 'PARAMEDICAL' },
    { icon: <ChevronRightIcon sx={{fontSize:'20px'}} />, label: 'AGRICULTURE' },
    { icon: <ChevronRightIcon sx={{fontSize:'20px'}} />, label: 'VOCATIONAL COURSES' },
    { icon: <ChevronRightIcon sx={{fontSize:'20px'}} />, label: 'VETERINARY SCIENCES' },
    { icon: <ChevronRightIcon sx={{fontSize:'20px'}} />, label: 'ARCHITECTURE' },
    { icon: <ChevronRightIcon sx={{fontSize:'20px'}} />, label: 'ANIMATION' },
    // { icon: <ChevronRightIcon sx={{fontSize:'20px'}} />, label: 'AVIATION' },
  ];
  
return (
  <AppBar position='static' color='transparent' sx={{ bgcolor: 'white', color:'#000', height: 'auto' , overflowX:{xs: 'scroll', sm: 'scroll', md: 'hidden', lg: 'hidden'}, textAlign:'center', margin:'auto', boxSizing:'border-box',
  whiteSpace: 'nowrap', justifyContent:{sm: 'normal', md: 'center', lg: 'center'}, width: '100%', }} >
  <Toolbar sx={{ justifyContent:{sm: 'normal', md: 'center', lg: 'center'}, marginLeft:{sm: '10px', md: '0', lg: '0'}}}>
      <Stack direction='row' spacing={2}  >
      <Button sx={{fontSize:{sm: '13px', md: '15px', lg: '16px'}, 
      marginRight:{sm: '15px', md: '0', lg: '0'}, marginLeft:{sm: '15px', md: '0', lg: '0'},
      color:'inherit',
      '&:active': {
        color: 'primary.dark',
      },
          '&:hover': {
        color: 'primary.dark',
      },
     
    }}
     
        id='menu-button'
        aria-controls={open1 ? 'menu-menu' : undefined}
        aria-haspopup='true'
        aria-expanded={open1 ? 'true' : undefined}
        endIcon={<KeyboardArrowDownIcon sx={{display:{xs: 'none', md: 'flex', lg: 'flex'}}} />}
        onClick={handleClick}>
           <ListItemIcon sx={{marginRight:'8px'}}>
                      <Image className='smallicon'
                src={btechIcon}
                alt="B.Tech"
                width={'30'}
                height={'30'}
            />
                      </ListItemIcon>
       B.Tech
      </Button>
      <Button sx={{fontSize:{sm: '13px', md: '15px', lg: '16px'}, marginRight:{sm: '15px', md: '0', lg: '0'}, marginLeft:{sm: '15px', md: '0', lg: '0'}}}
        color='inherit'
        id='menu2-button'
        aria-controls={open2 ? 'menu2-menu' : undefined}
        aria-haspopup='true'
        aria-expanded={open2 ? 'true' : undefined}
        endIcon={<KeyboardArrowDownIcon sx={{display:{xs: 'none', md: 'flex', lg: 'flex'}}}/>}
        onClick={handleClick2}>
         <ListItemIcon sx={{marginRight:'8px'}}>
                      <Image className='smallicon'
                src={mbaIcon}
                alt="MBA"
                width={'30'}
                height={'30'}
            />
                      </ListItemIcon>
        MBA
      </Button>
  
      <Button sx={{fontSize:{sm: '13px', md: '15px', lg: '16px'}, marginRight:{sm: '15px', md: '0', lg: '0'}, marginLeft:{sm: '15px', md: '0', lg: '0'}}}
        color='inherit'
        id='menu3-button'
        aria-controls={open3 ? 'menu3-menu' : undefined}
        aria-haspopup='true'
        aria-expanded={open3 ? 'true' : undefined}
        endIcon={<KeyboardArrowDownIcon sx={{display:{xs: 'none', md: 'flex', lg: 'flex'}}} />}
        onClick={handleClick3}>
          <ListItemIcon sx={{marginRight:'8px'}}>
                      <Image className='smallicon'
                src={mbbsIcon}
                alt="MBBS"
                width={'30'}
                height={'30'}
            />
                      </ListItemIcon>
        MBBS
      </Button>

      <Button sx={{fontSize:{sm: '13px', md: '15px', lg: '16px'}, marginRight:{sm: '15px', md: '0', lg: '0'}, marginLeft:{sm: '15px', md: '0', lg: '0'}}}
      color='inherit'
        id='menu4-button'
        aria-controls={open4 ? 'menu4-menu' : undefined}
        aria-haspopup='true'
        aria-expanded={open4 ? 'true' : undefined}
        endIcon={<KeyboardArrowDownIcon sx={{display:{xs: 'none', md: 'flex', lg: 'flex'}}}/>}
        onClick={handleClick4}>
          <ListItemIcon sx={{marginRight:'8px'}}>
                      <Image className='smallicon'
                src={designIcon}
                alt="Design"
                width={'30'}
                height={'30'}
            />
                      </ListItemIcon>
          Design</Button>

          <Button sx={{fontSize:{sm: '13px', md: '15px', lg: '16px'}, marginRight:{sm: '15px', md: '0', lg: '0'}, marginLeft:{sm: '15px', md: '0', lg: '0'}}}
          color='inherit'
        id='menu5-button'
        aria-controls={open5 ? 'menu5-menu' : undefined}
        aria-haspopup='true'
        aria-expanded={open5 ? 'true' : undefined}
        endIcon={<KeyboardArrowDownIcon sx={{display:{xs: 'none', md: 'flex', lg: 'flex'}}}/>}
        onClick={handleClick5}>
          <ListItemIcon sx={{marginRight:'8px'}}>
                      <Image className='smallicon'
                src={lawIcon}
                alt="Law"
                width={'30'}
                height={'30'}
            />
                      </ListItemIcon>
          Law</Button>


          <Button sx={{fontSize:{sm: '13px', md: '15px', lg: '16px'}, mr:{sm: '15px', md: '0', lg: '0'}, marginLeft:{sm: '15px', md: '0', lg: '0'}}}
          color='inherit'
        id='menu6-button'
        aria-controls={open6 ? 'menu6-menu' : undefined}
        aria-haspopup='true'
        aria-expanded={open6 ? 'true' : undefined}
        endIcon={<KeyboardArrowDownIcon sx={{display:{xs: 'none', md: 'flex', lg: 'flex'}}}/>}
        onClick={handleClick6}>
          <ListItemIcon  sx={{marginRight:'8px'}}>
                      <Image className='smallicon'
                src={scienceIcon}
                alt="Science"
                width={'30'}
                height={'30'}
            />
                      </ListItemIcon>
          Science</Button>

          <Button sx={{fontSize:{sm: '13px', md: '15px', lg: '16px'},  marginLeft:{sm: '15px', md: '0', lg: '0'}, marginRight:{sm: '15px', md: '0', lg: '0'}}}
          color='inherit'
        id='menu7-button'
        aria-controls={open7 ? 'menu7-menu' : undefined}
        aria-haspopup='true'
        aria-expanded={open7 ? 'true' : undefined}
        endIcon={<KeyboardArrowDownIcon sx={{display:{xs: 'none', md: 'flex', lg: 'flex'}}}/>}
        onClick={handleClick7}>
          <ListItemIcon sx={{marginRight:'8px'}}>
                      <Image className='smallicon'
                src={abroadIcon}
                alt="Study Abroad"
                width={'30'}
                height={'30'}
            />
                      </ListItemIcon>
         Study Abroad</Button>


         <Button sx={{fontSize:{sm: '13px', md: '15px', lg: '16px'}, mr:{sm: '15px', md: '0', lg: '0'}, marginLeft:{sm: '15px', md: '0', lg: '0'}}}
          color='inherit'
        id='menu8-button'
        aria-controls={open8 ? 'menu8-menu' : undefined}
        aria-haspopup='true'
        aria-expanded={open8 ? 'true' : undefined}
        endIcon={<KeyboardArrowDownIcon sx={{display:{xs: 'none', md: 'flex', lg: 'flex'}}}/>}
        onClick={handleClick8}>
          <ListItemIcon  sx={{marginRight:'8px'}}>
          <AppsIcon color="primary" />
                      </ListItemIcon>
          All Courses</Button>

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
      <Box sx={{ width: 728,}}>

              <Grid sx={{ pb: 0,}} container spacing={{ xs: 0, md: 1 }} columns={{ xs: 4, sm: 8, md: 12 }}>

          <Grid xs={2} sm={4} md={6} sx={{borderRight:'#eee solid 1px'}}>
        <Box
              sx={{
                bgcolor: open1 ? '#fff' : null,
                pb: open1 ? 2 : 0,
              }}
            >
              <ListItem component="div" disablePadding>
              <ListItemButton sx={{ height: 41 }}>
                <ListItemIcon sx={{ marginRight:'8px' }}>
                  <MenuBookIcon color="primary" />
                </ListItemIcon>
                <ListItemText
                
                  primary="B.Tech Popular Streams"
                  primaryTypographyProps={{
                    color: 'primary',
                    fontWeight: 'medium',
                    variant: 'body2',
                    fontSize: 16,
                    textTransform: 'uppercase',
                    
                  }}
                  
                />
                
              </ListItemButton>
             
            </ListItem>
            <Divider />
              {open1 &&
                btechStreams.map((item) => (
                  <ListItemButton
                  endIcon={<SchoolIcon/>}
                    key={item.label}
                    sx={{ py: 0, minHeight: 32, color: '#666', }}
                   
                  > 
                    {/* <ListItemIcon sx={{ marginRight:'8px' }}>
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
          <Grid xs={2} sm={4} md={6} >
       <FireNav component="nav" disablePadding>
            <ListItemButton component="a" href="#customized-list">
              <ListItemIcon sx={{marginRight:'8px !important'}}>🔥</ListItemIcon>
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
                bgcolor: open1 ? '#fff' : null,
                 pb: open1 ? 2 : 0,
               
              }}
            >
          
              {open1 &&
                btechIndia.map((item) => (
                  <ListItemButton
                    key={item.label}
                    sx={{ py: 0, minHeight: 32, color: '#666',}}
                  >
                     <ListItemIcon sx={{marginRight:'8px !important'}}>
                      {item.icon}
                    </ListItemIcon>
                    {/* <ListItemIcon sx={{ color: 'inherit', }}>
                      {item.icon}
                    </ListItemIcon> */}
                    <ListItemText
                      primary={item.label}
                      primaryTypographyProps={{ fontSize: 14, fontWeight: 'medium' }}
                    />
                   
                  </ListItemButton>
                ))}
            </Box>
            <Divider />
                  <ListItem component="div" disablePadding>
              <ListItemButton sx={{ height: 56 }}>
                <ListItemIcon sx={{marginRight:'8px !important'}}>
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
      
              <Grid xs={2} sm={4} md={6} sx={{borderRight:'#eee solid 1px'}}>
        <Box
              sx={{
                bgcolor: open2 ? '#fff' : null,
                pb: open2 ? 2 : 0,
              }}
            >
              <ListItem component="div" disablePadding>
              <ListItemButton sx={{ height: 42 }}>
                <ListItemIcon sx={{ marginRight:'8px' }}>
                  <MenuBookIcon color="primary" />
                </ListItemIcon>
                <ListItemText
                  primary="MBA Popular Streams"
                  primaryTypographyProps={{
                    color: 'primary',
                    fontWeight: 'medium',
                    variant: 'body2',
                    fontSize: 16,
                    textTransform: 'uppercase',
                    
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
                     <ListItemIcon sx={{ marginRight:'5px' }}>
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={item.label}
                      primaryTypographyProps={{ fontSize: 14, fontWeight: 'medium' }}
                    />
                   
                  </ListItemButton>
                ))}
            </Box>
          </Grid>
      <Grid xs={2} sm={4} md={6} >
       <FireNav component="nav" disablePadding>
            <ListItemButton component="a" href="#customized-list">
              <ListItemIcon sx={{marginRight:'8px !important'}}>🔥</ListItemIcon>
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
                bgcolor: open2 ? '#fff' : null,
                pb: open2 ? 2 : 0,
               
              }}
            >
          
              {open2 &&
                mbaIndia.map((item) => (
                  <ListItemButton
                    key={item.label}
                    sx={{ py: 0, minHeight: 32, color: '#666',}}
                  >
                    <ListItemIcon sx={{marginRight:'8px !important'}}>
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={item.label}
                      primaryTypographyProps={{ fontSize: 14, fontWeight: 'medium' }}
                    />
                    
                  </ListItemButton>
                ))}
            </Box>
            <Divider />
                  <ListItem component="div" disablePadding>
              <ListItemButton sx={{ height: 56 }}>
                <ListItemIcon sx={{marginRight:'8px !important'}}>
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
              <Grid xs={2} sm={4} md={6} sx={{borderRight:'#eee solid 1px'}}>
        <Box
              sx={{
                bgcolor: open3 ? '#fff' : null,
                pb: open3 ? 2 : 0,
              }}
            >
              <ListItem component="div" disablePadding>
              <ListItemButton sx={{ height: 44 }}>
                <ListItemIcon sx={{marginRight:'8px !important'}}>
                  <MenuBookIcon color="primary"  />
                </ListItemIcon>
                <ListItemText
                  primary="MBBS Popular Streams"
                  primaryTypographyProps={{
                    color: 'primary',
                    fontWeight: 'medium',
                    variant: 'body2',
                    fontSize: 16,
                    textTransform: 'uppercase',
                    
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
                    <ListItemIcon sx={{marginRight:'8px'}}>
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={item.label}
                      primaryTypographyProps={{ fontSize: 14, fontWeight: 'medium' }}
                    />
                     
                  </ListItemButton>
                ))}
            </Box>
          </Grid>
      <Grid xs={2} sm={4} md={6}>
       <FireNav component="nav" disablePadding>
            <ListItemButton component="a" href="#customized-list">
              <ListItemIcon sx={{marginRight:'8px !important'}}>🔥</ListItemIcon>
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
                bgcolor: open3 ? '#fff' : null,
                pb: open3 ? 2 : 0,
               
              }}
            >
          
              {open3 &&
                mbbsIndia.map((item) => (
                  <ListItemButton
                    key={item.label}
                    sx={{ py: 0, minHeight: 32, color: '#666',}}
                  >
                    <ListItemIcon sx={{marginRight:'8px !important'}}>
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={item.label}
                      primaryTypographyProps={{ fontSize: 14, fontWeight: 'medium' }}
                    />
                  </ListItemButton>
                ))}
            </Box>
            <Divider />
                  <ListItem component="div" disablePadding>
              <ListItemButton sx={{ height: 56 }}>
                <ListItemIcon sx={{marginRight:'8px !important'}}>
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
              <Grid xs={2} sm={4} md={6} sx={{borderRight:'#eee solid 1px'}}>
        <Box
              sx={{
                bgcolor: open4 ? '#fff' : null,
                pb: open4 ? 2 : 0,
              }}
            >
              <ListItem component="div" disablePadding>
              <ListItemButton sx={{ height: 44 }}>
                <ListItemIcon sx={{marginRight:'8px'}}>
                  <MenuBookIcon color="primary" />
                </ListItemIcon>
                <ListItemText
                  primary="Design Popular Streams"
                  primaryTypographyProps={{
                    color: 'primary',
                    fontWeight: 'medium',
                    variant: 'body2',
                    fontSize: 16,
                    textTransform: 'uppercase',
                    
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
                    <ListItemIcon sx={{ marginRight:'5px' }}>
                      {item.icon}
                    </ListItemIcon>
                    
                    <ListItemText
                      primary={item.label}
                      primaryTypographyProps={{ fontSize: 14, fontWeight: 'medium' }}
                    />
                     
                  </ListItemButton>
                ))}
            </Box>
          </Grid>
     
      <Grid xs={2} sm={4} md={6} >
       <FireNav component="nav" disablePadding>
            <ListItemButton component="a" href="#customized-list">
              <ListItemIcon sx={{marginRight:'8px !important'}}>🔥</ListItemIcon>
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
                bgcolor: open4 ? '#fff' : null,
                pb: open4 ? 2 : 0,
               
              }}
            >
          
              {open4 &&
                designIndia.map((item) => (
                  <ListItemButton
                    key={item.label}
                    sx={{ py: 0, minHeight: 32, color: '#666',}}
                  >
                    <ListItemIcon sx={{marginRight:'8px !important'}}>
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={item.label}
                      primaryTypographyProps={{ fontSize: 14, fontWeight: 'medium' }}
                    />
                  </ListItemButton>
                ))}
            </Box>
            <Divider />
                  <ListItem component="div" disablePadding>
              <ListItemButton sx={{ height: 56 }}>
                <ListItemIcon sx={{marginRight:'8px !important'}}>
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
              <Grid xs={2} sm={4} md={6} sx={{borderRight:'#eee solid 1px'}}>
        <Box
              sx={{
                bgcolor: open5 ? '#fff' : null,
                pb: open5 ? 2 : 0,
              }}
            >
              <ListItem component="div" disablePadding>
              <ListItemButton sx={{ height: 44 }}>
                <ListItemIcon sx={{marginRight: '8px'}}>
                  <MenuBookIcon color="primary" />
                </ListItemIcon>
                <ListItemText
                  primary="Law Popular Streams"
                  primaryTypographyProps={{
                    color: 'primary',
                    fontWeight: 'medium',
                    variant: 'body2',
                    fontSize: 16,
                    textTransform: 'uppercase',
                    
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
                    <ListItemIcon sx={{ marginRight:'5px' }}>
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={item.label}
                      primaryTypographyProps={{ fontSize: 14, fontWeight: 'medium' }}
                    />
                     
                  </ListItemButton>
                ))}
            </Box>
          </Grid>
      <Grid xs={2} sm={4} md={6} >
       <FireNav component="nav" disablePadding>
            <ListItemButton component="a" href="#customized-list">
              <ListItemIcon sx={{ marginRight:'8px !important' }}>🔥</ListItemIcon>
              <ListItemText
                sx={{ my: 0 }}
                primary="TOP LAW COLLEGES IN INDIA"
                primaryTypographyProps={{
                  fontSize: 16,
                  fontWeight: 'medium',
                 
                }}
              />
            </ListItemButton>
            <Divider />
      
            <Box
              sx={{
                bgcolor: open5 ? '#fff' : null,
                pb: open5 ? 2 : 0,
               
              }}
            >
          
              {open5 &&
                lawIndia.map((item) => (
                  <ListItemButton
                    key={item.label}
                    sx={{ py: 0, minHeight: 32, color: '#666',}}
                  >
                    <ListItemIcon sx={{  marginRight:'8px !important' }}>
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={item.label}
                      primaryTypographyProps={{ fontSize: 14, fontWeight: 'medium' }}
                    />
                  </ListItemButton>
                ))}
            </Box>
            <Divider />
                  <ListItem component="div" disablePadding>
              <ListItemButton sx={{ height: 56 }}>
                <ListItemIcon sx={{marginRight:'8px !important'}}>
                  <AccountBalanceIcon color="primary"  />
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
              <Grid xs={2} sm={4} md={6} sx={{borderRight:'#eee solid 1px'}}>
        <Box
              sx={{
                bgcolor: open6 ? '#fff' : null,
                pb: open6 ? 2 : 0,
              }}
            >
              <ListItem component="div" disablePadding>
              <ListItemButton sx={{ height: 44 }}>
                <ListItemIcon sx={{marginRight: '8px'}}>
                  <MenuBookIcon color="primary" />
                </ListItemIcon>
                <ListItemText
                  primary="Science Popular Streams"
                  primaryTypographyProps={{
                    color: 'primary',
                    fontWeight: 'medium',
                    variant: 'body2',
                    fontSize: 16,
                    textTransform: 'uppercase',
                    
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
                     <ListItemIcon sx={{ marginRight:'8px' }}>
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={item.label}
                      primaryTypographyProps={{ fontSize: 14, fontWeight: 'medium' }}
                    />
                    
                  </ListItemButton>
                ))}
            </Box>
          </Grid>
      <Grid xs={2} sm={4} md={6}>
       <FireNav component="nav" disablePadding>
            <ListItemButton component="a" href="#customized-list">
              <ListItemIcon sx={{marginRight:'8px !important'}}>🔥</ListItemIcon>
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
                bgcolor: open6 ? '#fff' : null,
                pb: open6 ? 2 : 0,
               
              }}
            >
          
              {open6 &&
                scienceIndia.map((item) => (
                  <ListItemButton
                    key={item.label}
                    sx={{ py: 0, minHeight: 32, color: '#666',}}
                  >
                    <ListItemIcon sx={{marginRight:'8px !important'}}>
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={item.label}
                      primaryTypographyProps={{ fontSize: 14, fontWeight: 'medium' }}
                    />
                  </ListItemButton>
                ))}
            </Box>
            <Divider />
                  <ListItem component="div" disablePadding>
              <ListItemButton sx={{ height: 56 }}>
                <ListItemIcon sx={{marginRight:'8px !important'}}>
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
     
              <Grid xs={2} sm={4} md={6} sx={{borderRight:'#eee solid 1px'}}>
        <Box
              sx={{
                bgcolor: open7 ? '#fff' : null,
                pb: open7 ? 2 : 0,
              }}
            >
              <ListItem component="div" disablePadding>
              <ListItemButton sx={{ height: 44 }}>
                <ListItemIcon sx={{marginRight:'8px'}}>
                  <MenuBookIcon color="primary" />
                </ListItemIcon>
                <ListItemText
                  primary="Abroad Popular Streams"
                  primaryTypographyProps={{
                    color: 'primary',
                    fontWeight: 'medium',
                    variant: 'body2',
                    fontSize: 16,
                    textTransform: 'uppercase',
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
                    <ListItemIcon sx={{ marginRight:'8px' }}>
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={item.label}
                      primaryTypographyProps={{ fontSize: 14, fontWeight: 'medium' }}
                    />
                     
                  </ListItemButton>
                ))}
            </Box>
          </Grid>
      <Grid xs={2} sm={4} md={6} >
       <FireNav component="nav" disablePadding>
            <ListItemButton component="a" href="#customized-list">
              <ListItemIcon sx={{marginRight:'8px !important'}}>🔥</ListItemIcon>
              <ListItemText
                sx={{ my: 0 }}
                primary="TOP DEGREES"
                primaryTypographyProps={{
                  fontSize: 16,
                  fontWeight: 'medium',
                
                }}
              />
            </ListItemButton>
            <Divider />
      
            <Box
              sx={{
                bgcolor: open7 ? '#fff' : null,
                pb: open7 ? 2 : 0,
               
              }}
            >
          
              {open7 &&
                abroadIndia.map((item) => (
                  <ListItemButton
                    key={item.label}
                    sx={{ py: 0, minHeight: 32, color: '#666',}}
                  >
                    <ListItemIcon sx={{marginRight:'8px !important'}}>
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={item.label}
                      primaryTypographyProps={{ fontSize: 14, fontWeight: 'medium' }}
                    />
                  </ListItemButton>
                ))}
            </Box>
            <Divider />
                  <ListItem component="div" disablePadding>
              <ListItemButton sx={{ height: 56 }}>
                <ListItemIcon sx={{marginRight:'8px !important'}}>
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
       
         
        
      </Grid>
            </Box>
    </Menu>

    {/*  All Courses*/}
    <Menu sx={{display:{xs: 'none', md: 'block', lg: 'block'}}}
      id='menu8-menu'
      anchorEl={anchorE8}
      open={open8}
      onClose={handleClose8}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right'
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right'
      }}
      MenuListProps={{
        'aria-labelledby': 'menu8-button'
      }}>
     <Box sx={{ width: '100vw' }}>
              <Grid sx={{ pb: 0,}} container spacing={{ xs: 0, md: 1 }} columns={{ xs: 4, sm: 8, md: 12 }}>
     
            
      <Grid xs={2} sm={4} md={3} sx={{borderRight:'#eee solid 1px'}}>
       <FireNav component="nav" disablePadding>
            <ListItemButton component="a" href="#customized-list">
              <ListItemIcon sx={{marginRight:'8px !important'}}>
              <EngineeringIcon color="primary" />
              </ListItemIcon>
              <ListItemText
                sx={{ my: 0 }}
                primary="ENGINEERING"
                primaryTypographyProps={{
                  fontSize: 16,
                  fontWeight: 'medium',
                  color: 'primary',
                
                }}
              />
            </ListItemButton>
            <Divider />
      
            <Box
              sx={{
                bgcolor: open8 ? '#fff' : null,
                pb: open8 ? 2 : 0,
               
              }}
            >
          
              {open8 &&
                allCoursesIndiaEng.map((item) => (
                  <ListItemButton
                    key={item.label}
                    sx={{ py: 0, minHeight: 32, color: '#666',}}
                  >
                    <ListItemIcon sx={{marginRight:'8px !important'}}>
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={item.label}
                      primaryTypographyProps={{ fontSize: 14, fontWeight: 'medium' }}
                    />
                  </ListItemButton>
                ))}
            </Box>
            
            <ListItemButton component="a" href="#customized-list">
              <ListItemIcon sx={{marginRight:'8px !important'}}>
              <BusinessIcon color="primary" />
              </ListItemIcon>
              <ListItemText
                sx={{ my: 0 }}
                primary="MANAGEMENT"
                primaryTypographyProps={{
                  fontSize: 16,
                  fontWeight: 'medium',
                  color:'primary',

                }}
              />
            </ListItemButton>
            <Divider />
      
            <Box
              sx={{
                bgcolor: open8 ? '#fff' : null,
                pb: open8 ? 2 : 0,
               
              }}
            >
          
              {open8 &&
                allCoursesIndiaManagement.map((item) => (
                  <ListItemButton
                    key={item.label}
                    sx={{ py: 0, minHeight: 32, color: '#666',}}
                  >
                    <ListItemIcon sx={{marginRight:'8px !important'}}>
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={item.label}
                      primaryTypographyProps={{ fontSize: 14, fontWeight: 'medium' }}
                    />
                  </ListItemButton>
                ))}
            </Box>
                 
          
          </FireNav>
         
        </Grid>
        <Grid xs={2} sm={4} md={3} sx={{borderRight:'#eee solid 1px'}}>
       <FireNav component="nav" disablePadding>
            <ListItemButton component="a" href="#customized-list">
              <ListItemIcon sx={{marginRight:'8px !important'}}>
              <DvrIcon color="primary" />
              </ListItemIcon>
              <ListItemText
                sx={{ my: 0 }}
                primary="COMPUTER APPLICATIONS"
                primaryTypographyProps={{
                  fontSize: 16,
                  fontWeight: 'medium',
                  color: 'primary',
                
                }}
              />
            </ListItemButton>
            <Divider />
      
            <Box
              sx={{
                bgcolor: open8 ? '#fff' : null,
                pb: open8 ? 2 : 0,
               
              }}
            >
          
              {open8 &&
                allCoursesIndiaCA.map((item) => (
                  <ListItemButton
                    key={item.label}
                    sx={{ py: 0, minHeight: 32, color: '#666',}}
                  >
                    <ListItemIcon sx={{marginRight:'8px !important'}}>
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={item.label}
                      primaryTypographyProps={{ fontSize: 14, fontWeight: 'medium' }}
                    />
                  </ListItemButton>
                ))}
            </Box>
            
            <ListItemButton component="a" href="#customized-list">
              <ListItemIcon sx={{marginRight:'8px !important'}}>
              <LocalHospitalIcon color="primary" />
              </ListItemIcon>
              <ListItemText
                sx={{ my: 0 }}
                primary="DENTAL"
                primaryTypographyProps={{
                  fontSize: 16,
                  fontWeight: 'medium',
                  color:'primary',

                }}
              />
            </ListItemButton>
            <Divider />
      
            <Box
              sx={{
                bgcolor: open8 ? '#fff' : null,
                pb: open8 ? 2 : 0,
               
              }}
            >
          
              {open8 &&
                allCoursesIndiaDental.map((item) => (
                  <ListItemButton
                    key={item.label}
                    sx={{ py: 0, minHeight: 32, color: '#666',}}
                  >
                    <ListItemIcon sx={{marginRight:'8px !important'}}>
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={item.label}
                      primaryTypographyProps={{ fontSize: 14, fontWeight: 'medium' }}
                    />
                  </ListItemButton>
                ))}
            </Box>

            <ListItemButton component="a" href="#customized-list">
              <ListItemIcon sx={{marginRight:'8px !important'}}>
              <SchoolIcon color="primary" />
              </ListItemIcon>
              <ListItemText
                sx={{ my: 0 }}
                primary="EDUCATION"
                primaryTypographyProps={{
                  fontSize: 16,
                  fontWeight: 'medium',
                  color:'primary',

                }}
              />
            </ListItemButton>
            <Divider />
      
            <Box
              sx={{
                bgcolor: open8 ? '#fff' : null,
                pb: open8 ? 2 : 0,
               
              }}
            >
          
              {open8 &&
                allCoursesIndiaEducation.map((item) => (
                  <ListItemButton
                    key={item.label}
                    sx={{ py: 0, minHeight: 32, color: '#666',}}
                  >
                    <ListItemIcon sx={{marginRight:'8px !important'}}>
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={item.label}
                      primaryTypographyProps={{ fontSize: 14, fontWeight: 'medium' }}
                    />
                  </ListItemButton>
                ))}
            </Box>
                 
          
          </FireNav>
         
        </Grid>
        <Grid xs={2} sm={4} md={3} sx={{borderRight:'#eee solid 1px'}}>
       <FireNav component="nav" disablePadding>
            <ListItemButton component="a" href="#customized-list">
              <ListItemIcon sx={{marginRight:'8px !important'}}>
              <RestaurantIcon color="primary" />
              </ListItemIcon>
              <ListItemText
                sx={{ my: 0 }}
                primary="HOTEL MANAGEMENT"
                primaryTypographyProps={{
                  fontSize: 16,
                  fontWeight: 'medium',
                  color: 'primary',
                
                }}
              />
            </ListItemButton>
            <Divider />
      
            <Box
              sx={{
                bgcolor: open8 ? '#fff' : null,
                pb: open8 ? 2 : 0,
               
              }}
            >
          
              {open8 &&
                allCoursesIndiaHM.map((item) => (
                  <ListItemButton
                    key={item.label}
                    sx={{ py: 0, minHeight: 32, color: '#666',}}
                  >
                    <ListItemIcon sx={{marginRight:'8px !important'}}>
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={item.label}
                      primaryTypographyProps={{ fontSize: 14, fontWeight: 'medium' }}
                    />
                  </ListItemButton>
                ))}
            </Box>
            
            <ListItemButton component="a" href="#customized-list">
              <ListItemIcon sx={{marginRight:'8px !important'}}>
              <SpaIcon color="primary" />
              </ListItemIcon>
              <ListItemText
                sx={{ my: 0 }}
                primary="MASS COMMUNICATIONS"
                primaryTypographyProps={{
                  fontSize: 16,
                  fontWeight: 'medium',
                  color:'primary',

                }}
              />
            </ListItemButton>
            <Divider />
      
            <Box
              sx={{
                bgcolor: open8 ? '#fff' : null,
                pb: open8 ? 2 : 0,
               
              }}
            >
          
              {open8 &&
                allCoursesIndiaMC.map((item) => (
                  <ListItemButton
                    key={item.label}
                    sx={{ py: 0, minHeight: 32, color: '#666',}}
                  >
                    <ListItemIcon sx={{marginRight:'8px !important'}}>
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={item.label}
                      primaryTypographyProps={{ fontSize: 14, fontWeight: 'medium' }}
                    />
                  </ListItemButton>
                ))}
            </Box>
                 
          
          </FireNav>
         
        </Grid>

        <Grid xs={2} sm={4} md={3} sx={{borderLeft:'#eee solid 1px'}}>
        <Box
              sx={{
                bgcolor: open8 ? '#fff' : null,
                pb: open8 ? 2 : 0,
              }}
            >
              <ListItem component="div" disablePadding>
              <ListItemButton sx={{ height: 40 }}>
                <ListItemIcon sx={{marginRight:'8px'}}>
                  <MenuBookIcon color="primary" />
                </ListItemIcon>
                <ListItemText
                  primary="OTHER STREAMS"
                  primaryTypographyProps={{
                    color: 'primary',
                    fontWeight: 'medium',
                    variant: 'body2',
                    fontSize: 16,
                    textTransform: 'uppercase',
                  }}
                />
              </ListItemButton>
             
            </ListItem>
            <Divider />
              {open8 &&
                allCoursesStreams.map((item) => (
                  <ListItemButton
                    key={item.label}
                    sx={{ py: 0, minHeight: 32, color: '#666',}}
                  >
                    <ListItemIcon sx={{ marginRight:'8px',}}>
                      {item.icon}
                    </ListItemIcon>
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

export default Navigator
