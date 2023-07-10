import React, { useContext, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import {
  Grid,
  Typography,
  Divider,
  CardHeader,
  CardContent,
  Avatar,
  Stack,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Container,
} from "@mui/material";
import Image from "next/image";
import Box from "@mui/material/Box";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import DownloadIcon from "@mui/icons-material/Download";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";

import {
  DescriptionOutlined,
  Newspaper,
  NotificationAdd,
  Notifications,
} from "@mui/icons-material";
import CommentBox from "@/Components/Comment/CommentBox";
// import Facilities from "@/Components/Facilities";
import Placement from "@/Components/PlacementCompany/Placement";
import Gallery from "@/Components/Gallery/Gallery";
import Faculty from "@/Components/Faculty/Faculty";
import Popular from "@/Components/Popular/Popular";
import Course from "@/Components/Course/Course";
import Top from "@/Components/Top/Top";
import TopBannerNew from "@/Components/Top/TopBannerNew";
import { useRouter } from "next/router";
import SchoolIcon from "@mui/icons-material/School";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import FoundationIcon from "@mui/icons-material/Foundation";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PinDropOutlinedIcon from "@mui/icons-material/PinDropOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import EmailIcon from "@mui/icons-material/Email";
import GradingIcon from "@mui/icons-material/Grading";
import Face6Icon from "@mui/icons-material/Face6";
import AssuredWorkloadIcon from "@mui/icons-material/AssuredWorkload";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import EligibilityImg from "/public/Eligibility-Criteria.png";

// import MenuPopupState from "@/Components/Navigator/HoverMenu";
import HoverMenu from "@/Components/Navigator/HoverMenu";
import NotificationsIcon from "@mui/icons-material/Notifications";

import Link from "next/link";
import BreadcrumbsFinal from "@/Components/Breadcrumbs/BreadcrumbsFinal";
import MenuBookIcon from "@mui/icons-material/MenuBook";

// import Table from "@mui/material/Table";
import Table from "@/OverViews/Table";
import TableBody from "@mui/material/TableBody";

// import { tableCellClasses } from "@mui/material/TableCell";
import TableCell from "@/OverViews/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

// import GalleryRes1 from "@/Components/Gallery/GalleryRes1";
import FacultyDesign from "@/Components/Faculty/FacultyDesign";
// import Review from "@/Components/Comment/Review";
// import Ranking from "@/Components/Ranking/Ranking";

import DetailMenu from "@/Components/DetailMenu/DetailMenu";
import Notification from "@/Components/Notification/Notification";
import Review1 from "@/Components/Review1/Review1";
import Reviewnew from "@/Components/Review/Review";
// import Video from "@/Components/Video/Video1";
import DetailScrollMenu from "@/Components/DetailMenu/DetailScrollMenu";
import { GridContainer } from "@/OverViews/GridContainer";
import { GridItem } from "@/OverViews/GridItem";
import { darkLightModeContext } from "@/Layout/Layout";
import Whatsnew from "@/Components/Whatsnew/Whatsnew";
import Coursefees from "@/Components/Coursefees/Coursefees";
import Application from "@/Components/Application/Application";
import Facilities from "@/Components/Facilities/Facilitiesnew";
import Rankingnew from "@/Components/Ranking/Rankingnew";
import News from "@/Components/News/News";
import NotificationScroll from "@/Components/Notification/NotificationScroll";
import VideocamIcon from "@mui/icons-material/Videocam";
// import Video from "@/Components/Video/videogallery";

import QA from "@/Components/QA/QA";
import { Card } from "@/OverViews/Card/Card";
import comingsoon from "/public/comingsoon.png";
import About from "@/Components/About/About";
import Infocourse from "@/Components/InfoCourse/Infocourse";
import Video from "@/Components/Video/videogallery";
import CommentBoxMobile from "@/Components/Comment/CommentBoxMobile";
import GoogleMapComponent from "@/Components/Map/GoogleMap";
import Photogallery from "@/Components/Gallery/Photogallery";

export default function Webdetail({ data, placementData }) {
  const router = useRouter();
  console.log(data);
  const [jsondata, setJsondata] = React.useState(data[0]);
  useEffect(() => {
    setJsondata(data[0]);
  }, [router.query.college]);
  const [course, setCourse] = React.useState(jsondata.courseandfees);
  const [news, setnews] = React.useState(jsondata.news);
  const [questionsandanswer, setquestionsandanswer] = React.useState(
    jsondata.questionsandanswer
  );
  const [relatedcolleges, setrelatedcolleges] = React.useState(
    jsondata.relatedcolleges
  );
  const [videos, setVideos] = React.useState(jsondata.videos);
  const [reviews, setReviews] = React.useState(jsondata.reviews);
  const [comments, setComments] = React.useState(jsondata.comments);

  const breadName = useRouter().query.collegelist;
  // const breadCollegeName = useRouter().query.college

  // console.log(videos);

  // const [placementdetails,setplacementdetails] = React.useState(data);

  // console.log(placementData);

  // const StyledTableCell = styled(TableCell)(({ theme }) => ({
  //   [`&.${tableCellClasses.head}`]: {
  //     backgroundColor: theme.palette.common.black,
  //     color: theme.palette.common.white,
  //   },
  //   [`&.${tableCellClasses.body}`]: {
  //     fontSize: 14,
  //   },
  // }));

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
  // console.log(jsondata.rankings + "rank")
  return (
    <Stack width="100%">
      <HoverMenu />
      <Container fixed>
        {/* <Top data={data} /> */}
        <TopBannerNew data={data} />
        <Card sx={{ margin: "1.5em 0" }}>
          <GridContainer>
            {jsondata.notification != "" ? (
              <NotificationScroll data={data} />
            ) : null}
          </GridContainer>
          {/* WhatsNew & About */}

          <GridContainer>
            {jsondata.college_desc != "" ? (
              <GridItem xs={12} md={8} lg={8}>
                <Whatsnew data={data} />
              </GridItem>
            ) : null}

            {/* About  */}
            {jsondata.college_desc != "" ? (
              <GridItem xs={12} md={4} lg={4}>
                <About data={data} />
              </GridItem>
            ) : null}
          </GridContainer>

          {/* Course showable  */}
          <GridContainer
            sx={{
              padding: "0 1em 1em 1em",
              bgcolor: themeMode === true ? "grey.700" : "#eaeef7",
            }}
          >
            <GridItem xs={12} md={6} lg={12}>
              <Infocourse data={data} />
            </GridItem>
          </GridContainer>

          <GridContainer
            spacing={2}
            sx={{
              padding: "0 1em 1em 1em",
              bgcolor: themeMode === true ? "grey.700" : "#eaeef7",
            }}
          >
            {jsondata.admission_criteria != "" &&
            jsondata.eligibility_criteria != "" &&
            jsondata.application_mode != "" &&
            jsondata.application_fee != "" ? (
              <>
                <GridItem xs={12} md={9} lg={9}>
                  <Application data={data} />
                </GridItem>
              </>
            ) : (
              <GridItem xs={12} md={9} lg={9}>
                <Box
                  sx={{
                    bgcolor: themeMode === true ? "grey.800" : "#ffffff",
                    color: themeMode === true ? "common.white" : "grey.700",
                    borderRadius: "10px",
                  }}
                >
                  <Card
                    sx={{
                      boxShadow: "0px 10px 50px 0px rgb(26 46 85 / 7%)",
                      background: "url('/hands.png') no-repeat bottom center",
                      backgroundSize: "contain",
                      borderRadius: "30px",
                      // bgColor: "#fff",
                      padding: "20px 20px 110px 20px",
                      backgroundSize: "500px ",

                      bgcolor: themeMode === true ? "grey.800" : "#ffffff",
                      color: themeMode === true ? "common.white" : "grey.700",
                    }}
                  >
                    <Typography
                      variant="h5"
                      sx={{
                        marginBottom: "8px",
                        paddingBottom: "3px",
                        display: "inline-block",
                        borderBottom: "#5bd9bd solid 3px",
                      }}
                    >
                      Application & Eligibility
                    </Typography>
                    {/* <Typography variant="body2" color="text.secondary">
                UG: Eligibility criteria: 10 and +2 with 50% + TNEA PG:
                Graduation with 50% + TANCET Pass in Graduation + GATE
              </Typography> */}
                    <Box
                      sx={{ minHeight: "290px", paddingTop: "6em" }}
                      align="center"
                    >
                      <Image
                        width={120}
                        height={96}
                        style={{ objectFit: "cover" }}
                        src={comingsoon}
                      />
                    </Box>
                  </Card>
                </Box>
              </GridItem>
            )}

            <GridItem xs={12} md={3} lg={3}>
              <Facilities data={data} />
            </GridItem>

            <GridItem xs={12} md={3} lg={3}>
              {jsondata.rankings.length != 0 ? (
                <Rankingnew data={data} />
              ) : jsondata.rankings.length === 0 ? null : null}
            </GridItem>

            <GridItem
              xs={12}
              md={jsondata.rankings.length != 0 ? 9 : 12}
              lg={jsondata.rankings.length != 0 ? 9 : 12}
            >
              {jsondata.reviews != "" ? <Reviewnew data={data} /> : null}
            </GridItem>
          </GridContainer>

          <GridContainer
            sx={{
              bgcolor: themeMode === true ? "#212B36" : "#e8eef7",
              color: themeMode === true ? "common.white" : "#333",
              boxShadow: "none",
            }}
          >
            <GridItem
              xs={12}
              md={12}
              lg={12}
              sx={{ marginBottom: "1em", marginTop: "0em" }}
            >
              <News data={data} />
            </GridItem>
            {/* <GridItem xs={12} md={4} lg={4}>
          {jsondata.notification != "" ? (
            <Box
              style={{
                boxShadow: "0 0 3px #ccc",
                borderRadius: "5px",
                margin: "3.5em 1em 1em 1em",
                WebkitBoxShadow: "0 0 3px #ccc",
                // backgroundColor: "common.white",
                background: themeMode === true ? "#212B36" : "#fff",
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  padding: "10px",
                  borderRadius: "5px 5px 0 0",
                  background: "#0093AB",
                  color: "#fff",
                }}
              >
                Notification
              </Typography>
              <Divider sx={{ marginBottom: "5px" }} />
              {news.map((jsondata) => {
                return (
                  <>
                    <List>
                      <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                          <Avatar>
                            <NotificationsIcon />{" "}
                          </Avatar>
                        </ListItemAvatar>
                        <Box sx={{ display: "grid" }}>
                          <Typography
                            fontWeight="normal"
                            sx={{ fontSize: "14px", fontWeight: "600" }}
                          >
                            {jsondata.news_title}
                          </Typography>
                        </Box>
                      </ListItem>
                      <Divider />
                    </List>
                  </>
                );
              })}
            </Box>
          ) : null}
        </GridItem> */}
          </GridContainer>

          {jsondata.questionsandanswer != "" ? <QA data={data} /> : null}

          <GridContainer spacing={2}>
            <>
              <GridItem xs={12} md={8} lg={8}>
                {jsondata.placement != "" ? (
                  <Box
                    sx={{
                      padding: "20px",
                      boxShadow: "0px 10px 50px 0px rgb(26 46 85 / 7%)",
                    }}
                  >
                    <Placement dataplacemnets={placementData} />
                  </Box>
                ) : null}

                <Photogallery data={data} />

                {jsondata.questionsandanswer != "" ? (
                  <Box
                    sx={{
                      margin: "0 1em 1em 1em",
                      boxShadow: "0px 10px 50px 0px rgb(26 46 85 / 7%)",
                    }}
                  >
                    <Link
                      style={{ display: "block", width: "100%" }}
                      href={`/${router.query.collegelist}/${router.query.college}/qna`}
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
                        FAQ{" "}
                        <ArrowForwardOutlinedIcon
                          style={{
                            marginBottom: "-6px",
                            textShadow: "1px 1px 1px rgba(0,0,0, 0.5)",
                          }}
                        />
                      </Typography>
                    </Link>
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
                                  <MenuBookIcon sx={{ marginBottom: "-6px" }} />{" "}
                                  MBBS
                                </Link>{" "}
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
                                </Link>{" "}
                                ,
                                <Link href={`mailto:${jsondata.user_email}`}>
                                  {" "}
                                  <EmailIcon
                                    sx={{
                                      marginBottom: "-6px",
                                      marginLeft: "5px",
                                    }}
                                  />{" "}
                                  {jsondata.user_email}
                                </Link>{" "}
                              </Box>
                            </Stack>
                          </AccordionDetails>
                        </Accordion>
                      );
                    })}
                  </Box>
                ) : null}

                {jsondata.comments != "" ? (
                  <CommentBoxMobile data={data} />
                ) : null}
              </GridItem>

              <GridItem xs={12} md={4} lg={4}>
                {jsondata.faculty != "" ? (
                  <Box
                    style={{
                      padding: "18px 0 0 0",
                      boxShadow: "0 0 3px #ccc",
                      borderRadius: "5px",
                      margin: "0 32px 20px 0",
                      WebkitBoxShadow: "0 0 3px #ccc",
                      backgroundColor: "common.white",
                    }}
                  >
                    <Link
                      style={{ display: "block", width: "100%" }}
                      href={`/${router.query.collegelist}/${router.query.college}/faculty`}
                    >
                      <Typography
                        variant="h5"
                        sx={{ paddingBottom: "5px", paddingLeft: "15px" }}
                      >
                        Faculty{" "}
                        <ArrowForwardOutlinedIcon
                          style={{
                            marginBottom: "-6px",
                            textShadow: "1px 1px 1px rgba(0,0,0, 0.5)",
                          }}
                        />
                      </Typography>
                    </Link>

                    <Divider sx={{ marginBottom: "5px" }} />
                    <FacultyDesign data={data} />
                  </Box>
                ) : null}

                {/* {jsondata.gallery != "" ? (
              <Box
                style={{
                  margin: "0px 32px 0 0",
                  boxShadow: "0 0 3px #ccc",
                  borderRadius: "5px",
                  padding: "18px",
                  WebkitBoxShadow: "0 0 3px #ccc",
                  backgroundColor: "common.white",
                }}
              >
                <Link
                  style={{ display: "block", width: "100%" }}
                  href={`/${router.query.collegelist}/${router.query.college}/gallery`}
                >
                  <Typography variant="h5" sx={{ paddingBottom: "5px" }}>
                    Photo Gallery{" "}
                    <ArrowForwardOutlinedIcon
                      style={{
                        marginBottom: "-6px",
                        textShadow: "1px 1px 1px rgba(0,0,0, 0.5)",
                      }}
                    />
                  </Typography>
                </Link>

                <Divider sx={{ marginBottom: "5px" }} />
                <GalleryRes1 data={data} />
              </Box>
            ) : null} */}

                {jsondata.videos != "" ? <Video data={data} /> : null}

                {jsondata.map_location != "" ? (
                  <GoogleMapComponent data={data} />
                ) : null}

                {/* <Box
              style={{
                borderRadius: "5px",
                margin: "18px 32px 0 0",
                WebkitBoxShadow: "0 0 3px #ccc",
                backgroundColor: "common.white",
              }}
            >
              <Review1 data={data} />
            </Box> */}
              </GridItem>
            </>
          </GridContainer>

          <GridContainer
            sx={{
              padding: "1em",
              margin: "1em 1em 0em 0",
              bgcolor: themeMode === true ? "grey.800" : "#eaeef7",
              color: themeMode === true ? "common.white" : "grey.700",
            }}
          >
            <GridItem lg={12}>
              <Box>
                {jsondata.relatedcolleges != "" ? (
                  <Box
                    style={{
                      padding: "1em",
                      width: "100%",
                    }}
                  >
                    <Popular data={data} step1={breadName} />
                  </Box>
                ) : null}
              </Box>
            </GridItem>
          </GridContainer>
        </Card>
      </Container>
    </Stack>
  );
}

export async function getServerSideProps(context) {
  console.log("server", context.query.id);
  try {
    const getData = await fetch(
      `https://w.kalvimalar.com/collegedetails?collegeId=${context.query.id}`
    );
    let placementDetails = await fetch(
      `https://w.kalvimalar.com/placement?collegeId=${context.query.id}`
    );
    let facultyDetail = await fetch(
      `https://w.kalvimalar.com/faculty?collegeId=${collegeId}`
    );

    const res = await getData.json();
    let responseplacementDetails = await placementDetails.json();
    let responsefacultyDetail = await facultyDetail.json();

    console.log("res", getData);
    console.log("responseplacementDetails", responseplacementDetails);
    return {
      props: {
        getdata: res.data,
        placementdetails: responseplacementDetails.data,
        facultydetail: responsefacultyDetail.data,
      },
    };
  } catch (err) {
    console.log("error");
  }
}
