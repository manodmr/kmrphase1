import NearBySlider from "@/Components/Slider/NearBySlider";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { AppBar } from "@/OverViews/AppBar";
import {
  AccountBalance,
  ArrowRight,
  Bookmarks,
  Cancel,
  ChevronRight,
  CropOriginal,
  Home,
  KeyboardArrowDown,
  LocationCitySharp,
  Search,
  Verified,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  InputAdornment,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  TextField,
  Toolbar,
  Typography,
  Radio,
  RadioGroup,
  FormControl,
  Container,
  Stack,
  Tabs,
  Tab,
  FormLabel,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { CgMenuGridR } from "react-icons/cg";
import { FcNumericalSorting12 } from "react-icons/fc";
import { GiConsoleController, GiPathDistance } from "react-icons/gi";
// import { Stack } from "@/OverViews/Stack";
import { useRouter } from "next/router";
import Image from "next/image";
import { darkLightModeContext } from "@/Layout/Layout";
import Divider from "@mui/material/Divider";
import EngineeringIcon from "@mui/icons-material/Engineering";
import BusinessIcon from "@mui/icons-material/Business";
import DvrIcon from "@mui/icons-material/Dvr";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import beIcon from "/public/icons/kicons-be.png";
import btechIcon from "/public/icons/kicons-1.png";
import mbaIcon from "/public/icons/kicons-2.png";
import mbbsIcon from "/public/icons/kicons-3.png";
import meIcon from "/public/icons/kicons-me.png";
import beIconDark from "/public/icons/whiteIcon/kicons-be-dark.png";
import btechIconDark from "/public/icons/whiteIcon/kicons-1-dark.png";
import mbaIconDark from "/public/icons/whiteIcon/kicons-2-dark.png";
import mbbsIconDark from "/public/icons/whiteIcon/kicons-3-dark.png";
import meIconDark from "/public/icons/whiteIcon/kicons-me-dark.png";
import {
  usePopupState,
  bindHover,
  bindTrigger,
  bindMenu,
  bindContextMenu,
  bindPopover,
  bindDialog,
  bindPopper,
} from "material-ui-popup-state/hooks";
import HoverMenu from "material-ui-popup-state/HoverMenu";
import Link from "next/link";
import LocationCitySharpIcon from "@mui/icons-material/LocationCitySharp";
import CropOriginalIcon from "@mui/icons-material/CropOriginal";
import SchoolIcon from "@mui/icons-material/School";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import { BsBookmarkStar } from "react-icons/bs";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import BookmarksIcon from "@mui/icons-material/Bookmarks";
import { GridItem } from "@/OverViews/GridItem";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Rating from "@mui/material/Rating";
import { GridContainer } from "@/OverViews/GridContainer";
import PropTypes from "prop-types";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import CastForEducationIcon from "@mui/icons-material/CastForEducation";
import { ImLocation } from "react-icons/im";
import { RiArrowUpDownFill } from "react-icons/ri";

const TopFilter = ({
  menudata,
  stateValue,
  handleClick,
  searchData,
  degreeformenu,
  streamdatas,
  cityData,
  districtData,
  degreeData,
  streamData,
  coursesData,
  collegetypeData,
  tabvalue,
  filterstate,
  filterstatefunc,
  checkedstatevalue,
  filtercityfunc,
  checkedcityvalue,
  filterstreamfunc,
  filterdegreefunc,
  checkedstreamvalue,
  streamID,
  districtID,
  checkeddegreevalue,
  totalcheckboxcount,
  districthandlefunc,
  checkeddistrictvalue,
  // coursehandlefunc,
  checkedcoursevalue,
  // collegetypehandlefunc,
  checkedcollegetypevalue,
  cityidvalue,

  filtercityfunc2,
  filtercityparams,
  filtercityclick,
  filterdistrictfunc2,
  filterdegreefunc2,
  filtercoursefunc2,
  filtercollegetypefunc2,
  filterstreamfunc2,
  degreeID,
  streamfilterclear,
  degreefilterclear,
  degreelistdata,
  NearValue,
  setNearByState,
  splicedatas,
  ratingselectedNum,
  setRatingselectedNum,
  popularselectedid,
  setPopularselectedid,
  apifilteroptions,
  collegetypehandlefunc,
  coursehandlefunc,
  sortId,
  setSortRatingHigh,
  sortRatingHigh,
  setSortRatingLow,
  sortRatingLow,
  setSortPopular,
  sortPopular,
  setSortFeeHigh,
  sortFeeHigh,
  setSortFeeLow,
  sortFeeLow,
  setSortId,
  districtBread,
  searchDistrict,
  posts1,
}) => {
  const [cityDataValue, setCityDataValue] = useState(cityData);
  const [menubedegree, setMenubedegree] = useState([]);
  const [menubelateraldegree, setMenubelateraldegree] = useState([]);
  const [menubtechdegree, setMenubtechdegree] = useState([]);
  const [menubtechlateraldegree, setMenubtechlateraldegree] = useState([]);
  const [menumbadegree, setMenumbadegree] = useState([]);
  const [menumedegree, setMenumedegree] = useState([]);
  const [menubcomdegree, setMenubcomdegree] = useState([]);
  const [menumtechdegree, setMenumtechdegree] = useState([]);
  const [menumbbsdegree, setMenumbbsdegree] = useState([]);
  const router = useRouter();
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
  const [degreemenu, setDegreemenu] = useState([]);
  const [filteroption,setFilteroption] = useState([]);
  const [activeState, setActiveState] = useState(false);
  const [activeId, setActiveId] = useState();
  const [activeAll, setActiveAll] = useState(false);
  let [streamsearchfilter, setStreamsearchfilter] = useState("");
  let [citysearchfilter, setCitysearchfilter] = useState("");
  let [districtsearchfilter, setDistrictsearchfilter] = useState("");
  let [degreesearchfilter, setDegreesearchfilter] = useState("");
  let [coursesearchfilter, setCoursesearchfilter] = useState("");
  let [collegetypesearchfilter, setCollegetypesearchfilter] = useState("");
  const fetchdata = async () => {
    const fetchd = await fetch("https://w.kalvimalar.com/menu");
    const response = await fetchd.json();
    setAllDegrees(response.data);
    const fetchdegreeformenu = await fetch(
      `${process.env.NEXT_PUBLIC_DEGREES}`
    );
    const responsemenu = await fetchdegreeformenu.json();
    setDegreemenu(responsemenu);
    // console.log(alldegrees);
    setMenube(response.data[0].course);
    setMenubedegree(response.data[0]);
    // console.log(response.data[0]);
    setMenubelateral(response.data[7].course);
    setMenubelateraldegree(response.data[7]);
    setMenubtech(response.data[1].course);
    setMenubtechdegree(response.data[1]);
    setMenubtechlateral(response.data[6].course);
    setMenubtechlateraldegree(response.data[6]);
    setMenumba(response.data[5].course);
    setMenumbadegree(response.data[5]);
    setMenume(response.data[29].course);
    setMenumedegree(response.data[29]);
    setMenubcom(response.data[70].course);
    setMenubcomdegree(response.data[70]);
    setMenumtech(response.data[2].course);
    setMenumtechdegree(response.data[2]);
    setMenumbbs(response.data[35].course);
    setMenumbbsdegree(response.data[35]);
  };

  useEffect(() => {
    fetchdata();
    // console.log(degreemenu);
  }, [router]);

  useEffect(() => {
    setFilteroption(apifilteroptions);
  }, [apifilteroptions, router.query.collegelist]);

  // const [popupState,setPopupState] = useState("");

  // console.log(splicedatas);



  const streamfilterhandle = (event) => {
    let getuserinput = event.target.value;
    setStreamsearchfilter(getuserinput);
  };
  const cityfilterhandle = (event) => {
    let getuserinput = event.target.value;
    setCitysearchfilter(getuserinput);
  };
  const districtfilterhandle = (event) => {
    let getuserinput = event.target.value;
    setDistrictsearchfilter(getuserinput);
  };
  const degreefilterhandle = (event) => {
    let getuserinput = event.target.value;
    setDegreesearchfilter(getuserinput);
  };
  const coursefilterhandle = (event) => {
    let getuserinput = event.target.value;
    setCoursesearchfilter(getuserinput);
  };
  const collegetypehandle = (event) => {
    let getuserinput = event.target.value;
    setCollegetypesearchfilter(getuserinput);
  };
  // console.log(menumedegree);
  const popupState0 = usePopupState({
    variant: "popover",
    popupId: "pop1",
  });

  const popupState1 = usePopupState({
    variant: "popover",
    popupId: "demoMenu",
  });

  const popupState2 = usePopupState({
    variant: "popover",
    popupId: "demoMenu",
  });

  const popupState3 = usePopupState({
    variant: "popover",
    popupId: "demoMenu",
  });
  const popupState4 = usePopupState({
    variant: "popover",
    popupId: "demoMenu",
  });
  const popupState5 = usePopupState({
    variant: "popover",
    popupId: "demoMenu",
  });
  const popupState6 = usePopupState({
    variant: "popover",
    popupId: "demoMenu",
  });
  const popupState7 = usePopupState({
    variant: "popover",
    popupId: "demoMenu",
  });
  const popupState8 = usePopupState({
    variant: "popover",
    popupId: "pop1",
  });
  const popupState9 = usePopupState({
    variant: "popover",
    popupId: "demoMenu",
  });
  const popupState10 = usePopupState({
    variant: "popover",
    popupId: "demoMenu",
  });
  const popupState11 = usePopupState({
    variant: "popover",
    popupId: "demoMenu",
  });
  const popupState12 = usePopupState({
    variant: "popover",
    popupId: "demoMenu",
  });
  const popupState13 = usePopupState({
    variant: "popover",
    popupId: "demoMenu",
  });
  const popupState14 = usePopupState({
    variant: "popover",
    popupId: "demoMenu",
  });
  const popupState15 = usePopupState({
    variant: "popover",
    popupId: "demoMenu",
  });

  const [state, setState] = useState({
    left: false,
    top:false,
  });


  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const filterhandleclick = () => {};
  const themeMode = useContext(darkLightModeContext);
  // For Menu purpose...
  const menuarray = ["BE", "B.Tech", "B.Com", "MBBS", "MBA", "All Courses"];
  const menuName = [];
  // console.log(menuName);

  // console.log(router);
  const [clickedcoursevalue, setClickedcoursevalue] = useState(
    router.query.course
  );

  //   ----------------Side Drawer
  const SideNavMenu = (anchor) => (
    <>
      <GridContainer
        width={activeState === true || activeAll === true ? "93vw" : "100%"}
        height={"100%"}
        sx={{ background: "transparent" }}
      >
        <Grid
          item
          lg={2}
          sx={{
            width: "100%",
            height: "100%",
            boxShadow: "Outset -19px -15px 25px -10px rgba(0,0,0,0.2)",
            background: "transparent ",
          }}
        >
          <Stack
            width={{ md: 190 , lg: 200 }}
            height={"100%"}
            sx={{
              bgcolor: themeMode === true ? "grey.800" : "common.white",
              color: themeMode === true ? "common.white" : "grey.700",
              overflow: "hidden",
            }}
          >
            <Box
              sx={{
                width: 200,
                bgcolor: themeMode === true ? "grey.800" : "common.white",
                color: themeMode === true ? "common.white" : "grey.700",
              }}
              role="presentation"
              onClose={toggleDrawer(anchor, false)}
              display="grid"
            >
              <List>
                <ListItemButton
                  sx={{
                    fontSize: { sm: "13px", md: "13px", lg: "14px" },
                    marginRight: { sm: "15px", md: "0", lg: "0" },
                    marginLeft: { sm: "15px", md: "0", lg: "0" },
                    color: "inherit",
                    width: 200,
                    justifyContent: "space-between",
                    // bgcolor:
                    //   router.query.collegelist === ele
                    //     ? themeMode === true
                    //       ? "primary.dark"
                    //       : "primary.light"
                    //     : null,
                  }}
                  onClick={() => {
                    router.push(`/`, undefined, { shallow: true });
                  }}
                  onClickCapture={toggleDrawer(anchor, false)}
                >
                  <Box display="flex" alignItems="center">
                    <ListItemIcon sx={{ marginRight: "6px" }}>
                      <Home
                        sx={{
                          fontSize: "20px",
                          color:
                            themeMode === true ? "grey.600" : "primary.main",
                        }}
                      />
                    </ListItemIcon>
                    <Box>Home</Box>
                  </Box>
                </ListItemButton>
                {degreemenu.map((item, index) => {
                  menuarray.map((e, i) => {
                    if (item.name == e) {
                      menuName.push(item.name);
                    }
                  });
                })}
                {menuName.map((ele, ind) => {
                  // console.log(ele);
                  return (
                    <>
                      {/* <Link  href={`/${ele}`} style={{ "&:hover": { color: "red" } ,  }}> */}
                      <ListItemButton
                        sx={{
                          fontSize: { sm: "13px", md: "13px", lg: "14px" },
                          marginRight: { sm: "15px", md: "0", lg: "0" },
                          marginLeft: { sm: "15px", md: "0", lg: "0" },
                          color: "inherit",
                          borderRadius: "none",
                          boxShadow:
                            router.query.collegelist === ele
                              ? themeMode === true
                                ? "1px 1px 2px  #666 "
                                : "1px 1px 2px  #ccc"
                              : null,
                          bgcolor:
                            router.query.collegelist === ele
                              ? themeMode === true
                                ? "primary.dark"
                                : "primary.light"
                              : null,
                          // borderRight: router.query.collegelist === ele  ?"5px solid goldenrod" : null,
                          width: 200,
                          justifyContent: "space-between",
                        }}
                        value={stateValue}
                        onClick={toggleDrawer(anchor, false)}
                        onClickCapture={() => {
                          router.push(`/${ele}`);
                        }}
                        onMouseEnter={() => {
                          setActiveState(true);
                          setActiveId(ind);
                        }}
                        onMouseLeave={() => {
                          setActiveState(false);
                        }}
                      >
                        <Box>
                          <ListItemIcon
                            sx={{ marginRight: "8px" }}
                            onClick={toggleDrawer(anchor, false)}
                          >
                            {ind == 0 ? (
                              <Image
                                className="smallicon"
                                src={themeMode === true ? beIconDark : beIcon}
                                alt={ele}
                                width={"16"}
                                height={"16"}
                              />
                            ) : ind == 1 ? (
                              <Image
                                className="smallicon"
                                src={
                                  themeMode === true ? btechIconDark : btechIcon
                                }
                                alt={ele}
                                width={"16"}
                                height={"16"}
                              />
                            ) : ind == 2 ? (
                              <Image
                                className="smallicon"
                                src={
                                  themeMode === true ? mbbsIconDark : mbbsIcon
                                }
                                alt={ele}
                                width={"16"}
                                height={"16"}
                              />
                            ) : ind == 3 ? (
                              <Image
                                className="smallicon"
                                src={themeMode === true ? meIconDark : meIcon}
                                alt={ele}
                                width={"16"}
                                height={"16"}
                              />
                            ) : ind == 4 ? (
                              <Image
                                className="smallicon"
                                src={themeMode === true ? mbaIconDark : mbaIcon}
                                alt={ele}
                                width={"16"}
                                height={"16"}
                              />
                            ) : null}
                          </ListItemIcon>
                          {ele}
                        </Box>
                        <ListItemIcon sx={{ marginRight: "0px" }}>
                          <ChevronRight
                            sx={{
                              fontSize: "16px",
                              color: themeMode === true ? "grey.100" : "#666",
                            }}
                          />
                        </ListItemIcon>
                      </ListItemButton>
                      {/* </Link> */}
                    </>
                  );
                })}
                <ListItemButton
                  sx={{
                    fontSize: { sm: "13px", md: "13px", lg: "14px" },
                    marginRight: { sm: "15px", md: "0", lg: "0" },
                    marginLeft: { sm: "15px", md: "0", lg: "0" },
                    color: "inherit",
                    width: 200,
                    justifyContent: "space-between",
                    // borderBottom : router.query.collegelist != degreemenu.map((e)=>  e.name) ? '2px solid orange' : router.query.collegelist == "tamilnadu-colleges" ? null : null
                  }}
                  onClick={toggleDrawer(anchor, false)}
                  value={stateValue}
                  onMouseEnter={() => {
                    setActiveAll(true);
                    setActiveId(5);
                  }}
                  onMouseLeave={() => {
                    setActiveAll(false);
                  }}
                >
                  <Box>
                    <ListItemIcon sx={{ marginRight: "8px" }}>
                      <Image
                        className="smallicon"
                        src={themeMode === true ? beIconDark : beIcon}
                        // alt={ele}
                        width={"16"}
                        height={"16"}
                      />
                    </ListItemIcon>
                    All Courses
                  </Box>
                  <ListItemIcon sx={{ marginRight: "0px" }}>
                    <ChevronRight
                      sx={{
                        fontSize: "16px",
                        color: themeMode === true ? "grey.100" : "#666",
                      }}
                    />
                  </ListItemIcon>
                </ListItemButton>
              </List>
            </Box>
          </Stack>
        </Grid>
        <Grid
          item
          lg={10}
          width={"100%"}
          height="100%"
          sx={{ background: "transparent" }}
        >
          <Stack
            width={"100%"}
            height={"100%"}
            overflowX={"hidden"}
            justifyContent={"left"}
            alignItems={"center"}
            // mt={3}
            sx={{
              display:
                activeState === true || activeAll === true ? "flex" : "none",
              // position:'relative',
              background: "none",
            }}
            onMouseEnter={() => setActiveState(true)}
          >
            {activeId === 0 ? (
              <GridContainer item lg={12} sx={{ pt:1 }} >
                <Grid
                  md={4}
                  sx={{
                    borderRight: "#eee solid 1px",
                    color: themeMode === true ? "common.white" : "#000",
                  }}
                >
                  <Box sx={{ display: "grid" }}>
                    <Link href={`/BE`} onClick={toggleDrawer(anchor, false)}>
                      <ListItemButton
                        sx={{ height: "41" }}
                        onClick={toggleDrawer(anchor, false)}
                      >
                        <ListItemIcon sx={{ marginRight: "8px" }}>
                          <MenuBookIcon color="primary" />
                        </ListItemIcon>
                        <ListItemText
                          primary="BE Popular Streams"
                          primaryTypographyProps={{
                            color: "primary.main",
                            fontWeight: "medium",
                            variant: "body2",
                            fontSize: 16,
                            textTransform: "uppercase",
                          }}
                        />
                      </ListItemButton>
                    </Link>

                    <Divider />

                    <Box
                      display={"grid "}
                      //   sx={{ overflowY: "auto", height: "350px" }}
                    >
                      {menube.slice(0, 15).map((elem, ind) => {
                        // console.log(elem);
                        return (
                          <Link
                            href={`/${
                              menubedegree.name
                            }?course=${elem.course_name.replace(/[ ]+/g, "-")}`}
                            onClick={toggleDrawer(anchor, false)}
                          >
                            <ListItemButton
                              // endIcon={<SchoolIcon/>}
                              sx={{
                                py: 0,
                                minHeight: 32,
                                color:
                                  themeMode === true ? "common.white" : "#666",
                              }}
                              onClick={popupState0.close}
                            >
                              <ListItemText
                                primary={elem.course_name}
                                primaryTypographyProps={{
                                  fontSize: 14,
                                  fontWeight: "medium",
                                }}
                                onClick={(e) => {
                                  setClickedcoursevalue(elem.course_name);
                                  toggleDrawer(anchor, false);
                                }}
                              />
                              {elem.id}
                            </ListItemButton>
                          </Link>
                        );
                      })}
                      {/* {menube.length >= 15 ? <Button  >See More</Button> : null} */}
                    </Box>
                  </Box>
                </Grid>
                <Grid
                  xs={2}
                  sm={4}
                  md={3}
                  sx={{ borderRight: "#eee solid 1px" }}
                >
                  <Box sx={{ padding: "0 5px", display: "grid" }}>
                    <ListItem component="div" disablePadding>
                      <Link
                        href={`/BE(Lateral)`}
                        onClick={toggleDrawer(anchor, false)}
                      >
                        <ListItemButton sx={{ height: "41" }}>
                          <ListItemIcon sx={{ marginRight: "8px" }}>
                            <MenuBookIcon color="primary" />
                          </ListItemIcon>
                          <ListItemText
                            primary="BE-Lateral"
                            primaryTypographyProps={{
                              color: "primary",
                              fontWeight: "medium",
                              variant: "body2",
                              fontSize: 16,
                              textTransform: "uppercase",
                            }}
                          />
                        </ListItemButton>
                      </Link>
                    </ListItem>
                    <Divider />
                    <Box
                      display={"grid"}
                      //   sx={{ overflowY: "auto", height: "350px" }}
                    >
                      {menubelateral.map((elem, ind) => {
                        return (
                          <Link
                            href={`/${
                              menubelateraldegree.name
                            }?course=${elem.course_name.replace(/[ ]+/g, "-")}`}
                            onClick={toggleDrawer(anchor, false)}
                          >
                            <ListItemButton
                              // endIcon={<SchoolIcon/>}
                              key={elem.id}
                              sx={{
                                py: 0,
                                minHeight: 32,
                                color:
                                  themeMode === true
                                    ? "common.white"
                                    : "grey.600",
                              }}
                              onClick={popupState0.close}
                            >
                              <ListItemText
                                primary={elem.course_name}
                                primaryTypographyProps={{
                                  fontSize: 14,
                                  fontWeight: "medium",
                                }}
                                onClick={() =>
                                  setClickedcoursevalue(elem.course_name)
                                }
                              />
                            </ListItemButton>
                          </Link>
                        );
                      })}
                    </Box>
                  </Box>
                </Grid>
                <Grid xs={2} sm={4} md={5}>
                  <ListItemButton>
                    <ListItemIcon sx={{ marginRight: "8px !important" }}>
                      🔥
                    </ListItemIcon>
                    <ListItemText
                      sx={{
                        my: 0,
                        color: themeMode === true ? "common.white" : "#666",
                      }}
                      primary="TOP BE COLLEGES IN TAMIL NADU 2023"
                      primaryTypographyProps={{
                        fontSize: 16,
                        fontWeight: "medium",
                        letterSpacing: 0,
                      }}
                    />
                  </ListItemButton>

                  <Divider />
                  <Box>
                    {[
                      "Top BE Colleges in Chennai",
                      "Top BE Colleges in Madurai",
                    ].map((text, index) => {
                      return (
                        <>
                          <Link
                            href={`/${"BE"}?districtId=${
                              index == 0 ? "1" : "9"
                            }`}
                          >
                            <ListItemButton
                              sx={{
                                py: 0,
                                minHeight: 32,
                                color:
                                  themeMode === true ? "common.white" : "#666",
                              }}
                              onClick={popupState0.close}
                            >
                              <ListItemText
                                // primary={index === 0 ? text+"Chennai" : text+"Madurai"}
                                primary={text}
                                primaryTypographyProps={{
                                  fontSize: 14,
                                  fontWeight: "medium",
                                }}
                              />
                            </ListItemButton>
                          </Link>
                        </>
                      );
                    })}
                  </Box>
                </Grid>
              </GridContainer>
            ) : activeId === 1 ? (
              <GridContainer item lg={12} sx={{ pt:1 }} >
                <Grid
                  md={4}
                  sx={{
                    borderRight: "#eee solid 1px",
                    color: themeMode === true ? "common.white" : "#000",
                  }}
                >
                  <Box sx={{ display: "grid" }}>
                    <Link
                      href={`/B.Tech`}
                      onClick={toggleDrawer(anchor, false)}
                    >
                      <ListItemButton
                        sx={{ height: "41" }}
                        onClick={toggleDrawer(anchor, false)}
                      >
                        <ListItemIcon sx={{ marginRight: "8px" }}>
                          <MenuBookIcon color="primary" />
                        </ListItemIcon>
                        <ListItemText
                          primary="BTech Popular Streams"
                          primaryTypographyProps={{
                            color: "primary.main",
                            fontWeight: "medium",
                            variant: "body2",
                            fontSize: 16,
                            textTransform: "uppercase",
                          }}
                        />
                      </ListItemButton>
                    </Link>

                    <Divider />

                    <Box
                      display={"grid "}
                      //   sx={{ overflowY: "auto", height: "350px" }}
                    >
                      {menubtech.slice(0, 15).map((elem, ind) => {
                        // console.log(elem);
                        return (
                          <Link
                            href={`/${
                              menubtechdegree.name
                            }?course=${elem.course_name.replace(/[ ]+/g, "-")}`}
                            onClick={toggleDrawer(anchor, false)}
                          >
                            <ListItemButton
                              // endIcon={<SchoolIcon/>}
                              sx={{
                                py: 0,
                                minHeight: 32,
                                color:
                                  themeMode === true ? "common.white" : "#666",
                              }}
                              onClick={popupState0.close}
                            >
                              <ListItemText
                                primary={elem.course_name}
                                primaryTypographyProps={{
                                  fontSize: 14,
                                  fontWeight: "medium",
                                }}
                                onClick={(e) => {
                                  setClickedcoursevalue(elem.course_name);
                                  toggleDrawer(anchor, false);
                                }}
                              />
                              {elem.id}
                            </ListItemButton>
                          </Link>
                        );
                      })}
                      {/* {menube.length >= 15 ? <Button  >See More</Button> : null} */}
                    </Box>
                  </Box>
                </Grid>
                <Grid
                  xs={2}
                  sm={4}
                  md={3}
                  sx={{ borderRight: "#eee solid 1px" }}
                >
                  <Box sx={{ padding: "0 5px", display: "grid" }}>
                    <ListItem component="div" disablePadding>
                      <Link
                        href={`/B.Tech(Lateral)`}
                        onClick={toggleDrawer(anchor, false)}
                      >
                        <ListItemButton sx={{ height: "41" }}>
                          <ListItemIcon sx={{ marginRight: "8px" }}>
                            <MenuBookIcon color="primary" />
                          </ListItemIcon>
                          <ListItemText
                            primary="BTECH-Lateral"
                            primaryTypographyProps={{
                              color: "primary",
                              fontWeight: "medium",
                              variant: "body2",
                              fontSize: 16,
                              textTransform: "uppercase",
                            }}
                          />
                        </ListItemButton>
                      </Link>
                    </ListItem>
                    <Divider />
                    <Box
                      display={"grid"}
                      //   sx={{ overflowY: "auto", height: "350px" }}
                    >
                      {menubtechlateral.map((elem, ind) => {
                        return (
                          <Link
                            href={`/${
                              menubtechlateraldegree.name
                            }?course=${elem.course_name.replace(/[ ]+/g, "-")}`}
                            onClick={toggleDrawer(anchor, false)}
                          >
                            <ListItemButton
                              // endIcon={<SchoolIcon/>}
                              key={elem.id}
                              sx={{
                                py: 0,
                                minHeight: 32,
                                color:
                                  themeMode === true
                                    ? "common.white"
                                    : "grey.600",
                              }}
                              onClick={popupState0.close}
                            >
                              <ListItemText
                                primary={elem.course_name}
                                primaryTypographyProps={{
                                  fontSize: 14,
                                  fontWeight: "medium",
                                }}
                                onClick={() =>
                                  setClickedcoursevalue(elem.course_name)
                                }
                              />
                            </ListItemButton>
                          </Link>
                        );
                      })}
                    </Box>
                  </Box>
                </Grid>
                <Grid xs={2} sm={4} md={5}>
                  <ListItemButton>
                    <ListItemIcon sx={{ marginRight: "8px !important" }}>
                      🔥
                    </ListItemIcon>
                    <ListItemText
                      sx={{
                        my: 0,
                        color: themeMode === true ? "common.white" : "#666",
                      }}
                      primary="TOP BTECH COLLEGES IN TAMILNADU 2023"
                      primaryTypographyProps={{
                        fontSize: 16,
                        fontWeight: "medium",
                        letterSpacing: 0,
                      }}
                    />
                  </ListItemButton>

                  <Divider />
                  <Box display="grid">
                    {[
                      "Top BTECH Colleges in Chennai",
                      "Top BTECH Colleges in Madurai",
                    ].map((text, index) => {
                      return (
                        <>
                          <Link
                            href={`/${"B.Tech"}?districtId=${
                              index == 0 ? "1" : "9"
                            }`}
                          >
                            <ListItemButton
                              sx={{
                                py: 0,
                                minHeight: 32,
                                color:
                                  themeMode === true ? "common.white" : "#666",
                              }}
                              onClick={popupState0.close}
                            >
                              <ListItemText
                                // primary={index === 0 ? text+"Chennai" : text+"Madurai"}
                                primary={text}
                                primaryTypographyProps={{
                                  fontSize: 14,
                                  fontWeight: "medium",
                                }}
                              />
                            </ListItemButton>
                          </Link>
                        </>
                      );
                    })}
                  </Box>
                </Grid>
              </GridContainer>
            ) : activeId === 2 ? (
              <GridContainer item lg={12} sx={{ pt:1 }} >
                <Grid
                  md={6}
                  lg={6}
                  sx={{
                    borderRight: "#eee solid 1px",
                    color: themeMode === true ? "common.white" : "#000",
                  }}
                >
                  <Box sx={{ display: "grid" }}>
                    <Link href={`/MBBS`} onClick={toggleDrawer(anchor, false)}>
                      <ListItemButton
                        sx={{ height: "41" }}
                        onClick={toggleDrawer(anchor, false)}
                      >
                        <ListItemIcon sx={{ marginRight: "8px" }}>
                          <MenuBookIcon color="primary" />
                        </ListItemIcon>
                        <ListItemText
                          primary="MBBS Popular Streams"
                          primaryTypographyProps={{
                            color: "primary.main",
                            fontWeight: "medium",
                            variant: "body2",
                            fontSize: 16,
                            textTransform: "uppercase",
                          }}
                        />
                      </ListItemButton>
                    </Link>

                    <Divider />

                    <Box
                      display={"grid "}
                      //   sx={{ overflowY: "auto", height: "350px" }}
                    >
                      {menumbbs.slice(0, 15).map((elem, ind) => {
                        // console.log(elem);
                        return (
                          <Link
                            href={`/${
                              menumbbsdegree.name
                            }?course=${elem.course_name.replace(/[ ]+/g, "-")}`}
                            onClick={toggleDrawer(anchor, false)}
                          >
                            <ListItemButton
                              // endIcon={<SchoolIcon/>}
                              sx={{
                                py: 0,
                                minHeight: 32,
                                color:
                                  themeMode === true ? "common.white" : "#666",
                              }}
                              onClick={popupState0.close}
                            >
                              <ListItemText
                                primary={elem.course_name}
                                primaryTypographyProps={{
                                  fontSize: 14,
                                  fontWeight: "medium",
                                }}
                                onClick={(e) => {
                                  setClickedcoursevalue(elem.course_name);
                                  toggleDrawer(anchor, false);
                                }}
                              />
                              {elem.id}
                            </ListItemButton>
                          </Link>
                        );
                      })}
                      {/* {menube.length >= 15 ? <Button  >See More</Button> : null} */}
                    </Box>
                  </Box>
                </Grid>
                {/* <Grid
          xs={2}
          sm={4}
          md={3}
          sx={{ borderRight: "#eee solid 1px" }}
        >
          <Box sx={{ padding: "0 5px", display: "grid" }}>
            <ListItem component="div" disablePadding>
              <Link
                href={`/B.Tech(Lateral)`}
                onClick={toggleDrawer(anchor, false)}
              >
                <ListItemButton sx={{ height: "41" }}>
                  <ListItemIcon sx={{ marginRight: "8px" }}>
                    <MenuBookIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="BTECH-Lateral"
                    primaryTypographyProps={{
                      color: "primary",
                      fontWeight: "medium",
                      variant: "body2",
                      fontSize: 16,
                      textTransform: "uppercase",
                    }}
                  />
                </ListItemButton>
              </Link>
            </ListItem>
            <Divider />
            <Box
              display={"grid"}
              //   sx={{ overflowY: "auto", height: "350px" }}
            >
              {menubtechlateral.map((elem, ind) => {
                return (
                  <Link
                    href={`/${
                      menubtechlateraldegree.name
                    }?course=${elem.course_name.replace(
                      /[ ]+/g,
                      "-"
                    )}`}
                    onClick={toggleDrawer(anchor, false)}
                  >
                    <ListItemButton
                      // endIcon={<SchoolIcon/>}
                      key={elem.id}
                      sx={{
                        py: 0,
                        minHeight: 32,
                        color:
                          themeMode === true
                            ? "common.white"
                            : "grey.600",
                      }}
                      onClick={popupState0.close}
                    >
                      <ListItemText
                        primary={elem.course_name}
                        primaryTypographyProps={{
                          fontSize: 14,
                          fontWeight: "medium",
                        }}
                        onClick={() =>
                          setClickedcoursevalue(elem.course_name)
                        }
                      />
                    </ListItemButton>
                  </Link>
                );
              })}
            </Box>
          </Box>
        </Grid> */}
                <Grid md={6} lg={6}>
                  <ListItemButton>
                    <ListItemText
                      sx={{
                        my: 0,
                        color: themeMode === true ? "common.white" : "#666",
                      }}
                      primary="TOP MBBS COLLEGES IN TAMILNADU 2023"
                      primaryTypographyProps={{
                        fontSize: 16,
                        fontWeight: "medium",
                        letterSpacing: 0,
                      }}
                    />
                  </ListItemButton>

                  <Divider />
                  <Box display="grid">
                    {[
                      "Top MBBS Colleges in Chennai",
                      "Top MBBS Colleges in Madurai",
                    ].map((text, index) => {
                      return (
                        <>
                          <Link
                            href={`/${"MBBS"}?districtId=${
                              index == 0 ? "1" : "9"
                            }`}
                          >
                            <ListItemButton
                              sx={{
                                py: 0,
                                minHeight: 32,
                                color:
                                  themeMode === true ? "common.white" : "#666",
                              }}
                              onClick={popupState0.close}
                            >
                              <ListItemText
                                // primary={index === 0 ? text+"Chennai" : text+"Madurai"}
                                primary={text}
                                primaryTypographyProps={{
                                  fontSize: 14,
                                  fontWeight: "medium",
                                }}
                              />
                            </ListItemButton>
                          </Link>
                        </>
                      );
                    })}
                  </Box>
                </Grid>
              </GridContainer>
            ) : activeId === 3 ? (
              <GridContainer item lg={12} sx={{ pt:1 }}  >
                <Grid
                  xs={2}
                  sm={4}
                  md={6}
                  sx={{ borderRight: "#eee solid 1px" }}
                >
                  <Box sx={{ padding: "0 5px", display: "grid" }}>
                    <ListItem component="div" disablePadding>
                      <Link href="/MBA" onClick={toggleDrawer(anchor, false)}>
                        <ListItemButton sx={{ height: 41 }}>
                          <ListItemIcon sx={{ marginRight: "8px" }}>
                            <MenuBookIcon color="primary" />
                          </ListItemIcon>
                          <ListItemText
                            primary="MBA Popular Streams"
                            primaryTypographyProps={{
                              color: "primary",
                              fontWeight: "medium",
                              variant: "body2",
                              fontSize: 16,
                              textTransform: "uppercase",
                            }}
                          />
                        </ListItemButton>
                      </Link>
                    </ListItem>
                    <Divider />
                    {menumba.map((elem, ind) => {
                      return (
                        <Link
                          href={`/${
                            menumbadegree.name
                          }?course=${elem.course_name.replace(/[ ]+/g, "-")}`}
                          onClick={toggleDrawer(anchor, false)}
                        >
                          <ListItemButton
                            // endIcon={<SchoolIcon/>}
                            key={elem.id}
                            sx={{
                              py: 0,
                              minHeight: 32,
                              color:
                                themeMode === true ? "common.white" : "#666",
                            }}
                            onClick={popupState4.close}
                          >
                            <ListItemText
                              primary={elem.course_name}
                              primaryTypographyProps={{
                                fontSize: 14,
                                fontWeight: "medium",
                              }}
                              onClick={(e) => {
                                setClickedcoursevalue(elem.course_name);
                              }}
                            />
                          </ListItemButton>
                        </Link>
                      );
                    })}
                  </Box>
                </Grid>

                <Grid xs={2} sm={4} md={6}>
                  <ListItemButton>
                    <ListItemIcon sx={{ marginRight: "8px !important" }}>
                      🔥
                    </ListItemIcon>
                    <ListItemText
                      sx={{
                        my: 0,
                        color: themeMode === true ? "common.white" : "#666",
                      }}
                      primary="TOP MBA COLLEGES IN TAMIL NADU 2023"
                      primaryTypographyProps={{
                        fontSize: 16,
                        fontWeight: "medium",
                        letterSpacing: 0,
                      }}
                    />
                  </ListItemButton>

                  <Divider />
                  <Box display="grid">
                    {[
                      "Top MBA Colleges in Chennai",
                      "Top MBA Colleges in Madurai",
                    ].map((text, index) => {
                      return (
                        <>
                          <Link
                            href={`/${"MBA"}?districtId=${
                              index == 0 ? "1" : "9"
                            }`}
                          >
                            <ListItemButton
                              sx={{
                                py: 0,
                                minHeight: 32,
                                color:
                                  themeMode === true ? "common.white" : "#666",
                              }}
                              onClick={popupState4.close}
                            >
                              <ListItemText
                                // primary={index === 0 ? text+"Chennai" : text+"Madurai"}
                                primary={text}
                                primaryTypographyProps={{
                                  fontSize: 14,
                                  fontWeight: "medium",
                                }}
                              />
                            </ListItemButton>
                          </Link>
                        </>
                      );
                    })}
                  </Box>
                </Grid>
              </GridContainer>
            ) : activeId === 4 ? (
              <GridContainer item lg={12} sx={{ pt:1 }}  >
                <Grid md={4}>
                  <Box sx={{ padding: "0 5px", display: "grid" }}>
                    <ListItem component="div" disablePadding>
                      <Link href="/ME" onClick={toggleDrawer(anchor, false)}>
                        <ListItemButton sx={{ height: 41 }}>
                          <ListItemIcon sx={{ marginRight: "8px" }}>
                            <MenuBookIcon color="primary" />
                          </ListItemIcon>
                          <ListItemText
                            primary="B.Com Popular Streams"
                            primaryTypographyProps={{
                              color: "primary",
                              fontWeight: "medium",
                              variant: "body2",
                              fontSize: 16,
                              textTransform: "uppercase",
                            }}
                          />
                        </ListItemButton>
                      </Link>
                    </ListItem>
                    <Divider />
                    {menume.map((elem, ind) => {
                      return (
                        <Link
                          href={`/${
                            menumedegree.name
                          }?course=${elem.course_name.replace(/[ ]+/g, "-")}`}
                          onClick={toggleDrawer(anchor, false)}
                        >
                          <ListItemButton
                            // endIcon={<SchoolIcon/>}
                            key={elem.id}
                            sx={{
                              py: 0,
                              minHeight: 32,
                              color:
                                themeMode === true ? "common.white" : "#666",
                            }}
                            onClick={popupState2.close}
                          >
                            <ListItemText
                              primary={elem.course_name}
                              primaryTypographyProps={{
                                fontSize: 14,
                                fontWeight: "medium",
                              }}
                              onClick={(e) => {
                                setClickedcoursevalue(elem.course_name);
                              }}
                            />
                          </ListItemButton>
                        </Link>
                      );
                    })}
                  </Box>
                </Grid>
                <Grid md={3}>
                  <Box sx={{ display: "grid" }}>
                    <ListItem component="div" disablePadding>
                      <Link
                        href="/B.com(Hons)"
                        onClick={toggleDrawer(anchor, false)}
                      >
                        <ListItemButton sx={{ height: 41 }}>
                          <ListItemIcon sx={{ marginRight: "8px" }}>
                            <MenuBookIcon color="primary" />
                          </ListItemIcon>
                          <ListItemText
                            primary="B.Com Hons"
                            primaryTypographyProps={{
                              color: "primary",
                              fontWeight: "medium",
                              variant: "body2",
                              fontSize: 16,
                              textTransform: "capitalize",
                            }}
                          />
                        </ListItemButton>
                      </Link>
                    </ListItem>
                    <Divider />
                    {menubcom.map((elem, ind) => {
                      return (
                        <Link
                          href={`/${
                            menubcomdegree.name
                          }?course=${elem.course_name.replace(/[ ]+/g, "-")}`}
                          onClick={toggleDrawer(anchor, false)}
                        >
                          <ListItemButton
                            // endIcon={<SchoolIcon/>}
                            key={elem.id}
                            sx={{
                              py: 0,
                              minHeight: 32,
                              color:
                                themeMode === true ? "common.white" : "#666",
                            }}
                            onClick={popupState2.close}
                          >
                            <ListItemText
                              primary={elem.course_name}
                              primaryTypographyProps={{
                                fontSize: 14,
                                fontWeight: "medium",
                              }}
                              onClick={(e) => {
                                setClickedcoursevalue(elem.course_name);
                              }}
                            />
                          </ListItemButton>
                        </Link>
                      );
                    })}
                  </Box>
                </Grid>
                <Grid md={5}>
                  <ListItemButton>
                    <ListItemText
                      sx={{
                        my: 0,
                        color: themeMode === true ? "common.white" : "#666",
                      }}
                      primary="TOP BCOM COLLEGES IN TAMIL NADU 2023"
                      primaryTypographyProps={{
                        fontSize: 16,
                        fontWeight: "medium",
                        letterSpacing: 0,
                      }}
                    />
                  </ListItemButton>

                  <Divider />
                  <Box>
                    {[
                      "Top BCOM Colleges in Chennai",
                      "Top BCOM Colleges in Madurai",
                    ].map((text, index) => {
                      return (
                        <>
                          <Link
                            href={`/${"B.Com"}?districtId=${
                              index == 0 ? "1" : "9"
                            }`}
                          >
                            <ListItemButton
                              sx={{
                                py: 0,
                                minHeight: 32,
                                color:
                                  themeMode === true ? "common.white" : "#666",
                              }}
                              onClick={popupState2.close}
                            >
                              <ListItemText
                                // primary={index === 0 ? text+"Chennai" : text+"Madurai"}
                                primary={text}
                                primaryTypographyProps={{
                                  fontSize: 14,
                                  fontWeight: "medium",
                                }}
                              />
                            </ListItemButton>
                          </Link>
                        </>
                      );
                    })}
                  </Box>
                </Grid>
              </GridContainer>
            ) : activeId === 5 ? (
              <GridContainer item lg={12} sx={{ pt:1 }}   >
                <Grid item md={4}>
                  <ListItemButton
                    variant="text"
                    disableRipple
                    sx={{ cursor: "default" }}
                  >
                    <ListItemIcon sx={{ marginRight: "8px !important" }}>
                      <EngineeringIcon color="primary" />
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

                  <Divider />
                  <Box display="grid">
                    {alldegrees.map((elem, ind) => {
                      if (elem.streamid == "3" && ind <= 7) {
                        return (
                          <Link
                            href={`/${elem.name}`}
                            onClick={toggleDrawer(anchor, false)}
                          >
                            <ListItemButton
                              // endIcon={<SchoolIcon/>}
                              key={elem.id}
                              sx={{
                                py: 0,
                                minHeight: 32,
                                color:
                                  themeMode === true ? "common.white" : "#666",
                              }}
                              onClick={popupState5.close}
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
                            </ListItemButton>
                          </Link>
                        );
                      }
                    })}
                  </Box>
                  <Box>
                    <ListItemButton
                      variant="text"
                      disableRipple
                      sx={{ cursor: "default" }}
                    >
                      <ListItemIcon sx={{ marginRight: "8px !important" }}>
                        <LocalHospitalIcon color="primary" />
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
                    <Divider />
                    <Box display="grid">
                      {alldegrees.map((elem, ind) => {
                        if (elem.streamid == "4" && ind <= 50) {
                          return (
                            <Link
                              href={`/${elem.name}`}
                              onClick={toggleDrawer(anchor, false)}
                            >
                              <ListItemButton
                                // endIcon={<SchoolIcon/>}
                                key={elem.id}
                                sx={{
                                  py: 0,
                                  minHeight: 32,
                                  color:
                                    themeMode === true
                                      ? "common.white"
                                      : "#666",
                                }}
                                onClick={popupState5.close}
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
                              </ListItemButton>
                            </Link>
                          );
                        }
                      })}
                    </Box>
                  </Box>
                </Grid>
                <Grid item md={3}>
                  {/* Management  */}

                  <ListItemButton
                    variant="text"
                    disableRipple
                    sx={{ cursor: "default" }}
                  >
                    <ListItemIcon sx={{ marginRight: "8px !important" }}>
                      <BusinessIcon color="primary" />
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
                  <Divider />
                  <Box display={"grid"}>
                    {alldegrees.map((elem, ind) => {
                      if (elem.streamid == "6" && ind <= 50) {
                        return (
                          <Link
                            href={`/${elem.name}`}
                            onClick={toggleDrawer(anchor, false)}
                          >
                            <ListItemButton
                              // endIcon={<SchoolIcon/>}
                              key={elem.id}
                              sx={{
                                py: 0,
                                minHeight: 32,
                                color:
                                  themeMode === true ? "common.white" : "#666",
                              }}
                              onClick={popupState5.close}
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
                            </ListItemButton>
                          </Link>
                        );
                      }
                    })}
                  </Box>
                  <Box>
                    <ListItemButton
                      variant="text"
                      disableRipple
                      sx={{ cursor: "default" }}
                    >
                      <ListItemIcon sx={{ marginRight: "8px !important" }}>
                        <SchoolIcon color="primary" />
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

                    <Divider />

                    <Box sx={{ display: "grid" }}>
                      {alldegrees.map((elem, index) => {
                        if (elem.streamid == "2") {
                          return (
                            <Link
                              href={`/${elem.name}`}
                              onClick={toggleDrawer(anchor, false)}
                            >
                              <ListItemButton
                                // endIcon={<SchoolIcon/>}
                                key={elem.id}
                                onClick={popupState5.close}
                                sx={{
                                  py: 0,
                                  minHeight: 32,
                                  color:
                                    themeMode === true
                                      ? "common.white"
                                      : "#666",
                                }}
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
                              </ListItemButton>
                            </Link>
                          );
                        }
                      })}
                    </Box>
                  </Box>
                </Grid>
                {/* <Divider orientation="vertical" /> */}
                <Grid item md={4}>
                  <ListItemButton
                    variant="text"
                    disableRipple
                    sx={{ cursor: "default" }}
                  >
                    <ListItemIcon sx={{ marginRight: "8px !important" }}>
                      <DvrIcon color="primary" />
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
                  <Divider />
                  <Box display={"grid"}>
                    {alldegrees.map((elem, ind) => {
                      if (elem.streamid == "1" && ind <= 25) {
                        return (
                          <Link
                            href={`/${elem.name}`}
                            onClick={toggleDrawer(anchor, false)}
                          >
                            <ListItemButton
                              // endIcon={<SchoolIcon/>}
                              key={elem.id}
                              sx={{
                                py: 0,
                                minHeight: 32,
                                color:
                                  themeMode === true ? "common.white" : "#666",
                              }}
                              onClick={popupState5.close}
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
                            </ListItemButton>
                          </Link>
                        );
                      }
                    })}
                  </Box>
                  {/* <Divider /> */}
                </Grid>
              </GridContainer>
            ) : null}
          </Stack>
        </Grid>
      </GridContainer>
    </>
  );

  useEffect(() => {
    setCityDataValue(cityData);
  }, [checkeddistrictvalue]);

  const districtcheck = cityDataValue.map((e, i) => {
    if (districtID.includes(e.districtid)) {
      return true;
    }
  });

  // const districtvalue =  true ;
  const districtvalue = districtcheck.includes(true) ? true : false;

  //Sort Tabs function
  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [ratingselectedid, setRatingselectedid] = useState();

  const [openNear, setOpenNear] = useState(null);
  const openN = Boolean(openNear);

  // const [sortId, setSortId] = useState();
  const [cityActive, setCityActive] = useState(false);
  const [areaActive, setAreaActive] = useState(false);
  const [degreeActive, setDegreeActive] = useState(false);
  const [streamActive, setStreamActive] = useState(false);
  const [courseActive, setCourseActive] = useState(false);
  const [typeActive, setTypeActive] = useState(false);

  // console.log(
  //   "status : " + sortId,
  //   sortPopular,
  //   sortRatingHigh,
  //   sortRatingLow,
  //   sortFeeHigh,
  //   sortFeeLow,
  //   router.query.courseId
  // );
  
  useEffect(() => {

    if (checkeddistrictvalue.includes(true)) {
      // console.log(checkeddistrictvalue);
      setCityActive(true);
    }
    if (checkedcollegetypevalue.includes(true)) {
      // console.log(checkeddistrictvalue);
      setTypeActive(true);
    }
    if (checkedcityvalue.includes(true)) {
      // console.log(checkeddistrictvalue);
      setAreaActive(true);
    }
    if (checkedcoursevalue.includes(true)) {
      // console.log(checkeddistrictvalue);
      setCourseActive(true);
    }
    if (checkeddegreevalue === true) {
      // console.log(checkeddistrictvalue);
      setDegreeActive(true);
    }
    if (checkedstreamvalue === true) {
      // console.log(checkeddistrictvalue);
      setStreamActive(true);
    }
  }, [
    checkedstreamvalue,
    checkeddistrictvalue,
    checkedcollegetypevalue,
    checkedcollegetypevalue,
    checkedcityvalue,
    checkeddegreevalue,
    checkedcoursevalue,
    districtBread,
  ]);

  //  useEffect(() => {
  //   if(districtBread != undefined){
  //     setCityActive(false);
  //     setTypeActive(false);
  //     setAreaActive(false);
  //     setCourseActive(false);
  //     setDegreeActive(false);
  //     setStreamActive(false);
  //     streamID.splice(0, streamID.length);
  //     degreeID.splice(0, degreeID.length);
  //   }
  //   if(router.query.collegelist == "tamilnadu-colleges"){
  //     setCityActive(false);
  //     setTypeActive(false);
  //     setAreaActive(false);
  //     setCourseActive(false);
  //     setDegreeActive(false);
  //     setStreamActive(false);
  //     streamID.splice(0, streamID.length);
  //     degreeID.splice(0, degreeID.length);
  //   }
  //  },[districtBread , router.query.collegelist == "tamilnadu-colleges"])

  //  useEffect(() => {
  //   if(router.query.collegelist == "tamilnadu-colleges"){
  //     setCityActive(false);
  //     setTypeActive(false);
  //     setAreaActive(false);
  //     setCourseActive(false);
  //     setDegreeActive(false);
  //     setStreamActive(false);
  //   }
  //  },[]);

//  console.log("d" + apifilteroptions.area?.[0].count)
  
  return (
    <>
      <Toolbar sx={{ display: { xs: "none", sm: "none", md: "flex" } }}>
        <Grid container display={"flex"}>
          <Grid item md={1.5}  >
            <Button
              variant="outlined"
              sx={{ justifyContent: "space-between" , ml:-2 }}
              onClick={toggleDrawer(["left"], true)}
            >
              <CgMenuGridR style={{ fontSize: "18px", marginRight: 1 }} />
              All Category
            </Button>
          </Grid>

          {/* Near By & Sort Section  */}
          <Grid
            item
            md={2}
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <Button
              variant="outlined"
              disabled={ checkeddistrictvalue.includes(true) ? false : true}
              id="Near-button"
              aria-controls={openN ? "Near-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={openN ? "true" : undefined}
              onClick={(event) => setOpenNear(event.currentTarget)}
            >
              <ImLocation style={{ fontSize: "13px", marginRight: 1 }} />
              <Typography ml={1} fontSize={12}>
                Near by{" "}
              </Typography>
            </Button>

            {/* Near  by */}
            <Menu
              id="Near-menu"
              anchorEl={openNear}
              open={openN}
              onClose={() => setOpenNear(false)}
              MenuListProps={{
                "aria-labelledby": "Near-button",
              }}
              sx={{
                mt: 1,
                position: "absolute",
                justifyContent: "center",
                height: "100%",
              }}
            >
              <Box sx={{ width: 380, my: -1 }}>
                <Stack
                  sx={{ bgcolor: themeMode === true ? "grey.700" : "grey.100" }}
                >
                  <NearBySlider
                    value={NearValue}
                    onchange={(e) => {
                      setNearByState(e.target.value);
                    }}
                  />
                </Stack>
              </Box>
            </Menu>
            
            {posts1.length != 0 ? 
            <Button
              variant="outlined"
              {...bindTrigger(popupState9)}
              sx={{ position: "relative" }}
              
            >
              <RiArrowUpDownFill style={{ fontSize: "12px", marginRight: 1 }} />
              <Typography ml={1} fontSize={12}>
                Sort
              </Typography>
            </Button>
             :
             <Button
              variant="outlined"
              disabled
              // {...bindTrigger( posts1.length === 0 ? false : popupState9)}
              sx={{ position: "relative" }}
              
            >
              <RiArrowUpDownFill style={{ fontSize: "12px", marginRight: 1 }} />
              <Typography ml={1} fontSize={12}>
                Sort
              </Typography>
            </Button>
             }

            {/* Sort  */}
            <Menu
              {...bindMenu(popupState9)}
              anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
              // anchorEl={popupState}
              transformOrigin={{ vertical: "top", horizontal: "left" }}
              // transitionDuration={'.2s'}
              sx={{ mt: 1, position: "absolute", px: 1 }}
              onClose={popupState9.close}
            >
              <FormControl sx={{ 
                px: 2 , 
                bgcolor: themeMode === true? "grey.700" :'grey.100' ,
                color: themeMode === true? "grey.100": "grey.800",
                py:2 , mt:-2 , mb: -1 ,
                }}>
                  <Box display={'flex'} sx={{ justifyContent:'space-between' , alignItems:'center'}} >
                <FormLabel
                  id="demo-radio-buttons-group-label"
                  sx={{ fontSize: "13px" }}
                >
                  Sort by
                </FormLabel>
                {sortId != null ? 
                <>
                <Button
                  variant='text'
                  id="demo-radio-buttons-group-label"
                  sx={{ 
                    fontSize: "13px" , 
                    fontWeight: 500,
                    ':hover':{ background:'none' } , 
                    ':active':{background:'none' } ,
                    color: themeMode === true ? 'primary.main' : 'primary.dark'
                  }}
                  onClick={() => {
                    setSortId(null);
                    setSortRatingHigh(false);
                    setSortRatingLow(false);
                    setSortFeeLow(false);
                    setSortFeeHigh(false);
                    setSortPopular(false);
                  }}
                >
                 Clear
                </Button>
                </> :null}
                  </Box>
                {[
                  "Popular Colleges",
                  "Rating(Highest First)",
                  "Rating(Lowest First)",
                  "Fees(Lowest First)",
                  "Fees(Highest First)",
                ]
                  .slice(0, router.query.course && !router.query.courseId ? 5 : router.query.courseId ? 3 : 3)
                  .map((e, i) => {
                    return (
                      <>
                        <RadioGroup
                          key={i}
                          aria-labelledby="demo-radio-buttons-group-label"
                          name="radio-buttons-group"
                        >
                          <FormControlLabel
                            sx={{ fontSize: "10px" }}
                            value={e}
                            control={
                              <Radio
                                size="small"
                                value={e}
                                checked={i == sortId ? true : false}
                                onChange={(event) => {
                                  // filterstreamfunc(event, i);
                                  setSortId(i);
                                  if (sortId == 0 || i == 0) {
                                    setSortPopular(true);
                                    setSortRatingHigh(false);
                                    setSortRatingLow(false);
                                    setSortFeeLow(false);
                                    setSortFeeHigh(false);
                                  }
                                  if (i == 1) {
                                    setSortRatingHigh(true);
                                    setSortPopular(false);
                                    setSortRatingLow(false);
                                    setSortFeeLow(false);
                                    setSortFeeHigh(false);
                                  }
                                  if (i == 2) {
                                    setSortRatingHigh(false);
                                    setSortPopular(false);
                                    setSortRatingLow(true);
                                    setSortFeeLow(false);
                                    setSortFeeHigh(false);
                                  }
                                  if (i == 3) {
                                    setSortRatingHigh(false);
                                    setSortPopular(false);
                                    setSortRatingLow(false);
                                    setSortFeeLow(true);
                                    setSortFeeHigh(false);
                                  }
                                  if (i == 4) {
                                    setSortRatingHigh(false);
                                    setSortPopular(false);
                                    setSortRatingLow(false);
                                    setSortFeeLow(false);
                                    setSortFeeHigh(true);
                                  }
                                }}
                                onClick={popupState9.close}
                              />
                            }
                            label={e}
                          />
                        </RadioGroup>
                      </>
                    );
                  })}
              </FormControl>
            </Menu>

            <Divider orientation="vertical" />
          </Grid>

          {/* Filter Section  */}
          <Grid
            item
            md={6}
            columnSpacing={4}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              ml: 2,
              alignItems: "center",
            }}
          >
            {["City", "Area", "Stream", "Degree", "Courses", "CollegeType"].map(
              (elem, ind) => {
                return (
                  <Grid mr={1} sx={{ position: "relative" }}>
                    {ind == 1 &&
                    districtID.length > 0 &&
                    districtvalue == true ? (
                      <Button
                        variant="outlined"
                        sx={{ 
                          borderRadius: 2, 
                          px: 2,
                          border:ind == 1 && areaActive === true  ? "2px solid" : "1px solid",
                          ":hover":{
                            border:ind == 1 && areaActive === true ? "2px solid" : "1px solid",
                          }
                         }}
                        endIcon={<KeyboardArrowDownIcon />}
                        {...bindTrigger(ind == 1 ? popupState11 : null)}
                      >
                        {ind == 1 ? (
                          <CropOriginalIcon
                            style={{ fontSize: "15px", marginRight: 1 }}
                          />
                        ) : null}
                        <Typography ml={1} fontSize={12} color="gray">
                          {elem}
                        </Typography>
                      </Button>
                    ) : (ind == 1 &&
                        districtID.length > 0 &&
                        districtvalue != true) ||
                      (ind == 1 && districtID.length === 0) ? (
                      <Button
                        variant="outlined"
                        disabled
                        sx={{ 
                          borderRadius: 2, 
                          px: 2,
                          border: ind == 1 && areaActive === true  ? "2px solid" : "1px solid",
                          ":hover":{
                            border:ind == 1 && areaActive === true ? "2px solid" : "1px solid",
                          }
                          }}
                        endIcon={<KeyboardArrowDownIcon />}
                      >
                        {ind == 1 ? (
                          <CropOriginalIcon
                            style={{ fontSize: "15px", marginRight: 1 }}
                          />
                        ) : null}
                        <Typography ml={1} fontSize={12} color="gray">
                          {elem}
                        </Typography>
                      </Button>
                    ) : ind == 4 &&
                      (streamID.length > 0 || degreeID.length > 0) ? (
                      <Button
                        variant="outlined"
                        sx={{
                          borderRadius: 2,
                          px: 2,
                          border: ind == 4 && courseActive === true || ind == 1 && areaActive === true ? "2px solid" : "1px solid",
                          ":hover":{
                            border: ind == 4 && courseActive === true || ind == 1 && areaActive === true ? "2px solid" : "1px solid",
                          }
                        }}
                        endIcon={<KeyboardArrowDownIcon />}
                        {...bindTrigger(ind == 4 ? popupState14 : null)}
                      >
                        {ind == 4 ? (
                          <CropOriginalIcon
                            style={{ fontSize: "15px", marginRight: 1 }}
                          />
                        ) : null}
                        <Typography ml={1} fontSize={12} color="gray">
                          {elem}
                        </Typography>
                      </Button>
                    ) : (ind == 4 &&
                        (streamID.length != 0 || degreeID.length != 0)) ||
                      (ind == 4 &&
                        (streamID.length === 0 || degreeID.length === 0)) ? (
                      <Button
                        variant="outlined"
                        disabled
                        sx={{ borderRadius: 2, px: 2 }}
                        endIcon={<KeyboardArrowDownIcon />}
                      >
                        {ind == 4 ? (
                          <CropOriginalIcon
                            style={{ fontSize: "15px", marginRight: 1 }}
                          />
                        ) : null}
                        <Typography ml={1} fontSize={12} color="gray">
                          {elem}
                        </Typography>
                      </Button>
                    ) : null}

                    {ind != 1 && ind != 4 ? (
                      <Button
                        variant="outlined"
                        // disabled={ ind==0 && districtBread != undefined || ind == 0 && router.asPath != "/tamilnadu-colleges"  ? true : ind == 0 && router.asPath == "/tamilnadu-colleges" || ind==0 && districtBread === undefined  ? false : false}
                        disabled={ind == 0 && districtBread != undefined ? true : false}
                        sx={{ 
                          borderRadius: 2, 
                          px: 2 ,
                          border: ind == 0 && cityActive === true || ind == 2 && streamActive === true || ind == 3 && degreeActive === true || ind == 5 && typeActive === true ? "2px solid" : "1px solid" ,
                          ":hover":{
                            border: ind == 0 && cityActive === true || ind == 2 && streamActive === true || ind == 3 && degreeActive === true || ind == 5 && typeActive === true ? "2px solid" : "1px solid" ,
                          }
                        }}
                        endIcon={<KeyboardArrowDownIcon />}
                        {...bindTrigger(
                          ind == 0
                            ? popupState10
                            : ind == 2
                            ? popupState12
                            : ind == 3
                            ? popupState13
                            : ind == 5
                            ? popupState15
                            : null
                        )}
                        // onClick={(e)=>{}}
                      >
                        {ind == 0 ? (
                          <LocationCitySharpIcon
                            style={{ fontSize: "15px", marginRight: 1 }}
                          />
                        ) : ind == 2 ? (
                          <AccountBalanceIcon
                            style={{ fontSize: "15px", marginRight: 1 }}
                          />
                        ) : ind == 3 ? (
                          <SchoolIcon
                            style={{ fontSize: "15px", marginRight: 1 }}
                          />
                        ) : ind == 4 ? (
                          <MenuBookIcon
                            style={{ fontSize: "15px", marginRight: 1 }}
                          />
                        ) : ind == 5 ? (
                          <BookmarksIcon
                            style={{ fontSize: "15px", marginRight: 1 }}
                          />
                        ) : null}
                        <Typography ml={1} fontSize={12} color="gray">
                          {elem}
                        </Typography>
                      </Button>
                    ) : null}
                  </Grid>
                );
              }
            )}

            {/* City Filter  */}
            <Menu
              {...bindMenu(popupState10)}
              anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
              // anchorEl={popupState}
              transformOrigin={{ vertical: "top", horizontal: "left" }}
              // transitionDuration={'.2s'}
              sx={{ mt: 1, position: "absolute" }}
            >
              <Box
                sx={{
                  width: 260,
                  px: 1,
                  height: "100%",
                  alignItems: "stretch",
                  bgcolor: themeMode === true? "grey.700" :'grey.100' ,
                  color: themeMode === true? "grey.100": "grey.800",
                  py:2 , mt:-2 , mb: -1 ,
                }}
              > 
                {/* <Paper sx={{ my:-1.5 , overflowY:'hidden' }} > */}
                <TextField
                  id="standard-basic"
                  label="Search City"
                  InputLabelProps={{ style: { fontSize: "14px" } }}
                  variant="standard"
                  disablePortal
                  sx={{ color: "grey", ml: 2, fontSize: "10px" }}
                  // placeholder="Search"
                  type="Search"
                  // margin="normal"
                  size="small"
                  endAdornment={
                    <InputAdornment>
                      <Search fontSize="small" />
                    </InputAdornment>
                  }
                  autoComplete
                  onChange={(e) => {
                    districtfilterhandle(e);
                  }}
                />
                <List
                  sx={{
                    width: "auto",
                    mineight: "100%",
                    maxHeight: 230,
                    overflowY: "auto",
                  }}
                  dense
                  component="div"
                  role="list"
                >
                  
                  {apifilteroptions.city?.filter((item, index) => {
                      if (districtsearchfilter.trim() == "") {
                        return item;
                      } else if (
                        item.english_name
                          .toLowerCase()
                          .includes(districtsearchfilter)
                      ) {
                        return item;
                      }
                    })
                    .map((text, index) => {
                      return (
                        <ListItem key={index} disablePadding>
                          <ListItemButton>
                            <FormGroup>
                              <FormControlLabel
                                control={
                                  <Checkbox
                                    value={text.english_name}
                                    key={index}
                                    id={text.id}
                                    name="desktop"
                                    // defaultChecked={isChecked}
                                    checked={checkeddistrictvalue[text.id]}
                                    onChange={(e) => {
                                      districthandlefunc(e, text.id);
                                    }}
                                    size="small"
                                    // sx={{width:"100%"}} 
                                  />
                                } 
                                label={
                                  <Typography fontSize="11px">
                                    {text.english_name +
                                      " " +
                                      "(" +
                                      text.count +
                                      ")"}
                                  </Typography>
                                }
                              />
                            </FormGroup>
                          </ListItemButton>
                        </ListItem>
                      );
                    })}
                    
            
                </List>
                {/* </Paper> */}
              </Box>
            </Menu>

            {/* Area Filter  */}
            <Menu
              {...bindMenu(popupState11)}
              anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
              // anchorEl={popupState}
              transformOrigin={{ vertical: "top", horizontal: "left" }}
              // transitionDuration={'.2s'}
              sx={{ mt: 1, position: "absolute" }}
            >
              {districtID.length > 0 && districtvalue == true ? (
                <Box sx={{ width: 260, px: 1, bgcolor: themeMode === true? "grey.700" :'grey.100' ,
                color: themeMode === true? "grey.100": "grey.800",
                py:2 , mt:-2 , mb: -1  }}>
                  <TextField
                    id="standard-basic"
                    label="Search Area"
                    InputLabelProps={{ style: { fontSize: "14px" } }}
                    variant="standard"
                    disablePortal
                    sx={{ color: "grey", ml: 2, fontSize: "10px" }}
                    // placeholder="Search"
                    type="Search"
                    // margin="normal"
                    size="small"
                    endAdornment={
                      <InputAdornment>
                        <Search fontSize="small" />
                      </InputAdornment>
                    }
                    autoComplete
                    onChange={(e) => {
                      cityfilterhandle(e);
                    }}
                  />
                  <List
                    sx={{
                      width: "auto",
                      mineight: "100%",
                      maxHeight: 230,
                      overflowY: "auto",
                    }}
                    dense
                    component="div"
                    role="list"
                  >
                    {apifilteroptions.area?.filter((item, index) => {
                        if (citysearchfilter.trim() == "") {
                          return item;
                        } else if (
                          item.english_name
                            .toLowerCase()
                            .includes(citysearchfilter)
                        ) {
                          return item;
                        }
                      })
                      .map((item, index) => {
                        // console.log(item.districtid);
                        if(searchDistrict == item.districtid){
                          return (
                            <ListItem>
                              <FormGroup>
                                <FormControlLabel
                                  control={
                                    <Checkbox
                                      id={item.id}
                                      // key={item.districtid}
                                      name="desktop"
                                      value={item.english_name}
                                      checked={checkedcityvalue[item.id]}
                                      onChange={(e) => {
                                        filtercityfunc(e, item.id);
                                      }}
                                    />
                                  }
                                  label={
                                    <Typography fontSize="11px">
                                      {item.english_name +
                                        " " +
                                        "(" +
                                        item.count +
                                        ")"}
                                    </Typography>
                                  }
                                />
                              </FormGroup>
                            </ListItem>
                          );
                        }else if(districtBread === undefined){
                          return (
                            <ListItem>
                              <FormGroup>
                                <FormControlLabel
                                  control={
                                    <Checkbox
                                      id={item.id}
                                      // key={item.districtid}
                                      name="desktop"
                                      value={item.english_name}
                                      checked={checkedcityvalue[item.id]}
                                      onChange={(e) => {
                                        filtercityfunc(e, item.id);
                                      }}
                                    />
                                  }
                                  label={
                                    <Typography fontSize="11px">
                                      {item.english_name +
                                        " " +
                                        "(" +
                                        item.count +
                                        ")"}
                                    </Typography>
                                  }
                                />
                              </FormGroup>
                            </ListItem>
                          );
                        }
                       
                      })}
                  </List>
                </Box>
              ) : null}
            </Menu>

            {/* Stream Filter  */}
            <Menu
              {...bindMenu(popupState12)}
              anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
              // anchorEl={popupState}
              transformOrigin={{ vertical: "top", horizontal: "left" }}
              // transitionDuration={'.2s'}
              sx={{ mt: 1, position: "absolute" }}
            >
              <Box sx={{ width: 260, px: 1, bgcolor: themeMode === true? "grey.700" :'grey.100' ,
                  color: themeMode === true? "grey.100": "grey.800",
                  py:2 , mt:-2 , mb: -1 }}>
                <TextField
                  id="standard-basic"
                  label="Search Streams"
                  InputLabelProps={{ style: { fontSize: "14px" } }}
                  variant="standard"
                  disablePortal
                  sx={{ color: "grey", ml: 2, fontSize: "10px", width: "60%" }}
                  // placeholder="Search"
                  type="Search"
                  // margin="normal"
                  size="small"
                  endAdornment={
                    <InputAdornment>
                      <Search fontSize="small" />
                    </InputAdornment>
                  }
                  autoComplete
                  onChange={(e) => streamfilterhandle(e)}
                />
                <>
                  {streamID != "" ? (
                    <Button
                      sx={{ m: 1, mt: 2, fontSize: "12px" }}
                      onClick={streamfilterclear}
                    >
                      Clear
                    </Button>
                  ) : null}
                </>
                <List
                  sx={{
                    width: "auto",
                    mineight: "100%",
                    maxHeight: 230,
                    overflowY: "auto",
                  }}
                  dense
                  component="div"
                  role="list"
                >
                  {apifilteroptions.streams?.filter((item) => {
                      if (streamsearchfilter === "") {
                        return item;
                      } else if (
                        item.name.toLowerCase().includes(streamsearchfilter)
                      ) {
                        return item;
                      }
                    })
                    .map((item, index) => {
                      if(item.count != 0)
                      {
                        return (
                          <ListItemButton sx={{ border: "none" }}>
                            <FormControl>
                              <RadioGroup name="desktop">
                                <FormControlLabel
                                  control={
                                    <Radio
                                      id={item.id}
                                      size="small"
                                      name="desktop"
                                      value={item.name}
                                      checked={item.id == streamID ? true : false}
                                      onChange={(e) => {
                                        filterstreamfunc(e, item.id);
                                      }}
                                    />
                                  }
                                  label={
                                    <Typography fontSize="11px">
                                      {item.name + " " + "(" + item.count + ")"}
                                    </Typography>
                                  }
                                />
                              </RadioGroup>
                            </FormControl>
                          </ListItemButton>
                        );
                      }
                     
                    })}
                </List>
              </Box>
            </Menu>

            {/* Degree Filter  */}
            <Menu
              {...bindMenu(popupState13)}
              anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
              // anchorEl={popupState}
              transformOrigin={{ vertical: "top", horizontal: "left" }}
              // transitionDuration={'.2s'}
              sx={{ mt: 1, position: "absolute" }}
            >
              {streamID.length > 0 ? (
                <Box sx={{ width: 260, px: 1, bgcolor: themeMode === true? "grey.700" :'grey.100' ,
                color: themeMode === true? "grey.100": "grey.800",
                py:2 , mt:-2 , mb: -1  }}>
                  <TextField
                    id="standard-basic"
                    label="Search Degree"
                    InputLabelProps={{ style: { fontSize: "14px" } }}
                    variant="standard"
                    disablePortal
                    sx={{
                      color: "grey",
                      ml: 2,
                      fontSize: "10px",
                      width: "60%",
                    }}
                    // placeholder="Search"
                    type="Search"
                    // margin="normal"
                    size="small"
                    endAdornment={
                      <InputAdornment>
                        <Search fontSize="small" />
                      </InputAdornment>
                    }
                    autoComplete
                    onChange={(e) => {
                      degreefilterhandle(e);
                    }}
                  />
                  <>
                    {degreeID != "" ? (
                      <Button
                        sx={{ m: 1, mt: 2, fontSize: "12px" }}
                        onClick={degreefilterclear}
                      >
                        Clear
                      </Button>
                    ) : null}
                  </>
                  <List
                    sx={{
                      width: "auto",
                      mineight: "100%",
                      maxHeight: 230,
                      overflowY: "auto",
                      fontSize: "18px",
                    }}
                    dense
                    component="div"
                    role="list"
                  >
                    {apifilteroptions.degrees?.filter((item, index) => {
                        if (degreesearchfilter.trim() == "") {
                          return item;
                        } else if (
                          item.name.toLowerCase().includes(degreesearchfilter)
                        ) {
                          return item;
                        }
                      })
                      .map((text, index) => {
                          return (
                            <ListItemButton key={index} disablePadding>
                              <FormControl>
                                <RadioGroup>
                                  <FormControlLabel
                                    control={
                                      <Radio
                                        value={text.name}
                                        key={index}
                                        id={text.id}
                                        size="small"
                                        name="desktop"
                                        // defaultChecked={isChecked}
                                        checked={
                                          text.id == degreeID ? true : false
                                        }
                                        onChange={(e) => {
                                          filterdegreefunc(e, text.id);
                                        }}
                                      />
                                    }
                                    label={
                                      <Typography fontSize="11px">
                                        {text.name +
                                          " " +
                                          "(" +
                                          text.count +
                                          ")"}
                                      </Typography>
                                    }
                                  />
                                </RadioGroup>
                              </FormControl>
                            </ListItemButton>
                          );
                      })}
                  </List>
                </Box>
              ) : (
                <Box sx={{ width: 260, px: 1 }}>
                  <TextField
                    id="standard-basic"
                    label="Search Degree"
                    InputLabelProps={{ style: { fontSize: "14px" } }}
                    variant="standard"
                    disablePortal
                    sx={{
                      color: "grey",
                      ml: 2,
                      fontSize: "10px",
                      width: "60%",
                    }}
                    // placeholder="Search"
                    type="Search"
                    // margin="normal"
                    size="small"
                    endAdornment={
                      <InputAdornment>
                        <Search fontSize="small" />
                      </InputAdornment>
                    }
                    autoComplete
                    onChange={(e) => {
                      degreefilterhandle(e);
                    }}
                  />
                  <>
                    {degreeID != "" ? (
                      <Button
                        sx={{ m: 1, mt: 2, fontSize: "12px" }}
                        onClick={degreefilterclear}
                      >
                        Clear
                      </Button>
                    ) : null}
                  </>
                  <List
                    sx={{
                      width: "auto",
                      mineight: "100%",
                      maxHeight: 230,
                      overflowY: "auto",
                      fontSize: "18px",
                    }}
                    dense
                    component="div"
                    role="list"
                  >
                    {apifilteroptions.degrees?.filter((item, index) => {
                        if (degreesearchfilter.trim() == "") {
                          return item;
                        } else if (
                          item.name.toLowerCase().includes(degreesearchfilter)
                        ) {
                          return item;
                        }
                      })
                      .map((text, index) => {
                        return (
                          <ListItemButton key={index} disablePadding>
                            <FormControl>
                              <RadioGroup>
                                <FormControlLabel
                                  control={
                                    <Radio
                                      value={text.name}
                                      key={index}
                                      size="small"
                                      id={text.id}
                                      name="desktop"
                                      // defaultChecked={isChecked}
                                      checked={
                                        text.id == degreeID ? true : false
                                      }
                                      onChange={(e) => {
                                        filterdegreefunc(e, text.id);
                                      }}
                                    />
                                  }
                                  label={
                                    <Typography fontSize="11px">
                                      {text.name + " " + "(" + text.count + ")"}
                                    </Typography>
                                  }
                                />
                              </RadioGroup>
                            </FormControl>
                          </ListItemButton>
                        );
                      })}
                  </List>
                </Box>
              )}
            </Menu>

            {/* Courses Filter  */}
            {streamID.length > 0 || degreeID.length > 0 ? (
              <Menu
                {...bindMenu(popupState14)}
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                // anchorEl={popupState}
                transformOrigin={{ vertical: "top", horizontal: "right" }}
                // transitionDuration={'.2s'}
                sx={{ mt: 1, position: "absolute" }}
              >
                <Box sx={{ width: 260, px: 1,
                 bgcolor: themeMode === true? "grey.700" :'grey.100' ,
                 color: themeMode === true? "grey.100": "grey.800",
                 py:2 , mt:-2 , mb: -1 }}>
                  <TextField
                    id="standard-basic"
                    label="Search Courses"
                    InputLabelProps={{ style: { fontSize: "14px" } }}
                    variant="standard"
                    disablePortal
                    sx={{ color: "grey", ml: 2, fontSize: "10px" }}
                    // placeholder="Search"
                    type="Search"
                    // margin="normal"
                    size="small"
                    endAdornment={
                      <InputAdornment>
                        <Search fontSize="small" />
                      </InputAdornment>
                    }
                    autoComplete
                    onChange={(e) => {
                      coursefilterhandle(e);
                    }}
                  />
                  <List
                    sx={{
                      width: "auto",
                      mineight: "100%",
                      maxHeight: 230,
                      overflowY: "auto",
                      fontSize: "18px",
                    }}
                    dense
                    component="div"
                    role="list"
                  >
                    {apifilteroptions.courses?.filter((item, index) => {
                        if (coursesearchfilter.trim() == "") {
                          return item;
                        } else if (
                          item.course_name
                            .toLowerCase()
                            .includes(coursesearchfilter)
                        ) {
                          return item;
                        }
                      })
                      .map((text, index) => {
                          return (
                            <>
                              <ListItem key={index} disablePadding>
                                <ListItemButton>
                                  <FormGroup>
                                    <FormControlLabel
                                      control={
                                        <Checkbox
                                          value={text.course_name}
                                          name="desktop"
                                          key={index}
                                          id={text.id}
                                          // defaultChecked={isChecked}
                                          checked={checkedcoursevalue[text.id]}
                                          onChange={(e) => {
                                            coursehandlefunc(e, text.id);
                                          }}
                                        />
                                      }
                                      label={
                                        <Typography fontSize="11px">
                                          {text.course_name +
                                            " " +
                                            "(" +
                                            text.count +
                                            ")" 
                                          }
                                            
                                        </Typography>
                                      }
                                    />
                                  </FormGroup>
                                </ListItemButton>
                              </ListItem>{" "}
                            </>
                          );
                   
                      })}
                  </List>
                </Box>
              </Menu>
            ) : null}

            {/* College Type Filter   */}
            
            <Menu {...bindMenu(popupState15)} anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              // anchorEl={popupState}
              transformOrigin={{ vertical: "top", horizontal: "right" }}
              // transitionDuration={'.2s'}
              sx={{ mt: 1, position: "absolute" }}
            >
              <Box sx={{ width: 260, px: 1,
               bgcolor: themeMode === true? "grey.700" :'grey.100' ,
               color: themeMode === true? "grey.100": "grey.800",
               py:2 , mt:-2 , mb: -1  }}>
                <TextField
                  id="standard-basic"
                  label="Search College Type"
                  InputLabelProps={{ style: { fontSize: "14px" } }}
                  variant="standard"
                  disablePortal
                  sx={{ color: "grey", ml: 2, fontSize: "10px" }}
                  // placeholder="Search"
                  type="Search"
                  // margin="normal"
                  size="small"
                  endAdornment={
                    <InputAdornment>
                      <Search fontSize="small" />
                    </InputAdornment>
                  }
                  autoComplete
                  onChange={(e) => {
                    collegetypehandle(e);
                  }}
                />
                <List
                  sx={{
                    width: "auto",
                    mineight: "100%",
                    maxHeight: 230,
                    overflowY: "auto",
                    fontSize: "18px",
                  }}
                  dense
                  component="div"
                  role="list"
                >
                  {apifilteroptions.college_types?.filter((item, index) => {
                      if (collegetypesearchfilter.trim() == "") {
                        return item;
                      } else if (
                        item.college_types
                          .toLowerCase()
                          .includes(collegetypesearchfilter)
                      ) {
                        return item;
                      }
                    })
                    .map((item, index) => (
                      <>
                        <ListItemButton sx={{ border: "none" }}>
                          <FormGroup>
                            <FormControlLabel
                              control={
                                <Checkbox
                                  value={item.college_types}
                                  // key={index}
                                  name="desktop"
                                  id={item.college_type_id}
                                  // defaultChecked={isChecked}
                                  checked={
                                    checkedcollegetypevalue[
                                      item.college_type_id
                                    ]
                                  }
                                  // sx={{ position: "none" }}
                                  onChange={(e) => {
                                    collegetypehandlefunc(
                                      e,
                                      item.college_type_id
                                    );
                                  }}
                                />
                              }
                              label={
                                <Typography fontSize="11px">
                                  {item.college_types +
                                    " " +
                                    "(" +
                                    item.count +
                                    ")"}
                                </Typography>
                              }
                            />
                          </FormGroup>
                        </ListItemButton>
                      </>
                    ))}
                </List>
              </Box>
            </Menu>

          </Grid> 
        </Grid>
      </Toolbar>

      {["left"].map((anchor) => (
        <SwipeableDrawer
          anchor={anchor}
          open={state[anchor]}
          onClose={toggleDrawer(anchor, false)}
          onOpen={toggleDrawer(anchor, true)}
          PaperProps={{
            style:{
              top:'20%',
              left:'0%',
              height:'79%',
              borderRadius:'0px 20px 20px 0%'
            }
          }}
        >
          {SideNavMenu(anchor)}
        </SwipeableDrawer>
      ))}
    </>
  );
};

export default TopFilter;
