import { darkLightModeContext } from "@/Layout/Layout";
import { GridContainer } from "@/OverViews/GridContainer";
import { Home } from "@mui/icons-material";
import { Skeleton } from "@mui/material";
import React, { useContext } from "react";
import DetailScrollMenu from "../DetailMenu/DetailScrollMenu";
import { Box } from "@/OverViews/Box";
import { useRouter } from "next/router";
import Link from "next/link";


const BreadTitle = ({step1 , step2},props) => {
    const { loading = false } = props;
    const themeMode = useContext(darkLightModeContext)
    const router = useRouter();
  return (
    // <Box className="grad">
<Box>
    <GridContainer sx={{background:'transparent'}}
      justifyContent={"space-between"}
      alignItems="center"
      height="100%"
      width="100vw"
      px={0}
      pt={1}
      pb={1}
    >
      <div
        aria-label="breadcrumb"
        class={
          themeMode === true ? "breadcrumbDark flatDark" : "breadcrumb flat"
        }
      >
        {loading ? (
          <Skeleton
            sx={{ bgcolor: "primary.main", width: { xs: 50, md: 120 } }}
            animation="pulse"
            variant="text"
          />
        ) : (
          <a href="/" class="active">
            <Home sx={{marginBottom:'-7px'}}
             
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
          <Link href={`/${router.query.collegelist.replace(/-college/g,"")}`} class="active" >
             {router.query.collegelist.replace(/-college/g,"")}
          </Link>
        )}
        {loading ? (
          <Skeleton
            sx={{ bgcolor: "grey.300", width: { xs: 80, md: 280 } }}
            animation="pulse"
            variant="text"
          />
        ) : (
          <Link href={`/${router.query.collegelist}/${router.query.college}`} className="active">
            { router.query.leaf ? " Go Back To College " : step2} 
          </Link>
        )}
      </div>
      {/* <DetailScrollMenu/> */}
    </GridContainer>
</Box>
  );
};

export default BreadTitle;
