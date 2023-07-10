import React from "react";
import Top from "../Top/Top";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import {
  Grid,
  Typography,
  Link,
  Divider,
  CardHeader,
  Avatar,
} from "@mui/material";
import Image from "next/image";
import citbaner from "/public/icons/cit.jpg";
import Box from "@mui/material/Box";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import DownloadIcon from "@mui/icons-material/Download";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import {
  DescriptionOutlined,
  Newspaper,
  NotificationAdd,
  Notifications,
} from "@mui/icons-material";
import CommentBox from "../Comment/CommentBox";
import Facilities from "../Facilities";
import Placement from "../PlacementCompany/Placement";
import Gallery from "../Gallery/Gallery";
import Faculty from "../Faculty/Faculty";
import Popular from "../Popular";

export default function Webdetail({data}) {
  return (
    <div>
      <div className="clsTopbg">
        <div className="container">
          <Top 
           collegeTop = {data}
           />
        </div>
      </div>
      <div id="selWebdtail" class="container">
        <Grid container spacing={2}>
          <Grid item xs={12} md={8} lg={8}>
            <div>
              <h3>About College</h3>
            </div>
            <section class="edu-section-gap course-details-area">
              {data.map((e) => {
                return(
                  <>
              <div class="container event-details">
                <div class="main-thumbnail">
                  <img className="imges" src={`https://w.kalvimalar.com/images/${e.featured_image}`} alt="Event" />
                </div>
              </div>
                  </>
                )
              })}
            </section>
            {data.map((e) => {
                return(
                  <>
            <h3>
              Welcome to {e.institute_name} – The Best Engineering College in Chennai
            </h3>
            <p>
             {e.college_desc}
            </p>
            <p>
              Apart from interactive classroom scenario, periodic guest lectures
              by experts from industries and academic background provides thirst
              to the students to learn and to prepare for the ready-to-serve
              industrial requirements with uncompromised professional ethics.
            </p>
            <p>
              {e.institute_name} has been approved by the {e.accrediation}, affiliated to {e.affliation}
            </p>
             </>
                )
            })}

            <Box sx={{ flexGrow: 1, marginTop: "10px" }}>
              <h3>About College</h3>
              {data.map((e) => {
                return(
                  <>
              <Typography variant="body2" color="text.secondary">
                <b>{e.institute_name}</b> (JEC) {e.whatsnew}
              </Typography>
                  </>
                )
              })}
            </Box>

            <Box sx={{ flexGrow: 1, marginTop: "10px" }}>
              <h3>Chennai Institute of Technology Highlights</h3>
              <Typography variant="body2" color="text.secondary">
                <ul>
                  <li>- 2nd Position in Tamilnadu</li>
                  <li>- Ranked by Anna University</li>
                  <li>- 80+ Recruiters across major domains</li>
                  <li>- Highest Package: 44 LPA & Average Package: 4.2 LPA</li>
                  <li>
                    - Industry connected Institute with more than 14+MoU’s
                  </li>
                  <li>
                    - Center of Excellence(CoE) for Technological Skill
                    Development
                  </li>
                  <li>
                    - Corporate Training in Foreign Languages by Native Trainers
                  </li>
                  <li>- International Exposure through Foreign Internships</li>
                  <li>- 94% pass percentage in Python</li>
                  <li>- 88% First Year Result</li>
                  <li>- 79.5% Overall Result</li>
                </ul>
              </Typography>
            </Box>
            <Box sx={{ flexGrow: 1, marginTop: "10px" }}>
              <h3>Chennai Institute of Technology FAQs</h3>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>
                    {" "}
                    How is Chennai Institute of Technology?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt labore et dolore magna
                    aliqua enim ad minim veniam quis nostrud exercitation
                    ullamco qui laboris nis aliquip commodo consequat.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography>
                    {" "}
                    Does Chennai Institute of Technology provide scholarships?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt labore et dolore magna
                    aliqua enim ad minim veniam quis nostrud exercitation
                    ullamco qui laboris nis aliquip commodo consequat.
                  </Typography>
                </AccordionDetails>
              </Accordion>

              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography>
                    {" "}
                    How to apply for admission at Chennai Institute Technology?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt labore et dolore magna
                    aliqua enim ad minim veniam quis nostrud exercitation
                    ullamco qui laboris nis aliquip commodo consequat.
                  </Typography>
                </AccordionDetails>
              </Accordion>

              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography>
                    {" "}
                    What is the course fee for the B.Tech course at CIT?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt labore et dolore magna
                    aliqua enim ad minim veniam quis nostrud exercitation
                    ullamco qui laboris nis aliquip commodo consequat.
                  </Typography>
                </AccordionDetails>
              </Accordion>

              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography> Why should I choose CIT?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt labore et dolore magna
                    aliqua enim ad minim veniam quis nostrud exercitation
                    ullamco qui laboris nis aliquip commodo consequat.
                  </Typography>
                </AccordionDetails>
              </Accordion>

              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography>
                    {" "}
                    How to apply to the courses offered by CIT?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt labore et dolore magna
                    aliqua enim ad minim veniam quis nostrud exercitation
                    ullamco qui laboris nis aliquip commodo consequat.
                  </Typography>
                </AccordionDetails>
              </Accordion>

              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography>
                    {" "}
                    What is the course fee for the M.E course at CIT?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt labore et dolore magna
                    aliqua enim ad minim veniam quis nostrud exercitation
                    ullamco qui laboris nis aliquip commodo consequat.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Box>
            <Box sx={{ flexGrow: 1, marginTop: "10px" }}>
              <h3>Chennai Institute of Technology Highlights</h3>
              <Typography variant="body2" color="text.secondary">
                <ul>
                  <li>
                    Ranked 175<sup>th</sup>&nbsp;in Engineering Category by NIRF
                    Ranking 2022.
                  </li>
                  <li>
                    No.1 position in Tamilnadu in Anna University Academic
                    Performance Nov/Dec 2021.
                  </li>
                  <li>No.2 position in TNEA 2022.</li>
                  <li>Ranked 201-250 band by NIRF Ranking 2021.</li>
                  <li>
                    2<sup>nd</sup>&nbsp;Position in Tamil Nadu- Ranked by Anna
                    University
                  </li>
                  <li>
                    Ranked 3<sup>rd</sup>&nbsp;in Tamil Nadu in TNEA 2021
                    Admissions
                  </li>
                  <li>
                    Youngest Institution to achieve 6 years accreditation for 2
                    programs&nbsp;
                  </li>
                  <li>Awarded “Excellence Band” by ARIIA 2021</li>
                  <li>Best Industry Linked Institute by AICTE-CII Survey</li>
                  <li>
                    Awarded Best Placement Award by National Award of Excellence
                  </li>
                  <li>
                    Chennai Institute of Technology was awarded the Best
                    Institution Award for two consecutive years in the
                    Innovative Building modeling contest organized by
                    Trimble-Tekla.
                  </li>
                  <li>
                    First Prize of INR&nbsp;1 Lakh by Smart India Hackathon
                  </li>
                  <li>
                    5 out of 5 stars in Innovation by the Institution’s
                    Innovation Council
                  </li>
                  <li>
                    First Prize of INR 15 Lakh by Rajasthan DigiFest Hackathon
                  </li>
                  <li>Second Prize by Daimler Motors, Germany.</li>
                  <li>
                    Ranked 104<sup>th</sup>&nbsp;in Engineering category
                    by&nbsp;Times Engineering Ranking 2019
                  </li>
                </ul>
              </Typography>
            </Box>
          
            
          </Grid>
          <Grid item xs={12} md={4} lg={4}>
            <Box sx={{ flexGrow: 1, marginTop: "10px" }}>
              <div className="course-sidebar-3">
                <div class="edu-course-widget widget-course-summery">
                  <div class="inner">
                    <div class="content">
                      <h4 class="widget-title">Course Includes:</h4>
                      <ul class="course-item">
                        <li>
                          <span class="label">Fees</span>
                          <span class="value price">Rs. 250000</span>
                        </li>
                        <li>
                          <span class="label">Application Fees</span>
                          <span class="value">Rs. 250</span>
                        </li>
                        <li>
                          <span class="label">Foundar</span>
                          <span class="value">Foundar Name</span>
                        </li>
                        <li>
                          <span class="label">Year of start</span>
                          <span class="value">1952</span>
                        </li>

                        <li>
                          <span class="label">colegecode</span>
                          <span class="value">1399</span>
                        </li>
                        <li>
                          <span class="label">District</span>
                          <span class="value">Chennai</span>
                        </li>
                        <li>
                          <span class="label">State</span>
                          <span class="value">TamilNadu</span>
                        </li>
                      </ul>
                      <div align="center" id="selbutton">
                        <label>
                          <Button variant="contained">
                            <ArrowForwardIcon /> Apply Now
                          </Button>
                        </label>
                        <label>
                          <Button variant="outlined">
                            <DownloadIcon /> Brochure
                          </Button>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Box>
            <Box sx={{ flexGrow: 1, marginTop: "10px" }}>
              <h3>Chennai Institute of Technology Cutoff</h3>

              <Typography variant="body2" color="text.secondary">
                <p>
                  {" "}
                  Tabulated below is the TNEA cutoff for admission to Chennai
                  Institute of Technology:
                </p>
                <table class="table table-striped style_table">
                  <tbody>
                    <tr>
                      <td>
                        <strong>Specialization</strong>
                      </td>
                      <td>
                        <strong>Cutoff</strong>
                      </td>
                    </tr>
                    <tr>
                      <td>BE Mechanical Engineering</td>
                      <td>302-8279</td>
                    </tr>
                    <tr>
                      <td>BE Computer Science and Engineering</td>
                      <td>1887-9007</td>
                    </tr>
                    <tr>
                      <td>BE Electronics &amp; Communication Engineering</td>
                      <td>3005-9182</td>
                    </tr>
                    <tr>
                      <td>B.Tech Information Technology</td>
                      <td>3303-9526</td>
                    </tr>
                  </tbody>
                </table>
              </Typography>
            </Box>
            
            {/* -------about college----- */}
          {/* <Box style={{ lineHeight: 1.5, justifyContent: "space-between" }}>
              {details.map((e) => {
                return (
                  <>
                    <Typography variant="h6" style={{ padding: "20px" }}>
                      {e.title}
                    </Typography>
                    <Divider />
                    <Typography
                      variant="subtitle1"
                      fontWeight="normal"
                      style={{ padding: "20px" }}
                    >
                      {e.content}
                    </Typography>
                  </>
                );
              })}
            </Box> */}
            {/* --------------- */}
            <Box
              sx={{
                boxShadow: "0 0 3px #ccc",
                borderRadius: "5px",
                WebkitBoxShadow: "0 0 3px #ccc",
                lineHeight: "30px",
                backgroundColor: "common.white",
              }}
            >
              {courses.map((e) => {
                return (
                  <>
                    <Typography
                      variant="h6"
                      fontWeight="bold"
                      justifyContent="center"
                      width="100%"
                      textAlign={"center"}
                    >
                      {e.Title}
                    </Typography>
                    <Divider />
                    <Box justifyContent={"center"}>
                      <ul
                        style={{
                          listStyleType: "none",
                          textAlign: "center",
                        }}
                      >
                        <li style={{ height: "auto" }}>{e.field}</li>
                      </ul>
                    </Box>
                  </>
                );
              })}
            </Box>
            {/* ---------- */}
            <Box
              sx={{
                padding: "20px",
                boxShadow: "0 0 3px #ccc",
                borderRadius: "5px",
                WebkitBoxShadow: "0 0 3px #ccc",
                backgroundColor: "common.white",
              }}
            >
              <Typography
                variant="h6"
                fontWeight="bold"
                style={{
                  justifyContent: "space-between",
                  display: "flex",
                  alignItems: "center",
                  flexWrap: "wrap",
                  justifyItems: "end",
                }}
              >
                Notification <Notifications color="primary" />
              </Typography>
              <Divider />
              {Notify.map((e) => {
                return (
                  <>
                    <CardHeader
                      avatar={<Avatar alt={e.alt} src={e.src} />}
                      title={<Typography variant="title">{e.title}</Typography>}
                      subheader={
                        <Typography
                          variant="subtitle2"
                          color="grey"
                          gutterBottom
                        >
                          {e.sub}
                        </Typography>
                      }
                    />
                    <Divider />
                  </>
                );
              })}
            </Box>
            {/* ------news */}
            <Box
              style={{
                padding: "20px",
                boxShadow: "0 0 3px #ccc",
                borderRadius: "5px",
                WebkitBoxShadow: "0 0 3px #ccc",
                backgroundColor: "common.white",
              }}
            >
              <Typography
                variant="h6"
                fontWeight="bold"
                style={{
                  justifyContent: "space-between",
                  display: "flex",
                  alignItems: "center",
                  flexWrap: "wrap",
                  justifyContent: "normal",
                }}
              >
                <Newspaper color="primary" />
                News
              </Typography>
              <Divider />
              {news.map((e) => {
                return (
                  <>
                    <CardHeader
                      avatar={<Avatar alt={e.alt} src={e.src} />}
                      title={<Typography variant="title">{e.title}</Typography>}
                      subheader={
                        <Typography
                          variant="subtitle2"
                          color="grey"
                          gutterBottom
                        >
                          {e.sub}
                        </Typography>
                      }
                      style={{ fontSize: "14px" }}
                    />
                    <Divider />
                  </>
                );
              })}
            </Box>
            {/* -------- */}
          
          </Grid>
          <Grid  item lg={12} mb={2} justifyContent='center' width='100vw' >
              <Popular />
            </Grid> 
         
          <Grid container item lg={12} my={4} >
        
              <Faculty />
            </Grid> 
          <Grid container item lg={8} >
              <Facilities/>
            </Grid> 
            

          <Grid container item lg={12} my={5} >
            <Paper><Typography pl={5}>GALLERY</Typography></Paper>
              <Gallery />
            </Grid> 
            
          <Grid  item lg={12} mb={2} >
              <Placement />
            </Grid> 


            
            <Grid container>
            <Grid item lg={8} >
            <Box>
              <CommentBox />
            </Box>
            </Grid>
          
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

const courses = [
  {
    Title: "Top Courses",
    field: "MBA(3)",
  },
  { field: "BBA(7)" },
  { field: "B.Tech(2)" },
  { field: "B.Ed(1)" },
  { field: "LLB(9)" },
  { field: "MCA(3)" },
  { field: "B.Com(7)" },
];

const Notify = [
  {
    alt: "DPU Pune",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsbh4YjYoxrOml04_bx5GU_7WVfXS7PnPR1GlxWPKZ&s",
    title:
      "DPU Pune Admission 2023 Open for MBA & BBA Program; Apply till March 31",
    sub: "Dr DY Patil Vidyapeeth is inviting applications for admission to its MBA and BBA program for the academic session 2023-24. The last date to apply is March 31, 2023.",
  },
  {
    alt: "St. Xavier’s Kolkata",
    src: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b0/St._Xavier%27s_College%2C_Kolkata_logo.jpg/175px-St._Xavier%27s_College%2C_Kolkata_logo.jpg",
    title:
      "St. Xavier’s Kolkata UG Admission 2023 Open; Last Date to Apply is May 7",
    sub: "St. Xavier’s Kolkata is inviting application for admission in UG for the academic year 2023-24; Last Date to Apply is May 7",
  },
];

const news = [
  {
    alt: "Universal Business School Karjat",
    src: "https://images.collegedunia.com/public/image/25-09:06-Name-title-image.jpeg",
    title:
      "Interview Tarundeep Singh Anand Founder and Chairman at Universal Business School Karjat",
    sub: "Aug 25, 2021",
  },
  {
    alt: "news",
    src: 'src="https://images.collegedunia.com/public/asset/img/exam/news/news2.jpg',
    title:
      "IIM Admission 2023 Keeping a Check on the Waitlist Movement Trend Might Subdue your Anxiety Read How",
    sub: "JAN 6, 2023",
  },
];

const learn = [
  { course: "B.Tech Computer Science Engineering" },
  { course: "B.Tech Electronics & Communication Engineering" },
  { course: "BBA" },
  { course: "MBA Marketing" },
  { course: "B.Tech Mechanical Engineering" },
];

const details = [
  {
    title: "About College",
    content:
      "IIT Chennai is situated on Sardar Patel Road and is flanked by Adyar, Taramani and Velachery.The campus is opposite the Central Leather Research Institute and Anna University. It is spread over 250 hectares of lush green forest, which is midway between the Chennai Airport and Central Railway station, and is well connected by buses and local trains.",
  },
];
