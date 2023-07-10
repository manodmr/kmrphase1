import { darkLightModeContext } from "@/Layout/Layout";
import { GridContainer } from "@/OverViews/GridContainer";
import { Home } from "@mui/icons-material";
import { Breadcrumbs, Skeleton, Typography } from "@mui/material";
import React, { useContext } from "react";
import DetailScrollMenu from "../DetailMenu/DetailScrollMenu";
import { Box } from "@/OverViews/Box";
import { useRouter } from "next/router";
import Link from "next/link";


const BreadTitleSmall = ({step1 , step2},props) => {
    const { loading = false } = props;
    const themeMode = useContext(darkLightModeContext)
    const router = useRouter();
  return (

    
      <Breadcrumbs
        aria-label="breadcrumb"
      >
        {loading ? (
          <Skeleton
            sx={{ bgcolor: "primary.main", width: { xs: 50, md: 120 } }}
            animation="pulse"
            variant="text"
          />
        ) : (
          <a href="/" >
            <Home  sx={{ marginBottom: "-3px" , fontSize:'16px',  color: themeMode === true? "grey.200" : 'primary.main'}}
             
            />
          </a>
        )}
        {loading ? (
          <Skeleton
            sx={{ bgcolor: "primary.main", width: { xs: 50, md: 120 } }}
            animation="pulse"
            variant="text"
          />
        ) : (
          <Box
          component='a' 
          href="#"
          // href={ router.query.collegelist === 'college' || router.query.collegelist === 'university' ? router.back()  : `/${router.query.collegelist.replace(/-college/g,"")}`} 
          underline="hover"
          onClick={(e) => {
            if(router.query.collegelist === 'college' || router.query.collegelist === 'university'){
              router.back()
            }else if(router.query.collegelist != 'college' || router.query.collegelist != 'university' ){
              router.push(`/${router.query.collegelist.replace(/-college/g,"")}`);
            }
          }}  
           >
           <Typography  sx={{ alignItems:'center',  fontSize:'12px', color:themeMode === true? "grey.200" : 'primary.main' }}> {router.query.collegelist.replace(/-college/g,"")} </Typography> 
          </Box>
        )}
        {/* {loading ? (
          <Skeleton
            sx={{ bgcolor: "grey.300", width: { xs: 80, md: 280 } }}
            animation="pulse"
            variant="text"
          />
        ) : (
          <Link href={`/${router.query.collegelist}/${router.query.college}`} underline="hover" >
            <Typography  sx={{ alignItems:'center',  fontSize:'12px', color:themeMode === true? "grey.200" : 'primary.main' }}>  { router.query.leaf ? " Go Back To College " : step2} </Typography> 
            
          </Link>
        )} */}
      </Breadcrumbs>

  );
};

export default BreadTitleSmall;
