import React, { useContext } from "react";
import { styled } from "@mui/material/styles";
import {
  Grid,
  Typography,
  Link,
  Paper,
  Box,
  Stack,
  TextField,
  Button,
  List,
} from "@mui/material";
import {
  Facebook,
  Twitter,
  YouTube,
  Telegram,
  Instagram,
  Pinterest,
  Google,
} from "@mui/icons-material/";
import KMRImage from '../../public/icons/kalvimalar-english-logo.png';
import KMRImageWhite from '../../public/icons/kalvimalar-english-logo-white.png';
import Image from "next/image";
import { darkLightModeContext } from "@/Layout/Layout";
import { useRouter } from "next/router";

const Text = styled(Typography)({
  color: "common.white",
  lineHeight: "2",
});

function FooterPage() {
  const themeMode = useContext(darkLightModeContext)
  const router = useRouter();
  return (
     <>
     {
     (router.route == "/login1") || (router.route == "/login") || (router.route == "/search")|| (router.route == "/register") ||(router.route == "/register1")
     ? null :
    <Stack 
     width='100vw'
     height='100%'
     alignItems='center'
     justifyContent='center'
     sx={{ bgcolor: themeMode === true? 'grey.600' : 'grey.800' , p:5 , color:'common.white' }}
     >
      <Grid
        container
        maxWidth={{xl:"xl",lg:'lg',md:'md'}}
        display={'flex'}
      >
        <Grid item xs={12} md={4} lg={4} xl={4} sx={{ background: "none" }}>
          <Stack>
            {/* <Box sx={{ bgcolor:'common.white', width:'70%' , borderRadius:'5px', pl:1.7  }} > */}
            <Image
              src={themeMode === true ? KMRImage : KMRImageWhite}
              width="100%"
              height="50px"
              style={{ marginBottom:2}}
            />
            {/* </Box> */}

            <Text variant="subtitle1">Dinamalar</Text>
            <Text variant="subtitle2">39, Whites Rd, Express Estate,</Text>
            <Text variant="subtitle2">Royapettah, Chennai - 600 002</Text>
            <Text variant="subtitle2">Tamilnadu, India.</Text>
            {/* <List style={{ listStyle: "none" }}>
            39, Whites Rd, Express Estate, Royapettah, Chennai, Tamil Nadu 600014
              <ListItem>
                <Text variant="subtitle2">Fax : +91-44-28592815</Text>
              </ListItem>
              <ListItem>
                <Text variant="subtitle2">
                  Phone: +91-44-28542700, 28592814
                </Text>
              </ListItem>
              <ListItem>
                <Text variant="subtitle2">
                  Email:{" "}
                  <Link href="mailto:kalvimalar@dinamalar.in" target="_blank">
                    kalvimalar@dinamalar.in
                  </Link>
                </Text>
              </ListItem>
            </List> */}
          </Stack>
        </Grid>
        <Grid item xs={12} md={4} lg={4} xl={4} sx={{ lineHeight: 2 }}>
          {/* <Item> */}
          <Text sx={{ marginBottom: "10px" }}>
            <Link href="#" fontWeight="bold" color="common.white">
              Links
            </Link>
          </Text>
          <Text>
            <Link href="#">B.Tech</Link>
          </Text>
          <Text>
            <Link href="#">MBA</Link>
          </Text>
          <Text>
            <Link href="#">MBBS</Link>
          </Text>
          <Text>
            <Link href="#">Design</Link>
          </Text>
          <Text>
            <Link href="#">Law</Link>
          </Text>
          <Text>
            <Link href="#">Science</Link>
          </Text>
          <Text>
            <Link href="#">Study Abroad</Link>
          </Text>
          <Text>
            <Link href="#">All Courses</Link>
          </Text>
          {/* // </Item> */}
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          lg={4}
          xl={4}
          display={{ xs: "none", lg: "block" }}
          sx={{ width: "100%", justifyContent: "center" }}
        >
          {/* <Item> */}
          <Text variant="body1" fontWeight="bold" sx={{ marginBottom: "10px" }}>
            Contacts
          </Text>
          <Text variant="body2" fontWeight="normal">
            Enter your email address to register to our newsletter
          </Text>
          <Text sx={{ marginBottom: "10px" }}>subscription</Text>
          {/* <Stack direction='column'> */}
          <Box
            dispay="flex"
            sx={{ width: "100%", justifyContent: "space-between" }}
          >
            <TextField
              placeholder="Your email"
              variant="filled"
              size="small"
              sx={{ background: "common.white" }}
            />
            <Button variant="contained" sx={{ height: "50px", width: "100px" }}>
              Submit
            </Button>
          </Box>
          {/* // </Stack> */}
          {/* // </Item> */}
          <Stack sx={{ marginTop: "30px" }} direction="row" columnGap={2}>
            <Facebook sx={{ color: "common.white" }} />
            <Twitter sx={{ color: "common.white" }} />
            <YouTube sx={{ color: "common.white" }} />
            <Telegram sx={{ color: "common.white" }} />
            <Pinterest sx={{ color: "common.white" }} />
            <Instagram sx={{ color: "common.white" }} />
            <Google sx={{ color: "common.white" }} />
          </Stack>
        </Grid>
      </Grid>

    </Stack>
      }
     </>
  );
}

export default FooterPage;
