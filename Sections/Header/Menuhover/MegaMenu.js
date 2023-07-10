import { AppBar, Avatar, Box, Button, IconButton, InputBase, Toolbar, Typography } from '@mui/material'
import { AccountCircle, Home, Login, Menu as MenuIcon, Search , AccountBalance as College , Castle as University  ,School as Stream , BusinessCenter as IIT, LanOutlined} from '@mui/icons-material';
import React, { useState } from 'react'
import MenuItems from './MenuItems';
import CollegeMenu from './Items/CollegeMenu';
import { Stack } from '@mui/system';
import { shadows } from '@mui/system';
import UniversityMenu from './Items/UniversityMenu';
import StreamMenu from './Items/StreamsMenu';
import IITMenu from './Items/IITMenu';
import Link from 'next/link'
import Image from 'next/image'
import kmrLogo from '/public/icons/kalvimalar-english-logo.png';
import homeIcon from '/public/icons/home.png';
import btechIcon from '/public/icons/kicons-1.png';
import mbaIcon from '/public/icons/kicons-2.png';
import mbbsIcon from '/public/icons/kicons-3.png';
import designIcon from '/public/icons/kicons-4.png';
import lawIcon from '/public/icons/kicons-5.png';
import scienceIcon from '/public/icons/kicons-6.png';
import abroadIcon from '/public/icons/kicons-7.png';

import Drawer from "@mui/material/Drawer";
import CloseIcon from "@mui/icons-material/Close";
import Divider from "@mui/material/Divider";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import FolderIcon from "@mui/icons-material/Folder";
import ImageIcon from "@mui/icons-material/Image";
import PersonIcon from "@mui/icons-material/Person";
import DescriptionIcon from "@mui/icons-material/Description";
import SchoolIcon from "@mui/icons-material/School";
import SearchIcon from "@mui/icons-material/Search";

import DayNight from '@/Components/DayNight/DayNight';
import Language from '@/Components/Language/Language';
import { visuallyHidden } from '@mui/utils';

