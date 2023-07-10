import {
  AppBar,
  Avatar,
  Box,
  Button,
  IconButton,
  InputBase,
  Toolbar,
  Typography,
  ListItem,
} from "@mui/material";
import {
  AccountCircle,
  Home,
  Login,
  Menu as MenuIcon,
  Search,
  AccountBalance as College,
  Castle as University,
  School as Stream,
  BusinessCenter as IIT,
  LanOutlined,
} from "@mui/icons-material";
import React, { useState } from "react";
import Navigator from "@/Components/Navigator/Navigator";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import { Stack } from "@mui/system";
import { shadows } from "@mui/system";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
import Link from "next/link";
import Image from "next/image";
import kmrLogo from "/public/icons/kalvimalar-english-logo.png";
import homeIcon from "/public/icons/home.png";
import btechIcon from "/public/icons/kicons-1.png";
import mbaIcon from "/public/icons/kicons-2.png";
import mbbsIcon from "/public/icons/kicons-3.png";
import designIcon from "/public/icons/kicons-4.png";
import lawIcon from "/public/icons/kicons-5.png";
import scienceIcon from "/public/icons/kicons-6.png";
import abroadIcon from "/public/icons/kicons-7.png";

import Drawer from "@mui/material/Drawer";
import CloseIcon from "@mui/icons-material/Close";
import Divider from "@mui/material/Divider";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import Collapse from "@mui/material/Collapse";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import SchoolIcon from "@mui/icons-material/School";
import SearchIcon from "@mui/icons-material/Search";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import DayNight from "@/Components/DayNight/DayNight";
import Language from "@/Components/Language/Language";
import { visuallyHidden } from "@mui/utils";
import Navigatorold from "@/Components/Navigator/Navigatorold";
import Hamburgermenu from "./Hamburgermenu";

const Topbar = () => {
 
  return (
    <>
      <AppBar position="static">
        <Toolbar
          sx={{
            justifyContent: "space-between",
            alignItems: "center",
            bgcolor: "#f0f4f7",
            minHeight: { sm: "40px", md: "56px", lg: "64px" },
            
          }}
        >
      <Hamburgermenu/>

          <Link href={"/"}>
          <Image src={kmrLogo} alt="KMR Logo" className="mlogo" />
          </Link>
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
            type={"search"}
            variant="outlined"
            size="small"
            placeholder="Search...."
            endAdornment={<Search color="black" />}
            sx={{
              borderRadius: "6px",
              minWidth: "350px",
              bgcolor: "common.white",
              display: { lg: "flex", xs: "none", md: "flex" },
              border: "1px solid #eee",
              // flexGrow: 1,
              p: 1,
            }}
          />
          {/* ------------------------------------------------------------------------------ */}
          <Box sx={{ flexGrow: 1 }} />
          {/* -----------------------------------------------------Login-------------------------- */}
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <DayNight />
            <Language />
            <Button
              variant="contained"
              endIcon={
                <Avatar
                  sx={{
                    width: 22,
                    height: 22,
                    color: "#fff",
                    background: "transparent",
                  }}
                ></Avatar>
              }
              size="small"
              sx={{
                width: "auto",
                bgcolor: "#55cdb5",
                "&:hover": {
                  bgcolor: "#0db995",
                },
                order: 0,
                fontWeight: "bold",

                // display: { xs: 'none', sm: 'flex' }
              }}
            >
              Login
            </Button>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <DayNight />
            <Language />

            <IconButton>
              <Avatar
                sx={{
                  width: 32,
                  height: 32,
                  color: "#fff",
                  bgcolor: "#55cdb5",
                  "&:hover": {
                    bgcolor: "#0db995",
                  },
                }}
              ></Avatar>
            </IconButton>
          </Box>

        </Toolbar>

        {/* ------------------------------------Mobile search------------------------------------- */}

        <Toolbar
          sx={{
            justifyContent: "space-between",
            alignItems: "center",
            bgcolor: "#f0f4f7",
            display: { sm: "flex", md: "none" },
            minHeight: "64px",
            marginTop: { xs: "-10px", sm: "-5px", md: "0" },
          }}
        >
          <InputBase
            type={"search"}
            variant="outlined"
            size="small"
            placeholder="Search...."
            endAdornment={<Search color="black" />}
            sx={{
              borderRadius: "6px",
              minWidth: "100%",
              bgcolor: "common.white",
              display: { sm: "flex", xs: "flex" },
              border: "1px solid #eee",
              flexBasis: "100%",
              // flexGrow: 1,
              p: 1,
            }}
          />
        </Toolbar>

        {/* ------------------------------------Second Nav------------------------------------- */}

        <Navigator />
        {/* <Navigatorold/> */}
      </AppBar>
    </>
  );
};

export default Topbar;
