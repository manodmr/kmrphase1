import Top from "@/Components/Top/Top";
import { Box } from "@/OverViews/Box";
import { styled } from "@mui/material/styles";
import CourseIcon from "@/public/3DImages/CourseIcon.png";

import {
  Grid,
  Typography,
  Paper,
  Divider,
  CardHeader,
  Avatar,
  Rating,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Button,
  Container,
} from "@mui/material";
import HoverMenu from "@/Components/Navigator/HoverMenu";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import { darkLightModeContext } from "@/Layout/Layout";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import SchoolIcon from "@mui/icons-material/School";
import Face6Icon from "@mui/icons-material/Face6";
import EmailIcon from "@mui/icons-material/Email";
import Review1 from "@/Components/Review1/Review1";
import { CardMedia } from "@/OverViews/Card/CardMedia";
import { CardContent } from "@/OverViews/Card/CardContent";
import { Card } from "@/OverViews/Card/Card";
import { GridContainer } from "@/OverViews/GridContainer";
import Placement from "@/Components/PlacementCompany/Placement";
// import Video from "@/Components/Video/Video1";
import Video from "@/Components/Video/videogallery";
import Videomob from "@/Components/Video/videogallerymob"
import FacultyDesign from "@/Components/Faculty/FacultyDesign";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Link from "next/link";
import GalleryRes1 from "@/Components/Gallery/GalleryRes1";
import RankingLeaf from "@/Components/Ranking/RankingLeaf";
// import VideoLeaf from "@/Components/Video/VideoLeaf";

import VideoLeaf from "@/Components/Video/Video2";

import FacultyDesignleaf from "@/Components/Faculty/FacultyDesignleaf";
import DownloadIcon from "@mui/icons-material/Download";
import Image from "next/image";
import qagraphic from "/public/qagraphic.png";
import Carousel from "react-multi-carousel";
import Reviewnewright from "@/Components/Review/Reviewleafright";

// import Table from "@mui/material/Table";
import Table from "@/OverViews/Table";
import TableBody from "@mui/material/TableBody";

// import { tableCellClasses } from "@mui/material/TableCell";
import TableCell from "@/OverViews/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Stack } from "@/OverViews/Stack";
import { GridItem } from "@/OverViews/GridItem";
import CommentBox from "@/Components/Comment/CommentBox";
import TabMobile from "@/Components/Tab/TabMobile";
import CommentBoxMobile from "@/Components/Comment/CommentBoxMobile";
import CoursefeesMobileLeaf from "@/Components/Coursefees/CoursefeesMobileLeaf";
import ReviewMobile from "@/Components/Review/ReviewMobile";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import feesbg from "/public/feesbg.png";
import nodatacourse from "/public/nodataforcourse&fees.jpg";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import DoneIcon from "@mui/icons-material/Done";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CardActions } from "@/OverViews/Card/CardActions";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import ShareIcon from "@mui/icons-material/Share";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { InputBase, InputAdornment } from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";
import TopBannerNew from "@/Components/Top/TopBannerNew";
import Reviewleaf from "@/Components/Review/Reviewleaf";
import Newsleaf from "@/Components/News/Newsleaf";
// import Topmobileleaf from "@/Components/Top/Topmobileleaf";


