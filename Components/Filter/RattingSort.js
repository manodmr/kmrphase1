import { BiSort } from "react-icons/bi";
import VerifiedIcon from "@mui/icons-material/Verified";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import { styled, alpha } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import ArchiveIcon from "@mui/icons-material/Archive";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { useState } from "react";
import { Star } from "@mui/icons-material";
import { Typography } from "@mui/material";

const StyledMenu = styled((props) => (
  <Menu
    elevation={5}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

export default function RatingSort({handleRateB3, handleRateF2F, handleRateT2F}) {
  const [sort, setSort] = useState(null);
  const open = Boolean(sort);
  const handleClick = (event) => {
    setSort(event.currentTarget);
  };
  
  const handleClose = () => {
    setSort(null);
  };

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
        sx={{ width: "auto" , border:'1.8px solid'}}
        endIcon={<BiSort style={{ fontSize:'15px' }} />}
      >
        <Typography variant="subtitle1" >Ratting</Typography>
      </Button>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          "aria-labelledby": "demo-customized-button",
        }}
        anchorEl={sort}
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        onMouseLeave={handleClose}
      >
       
        <MenuItem
          onClick={handleRateF2F}
        //   disableRipple
          sx={{ justifyCotent: "space-between" }}
        >
          <Star style={{ paddingRight: 2 }} />
           4 & 5
        </MenuItem>

        <Divider sx={{ my: 0.5 }} />
        <MenuItem onClick={handleRateT2F} 
        // disableRipple
        >
          <Star />
          3 & 4
        </MenuItem>
        <Divider sx={{ my: 0.5 }} />
        <MenuItem 
        onClick={handleRateB3} 
        // disableRipple
        >
          <Star />
          Bellow 3
        </MenuItem>
      </StyledMenu>
    </div>
  );
}





{/* <MenuItem onClick={handleClose} disableRipple>
          <VerifiedIcon sx={{ "&:hover": { color: "primary.main" } }} />
          Featured
        </MenuItem> */}