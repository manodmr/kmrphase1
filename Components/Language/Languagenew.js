import Link from "next/link";
import Image from "next/image";
import language from "/public/icons/language.png";
import Tamil from "/public/icons/tamil-letter.png";
import Box from "@mui/material/Box";
import LanguageIcon from "@mui/icons-material/Language";
import { Avatar, Button, IconButton } from "@mui/material";
import TranslateIcon from "@mui/icons-material/Translate";
import Typography from "@mui/material/Typography";
import React, { useContext, useEffect,useState } from "react";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';


function Language() {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    const [a,setA] = useState("English - EN");
    const [b,setB] = useState("தமிழ் - TA");
    const [state,setState] = useState([]);
const translateradio = ()=>
{
  let getid = e.target.id;

  setState(getid);

}


  return (
    <>
      <Box
        sx={{
          ml: { xs: "0", md: "5" },
          mt: { xs: "1px", md: "3px", lg: "3px" },
          display: { xs: "none", md: "flex", lg: "flex" },
        }}
      >
      <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        // sx={{color:"#Fff"}}
      >
       
       <LanguageIcon/>  ENGLISH <ArrowDropDownIcon/>
      </Button>

      
      <Menu
     
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
          <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="English - EN"
        name="radio-buttons-group"
      ></RadioGroup>
        <MenuItem id="lan1" onClick={handleClose}><FormControlLabel value="English - EN" control={<Radio checked = {a == "English - EN" ? true : null} />} label="
English - EN" /></MenuItem>
        <MenuItem id="lan2" onClick={handleClose}><FormControlLabel value="தமிழ் - TA" control={<Radio/>} label="
தமிழ் - TA" /></MenuItem>
      </Menu>
    </div>
      </Box>

      {/* <IconButton >
  
 <TranslateIcon sx={{ borderRadius:50, padding:'6px', display:  { xs: 'flex', md: 'none', lg: 'none' },  width: 32,
height: 32, color:'#fff', bgcolor: '#55cdb5',
     '&:hover': {
         bgcolor: '#0db995'
     } }} >
       </TranslateIcon>
</IconButton> */}

      <IconButton>
        <Typography
          sx={{
            borderRadius: 50,
            padding: "2px 9px",
            fontWeight: "bold",
            display: { xs: "flex", md: "none", lg: "none" },
            width: 32,
            height: 32,
            color: "#fff",
            bgcolor: "primary.main",
            "&:hover": {
              bgcolor: "primary.dark",
            },
          }}
        >
          s
        </Typography>
      </IconButton>
    </>
  );
}

export default Language;
