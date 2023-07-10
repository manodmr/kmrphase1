import { BiRupee, BiSearchAlt, BiSort, BiStar } from "react-icons/bi";
import {
  Accordion,
  AccordionActions,
  AccordionDetails,
  AccordionSummary,
  Button,
  Menu,
  Typography,
} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import { useContext, useState } from "react";
import {
  ArrowDropDown,
  Cancel,
  ClearAll,
  ClearAllSharp,
  CloseFullscreen,
  CloseSharp,
  Star,
} from "@mui/icons-material";
import { CloseIcon } from "@/theme/overrides/CustomIcons";
import { darkLightModeContext } from "@/Layout/Layout";

export default function PriceSort({
  handle3to4,
  handle4to5,
  handlebellow3,
  handlePriceLow,
  handlePriceHigh,
  handleClearRate,
  handleClearPrice,
}) {
  const [sort, setSort] = useState(null);
  const open = Boolean(sort);
  const handleClick = (event) => {
    setSort(event.currentTarget);
  };
  const handleClose = () => {
    setSort(null);
  };

  const [expanded, setExpanded] = useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  const themeMode = useContext(darkLightModeContext);
  return (
    <div>
      <Button
        id="demo-customized-button"
        aria-controls={open ? "demo-customized-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        variant="outlined"
        disableElevation
        onClick={handleClick}
        // onMouseLeave={handleClose}
        sx={{ width: "100%", border: "1.8px solid" }}
        endIcon={<ArrowDropDown style={{ fontSize: "28 px" }} />}
      >
        <Typography variant="subtitle1">Sorting</Typography>
      </Button>
      <Menu
        id="demo-customized-menu"
        // MenuListProps={{
        //   "aria-labelledby": "demo-customized-button",
        // }}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}  
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        anchorEl={sort}
        open={open}
        onClose={handleClose}
        onMouseLeave={handleClose}
       
      >
        {/* <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} >
        <AccordionSummary
          expandIcon={<ArrowDropDown />}
          aria-controls="panel1a-content"
       
          id="panel1a-header"
        >
          <Typography>Ratting</Typography>
        </AccordionSummary>
        <AccordionDetails onClick={handleClose}>
         
         <MenuItem onClick={handle4to5} disableRipple>
          <Star style={{ paddingRight: 4 , color:'goldenrod' }} />
          4&5
        </MenuItem>
          <MenuItem onClick={handle3to4} disableRipple>
            <Star style={{ paddingRight: 4 , color:'goldenrod'}} />
            3&4
          </MenuItem>
          <MenuItem onClick={handlebellow3} disableRipple>
            <Star style={{ paddingRight: 4 , color:'goldenrod'}} />
             Bellow 3
          </MenuItem>
          <MenuItem onClick={handleClearRate} disableRipple>
            <CloseSharp style={{ paddingRight: 4 }} />
             Clear Rating Sort
          </MenuItem>
        </AccordionDetails>
         </Accordion> */}

        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
          sx={{ 
            my:-1,
            width:'100%',
            bgcolor: themeMode === true ? "grey.600" : "grey.200",
            color: themeMode === true ? "grey.200" : "grey.700",
           }}
        >
          <AccordionSummary
            expandIcon={<ArrowDropDown />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            sx={{ 
              mt:-1,
              // height:'50px',
              // mb:1,
              
              bgcolor: themeMode === true ? "grey.700" : "grey.300",
             }}
          >
            <Typography>Rating Sort</Typography>
            
          </AccordionSummary>
          <AccordionDetails onClick={handleClose} 
            sx={{ 
              my:-1,
              bgcolor: themeMode === true ? "grey.600" : "grey.200",
              display:'grid',
              mx:-2 ,
              pr:5,
              py:2,

             }}
           >
            <MenuItem onClick={handlePriceHigh} disableRipple sx={{  bgcolor: themeMode === true ? "grey.600" : "grey.200",}} >
              {/* <BiRupee style={{ paddingRight: 2 }} /> */}
              <Star style={{ paddingRight: 2, color: "goldenrod" }} />
              Rating High to Low
            </MenuItem>
            <MenuItem onClick={handlePriceLow} disableRipple  sx={{  bgcolor: themeMode === true ? "grey.600" : "grey.200",}}>
              {/* <BiRupee style={{ paddingRight: 2 }} /> */}
              <Star style={{ paddingRight: 2, color: "goldenrod" }} />
              Rating Low to High
            </MenuItem>
            <MenuItem onClick={handleClearPrice} disableRipple  sx={{  bgcolor: themeMode === true ? "grey.600" : "grey.200",}} >
              <CloseSharp style={{ paddingRight: 4 }} />
              Clear Pricing Sort
            </MenuItem>
          </AccordionDetails>
        </Accordion>
      </Menu>
    </div>
  );
}

{
  /* <MenuItem onClick={handleClose} disableRipple>
          <VerifiedIcon sx={{ "&:hover": { color: "primary.main" } }} />
          Featured
        </MenuItem> */
}
