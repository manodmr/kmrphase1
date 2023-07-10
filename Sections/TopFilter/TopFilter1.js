import NearBySlider from "@/Components/Slider/NearBySlider";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { AppBar } from "@/OverViews/AppBar";
import {
  AccountBalance,
  ArrowRight,
  Bookmarks,
  ChevronRight,
  CropOriginal,
  KeyboardArrowDown,
  LocationCitySharp,
  Menu,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { CgMenuGridR } from "react-icons/cg";
import { FcNumericalSorting12 } from "react-icons/fc";
import { GiPathDistance } from "react-icons/gi";
import { Stack } from "@/OverViews/Stack";
import { useRouter } from "next/router";
import Image from "next/image";
import { darkLightModeContext } from "@/Layout/Layout";
import Divider from "@mui/material/Divider";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import SchoolIcon from "@mui/icons-material/School";
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
  bindMenu,
  bindContextMenu,
  bindPopover,
  bindDialog,
} from "material-ui-popup-state/hooks";
import HoverMenu from "material-ui-popup-state/HoverMenu";
import Link from "next/link";
import { GridContainer } from "@/OverViews/GridContainer";
import { MdShareLocation } from "react-icons/md";
import { FaSchool, FaStream, FaUniversity } from "react-icons/fa";

