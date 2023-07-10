import * as React from "react";
import { styled } from "@mui/material/styles";
import { Card } from "@/OverViews/Card/Card";
import { CardMedia } from "@/OverViews/Card/CardMedia";
import { CardContent } from "@/OverViews/Card/CardContent";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { Button } from "@/OverViews/Button";
import { useTheme } from "@mui/material/styles";
import { Star, Stack } from "@mui/icons-material";
import DownloadIcon from "@mui/icons-material/Download";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Video from "@/Components/Video/Video1";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import TextField from "@mui/material/TextField";
import { useRouter } from "next/router";
import SchoolIcon from "@mui/icons-material/School";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import FoundationIcon from "@mui/icons-material/Foundation";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PinDropOutlinedIcon from "@mui/icons-material/PinDropOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import AlternateEmailOutlinedIcon from "@mui/icons-material/AlternateEmailOutlined";
import Facilities from "@/Components/Facilities";
import Popular from "@/Components/Popular/Popularmobile";
import Faculty from "@/Components/Faculty/FacultyDesign";
import Link from "next/link";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import Face6Icon from "@mui/icons-material/Face6";
import EmailIcon from "@mui/icons-material/Email";
import Ranking from "@/Components/Ranking/Ranking";
import GalleryRes1 from "@/Components/Gallery/GalleryRes1";
import Design3 from "@/Components/PlacementCompany/Placementmob";
// import Tab from "@/Components/Tab/Tab";
import Tabweb from "@/Components/Tab/Tabweb";

import Gallery from "@/Components/Gallery/MobileView";
import Image from "next/image";
import BreadcrumbsFinal from "@/Components/Breadcrumbs/BreadcrumbsFinal";
import Notification from "@/Components/Notification/Notification";
import EligibilityImg from "/public/Eligibility-Criteria.png";
import Course from "@/Components/Course/Coursemobile";
import { darkLightModeContext } from "@/Layout/Layout";
import Table from "@/OverViews/Table";
import TableRow from "@/OverViews/TableRow";
import TableCell from "@/OverViews/TableCell";
import {
  Box,
  ListItemButton,
  ListItemIcon,
  TableBody,
  TableContainer,
  TableHead,
} from "@mui/material";
import Coursefees from "@/Components/Coursefees/Coursefees";

