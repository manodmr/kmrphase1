import HoverMenu from "material-ui-popup-state/HoverMenu";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  AppBar,
  Grid,
  Toolbar,
  Button,
  Box,
  Stack,
  Menu,
  MenuItem,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemButton,
} from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import AppsIcon from "@mui/icons-material/Apps";
import Divider from "@mui/material/Divider";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import SchoolIcon from "@mui/icons-material/School";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import EngineeringIcon from "@mui/icons-material/Engineering";
import BusinessIcon from "@mui/icons-material/Business";
import DvrIcon from "@mui/icons-material/Dvr";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import SpaIcon from "@mui/icons-material/Spa";
import beIcon from "/public/icons/kicons-be.png";
import btechIcon from "/public/icons/kicons-1.png";
import mbaIcon from "/public/icons/kicons-2.png";
import mbbsIcon from "/public/icons/kicons-3.png";
import meIcon from "/public/icons/kicons-me.png";
import mtechIcon from "/public/icons/kicons-mtech.png";
import scienceIcon from "/public/icons/kicons-6.png";
import abroadIcon from "/public/icons/kicons-7.png";
import homeDark from "../../public/icons/whiteIcon/home-dark.png";
import beIconDark from "/public/icons/whiteIcon/kicons-be-dark.png";
import btechIconDark from "/public/icons/whiteIcon/kicons-1-dark.png";
import mbaIconDark from "/public/icons/whiteIcon/kicons-2-dark.png";
import mbbsIconDark from "/public/icons/whiteIcon/kicons-3-dark.png";
import meIconDark from "/public/icons/whiteIcon/kicons-me-dark.png";
import mtechIconDark from "/public/icons/whiteIcon/kicons-mtech-dark.png";
import {
  usePopupState,
  bindHover,
  bindMenu,
  bindContextMenu,
  bindPopover,
  bindDialog,
} from "material-ui-popup-state/hooks";
import { Padding } from "@mui/icons-material";
import { createContext, useContext, useEffect, useState } from "react";
import { darkLightModeContext } from "@/Layout/Layout";
import CollegeListing from "@/pages/[collegelist]";
import Typography from "@/theme/overrides/Typography";
import { GridContainer } from "@/OverViews/GridContainer";