const TopFilter = ({
  menudata,
  stateValue,
  handleClick,
  searchData,
  degreeformenu,
  streamdatas,
}) => {
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
  const fetchdata = async () => {
    const fetchd = await fetch("https://w.kalvimalar.com/menu");
    const response = await fetchd.json();

    setAllDegrees(response.data);

    const fetchdegreeformenu = await fetch(
      `${process.env.NEXT_PUBLIC_DEGREES}`
    );
    const responsemenu = await fetchdegreeformenu.json();

    setDegreemenu(responsemenu);

    console.log(alldegrees);
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
    console.log(degreemenu);
  }, [router]);

  // const [popupState,setPopupState] = useState("");
  console.log(menumedegree);
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

  const [state, setState] = useState({
    left: false,
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

  const themeMode = useContext(darkLightModeContext);
  // For Menu purpose...
  const menuarray = ["BE", "B.Tech", "B.Com", "MBBS", "MBA", "All Courses"];
  const menuName = [];
  console.log(menuName);

  console.log(router);
  const [clickedcoursevalue, setClickedcoursevalue] = useState(
    router.query.course
  );

  //   ----------------Side Drawer
  const SideNavMenu = (anchor) => (
    <Box
      sx={{
        height: "100vh",
        bgcolor: themeMode === true ? "grey.800" : "common.white",
      }}
    >
      <Stack>
        <Box
          sx={{
            width: 200,
            height: "100%",
          }}
          role="list"
          onClose={toggleDrawer(anchor, false)}
          display="grid"
          // onKeyDown={toggleDrawer(anchor, false)}
        >
          <List
            sx={{
              display: "grid",
              justifyContent: "left",
              width: "100%",
              height: "100%",
              bgcolor: themeMode === true ? "grey.800" : "common.white",
            }}
            role="presentation"
          >
            <ListItem>
              <Typography variant="body1" color="grey">
                Colleges
              </Typography>
            </ListItem>
            {degreemenu.map((item, index) => {
              menuarray.map((e, i) => {
                if (item.name == e) {
                  menuName.push(item.name);
                }
              });
            })}
            {menuName.map((ele, ind) => {
              console.log(ele);
              return (
                <>
                  <Link href={`/${ele}`} sx={{ "&:hover": { color: "none" } }}>
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
                        // bgcolor:
                        //   router.query.collegelist === ele
                        //     ? themeMode === true
                        //       ? "primary.dark"
                        //       : "primary.light"
                        //     : null,
                        // borderRight: router.query.collegelist === ele  ?"5px solid goldenrod" : null,
                        width: 200,
                        justifyContent: "space-between",
                        boxShadow:
                          router.query.collegelist === ele
                            ? "inset -19px -15px 25px -10px rgba(0,0,0,0.2)"
                            : null,
                      }}
                      {...bindHover(
                        ind == 0
                          ? popupState0
                          : ind == 1
                          ? popupState1
                          : ind == 2
                          ? popupState2
                          : ind == 3
                          ? popupState3
                          : ind == 4
                          ? popupState4
                          : ind == 5
                          ? popupState5
                          : ind == 6
                          ? popupState6
                          : popupState7
                      )}
                      value={stateValue}
                      // onClick={() => {
                      //   router.push(`/${ele}`, undefined, { shallow: true });
                      //   toggleDrawer(anchor, false);
                      // }}
                      onClick={toggleDrawer(anchor, false)}
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
                              src={themeMode === true ? mbbsIconDark : mbbsIcon}
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
                  </Link>
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
              {...bindHover(popupState5)}
              value={stateValue}
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

            {/* BE Menu */}
            <HoverMenu
              {...bindMenu(popupState0)}
              anchorOrigin={{ vertical: "top", horizontal: "right" }}
              // anchorEl={popupState}
              //   transformOrigin={{ vertical: "right", horizontal: "left" }}
              // transitionDuration={'.2s'}
              sx={{ overflowY: "hidden", borderRadius: "none", mt: -1.5 }}
            >
              <Box
                sx={{
                  width: "100%",
                  minHeight: "100%",
                  maxHeight: "100%",
                  // overflowY: "auto",
                  transition: "all 0.1s ease 0s",
                  transformOrigin: "center bottom 0px",
                  bgcolor:
                    themeMode === true ? "grey.700" : "background.default",
                  color: themeMode === true ? "common.white" : "#666",
                  padding: "0important",
                  margin: "0",

                }}
              >
                {/* <Grid
                  sx={{
                    width: "80vw",
                    height: "100%",
                    margin: 0,
                    padding: 0,
                    bgcolor:
                      themeMode === true ? "grey.700" : "background.default",
                    color: themeMode === true ? "common.white" : "#000",
                    overflowY: "hidden",
                    display: "flex",
                    overFlowY: "hidden",
                  }}
                  container
                > */}
                <GridContainer>

                  <Grid
                    xs={2}
                    sm={4}
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
                          console.log(elem);
                          return (
                            <Link
                              href={`/${
                                menubedegree.name
                              }?course=${elem.course_name.replace(
                                /[ ]+/g,
                                "-"
                              )}`}
                              onClick={toggleDrawer(anchor, false)}
                            >
                              <ListItemButton
                                // endIcon={<SchoolIcon/>}
                                sx={{
                                  py: 0,
                                  minHeight: 32,
                                  color:
                                    themeMode === true
                                      ? "common.white"
                                      : "#666",
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
                                    themeMode === true
                                      ? "common.white"
                                      : "#666",
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

                {/* </Grid> */}
              </Box>
            </HoverMenu>

            {/* B.Tech Menu  */}
            <HoverMenu
              {...bindPopover(popupState1)}
              anchorOrigin={{ vertical: "top", horizontal: "right" }}
              // anchorEl={popupState}
              transformOrigin={{ vertical: "right", horizontal: "left" }}
              // transitionDuration={'.2s'}
              sx={{ overflowY: "hidden" }}
            >
              <Box
                sx={{
                  width: "100%",
                  minHeight: "100%",
                  maxHeight: "100%",
                  // overflowY: "auto",
                  transition: "all 0.1s ease 0s",
                  transformOrigin: "center bottom 0px",
                  bgcolor:
                    themeMode === true ? "grey.700" : "background.default",
                  color: themeMode === true ? "common.white" : "#666",
                  padding: "0important",
                  margin: "0",
                }}
              >
                <Grid
                  container
                  spacing={{ xs: 0, md: 1 }}
                  columns={{ xs: 4, sm: 8, md: 12 }}
                  sx={{
                    py: 1,
                    bgcolor:
                      themeMode === true ? "grey.700" : "background.default",
                    color: themeMode === true ? "common.white" : "#000",
                  }}
                >
                  <Grid
                    xs={2}
                    sm={4}
                    md={4}
                    sx={{
                      borderRight: "#eee solid 1px",
                      color: themeMode === true ? "common.white" : "#000",
                    }}
                  >
                    <Box
                      sx={{ padding: "0 5px", display: "grid", height: "100%" }}
                    >
                      <ListItem component="div" disablePadding>
                        <Link
                          href="/B.Tech"
                          onClick={toggleDrawer(anchor, false)}
                        >
                          <ListItemButton sx={{ height: "41" }}>
                            <ListItemIcon sx={{ marginRight: "8px" }}>
                              <MenuBookIcon color="primary" />
                            </ListItemIcon>
                            <ListItemText
                              primary="B.Tech Popular Streams"
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

                      {menubtech.map((elem, ind) => {
                        return (
                          <Link
                            href={`/${
                              menubtechdegree.name
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
                              onClick={popupState1.close}
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
                  <Grid
                    xs={2}
                    sm={4}
                    md={3.5}
                    sx={{ borderRight: "#eee solid 1px", height: "100%" }}
                  >
                    <Box sx={{ padding: "0 5px", display: "grid" }}>
                      <ListItem component="div" disablePadding>
                        <Link
                          href="/B.Tech(Lateral)"
                          onClick={toggleDrawer(anchor, false)}
                        >
                          <ListItemButton sx={{ height: "40" }}>
                            <ListItemIcon sx={{ marginRight: "8px" }}>
                              <MenuBookIcon color="primary" />
                            </ListItemIcon>
                            <ListItemText
                              primary="B.Tech Lateral"
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
                      {menubtechlateral.map((elem, ind) => {
                        console.log(elem);
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
                                  themeMode === true ? "common.white" : "#666",
                              }}
                              onClick={popupState1.close}
                            >
                              <ListItemText
                                primary={elem.course_name}
                                primaryTypographyProps={{
                                  fontSize: 14,
                                  fontWeight: "medium",
                                }}
                              />
                            </ListItemButton>
                          </Link>
                        );
                      })}
                    </Box>
                  </Grid>
                  <Grid xs={2} sm={4} md={4.5}>
                    <Link href="/41">
                      <ListItemButton component="a">
                        <ListItemIcon sx={{ marginRight: "8px !important" }}>
                          🔥
                        </ListItemIcon>
                        <ListItemText
                          sx={{
                            my: 0,
                            color: themeMode === true ? "common.white" : "#666",
                          }}
                          primary="TOP B.TECH COLLEGES IN TAMIL NADU 2023"
                          primaryTypographyProps={{
                            fontSize: 16,
                            fontWeight: "medium",
                            letterSpacing: 0,
                          }}
                        />
                      </ListItemButton>
                    </Link>
                    <Divider />
                    <Box>
                      {[
                        "Top B.Tech Colleges in Chennai",
                        "Top B.Tech Colleges in Madurai",
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
                                    themeMode === true
                                      ? "common.white"
                                      : "#666",
                                }}
                                onClick={popupState1.close}
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
                </Grid>
              </Box>
            </HoverMenu>

            {/* MBBS Menu   */}
            <HoverMenu
              {...bindPopover(popupState2)}
              anchorOrigin={{ vertical: "top", horizontal: "right" }}
              transformOrigin={{ vertical: "top", horizontal: "left" }}
              // transitionDuration={'.2s'}
              sx={{ width: "95%" }}
            >
              <Box
                sx={{
                  width: "100%",
                  minHeight: "100%",
                  maxHeight: "100%",
                  // overflowY: "auto",
                  transition: "all 0.1s ease 0s",
                  transformOrigin: "center bottom 0px",
                  bgcolor:
                    themeMode === true ? "grey.700" : "background.default",
                  color: themeMode === true ? "common.white" : "#666",
                  padding: "0important",
                  margin: "0",
                }}
              >
                <GridContainer>
                  <Grid
                    item
                    xs={6}
                    sx={{
                      borderRight: "#eee solid 1px",
                      color: themeMode === true ? "common.white" : "#000",
                      bgcolor:
                        themeMode === true ? "grey.700" : "background.default",
                    }}
                  >
                    <Box sx={{ display: "grid" }}>
                      <ListItem disablePadding>
                        <Link href="/MBBS">
                          <ListItemButton sx={{ height: 41 }}>
                            <ListItemIcon sx={{ marginRight: "8px" }}>
                              <MenuBookIcon color="primary" />
                            </ListItemIcon>
                            <ListItemText
                              primary="MBBS Popular Streams"
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
                      {menumbbs.map((elem, ind) => {
                        return (
                          <Link
                            href={`/${
                              menumbbsdegree.name
                            }?course=${elem.course_name.replace(/[ ]+/g, "-")}`}
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
                              onClick={popupState3.close}
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
                  <Grid
                    item
                    xs={6}
                    sx={{
                      color: themeMode === true ? "common.white" : "#000",
                      bgcolor:
                        themeMode === true ? "grey.700" : "background.default",
                    }}
                  >
                    <ListItemButton>
                      <ListItemIcon sx={{ marginRight: "8px !important" }}>
                        🔥
                      </ListItemIcon>
                      <ListItemText
                        sx={{
                          my: 0,
                          color: themeMode === true ? "common.white" : "#666",
                        }}
                        primary="TOP MBBS COLLEGES 2023"
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
                                    themeMode === true
                                      ? "common.white"
                                      : "#666",
                                }}
                                onClick={popupState3.close}
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
              </Box>
            </HoverMenu>

            {/* MBA Menu  */}
            <HoverMenu
              {...bindPopover(popupState3)}
              anchorOrigin={{ vertical: "top", horizontal: "right" }}
              // anchorEl={popupState}
              transformOrigin={{ vertical: "right", horizontal: "left" }}
              // transitionDuration={'.2s'}
              sx={{ overflowY: "hidden" }}
            >
              <Box
                sx={{
                  width: "100%",
                  minHeight: "100%",
                  maxHeight: "400px",
                  // overflowY: "auto",
                  transition: "all 0.1s ease 0s",
                  transformOrigin: "center top 0px",
                  bgcolor:
                    themeMode === true ? "grey.700" : "background.default",
                  color: themeMode === true ? "common.white" : "#666",
                  // my: -1.8,
                  // py: 0.4,
                }}
              >
                <Grid
                  sx={{
                    pb: 0,
                    py: 1,
                    bgcolor:
                      themeMode === true ? "grey.700" : "background.default",
                    color: themeMode === true ? "common.white" : "#666",
                  }}
                  container
                  spacing={{ xs: 0, md: 1 }}
                  columns={{ xs: 4, sm: 8, md: 12 }}
                >
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
                                    themeMode === true
                                      ? "common.white"
                                      : "#666",
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
                </Grid>
              </Box>
            </HoverMenu>

            {/* B.com Menu   */}
            <HoverMenu
              {...bindPopover(popupState4)}
              anchorOrigin={{ vertical: "top", horizontal: "right" }}
              // anchorEl={popupState}
              transformOrigin={{ vertical: "right", horizontal: "left" }}
              // transitionDuration={'.2s'}
              sx={{ overflowY: "hidden" }}
            >
              <Box
                sx={{
                  width: "100%",
                  minHeight: "100%",
                  maxHeight: "400px",
                  // overflowY: "auto",
                  transition: "all 0.1s ease 0s",
                  transformOrigin: "center top 0px",
                  bgcolor:
                    themeMode === true ? "grey.700" : "background.default",
                  color: themeMode === true ? "common.white" : "#000",
                  margin:"0",
                  my: -1.8,
                  py: 0.4,
                }}
              >
                <Grid
                  sx={{
                    py: 1,
                    bgcolor:
                      themeMode === true ? "grey.700" : "background.default",
                    color: themeMode === true ? "common.white" : "#666",
                  }}
                  container
                  spacing={{ xs: 0, md: 1 }}
                  columns={{ xs: 4, sm: 8, md: 12 }}
                >
                  <Grid
                    xs={2}
                    sm={4}
                    md={4}
                    sx={{ borderRight: "#eee solid 1px" }}
                  >
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
                  <Grid
                    xs={2}
                    sm={4}
                    md={3}
                    sx={{ borderRight: "#eee solid 1px" }}
                  >
                    <Box sx={{ padding: "0 5px", display: "grid" }}>
                      <ListItem component="div" disablePadding>
                        <Link href="/ME" onClick={toggleDrawer(anchor, false)}>
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
                                textTransform: "uppercase",
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
                                    themeMode === true
                                      ? "common.white"
                                      : "#666",
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
                </Grid>
              </Box>
            </HoverMenu>

            {/* All Courses   */}
            <HoverMenu
              {...bindMenu(popupState5)}
              anchorOrigin={{ vertical: "top", horizontal: "right" }}
              // anchorEl={popupState}
              transformOrigin={{ vertical: "right", horizontal: "left" }}
              // transitionDuration={'.2s'}
              sx={{ overflowY: "hidden" }}
            >
              <Box
                sx={{
                  width: "100%",
                  minHeight: "100%",
                  maxHeight: "400px",
                  // overflowY: "auto",
                  transition: "all 0.1s ease 0s",
                  transformOrigin: "center top 0px",
                  bgcolor:
                    themeMode === true ? "grey.700" : "background.default",
                  color: themeMode === true ? "common.white" : "#000",
                  my: -1.8,
                  py: 2,
                  display: "flex",
                  
                }}
              >
                <Grid sx={{ pb: 0 }} container spacing={{ xs: 0, md: 1 }}>
                  <Grid md={2.3} sx={{ borderRight: "#eee solid 1px" }}>
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
                  </Grid>
                  <Grid items md={2} sx={{ width: "100%", mx: 1 }}>
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
                  </Grid>
                  <Divider orientation="vertical" />
                  <Grid md={3.42} sx={{ borderRight: "#eee solid 1px" }}>
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
                    {/* <Divider /> */}
                  </Grid>
                  <Grid md={2} sx={{ borderRight: "#eee solid 1px" }}>
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
                    {/* <Divider /> */}
                  </Grid>

                  <Grid md={2} sx={{ borderRight: "#eee solid 1px" }}>
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
                  </Grid>
                </Grid>
              </Box>
            </HoverMenu>
          </List>
          {/* <Divider /> */}
        </Box>
      </Stack>
    </Box>
  );

  return (
    <>
      <Toolbar sx={{ bgcolor: themeMode === true ? "grey.800" : "grey.200" }}>
        <GridContainer
          display={"flex"}
          sx={{ bgcolor: themeMode === true ? "grey.800" : "grey.200" }}
        >
          <Grid item md={1.5}>
            <Button
              variant="outlined"
              sx={{ justifyContent: "space-between" }}
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
            sx={{ display: "flex", justifyContent: "space-between", ml: 10 }}
          >
            <Button variant="outlined">
              <GiPathDistance style={{ fontSize: "12px", marginRight: 1 }} />
              <Typography ml={1} fontSize={12}>
                Near by{" "}
              </Typography>
            </Button>
            <Button variant="outlined">
              <FcNumericalSorting12
                style={{ fontSize: "12px", marginRight: 1 }}
              />
              <Typography ml={1} fontSize={12}>
                Sort
              </Typography>
            </Button>
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
                  <Grid mr={1}>
                    <Button
                      variant="outlined"
                      sx={{ borderRadius: 2, px: 2 }}
                      endIcon={<KeyboardArrowDown />}
                    >
                      {ind == 0 ? (
                        <LocationCitySharp
                          style={{ fontSize: "15px", marginRight: 1 }}
                        />
                      ) : ind == 1 ? (
                        <MdShareLocation
                          style={{ fontSize: "15px", marginRight: 1 }}
                        />
                      ) : ind == 2 ? (
                        <FaStream
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
                        <FaUniversity
                          style={{ fontSize: "15px", marginRight: 1 }}
                        />
                      ) : null}
                      <Typography ml={1} fontSize={12}>
                        {elem}
                      </Typography>
                    </Button>
                  </Grid>
                );
              }
            )}
          </Grid>
        </GridContainer>
      </Toolbar>
      {["left"].map((anchor) => (
        <SwipeableDrawer
          anchor={anchor}
          open={state[anchor]}
          onClose={toggleDrawer(anchor, false)}
          onOpen={toggleDrawer(anchor, true)}
        >
          {SideNavMenu(anchor)}
        </SwipeableDrawer>

      ))}
  
    </>
  );
};

export default TopFilter;
