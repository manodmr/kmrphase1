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

export default function Top({ data }, props) {
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
    <Stack
      sx={{
        bgcolor: themeMode === true ? "grey.700" : "common.white",
        display: "flex",
        justifyContent: "space-between",
        justifyItems: "center",
      }}
    >
      <BreadTitle step1={breadName} step2={data.institute_name} />

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
      <Grid container spacing={2}>
        {jsondata.map((item) => {
          return (
            <>
              <Grid item xs={12} md={8} lg={8}>
                {" "}
                {jsondata.map((item) => {
                  return (
                    <Card
                      sx={{
                        borderRadius: "0",
                        display: "flex",
                        margin: "0px 0px",
                        color: "#fff",
                        position: "relative",
                        backgroundSize: "cover",
                        height: "230px",
                        borderRadius: "25px 0px 0 0",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        backgroundImage:item.institute_name.includes('Jeppiaar') ? "url('https://jeppiaarcollege.org/jeppiaar/wp-content/uploads/2018/03/Gallery.jpg')" :`url(${item.featured_image})`,
                      }}
                    >
                      {/* <Typography variant='div' sx={{position:'absolute', width:'100%', height:'100%', zIndex:'0',}}></Typography>            */}

                      <Box
                        sx={{
                          background:
                            "background: -moz-linear-gradient(top, transparent 0, rgba(0, 0, 0, 0.9) 87%, rgba(0, 0, 0, 0.9) 100%);background: -webkit-linear-gradient(top, transparent 0, rgba(0, 0, 0, 0.9) 87%, rgba(0, 0, 0, 0.9) 100%);background: linear-gradient(to bottom, transparent 0, rgba(0, 0, 0, 0.9) 87%, rgba(0, 0, 0, 0.9) 100%);",
                        }}
                      >
                        <CardMedia
                          component="img"
                          sx={{
                            zIndex: "99",
                            height: "80px",
                            width: "80px",
                            position: "absolute",
                            bottom: "0",
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
                      </Box>
                      <Box
                        sx={{
                          zIndex: "1",
                          display: "flex",
                          position: "absolute",
                          bottom: "0",
                          paddingLeft: "100px",
                          width: "100%",
                          height: "100%",
                          flexDirection: "column",
                          background:
                            "-moz-linear-gradient(top, transparent 0, rgba(0, 0, 0, 0.9) 87%, rgba(0, 0, 0, 0.9) 100%)",
                          background:
                            "-webkit-linear-gradient(top, transparent 0, rgba(0, 0, 0, 0.9) 87%, rgba(0, 0, 0, 0.9) 100%)",
                          background:
                            "linear-gradient(to bottom, transparent 0, rgba(0, 0, 0, 0.9) 87%, rgba(0, 0, 0, 0.9) 100%)",
                        }}
                      >
                        <CardContent
                          sx={{
                            flex: "1 0 auto",
                            position: "absolute",
                            bottom: "0",
                            paddingBottom: "12px!important",
                          }}
                        >
                          <Typography
                            component="div"
                            variant="h3"
                            sx={{ textShadow: "1px 1px 1px rgba(0,0,0, 0.5)}" }}
                          >
                            {item.institute_name}
                          </Typography>

                          {item.affliation != "" ? (
                            <Typography
                              variant="subtitle2"
                              sx={{
                                fontWeight: "normal",
                                marginTop: "8px",
                                color: "#ccc",
                                textShadow: "1px 1px 1px rgba(0,0,0, 0.5)",
                                display: "inline-flex",
                                marginRight: "15px",
                              }}
                            >
                              <SchoolIcon
                                style={{
                                  marginBottom: "-6px",
                                  textShadow: "1px 1px 1px rgba(0,0,0, 0.5)",
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
                                marginTop: "8px",
                                color: "#ccc",
                                textShadow: "1px 1px 1px rgba(0,0,0, 0.5)",
                                display: "inline-flex",
                                marginRight: "15px",
                              }}
                            >
                              <MilitaryTechOutlinedIcon
                                style={{
                                  marginBottom: "-6px",
                                  textShadow: "1px 1px 1px rgba(0,0,0, 0.5)",
                                  marginRight: "5px",
                                }}
                              />
                              {item.accrediation}
                            </Typography>
                          ) : null}

                          {item.col_type != "" ? (
                            <Typography
                              variant="subtitle2"
                              sx={{
                                fontWeight: "normal",
                                marginTop: "8px",
                                color: "#ccc",
                                textShadow: "1px 1px 1px rgba(0,0,0, 0.5)",
                                display: "inline-flex",
                                marginRight: "15px",
                              }}
                            >
                              <WorkspacePremiumIcon
                                style={{
                                  marginBottom: "-6px",
                                  textShadow: "1px 1px 1px rgba(0,0,0, 0.5)",
                                  marginRight: "5px",
                                }}
                              />
                              {item.col_type}
                            </Typography>
                          ) : null}

                          <Typography
                            variant="subtitle2"
                            sx={{
                              fontWeight: "normal",
                              marginTop: "8px",
                              color: "#fff",
                              textShadow: "1px 1px 1px rgba(0,0,0, 0.5)",
                              display: "inline-flex",
                              marginRight: "15px",
                            }}
                          >
                            <StarIcon
                              style={{
                                marginBottom: "-6px",
                                color: "#f8b81f",
                                textShadow: "1px 1px 1px rgba(0,0,0, 0.5)",
                                marginRight: "5px",
                              }}
                            />{" "}
                            4.8 Reviwes
                          </Typography>
                        </CardContent>
                      </Box>
                    </Card>
                  );
                })}
                <Stack>
                  <Tab />
                </Stack>
              </Grid>
              {/* ------------------Quick Info */}
              <Grid
                item
                xs={12}
                md={4}
                lg={4}
                sx={{ paddingLeft: "0px !important" }}
              >
                <Card
                  sx={{
                    margin: "0 32px 0px 0",
                    boxShadow:
                      themeMode === true ? "0 0 3px #333" : "0 0 3px #ccc",
                    borderRadius: "0 25px 0 0px",
                    padding: "12px 12px 12px 18px!important",
                    bgcolor: themeMode === true ? "grey.800" : "#eaeef7",
                    color:
                      themeMode === true ? "common.white" : "text.secondary",
                  }}
                >
                  <Box
                    sx={{
                      height: "212px",
                      overflow: "hidden",
                      marginBottom: "5px",
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
                      Quick Info{" "}
                    </Typography>

                    <Box sx={{ padding: "0!important" }}>
                      <Typography variant="span">
                        {" "}
                        <AccountBalanceIcon
                          style={{
                            marginBottom: "-3px",
                            fontSize: "16px",
                            marginRight: "5px",
                          }}
                        />
                      </Typography>

                      {item.founder != "" ? (
                        <>
                          <Typography
                            variant="span"
                            sx={{
                              paddingBottom: "5px",
                              margin: "5px 0px",
                              fontSize: "14px",
                            }}
                          >
                            {" "}
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

                    {item.address != "" ? (
                      <>
                        <Typography
                          sx={{
                            paddingBottom: "5px",
                            margin: "5px 0px",
                            fontSize: "14px",
                          }}
                        >
                          <LocationOnOutlinedIcon
                            style={{ marginBottom: "-3px", fontSize: "16px" }}
                          />{" "}
                          {item.address}{" "}
                        </Typography>
                      </>
                    ) : null}

                    {item.location != "" ? (
                      <>
                        <Typography
                          sx={{
                            paddingBottom: "5px",
                            margin: "5px 0px",
                            fontSize: "14px",
                          }}
                        >
                          <PinDropOutlinedIcon
                            style={{ marginBottom: "-3px", fontSize: "16px" }}
                          />{" "}
                          {item.location}{" "}
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
                      {item.website != "" ? (
                        <>
                          <Typography
                            sx={{
                              paddingBottom: "5px",
                              color: "#008aa9",
                              margin: "5px 0px",
                              fontSize: "14px",
                              display: "flex,",
                            }}
                          >
                            <InsertLinkOutlinedIcon
                              style={{ marginBottom: "-3px", fontSize: "16px" }}
                            />{" "}
                            <Link href={`tel:${item.website}`}>
                              {item.website}
                            </Link>
                          </Typography>
                        </>
                      ) : null}

                      {item.email != "" ? (
                        <>
                          <Typography
                            sx={{
                              paddingBottom: "5px",
                              color: "#008aa9",
                              margin: "5px 0px",
                              fontSize: "14px",
                            }}
                          >
                            <EmailOutlinedIcon
                              style={{
                                marginBottom: "-3px",
                                fontSize: "16px",
                                marginLeft: "10px",
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
                  </Box>

                  <Box
                    sx={{
                      zIndex: "1",
                      display: "flex",
                      flexDirection: "column",
                      margin: "0!important",
                    }}
                  >
                    <CardContent
                      sx={{
                        display: "flex",
                        justifyContent: "space-evenly",
                        padding: "0!important",
                      }}
                    >
                      <Button
                        className=""
                        size="small"
                        variant="contained"
                        sx={{ textTransform: "uppercase", padding: "6px 8px" }}
                      >
                        <ArrowForwardIcon sx={{ marginRight: "5px" }} /> Apply
                        Now
                      </Button>

                      <Button
                        size="small"
                        variant="outlined"
                        sx={{ textTransform: "uppercase", padding: "6px 8px" }}
                      >
                        <DownloadIcon sx={{ marginRight: "5px" }} /> Download
                        Brochure
                      </Button>
                    </CardContent>
                  </Box>
                </Card>
              </Grid>
            </>
          );
        })}
      </Grid>
    </Stack>
  );
}