const MegaMenu = () => {
 const [onHover , setOnHover] = useState(false);
    const handleClick = (event) => {
        setOnHover(true);
        setOnHover(event.currentTarget);
      };
      const handleClose = () => {
        setOnHover(false);
      };
      
/*
  react useState hook to save the current open/close state of the drawer,
  normally variables dissapear afte the function was executed
  */
  const [open, setState] = useState(false);

  
  /*
  function that is being called every time the drawer should open or close,
  the keys tab and shift are excluded so the user can focus between
  the elements with the keys
  */
  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    //changes the function state according to the value of open
    setState(open);
  };

    return (
        <>
            <AppBar position="static">
                <Toolbar sx={{
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    bgcolor: '#f0f4f7',
                    minHeight: { sm: '40px', md:'56px', lg: '64px' },
                    
                                         
                }} >

 <IconButton
                        size="large"
                        edge="start"
                        color="#000"
                        aria-label="open drawer" 
                        onClick={toggleDrawer(true)}
                        sx={{ display: { sm: 'flex', md:'none', lg: 'none' }, padding:'1', }}
                    >
                        <MenuIcon />
                    </IconButton>    
                   
                  <Link href={'/'}> <Image
                src={kmrLogo}
                alt="KMR Logo"
                className='mlogo'
            /> </Link> 
 <Box sx={{ flexGrow: 1 }} />
                  
                    {/* -----------------------------------logo------------------------------ */}
                   
            
                    {/* <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                    >
                        KALVI MALAR
                    </Typography> */}
                    {/* ---------------------------------------------------Search---------------------- */}
                    <InputBase
                        type={'search'}
                        variant="outlined"
                        size='small'
                        placeholder='Search....'
                        endAdornment={<Search color='black' />}
                        
                        sx={{
                            borderRadius: '6px',
                            minWidth: '350px',
                            bgcolor: 'common.white',
                            display: { lg: 'flex', xs: 'none', md:'flex'},
                            border: '1px solid #eee',
                            // flexGrow: 1,
                            p: 1
                        }} />
                    {/* ------------------------------------------------------------------------------ */}
                     <Box sx={{ flexGrow: 1 }} /> 
                    {/* -----------------------------------------------------Login-------------------------- */}
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                    <DayNight/>
            <Language/>
                    <Button
                        variant="contained"
                        endIcon={  <Avatar sx={{ width: 22,
                            height: 22, color:'#fff', background:'transparent', }} >
                                                </Avatar>}
                        size="small"
                        sx={{
                            width: 'auto',
                            bgcolor: '#55cdb5',
                            '&:hover': {
                                bgcolor: '#0db995'
                            },
                            order: 0,
                            fontWeight: 'bold',
                            
                           
                            // display: { xs: 'none', sm: 'flex' }
                        }}
                    >
                        Login
                    </Button>
                    
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <DayNight/>
            <Language/>
                 
                    <IconButton >
                        <Avatar sx={{ width: 32,
    height: 32, color:'#fff', bgcolor: '#55cdb5',
                            '&:hover': {
                                bgcolor: '#0db995'
                            } }} >
                        </Avatar>
                    </IconButton>
          </Box>

          <Drawer
              //from which side the drawer slides in
              anchor="left"
              //if open is true --> drawer is shown
              open={open}
              //function that is called when the drawer should close
              onClose={toggleDrawer(false)}
              //function that is called when the drawer should open
              onOpen={toggleDrawer(true)}
            >
                {/* The inside of the drawer */}
                <Box sx={{
                  px: 2,
                  
                  height: 1,
                  backgroundColor: "#f0f4f7",
                }}>

                  {/* 
                  when clicking the icon it calls the function toggleDrawer 
                  and closes the drawer by setting the variable open to false
                  */}
                  <IconButton sx={{ paddingLeft:'12px', position:'relative', right:'0'}}>
                    <CloseIcon onClick={toggleDrawer(false)} />
                  </IconButton>

                  <Divider sx={{mb: 1}} />

                  <Box>
                  <Link  href={'/'}>
                  <ListItemButton>
                      <ListItemIcon sx={{display:'flex'}}>
                      <Image
                src={homeIcon}
                alt="B.Tech"
                width={'25'}
                height={'25'}
            />
                      </ListItemIcon>
                      <ListItemText primary="Home" />
                    </ListItemButton>
                    </Link>

                    <Link  href={'/'}>
                  <ListItemButton>
                      <ListItemIcon sx={{display:'flex'}}>
                      <Image
                src={btechIcon}
                alt="B.Tech"
                width={'25'}
                height={'25'}
            />
                      </ListItemIcon>
                      <ListItemText primary="B.Tech" />
                    </ListItemButton>
                    </Link>

                    <Link  href={'/'}>
                  <ListItemButton>
                      <ListItemIcon sx={{display:'flex'}}>
                      <Image
                src={mbaIcon}
                alt="MBA"
                width={'25'}
                height={'25'}
            />
                      </ListItemIcon>
                      <ListItemText primary="MBA" />
                    </ListItemButton>
                    </Link>

                    <Link  href={'/'}>
                  <ListItemButton>
                      <ListItemIcon sx={{display:'flex'}}>
                      <Image
                src={mbbsIcon}
                alt="MBBS"
                width={'25'}
                height={'25'}
            />
                      </ListItemIcon>
                      <ListItemText primary="MBBS" />
                    </ListItemButton>
                    </Link>

                    <Link  href={'/'}>
                  <ListItemButton>
                      <ListItemIcon sx={{display:'flex'}}>
                      <Image
                src={designIcon}
                alt="Design"
                width={'25'}
                height={'25'}
            />
                      </ListItemIcon>
                      <ListItemText primary="Design" />
                    </ListItemButton>
                    </Link>

                    <Link  href={'/'}>
                  <ListItemButton>
                      <ListItemIcon sx={{display:'flex'}}>
                      <Image
                src={lawIcon}
                alt="Law"
                width={'25'}
                height={'25'}
            />
                      </ListItemIcon>
                      <ListItemText primary="Law" />
                    </ListItemButton>
                    </Link>

                    <Link  href={'/'}>
                  <ListItemButton>
                      <ListItemIcon sx={{display:'flex'}}>
                      <Image
                src={scienceIcon}
                alt="Science"
                width={'25'}
                height={'25'}
            />
                      </ListItemIcon>
                      <ListItemText primary="Science" />
                    </ListItemButton>
                    </Link>

                    <Link  href={'/'}>
                  <ListItemButton>
                      <ListItemIcon sx={{display:'flex'}}>
                      <Image
                src={abroadIcon}
                alt="Study Abroad"
                width={'25'}
                height={'25'}
            />
                      </ListItemIcon>
                      <ListItemText primary="Study Abroad" />
                    </ListItemButton>
                    </Link>
                  </Box>
                  
                 

                  <Box sx={{
                    display: "flex", 
                    justifyContent:"center", 
                    position: "absolute", 
                    bottom: "0", 
                    left: "50%", 
                    transform: "translate(-50%, 0)"}}
                  >
                    
                    {/* <Button variant="contained" sx={{m:1, width: .5}}>Register</Button> */}
                    <Button variant="outlined" endIcon={  <Avatar sx={{ width: 22,
                            height: 22, color:'#fff', background:'#55cdb5', }} >
                                                </Avatar>}
                        size="small" sx={{m:1,}}>Login</Button> 
                  </Box>
                </Box>
              
            </Drawer>
           
                   
                </Toolbar>

                   {/* ------------------------------------Mobile search------------------------------------- */}

<Toolbar sx={{

justifyContent: 'space-between',
alignItems: 'center',
bgcolor: '#f0f4f7',
display: { sm: 'flex', md: 'none'},
minHeight:'64px',  
marginTop: { xs: '-10px', sm: '-5px', md: '0'},          
}}>
        <InputBase
                        type={'search'}
                        variant="outlined"
                        size='small'
                        placeholder='Search....'
                        endAdornment={<Search color='black' />}
                        
                        sx={{
                            borderRadius: '6px',
                            minWidth: '100%',
                            bgcolor: 'common.white',
                            display: { sm: 'flex', xs: 'flex'},
                            border: '1px solid #eee',
                            flexBasis:'100%',
                            // flexGrow: 1,
                            p: 1
                        }} />
</Toolbar>

                {/* ------------------------------------Second Nav------------------------------------- */}
                <Toolbar sx={{ bgcolor: 'common.white', height: 'auto' , overflowX:{xs: 'scroll', sm: 'scroll', md: 'hidden', lg: 'hidden'}, textAlign:'center', margin:'auto', boxSizing:'border-box',
    whiteSpace: 'nowrap', justifyContent:{sm: 'normal', md: 'center', lg: 'center'}, paddingLeft:'15px', paddingRight:'15px',  width: '100%', paddingLeft:'15px' }} >
                   
                    {/* <Box sx={{marginRight: {sm: '10px', md: '10px', lg: '20px'}}}>
                    <MenuItems  MenuList={'Home'} 
                    
                    Icon={<Image
                src={homeIcon}
                alt="B.Tech"
                className='micon'
                width={'42'}
                height={'42'}
            />} 
                    
                    options={options}
                     state={onHover} onclick={handleClick} onclose={handleClose}  />
                    </Box> */}
                    
                    <Box sx={{marginRight: {sm: '10px', md: '10px', lg: '20px'},}}>
                    <Link href={'test'}><CollegeMenu  MenuList={'B.Tech'} 
                    
                    Icon={<Image
                        src={btechIcon}
                        alt="B.Tech"
                        className='micon'
                        width={'42'}
                        height={'42'}
                    />} 
                            
                    options={Colleges}/></Link>
                    </Box>
                    
                    <Box sx={{marginRight: {sm: '10px', md: '10px', lg: '20px'}}}>
                   <UniversityMenu  MenuList={'MBA'}
                   Icon={<Image
                    src={mbaIcon}
                    alt="MBA"
                    className='micon'
                    width={'42'}
                    height={'42'}
                />} 
                   options={Colleges} />
                    </Box>
                    <Box sx={{marginRight: {sm: '10px', md: '10px', lg: '20px'}}} >
                    <StreamMenu MenuList={'MBBS'} 
                   Icon={<Image
                    src={mbbsIcon}
                    alt="MBA"
                    className='micon'
                    width={'42'}
                    height={'42'}
                />}
                     options={Colleges} />
                    </Box>
                    <Box sx={{marginRight: {sm: '10px', md: '10px', lg: '20px'}}}>
                    <IITMenu MenuList={'Design'} 
                    Icon={<Image
                        src={designIcon}
                        alt="MBA"
                        className='micon'
                        width={'42'}
                        height={'42'}
                    />}
                     options={Colleges} />
                    </Box>

                    <Box sx={{marginRight: {sm: '10px', md: '10px', lg: '20px'}}}>
                    <IITMenu MenuList={'Law'} 
                    Icon={<Image
                        src={lawIcon}
                        alt="Law"
                        className='micon'
                        width={'42'}
                        height={'42'}
                    />}
                     options={Colleges} />
                    </Box>

                    <Box sx={{marginRight: {sm: '10px', md: '10px', lg: '20px'}}}>
                    <IITMenu MenuList={'Science'} 
                    Icon={<Image
                        src={scienceIcon}
                        alt="Science"
                        className='micon'
                        width={'42'}
                        height={'42'}
                    />}
                     options={Colleges} />
                    </Box>

                    <Box sx={{marginRight: {sm: '10px', md: '10px', lg: '20px'}}}>
                    <IITMenu MenuList={'Study Abroad'} 
                    Icon={<Image
                        src={abroadIcon}
                        alt="Study Abroad"
                        className='micon'
                        width={'42'}
                        height={'42'}
                    />}
                     options={Colleges} />
                    </Box>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default MegaMenu

const options = [
    'Item 1',
    'Item 2',
    'Item 3',
    'Item 4',
   
  ];
const Colleges = [
    'Jeppiaar Engineering College',
    'Anna University',
    'Madras University ',
    'IIT College',
    'MOP Vaishnav College',
    'Womens Christian College',
    'Madras Christian College',
    'Kilpak Medical College',
    'Madras Medical College',
    'SRM University',
    'Hindustan University',
    'Matha Engineering College',
    'Saveetha Engineering College',
    'KCG college of Engineering & Technology',
  ];