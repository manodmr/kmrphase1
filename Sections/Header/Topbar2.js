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
import { Cancel } from "@mui/icons-material";

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
        sx={{ width: "100vw", position: "relative" }}
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

            minHeight: { sm: "40px", md: "56px", lg: "64px" },
          }}
        >
          {!state ? <Hamburgermenu isDarkTheme={isDarkTheme} setIsDarkTheme={setIsDarkTheme}  /> : null}
          <Link href={"/"}>
            <Image
              src={DayNightState === true ? kmrLogoDark : kmrLogo}
              alt="KMR Logo"
              className="mlogo"
            />
          </Link>
          <Box sx={{ flexGrow: !state ? 1 : 0 }} />
          {/* ----------------------------------------------------------------------------- */}

          <Box display={{ xs: "none", md: "flex" }}>
            {/* <SearchDrawer   /> */}
          {!state ? 
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

        {/* ------------------------------------Mobile search------------------------------------- */}

        <Toolbar
          sx={{
            justifyContent: "center",
            width: "100%",
            alignItems: "center",
            bgcolor: DayNightState === true ? "grey.700" : "grey.300",
            background: !state ? "transparent" : null,
            display: {
              xs: !state ? "flex" : "flex",
              sm: !state ? "flex" : "none",
              md: "none",
            },
            minHeight: "64px",
            marginTop: { xs: "-10px", sm: "-5px", md: "0" },
          }}
        >
          <Box display={{ xs: "flex", md: "none" }}>
            {/* <SearchDrawer /> */}
            <Search />
          </Box>
        </Toolbar>

        {/* ------------------------------------Second Nav------------------------------------- */}

        {/* <Navigatorold/> */}
      </AppBar>
    </>
  );
};

export default Topbar;