import MilitaryTechOutlinedIcon from "@mui/icons-material/MilitaryTechOutlined";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import StarIcon from "@mui/icons-material/Star";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SearchIcon from "@mui/icons-material/Search";
import WhatsnewMobile from "@/Components/Whatsnew/WhatsnewMobile";
import ApplicationMobile from "@/Components/Application/ApplicationMobile";
import FacilitiesnewMobile from "@/Components/Facilities/FacilitiesnewMobile";
import RankingnewMobile from "@/Components/Ranking/RankingnewMobile";
import CoursefeesMobile from "@/Components/Coursefees/CoursefeesMobile";
import FacultyDesignMobile from "@/Components/Faculty/FacultyDesignMobile";
import GalleryRes1Mobile from "@/Components/Gallery/GalleryRes1Mobile";
// import Video1Mobile from "@/Components/Video/Video1Mobile";
import Videomob from "@/Components/Video/videogallerymob";
import NotificationsIcon from "@mui/icons-material/Notifications";
import TabMobile from "@/Components/Tab/TabMobile";
import ReviewMobile from "@/Components/Review/ReviewMobile";
import CommentBoxMobile from "@/Components/Comment/CommentBoxMobile";
import PopularMobile from "@/Components/Popular/Popularmobile";
import QAMobile from "@/Components/QA/QAMobile";
import NewsMobile from "@/Components/News/NewsMobile";
import AboutMobile from "../About/AboutMobile";
import { useState } from "react";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import InsertLinkOutlinedIcon from "@mui/icons-material/InsertLinkOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import Drawer from "@mui/material/Drawer";
import { GridContainer } from "@/OverViews/GridContainer";
import { GridItem } from "@/OverViews/GridItem";
import GoogleMapComponent from "../Map/GoogleMap";


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Main({ data, facultyData, placementData }) {
  const router = useRouter();
  const [jsondata, setJsondata] = React.useState(data[0]);
  const [jsondata1, setJsondata1] = React.useState(data);
  const [course, setcourse] = React.useState(data[0].courseandfees);
  const [news, setnews] = React.useState(jsondata.news);

  const [notification, setNotification] = React.useState(data[0].notification);

  const [gallery, setgallery] = React.useState(data[0].gallery);
  const [faculty, setfaculty] = React.useState(data[0].faculty);
  const [reviews, setreviews] = React.useState(data[0].reviews);
  const [degree, setdegree] = React.useState(data[0].degree);
  const [questionsandanswer, setquestionsandanswer] = React.useState(
    data[0].questionsandanswer
  );

  // console.log(degree);

  const [expanded, setExpanded] = React.useState(false);
  const theme = useTheme();
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const themeMode = React.useContext(darkLightModeContext);
  const [isVisible, setIsVisible] = React.useState(false);
  const listenToScroll = () => {
    let heightToHidden = 750;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToHidden) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  };

  React.useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  const [state, setState] = useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: 300, height: "100% !important" , pt:1 }}
      role="banner"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <GridContainer
        xs={12}
        sx={{
          bgcolor: themeMode === true ? "grey.700" : "grey.200",
          color: themeMode === true ? "grey.100" : "grey.700",
        }}
      >
        <GridItem xs={12} sx={{ textAlign: "right" }}>
          <List sx={{ justifyContent: "right", textAlign: "right" }}>
            <Typography
              variant="h6"
              sx={{
                display: "inline-block",
                width: "100%",
                textAlign:'left'
              }}
            >
              Quick Info{" "}
              <Divider
                sx={{
                  width: "45px",
                  border: "2px solid green",
                  borderRadius: "2px",
                }}
              />
            </Typography>
            {data.map((item, ind) => {
              return (
                <>
                  <ListItem
                    sx={{ justifyContent: "right", textAlign: "right" }}
                  >
                    <Box sx={{ padding: "0!important" }}>
                      {item.founder != "" ? (
                        <>
                          <Typography
                            variant="span"
                            sx={{
                              // margin: "5px 0px",
                              fontSize: "14px",
                            }}
                          >
                            Founder <i>{item.founder}</i>,
                          </Typography>
                        </>
                      ) : null}

                      {item.year_start != "" ? (
                        <>
                          <Typography
                            variant="span"
                            sx={{
                              paddingBottom: "5px",
                              margin: "5px 0px 5px 5px",
                              fontSize: "14px",
                            }}
                          >
                            Est. {item.year_start}.
                          </Typography>
                        </>
                      ) : null}

                      {item.collegecode != "" ? (
                        <Typography
                          variant="span"
                          sx={{
                            paddingBottom: "5px",
                            margin: "5px 0px 5px 5px",
                            fontSize: "14px",
                          }}
                        >
                          College Code <>{item.collegecode} </>
                        </Typography>
                      ) : null}
                    </Box>
                  </ListItem>
                  <Divider />
                  <ListItem
                    sx={{ justifyContent: "right", textAlign: "right" }}
                  >
                    <Box>
                      {item.address != "" ? (
                        <>
                          <Typography variant="body2" >{item.address} </Typography>
                        </>
                      ) : null}
                    </Box>
                  </ListItem>
                  <Divider />
                  {/* <ListItem
                    sx={{ justifyContent: "right", textAlign: "right" }}
                  >
                    <Box mt={1}>
                      {item.location != "" ? (
                        <>
                          <IconButton
                            variant="span"
                            sx={{
                              bgcolor: "primary.main",
                              color: "grey.100",
                              mr: 1,
                            }}
                          >
                            <PinDropOutlinedIcon
                              style={{ marginBottom: "-3px", fontSize: "16px" }}
                            />{" "}
                            {item.location}{" "}
                          </IconButton>
                        </>
                      ) : null}
                    </Box>
                  </ListItem> */}
                  <ListItem
                    sx={{ justifyContent: "right", textAlign: "right" }}
                  >
                    <Box>
                      {item.website != "" ? (
                        <>
                          <Typography
                            sx={{
                              color: "#008aa9",
                              fontSize: "14px",
                              display: "flex,",
                              whiteSpace: "nowrap",
                            }}
                          >
                            <Link href={`tel:${item.website}`}>
                              {item.website}
                            </Link>
                          </Typography>
                        </>
                      ) : null}
                    </Box>
                  </ListItem>
                  <ListItem
                    sx={{ justifyContent: "right", textAlign: "right" }}
                  >
                    <Box>
                      {item.email != "" ? (
                        <>
                          <Typography
                            sx={{
                              paddingBottom: "5px",
                              color: "#008aa9",
                              margin: "5px 0px",
                              fontSize: "14px",
                              whiteSpace: "nowrap",
                            }}
                          >
                            <Link href={`mailto:${item.email}`}>
                              {" "}
                              {item.email}
                            </Link>
                          </Typography>
                        </>
                      ) : null}
                    </Box>
                  </ListItem>
                </>
              );
            })}
          </List>
        </GridItem>
        {/* <GridItem xs={2}>
          <List>
            <ListItem>
              <ListItemIcon>
                <IconButton
                  variant="span"
                  sx={{ bgcolor: "primary.main", color: "grey.100", mr: 1 }}
                >
                  <AccountBalanceIcon
                    style={{
                      // marginBottom: "-3px",
                      fontSize: "14px",
                      // marginRight: "5px",
                    }}
                  />
                </IconButton>
              </ListItemIcon>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <IconButton
                  variant="span"
                  sx={{
                    bgcolor: "primary.main",
                    color: "grey.100",
                    mr: 1,
                  }}
                >
                  <LocationOnOutlinedIcon
                    style={{ marginBottom: "-3px", fontSize: "16px" }}
                  />{" "}
                </IconButton>
              </ListItemIcon>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <IconButton
                  variant="span"
                  sx={{
                    bgcolor: "primary.main",
                    color: "grey.100",
                    mr: 1,
                  }}
                >
                  <InsertLinkOutlinedIcon
                    style={{ marginBottom: "-3px", fontSize: "16px" }}
                  />{" "}
                </IconButton>
              </ListItemIcon>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <IconButton
                  variant="span"
                  sx={{
                    bgcolor: "primary.main",
                    color: "grey.100",
                    mr: 1,
                  }}
                >
                  <EmailOutlinedIcon
                    style={{
                      marginBottom: "-3px",
                      fontSize: "16px",
                      // marginLeft: "10px",
                    }}
                  />{" "}
                </IconButton>
              </ListItemIcon>
            </ListItem>
          </List>
        </GridItem> */}
      </GridContainer>
    </Box>
  );

  return (
    <>
      <Card
        sx={{
          borderRadius: "0",
          display: "flex",
          margin: "0px 0px",
          color: "#fff",
          position: "relative",
          backgroundSize: "cover",
          height: "120px",
          borderRadius: "0",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundImage: `url(${jsondata.featured_image})`,
          overflow:'visible'
        }}
      >
       
        {/* <Box
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            background:
              "-moz-linear-gradient(top, transparent 0, rgba(0, 0, 0, 0.9) 87%, rgba(0, 0, 0, 0.9) 100%)",
            background:
              "-webkit-linear-gradient(top, transparent 0, rgba(0, 0, 0, 0.9) 87%, rgba(0, 0, 0, 0.9) 100%)",
            background:
              "linear-gradient(to bottom, transparent 0, rgba(0, 0, 0, 0.9) 87%, rgba(0, 0, 0, 0.9) 100%)",
          }}
        ></Box> */}
 <Box >
          <CardMedia
            component="img"
            sx={{
              zIndex: "99",
              height: "80px",
              width: "80px",
              position: "absolute",
              bottom: "-65px",
              textShadow: "1px 1px 1px rgba(0,0,0, 0.5)",
              background: "#fff",
              border: "#ccc solid 1px",
              margin: "0px 5px 10px 5px",
              padding: "3px",
              borderRadius: "50%",
            }}
            image={`${jsondata.logo}`}
            alt={jsondata.institute_name}
          />
        </Box>
        
        <Box
          sx={{
            width: "100%",
            position: "absolute",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <IconButton color="inherit">  <Typography  sx={{
              background: "rgb(0, 0, 0, 0.6)",
              width: "32px",
              height: "32px",
              padding: "5px",
              borderRadius: "50px",
              fontSize:'12px'
            }}> BE </Typography> </IconButton>
          <Link href={`/`}>
          <IconButton  aria-label="search" color="inherit">
            <ArrowBackIcon
              sx={{
                background: "rgb(0, 0, 0, 0.6)",
                width: "32px",
                height: "32px",
                padding: "5px",
                borderRadius: "50px",
               
              }}
            />
          </IconButton>
          </Link>
        </Box>

      
      </Card>

      <Box
          sx={{
           
            paddingLeft: "95px",
            width: "100%",
            marginTop:'6px'
          }}
        >
          <Typography
            component="div"
            variant="h4"
            // sx={{ textShadow: "1px 1px 1px rgba(0,0,0, 0.5)}" }}
          >
            {jsondata.institute_name}
          </Typography>
          <CardContent
            sx={{
              overflowX: "scroll",
              width: "100%",
              padding: "0",
              whiteSpace: "nowrap",
              paddingBottom: "12px!important",
              color: "text.secondary",
            }}
          >
            {jsondata.affliation != "" ? (
              <Typography
                variant="subtitle2"
                sx={{
                  fontWeight: "normal",
                  marginTop: "6px",
                  color: "text.secondary",
                  fontSize: "12px",
                  // textShadow: "1px 1px 1px rgba(0,0,0, 0.5)",
                  display: "inline-flex",
                  marginRight: "3px",
                }}
              >
                <SchoolIcon
                  style={{
                    marginBottom: "-6px",
                    // textShadow: "1px 1px 1px rgba(0,0,0, 0.5)",
                    color: "text.secondary",
                    marginRight: "5px",
                    fontSize: "14px",
                  }}
                />
                {jsondata.affliation}
              </Typography>
            ) : null}
            {jsondata.accrediation != "" ? (
              <Typography
                variant="subtitle2"
                sx={{
                  fontWeight: "normal",
                  marginTop: "6px",
                  color: "text.secondary",
                  // textShadow: "1px 1px 1px rgba(0,0,0, 0.5)",
                  display: "inline-flex",
                  marginRight: "5px",
                  fontSize: "12px",
                }}
              >
                <MilitaryTechOutlinedIcon
                  style={{
                    marginBottom: "-6px",
                    // textShadow: "1px 1px 1px rgba(0,0,0, 0.5)",
                    color: "text.secondary",
                    marginRight: "3px",
                    fontSize: "14px",
                  }}
                />
                {jsondata.accrediation}
              </Typography>
            ) : null}

            <Typography
              variant="subtitle2"
              sx={{
                fontWeight: "normal",
                marginTop: "6px",
                color: "#f8b81f",
                // textShadow: "1px 1px 1px rgba(0,0,0, 0.5)",
                display: "inline-flex",
                marginRight: "0px",
                fontSize: "12px",
              }}
            >
              <StarIcon
                style={{
                  marginBottom: "-6px",
                  color: "#f8b81f",
                  // textShadow: "1px 1px 1px rgba(0,0,0, 0.5)",
                  marginRight: "3px",
                  fontSize: "14px",
                }}
              />
              4.8 Reviwes
            </Typography>
          </CardContent>
        </Box>

      {/* ------------- Tab Menu */}
      <Box>
        <TabMobile data={data} />
      </Box>

      {/* ------------- Bottom Fixed Apply & Brochure Button */}

      <Card
        sx={{
          position: "fixed",
          borderRadius: "0",
          padding: "5px 0",
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 6,
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
          <Button
            sx={{ width: "48%" }}
            startIcon={<ArrowForwardIcon />}
            variant="contained"
          >
            Apply Now
          </Button>

          <Button
            sx={{ width: "48%" }}
            startIcon={<DownloadIcon />}
            variant="outlined"
          >
            Brochure
          </Button>
        </Box>
      </Card>

      {/* ------------- Here description */}
      <Box sx={{ padding: "1em" }}>
        <AboutMobile data={data} />

        {["right"].map((anchor) => (
          <>
            <Button onClick={toggleDrawer(anchor, true)}>
              {" "}
              <Box className={isVisible ? "quick-btn" : "quick-btn1"}>
                <Typography
                  sx={{
                    color: "black.100",
                    alignItems: "start",
                    mt: -4,
                    mb: -5,
                    pl: 1,
                    borderRadius: "10px 0% 0% 10px",
                    height: "100%",
                    width: "100%",
                    // bgcolor:"grey",
                    pr: 1,
                  }}
                >
                  Quick Info
                </Typography>
              </Box>
            </Button>
            <Drawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
              PaperProps={{
                sx: {
                  width: "85%",
                  height: "50%",
                  top: "0%",
                  borderRadius: "0px 0px 0px 90%",
                  alignItems: "center",
                  pl: 3,
                  bgcolor: themeMode === true ? "grey.700" : "grey.200",
                  color: themeMode === true ? "grey.100" : "grey.700",
                  overflow: "hidden",
                },
              }}
            >
              {list(anchor)}
            </Drawer>
          </>
        ))}

{jsondata.whatsnew != "" ?   <WhatsnewMobile data={data} /> : null}
      </Box>

      <Box
        sx={{
          padding: "1em",
          bgcolor: themeMode === true ? "grey.700" : "#eaeef7",
        }}
      >
        {jsondata.admission_criteria != "" &&
        jsondata.eligibility_criteria != "" &&
        jsondata.application_mode != "" &&
        jsondata.application_fee != "" ? (
          <>
            <ApplicationMobile data={data} />
          </>
        ) : null}

        <Box sx={{ margin: "1em 0" }}>
          <FacilitiesnewMobile data={data} />
        </Box>

        {jsondata.rankings != "" ? <RankingnewMobile data={data} /> : null}
      </Box>

      {jsondata.courseandfees != "" ? <CoursefeesMobile data={data} /> : null}
      {jsondata.faculty != "" ? <FacultyDesignMobile data={data} /> : null}
      {/* ---------------------------------------------------- Placement */}
      {jsondata.placement != "" ? (
        <Design3 dataplacemnets={placementData} />
      ) : null}

      {/* ---------------------------------------------------- Review */}
      {jsondata.reviews != "" ? <ReviewMobile data={data} /> : null}

      {/* ---------------------------------------------------- News */}
      {jsondata.news != "" ? (
        // <NewsMobile data={data}/>
        <Box
          sx={{
            margin: "1em",
            borderRadius: "10px",
          }}
        >
          <Typography
            variant="h5"
            sx={{
              marginBottom: "8px",
              paddingBottom: "3px",
              display: "inline-block",
              borderBottom: "#5bd9bd solid 1px",
            }}
          >
            Latest News
          </Typography>
          <List
            sx={{
              width: "100%",
            }}
          >
            {news.map((item) => {
              return (
                <>
                  <ListItem
                    alignItems="flex-start"
                    sx={{
                      marginTop: "0px",
                      padding: "0px",
                      margin: "1em 0",
                    }}
                  >
                    <Box sx={{ marginRight: "10px" }}>
                      <Image
                        style={{
                          maxWidth: "none",
                          borderRadius: "10px",
                          border: "1px solid #ccc;",
                        }}
                        width={128}
                        height={77}
                        src={item.news_image}
                        alt="image1"
                      />
                    </Box>

                    <ListItemText
                      xs={{ fontSize: "0.6em !important" }}
                      primary={item.news_title}
                    />
                  </ListItem>
                </>
              );
            })}

            <div align="center" id="selbutton">
              <label>
                <Button variant="contained">
                  <KeyboardArrowDownIcon /> More News
                </Button>
              </label>
            </div>
          </List>
        </Box>
      ) : null}

      <Box
        sx={{
          padding: "1em",
          marginBottom: "1em",
          bgcolor: themeMode === true ? "grey.900" : "grey.900",
        }}
      >
        {/* ---------------------------------------------------- Gallery */}

        {jsondata.gallery != "" ? <GalleryRes1Mobile data={data} /> : null}
        {/* ---------------------------------------------------- Video */}
        {jsondata.videos != "" ?
        <Videomob data={data}/>: null}
      </Box>

      {/* --------------------------------------------------- QA */}
      {/* {jsondata.questionsandanswer != "" ? (
                <Box
                  sx={{
                    marginTop: "10px",
                    padding: "20px",
                    boxShadow: "0px 10px 50px 0px rgb(26 46 85 / 7%)",
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      marginBottom: "8px",
                      paddingBottom: "3px",
                      display: "inline-block",
                      borderBottom: "#5bd9bd solid 1px",
                    }}
                  >
                    Question & Answers
                  </Typography>
                  {questionsandanswer.map((item) => {
                    return (
                      <Accordion key={item.courses_id} sx={{ 
                        bgcolor: themeMode === true ? "grey.800" : "grey.200",
                        color: themeMode === true? "grey.200" : "grey.700",
                       }} >
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel1a-content"
                          id={item.question_id}
                        >
                          <Typography variant="h6">{item.question}</Typography>
                        </AccordionSummary>
                        <AccordionDetails key={item.qa_answers_id}>
                          <Typography>{item.answer}</Typography>
                          <Divider sx={{ margin: "10px 0" }} />
                        </AccordionDetails>
                      </Accordion>
                    );
                  })}
                </Box>
              ) : null} */}
      {jsondata.questionsandanswer != "" ? <QAMobile data={data} /> : null}
      {jsondata.map_location != "" ? <GoogleMapComponent data={data}  /> : null}

      {jsondata.comments != "" ? <CommentBoxMobile data={data} /> : null}

      {/* --------------------------------------------------- Related Clg */}

      {jsondata.relatedcolleges != "" ? <PopularMobile data={data} /> : null}

      {/* <Box
                sx={{
                  flexGrow: 1,
                  marginTop: "10px",
                  padding: "10px",
                  boxShadow: "0px 10px 50px 0px rgb(26 46 85 / 7%)",
                }}
              >
                <Popular data={data} />
              </Box> */}

      {/* --------------------------------------------------- Review form */}

      {/* <Box id="selPost" sx={{ flexGrow: 1, marginTop: "10px" }}>
                <h3>Write a Review</h3>
                <form action="/api/form" method="post">
                 

                  <Box
                    sx={{
                      width: 500,
                      margin: "0.5em 0",
                      maxWidth: "100%",
                    }}
                  >
                    <TextField
                      helperText="Please Enter your Name"
                      fullWidth
                      id="first"
                      name="first"
                    />
                  </Box>

                  <Box
                    sx={{
                      width: 500,
                      margin: "0.5em 0",
                      maxWidth: "100%",
                    }}
                  >
                    <TextField
                      helperText="Please Enter your Email"
                      fullWidth
                      id="lasts"
                      name="lasts"
                    />
                  </Box>

                  <Box
                    sx={{
                      width: 500,
                      margin: "0.5em 0",
                      maxWidth: "100%",
                    }}
                  >
                    <TextField
                      helperText="Please Write your Review"
                      fullWidth
                      id="outlined-multiline-flexible"
                      label="Review"
                      multiline
                      maxRows={20}
                    />
                  </Box>

                  <div align="center" id="selbutton">
                    <button type="submit">Submit</button>
                  </div>
                </form>
              </Box> */}
    </>
  );
}