export const routerContext = createContext();
const MenuPopupState = ({
  menudata,
  stateValue,
  handleClick,
  searchData,
  degreeformenu,
  streamdatas,
}) => {
  console.log(degreeformenu);
  const router = useRouter();

  const [menubedegree, setMenubedegree] = useState([]);
  const [menubelateraldegree, setMenubelateraldegree] = useState([]);
  const [menubtechdegree, setMenubtechdegree] = useState([]);
  const [menubtechlateraldegree, setMenubtechlateraldegree] = useState([]);
  const [menumbadegree, setMenumbadegree] = useState([]);
  const [menumedegree, setMenumedegree] = useState([]);
  const [menumtechdegree, setMenumtechdegree] = useState([]);
  const [menumbbsdegree, setMenumbbsdegree] = useState([]);

  const [menube, setMenube] = useState([]);
  const [menubelateral, setMenubelateral] = useState([]);
  const [menubtech, setMenubtech] = useState([]);
  const [menubtechlateral, setMenubtechlateral] = useState([]);
  const [menumba, setMenumba] = useState([]);
  const [menume, setMenume] = useState([]);
  const [menumtech, setMenumtech] = useState([]);
  const [menumbbs, setMenumbbs] = useState([]);

  console.log(process.env.NEXT_PUBLIC_DEGREES);

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

    setMenume(response.data[4].course);
    setMenumedegree(response.data[4]);

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
  const popupStateall = usePopupState({
    variant: "popover",
    popupId: "demoMenu",
  });

  const themeMode = useContext(darkLightModeContext);
  const [state, setState] = useState("helloRouter");

  // For Menu purpose...
  const menuarray = ["BE", "B.Tech", "ME", "MBBS", "MBA", "All Courses"];
  const menuName = [];
  console.log(menuName);    
  // streamdatas.map((e)=> {
  //   if (e.name === menuName) {
  //     setActiveStr(true)
  //     setPageNum(1)
  //     if(e.name != menuName){
  //       setActiveStr(false);
  //     }
  //     return setMenuSID(e.id);
  //   }
  // })

  console.log(router);
  const [clickedcoursevalue, setClickedcoursevalue] = useState(
    router.query.course
  );

  // console.log(clickedcoursevalue);


  return (
    <>
      <AppBar
        position="static"
        color="transparent"
        sx={{
          bgcolor: themeMode === true ? "grey.600" : "grey.200",
          color: themeMode === true ? "common.white" : "#000",
          height: "auto",
          overflowX: { xs: "scroll", sm: "scroll", md: "hidden", lg: "hidden" },
          textAlign: "center",
          margin: "auto",
          boxSizing: "border-box",
          whiteSpace: "nowrap",
          justifyContent: { sm: "normal", md: "center", lg: "center" },
          width: "100%",
          display:{ md:'flex' , sm:'none' ,xs:'none' }
        }}
        
      >
        <Toolbar
          sx={{
            justifyContent: { sm: "normal", md: "center", lg: "center" },
            marginLeft: { sm: "10px", md: "0", lg: "0" },
            background: "background.default",
          }}
        >
          <Stack direction="row" spacing={2}>
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
                  <Button
                    sx={{
                      fontSize: { sm: "13px", md: "15px", lg: "16px" },
                      marginRight: { sm: "15px", md: "0", lg: "0" },
                      marginLeft: { sm: "15px", md: "0", lg: "0" },
                      color: "inherit",
                      borderRadius:'none',
                      boxShadow : router.query.collegelist === ele ? (themeMode === true ? '1px 1px 2px  #666 ' :'1px 1px 2px  #ccc') :null,
                      bgcolor : router.query.collegelist === ele ? (themeMode === true ? 'primary.dark' :'primary.light') :null
                    }}
                    endIcon={
                      <KeyboardArrowDownIcon
                        sx={{ display: { xs: "none", md: "flex", lg: "flex" } }}
                      />
                    }
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
                    onClick={() => {
                      router.push(`/${ele}`, undefined, { shallow: true });
                    }}
                  >
                    <ListItemIcon sx={{ marginRight: "8px" }}>
                      {ind == 0 ? (
                        <Image
                          className="smallicon"
                          src={themeMode === true ? beIconDark : beIcon}
                          alt={ele}
                          width={"25"}
                          height={"25"}
                        />
                      ) : ind == 1 ? (
                        <Image
                          className="smallicon"
                          src={themeMode === true ? btechIconDark : btechIcon}
                          alt={ele}
                          width={"25"}
                          height={"25"}
                        />
                      ) : ind == 2 ? (
                        <Image
                          className="smallicon"
                          src={themeMode === true ? meIconDark : meIcon}
                          alt={ele}
                          width={"25"}
                          height={"25"}
                        />
                      ) : ind == 3 ? (
                        <Image
                          className="smallicon"
                          src={themeMode === true ? mbbsIconDark : mbbsIcon}
                          alt={ele}
                          width={"25"}
                          height={"25"}
                        />
                      ) : ind == 4 ? (
                        <Image
                          className="smallicon"
                          src={themeMode === true ? mbaIconDark : mbaIcon}
                          alt={ele}
                          width={"25"}
                          height={"25"}
                        />
                      ) : null}
                    </ListItemIcon>
                    <Box>{ele}</Box>
                  </Button>
                </>
              );
            })}

            {/* All Courses   */}
            <Button
              sx={{
                fontSize: { sm: "13px", md: "15px", lg: "16px" },
                marginRight: { sm: "15px", md: "0", lg: "0" },
                marginLeft: { sm: "15px", md: "0", lg: "0" },
                color: "inherit",
                // borderBottom : router.query.collegelist != degreemenu.map((e)=>  e.name) ? '2px solid orange' : router.query.collegelist == "tamilnadu-colleges" ? null : null
              }}
              endIcon={
                <KeyboardArrowDownIcon
                  sx={{ display: { xs: "none", md: "flex", lg: "flex" } }}
                />
              }
              {...bindHover(popupState5)}
              value={stateValue}
            >
              <ListItemIcon sx={{ marginRight: "8px" }}>
                <Image
                  className="smallicon"
                  src={themeMode === true ? beIconDark : beIcon}
                  // alt={ele}
                  width={"25"}
                  height={"25"}
                />
              </ListItemIcon>
              <Box>All Courses</Box>
            </Button>
{/* --------------------------------------------------popup------------------------------- */}

            {/* BE Menu  */}
            <HoverMenu
              {...bindPopover(popupState0)}
              anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
              // anchorEl={popupState}
              transformOrigin={{ vertical: "top", horizontal: "left" }}
              // transitionDuration={'.2s'}
            >
              <Box
                sx={{
                  width: "80vw",
                  minHeight: "100%",
                  maxHeight: "400px",
                  // overflowY: "auto",
                  transition: "all 0.1s ease 0s",
                  transformOrigin: "center top 0px",
                  bgcolor:
                    themeMode === true ? "grey.700" : "background.default",
                  color: themeMode === true ? "common.white" : "#666",
                  my: -1.8,
                  py: 0.4,
                }}
              >
                <Grid
                  // className="hover-menu"
                  sx={{
                    bgcolor:
                      themeMode === true ? "grey.700" : "background.default",
                    color: themeMode === true ? "common.white" : "#000",
                  }}
                  container
                  // spacing={{ xs: 0, md: 1 }}
                  // columns={{ xs: 4, sm: 8, md: 12 }}
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
                    <Box sx={{ padding: "0 5px", display: "grid" }}>
                      <ListItem component="div" disablePadding>
                        <Link href={`/BE`}>
                          <ListItemButton sx={{ height: "41" }}>
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
                      </ListItem>
                      <Divider />

                      <Box
                        display={"grid "}
                        sx={{ overflowY: "auto", height: "350px" }}
                      >
                        {menube.map((elem, ind) => {
                          console.log(elem);
                          return (
                            <Link
                              href={`/${
                                menubedegree.name
                              }?course=${elem.course_name.replace(
                                /[ ]+/g,
                                "-"
                              )}`}
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
                                  }}
                                />
                                {elem.id}
                              </ListItemButton>
                            </Link>
                          );
                        })}
                      </Box>
                    </Box>
                  </Grid>
                  <Grid
                    xs={2}
                    sm={4}
                    md={4}
                    sx={{ borderRight: "#eee solid 1px" }}
                  >
                    <Box sx={{ padding: "0 5px", display: "grid" }}>
                      <ListItem component="div" disablePadding>
                        <Link href={`/BE(Lateral)`}>
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
                        sx={{ overflowY: "auto", height: "350px" }}
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
                                      : "#000",
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
                  <Grid xs={2} sm={4} md={4}>
                    <ListItemButton>
                      <ListItemIcon sx={{ marginRight: "8px !important" }}>
                        🔥
                      </ListItemIcon>
                      <ListItemText
                        sx={{ 
                          my: 0,
                          color:themeMode === true
                                      ? "common.white"
                                      : "#666",
                         }}
                        primary="TOP BE COLLEGES IN INDIA 2023"
                        primaryTypographyProps={{
                          fontSize: 16,
                          fontWeight: "medium",
                          letterSpacing: 0,
                        }}
                      />
                    </ListItemButton>

                    <Divider />
                  </Grid>
                </Grid>
              </Box>
            </HoverMenu>

            {/* B.Tech Menu  */}
            <HoverMenu
              {...bindPopover(popupState1)}
              anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
              transformOrigin={{ vertical: "top", horizontal: "left" }}
              // transitionDuration={'.2s'}
            >
              <Box
                sx={{
                  width: "80vw",
                  minHeight: "100%",
                  maxHeight: "400px",
                  // overflowY: "auto",
                  transition: "all 0.1s ease 0s",
                  transformOrigin: "center top 0px",
                  bgcolor:
                    themeMode === true ? "grey.700" : "background.default",
                  color: themeMode === true ? "common.white" : "#666",
                  my: -1.8,
                  py: 0.4,
                  py: 0.4,
                }}
              >
                <Grid
                  container
                  spacing={{ xs: 0, md: 1 }}
                  columns={{ xs: 4, sm: 8, md: 12 }}
                  sx={{
                    py:1,
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
                    <Box sx={{ padding: "0 5px", display: "grid" }}>
                      <ListItem component="div" disablePadding>
                        <Link href="/B.Tech">
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
                                  : "#666", }}
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
                    md={4}
                    sx={{ borderRight: "#eee solid 1px" }}
                  >
                    <Box sx={{ padding: "0 5px", display: "grid" }}>
                      <ListItem component="div" disablePadding>
                        <Link href="/B.Tech(Lateral)">
                          <ListItemButton sx={{ height: "41" }}>
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
                          >
                            <ListItemButton
                              // endIcon={<SchoolIcon/>}
                              key={elem.id}
                              sx={{ py: 0, minHeight: 32, 
                                color:
                                themeMode === true
                                  ? "common.white"
                                  : "#666", }}
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
                  <Grid xs={2} sm={4} md={4}>
                    <Link href="/41">
                      <ListItemButton component="a">
                        <ListItemIcon sx={{ marginRight: "8px !important" }}>
                          🔥
                        </ListItemIcon>
                        <ListItemText
                          sx={{ 
                            my: 0,
                            color: themeMode === true
                                      ? "common.white"
                                      : "#666",
                           }}
                          primary="TOP B.TECH COLLEGES IN INDIA 2023"
                          primaryTypographyProps={{
                            fontSize: 16,
                            fontWeight: "medium",
                            letterSpacing: 0,
                          }}
                        />
                      </ListItemButton>
                    </Link>
                    <Divider />
                  </Grid>
                </Grid>
              </Box>
            </HoverMenu>

            {/* ME Menu   */}
            <HoverMenu
              {...bindPopover(popupState2)}
              anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
              transformOrigin={{ vertical: "top", horizontal: "left" }}
            >
              <Box 
              sx={{ 
                width: "80vw",
                minHeight: "100%",
                maxHeight: "400px",
                // overflowY: "auto",
                transition: "all 0.1s ease 0s",
                transformOrigin: "center top 0px",
                bgcolor:
                  themeMode === true ? "grey.700" : "background.default",
                color: themeMode === true ? "common.white" : "#000",
                my: -1.8,
                py: 0.4,
              }}
              >
                <Grid
                  sx={{ 
                    py:1,
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
                        <Link href="/ME">
                          <ListItemButton sx={{ height: 41 }}>
                            <ListItemIcon sx={{ marginRight: "8px" }}>
                              <MenuBookIcon color="primary" />
                            </ListItemIcon>
                            <ListItemText
                              primary="ME Popular Streams"
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
                          >
                            <ListItemButton
                              // endIcon={<SchoolIcon/>}
                              key={elem.id}
                              sx={{ py: 0, minHeight: 32, 
                                color: themeMode === true
                                ? "common.white"
                                : "#666", }}
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
                </Grid>
              </Box>
            </HoverMenu>

            {/* MBBS Menu   */}
            <HoverMenu
              {...bindPopover(popupState3)}
              anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
              transformOrigin={{ vertical: "top", horizontal: "left" }}
            >
              <Box 
              sx={{ 
                  width: "80vw",
                  minHeight: "100%",
                  maxHeight: "400px",
                  // overflowY: "auto",
                  transition: "all 0.1s ease 0s",
                  transformOrigin: "center top 0px",
                  bgcolor:
                    themeMode === true ? "grey.700" : "background.default",
                  color: themeMode === true ? "common.white" : "#000",
                  my: -1.8,
                  py: 0.4, 
                }}>
                <Grid
                  sx={{ 
                    pb: 0,
                    py:1,
                    bgcolor:
                    themeMode === true ? "grey.700" : "background.default",
                    color: themeMode === true ? "common.white" : "#000",
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
                    <Box sx={{ padding: "0 5px" }}>
                      <ListItem component="div" disablePadding>
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
                              sx={{ py: 0, minHeight: 32, 
                                color: themeMode === true
                                ? "common.white"
                                : "#666", }}
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
                </Grid>
              </Box>
            </HoverMenu>

            {/* MBA Menu  */}
            <HoverMenu
              {...bindPopover(popupState4)}
              anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
              transformOrigin={{ vertical: "top", horizontal: "left" }}
            >
              <Box sx={{ 
                  width: "80vw",
                  minHeight: "100%",
                  maxHeight: "400px",
                  // overflowY: "auto",
                  transition: "all 0.1s ease 0s",
                  transformOrigin: "center top 0px",
                  bgcolor:
                    themeMode === true ? "grey.700" : "background.default",
                    color: themeMode === true ? "common.white": "#666",
                  my: -1.8,
                  py: 0.4,
                }}>
                <Grid
                  sx={{ 
                    pb: 0,
                    py:1,
                    bgcolor:
                    themeMode === true ? "grey.700" : "background.default",
                    color: themeMode === true ? "common.white": "#666",
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
                        <Link href="/MBA">
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
                          >
                            <ListItemButton
                              // endIcon={<SchoolIcon/>}
                              key={elem.id}
                              sx={{ py: 0, minHeight: 32, color: themeMode === true ? "common.white": "#666", }}
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
                  <Grid xs={2} sm={4} md={6} 
                  sx={{  
                    py:1,
                    bgcolor: themeMode === true ? "grey.700" : "background.default",
                    color: themeMode === true ? "common.white": "#666", }}>
                    <Link href="/CollegeListing">
                      <ListItemButton component="a">
                        <ListItemIcon sx={{ marginRight: "8px !important" }}>
                          🔥
                        </ListItemIcon>
                        <ListItemText
                          sx={{ my: 0 }}
                          primary="TOP MBA COLLEGES IN INDIA"
                          primaryTypographyProps={{
                            fontSize: 16,
                            fontWeight: "medium",
                            letterSpacing: 0,
                          }}
                        />
                      </ListItemButton>
                    </Link>
                    <Divider />
                  </Grid>
                </Grid>
              </Box>
            </HoverMenu>

            {/* All Courses   */}
            <HoverMenu
              {...bindMenu(popupState5)}
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              transformOrigin={{ vertical: "top", horizontal: "left" }}
            >
              <Box sx={{
                   width: "80vw",
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
                   display:'flex'
                  }}>
                <Grid sx={{ pb: 0 }} container spacing={{ xs: 0, md: 1 }}>
                  <Grid
                    md={2.3}
                    sx={{ borderRight: "#eee solid 1px" }}
                  >
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
                    <Box display='grid'>

                    {alldegrees.map((elem, ind) => {
                      if (elem.streamid == "3" && ind <= 7) {
                        return (
                          <Link href={`/${elem.name}`}>
                            <ListItemButton
                              // endIcon={<SchoolIcon/>}
                              key={elem.id}
                              sx={{ py: 0, minHeight: 32, color: themeMode === true ? "common.white": "#666", }}
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
                  <Grid items md={2} sx={{ width:'100%' , mx:1 }} >
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
                    <Box display={'grid'}>

                    {alldegrees.map((elem, ind) => {
                      if (elem.streamid == "6" && ind <= 50) {
                        return (
                          <Link href={`/${elem.name}`}>
                            <ListItemButton
                              // endIcon={<SchoolIcon/>}
                              key={elem.id}
                              sx={{ py: 0, minHeight: 32, color: themeMode === true ? "common.white": "#666", }}
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
                  <Grid
                    md={3.5}
                    sx={{ borderRight: "#eee solid 1px" }}
                  >
                    
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
                    <Box display={'grid'} >
                    {alldegrees.map((elem, ind) => {
                      if (elem.streamid == "1" && ind <= 25) {
                        return (
                          <Link href={`/${elem.name}`}>
                            <ListItemButton
                              // endIcon={<SchoolIcon/>}
                              key={elem.id}
                              sx={{ py: 0, minHeight: 32, color: themeMode === true ? "common.white": "#666", }}
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
                  <Grid md={2}   sx={{ borderRight: "#eee solid 1px" }} >
                    
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
                    <Box display='grid'>

                    {alldegrees.map((elem, ind) => {
                      if (elem.streamid == "4" && ind <= 50) {
                        return (
                          <Link href={`/${elem.name}`}>
                            <ListItemButton
                              // endIcon={<SchoolIcon/>}
                              key={elem.id}
                              sx={{ py: 0, minHeight: 32, color: themeMode === true ? "common.white": "#666", }}
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

                  <Grid
                    md={2}
                    sx={{ borderRight: "#eee solid 1px" }}
                  >
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
                            <Link href={`/${elem.name}`}>
                              <ListItemButton
                                // endIcon={<SchoolIcon/>}
                                key={elem.id}
                                onClick={popupState5.close}
                                sx={{ py: 0, minHeight: 32, color: themeMode === true ? "common.white": "#666", }}
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

                  {/* <Grid
                    xs={2}
                    sm={4}
                    md={3}
                    sx={{ borderRight: "#eee solid 1px" }}
                  >
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
                        primary="OTHER STREAMS"
                        primaryTypographyProps={{
                          fontSize: 16,
                          fontWeight: "medium",
                          color: "primary",
                        }}
                      />
                    </ListItemButton>

                    <Divider />

                    <Box sx={{ display: "grid" }}>
                      {alldegrees.map((elem,index) => {
                          if(elem.streamid == "2")
                          {
                            return (
                              <Link
                              href={`/${
                                elem.name
                             }`}      
                              >
                                <ListItemButton
                                  // endIcon={<SchoolIcon/>}
                                  key={elem.id}
                                  sx={{ py: 0, minHeight: 32, color: "#666" }}
                                >
                                  <ListItemText
                                    primary={elem.name +" Colleges"}
                                    primaryTypographyProps={{
                                      fontSize: 14,
                                      fontWeight: "medium",
                                    }}
                                    onClick={(e)=>{setClickedcoursevalue(elem.name)}}
    
                                  />
                                </ListItemButton>
                              </Link>
                            );
                          }
                            
                    })}
                    </Box>

                  
                  </Grid> */}
                </Grid>
              </Box>
            </HoverMenu>
          </Stack>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default MenuPopupState;
