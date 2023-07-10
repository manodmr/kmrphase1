import {
  Avatar,
  Box,
  Button,
  Dialog,
  Divider,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Paper,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import Navigator from "@/Components/Navigator/Navigator";
import Link from "next/link";
import Image from "next/image";
import kmrLogo from "/public/icons/kalvimalar-english-logo.png";
import kmrLogoDark from "/public/icons/kalvimalar-english-logo-white.png";
import DayNight from "@/Components/DayNight/DayNight";
import Language from "@/Components/Language/Language";
import Languagenew from "@/Components/Language/Languagenew";
import Hamburgermenu from "./Hamburgermenu";
import SearchDrawer from "./DrawerSearch/SearchDrawer";
import { darkLightModeContext } from "@/Layout/Layout";
import Login from "@/Components/Login/Login";
import Mobile from "@/Components/Login/Mobile";
import { AppBar } from "@/OverViews/AppBar";
import Search from "@/Sections/Search";
import { useRouter } from "next/router";
import RegisterForm from "@/Components/Login/register";
import {
  Cancel,
  CancelPresentation,
  LibraryAdd,
  Logout,
  PersonAdd,
  SearchRounded,
  Settings,
} from "@mui/icons-material";
import { Stack } from "@/OverViews/Stack";

const Topbarnew = ({
  ChangeMode,
  search,
  setlocLatLng,
  handleSelect,
  setValue,
  value,
  dataList,
  status,
  ready,
  clearSuggestions,
  locationContext,
  locationContextLat,
  locationContextLon,
  state,
  setState,
  isDarkTheme,
  setIsDarkTheme,
  selectValue,
  setSelectValue,
}) => {
  const DayNightState = useContext(darkLightModeContext);
  // console.log(search);
  const [mobilePage, setMobilePage] = useState(null);
  const [loginOpen, setLoginOpen] = useState(null);
  const [viewState, setViewState] = useState(true);
  const open = Boolean(loginOpen);
  const openMobile = Boolean(mobilePage);
  const router = useRouter();
  useEffect(() => {
    if (viewState === false) {
      setMobilePage(true);
    }
  }, [viewState]);
  console.log("call " + localStorage.length);
  const now  = new Date();
  // var hours = 23;
  var hours = now.getHours();
  var Time = now.getMinutes().toString().slice(0,3);
  console.log(Time);
  return (
    <>
      <AppBar
        position="static"
        sx={{ width: "100vw", position: "relative", boxShadow: "none" }}
        state={state}
      >
        <Toolbar
          sx={{
            width: "100vw",
            boxShadow: "none",
            justifyContent: "space-between",
            alignItems: "center",
            // bgcolor: "#f0f4f7",
            // background : !state ? 'transparent' : null,
            zIndex: "1",
            display: { xs: "none", sm: "none", md: "flex" },
            minHeight: { sm: "40px", md: "56px", lg: "64px" },
          }}
        >
          {!state ? (
            <Hamburgermenu
              isDarkTheme={isDarkTheme}
              setIsDarkTheme={setIsDarkTheme}
              viewState={viewState}
              setViewState={setViewState}
            />
          ) : null}
          <Link href={"/"}>
            <Image
              src={DayNightState === true ? kmrLogoDark : kmrLogo}
              alt="KMR Logo"
              width={180}
              className="mlogo"
            />
          </Link>
          {/* ----------------------------------------------------------------------------- */}
          <Box display={{ xs: "none", md: "flex" }}>
            {/* <SearchDrawer   /> */}

            <Search
              setValue={setValue}
              value={value}
              dataList={dataList}
              status={status}
              ready={ready}
              clearSuggestions={clearSuggestions}
              locationContext={locationContext}
              locationContextLat={locationContextLat}
              locationContextLon={locationContextLon}
              handleSelect={handleSelect}
              selectValue={selectValue}
              setSelectValue={setSelectValue}
            />
          </Box>
          {/* ------------------------------------------------------------------------------ */}
          <Box sx={{ flexGrow: !state ? 1 : 0 }} />
          {/* -----------------------------------------------------Login-------------------------- */}
          {!state ? (
            <>
              <Box sx={{ display: { xs: "none", md: "flex" } }}>
                <Languagenew />
                <DayNight state={DayNightState} onChange={ChangeMode} />

                {viewState === true ? (
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
                      bgcolor: "primary.main",
                      marginRight: "10px",
                      "&:hover": {
                        bgcolor: "primary.main",
                      },
                      order: 0,
                      fontWeight: "bold",

                      // display: { xs: 'none', sm: 'flex' }
                    }}
                    onClick={(e) => {
                      // setMobilePage(true);
                      router.push("/login", undefined, { shallow: true });
                    }}
                  >
                    Login
                  </Button>
                ) : (
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
                      bgcolor: "primary.main",
                      "&:hover": {
                        bgcolor: "primary.main",
                      },
                      order: 0,
                      fontWeight: "bold",

                      // display: { xs: 'none', sm: 'flex' }
                    }}
                    onClick={(e) => {
                      setViewState(true);
                      // router.push("/register",undefined,{shallow:true});
                    }}
                  >
                    Logout
                  </Button>
                )}
              </Box>
              <Box>
                <Menu
                  open={open}
                  anchorEl={loginOpen}
                  onClose={(e) => {
                    setLoginOpen(false);
                  }}
                  PaperProps={{
                    elevation: 0,
                    sx: {
                      overflow: "visible",
                      filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                      mt: 4.5,
                      px:1,
                      "& .MuiAvatar-root": {
                        width: 30,
                        height: 30,
                        ml: -0.5,
                        mr: 1,
                      },
                      "&:before": {
                        content: '""',
                        display: "block",
                        position: "absolute",
                        top: 0,
                        right: 14,
                        width: 10,
                        height: 10,
                        bgcolor: "background.paper",
                        transform: "translateY(-50%) rotate(45deg)",
                        zIndex: 0,
                      },
                    },
                  }}
                  transformOrigin={{ horizontal: "right", vertical: "top" }}
                  anchorOrigin={{ horizontal: "right", vertical: "top" }}
                  // sx={{ width: "100%", height: "100%" }}
                >
                  
                  {loginOpen == true && localStorage.getItem("name") != null ? (
                    <Stack p={2} mx={1} >
                      <MenuItem  sx={{ borderRadius:'20px' , bgcolor:'lightyellow' }} >
                     Good { hours > 4 && hours < 12 ? `Morning` : hours >=12 && hours < 17 ? `Afternoon` : `Evening`}, <b> &nbsp;{localStorage.getItem("name").split(" ")?.[0]} </b>
                      </MenuItem>
                      <MenuItem  
                      onClick={() => {
                            setLoginOpen(false);
                          }}
                          sx={{ display:'flex' , justifyContent:'space-between' }}
                          >
                            <Box sx={{ display:'flex' }} >
                         <Avatar
                    sx={{
                      width: 32,
                      height: 32,
                      color: "#fff",
                      bgcolor: "primary.main",
                      "&:hover": {
                        bgcolor: "primary.dark",
                      },
                    }}
                  >
                    {localStorage.getItem("name").toString().toUpperCase()[0]}
                     </Avatar>
                    <Typography>My account</Typography>
                            </Box>

                    <Typography>{`${hours % 12}:${Time}`}{ hours >= 12 ? ` PM` : ` AM`}</Typography>
                      </MenuItem>
                      <Divider />
                      <MenuItem  onClick={() => {
                            setLoginOpen(false);
                          }}>
                        <ListItemIcon>
                          <PersonAdd fontSize="small" />
                        </ListItemIcon>
                        Add another account
                      </MenuItem>
                      <MenuItem   
                      onClick={() => {
                            // localStorage.clear();
                            setLoginOpen(false);
                            setViewState(false);
                          }}>
                        <ListItemIcon>
                          <Logout fontSize="small" />
                        </ListItemIcon>
                        Logout
                      </MenuItem>
                    </Stack>
                  ) : null}
                </Menu>
              </Box>
            </>
          ) : null}
          {!state ? (
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <DayNight state={DayNightState} onChange={ChangeMode} />
              <Language />
              {viewState === true ? (
                <IconButton
                  onClick={(e) => {
                    setLoginOpen(true);
                    // router.push("/register",undefined,{shallow:true});
                  }}
                >
                  <Avatar
                    sx={{
                      width: 32,
                      height: 32,
                      color: "#fff",
                      bgcolor: "primary.main",
                      "&:hover": {
                        bgcolor: "primary.dark",
                      },
                    }}
                  ></Avatar>
                </IconButton>
              ) : null}
              {/* <Dialog
              open={open}
              onClose={(e) => {
                setLoginOpen(false);
              }}
              sx={{ width:'100%' ,  height: "100%",}}
            >
              <RegisterForm 
                setLoginOpen={setLoginOpen}
                setViewState={setViewState}
               />

            </Dialog> */}
              {/* <Dialog
              open={openMobile}
              onClose={(e) => {
                setMobilePage(false);
              }}
            >
              <Mobile />
            </Dialog>
            <Dialog
              open={openMobile}
              onClose={(e) => {
                setMobilePage(false);
              }}
            >
              <Mobile />
            </Dialog> */}
            </Box>
          ) : null}
          {/* <Box sx={{ flexGrow: !state ? 0 : 1 }} /> */}

          {state ? (
            <>
              <Box sx={{ display: "flex", flexGrow: 0, order: 2 }}>
                <IconButton
                  sx={{
                    // width: "100%",
                    // height: "100%",
                    // justifyContent: "right",
                    ":hover": { background: "none", border: "none" },
                    ":active": { background: "none", border: "none" },

                    alignItems: "start",
                    px: { md: 5, sm: 2 },
                  }}
                  onClick={(e) => {
                    setState(false);
                  }}
                >
                  <Cancel />
                </IconButton>
              </Box>
            </>
          ) : null}
        </Toolbar>
      </AppBar>

      {/* ---------------------------mobile---------------------------------- */}
      {router.route != "/login1" &&
      router.route != "/login" &&
      router.route != "/search" &&
      router.route != "/register" &&
      router.route != "/register1" ? (
        <AppBar
          sx={{
            width: "100vw",
            display: { xs: "flex", md: "none", sm: "flex" },
            boxShadow: "none",
          }}
          position="static"
        >
          <Toolbar
            sx={{
              width: "100vw",
              justifyContent: "space-between",
              alignItems: "center",
              // bgcolor: "#f0f4f7",
              // background : !state ? 'transparent' : null,
              zIndex: "1",
              display: { xs: "flex", md: "none", sm: "flex" },
              minHeight: { sm: "40px", md: "56px", lg: "64px" },
              bgcolor: DayNightState === true ? "grey.700" : "grey.300",
            }}
          >
            <Hamburgermenu
              isDarkTheme={isDarkTheme}
              setIsDarkTheme={setIsDarkTheme}
            />
            <Box>
              <Link href={"/"}>
                <Image
                  src={DayNightState === true ? kmrLogoDark : kmrLogo}
                  alt="KMR Logo"
                  className="mlogo"
                />
              </Link>
            </Box>
            <Box sx={{ flexGrow: 1 }} />
            {/* ----------------------------------------------------------------------------- */}
            {/* -----------------------------------------------Search---Tamil---Login-------------------------- */}
            <Box
              sx={{
                display: { xs: "flex", md: "none" },
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {router.query.collegelist != undefined ||
              (router.query.collegelist != undefined &&
                router.query.college != undefined) ||
              router.query.college != undefined ? (
                <Box
                  sx={{
                    alignItems: "center",
                    width: "100%",
                    height: "100%",
                    bgcolor: "primary.main",
                    borderRadius: "25px",
                  }}
                >
                  <Link href="/search">
                    <IconButton size="small" sx={{ bgcolor: "primary.main" }}>
                      <SearchRounded
                        fontSize="medium"
                        sx={{ color: "common.white" }}
                      />
                    </IconButton>
                  </Link>
                </Box>
              ) : null}

              <Box sx={{ flexGrow: 1 }} />
              <Box
                sx={{
                  display: { xs: "flex", md: "none" },
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Language />
              </Box>
              {viewState === true && localStorage.getItem("name") != null ? (
                <IconButton
                  onClick={(e) => {
                    setLoginOpen(true);
                    // router.push("/login1",undefined,{shallow:true});
                  }}
                >
                  <Avatar
                    sx={{
                      width: 32,
                      height: 32,
                      color: "#fff",
                      bgcolor: "primary.main",
                      "&:hover": {
                        bgcolor: "primary.dark",
                      },
                    }}
                  >
                    {localStorage.getItem("name").toString().toUpperCase()[0]}
                  </Avatar>
                </IconButton>
              ) : (viewState == false &&
                  localStorage.getItem("name") != null) ||
                (viewState == false && localStorage.getItem("name") == null) ? (
                <>
                  <IconButton
                    onClick={(e) => {
                      // setLoginOpen(true);
                      router.push("/login1", undefined, { shallow: true });
                    }}
                  >
                    <Avatar
                      sx={{
                        width: 32,
                        height: 32,
                        color: "#fff",
                        bgcolor: "primary.main",
                        "&:hover": {
                          bgcolor: "primary.dark",
                        },
                      }}
                    ></Avatar>
                  </IconButton>
                </>
              ) : null}
            </Box>
          </Toolbar>
          {router.query.collegelist === undefined ||
          (router.query.collegelist === undefined &&
            router.query.college === undefined) ? (
            <Toolbar sx={{ width: "70%" }}>
              <Search
                setValue={setValue}
                value={value}
                dataList={dataList}
                status={status}
                ready={ready}
                clearSuggestions={clearSuggestions}
                locationContext={locationContext}
                locationContextLat={locationContextLat}
                locationContextLon={locationContextLon}
                handleSelect={handleSelect}
                selectValue={selectValue}
                setSelectValue={setSelectValue}
              />
            </Toolbar>
          ) : null}
        </AppBar>
      ) : null}
    </>
  );
};

export default Topbarnew;