const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
};
const Leaf = ({ detailData }) => {
  const router = useRouter();
  // console.log("Review :" + detailData);
  const [jsondata, setJsondata] = React.useState(detailData[0]);
  const [jsondata1, setJsondata1] = React.useState(detailData);

  const [course, setCourse] = React.useState(jsondata.courseandfees);
  const [reviews, setReviews] = React.useState(jsondata.reviews);
  const [placement, setPlacement] = React.useState(jsondata.placement);
  const [comments, setComments] = React.useState(jsondata.comments);
  const [jsondataq, setjsondataq] = React.useState(jsondata.questionsandanswer);

  const [gallery, setGallery] = React.useState(jsondata.gallery);
  const [videos, setVideos] = React.useState(jsondata.videos);
  const [news, setnews] = React.useState(jsondata.news);
  const [notification, setNotification] = React.useState(jsondata.notification);

  const [questionsandanswer, setquestionsandanswer] = React.useState(
    jsondata.questionsandanswer
  );

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  const themeMode = useContext(darkLightModeContext);

  const [searchcourse, setSearchcourse] = useState("");
  console.log(searchcourse);
  const [storecoursesearchdata, setStorecoursesearchdata] = useState([]);

  useEffect(() => {
    const filter = course.filter((item, index) => {
      if (searchcourse.trim() == "") {
        return item;
      } else if (
        item.course_name.toLowerCase().includes(searchcourse.toLowerCase()) ||
        item.degree_name
          .replace(/\./g, "")
          .toLowerCase()
          .includes(searchcourse.toLowerCase()) ||
        item.degree_name.toLowerCase().includes(searchcourse.toLowerCase()) ||
        item.courses_short_name
          .toLowerCase()
          .includes(searchcourse.toLowerCase())
      ) {
        return item;
      }
    });

    setStorecoursesearchdata(filter);
  }, [searchcourse]);

  // console.log(storecoursesearchdata);

  return (
    <div>
      <Head>
        <title>{router.query.leaf} Page</title>
        <meta name="description" content="Educational News" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/pen.png" />
      </Head>
      <Stack width="100%">
        <Stack
          sx={{
            display: { xs: "none", md: "block" },
          }}
        >
          <HoverMenu />
        </Stack>
        <Container fixed>
        <Stack
          sx={{
            display: { xs: "block", md: "block" },
          }}
        >
        <TopBannerNew data={detailData} />
        </Stack>
         {/* <Stack
          sx={{
            display: { xs: "block", md: "none" },
          }}
        >
        <Topmobileleaf data={detailData}/> 
          </Stack>  */}

        {/* ------------- Tab Menu */}
        <Box
          sx={{
            display: { xs: "block", md: "none" },
          }}
        >
          <TabMobile />
        </Box>
<Card sx={{margin:'1.5em 0'}}>
        <GridContainer >
          <Grid item xs={12} md={8} lg={8}>
            {/* ---------------------------------- Course & Fees */}
            {router.query.leaf === "courses-fees" ? (
              <>
                {/* --------------------Desktop */}
                <Stack
                  sx={{
                    display: { xs: "none", md: "block" },
                    margin:'1em'
                  }}
                >
                  <Box
                    sx={{
                      margin: "0px 0px 0 0",
                      // padding: "0px 0px 0px 15px",
                      display:'flex',
                      justifyContent:'space-between'
                    }}
                  >   
                    
                        {/* Search bar for course  */}
                     
                          <Box>
                            <Typography
                              variant="h6"
                              sx={{
                                marginBottom: "8px",
                                paddingBottom: "3px",
                                display: "inline-block",
                                width: "100%",
                              }}
                            >
                              Courses and Fees & Eligibility{" "}
                              <Divider
                                sx={{
                                  width: "50px",
                                  border: "2px solid green",
                                  borderRadius: "2px",
                                }}
                              />
                            </Typography>

                            <InputBase
                              type="search"
                              onChange={(e) => {
                                setSearchcourse(e.target.value);
                              }}
                              placeholder={`Find your Courses, Degree here...`}
                              sx={{
                                width: "45vw",
                                height: "40px",
                                maxHeight: { md: "100%", xs: "100vh" },
                                border: "1px solid grey",
                                pl: "5px",
                                px: "5px",
                                mt: "10px",
                                borderRadius: "30px",
                                fontSize: { md: "12px", sm: "10px" },
                                alignItems: "center",
                                justifyContent: "center",
                                color:
                                  themeMode === true
                                    ? "grey.400"
                                    : "common.black",
                                display: { md: "flex", sm: "none" },
                              }}
                              startAdornment={
                                <InputAdornment>
                                  <SearchIcon
                                    color="black"
                                    sx={{
                                      color: "primary.main",
                                      mr: 1,
                                      ml: 2,
                                      fontSize: { md: "15px", sm: "20px" },
                                    }}
                                  />
                                </InputAdornment>
                              }
                            />
                          </Box>

                         <Image
                            width={130}
                            style={{ objectFit: "cover" }}
                            src={CourseIcon}
                          />
                          </Box>
                      

                    <Box
                      sx={{
                        bgcolor:
                          themeMode === true ? "grey.800" : "transparent",
                        color: themeMode === true ? "common.white" : "grey.700",
                        paddingBottom: "10px",
                        '&:hover':{
                          boxShadow: "none",
                          stroke:'none',
                        }
                        // boxShadow: "0px 10px 50px 0px rgb(26 46 85 / 7%)",
                      }}
                    >
                      <GridContainer spacing={2} >
                        {storecoursesearchdata.map((itemnews, index) => {
                          return (
                              <Grid item md={6} lg={6}>
                                <Box
                                  sx={{
                                    borderRadius: "5px",
                                    padding: "10px",
                                    marginBottom: "5px",
                                    bgcolor:
                                      themeMode === true
                                        ? "grey.900"
                                        : "#ffffff",
                                    color:
                                      themeMode === true
                                        ? "common.white"
                                        : "grey.700",
                                    boxShadow:
                                      "0px 10px 50px 0px rgb(26 46 85 / 7%)",
                                  }}
                                >
                                  <Typography
                                  fontWeight="bold"
                                    component="div"
                                    fontSize="15px"
                                    sx={{ color: themeMode === true ? "grey.100" : "#4a6280", }}
                                  >
                                    {itemnews.course_name}
                                  </Typography>

                                  <Typography
                                    variant="subtitle2"
                                    sx={{
                                      fontWeight: "normal",
                                      // marginTop: "8px",
                                      color: "primary.main",
                                      display: "inline-flex",
                                      marginRight: "10px",
                                      fontSize:"13px"
                                    }}
                                  >
                                    <MenuBookIcon
                                      style={{
                                        marginBottom: "-3px",
                                        color: "#52627b",
                                        marginRight: "5px",
                                      }}
                                    />
                                    {itemnews.degree_name}
                                  </Typography>

                                  <Typography
                                    variant="subtitle2"
                                    sx={{
                                      fontWeight: "normal",
                                      marginTop: "8px",
                                      color: "#52627b",
                                      display: "inline-flex",
                                      marginRight: "10px",
                                      fontSize:"13px"
                                    }}
                                  >
                                    <SchoolIcon
                                      style={{
                                        marginBottom: "-3px",

                                        marginRight: "5px",
                                      }}
                                    />
                                    {itemnews.degrees_level}
                                  </Typography>
                                  <Typography
                                    variant="subtitle2"
                                    sx={{
                                      fontWeight: "normal",
                                      marginTop: "8px",
                                      color: "#52627b",
                                      display: "inline-flex",
                                      fontSize:"13px",
                                      marginRight: "10px",
                                    }}
                                  >
                                    <AccessTimeIcon
                                      style={{
                                        marginBottom: "-3px",

                                        marginRight: "5px",
                                      }}
                                    />
                                    {itemnews.courses_duration} Years
                                  </Typography>

                                  <Typography
                                    variant="subtitle2"
                                    sx={{
                                      fontWeight: "normal",
                                      marginTop: "8px",
                                      color: "primary.main",
                                      display: "inline-flex",
                                      fontSize:"13px"
                                    }}
                                  >
                                    <DoneIcon
                                      style={{
                                        marginBottom: "-3px",
                                        color: "#52627b",
                                        marginRight: "5px",
                                      }}
                                    />
                                    On-Campus
                                  </Typography>

                                  <Typography
                                    variant="h4"
                                    sx={{
                                      fontWeight: "normal",
                                      fontWeight: "bold",
                                      marginTop: "8px",
                                      color: "#f8b81f",
                                      display: "inline-flex",
                                      marginRight: "15px",
                                    }}
                                  >
                                    <Rating
                                      size="small"
                                      sx={{
                                        marginTop: "5px",
                                        marginRight: "5px",
                                      }}
                                      name="half-rating"
                                      defaultValue={4.8}
                                      precision={0.5}
                                    />{" "}
                                    <Typography
                                      variant="subtitle1"
                                      sx={{
                                        color: "#0199a4",
                                        marginLeft: "0px",
                                        marginTop: "2px",
                                        fontWeight: "normal",
                                      }}
                                    >
                                      4.8 Reviews
                                    </Typography>
                                  </Typography>

                                  <Divider />

                                  <Typography
                                    component="div"
                                    // variant="h6"
                                    sx={{
                                      color: "#4a6280",
                                      fontWeight: "normal",
                                      margin: "0.5em 0",
                                      fontSize:"14px"
                                    }}
                                  >
                                    Eligibility :{" "}
                                    {itemnews.course_master_eligibility}
                                  </Typography>

                                  <Grid container spacing={2}>
                                    <Grid
                                      item
                                      xs={4}
                                      sx={{ paddingLeft: "0px !important" }}
                                    >
                                      <Typography
                                        // variant="h6"
                                        sx={{
                                          lineHeight: "2",
                                          color: "#4b6184",
                                          fontWeight: "600",
                                          display: "inline-flex",
                                          fontSize:"13px"
                                        }}
                                      >
                                        Rs.{" "}
                                        <Typography
                                          // variant="h4"
                                          sx={{
                                            fontWeight: "600",
                                            color: "#4b6184",
                                            display: "inline-flex",
                                            fontSize:"18px"
                                          }}
                                        >
                                          {itemnews.course_master_fees}
                                        </Typography>
                                      </Typography>
                                    </Grid>
                                    <Grid item xs={8}>
                                      <Button
                                        size="small"
                                        variant="outlined"
                                        sx={{
                                          textTransform: "uppercase",
                                          padding: "6px 8px",
                                        }}
                                      >
                                        <DownloadIcon
                                          sx={{ marginRight: "5px" }}
                                        />{" "}
                                        Download Brochure
                                      </Button>
                                    </Grid>
                                    <Typography
                                      component="div"
                                      variant="subtitle2"
                                      sx={{
                                        color: "#b1bcc6",
                                        fontWeight: "normal",
                                        marginTop: "-10px",
                                      }}
                                    >
                                      Master Fees
                                    </Typography>
                                  </Grid>
                                </Box>
                              </Grid>
                          );
                        })}
                        {storecoursesearchdata.length == 0 ? (
                          <Box
                            display="grid"
                            sx={{
                              justifyContent: "center",
                              alignItems: "center",
                              width: "100vw",
                            }}
                          >
                            <Image
                              width={200}
                              style={{ objectFit: "cover" }}
                              src={nodatacourse}
                            />
                          </Box>
                        ) : null}
                      </GridContainer>
                    </Box>

                  

                </Stack>

                {/* -------------------Mobile --------------------------------------- */}
                <Stack
                  sx={{
                    display: { xs: "block", md: "none" },
                    margin: "0px",
                    padding: "0px 15px 0px 0px",
                  }}
                >
                  {/* mobile values  */}
                  <Stack
                    sx={{
                      display: { xs: "block", md: "none" },
                    }}
                  >
                       <Box
                    sx={{
                      margin: "0px 0px 0 0",
                      padding: "0px 0px 0px 15px",
                    }}
                  >
                    <Grid container display="flex" mb={3}>
                      <Grid
                        item
                        lg={9}
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                      >
                        {/* Search bar for course  */}
                        <Stack>
                          <Box
                            sx={{
                              borderRadius: "6px",
                              justifyContent: "center",
                              display: "grid",
                              // margin: "10px auto",
                            }}
                          >
                            <Typography
                              variant="h6"
                              sx={{
                                marginBottom: "8px",
                                paddingBottom: "3px",
                                display: "inline-block",
                                width: "100%",
                              }}
                            >
                              Courses and Fees & Eligibility{" "}
                              <Divider
                                sx={{
                                  width: "50px",
                                  border: "2px solid green",
                                  borderRadius: "2px",
                                }}
                              />
                            </Typography>

                            <InputBase
                              type="search"
                              onChange={(e) => {
                                setSearchcourse(e.target.value);
                              }}
                              placeholder={`Find your Courses, Degree here...`}
                              sx={{
                                // width: "60vw",
                                height: "40px",
                                maxHeight: { md: "100%", xs: "100vh" },
                                border: "1px solid grey",
                                pl: "5px",
                                px: "5px",
                                mt: "20px",
                                borderRadius: "30px",
                                fontSize: { md: "12px", sm: "10px" },
                                alignItems: "center",
                                justifyContent: "center",
                                color:
                                  themeMode === true
                                    ? "grey.400"
                                    : "common.black",
                                display: { md: "flex", sm: "none" },
                              }}
                              startAdornment={
                                <InputAdornment>
                                  <SearchIcon
                                    color="black"
                                    sx={{
                                      color: "primary.main",
                                      mr: 1,
                                      ml: 2,
                                      fontSize: { md: "15px", sm: "20px" },
                                    }}
                                  />
                                </InputAdornment>
                              }
                            />
                          </Box>
                        </Stack>
                      </Grid>

                      <Grid item lg={3} mt={-4}>
                        <Box sx={{ position: "absolute" }}>
                          <Image
                            width={150}
                            style={{ objectFit: "cover" }}
                            src={CourseIcon}
                          />
                        </Box>
                      </Grid>
                    </Grid>

                    <Box
                      sx={{
                        borderRadius: "5px",

                        bgcolor:
                          themeMode === true ? "grey.800" : "transparent",
                        color: themeMode === true ? "common.white" : "grey.700",
                        paddingBottom: "10px",
                        '&:hover':{
                          boxShadow: "none",
                          stroke:'none',
                        }
                        // boxShadow: "0px 10px 50px 0px rgb(26 46 85 / 7%)",
                      }}
                    >
                      <Grid container sx={{ marginTop: "10px" }} spacing={2} >
                        {storecoursesearchdata.map((itemnews, index) => {
                          return (
                              <Grid item md={6} lg={6}>
                                <Box
                                  sx={{
                                    borderRadius: "5px",
                                    padding: "10px",
                                    marginBottom: "5px",
                                    bgcolor:
                                      themeMode === true
                                        ? "grey.900"
                                        : "#ffffff",
                                    color:
                                      themeMode === true
                                        ? "common.white"
                                        : "grey.700",
                                    boxShadow:
                                      "0px 10px 50px 0px rgb(26 46 85 / 7%)",
                                  }}
                                >
                                  <Typography
                                  fontWeight="bold"
                                    component="div"
                                    fontSize="15px"
                                    sx={{ color: "#4a6280" }}
                                  >
                                    {itemnews.course_name}
                                  </Typography>

                                  <Typography
                                    variant="subtitle2"
                                    sx={{
                                      fontWeight: "normal",
                                      marginTop: "8px",
                                      color: "#0199a4",
                                      display: "inline-flex",
                                      marginRight: "10px",
                                      fontSize:"13px"
                                    }}
                                  >
                                    <MenuBookIcon
                                      style={{
                                        marginBottom: "-10px",
                                        color: "#52627b",
                                        marginRight: "5px",
                                      }}
                                    />
                                    {itemnews.degree_name}
                                  </Typography>

                                  <Typography
                                    variant="subtitle2"
                                    sx={{
                                      fontWeight: "normal",
                                      marginTop: "8px",
                                      color: "#52627b",
                                      display: "inline-flex",
                                      marginRight: "10px",
                                      fontSize:"13px"
                                    }}
                                  >
                                    <SchoolIcon
                                      style={{
                                        marginBottom: "-6px",

                                        marginRight: "5px",
                                      }}
                                    />
                                    {itemnews.degrees_level}
                                  </Typography>
                                  <Typography
                                    variant="subtitle2"
                                    sx={{
                                      fontWeight: "normal",
                                      marginTop: "8px",
                                      color: "#52627b",
                                      display: "inline-flex",
                                      fontSize:"13px",
                                      marginRight: "10px",
                                    }}
                                  >
                                    <AccessTimeIcon
                                      style={{
                                        marginBottom: "-6px",

                                        marginRight: "5px",
                                      }}
                                    />
                                    {itemnews.courses_duration} Years
                                  </Typography>

                                  <Typography
                                    variant="subtitle2"
                                    sx={{
                                      fontWeight: "normal",
                                      marginTop: "8px",
                                      color: "#0199a4",
                                      display: "inline-flex",
                                      fontSize:"13px"
                                    }}
                                  >
                                    <DoneIcon
                                      style={{
                                        marginBottom: "-6px",
                                        color: "#52627b",
                                        marginRight: "5px",
                                      }}
                                    />
                                    On-Campus
                                  </Typography>

                                  <Typography
                                    variant="h4"
                                    sx={{
                                      fontWeight: "normal",
                                      fontWeight: "bold",
                                      marginTop: "8px",
                                      color: "#f8b81f",
                                      display: "inline-flex",
                                      marginRight: "15px",
                                    }}
                                  >
                                    <Rating
                                      size="small"
                                      sx={{
                                        marginTop: "5px",
                                        marginRight: "5px",
                                      }}
                                      name="half-rating"
                                      defaultValue={4.8}
                                      precision={0.5}
                                    />{" "}
                                    <Typography
                                      variant="subtitle1"
                                      sx={{
                                        color: "#0199a4",
                                        marginLeft: "0px",
                                        marginTop: "2px",
                                        fontWeight: "normal",
                                      }}
                                    >
                                      4.8 Reviews
                                    </Typography>
                                  </Typography>

                                  <Divider />

                                  <Typography
                                    component="div"
                                    // variant="h6"
                                    sx={{
                                      color: "#4a6280",
                                      fontWeight: "normal",
                                      margin: "0.5em 0",
                                      fontSize:"14px"
                                    }}
                                  >
                                    Eligibility :{" "}
                                    {itemnews.course_master_eligibility}
                                  </Typography>

                                  <Grid container spacing={2}>
                                    <Grid
                                      item
                                      xs={4}
                                      sx={{ paddingLeft: "0px !important" }}
                                    >
                                      <Typography
                                        // variant="h6"
                                        sx={{
                                          lineHeight: "2",
                                          color: "#4b6184",
                                          fontWeight: "600",
                                          display: "inline-flex",
                                          fontSize:"13px"
                                        }}
                                      >
                                        Rs.{" "}
                                        <Typography
                                          // variant="h4"
                                          sx={{
                                            fontWeight: "600",
                                            color: "#4b6184",
                                            display: "inline-flex",
                                            fontSize:"18px"
                                          }}
                                        >
                                          {itemnews.course_master_fees}
                                        </Typography>
                                      </Typography>
                                    </Grid>
                                    <Grid item xs={8}>
                                      <Button
                                        size="small"
                                        variant="outlined"
                                        sx={{
                                          textTransform: "uppercase",
                                          padding: "6px 8px",
                                        }}
                                      >
                                        <DownloadIcon
                                          sx={{ marginRight: "5px" }}
                                        />{" "}
                                        Download Brochure
                                      </Button>
                                    </Grid>
                                    <Typography
                                      component="div"
                                      variant="subtitle2"
                                      sx={{
                                        color: "#b1bcc6",
                                        fontWeight: "normal",
                                        marginTop: "-10px",
                                      }}
                                    >
                                      Master Fees
                                    </Typography>
                                  </Grid>
                                </Box>
                              </Grid>
                          );
                        })}
                        {storecoursesearchdata.length == 0 ? (
                          <Box
                            display="grid"
                            sx={{
                              justifyContent: "center",
                              alignItems: "center",
                              width: "100vw",
                            }}
                          >
                            <Image
                              width={200}
                              style={{ objectFit: "cover" }}
                              src={nodatacourse}
                            />
                          </Box>
                        ) : null}
                      </Grid>
                    </Box>

                    <Link
                      style={{ display: "block", width: "100%" }}
                      href={`/${router.query.collegelist}/${router.query.college}/courses-fees`}
                    >
                      {" "}
                    </Link>
                  </Box>
                  </Stack>
                </Stack>
              </>
            ) : null}

            {/* ----------------------------------Review */}
            {router.query.leaf === "reviews" ? (
              <>
                {/* -----------------Desktop */}
                <Reviewleaf detailData={detailData}/>
                

                {/* -------------------Mobile */}
                <Stack
                  sx={{
                    display: { xs: "block", md: "none" },
                  }}
                >
                  {/* mobile values  */}
                  <Reviewleaf detailData={detailData}/>
                
                </Stack>
              </>
            ) : null}
            {/* ----------------------------------Placement */}
            {router.query.leaf === "placement" ? (
              <>
                {/* --------------Desktop */}
                <Box
                  sx={{
                    padding: "20px",
                    boxShadow: "0px 10px 50px 0px rgb(26 46 85 / 7%)",
                    display: { xs: "none", md: "block" },
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      marginBottom: "20px",
                      paddingBottom: "3px",
                      display: "inline-block",
                      borderBottom: "#5bd9bd solid 1px",
                    }}
                  >
                    Placement
                  </Typography>
                  <GridContainer spacing={4} sx={{ background: "transparent" }}>
                    {placement.map((jsondata, index) => {
                      return (
                        <>
                          <Grid item xs={4}>
                            <Card sx={{ marginBottom: "1em" }}>
                              <CardMedia
                                sx={{ padding: "15px" }}
                                component="img"
                                image={jsondata.company_logo}
                                alt={jsondata.company_name}
                              />
                              <CardContent
                                sx={{
                                  margin: "0 auto",
                                  borderTop: "#eee solid 1px",
                                  textAlign: "center",
                                }}
                              >
                                <Typography variant="h7" fontWeight="normal">
                                  {jsondata.company_name}
                                </Typography>
                              </CardContent>
                            </Card>
                          </Grid>
                        </>
                      );
                    })}
                  </GridContainer>
                </Box>
                {/* -------------------Mobile */}
                <Stack
                  sx={{
                    display: { xs: "block", md: "none" },
                  }}
                >
                  {/* mobile values  */}
                  <Box
                    sx={{
                      padding: "20px",
                      boxShadow: "0px 10px 50px 0px rgb(26 46 85 / 7%)",
                      display: { xs: "block", md: "none" },
                    }}
                  >
                    {/* <Placement dataplacemnets={placementData}/> */}
                    <Typography
                      variant="h5"
                      sx={{
                        marginBottom: "24px",
                        paddingBottom: "3px",
                        display: "inline-block",
                        borderBottom: "#5bd9bd solid 1px",
                      }}
                    >
                      Placement
                    </Typography>
                    <GridContainer spacing={3}>
                      {placement.map((jsondata, index) => {
                        return (
                          <>
                            <Grid item xs={6}>
                              <Card sx={{ marginBottom: "1em" }}>
                                <CardMedia
                                  sx={{ padding: "15px" }}
                                  component="img"
                                  image={jsondata.company_logo}
                                  alt={jsondata.company_name}
                                />
                                <CardContent
                                  sx={{
                                    margin: "0 auto",
                                    borderTop: "#eee solid 1px",
                                    textAlign: "center",
                                  }}
                                >
                                  <Typography variant="h7" fontWeight="normal">
                                    {jsondata.company_name}
                                  </Typography>
                                </CardContent>
                              </Card>
                            </Grid>
                          </>
                        );
                      })}
                    </GridContainer>
                  </Box>
                </Stack>
              </>
            ) : null}
            {/* ----------------------------------Rankings */}
            {router.query.leaf === "rankings" ? (
              <>
                {/* ---------------------Desktop */}
                <Box
                  sx={{
                    padding: "20px",
                    boxShadow: "0px 10px 50px 0px rgb(26 46 85 / 7%)",
                    display: { xs: "none", md: "block" },
                  }}
                >
                  <RankingLeaf data={detailData} />
                </Box>
                {/* -------------------Mobile */}
                <Stack
                  sx={{
                    display: { xs: "block", md: "none" },
                  }}
                >
                  {/* mobile values  */}
                  <Box
                    sx={{
                      padding: "20px",
                      boxShadow: "0px 10px 50px 0px rgb(26 46 85 / 7%)",
                      display: { xs: "block", md: "none" },
                    }}
                  >
                    <RankingLeaf data={detailData} />
                  </Box>
                </Stack>
              </>
            ) : null}
            {/* ---------------------------------- Gallery */}
            {router.query.leaf === "gallery" ? (
              <>
                {/* ---------------------Desktop */}
                <Box
                  sx={{
                    padding: "20px",
                    boxShadow: "0px 10px 50px 0px rgb(26 46 85 / 7%)",
                    display: { xs: "none", md: "block" },
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      marginBottom: "24px",
                      paddingBottom: "3px",
                      display: "inline-block",
                      borderBottom: "#5bd9bd solid 1px",
                    }}
                  >
                    Gallery
                  </Typography>

                  <GridContainer sx={{ margin: "0 auto" }}>
                    <Grid
                      item
                      xs={12}
                      md={12}
                      lg={12}
                      sx={{ margin: "0 auto" }}
                    >
                      {gallery.map((jsondata, index) => {
                        return (
                          <>
                            <Card sx={{ width: "100%", marginBottom: "1em" }}>
                              <CardMedia
                                component="img"
                                image={jsondata.gallery_images}
                                alt="Paella dish"
                              />
                              <CardContent
                                sx={{
                                  background: "#0093AB",
                                  color: "#fff",
                                  padding: "10px 8px !important",
                                }}
                              >
                                <Typography variant="h6" fontWeight="normal">
                                  {jsondata.category_name}
                                </Typography>
                              </CardContent>
                            </Card>
                          </>
                        );
                      })}
                    </Grid>
                  </GridContainer>
                </Box>
                {/* -------------------Mobile */}
                <Stack
                  sx={{
                    display: { xs: "block", md: "none" },
                  }}
                >
                  {/* mobile values  */}
                  <Box
                    sx={{
                      padding: "20px",
                      boxShadow: "0px 10px 50px 0px rgb(26 46 85 / 7%)",
                    }}
                  >
                    <Typography
                      variant="h5"
                      sx={{
                        marginBottom: "24px",
                        paddingBottom: "3px",
                        display: "inline-block",
                        borderBottom: "#5bd9bd solid 1px",
                      }}
                    >
                      Gallery
                    </Typography>

                    <GridContainer sx={{ margin: "0 auto" }}>
                      <Grid
                        item
                        xs={12}
                        md={12}
                        lg={12}
                        sx={{ margin: "0 auto" }}
                      >
                        {gallery.map((jsondata, index) => {
                          return (
                            <>
                              <Card sx={{ width: "100%", marginBottom: "1em" }}>
                                <CardMedia
                                  component="img"
                                  image={jsondata.gallery_images}
                                  alt="Paella dish"
                                />
                                <CardContent
                                  sx={{
                                    background: "#0093AB",
                                    color: "#fff",
                                    padding: "10px 8px !important",
                                  }}
                                >
                                  <Typography variant="h6" fontWeight="normal">
                                    {jsondata.category_name} 
                                   
                                  </Typography>
                                </CardContent>
                              </Card>
                            </>
                          );
                        })}
                      </Grid>
                    </GridContainer>
                  </Box>
                </Stack>
              </>
            ) : null}

            {/* ---------------------------------- Faculty */}
            {router.query.leaf === "faculty" ? (
              <>
                {/* ----------------------------Desktop */}
                <Box
                  sx={{
                    padding: "20px",
                    boxShadow: "0px 10px 50px 0px rgb(26 46 85 / 7%)",
                    display: { xs: "none", md: "block" },
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      marginBottom: "24px",
                      paddingBottom: "3px",
                      display: "inline-block",
                      borderBottom: "#5bd9bd solid 1px",
                    }}
                  >
                    Faculty
                  </Typography>
                  <FacultyDesignleaf data={detailData} />
                </Box>
                {/* -------------------Mobile */}
                <Stack
                  sx={{
                    display: { xs: "block", md: "none" },
                  }}
                >
                  {/* mobile values  */}
                  <Box
                    sx={{
                      padding: "20px",
                      boxShadow: "0px 10px 50px 0px rgb(26 46 85 / 7%)",
                      display: { xs: "block", md: "none" },
                    }}
                  >
                    <Typography
                      variant="h5"
                      sx={{
                        marginBottom: "24px",
                        paddingBottom: "3px",
                        display: "inline-block",
                        borderBottom: "#5bd9bd solid 1px",
                      }}
                    >
                      Faculty
                    </Typography>
                    <FacultyDesignleaf data={detailData} />
                  </Box>
                </Stack>
              </>
            ) : null}

            {/* ---------------------------------- News */}
            {router.query.leaf === "news" ? (
              <>
                {/* -----------------Desktop */}
                <Newsleaf data={detailData}/>
                {/* -------------------Mobile */}
                <Stack
                  sx={{
                    display: { xs: "block", md: "none" },
                  }}
                >
                  {/* mobile values  */}
                  <Box
                    sx={{
                      marginTop: "10px",
                      padding: "20px",
                      boxShadow: "0px 10px 50px 0px rgb(26 46 85 / 7%)",
                      display: { xs: "block", md: "none" },
                    }}
                  >
                    <Typography
                      variant="h5"
                      sx={{
                        marginBottom: "24px",
                        paddingBottom: "3px",
                        display: "inline-block",
                        borderBottom: "#5bd9bd solid 1px",
                      }}
                    >
                      News
                    </Typography>

                    <Divider sx={{ marginBottom: "5px" }} />
                    {news.map((jsondata) => {
                      return (
                        <>
                          <CardHeader
                            sx={{ alignItems: "self-start" }}
                            avatar={
                              <Avatar
                                sx={{
                                  borderRadius: "8px",
                                  border: "#eee solid 1px",
                                  width: "100px",
                                  height: "75px",
                                }}
                                src={`${jsondata.news_image}`}
                              />
                            }
                            title={
                              <Typography
                                sx={{ fontSize: "14px", fontWeight: "600" }}
                              >
                                {jsondata.news_title}
                              </Typography>
                            }
                            subheader={jsondata.news_publish_date}
                            style={{
                              fontSize: "12px",
                              padding: "8px 0px 8px 0",
                            }}
                          />
                          <Divider />
                        </>
                      );
                    })}
                  </Box>
                </Stack>
              </>
            ) : null}

            {/* ---------------------------------- Question & Answers */}
            {router.query.leaf === "qna" ? (
              <>
                {/* -------------------------------Desktop */}
                <Box
                  sx={{
                    width: "100%",
                    padding: { xs: "1em 1em 1em 1em", md: "1em 0 1em 1em" },
                    margin: "0",
                    bgcolor: themeMode === true ? "grey.800" : "#f4f6f8",
                    // background:"#f7f0e8"
                  }}
                >
                  <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Box>
                      <Link
                        style={{ display: "block", width: "100%" }}
                        href={`/${router.query.collegelist}/${router.query.college}/qna`}
                      >
                        <Typography
                          variant="h4"
                          sx={{
                            marginBottom: "0px",
                            paddingBottom: "0px",
                            display: "inline-block",
                          }}
                        >
                          Questions and Answer
                        </Typography>
                      </Link>
                    </Box>

                    <Image
                      width={50}
                      height={50}
                      src={qagraphic}
                      style={{ margin: "0 20px 0px  0" }}
                    />
                  </Box>

                  {jsondataq.map((item) => {
                    return (
                      <>
                        <Card
                          sx={{
                            padding: "1em 0 1em 1em",
                            marginBottom: "10px",
                          }}
                          key={item.question_id}
                        >
                          <Link
                            href={`/${router.query.collegelist}/${router.query.college}/qna`}
                            key={item.qa_answers_id}
                          >
                            <Typography sx={{ fontWeight: "bold" }}>
                              {item.question.length > 80
                                ? `${item.question.substring(0, 80)}...`
                                : item.question}
                              {/* {item.question} */}
                            </Typography>

                            <Box key={item.courses_id}>
                              <CardHeader
                                sx={{ margin: "0", padding: "5px 0 " }}
                                avatar={
                                  <Avatar
                                    aria-label={item.user_name}
                                    alt={item.user_name}
                                    src="/broken-image.jpg"
                                  />
                                }
                                action={
                                  <IconButton aria-label="settings">
                                    <MoreVertIcon
                                      sx={{ marginRight: "15px" }}
                                    />
                                  </IconButton>
                                }
                                title={item.user_name}
                                titleTypographyProps={{ fontWeight: "normal" }}
                                subheader={`${item.courses_duration} Years Course `}
                                subheaderTypographyProps={{
                                  margin: "0",
                                  color:
                                    themeMode === true
                                      ? "grey.400"
                                      : "grey.700",
                                }}
                              />

                              {/* <IconButton sx={{flex:'0 0 auto'}} aria-label="settings">
      <MoreHoriz/>
        </IconButton> */}
                            </Box>

                            <CardContent sx={{ margin: "0", padding: "5px 0" }}>
                              <Typography
                                variant="body2"
                                sx={{
                                  color:
                                    themeMode === true
                                      ? "grey.400"
                                      : "grey.700",
                                }}
                              >
                                {item.answer.length > 250
                                  ? `${item.answer.substring(0, 250)}...`
                                  : item.answer}
                                {/* {item.answer} */}
                              </Typography>
                            </CardContent>
                          </Link>
                          <Divider />
                          <CardActions
                            disableSpacing
                            sx={{ padding: "4px 0 0 0" }}
                          >
                            <Box
                              sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                width: "100%",
                              }}
                            >
                              <Box>
                                <IconButton
                                  aria-label="add to favorites"
                                  sx={{
                                    fontSize: "16px",
                                    color:
                                      themeMode === true
                                        ? "grey.400"
                                        : "grey.600",
                                  }}
                                >
                                  <ThumbUpIcon
                                    sx={{
                                      marginRight: "4px",
                                      fontSize: "18px;",
                                    }}
                                  />{" "}
                                  0
                                </IconButton>
                                <IconButton
                                  aria-label="share"
                                  sx={{
                                    fontSize: "16px",
                                    color:
                                      themeMode === true
                                        ? "grey.400"
                                        : "grey.600",
                                  }}
                                >
                                  <ThumbDownIcon
                                    sx={{
                                      marginRight: "4px",
                                      fontSize: "18px;",
                                    }}
                                  />{" "}
                                  0
                                </IconButton>

                                <IconButton
                                  aria-label="share"
                                  sx={{
                                    fontSize: "16px",
                                    color:
                                      themeMode === true
                                        ? "grey.400"
                                        : "grey.600",
                                  }}
                                >
                                  <ShareIcon
                                    sx={{
                                      marginRight: "4px",
                                      fontSize: "18px;",
                                    }}
                                  />{" "}
                                  Share
                                </IconButton>
                              </Box>

                              <Box>
                                <Link
                                  href={`/${router.query.collegelist}/${router.query.college}/qna`}
                                  key={item.qa_answers_id}
                                >
                                  <IconButton
                                    aria-label="share"
                                    sx={{
                                      fontSize: "16px",
                                      color:
                                        themeMode === true
                                          ? "grey.400"
                                          : "grey.600",
                                    }}
                                  >
                                    <HelpOutlineIcon
                                      sx={{
                                        marginRight: "4px",
                                        fontSize: "18px;",
                                      }}
                                    />{" "}
                                    Answers
                                  </IconButton>
                                </Link>
                              </Box>
                            </Box>
                          </CardActions>
                        </Card>
                      </>
                    );
                  })}
                </Box>
                {/* -------------------Mobile */}
                <Stack
                  sx={{
                    display: { xs: "block", md: "none" },
                  }}
                >
                  {/* mobile values  */}
                  <Box
                    sx={{
                      padding: "20px",
                      boxShadow: "0px 10px 50px 0px rgb(26 46 85 / 7%)",
                      display: { xs: "block", md: "none" },
                    }}
                  >
                    <Typography
                      variant="h5"
                      sx={{
                        marginBottom: "24px",
                        paddingBottom: "3px",
                        display: "inline-block",
                        borderBottom: "#5bd9bd solid 1px",
                      }}
                    >
                      Questions & Answers
                    </Typography>
                    {questionsandanswer.map((jsondata) => {
                      return (
                        <Accordion
                          key={jsondata.courses_id}
                          sx={{
                            bgcolor:
                              themeMode === true ? "grey.700" : "grey.200",
                            color: themeMode === true ? "grey.300" : "grey.800",
                          }}
                        >
                          <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id={jsondata.question_id}
                          >
                            <Typography variant="h6">
                              {jsondata.question}
                            </Typography>
                          </AccordionSummary>
                          <AccordionDetails key={jsondata.qa_answers_id}>
                            <Typography>{jsondata.answer}</Typography>
                            <Divider sx={{ margin: "10px 0" }} />
                            <Stack
                              sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                flexDirection: "row",
                              }}
                            >
                              <Box sx={{ color: "#999", display: "flex" }}>
                                <Link href="#">
                                  <MenuBookIcon sx={{ marginBottom: "-6px" }} />
                                  MBBS
                                </Link>
                                ,
                                <SchoolIcon
                                  sx={{
                                    marginBottom: "-6px",
                                    marginRight: "5px",
                                  }}
                                />{" "}
                                {jsondata.courses_duration} years course
                              </Box>

                              <Box sx={{ color: "#999", display: "flex" }}>
                                <Link href="#">
                                  <Face6Icon sx={{ marginBottom: "-6px" }} />{" "}
                                  {jsondata.user_name}
                                </Link>
                                , ,
                                <Link href={`mailto:${jsondata.user_email}`}>
                                  <EmailIcon
                                    sx={{
                                      marginBottom: "-6px",
                                      marginLeft: "5px",
                                    }}
                                  />
                                  {jsondata.user_email}
                                </Link>
                              </Box>
                            </Stack>
                          </AccordionDetails>
                        </Accordion>
                      );
                    })}
                  </Box>
                </Stack>
              </>
            ) : null}

            <GridContainer
              sx={{
                bgcolor: themeMode === true ? "grey.800" : "#eaeef7",
                color: themeMode === true ? "common.white" : "grey.700",
              }}
            >
              <GridItem lg={12}>
                <Box>
                  <CommentBoxMobile data={detailData} />
                  {/* <CommentBox data={detailData} /> */}
                </Box>
              </GridItem>
            </GridContainer>
          </Grid>
          <Grid item xs={12} md={4} lg={4}>
          {router.query.leaf != "reviews" &&  router.query.leaf != "video"? (
              <>
                {/* -----------------------Desktop */}
                <Stack
                  sx={{
                    margin: "0 18px 30px 18px",
                    display: { xs: "none", md: "block" },
                  }}
                >
                  {jsondata.reviews != "" ? (
                   <Reviewnewright detailData={detailData} />
                  ) : null}
                </Stack>
                {/* -------------------Mobile */}
                <Stack
                  sx={{
                    display: { xs: "block", md: "none" },
                    margin: "18px",
                  }}
                >
                  {/* mobile values  */}
                  {jsondata.reviews != "" ? (
                    <ReviewMobile data={detailData} />
                  ) : null}
                </Stack>
              </>
            ) : null}

