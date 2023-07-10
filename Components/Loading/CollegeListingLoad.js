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

export const CollegeListingLoad = () => {
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
      <Toolbar sx={{ justifyContent: "space-evenly" }}>
        <Skeleton
          variant="rectangular"
          animation="pulse"
          width={190}
          height={40}
          sx={{
            borderRadius: 20,
            bgcolor: themeMode === true ? "grey.600" : "grey.400",
            mr: 10,
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
        <Divider orientation="vertical" sx={{ bgcolor: "black" }} />
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
          height={25}
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
          height={25}
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
          height={25}
          sx={{
            borderRadius: 20,
            bgcolor: themeMode === true ? "grey.600" : "grey.400",
          }}
        />
        <Divider orientation="vertical" sx={{ bgcolor: "black" }} />
      </Toolbar>
      <GridContainer container justifyContent={"center"} alignItems={'center'} rowSpacing={1} columnSpacing={1} my={1} mx={1} sx={{ width:'100%' ,display:'flex' }} >
        {[1,2,3,4,5,6,7,8].map((e) => {
          return(
        <GridItem key={e} md={4} lg={3} xl={3}>
          <Card
            
            sx={{
              height: "100%",
              width: 280,
              bgcolor: themeMode === true ? "grey.700" : "common.white",
              // bgcolor:themeMode === true ? '#789395' : "common.white",
              display: "grid",
              color: themeMode === true ? "common.white" : "common.black",
              borderRadius: "13px",
              alignItems: "normal",
              // justifyContent: "left",
            }}
          >
            <Skeleton
              sx={{ height: 180 ,  bgcolor: themeMode === true ? "grey.600" : "grey.400", }}
              animation="pulse"
              variant="rectangular"
             
            />
            <CardHeader
              sx={{ display: "flex" }}
              avatar={
                <Skeleton
                  sx={{
                    bgcolor: themeMode === true ? "grey.500" : "grey.300",
                    height: 65,
                    width: 65,
                    mt: -7,
                    borderRadius: "15px",
                  }}
                  animation="pulse"
                  variant="circle"
                />
              }
              title={
                <Box sx={{ display: "flex", pl: 13, mt: -3 }}>
                  <Skeleton
                    animation="pulse"
                    sx={{ width: 50 ,  bgcolor: themeMode === true ? "grey.600" : "grey.400",}}
                    variant="text"
                  />
                </Box>
              }
            />
            <CardContent
              sx={{ mt: -1, display: "grid", justifyContent: "left" }}
            >
              <Skeleton animation="pulse" variant="text" sx={{  bgcolor: themeMode === true ? "grey.600" : "grey.400", width:180 }} />
            </CardContent>

            <CardActions sx={{ mt: -4 }}>
              <Box
                sx={{
                  mt: 1,
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  px: 1,
                }}
              >
                <Skeleton
                  sx={{
                    width: 120,
                    fontSize: "12px",
                    my: 1,
                    py: 2,
                    borderRadius: "10px",
                    bgcolor: themeMode === true ? "grey.600" : "grey.300",
                  }}
                  variant="rectangular"
                />
                <Skeleton
                  sx={{
                    width: 120,
                    fontSize: "12px",
                    my: 1,
                    py: 2,
                    borderRadius: "10px",
                    bgcolor: themeMode === true ? "grey.600" : "grey.300",
                  }}
                  variant="rectangular"
                />
              </Box>
            </CardActions>

        
          </Card>
        </GridItem>
          )
        })}
      </GridContainer>
    </Stack>
  );
};
