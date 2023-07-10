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
  Accordion,
  AccordionSummary,
  AccordionDetails,
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
  ArrowBack,
  ArrowBackIosNew,
  Cancel,
  CancelSharp,
  Nightlife,
  LightMode,
  DarkMode,
  LoginRounded,
} from "@mui/icons-material";
import { useRouter } from "next/router";
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
import beIcon from "/public/icons/kicons-be.png";
import btechIcon from "/public/icons/kicons-1.png";
import mbaIcon from "/public/icons/kicons-2.png";
import mbbsIcon from "/public/icons/kicons-3.png";
import meIcon from "/public/icons/kicons-me.png";
import mtechIcon from "/public/icons/kicons-mtech.png";
import homeIconDark from "@/public/icons/whiteIcon/home-dark.png";
import beIconDark from "@/public/icons/whiteIcon/kicons-be-dark.png";
import btechIconDark from "/public/icons/whiteIcon/kicons-1-dark.png";
import mbaIconDark from "/public/icons/whiteIcon/kicons-2-dark.png";
import mbbsIconDark from "/public/icons/whiteIcon/kicons-3-dark.png";
import meIconDark from "/public/icons/whiteIcon/kicons-me-dark.png";
import mtechIconDark from "/public/icons/whiteIcon/kicons-mtech-dark.png";
// import designIcon from "/public/icons/kicons-4.png";
// import lawIcon from "/public/icons/kicons-5.png";
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
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { createContext, useContext, useEffect, useState } from "react";
import { darkLightModeContext } from "@/Layout/Layout";
import NewComplete from "../Search/NewComplete";
import { RiMenu5Fill } from "react-icons/ri";

export const routerContext = createContext();