{router.query.leaf != "videos" ? (
              <>
                {/* --------------------Dessktop */}
                <Stack
                  sx={{
                    margin: "0 18px 30px 18px",
                    display: { xs: "none", md: "block" },
                  }}
                >
                 {jsondata.videos != "" ? (
            
            <Video data={detailData} />
    
        ) : null}
                </Stack>
                {/* -------------------Mobile */}
                <Stack
                  sx={{
                    display: { xs: "block", md: "none" },
                    margin:'18px'
                  }}
                >
                  {/* mobile values  */}
                  {jsondata.videos != "" ? (
                    <Box
                      style={{
                        margin: "18px 32px 20px 0",
                        boxShadow: "0 0 3px #ccc",
                        borderRadius: "5px",
                        padding: "18px",
                        WebkitBoxShadow: "0 0 3px #ccc",
                        backgroundColor: "common.white",
                      }}
                    >
                      <Typography variant="h5" sx={{ paddingBottom: "5px" }}>
                        Video Gallery
                      </Typography>

                      <Divider sx={{ marginBottom: "5px" }} />
                      <Video data={detailData} />
                    </Box>
                  ) : null}
                </Stack>
              </>
            ) : null}

{router.query.leaf == "video" ? (
              <>
                {/* --------------------Dessktop */}
                <Stack
                  sx={{
                    margin: "0 18px 30px 18px",
                    display: { xs: "none", md: "block",bgcolor:themeMode === true ? 'grey.700' : "grey.700",
                    color: themeMode === true ? "grey.300" : "#333", },
                  }}
                >
                  {jsondata.videos != "" ? (
                    <Box
                    sx={{
                      padding: "20px",
                      boxShadow: "0px 10px 50px 0px rgb(26 46 85 / 7%)",
                      display: { xs: "none", md: "block" },
                    }}
                  >
                    <Typography
                      variant="h5"
                      sx={{
                        marginBottom: "24px",
                        paddingBottom: "3px",
                        display: "inline-block",
                        borderBottom: "#5bd9bd solid 1px",
                      }}
                    >
                    <VideocamIcon sx={{position:"relative",top:"5px", color:"#0093AB"}}/> Related Videos 
                    </Typography>
  
                    
                    {news.map((jsondata) => {
                      return (
                        <>
<Box sx={{position:"relative"}}>
                          <CardHeader
                            sx={{ alignItems: "self-start" }}
                            
                            avatar={
                              <Avatar
                                sx={{
                                  borderRadius: "8px",
                                  border: "#eee solid 1px",
                                  width: "100px",
                                  height: "75px",
                                }}
                                
                                src={`${jsondata.news_image}`}
                                
                              />
                              
                            }
                            title={
                              <Typography
                                sx={{ fontSize: "14px", fontWeight: "600" }}
                              >
                                
                                {jsondata.news_title}
                              </Typography>
                              
                            }
                            subheader={jsondata.news_publish_date}
                            style={{ fontSize: "12px", padding: "8px 0px 8px 0" }}
                          />
            <PlayCircleIcon sx={{position:"absolute", marginLeft:"5px", top:"50px", fontSize:"1.8em", color:"#0093AB", opacity:"0.7", background:"#fff",borderRadius:"50%"}}/>

            </Box>
                          <Divider />
                        </>
                      );
                    })}

{news.map((jsondata) => {
                      return (
                        <>
                        
                        <Box sx={{position:"relative"}}>
                          <CardHeader
                            sx={{ alignItems: "self-start" }}
                            
                            avatar={
                              <Avatar
                                sx={{
                                  borderRadius: "8px",
                                  border: "#eee solid 1px",
                                  width: "100px",
                                  height: "75px",
                                }}
                                
                                src={`${jsondata.news_image}`}
                                
                              />
                              
                            }
                            title={
                              <Typography
                                sx={{ fontSize: "14px", fontWeight: "600" }}
                              >
                                
                                {jsondata.news_title}
                              </Typography>
                              
                            }
                            subheader={jsondata.news_publish_date}
                            style={{ fontSize: "12px", padding: "8px 0px 8px 0" }}
                          />
            <PlayCircleIcon sx={{position:"absolute", marginLeft:"5px", top:"50px", fontSize:"1.8em", color:"#0093AB", opacity:"0.7", background:"#fff",borderRadius:"50%"}}/>

            </Box>
                               

                          <Divider />
                        </>
                      );
                    })}

{news.map((jsondata) => {
                      return (
                        <>
                        
                        <Box sx={{position:"relative"}}>
                          <CardHeader
                            sx={{ alignItems: "self-start" }}
                            
                            avatar={
                              <Avatar
                                sx={{
                                  borderRadius: "8px",
                                  border: "#eee solid 1px",
                                  width: "100px",
                                  height: "75px",
                                }}
                                
                                src={`${jsondata.news_image}`}
                                
                              />
                              
                            }
                            title={
                              <Typography
                                sx={{ fontSize: "14px", fontWeight: "600" }}
                              >
                                
                                {jsondata.news_title}
                              </Typography>
                              
                            }
                            subheader={jsondata.news_publish_date}
                            style={{ fontSize: "12px", padding: "8px 0px 8px 0" }}
                          />
            <PlayCircleIcon sx={{position:"absolute", marginLeft:"5px", top:"50px", fontSize:"1.8em", color:"#0093AB", opacity:"0.7", background:"#fff",borderRadius:"50%"}}/>

            </Box>
                               

                          <Divider />
                        </>
                      );
                    })}
                  </Box>
                  ) : null}
                </Stack>
                {/* -------------------Mobile */}
                <Stack
                  sx={{
                    margin: "0 18px 30px 18px",
                    display: { xs: "block", md: "none",bgcolor:themeMode === true ? 'grey.700' : "grey.700",
                    color: themeMode === true ? "grey.300" : "#333", },
                  }}
                >
                  {jsondata.videos != "" ? (
                    <Box
                    sx={{
                      padding: "20px",
                      boxShadow: "0px 10px 50px 0px rgb(26 46 85 / 7%)",
                      display: { xs: "block", md: "none" },
                    }}
                  >
                    <Typography
                      variant="h5"
                      sx={{
                        marginBottom: "24px",
                        paddingBottom: "3px",
                        display: "inline-block",
                        borderBottom: "#5bd9bd solid 1px",
                      }}
                    >
                    <VideocamIcon sx={{position:"relative",top:"5px", color:"#0093AB"}}/> Related Videos
                    </Typography>
  
                    
                    {news.map((jsondata) => {
                      return (
                        <>
                        
                          <CardHeader
                            sx={{ alignItems: "self-start" }}
                            
                            avatar={
                              <Avatar
                                sx={{
                                  borderRadius: "8px",
                                  border: "#eee solid 1px",
                                  width: "100px",
                                  height: "75px",
                                }}
                                src={`${jsondata.news_image}`}
                                
                              />
                              
                            }
                            title={
                              <Typography
                                sx={{ fontSize: "14px", fontWeight: "600" }}
                              >
                                {jsondata.news_title}
                              </Typography>
                            }
                            subheader={jsondata.news_publish_date}
                            style={{ fontSize: "12px", padding: "8px 0px 8px 0" }}
                          />
                               

                          <Divider />
                        </>
                      );
                    })}

{news.map((jsondata) => {
                      return (
                        <>
                        
                          <CardHeader
                            sx={{ alignItems: "self-start" }}
                            
                            avatar={
                              <Avatar
                                sx={{
                                  borderRadius: "8px",
                                  border: "#eee solid 1px",
                                  width: "100px",
                                  height: "75px",
                                }}
                                src={`${jsondata.news_image}`}
                                
                              />
                              
                            }
                            title={
                              <Typography
                                sx={{ fontSize: "14px", fontWeight: "600" }}
                              >
                                {jsondata.news_title}
                              </Typography>
                            }
                            subheader={jsondata.news_publish_date}
                            style={{ fontSize: "12px", padding: "8px 0px 8px 0" }}
                          />
                               

                          <Divider />
                        </>
                      );
                    })}

{news.map((jsondata) => {
                      return (
                        <>
                        
                          <CardHeader
                            sx={{ alignItems: "self-start" }}
                            
                            avatar={
                              <Avatar
                                sx={{
                                  borderRadius: "8px",
                                  border: "#eee solid 1px",
                                  width: "100px",
                                  height: "75px",
                                }}
                                src={`${jsondata.news_image}`}
                                
                              />
                              
                            }
                            title={
                              <Typography
                                sx={{ fontSize: "14px", fontWeight: "600" }}
                              >
                                {jsondata.news_title}
                              </Typography>
                            }
                            subheader={jsondata.news_publish_date}
                            style={{ fontSize: "12px", padding: "8px 0px 8px 0" }}
                          />
                               

                          <Divider />
                        </>
                      );
                    })}
                  </Box>
                  ) : null}
                </Stack>
              </>
            ) : null}
          </Grid>
        </GridContainer>
        </Card>
        </Container>
      </Stack>
    </div>
  );
};

export default Leaf;

export async function getServerSideProps(context) {
  const collegeId = context.query.college;
  // console.log(collegeId);
  try {
    let getData = await fetch(
      `https://w.kalvimalar.com/collegedetails?collegeId=${collegeId}`
    );
    let placementDetails = await fetch(
      `https://w.kalvimalar.com/placement?collegeId=${collegeId}`
    );
    let facultyDetail = await fetch(
      `https://w.kalvimalar.com/faculty?collegeId=${collegeId}`
    );
    let responseplacementDetails = await placementDetails.json();
    let responsefacultyDetail = await facultyDetail.json();
    let res = await getData.json();
    return {
      props: {
        detailData: res.data,
        placementdetails: responseplacementDetails.data,
        facultydetail: responsefacultyDetail.data,
      },
    };
  } catch {
    console.log("something error");
  }
}
