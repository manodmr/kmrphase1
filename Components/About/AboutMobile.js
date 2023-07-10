import { useRouter } from 'next/router';
import React, { useContext, useEffect, useState } from 'react'
import { darkLightModeContext } from "@/Layout/Layout";
import { Box, Button, Divider, Typography } from '@mui/material';

export default function AboutMobile({data}) {
    const router = useRouter();
    const [jsondata, setJsondata] = useState(data);
    useEffect(() => {
      setJsondata(data);
    }, [router.query.college]);
    const [seeMore, setSeeMore] = useState(false);
    const [seeMoreAbout, setSeeMoreAbout] = useState(false);
    const themeMode = useContext(darkLightModeContext);
  return (
    <>
    {
        jsondata.map((item)=>
        {
            return (
                <>
                  {item.college_desc != "" ? (
                    <>
                    <Box
                      sx={{
                        display: "grid",
                        bgcolor: themeMode === true ? "grey.700" :"grey.300",
                        ml: -2,
                        height: seeMoreAbout === true ? "100%" :"160px",
                        borderRadius: "0px 50px 50px 0px",
                        px: 1,
                        pt: seeMoreAbout === true ? -10 : 2,
                        py: seeMoreAbout === true ? 6 : 0,
                        // pt: seeMoreAbout === true ? -5 : 0,
                        
                      }}
                    >
                      <Typography
                        variant="h6"
                        sx={{
                          marginBottom: "8px",
                          paddingBottom: "3px",
                          display: "inline-block",
                          width: "100%",
                          mt: seeMoreAbout ===  true ? -5 : 0
                        }}
                      
                      >
                        About{" "}
                        <Divider
                          sx={{
                            width: "30px",
                            border: "2px solid green",
                            borderRadius: "2px",
                          }}
                        />
                      </Typography>
      
                      <Typography
                        sx={{
                          color: themeMode === true ? "grey.500" : "grey.200",
                          height: seeMoreAbout === true ?  '100%' : '100px',
                          overflow: seeMoreAbout === true ? 'none' : 'hidden', 
                          color:'black.100',
                          alignItems: "start",
                          mt: seeMoreAbout === true ? 0 :  -4,
                          mb: -5,
                          pl:1,
                          borderRadius:'0px 0px 30px 0px',
                          pr:1,
                        }}
                      >
                        {item.college_desc}
                      </Typography>

                    </Box>
                    {seeMoreAbout === true ? 
                      <Button
                      sx={{ width:'100%' , mt:-0.5 , justifyContent:'right' }}
                      onClick={() => {
                        setSeeMoreAbout(false)
                      }} >
                      See Less
                      </Button > :
                       <Button 
                       sx={{ width:'100%' , mt:-0.5 , justifyContent:'right'}}
                       onClick={() => {
                        setSeeMoreAbout(true)
                       }} >
                       See More
                       </Button >
                      }
                    </>
                  ) : null}
                </>
              );
        })
    }
    </>
  )
}
