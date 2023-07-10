import {
    Avatar,
    Box,
    Button,
    Dialog,
    IconButton,
    Toolbar,
  } from "@mui/material";
  import React, { useContext, useEffect, useState } from "react";
  import Navigator from "@/Components/Navigator/Navigator";
  import Link from "next/link";
  import Image from "next/image";
  import kmrLogo from "/public/icons/kalvimalar-english-logo.png";
  import kmrLogoDark from "/public/icons/kalvimalar-english-logo-white.png";
  import DayNight from "@/Components/DayNight/DayNight";
  import Language from "@/Components/Language/Language";
  import Hamburgermenu from "./Hamburgermenu";
  import SearchDrawer from "./DrawerSearch/SearchDrawer";
  import { darkLightModeContext } from "@/Layout/Layout";
  import Login from "@/Components/Login/Login";
  import Mobile from "@/Components/Login/Mobile";
  import { AppBar } from "@/OverViews/AppBar";
  import Search from "@/Sections/Search";
  import { useRouter } from "next/router";
  import RegisterForm from "@/Components/Login/register";
  import { Cancel, SearchRounded } from "@mui/icons-material";
import { IconButtonAnimate } from "@/theme/animate";
  
  const Topbar = ({
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
  }) => {
    const DayNightState = useContext(darkLightModeContext);
    console.log(search);
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
    return (
      <>
        <AppBar
          position="static"
          sx={{ width: "100vw", position: "relative", zIndex:'1'}}
          state={state}
        >
          <Toolbar
            sx={{
              width: "100vw",
              justifyContent: "space-between",
              alignItems: "center",
              // bgcolor: "#f0f4f7",
              // background : !state ? 'transparent' : null,
              zIndex: "1",
              display: {md:'flex' , xs:'none'},
              minHeight: { sm: "40px", md: "56px", lg: "64px" },
            }}
          >
             <Box >
            <Link href={"/"}>
              <Image
                src={DayNightState === true ? kmrLogoDark : kmrLogo}
                alt="KMR Logo"
                className="mlogo"
              />
            </Link>
             </Box>
            <Box sx={{ flexGrow: !state ? 1 : 0 }} />
            {/* ----------------------------------------------------------------------------- */}
  
            <Box display={{ xs: "none", md: "flex" }}>
              {/* <SearchDrawer   /> */}
              {!state ? (
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
              />
              )
              :null}
              </Box>
            {/* ------------------------------------------------------------------------------ */}
            <Box sx={{ flexGrow: !state ? 1 : 0 }} />
            {/* -----------------------------------------------------Login-------------------------- */}
            {!state ? (
              <Box sx={{ display: { xs: "none", md: "flex" } }}>
                <DayNight state={DayNightState} onChange={ChangeMode} />
                <Language />
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
                      "&:hover": {
                        bgcolor: "primary.main",
                      },
                      order: 0,
                      fontWeight: "bold",
  
                      // display: { xs: 'none', sm: 'flex' }
                    }}
                    onClick={(e) => {
                      setMobilePage(true);
                      // router.push("/register",undefined,{shallow:true});
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
  
                <Dialog
                  open={open}
                  onClose={(e) => {
                    setLoginOpen(false);
                  }}
                  sx={{ width: "100%", height: "100%" }}
                >
                  <RegisterForm
                    setLoginOpen={setLoginOpen}
                    setMobilePage={setMobilePage}
                    setViewState={setViewState}
                  />
                </Dialog>
  
                <Dialog
                  open={openMobile}
                  onClose={(e) => {
                    setMobilePage(false);
                  }}
                >
                  <Login
                    setMobilePage={setMobilePage}
                    setLoginOpen={setLoginOpen}
                  />
                </Dialog>
  
                {/* <Dialog
                open={openMobile}
                onClose={(e) => {
                  setMobilePage(false);
                }}
              >
                <Mobile />
              </Dialog> */}
              </Box>
            ) : null}
            {!state ? (
              <Box sx={{ display: { xs: "flex", md: "none" } }}>
                {/* <DayNight state={DayNightState} onChange={ChangeMode} /> */}
                <Box sx={{ alignItems:'center' , width:'100%' , height:'100%' }} >
                <IconButton size="small" sx={{ bgcolor:'primary.main' }} >
                <SearchRounded fontSize="medium" />
                </IconButton>
                </Box>
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
  
              </Box>
            ) : null}
            {/* <Box sx={{ flexGrow: !state ? 0 : 1 }} /> */}
  
            {state ? (
              <>
                <Box sx={{ display: {md:"flex" ,xs:'none'}, flexGrow: 0, order: 2 }}>
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
          {/* ------------------------------------Mobile TopBoar------------------------------------- */}
          <Toolbar
            sx={{
              width: "100vw",
              justifyContent: "space-between",
              alignItems: "center",
              // bgcolor: "#f0f4f7",
              // background : !state ? 'transparent' : null,
              zIndex: "1",
              display:{xs:"flex" , md:'none' , sm:'flex'},
              minHeight: { sm: "40px", md: "56px", lg: "64px" },
              bgcolor:DayNightState === true ? "grey.700" : 'grey.300',
            }}
          >
             <Hamburgermenu isDarkTheme={isDarkTheme} setIsDarkTheme={setIsDarkTheme}  /> 
             <Box >
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
              <Box sx={{ display: { xs: "flex", md: "none" } , justifyContent:'center' , alignItems:'center'}}>
                <Box sx={{ alignItems:'center' , width:'100%' , height:'100%',bgcolor:'primary.main' ,borderRadius:'25px'  }} >
                 <Link href="search" >
                <IconButton size="small" sx={{ bgcolor:'primary.main'  }}   >
                <SearchRounded fontSize="medium" sx={{ color:'common.white'}} />
                </IconButton>
                 </Link> 
                </Box>
                <Box sx={{ flexGrow: 1 }} />
                <Box sx={{ display: { xs: "flex", md: "none" } , justifyContent:'center' , alignItems:'center'}}>
                <Language />
                </Box>
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
  
              </Box>
           
            {/* <Box sx={{ flexGrow: !state ? 0 : 1 }} /> */}
  
        
              {/* <>
                <Box sx={{ display: {md:"flex" ,xs:'none'}, flexGrow: 0, order: 2 }}>
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
              </> */}
          
          </Toolbar>
          {/* ------------------------------------Second Nav------------------------------------- */}
  
          {/* <Navigatorold/> */}
        </AppBar>
      </>
    );
  };
  
  export default Topbar;
  