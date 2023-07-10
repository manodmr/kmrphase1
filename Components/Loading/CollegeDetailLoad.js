import { darkLightModeContext } from "@/Layout/Layout";
import { Box } from "@/OverViews/Box";
import { Card } from "@/OverViews/Card/Card";
import { CardActions } from "@/OverViews/Card/CardActions";
import { CardContent } from "@/OverViews/Card/CardContent";
import { CardHeader } from "@/OverViews/Card/CardHeader";
import { GridContainer } from "@/OverViews/GridContainer";
import { GridItem } from "@/OverViews/GridItem";
import { Stack } from "@/OverViews/Stack";
import Load from "@/public/Process.gif";
import { Divider, Skeleton, Toolbar ,Typography } from "@mui/material";
import Image from "next/image";
import React, { useContext } from "react";

export const CollegeDetailLoad = () => {
  const themeMode = useContext(darkLightModeContext);
  return (
    <Stack
      sx={{
        height: "100%",
        width: "100vw",
        justifyContent: "center",
        display: { xs: "none", sm: "none", md: "flex" },
      }}
    >
      {/* <Image src={Load} alt="Loading..." width={350} height={345} style={{ borderRadius:300 , m:-100}} /> */}
      <Toolbar sx={{ justifyContent: "space-evenly" , mx:20 }}>
    
        <Skeleton
          variant="rectangular"
          animation="pulse"
          width={100}
          height={40}
          sx={{
            borderRadius: 20,
            bgcolor: themeMode === true ? "grey.600" : "grey.400",
          }}
        />
        <Skeleton
          variant="rectangular"
          animation="pulse"
          width={90}
          height={40}
          sx={{
            borderRadius: 20,
            bgcolor: themeMode === true ? "grey.600" : "grey.400",
          }}
        />
        <Skeleton
          variant="rectangular"
          animation="pulse"
          width={110}
          height={40}
          sx={{
            borderRadius: 20,
            bgcolor: themeMode === true ? "grey.600" : "grey.400",
          }}
        />
        <Skeleton
          variant="rectangular"
          animation="pulse"
          width={110}
          height={40}
          sx={{
            borderRadius: 20,
            bgcolor: themeMode === true ? "grey.600" : "grey.400",
          }}
        />
        <Skeleton
          variant="rectangular"
          animation="pulse"
          width={110}
          height={40}
          sx={{
            borderRadius: 20,
            bgcolor: themeMode === true ? "grey.600" : "grey.400",
          }}
        />
        <Skeleton
          variant="rectangular"
          animation="pulse"
          width={100}
          height={40}
          sx={{
            borderRadius: 20,
            bgcolor: themeMode === true ? "grey.600" : "grey.400",
          }}
        />
      </Toolbar>
      <Toolbar sx={{ justifyContent: "left", mt: -2 }}>
        <Skeleton
          variant="rectangular"
          animation="pulse"
          width={100}
          height={20}
          sx={{
            borderRadius: 20,
            bgcolor: themeMode === true ? "grey.600" : "grey.400",
            mx: 3,
          }}
        />
        <Skeleton
          variant="rectangular"
          animation="pulse"
          width={100}
          height={20}
          sx={{
            borderRadius: 20,
            bgcolor: themeMode === true ? "grey.600" : "grey.400",
            mr: 3,
          }}
        />
        <Skeleton
          variant="rectangular"
          animation="pulse"
          width={100}
          height={20}
          sx={{
            borderRadius: 20,
            bgcolor: themeMode === true ? "grey.600" : "grey.400",
          }}
        />
        <Divider orientation="vertical" sx={{ bgcolor: "black" }} />
      </Toolbar>
      <GridContainer container width={'100vw'} justifyContent={"center"} alignItems={'center'} my={2} mx={3} sx={{  display:'flex' }} >

        <GridItem md={12} lg={12} xl={12}>
         <Skeleton variant="rectangular" animation="pulse" width={'95vw'} height={270} 
         sx={{
            borderRadius: "30px 30px 0px 0px",
            bgcolor: themeMode === true ? "grey.600" : "grey.400",
           
          }}  />
        </GridItem>
        <GridItem md={8} lg={8} xl={8} mt={2} ml={-7} >
         <Skeleton variant="rectangular" animation="pulse" width={'90%'} height={270} 
         sx={{
            borderRadius: "30px",
            bgcolor: themeMode === true ? "grey.600" : "grey.400",
           
          }}  />
        </GridItem>
        <GridItem md={4} lg={3.5} xl={3.5}  mt={2}  >
         <Skeleton variant="rectangular" animation="pulse" width={'100%'} height={270} 
         sx={{
            borderRadius: "30px",
            bgcolor: themeMode === true ? "grey.600" : "grey.400",
           
          }}  />
        </GridItem>
       
      </GridContainer>
    </Stack>
  );
};