const Hamburgermenu = ({ isDarkTheme, setIsDarkTheme , viewState, setViewState}) => {
  const [open, setState] = useState(false);

  const drawerWidth = 310;

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    //changes the function state according to the value of open
    setState(open);
  };
  const router = useRouter();
  const themeMode = useContext(darkLightModeContext);

  const [menubedegree, setMenubedegree] = useState([]);
  const [menubelateraldegree, setMenubelateraldegree] = useState([]);
  const [menubtechdegree, setMenubtechdegree] = useState([]);
  const [menubtechlateraldegree, setMenubtechlateraldegree] = useState([]);
  const [menumbadegree, setMenumbadegree] = useState([]);
  const [menumedegree, setMenumedegree] = useState([]);
  const [menubcomdegree, setMenubcomdegree] = useState([]);
  const [menumtechdegree, setMenumtechdegree] = useState([]);
  const [menumbbsdegree, setMenumbbsdegree] = useState([]);

  const [menudatas, setMenudatas] = useState([]);
  const [menube, setMenube] = useState([]);
  const [menubelateral, setMenubelateral] = useState([]);
  const [menubtech, setMenubtech] = useState([]);
  const [menubtechlateral, setMenubtechlateral] = useState([]);
  const [menumba, setMenumba] = useState([]);
  const [menume, setMenume] = useState([]);
  const [menubcom, setMenubcom] = useState([]);
  const [menumtech, setMenumtech] = useState([]);
  const [menumbbs, setMenumbbs] = useState([]);

  const [alldegrees, setAllDegrees] = useState([]);

  const fetchdata = async () => {
    const fetchd = await fetch("https://w.kalvimalar.com/menu");
    const response = await fetchd.json();
    //  console.log(response);

    setAllDegrees(response.data);
    setMenube(response.data[0].course);
    setMenubedegree(response.data[0]);
    setMenubelateral(response.data[7].course);
    setMenubelateraldegree(response.data[7]);
    setMenubtech(response.data[1].course);
    setMenubtechdegree(response.data[1]);
    setMenubtechlateral(response.data[6].course);
    setMenubtechlateraldegree(response.data[6]);
    setMenumba(response.data[5].course);
    setMenumbadegree(response.data[5]);
    setMenume(response.data[4].course);
    setMenubcom(response.data[29].course);
    setMenumedegree(response.data[4]);
    setMenubcomdegree(response.data[29]);
    setMenumtech(response.data[2].course);
    setMenumtechdegree(response.data[2]);

    setMenumbbs(response.data[35].course);
    setMenumbbsdegree(response.data[35]);
  };
  useEffect(() => {
    fetchdata();
  }, []);
  // console.log(menubtech);

  const [openbesubmenu, setopenbesubmenu] = useState(true);
  const [openbtechsubmenu, setopenbtechsubmenu] = useState(true);
  const [openmbasubmenu, setopenmbasubmenu] = useState(true);
  const [openmbbssubmenu, setopenmbbssubmenu] = useState(true);
  const [opendesignsubmenu, setopendesignsubmenu] = useState(true);
  const [openlawsubmenu, setopenlawsubmenu] = useState(true);
  const [opensciencesubmenu, setopensciencesubmenu] = useState(true);
  const [openabroadsubmenu, setopenabroadsubmenu] = useState(true);

  const beClick = () => {
    setopenbesubmenu(!openbesubmenu);
  };
  const btechClick = () => {
    setopenbtechsubmenu(!openbtechsubmenu);
  };

  const mbaClick = () => {
    setopenmbasubmenu(!openmbasubmenu);
  };

  const mbbsClick = () => {
    setopenmbbssubmenu(!openmbbssubmenu);
  };
  const designClick = () => {
    setopendesignsubmenu(!opendesignsubmenu);
  };
  const lawClick = () => {
    setopenlawsubmenu(!openlawsubmenu);
  };
  const scienceClick = () => {
    setopensciencesubmenu(!opensciencesubmenu);
  };
  const abroadClick = () => {
    setopenabroadsubmenu(!openabroadsubmenu);
  };

  const [clickedcoursevalue, setClickedcoursevalue] = useState(
    router.query.course
  );

  const [expanded, setExpanded] = useState("panel0");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
    // setopenbesubmenu(Boolean(openbesubmenu));
  };

  // const themeMode = useContext(darkLightModeContext);
  const [localName , setLocalName] = useState(localStorage.getItem('name'));
  console.log(localName);
  return (
    <div>
      <IconButton
        size="large"
        edge="start"
        color="#000"
        aria-label="open drawer"
        onClick={toggleDrawer(true)}
        sx={{
          display: { sm: "flex", md: "none", lg: "none" },
          padding: "1",
          color: themeMode === true ? "grey.300" : "grey.700",
        }}
      >
  
        <RiMenu5Fill fontSize={'22px'} />
      </IconButton>
      {/* ------------------------------------Hamburger Menu------------------------------------- */}
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          height: "100vh",
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            height: "100vh",
            backgroundColor: themeMode === true ? "grey.700" : "common.white",
          },

          color: themeMode === true ? "grey.100" : "grey.800",
        }}
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
        <Box
          sx={{
            px: 0,
            textAlign: "right",
            bgcolor: themeMode === true ? "grey.700" : "grey.300",
            color: themeMode === true ? "grey.100" : "grey.800",
          }}
        >
          {/* 
                  when clicking the icon it calls the function toggleDrawer 
                  and closes the drawer by setting the variable open to false
                  */}
          <IconButton
            onClick={toggleDrawer(false)}
            sx={{
              paddingLeft: "12px",
              position: "fixed",
              right: "10px",
              display: "flex",
              fontSize: "large",
              color: "#fff",
            }}
          >
            <CloseIcon
              sx={{
                marginRight: "8px",
                fontSize: "15px",
                borderRadius: "50px",
                background: "#fff",
                color: "#000",
              }}
            />{" "}
            Close
          </IconButton>

          <Divider sx={{ mb: 1 }} />

          <Box
            sx={{
              display: "grid",
              bgcolor: themeMode === true ? "grey.700" : "grey.300",
              color: themeMode === true ? "grey.100" : "grey.800",
            }}
          >  
            {localName != null && viewState == true ? 
             <Box sx={{ justifyContent:'left' ,my:1 }} >
              <Typography variant="subtitle1" justifyContent={'left'} textAlign='left' sx={{ display:'flex' , alignItems:'center' , mx:2 }} >
                <LoginRounded fontSize="small" sx={{ mr:1 }} />  Hi, {localName.toString().split(" ")?.[0]}.
              </Typography>
             </Box>
            :null}
            <Box
              sx={{
                width: "100%",
                justifyContent: "space-between",
                display: "flex",
                pr: 2,
              }}
            >
              <Link href={"/"}>
                <ListItemButton>
                  <ListItemIcon sx={{ display: "flex" }}>
                    <Image
                      src={themeMode === true? homeIconDark : homeIcon}
                      alt="B.Tech"
                      width={"22"}
                      height={"22"}
                    />
                  </ListItemIcon>
                  <ListItemText primary="Home" />
                </ListItemButton>
              </Link>
              <IconButton
                onClick={(e) => {
                  setIsDarkTheme(!isDarkTheme)
                }}
              >
                {themeMode === true ? <LightMode sx={{ color:'common.white' }} /> : <DarkMode />}
              </IconButton>
            </Box>
            {/* <Box>
              <NewComplete />
            </Box> */}
            {/* BE Menu   */}
            <Accordion
              expanded={expanded === "panel0"}
              onChange={handleChange("panel0")}
              sx={{
                backgroundColor: themeMode === true ? "grey.700" : "grey.300",
                color: themeMode === true ? "grey.100" : "grey.800",
              }}
            >
              <AccordionSummary
                sx={{
                  padding: "0",
                  margin: "0",
                  bgcolor: themeMode === true ? "grey.700" : "grey.300",
                  color: themeMode === true ? "grey.100" : "grey.800",
                }}
              >
                <ListItemButton
                  sx={{
                    padding: "0 16px",
                    bgcolor: themeMode === true ? "grey.700" : "grey.300",
                    color: themeMode === true ? "grey.100" : "grey.800",
                  }}
                >
                  <ListItemIcon sx={{ display: "flex" }}>
                    
                    <Image src={ themeMode === true ? beIconDark : beIcon} alt="BE" width={"22"} height={"22"} />
                  </ListItemIcon>
                  <ListItemText primary="BE" />
                  {openbesubmenu ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
              </AccordionSummary>
              <AccordionDetails
                sx={{
                  padding: "0",
                  bgcolor: themeMode === true ? "grey.700" : "common.white",
                  color: themeMode === true ? "grey.100" : "grey.800",
                }}
              >
                <Collapse
                  sx={{ marginTop: "-10px" }}
                  in={openbesubmenu}
                  timeout="auto"
                  unmountOnExit
                >
                  <List component="div" disablePadding>
                    <Box
                      sx={{
                        bgcolor:
                          themeMode === true ? "grey.700" : "common.white",
                        color: themeMode === true ? "grey.100" : "grey.800",
                        margin: "5px",
                        border: "1px solid #e1e1e1",
                        borderRadius: "6px",
                        display: "grid",
                      }}
                    >
                      <Link href={`/${"BE"}`}>
                        <ListItemButton
                          sx={{
                            pl: 2,
                            bgcolor:
                              themeMode === true ? "grey.400" : "common.white",
                            color: themeMode === true ? "grey.100" : "grey.800",
                          }}
                        >
                          <ListItemIcon
                            sx={{
                              marginRight: "5px",
                            }}
                          >
                            <MenuBookIcon color="primary" />
                          </ListItemIcon>
                          <ListItemText
                            primary="BE Popular Streams"
                            primaryTypographyProps={{
                              color: "primary",
                              fontSize: 13,
                              fontWeight: "medium",
                              textTransform: "uppercase",
                            }}
                          />
                        </ListItemButton>
                      </Link>
                      <Divider />
                      {menube.map((elem, ind) => {
                        // console.log(elem);
                        return (
                          <Link
                            href={`/${
                              menubedegree.name
                            }?course=${elem.course_name.replace(/[ ]+/g, "-")}`}
                          >
                            <ListItemButton
                              // endIcon={<SchoolIcon/>}
                              sx={{
                                py: 0,
                                minHeight: 32,
                                bgcolor:
                                  themeMode === true
                                    ? "grey.600"
                                    : "common.white",
                                color:
                                  themeMode === true ? "grey.100" : "grey.800",
                              }}
                              onClick={toggleDrawer(false)}
                            >
                              <ListItemText
                                primary={elem.course_name}
                                primaryTypographyProps={{
                                  fontSize: 13,
                                  fontWeight: "normal",
                                }}
                                onClick={(e) => {
                                  setClickedcoursevalue(elem.course_name);
                                }}
                              />
                              <ListItemIcon sx={{ marginRight: "0px" }}>
                                <ChevronRightIcon
                                  sx={{
                                    fontSize: "16px",
                                    color:
                                      themeMode === true ? "grey.100" : "#666",
                                  }}
                                />
                              </ListItemIcon>
                              {/* {elem.id} */}
                            </ListItemButton>
                          </Link>
                        );
                      })}

                      <ListItemButton
                        sx={{
                          pl: 2,
                          bgcolor:
                            themeMode === true ? "grey.400" : "common.white",
                          color: themeMode === true ? "grey.100" : "grey.800",
                        }}
                      >
                        <ListItemIcon sx={{ marginRight: "5px" }}>
                          <MenuBookIcon color="primary" />
                        </ListItemIcon>
                        <ListItemText
                          primary="BE (LATERAL) Streams"
                          primaryTypographyProps={{
                            color: "primary",
                            fontSize: 13,
                            fontWeight: "medium",
                            textTransform: "uppercase",
                          }}
                        />
                      </ListItemButton>
                      <Divider />
                      {menubelateral.map((elem, ind) => {
                        return (
                          <Link
                            href={`/${
                              router.query.collegelist
                            }?course=${elem.course_name.replace(/[ ]+/g, "-")}`}
                          >
                            <ListItemButton
                              // endIcon={<SchoolIcon/>}
                              key={elem.id}
                              sx={{
                                py: 0,
                                minHeight: 32,
                                bgcolor:
                                  themeMode === true
                                    ? "grey.600"
                                    : "common.white",
                                color:
                                  themeMode === true ? "grey.100" : "grey.800",
                              }}
                              onClick={toggleDrawer(false)}
                            >
                              <ListItemText
                                primary={elem.course_name}
                                primaryTypographyProps={{
                                  fontSize: 13,
                                  fontWeight: "normal",
                                }}
                                onClick={() =>
                                  setClickedcoursevalue(elem.course_name)
                                }
                              />
                              <ListItemIcon sx={{ marginRight: "0px" }}>
                                <ChevronRightIcon
                                  sx={{
                                    fontSize: "16px",
                                    color:
                                      themeMode === true ? "grey.100" : "#666",
                                  }}
                                />
                              </ListItemIcon>
                            </ListItemButton>
                          </Link>
                        );
                      })}

                      {/* here top    */}
                    </Box>
                  </List>
                </Collapse>
              </AccordionDetails>
            </Accordion>

            {/* B.Tech Menu  */}
            <Accordion
              expanded={expanded === "panel1"}
              onChange={handleChange("panel1")}
              sx={{
                bgcolor: themeMode === true ? "grey.700" : "grey.300",
                color: themeMode === true ? "grey.100" : "grey.800",
              }}
            >
              <AccordionSummary sx={{ padding: "0", margin: "0" }}>
                <ListItemButton sx={{ padding: "0 16px" }}>
                  <ListItemIcon sx={{ display: "flex" }}>
                    <Image
                      src={themeMode ===true ? btechIconDark :btechIcon}
                      alt="B.Tech"
                      width={"22"}
                      height={"22"}
                    />
                  </ListItemIcon>
                  <ListItemText primary="B.Tech" />
                  {openbtechsubmenu ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
              </AccordionSummary>
              <AccordionDetails sx={{ padding: "0" }}>
                <Collapse
                  sx={{ marginTop: "-10px" }}
                  in={openbtechsubmenu}
                  timeout="auto"
                  unmountOnExit
                >
                  <List component="div" disablePadding>
                    <Box
                      sx={{
                        bgcolor: themeMode === true ? "grey.700" : "grey.300",
                        color: themeMode === true ? "grey.100" : "grey.800",
                        margin: "5px",
                        border: "1px solid #e1e1e1",
                        borderRadius: "6px",
                        display: "grid",
                      }}
                    >
                      <ListItemButton
                        sx={{
                          pl: 2,
                          bgcolor:
                            themeMode === true ? "grey.400" : "common.white",
                          color: themeMode === true ? "grey.100" : "grey.800",
                        }}
                      >
                        <ListItemIcon sx={{ marginRight: "5px" }}>
                          <MenuBookIcon color="primary" />
                        </ListItemIcon>
                        <ListItemText
                          primary="B.Tech Popular Streams"
                          primaryTypographyProps={{
                            color: "primary",
                            fontSize: 13,
                            fontWeight: "medium",
                            textTransform: "uppercase",
                          }}
                        />
                      </ListItemButton>
                      <Divider />
                      {menubtech.map((elem, ind) => {
                        return (
                          <Link
                            href={`/${
                              menubtechdegree.name
                            }?course=${elem.course_name.replace(/[ ]+/g, "-")}`}
                          >
                            <ListItemButton
                              // endIcon={<SchoolIcon/>}
                              key={elem.id}
                              sx={{
                                py: 0,
                                minHeight: 32,
                                bgcolor:
                                  themeMode === true
                                    ? "grey.600"
                                    : "common.white",
                                color:
                                  themeMode === true ? "grey.100" : "grey.800",
                              }}
                              onClick={toggleDrawer(false)}
                            >
                              <ListItemText
                                primary={elem.course_name}
                                primaryTypographyProps={{
                                  fontSize: 13,
                                  fontWeight: "normal",
                                }}
                                onClick={(e) => {
                                  setClickedcoursevalue(elem.course_name);
                                }}
                              />
                              <ListItemIcon sx={{ marginRight: "0px" }}>
                                <ChevronRightIcon
                                  sx={{
                                    fontSize: "16px",
                                    color:
                                      themeMode === true ? "grey.100" : "#666",
                                  }}
                                />
                              </ListItemIcon>
                            </ListItemButton>
                          </Link>
                        );
                      })}
                      <ListItemButton
                        sx={{
                          pl: 2,
                          bgcolor:
                            themeMode === true ? "grey.400" : "common.white",
                          color: themeMode === true ? "grey.100" : "grey.800",
                        }}
                      >
                        <ListItemIcon sx={{ marginRight: "5px" }}>
                          <MenuBookIcon color="primary" />
                        </ListItemIcon>
                        <ListItemText
                          primary="B.Tech (Lateral) Streams"
                          primaryTypographyProps={{
                            color: "primary",
                            fontSize: 13,
                            fontWeight: "medium",
                            textTransform: "uppercase",
                          }}
                        />
                      </ListItemButton>
                      <Divider />

                      {menubtechlateral.map((elem, ind) => {
                        return (
                          <Link
                            href={`/${
                              router.query.collegelist
                            }?course=${elem.course_name.replace(/[ ]+/g, "-")}`}
                          >
                            <ListItemButton
                              // endIcon={<SchoolIcon/>}
                              onClick={toggleDrawer(false)}
                              key={elem.id}
                              sx={{
                                py: 0,
                                minHeight: 32,
                                bgcolor:
                                  themeMode === true
                                    ? "grey.600"
                                    : "common.white",
                                color:
                                  themeMode === true ? "grey.100" : "grey.800",
                              }}
                            >
                              <ListItemText
                                primary={elem.course_name}
                                primaryTypographyProps={{
                                  fontSize: 14,
                                  fontWeight: "medium",
                                }}
                              />
                              <ListItemIcon sx={{ marginRight: "0px" }}>
                                <ChevronRightIcon
                                  sx={{
                                    fontSize: "16px",
                                    color:
                                      themeMode === true ? "grey.100" : "#666",
                                  }}
                                />
                              </ListItemIcon>
                            </ListItemButton>
                          </Link>
                        );
                      })}
                      <Divider />
                    </Box>
                  </List>
                </Collapse>
              </AccordionDetails>
            </Accordion>

            {/* M.E Menu  */}
            <Accordion
              disableGutters
              elevation={0}
              square
              expanded={expanded === "panel2"}
              onChange={handleChange("panel2")}
              sx={{
                bgcolor: themeMode === true ? "grey.700" : "grey.300",
                color: themeMode === true ? "grey.100" : "grey.800",
              }}
            >
              <AccordionSummary sx={{ padding: "0", margin: "0" }}>
                <ListItemButton sx={{ padding: "0 16px" }}>
                  <ListItemIcon sx={{ display: "flex" }}>
                    <Image
                      src={ themeMode === true ? meIconDark : meIcon}
                      alt="Design"
                      width={"22"}
                      height={"22"}
                    />
                  </ListItemIcon>
                  <ListItemText primary="B.com" />
                  {opendesignsubmenu ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
              </AccordionSummary>
              <AccordionDetails sx={{ padding: "0" }}>
                <Collapse
                  sx={{ marginTop: "-10px" }}
                  in={opendesignsubmenu}
                  timeout="auto"
                  unmountOnExit
                >
                  <List component="div" disablePadding>
                    <Box
                      sx={{
                        bgcolor:
                          themeMode === true ? "grey.600" : "common.white",
                        color: themeMode === true ? "grey.100" : "grey.800",
                        margin: "5px",
                        border: "1px solid #e1e1e1",
                        borderRadius: "6px",
                        display: "grid",
                      }}
                    >
                      <Link href={`/${"B.com"}`}>
                        <ListItemButton
                          sx={{
                            pl: 2,
                            bgcolor:
                              themeMode === true ? "grey.400" : "common.white",
                            color: themeMode === true ? "grey.100" : "grey.800",
                          }}
                        >
                          <ListItemIcon sx={{ marginRight: "5px" }}>
                            <MenuBookIcon color="primary" />
                          </ListItemIcon>
                          <ListItemText
                            primary="BCOM Popular Streams"
                            primaryTypographyProps={{
                              color: "primary",
                              fontSize: 13,
                              fontWeight: "medium",
                              textTransform: "uppercase",
                            }}
                          />
                        </ListItemButton>
                      </Link>
                      <Divider />

                      {menubcom.map((elem, ind) => {
                        return (
                          <Link
                            href={`/${
                              menubcomdegree.name
                            }?course=${elem.course_name.replace(/[ ]+/g, "-")}`}
                          >
                            <ListItemButton
                              // endIcon={<SchoolIcon/>}
                              key={elem.id}
                              sx={{
                                py: 0,
                                minHeight: 32,
                                bgcolor:
                                  themeMode === true
                                    ? "grey.600"
                                    : "common.white",
                                color:
                                  themeMode === true ? "grey.100" : "grey.800",
                              }}
                              onClick={toggleDrawer(false)}
                            >
                              <ListItemText
                                primary={elem.course_name}
                                primaryTypographyProps={{
                                  fontSize: 13,
                                  fontWeight: "normal",
                                }}
                                onClick={(e) => {
                                  setClickedcoursevalue(elem.course_name);
                                }}
                              />
                              <ListItemIcon sx={{ marginRight: "0px" }}>
                                <ChevronRightIcon
                                  sx={{
                                    fontSize: "16px",
                                    color:
                                      themeMode === true ? "grey.100" : "#666",
                                  }}
                                />
                              </ListItemIcon>
                            </ListItemButton>
                          </Link>
                        );
                      })}
                      <Divider />
                    </Box>
                  </List>
                </Collapse>
              </AccordionDetails>
            </Accordion>

            {/* MBBS Menu  */}
            <Accordion
              expanded={expanded === "panel3"}
              onChange={handleChange("panel3")}
              sx={{
                bgcolor: themeMode === true ? "grey.700" : "grey.300",
                color: themeMode === true ? "grey.100" : "grey.800",
              }}
            >
              <AccordionSummary sx={{ padding: "0", margin: "0" }}>
                <ListItemButton sx={{ padding: "0 16px" }}>
                  <ListItemIcon sx={{ display: "flex" }}>
                    <Image
                      src={ themeMode === true ? mbbsIconDark : mbbsIcon}
                      alt="MBBS"
                      width={"22"}
                      height={"22"}
                    />
                  </ListItemIcon>
                  <ListItemText primary="MBBS" />
                  {openmbbssubmenu ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
              </AccordionSummary>
              <AccordionDetails sx={{ padding: "0" }}>
                <Collapse
                  sx={{ marginTop: "-10px" }}
                  in={openmbbssubmenu}
                  timeout="auto"
                  unmountOnExit
                >
                  <List component="div" disablePadding>
                    <Box
                      sx={{
                        bgcolor:
                          themeMode === true ? "grey.600" : "common.white",
                        color: themeMode === true ? "grey.100" : "grey.800",
                        margin: "5px",
                        border: "1px solid #e1e1e1",
                        borderRadius: "6px",
                      }}
                    >
                      <ListItemButton
                        sx={{
                          pl: 2,
                          bgcolor:
                            themeMode === true ? "grey.400" : "common.white",
                          color: themeMode === true ? "grey.100" : "grey.800",
                        }}
                      >
                        <ListItemIcon sx={{ marginRight: "5px" }}>
                          <MenuBookIcon color="primary" />
                        </ListItemIcon>
                        <ListItemText
                          primary="MBBS Popular Streams"
                          primaryTypographyProps={{
                            color: "primary",
                            fontSize: 13,
                            fontWeight: "medium",
                            textTransform: "uppercase",
                          }}
                        />
                      </ListItemButton>

                      <Divider />

                      {menumbbs.map((elem, ind) => {
                        return (
                          <Link
                            href={`/${
                              menumbbsdegree.name
                            }?course=${elem.course_name.replace(/[ ]+/g, "-")}`}
                          >
                            <ListItemButton
                              endIcon={<SchoolIcon />}
                              key={elem.id}
                              sx={{
                                py: 0,
                                minHeight: 32,

                                bgcolor:
                                  themeMode === true
                                    ? "grey.600"
                                    : "common.white",
                                color:
                                  themeMode === true ? "grey.100" : "grey.800",
                              }}
                              onClick={toggleDrawer(false)}
                            >
                              <ListItemText
                                primary={elem.course_name}
                                primaryTypographyProps={{
                                  fontSize: 13,
                                  fontWeight: "normal",
                                }}
                                onClick={(e) => {
                                  setClickedcoursevalue(elem.course_name);
                                }}
                              />
                              <ListItemIcon sx={{ marginRight: "0px" }}>
                                <ChevronRightIcon
                                  sx={{
                                    fontSize: "16px",
                                    color:
                                      themeMode === true ? "grey.100" : "#666",
                                  }}
                                />
                              </ListItemIcon>
                            </ListItemButton>
                          </Link>
                        );
                      })}

                      <Divider />
                    </Box>
                  </List>
                </Collapse>
              </AccordionDetails>
            </Accordion>

            {/* MBA Menu  */}
            <Accordion
              expanded={expanded === "panel4"}
              onChange={handleChange("panel4")}
              sx={{
                bgcolor: themeMode === true ? "grey.700" : "grey.300",
                color: themeMode === true ? "grey.100" : "grey.800",
              }}
            >
              <AccordionSummary sx={{ padding: "0", margin: "0" }}>
                <ListItemButton sx={{ padding: "0 16px" }}>
                  <ListItemIcon sx={{ display: "flex" }}>
                    <Image src={ themeMode === true? mbaIconDark : mbaIcon} alt="MBA" width={"22"} height={"22"} />
                  </ListItemIcon>
                  <ListItemText primary="MBA" />
                  {openmbasubmenu ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
              </AccordionSummary>
              <AccordionDetails sx={{ padding: "0" }}>
                <Collapse
                  sx={{ marginTop: "-10px" }}
                  in={openmbasubmenu}
                  timeout="auto"
                  unmountOnExit
                >
                  <List component="div" disablePadding>
                    <Box
                      sx={{
                        bgcolor:
                          themeMode === true ? "grey.600" : "common.white",
                        color: themeMode === true ? "grey.100" : "grey.800",
                        margin: "5px",
                        border: "1px solid #e1e1e1",
                        borderRadius: "6px",
                        display: "grid",
                      }}
                    >
                      <ListItemButton
                        sx={{
                          pl: 2,
                          bgcolor:
                            themeMode === true ? "grey.400" : "common.white",
                          color: themeMode === true ? "grey.100" : "grey.800",
                        }}
                      >
                        <ListItemIcon sx={{ marginRight: "5px" }}>
                          <MenuBookIcon color="primary" />
                        </ListItemIcon>
                        <ListItemText
                          primary="MBA Popular Streams"
                          primaryTypographyProps={{
                            color: "primary",
                            fontSize: 13,
                            fontWeight: "medium",
                            textTransform: "uppercase",
                          }}
                        />
                      </ListItemButton>
                      <Divider />

                      {menumba.map((elem, ind) => {
                        return (
                          <Link
                            href={`/${
                              menumbadegree.name
                            }?course=${elem.course_name.replace(/[ ]+/g, "-")}`}
                          >
                            <ListItemButton
                              // endIcon={<SchoolIcon/>}
                              key={elem.id}
                              sx={{
                                py: 0,
                                minHeight: 32,
                                bgcolor:
                                  themeMode === true
                                    ? "grey.600"
                                    : "common.white",
                                color:
                                  themeMode === true ? "grey.100" : "grey.800",
                              }}
                              onClick={toggleDrawer(false)}
                            >
                              <ListItemText
                                primary={elem.course_name}
                                primaryTypographyProps={{
                                  fontSize: 13,
                                  fontWeight: "mormal",
                                }}
                                onClick={(e) => {
                                  setClickedcoursevalue(elem.course_name);
                                }}
                              />
                              <ListItemIcon sx={{ marginRight: "0px" }}>
                                <ChevronRightIcon
                                  sx={{
                                    fontSize: "16px",
                                    color:
                                      themeMode === true ? "grey.100" : "#666",
                                  }}
                                />
                              </ListItemIcon>
                            </ListItemButton>
                          </Link>
                        );
                      })}
                    </Box>
                  </List>
                </Collapse>
              </AccordionDetails>
            </Accordion>

            {/* All Courses   */}
            <Accordion
              disableGutters
              elevation={0}
              square
              expanded={expanded === "panel5"}
              onChange={handleChange("panel5")}
              sx={{
                bgcolor: themeMode === true ? "grey.700" : "grey.300",
                color: themeMode === true ? "grey.100" : "grey.800",
              }}
            >
              <AccordionSummary sx={{ padding: "0", margin: "0" }}>
                <ListItemButton sx={{ padding: "0 16px" }}>
                  <ListItemIcon sx={{ display: "flex" }}>
                    <Image
                      src={ themeMode === true ? mtechIconDark : mtechIcon}
                      alt="Law"
                      width={"22"}
                      height={"22"}
                    />
                  </ListItemIcon>
                  <ListItemText primary="All Courses" />
                  {openlawsubmenu ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
              </AccordionSummary>
              <AccordionDetails sx={{ padding: "0" }}>
                <Collapse
                  sx={{ marginTop: "-10px" }}
                  in={openlawsubmenu}
                  timeout="auto"
                  unmountOnExit
                >
                  <List component="div" disablePadding>
                    <Box
                      sx={{
                        bgcolor:
                          themeMode === true ? "grey.600" : "common.white",
                        color: themeMode === true ? "grey.100" : "grey.800",
                        margin: "5px",
                        border: "1px solid #e1e1e1",
                        borderRadius: "6px",
                        display: "grid",
                      }}
                    >
                      <ListItemButton
                        variant="text"
                        disableRipple
                        sx={{
                          cursor: "default",
                          bgcolor:
                            themeMode === true ? "grey.400" : "common.white",
                          color: themeMode === true ? "grey.100" : "grey.800",
                        }}
                      >
                        <ListItemIcon sx={{ marginRight: "8px !important" }}>
                          {/* <EngineeringIcon color="primary" /> */}
                        </ListItemIcon>
                        <ListItemText
                          sx={{ my: 0 }}
                          primary="ENGINEERING"
                          primaryTypographyProps={{
                            fontSize: 16,
                            fontWeight: "medium",
                            color: "primary",
                          }}
                        />
                      </ListItemButton>
                      {alldegrees.map((elem, ind) => {
                        if (elem.streamid == "3" && ind <= 7) {
                          return (
                            <Link href={`/${elem.name}`}>
                              <ListItemButton
                                // endIcon={<SchoolIcon/>}
                                key={elem.id}
                                sx={{
                                  py: 0,
                                  minHeight: 32,
                                  bgcolor:
                                    themeMode === true
                                      ? "grey.600"
                                      : "common.white",
                                  color:
                                    themeMode === true
                                      ? "grey.100"
                                      : "grey.800",
                                }}
                                onClick={toggleDrawer(false)}
                              >
                                <ListItemText
                                  primary={elem.name + " Colleges"}
                                  primaryTypographyProps={{
                                    fontSize: 14,
                                    fontWeight: "medium",
                                  }}
                                  onClick={(e) => {
                                    setClickedcoursevalue(elem.name);
                                  }}
                                />
                                <ListItemIcon sx={{ marginRight: "0px" }}>
                                  <ChevronRightIcon
                                    sx={{
                                      fontSize: "16px",
                                      color:
                                        themeMode === true
                                          ? "grey.100"
                                          : "#666",
                                    }}
                                  />
                                </ListItemIcon>
                              </ListItemButton>
                            </Link>
                          );
                        }
                      })}

                      <Divider />

                      <Divider />
                    </Box>

                    <Box
                      sx={{
                        bgcolor:
                          themeMode === true ? "grey.600" : "common.white",
                        color: themeMode === true ? "grey.100" : "grey.800",
                        margin: "5px",
                        border: "1px solid #e1e1e1",
                        borderRadius: "6px",
                        display: "grid",
                      }}
                    >
                      <ListItemButton
                        variant="text"
                        disableRipple
                        sx={{
                          cursor: "default",
                          bgcolor:
                            themeMode === true ? "grey.400" : "common.white",
                          color: themeMode === true ? "grey.100" : "grey.800",
                        }}
                      >
                        <ListItemIcon sx={{ marginRight: "8px !important" }}>
                          {/* <EngineeringIcon color="primary" /> */}
                        </ListItemIcon>
                        <ListItemText
                          sx={{ my: 0 }}
                          primary="ARTS & SCIENCE COLLEGES"
                          primaryTypographyProps={{
                            fontSize: 16,
                            fontWeight: "medium",
                            color: "primary",
                          }}
                        />
                      </ListItemButton>

                      {alldegrees.map((elem, ind) => {
                        if (elem.streamid == "1" && ind <= 25) {
                          return (
                            <Link href={`/${elem.name}`}>
                              <ListItemButton
                                // endIcon={<SchoolIcon/>}
                                key={elem.id}
                                sx={{
                                  py: 0,
                                  minHeight: 32,
                                  bgcolor:
                                    themeMode === true
                                      ? "grey.600"
                                      : "common.white",
                                  color:
                                    themeMode === true
                                      ? "grey.100"
                                      : "grey.800",
                                }}
                                onClick={toggleDrawer(false)}
                              >
                                <ListItemText
                                  primary={elem.name + " Colleges"}
                                  primaryTypographyProps={{
                                    fontSize: 14,
                                    fontWeight: "medium",
                                  }}
                                  onClick={(e) => {
                                    setClickedcoursevalue(elem.name);
                                  }}
                                />
                                <ListItemIcon sx={{ marginRight: "0px" }}>
                                  <ChevronRightIcon
                                    sx={{
                                      fontSize: "16px",
                                      color:
                                        themeMode === true
                                          ? "grey.100"
                                          : "#666",
                                    }}
                                  />
                                </ListItemIcon>
                              </ListItemButton>
                            </Link>
                          );
                        }
                      })}
                      <Divider />
                    </Box>

                    <Box
                      sx={{
                        bgcolor:
                          themeMode === true ? "grey.600" : "common.white",
                        color: themeMode === true ? "grey.100" : "grey.800",
                        margin: "5px",
                        border: "1px solid #e1e1e1",
                        borderRadius: "6px",
                        display: "grid",
                      }}
                    >
                      <ListItemButton
                        variant="text"
                        disableRipple
                        sx={{
                          cursor: "default",
                          bgcolor:
                            themeMode === true ? "grey.400" : "common.white",
                          color: themeMode === true ? "grey.100" : "grey.800",
                        }}
                      >
                        <ListItemIcon sx={{ marginRight: "8px !important" }}>
                          {/* <EngineeringIcon color="primary" /> */}
                        </ListItemIcon>
                        <ListItemText
                          sx={{ my: 0 }}
                          primary="MANAGEMENT"
                          primaryTypographyProps={{
                            fontSize: 16,
                            fontWeight: "medium",
                            color: "primary",
                          }}
                        />
                      </ListItemButton>
                      {alldegrees.map((elem, ind) => {
                        if (elem.streamid == "6" && ind <= 50) {
                          return (
                            <Link href={`/${elem.name}`}>
                              <ListItemButton
                                // endIcon={<SchoolIcon/>}
                                key={elem.id}
                                sx={{
                                  py: 0,
                                  minHeight: 32,
                                  bgcolor:
                                    themeMode === true
                                      ? "grey.600"
                                      : "common.white",
                                  color:
                                    themeMode === true
                                      ? "grey.100"
                                      : "grey.800",
                                }}
                                onClick={toggleDrawer(false)}
                              >
                                <ListItemText
                                  primary={elem.name + " Colleges"}
                                  primaryTypographyProps={{
                                    fontSize: 14,
                                    fontWeight: "medium",
                                  }}
                                  onClick={(e) => {
                                    setClickedcoursevalue(elem.name);
                                  }}
                                />
                                <ListItemIcon sx={{ marginRight: "0px" }}>
                                  <ChevronRightIcon
                                    sx={{
                                      fontSize: "16px",
                                      color:
                                        themeMode === true
                                          ? "grey.100"
                                          : "#666",
                                    }}
                                  />
                                </ListItemIcon>
                              </ListItemButton>
                            </Link>
                          );
                        }
                      })}
                      <Divider />
                    </Box>

                    <Box
                      sx={{
                        bgcolor:
                          themeMode === true ? "grey.600" : "common.white",
                        color: themeMode === true ? "grey.100" : "grey.800",
                        margin: "5px",
                        border: "1px solid #e1e1e1",
                        borderRadius: "6px",
                        display: "grid",
                      }}
                    >
                      <ListItemButton
                        variant="text"
                        disableRipple
                        sx={{
                          cursor: "default",
                          bgcolor:
                            themeMode === true ? "grey.400" : "common.white",
                          color: themeMode === true ? "grey.100" : "grey.800",
                        }}
                      >
                        <ListItemIcon sx={{ marginRight: "8px !important" }}>
                          {/* <EngineeringIcon color="primary" /> */}
                        </ListItemIcon>
                        <ListItemText
                          sx={{ my: 0 }}
                          primary="MEDICAL"
                          primaryTypographyProps={{
                            fontSize: 16,
                            fontWeight: "medium",
                            color: "primary",
                          }}
                        />
                      </ListItemButton>
                      {alldegrees.map((elem, ind) => {
                        if (elem.streamid == "4" && ind <= 50) {
                          return (
                            <Link href={`/${elem.name}`}>
                              <ListItemButton
                                // endIcon={<SchoolIcon/>}
                                key={elem.id}
                                sx={{
                                  py: 0,
                                  minHeight: 32,
                                  bgcolor:
                                    themeMode === true
                                      ? "grey.600"
                                      : "common.white",
                                  color:
                                    themeMode === true
                                      ? "grey.100"
                                      : "grey.800",
                                }}
                                onClick={toggleDrawer(false)}
                              >
                                <ListItemText
                                  primary={elem.name + " Colleges"}
                                  primaryTypographyProps={{
                                    fontSize: 14,
                                    fontWeight: "medium",
                                  }}
                                  onClick={(e) => {
                                    setClickedcoursevalue(elem.name);
                                  }}
                                />
                                <ListItemIcon sx={{ marginRight: "0px" }}>
                                  <ChevronRightIcon
                                    sx={{
                                      fontSize: "16px",
                                      color:
                                        themeMode === true
                                          ? "grey.100"
                                          : "#666",
                                    }}
                                  />
                                </ListItemIcon>
                              </ListItemButton>
                            </Link>
                          );
                        }
                      })}
                      <Divider />
                    </Box>

                    <Box
                      sx={{
                        bgcolor:
                          themeMode === true ? "grey.600" : "common.white",
                        color: themeMode === true ? "grey.100" : "grey.800",
                        margin: "5px",
                        border: "1px solid #e1e1e1",
                        borderRadius: "6px",
                        display: "grid",
                      }}
                    >
                      <ListItemButton
                        variant="text"
                        disableRipple
                        sx={{
                          cursor: "default",
                          bgcolor:
                            themeMode === true ? "grey.400" : "common.white",
                          color: themeMode === true ? "grey.100" : "grey.800",
                        }}
                      >
                        <ListItemIcon sx={{ marginRight: "8px !important" }}>
                          {/* <EngineeringIcon color="primary" /> */}
                        </ListItemIcon>
                        <ListItemText
                          sx={{ my: 0 }}
                          primary="EDUCATION"
                          primaryTypographyProps={{
                            fontSize: 16,
                            fontWeight: "medium",
                            color: "primary",
                          }}
                        />
                      </ListItemButton>
                      {alldegrees.map((elem, index) => {
                        if (elem.streamid == "2") {
                          return (
                            <Link href={`/${elem.name}`}>
                              <ListItemButton
                                // endIcon={<SchoolIcon/>}
                                key={elem.id}
                                sx={{
                                  py: 0,
                                  minHeight: 32,
                                  bgcolor:
                                    themeMode === true
                                      ? "grey.600"
                                      : "common.white",
                                  color:
                                    themeMode === true
                                      ? "grey.100"
                                      : "grey.800",
                                }}
                                onClick={toggleDrawer(false)}
                              >
                                <ListItemText
                                  primary={elem.name + " Colleges"}
                                  primaryTypographyProps={{
                                    fontSize: 14,
                                    fontWeight: "medium",
                                  }}
                                  onClick={(e) => {
                                    setClickedcoursevalue(elem.name);
                                  }}
                                />
                                <ListItemIcon sx={{ marginRight: "0px" }}>
                                  <ChevronRightIcon
                                    sx={{
                                      fontSize: "16px",
                                      color:
                                        themeMode === true
                                          ? "grey.100"
                                          : "#666",
                                    }}
                                  />
                                </ListItemIcon>
                              </ListItemButton>
                            </Link>
                          );
                        }
                      })}
                      <Divider />
                    </Box>
                  </List>
                </Collapse>
              </AccordionDetails>
            </Accordion>
          </Box>
        </Box>
      </Drawer>
    </div>
  );
};

export default Hamburgermenu;
