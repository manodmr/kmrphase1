import React from "react";
import {
  Card as KMRCard,
  ImageListItem,
  ImageListItemBar,
  CardMedia,
  Avatar,
  Box,
  Typography,
  CardActions,
  CardContent,
} from "@mui/material";
import AdmissionButton from "../Button/AdmissionButton";
import CourseFeeButton from "../Button/CourseFeeButton";
import ApplyButton from "../Button/ApplyButton";
import BrouchureButton from "../Button/BrouchureButton";
// import CardAvatar from "../Avatar/CardAvatar";

const Card = ({
  CollegeImage,
  CollegeName,
  CollegeDistrict,
  CollegeState,
  Courses,
  Rating,
  CollegeLogo,
  AdmissionFee,
  sx,
}) => {
  return (
    <KMRCard
      sx={{
        width: 280,
        bgcolor: "common.common.white",
        height: "100%",
        boxShadow: "0px 1px 1.5px 1.5px #dad7cd",
        justifyContent: "stretch",
        alignItems: "stretch",
      }}
    >
      <ImageListItem sx={{ width: 280 }}>
        <ImageListItemBar
          sx={{ background: "none" }}
          actionIcon={
            <Avatar
              sx={{
                position: "absolute",
                width: 50,
                height: 50,
                m: "0px 0px 0px 10px",
                boxShadow: "1px 1px 1px 1px grey ",
              }}
            >
              <img src={CollegeLogo} alt="" width={50} />
            </Avatar>
          }
          title={
            <>
              <Box
                sx={{
                  position: "absolute",
                  height: 60,
                  width: 68,
                  ml: 26,
                  mt: -1,
                  justifyContent: "center",
                  pt: 2,
                  p: 1,
                  pl: 1,
                  borderRadius: " 0px 0px 0px 10px ",
                  background:
                    "linear-gradient(to right ,  #AA771C -10%, #d7a806 55%, #f7d664 , #AA771C )",
                }}
              >
                <Typography variant="body2" color="common.common.white" pt={-1}>
                  Rating
                </Typography>
                <Typography
                  variant="body1"
                  color="common.goldrod"
                  fontWeight={"bold"}
                >
                  {Rating}/10
                </Typography>
              </Box>
            </>
          }
          actionPosition="left"
          position="top"
        />

        <CardMedia
          component={"img"}
          height="190"
          image={CollegeImage}
          sx={{ p: 0.5 }}
        />
      </ImageListItem>

      <CardContent>
        <Typography sx={{ mt: -1 }} variant={"title"}>
          {CollegeName}
        </Typography>

        <Typography variant="subtitle2"   >
          {CollegeDistrict} ,{CollegeState}
        </Typography>
        <Typography variant="caption">{Courses}</Typography>
        <Typography variant="caption">{AdmissionFee}</Typography>
      </CardContent>
      <CardActions
        sx={{ display: "flex", justifyContent: "space-between", mt: -2 , mb:2 }}
      >
        <AdmissionButton />
        <CourseFeeButton />
      </CardActions>
      <CardActions
        sx={{ display: "flex", justifyContent: "space-between", mt: -2 }}
      >
        <ApplyButton />
        <BrouchureButton />
      </CardActions>
    </KMRCard>
  );
};

export default Card;
