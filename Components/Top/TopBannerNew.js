import * as React from "react";
import { styled } from "@mui/material/styles";
import { Box } from "@/OverViews/Box";
import { Paper } from "@/OverViews/Paper";
import { useRouter } from "next/router";
import { useState } from "react";
import {
  Grid,
  Typography,
  Accordion,
  Avatar,
  Divider,
  CardHeader,
  Card,
  CardContent,
  Button,
  CardMedia,
  Stack,
  Chip,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LanguageIcon from "@mui/icons-material/Language";
import StarIcon from "@mui/icons-material/Star";
import HomeIcon from "@mui/icons-material/Home";
import { Language, LocationOn, Star } from "@mui/icons-material";
import { darkLightModeContext } from "@/Layout/Layout";
import { GridContainer } from "@/OverViews/GridContainer";

import LocationCityIcon from "@mui/icons-material/LocationCity";
import WhereToVoteIcon from "@mui/icons-material/WhereToVote";
import PublicIcon from "@mui/icons-material/Public";
import Link from "next/link";
import BreadTitle from "../Breadcrumbs/BreadTitle";
import BreadTitleSmall from "../Breadcrumbs/BreadTitleSmall";
import MilitaryTechOutlinedIcon from "@mui/icons-material/MilitaryTechOutlined";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import InsertLinkOutlinedIcon from "@mui/icons-material/InsertLinkOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import SchoolIcon from "@mui/icons-material/School";
import AssuredWorkloadIcon from "@mui/icons-material/AssuredWorkload";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import PinDropOutlinedIcon from "@mui/icons-material/PinDropOutlined";
import DetailScrollMenu from "../DetailMenu/DetailScrollMenu";
import Tab from "@/Components/Tab/Tabweb";
import { sendStatusCode } from "next/dist/server/api-utils";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function TopBannerNew({ data }, props) {
  const router = useRouter();
  const themeMode = React.useContext(darkLightModeContext);
  const breadName = useRouter().query.collegelist;
  const breadCollegeName = useRouter().query.college;
  // console.log(breadCollegeName);
  const { loading = false } = props;
  const [jsondata, setjsondata] = useState(data);

  React.useEffect(() => {
    setjsondata(data);
  }, [router.query.college]);

  return (
    <Stack sx={{}}>
      <Box sx={{ margin: "10px 0" }}>
        {" "}
        <BreadTitleSmall step1={breadName} step2={data.institute_name} />{" "}
      </Box>

      {/* {
               jsondata.map((item)=>
               {
                 return(
                   <>
<Box elevation={0} sx={{borderRadius:'0',}}>
     <Grid justifyContent={'left'} alignItems="center" height='100%' width='100vw' 
            
     sx={{ 
       
     paddingTop:'10px', color:'#fff', 
     display:{xs: 'none', md: 'block', lg: 'block'}}}>
   <Stack className="breadcrumb flat">
<a href="/" className='active'><HomeIcon sx={{marginBottom:'-5px'}} className='icons1' /></a>
<a href={`${item.district_name}`} className='active'>Colleges in {item.district_name}</a>
<a style={{color:'#333'}} >{item.institute_name} </a>
</Stack>
     </Grid>
     </Box>
</>
)
})
} */}
      <Card sx={{ overflow: "visible" }}>
        <GridContainer>
          {jsondata.map((item) => {
            return (
              <>
                <Grid item xs={12} md={12} lg={12}>
                  {jsondata.map((item) => {
                    return (
                      <>
                        <Card
                          sx={{
                            borderRadius: "8px 8px 0 0 ",
                            display: "flex",
                            margin: "0px 0px",
                            color: "#fff",
                            position: "relative",
                            backgroundSize: "cover",
                            height: "160px",
                            overflow: "visible",

                            backgroundPosition: "top",
                            backgroundRepeat: "no-repeat",
                            backgroundImage: item.institute_name.includes(
                              "Jeppiaar"
                            )
                              ? "url('https://jeppiaarcollege.org/jeppiaar/wp-content/uploads/2018/03/Gallery.jpg')"
                              : `url(${item.featured_image})`,
                            // backgroundImage: `url(${item.featured_image})`,
                          }}
                        >
                          {/* <Typography variant='div' sx={{position:'absolute', width:'100%', height:'100%', zIndex:'0',}}></Typography>            */}

                          <Box className="ribbon">
                            <span className="ribbon1">
                              <span>
                                <Box
                                  sx={{
                                    justifyContent: "flex-start",
                                    display: "flex",
                                    flexDirection: "column",
                                    color: "#fff",
                                  }}
                                >
                                  {item.affliation != "" ? (
                                    <Typography
                                      variant="subtitle2"
                                      sx={{
                                        fontWeight: "normal",
                                        // color: "text.secondary",
                                        // textShadow: "1px 1px 1px rgba(0,0,0, 0.5)",
                                        display: "inline-flex",
                                      }}
                                    >
                                      <SchoolIcon
                                        style={{
                                          marginBottom: "-6px",
                                          // color: "text.secondary",
                                          //   textShadow: "1px 1px 1px rgba(0,0,0, 0.5)",
                                          marginRight: "5px",
                                        }}
                                      />
                                      {item.affliation}
                                    </Typography>
                                  ) : null}
                                  {item.accrediation != "" ? (
                                    <Typography
                                      variant="subtitle2"
                                      sx={{
                                        fontWeight: "normal",
                                        marginTop: "4px",
                                        // color: "text.secondary",
                                        // textShadow: "1px 1px 1px rgba(0,0,0, 0.5)",
                                        display: "inline-flex",
                                      }}
                                    >
                                      <MilitaryTechOutlinedIcon
                                        style={{
                                          marginBottom: "-6px",
                                          //   textShadow: "1px 1px 1px rgba(0,0,0, 0.5)",
                                          marginRight: "5px",
                                          // color: "text.secondary",
                                        }}
                                      />
                                      {item.accrediation}
                                    </Typography>
                                  ) : null}

                                  <Typography
                                    variant="subtitle2"
                                    sx={{
                                      fontWeight: "normal",
                                      marginTop: "4px",
                                      //  color: "text.secondary",
                                      //   textShadow: "1px 1px 1px rgba(0,0,0, 0.5)",
                                      display: "inline-flex",
                                    }}
                                  >
                                    <StarIcon
                                      style={{
                                        marginBottom: "-6px",
                                        color: "#f8b81f",
                                        textShadow:
                                          "1px 1px 1px rgba(0,0,0, 0.5)",
                                        marginRight: "5px",
                                      }}
                                    />{" "}
                                    4.8 Reviwes
                                  </Typography>
                                </Box>
                              </span>
                            </span>
                          </Box>
                          <CardMedia
                            component="img"
                            sx={{
                              zIndex: "99",
                              height: "120px",
                              width: "120px",
                              position: "absolute",
                              bottom: "-75px",
                              textShadow: "1px 1px 1px rgba(0,0,0, 0.5)",
                              background: "#fff",
                              border: "#ccc solid 1px",
                              margin: "0px 15px 15px 15px",
                              padding: "10px",
                              borderRadius: "50%",
                              position: "absolute",
                            }}
                            image={`${item.logo}`}
                            alt={item.institute_name}
                          />
                        </Card>

                        <Box
                          sx={{
                            display: "flex",

                            paddingLeft: "140px",

                            justifyContent: "space-between",
                            margin: "8px 0 0px 0",
                          }}
                        >
                          <CardContent
                            sx={{
                              padding: "0",
                              color: "text.secondary",
                              fontSize: "small",
                            }}
                          >
                            <Typography
                              component="div"
                              variant="h3"
                              sx={{
                                padding: "0",
                                margin: "0",
                                color:
                                  themeMode === true
                                    ? "common.white"
                                    : "#3a3b39",
                              }}
                            >
                              {item.institute_name}
                            </Typography>

                            {item.address != "" ? (
                              <>
                                <Typography
                                  sx={{
                                    margin: "5px 0px",
                                    fontSize: "14px",
                                  }}
                                >
                                  <LocationOnOutlinedIcon
                                    style={{
                                      marginBottom: "-3px",
                                      fontSize: "16px",
                                    }}
                                  />{" "}
                                  {item.address}{" "}
                                </Typography>
                              </>
                            ) : null}

                            <Box
                              sx={{
                                display: "flex",
                                justifyContent: "flex-start",
                                padding: "0!important",
                              }}
                            >
                              {item.location != "" ? (
                                <>
                                  <Typography
                                    sx={{
                                      margin: "0px 8px 0 0",
                                      fontSize: "14px",
                                      display: "flex",
                                    }}
                                  >
                                    <PinDropOutlinedIcon
                                      style={{
                                        marginBottom: "-3px",
                                        fontSize: "16px",
                                      }}
                                    />{" "}
                                    {item.location}{" "}
                                  </Typography>
                                </>
                              ) : null}

                              {item.website != "" ? (
                                <>
                                  <Typography
                                    sx={{
                                      margin: "0px 8px 0 0",
                                      fontSize: "14px",
                                      display: "flex,",
                                    }}
                                  >
                                    <InsertLinkOutlinedIcon
                                      style={{
                                        marginBottom: "-3px",
                                        fontSize: "16px",
                                      }}
                                    />{" "}
                                    <Link href={`${item.website}`}>
                                      {item.website}
                                    </Link>
                                  </Typography>
                                </>
                              ) : null}

                              {item.email != "" ? (
                                <>
                                  <Typography
                                    sx={{
                                      margin: "0",
                                      fontSize: "14px",
                                    }}
                                  >
                                    <EmailOutlinedIcon
                                      style={{
                                        marginBottom: "-3px",
                                        fontSize: "16px",
                                      }}
                                    />{" "}
                                    <Link href={`mailto:${item.email}`}>
                                      {" "}
                                      {item.email}
                                    </Link>
                                  </Typography>
                                </>
                              ) : null}
                            </Box>
                          </CardContent>

                          <CardContent
                            sx={{
                              display: "flex",
                              justifyContent: "space-evenly",
                              flexDirection: "column",
                            }}
                          >
                            <Button
                              className=""
                              size="small"
                              variant="contained"
                              sx={{
                                textTransform: "uppercase",
                                marginBottom: "1em",
                              }}
                            >
                              <ArrowForwardIcon sx={{ marginRight: "5px" }} />{" "}
                              Apply Now
                            </Button>

                            <Button
                              size="small"
                              variant="outlined"
                              sx={{ textTransform: "uppercase" }}
                            >
                              <DownloadIcon sx={{ marginRight: "5px" }} />{" "}
                              Download Brochure
                            </Button>
                          </CardContent>
                        </Box>
                      </>
                    );
                  })}
                  <Stack>
                    <Tab />
                  </Stack>
                </Grid>
                {/* ------------------Quick Info */}
              </>
            );
          })}
        </GridContainer>
      </Card>
    </Stack>
  );
}
