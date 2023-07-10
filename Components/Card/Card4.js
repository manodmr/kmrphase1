import React, { useContext } from "react";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  Skeleton,
  Typography,
} from "@mui/material";
import PlaceIcon from "@mui/icons-material/Place";
import DownloadIcon from "@mui/icons-material/Download";
import { AiFillStar } from "react-icons/ai";
import Link from "next/link";
import { darkLightModeContext, searchContext } from "@/Layout/Layout";
import Router, { useRouter } from "next/router";


function CardComponentFour(
  {
    CollegeImage,
    CollegeName,
    CollegeDistrict,
    CollegeState,
    Courses,
    Rating,
    CollegeLogo,
    CollegeId,
    AdmissionFee,
    sx,
    href
  },
  props
) {
  const themeMode = useContext(darkLightModeContext);
   const loading = useContext(searchContext);
  // const { loading = false } = props;
  const router = useRouter();
 const name = router.query.collegelist
  return (
    <div>
      <Grid container item xs={12} md={4} sx={{ justifyContent: "center" }}>
      <Button
       onClick={() => { 
      router.push(
        `/${name}-college/${
        CollegeId
      }-${CollegeName.replace(
        /[ ]+/g,
        "-"
      )}-${CollegeDistrict}`, undefined,{ shallow : true , scroll : true });
      // router.push(href);
      // Router.push()
     } }
     sx={{textAlign:"left"}}
     >
          <Card
            sx={{
              height: "100%",
              width: 340,
              display: "flex",
              borderRadius: "10px",
              boxShadow: 5,
              bgcolor: themeMode === true ? "grey.700" : "common.white",
              color: themeMode === true ? "common.white" : "common.black",
            }}
          >
            <Grid
              container
              sx={{
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
              }}
            >
              <Box sx={{ width: "85%", justifyItems: "center" }}>
                {loading ? (
                  <Skeleton
                    width={90}
                    height={90}
                    sx={{ borderRadius: "14px", ml: 1, bgcolor: "grey.300" }}
                    variant="circle"
                  />
                ) : (
                  <CardMedia
                    sx={{ borderRadius: "20px", position: "relative" }}
                    component="img"
                    height="80px"
                    image={`${CollegeImage}`}
                    alt="anna university"
                  />
                )}
                {loading ? (
                  <Skeleton
                    width={45}
                    animation="wave"
                    sx={{ bgcolor: "grey.400", mt: -2, height: 30 }}
                    variant="text"
                  />
                ) : (
                  <Box
                    sx={{
                      position: "absolute",
                      display: "flex",
                      zIndex: 50,
                      backgroundColor: "goldenrod",
                      borderRadius: "9px",
                      width: 48,
                      height: 24,
                      justifyContent: "space-between",
                      alignItems: "center ",
                      mt: -1.8,
                      px: 0.9,
                      color:
                        themeMode === true ? "common.white" : "common.black",
                    }}
                  >
                    <>
                      <AiFillStar
                        style={{ color: "white", fontSize: "17px" }}
                      />
                      <Typography
                        variant="caption"
                        sx={{ color: "common.white", pl: 0.4 }}
                      >
                        {" "}
                        {Rating/5}
                      </Typography>
                    </>
                  </Box>
                )}
              </Box>
            </Grid>

            <Grid sx={{ width: 240 }}>
              <CardHeader sx={{ my: -1.5 }} />
              <CardContent sx={{ display: "grid" }}>
                {loading ? (
                  <Skeleton variant="text" />
                ) : (
                  <Typography variant="subtitle1">{CollegeName}</Typography>
                )}

                <Box>
                  {loading ? (
                    <Skeleton width={150} variant="text" />
                  ) : (
                    <>
                      <PlaceIcon sx={{ fontSize: "13px", color: "grey" }} />
                      <Typography
                        variant="caption"
                        sx={{ color: themeMode === true ? 'grey.300' : 'grey.600' , }}
                        gutterBottom
                      >
                        {CollegeDistrict},{CollegeState}
                      </Typography>
                    </>
                  )}
                </Box>
                {loading ? (
                  <Skeleton width={120} variant="text" />
                ) : (
                  <Typography variant="caption">{Courses}</Typography>
                )}
              </CardContent>

              <CardActions sx={{ mt: -2 }}>
                {loading ? (
                  <Skeleton width={90} height={25} variant="rounded" />
                ) : (
                  <Button size="small">
                    <DownloadIcon fontSize="small" />
                    Brouchure
                  </Button>
                )}
                {loading ? (
                  <Skeleton width={90} height={25} variant="rounded" />
                ) : (
                  <Button variant="contained" sx={{ width: 105 }} size="small">
                    {/* <ArrowForwardIcon fontSize='small'/> */}
                    Apply Now
                  </Button>
                )}
              </CardActions>
            </Grid>
          </Card>
          </Button>
      </Grid>
    </div>
  );
}

export default CardComponentFour;
