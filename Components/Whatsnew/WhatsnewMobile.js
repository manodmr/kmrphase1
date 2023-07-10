import React, { useContext, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import {
  Grid,
  Typography,
  Divider,
  CardHeader,
  CardContent,
  Avatar,
  Stack,
  Card,
  CardMedia,
  Button,
} from "@mui/material";
import WhatsnewImg from "/public/3DImages/WhatsNew.png";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import InsertLinkOutlinedIcon from "@mui/icons-material/InsertLinkOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import SchoolIcon from "@mui/icons-material/School";
import PinDropOutlinedIcon from "@mui/icons-material/PinDropOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";

import Image from "next/image";
import { useRouter } from "next/router";
import { darkLightModeContext } from "@/Layout/Layout";
import Link from "next/link";

export default function WhatsnewMobile({ data }, props) {
  const router = useRouter();
  const [jsondata, setJsondata] = React.useState(data);
  useEffect(() => {
    // jsondata.splice(0,jsondata.length);
    // if (router.query.college) {
    setJsondata(data);
    // }
  }, [router.query.college]);
  const themeMode = useContext(darkLightModeContext);
  const [seeMore, setSeeMore] = useState(false);
  return (
    <>
      {jsondata.map((item) => {
        return (
          <>

            {item.whatsnew != "" ? (
              <Box
                sx={{
                  marginTop: "20px",
                }}
              >
                 <Typography
                    variant="h6"
                    sx={{
                      marginBottom: "8px",
                      paddingBottom: "3px",
                      display: "inline-block",
                      width: "100%",
                      // pt:-    2
                    }}
                  >
                    What's New from this college{" "}
                    <Divider
                      sx={{
                        width: "80px",
                        border: "2px solid green",
                        borderRadius: "2px",
                      }}
                    />
                  </Typography>

                {jsondata.map((item) => {
                  return (
                    <Box sx={{ height:seeMore === true ?  '100%' : '140px' , display:'grid' ,mb:1 }} >
                      <Typography
                        sx={{
                          color:
                            themeMode === true ? "grey.500" : "text.secondary",
                            color:'black.100',
                            alignItems: "start",  
                            height: seeMore === true ?  '100%' : '120px',
                            overflow: seeMore === true ? 'none' : 'hidden'
                        }}
                      >  
                        <Image
                          width={100}
                          height={138}
                          src={WhatsnewImg}
                          style={{
                            marginLeft: "5px",
                            marginBottom: "5px",
                            float: "right",
                          }}
                        />
                        {item.whatsnew}
                      </Typography>
                      {seeMore === true ? 
                      <Button 
                      variant="contained"
                      sx={{  width:'100%', justifyContent:'right' }}
                      onClick={() => {
                        setSeeMore(false)
                      }} >
                      {`<<`} See Less
                      </Button > :
                       <Button 
                       variant="contained"
                       sx={{  width:'100%' , justifyContent:'right' }}
                       onClick={() => {
                         setSeeMore(true)
                       }} >
                       See More {`>>`}
                       </Button >
                      }
                    </Box>
                  );
                })}
              </Box>
            ) : null}
          </>
        );
      })}
    </>
  );
}
