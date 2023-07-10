import React, { useContext, useEffect } from "react";
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
} from "@mui/material";
import WhatsnewImg from "/public/WhatsNew.png";

import Image from "next/image";
import { useRouter } from "next/router";
import { darkLightModeContext } from "@/Layout/Layout";

export default function Whatsnew({ data }, props) {
  const router = useRouter();
  const [jsondata, setJsondata] = React.useState(data);
  useEffect(() => {
    setJsondata(data);
  }, [router.query.college]);

  const themeMode = useContext(darkLightModeContext);
  return (
    <Stack sx={{ bgcolor : themeMode === true ? "grey.900" :"common.white" , ml:-3, mt:-2 , pl:2 }} >
      {jsondata.map((item) => {
        return (
          <>
            {item.whatsnew != "" ? (
              <Box
                sx={{
                  padding: "20px",
                  boxShadow: "0px 10px 50px 0px rgb(26 46 85 / 7%)",
                }}
              >
                  <Typography
                    variant="h6"
                    sx={{
                      marginBottom: "8px",
                      paddingBottom: "3px",
                      display: "inline-block",
                      width: "100%",
                      pt:-    2
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
                    <>
                      <Typography
                        sx={{
                          color:
                            themeMode === true ? "grey.500" : "text.secondary",
                            fontSize: "13px",
                            lineHeight: "25px"  
                        }}
                      >
                         <Image
                          width={200}
                          height={200}
                          src={WhatsnewImg}
                          style={{
                            marginLeft: "5px",
                            marginBottom: "5px",
                            float:"right"
                          }}
                        />
                        {item.whatsnew}
                      </Typography>
                     
                    </>
                  );
                })}
              </Box>
            ) : null}
          </>
        );
      })}
    </Stack >
  );
}
