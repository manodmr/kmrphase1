import {
  AppBar,
  Avatar,
  Box,
  Button,
  Divider,
  Grid,
  InputBase,
  Paper,
  Toolbar,
  Typography,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  IconButton,
  InputAdornment,
  TextField,
  OutlinedInput,
  FormControl,
  InputLabel,
} from "@mui/material";
import {
  Home,
  Login,
  Menu as MenuIcon,
  Search,
  AccountBalance as College,
  Castle as University,
  School as Stream,
  BusinessCenter as IIT,
  LanOutlined,
  Mail,
  Password,
  Visibility,
  VisibilityOff,
  AccountCircle,
} from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import kmrLogotam from "/public/icons/kalvimalar-english-logo.png";
import Image from "next/image";
import Link from "next/link";
import { Stack } from "@/OverViews/Stack";
import LoginImage from "@/public/3DImages/GirlPot.png";
// import LoginImage from "@/public/3DImages/Login.png";
import UserImage from "@/public/3DImages/User.png";
import LoginComponent from "@/Components/Login/Login";
import PhoneIcon from "@mui/icons-material/Phone";
import { TextAnimate } from "@/theme/animate";
import axios, { Axios } from "axios";
import { MuiOtpInput } from 'mui-one-time-password-input'
import OTPSideImage from "@/public/3DImages/GirlMobile.png";
import OTPImage from "@/public/3DImages/OtpIcon.png";
import { useRouter } from "next/router";

function login() {
  const [password, setPassword] = useState("");

  const [email, setEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [pwdError, setPwdError] = useState("");
  const [submitForm, setSubmitForm] = useState(false);
  const [formData, setFormData] = useState([]);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otpNumber, setOtpNumber] = useState("");
  const [otpDataFromApi, setOtpDataFromApi] = useState([]);
  const [otpRouteStatus, setOtpRouteStatus] = useState(false);
  const [viewState, setViewState] = useState(false);
  const router = useRouter();
  var loginemailExp = /\S+@\S+\.\S+/;
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const PassWordChange = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  };

  const EmailChange = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };

  
  const PhoneNumberChange = (e) => {
    e.preventDefault();
    setPhoneNumber(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitForm(true);
    // setMobilePage(false);

    if (!phoneNumber.match("[0-9]{10}") || phoneNumber.length > 10) {
      setPhoneError("* please fill the valid phone number");
    }else if(localStorage.getItem('mobile') == phoneNumber ){
        axios
        .get("https://w.kalvimalar.com/phpmyadmin/soft/send_otp.php", {
          params: {
            mobile: phoneNumber,
          },
        })
        .then((response) => {
          setFormData(response.data);
        });
    
      console.log(formData.status, "status");
    
      if (phoneNumber.length === 10) {
        setOtpRouteStatus(true);
      }
    }
    // if (phoneNumber.length === 10) {
    //     setOtpRouteStatus(true);
    //   }
  };

  const handleChangeOtp = (e) => {
    // e.preventDefault();
    setOtpNumber(e);
  };

  const handleOtpSubmit = (e) => {
    axios.get("https://w.kalvimalar.com/phpmyadmin/soft/otpverify.php", {
      params: {
        mobile: phoneNumber,
        otp: otpNumber,
      },
    }).then((response) => {
      setOtpDataFromApi(response.data);
    });

    // console.log(otpDataFromApi.status,"c1");

    if (otpDataFromApi.status === "1") {
      router.push("/");
      setViewState(true);
      alert(
        "Successfuly Logged In"
      )
      // setLoginOpen(false);
    }
  };
  const [count, setCount] = useState(25);

  // if(otpRouteStatus === true && count != 0){
  //   setInterval(() => {
  //     if(count != 0){
  //       setCount(count - 1)
  //     }
  //   },[1000])
  // }else if(count === 0){
  //   clearInterval();
  //   setOtpRouteStatus(false);
  // }

  useEffect(()=>{
    if(otpRouteStatus === true && count != 0){
      setTimeout(() => {
        setCount(count - 1);
      },[1000])
    }
    if(count === 0){
      clearTimeout();
      // setCount(25)
      // setOtpRouteStatus(false);
    }
  })
  console.log(count);

  return (
    <>
    <Stack
      width="100vw"
      height="100vh"
      justifyContent={"center"}
      alignItems={"center"}
      display={{ xs:'none', sm:'none' , md:'flex' }}
    >
      {/* <Box sx={{margin:'35px 0', textAlign: 'center'}}>  */}
      {/* background: radial-gradient(#d8d7f2 15%, transparent 16%), repeating-linear-gradient(0deg, transparent 6.5%, #3571a4 7%, #3571a4 9%, transparent 10%), linear-gradient(45deg, transparent 49%, #d8d7f2 49%, #d8d7f2 51%, transparent 51%), linear-gradient(-45deg, transparent 49%, #d8d7f2 49%, #d8d7f2 51%, transparent 51%);
        background-size: 2em 2em;
        background-color: #3571a4;
        opacity: 1 */}

      <Paper
        sx={{ width: "85vw", height: "85vh", bgcolor: "common.white", mt: -2 }}
      >
        {viewState === true ? 
        <>
          <Typography variant='h1' textAlign={'center'} color='success'  >
            Successfuly Logged In
          </Typography>
        </> : 
        <>
        <Grid
          container
          justifyContent={"center"}
          alignItems={"center"}
          width={"100%"}
          height={"85vh"}
          //   sx={{ backgroundImage:"url('https://img.freepik.com/free-vector/beautiful-blue-watercolor-texture-background_1035-20478.jpg?w=900&t=st=1685542526~exp=1685543126~hmac=eaa3f43ec37777ad6635910a33e31263cb0359304911d3df3380b5e00d212a77')"
          //   ,  backgroundRepeat:'no-repeat' , backgroundAttachment:'revert' ,backgroundPosition: 'top left', backgroundSize: '100% 100%'  }}
        >
          <Grid
            container
            item
            md={5}
            lg={6}
            xl={6}
            sx={{
              bgcolor: "none",
              width: "100%",
              height: "100%",
              color: "common.white",
              alignItems: "center",
              justifyContent: "center",
              display: "grid",
            }}
          >
            {/* <LoginComponent /> */}
            {/* <Card  > */}
            <Box sx={{ color: "#1D267D", mt: 1 }}>
              <Typography
                variant="h2"
                sx={{
                  textAlign: "center",
                  textShadow: "1px 1px 1px black",
                  fontFamily: "'Dancing Script', cursive",
                }}
              >
                Welcome Kalvimalar
              </Typography>
            </Box>

            {otpRouteStatus === true ? (
              <CardContent
                sx={{
                  justifyContent: "center",
                  width: "300px",
                  background: "transparent",
                  alignItems: "center",
                  mt: -10,
                  display: "grid",
                }}
              >
                <Box sx={{ justifyContent: "center", ml: 2 }}>
                  <Image src={OTPImage} alt="user" width={190} />
                </Box>
                <form onSubmit={handleOtpSubmit}>
                  <Stack
                    rowGap={5}
                    sx={{
                      background: "transparent",
                      color: "common.white",
                      justifyContent: "center",
                    }}
                  >
                    <Typography sx={{ color: "grey", mb: 1 }} variant="body1">
                      Enter 4 digit OTP sent to {phoneNumber}
                    </Typography>
                    {/* <TextField
                  sx={{ width: "100%", height: "43px" }}
                  value={otpNumber}
                  onChange={handleChangeOtp}
                /> */}
                    <MuiOtpInput
                      length={4}
                      value={otpNumber}
                      fontSize="small"
                      onChange={handleChangeOtp}
                    />
                    <Typography
                      sx={{ color: "grey", mt: 1 }}
                      variant="subtitle2"
                    >
                      Didn't get the OTP ? Resend OTP in 00:{count}
                    </Typography>
                  </Stack>
                </form>
                <CardActions sx={{ justifyContent: "center" }}>
                  <Button
                    sx={{ fontSize: "15px", fontWeight: "bold", width: "100%" }}
                  >
                    Resend OTP
                  </Button>
                  <Button
                    sx={{
                      bgcolor: "#2192FF",
                      "&:hover": {
                        bgcolor: "#2192FF",
                      },
                      fontSize: "14px",
                      borderRadius: "26px",
                      border: "1px solid #D4D3E8",
                      textTransform: " uppercase",
                      fontWeight: "700",
                      display: "flex",
                      alignItems: "center",
                      width: "100%",
                      color: "white",
                      boxShadow: "0px 2px 2px ##55ceb4",
                    }}
                    onClick={() => {
                      //   setLoginOpen(false);
                      router.push("/", undefined, { shallow: "true" });
                      setViewState(false);
                    }}
                  >
                    Next
                  </Button>
                </CardActions>
              </CardContent>
            ) : (
              <CardContent
                sx={{
                  justifyContent: "center",
                  width: "300px",
                  background: "transparent",
                  alignItems: "center",
                  mt: -5,
                }}
              >
                <Box sx={{ justifyContent: "center", ml: 10 }}>
                  <Image src={UserImage} alt="user" width={110} />
                </Box>
                <form onSubmit={handleSubmit}>
                  <Stack
                    direction="column"
                    spacing={2}
                    sx={{
                      background: "transparent",
                      color: "common.white",
                      justifyContent: "center",
                    }}
                  >
                    <Stack
                      columnGap={1}
                      direction={"row"}
                      sx={{
                        background: "transparent",
                        color: "common.white",
                        justifyContent: "center",
                      }}
                    >
                      <TextField
                        // id="outlined-basic"
                        disabled
                        value={"+91"}
                        variant="outlined"
                        size="small"
                        sx={{ width: "60px", fontSize: "8px" }}
                      />
                      <FormControl sx={{ width: "31ch" }} variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-phone">
                          Phone number
                        </InputLabel>

                        <OutlinedInput
                          id="outlined-adornment-phone"
                          type="text"
                          label="Phone number"
                          size="small"
                          endAdornment={
                            <InputAdornment position="Start">
                              <PhoneIcon sx={{ color: "#2192FF" }} />
                            </InputAdornment>
                          }
                          value={phoneNumber}
                          onChange={PhoneNumberChange}
                        />
                      </FormControl>
                    </Stack>
                    {!phoneNumber.match("[0-9]{10}") && submitForm === true ? (
                      <Typography
                        sx={{ color: "red", mt: -2, fontSize: 10, mb: -1.3 }}
                        textAlign={"left"}
                      >
                        * please fill the valid phone number
                      </Typography>
                    ) : null}
                    {phoneNumber.length > 10 && submitForm === true ? (
                      <Typography
                        sx={{ color: "red", mt: -2, fontSize: 10, mb: -1.3 }}
                        textAlign={"left"}
                      >
                        * please fill the valid phone number
                      </Typography>
                    ) : null}
                    {/* <TextField
                    id="outlined-required"
                    label="Password"
                    type={showPassword ? "text" : "password"}
                    defaultValue=""
                    size="small"
                    sx={{    color:'common.white'}}
                    value={password}
                    onChange={PassWordChange}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="start">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                            sx={{ "&:hover": { color: "primary.main" } , color:'common.white'}}
                          >
                            {showPassword ? <VisibilityOff sx={{ "&:hover": { color: "primary.main" } , color:'common.white'}}  /> : <Visibility sx={{ "&:hover": { color: "primary.main" } , color:'common.white'}}  />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                  {password.match(
                    "^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[@$!%*?&])[A-Za-zd@$!%*?&]{8,}$"
                  ) && submitForm === true ? (
                    <Typography
                      sx={{ color: "red", mt: -2, fontSize: 10, mb: -1.3 }}
                      textAlign={"left"}
                    >
                      * please fill the Strong Password
                    </Typography>
                  ) : null}
                  {password.length < 8 && submitForm === true ? (
                    <Typography
                      sx={{ color: "red", mt: -2, fontSize: 10, mb: -1.3 }}
                      textAlign={"left"}
                    >
                      * please fill Minimum eight characters, at least one
                      letter, one number and one special character:
                    </Typography>
                  ) : null} */}
                    <CardActions>
                      <Button
                        variant="outlined"
                        sx={{
                          bgcolor: "#2192FF",
                          "&:hover": {
                            bgcolor: "#2192FF",
                          },
                          fontSize: "14px",
                          borderRadius: "26px",
                          border: "1px solid #D4D3E8",
                          textTransform: " uppercase",
                          fontWeight: "700",
                          display: "flex",
                          alignItems: "center",
                          width: "100%",
                          color: "white",
                          boxShadow: "0px 2px 2px ##55ceb4",
                          // cursor: "pointer",
                          // transition: "2s",
                        }}
                        // sx={{backgroundImage: 'linear-gradient( 95.2deg, rgba(173,252,234,1) 26.8%, rgba(192,229,246,1) 64% )'}}
                        size="small"
                        onClick={handleSubmit}
                      >
                        Login With OTP
                      </Button>
                    </CardActions>
                  </Stack>
                </form>

                <Typography
                  variant="body1"
                  textAlign={"center"}
                  sx={{ color: "grey.700" }}
                >
                  New user?!...{" "}
                  <a href="/register" style={{ textDecoration: "none" }}>
                    Register Here
                  </a>
                </Typography>
              </CardContent>
            )}
            {/* </Card> */}
          </Grid>

          <Grid
            item
            md={7}
            lg={6}
            xl={6}
            sx={{
              width: "100%",
              height: "100%",
              display: "flex",
              position: "relative",
              bgcolor: "#0a2e5b",
              borderRadius: "100% 100% 0% ",
            }}
          >
            {/* <Divider orientation="vertical" /> */}

            <Box sx={{ position: "absolute", mt: -5, pl: -10 }}>
              <Image src={LoginImage} alt={"LoginImage"} width={580} />
            </Box>
          </Grid>
        </Grid>
        </>}
      </Paper>
      {/* </Box> */}
    </Stack>
    {/* ---------------------------Mobile */}
    <Stack
      width="100vw"
      height="100vh"
      justifyContent={"center"}
      alignItems={"center"}
      display={{ xs:'flex', sm:'flex' , md:'none' }}
    >
      {/* <Box sx={{margin:'35px 0', textAlign: 'center'}}>  */}
      {/* background: radial-gradient(#d8d7f2 15%, transparent 16%), repeating-linear-gradient(0deg, transparent 6.5%, #3571a4 7%, #3571a4 9%, transparent 10%), linear-gradient(45deg, transparent 49%, #d8d7f2 49%, #d8d7f2 51%, transparent 51%), linear-gradient(-45deg, transparent 49%, #d8d7f2 49%, #d8d7f2 51%, transparent 51%);
        background-size: 2em 2em;
        background-color: #3571a4;
        opacity: 1 */}

      <Paper
        sx={{ width: "85vw", height: "85vh", bgcolor: "common.white", mt: -2 }}
      >
        {viewState === true ? 
        <>
          <Typography variant='h1' textAlign={'center'} color='success'  >
            Successfuly Logged In
          </Typography>
        </> : 
        <>
        <Grid
          container
          justifyContent={"center"}
          alignItems={"center"}
          width={"100%"}
          height={"85vh"}
            sx={{ backgroundImage:"url('https://images.unsplash.com/photo-1546521343-4eb2c01aa44b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8OHx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80')"
            ,  backgroundRepeat:'no-repeat' , backgroundAttachment:'revert' ,backgroundPosition: 'bottom', backgroundSize: '100% 60%'  }}
        >
         
         
          <Grid
            container
            item
            md={5}
            lg={6}
            xl={6}
            xs={12}
            mt={-10}
            sx={{
              bgcolor: "none",
              width: "100%",
              height: "100%",
              color: "common.white",
              alignItems: "center",
              justifyContent: "center",
              display: "grid",
            }}
          >
            {/* <LoginComponent /> */}
            {/* <Card  > */}
            <Box sx={{ color: "#1D267D", mt: -4 }}>
              {/* <Typography
                variant="h3"
                sx={{
                  textAlign: "center",
                  textShadow: "1px 1px 1px black",
                  fontFamily: "'Dancing Script', cursive",
                }}
              >
                Welcome Kalvimalar
              </Typography> */}
            </Box>
            {/* <Box sx={{ position: "absolute", mt: -5, pl: 10 }}>
              <Image src={LoginImage} alt={"LoginImage"} width={180} />
            </Box> */}

            {otpRouteStatus === true ? (
              <CardContent
                sx={{
                  justifyContent: "center",
                  width: "300px",
                  background: "transparent",
                  alignItems: "center",
                  mt: -50,
                  display: "grid",
                }}
              >
                <Box sx={{ justifyContent: "center", ml: 2 }}>
                  <Image src={OTPImage} alt="user" width={160} />
                </Box>
                <form onSubmit={handleOtpSubmit}>
                  <Stack
                    rowGap={5}
                    sx={{
                      background: "transparent",
                      color: "common.white",
                      justifyContent: "center",
                    }}
                  >
                    <Typography sx={{ color: "grey", mb: 1 }} variant="body1">
                      Enter 4 digit OTP sent to {phoneNumber}
                    </Typography>
                    {/* <TextField
                  sx={{ width: "100%", height: "43px" }}
                  value={otpNumber}
                  onChange={handleChangeOtp}
                /> */}
                    <MuiOtpInput
                      length={4}
                      value={otpNumber}
                      fontSize="small"
                      onChange={handleChangeOtp}
                    />
                    <Typography
                      sx={{ color: "grey", mt: 1 }}
                      variant="subtitle2"
                    >
                      Didn't get the OTP ? Resend OTP in 00:{count}
                    </Typography>
                  </Stack>
                </form>
                <CardActions sx={{ justifyContent: "center" }}>
                  <Button
                    sx={{ fontSize: "15px", fontWeight: "bold", width: "100%" }}
                  >
                    Resend OTP
                  </Button>
                  <Button
                    sx={{
                      bgcolor: "#2192FF",
                      "&:hover": {
                        bgcolor: "#2192FF",
                      },
                      fontSize: "14px",
                      borderRadius: "26px",
                      border: "1px solid #D4D3E8",
                      textTransform: " uppercase",
                      fontWeight: "700",
                      display: "flex",
                      alignItems: "center",
                      width: "100%",
                      color: "white",
                      boxShadow: "0px 2px 2px ##55ceb4",
                    }}
                    onClick={() => {
                      //   setLoginOpen(false);
                      router.push("/", undefined, { shallow: "true" });
                      setViewState(false);
                    }}
                  >
                    Next
                  </Button>
                </CardActions>
              </CardContent>
            ) : (
              <CardContent
                sx={{
                  justifyContent: "center",
                  width: "300px",
                  background: "transparent",
                  alignItems: "center",
                  mt: -50,
                }}
              >
                <Box sx={{ justifyContent: "center",ml:6}}>
                  <Image src={UserImage} alt="user" width={140} />
                </Box>
                <form onSubmit={handleSubmit}>
                  <Stack
                    direction="column"
                    spacing={2}
                    sx={{
                      background: "transparent",
                      color: "common.white",
                      justifyContent: "center",
                    }}
                  >
                    <Stack
                      columnGap={1}
                      direction={"row"}
                      sx={{
                        background: "transparent",
                        color: "common.white",
                        justifyContent: "center",
                      }}
                    >
                      <TextField
                        // id="outlined-basic"
                        disabled
                        value={"+91"}
                        variant="outlined"
                        size="small"
                        sx={{ width: "60px", fontSize: "8px" }}
                      />
                      <FormControl sx={{ width: "31ch" }} variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-phone">
                          Phone number
                        </InputLabel>

                        <OutlinedInput
                          id="outlined-adornment-phone"
                          type="text"
                          label="Phone number"
                          size="small"
                          endAdornment={
                            <InputAdornment position="Start">
                              <PhoneIcon sx={{ color: "#2192FF" }} />
                            </InputAdornment>
                          }
                          value={phoneNumber}
                          onChange={PhoneNumberChange}
                        />
                      </FormControl>
                    </Stack>
                    {!phoneNumber.match("[0-9]{10}") && submitForm === true ? (
                      <Typography
                        sx={{ color: "red", mt: -2, fontSize: 10, mb: -1.3 }}
                        textAlign={"left"}
                      >
                        * please fill the valid phone number
                      </Typography>
                    ) : null}
                    {phoneNumber.length > 10 && submitForm === true ? (
                      <Typography
                        sx={{ color: "red", mt: -2, fontSize: 10, mb: -1.3 }}
                        textAlign={"left"}
                      >
                        * please fill the valid phone number
                      </Typography>
                    ) : null}
                    {/* <TextField
                    id="outlined-required"
                    label="Password"
                    type={showPassword ? "text" : "password"}
                    defaultValue=""
                    size="small"
                    sx={{    color:'common.white'}}
                    value={password}
                    onChange={PassWordChange}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="start">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                            sx={{ "&:hover": { color: "primary.main" } , color:'common.white'}}
                          >
                            {showPassword ? <VisibilityOff sx={{ "&:hover": { color: "primary.main" } , color:'common.white'}}  /> : <Visibility sx={{ "&:hover": { color: "primary.main" } , color:'common.white'}}  />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                  {password.match(
                    "^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[@$!%*?&])[A-Za-zd@$!%*?&]{8,}$"
                  ) && submitForm === true ? (
                    <Typography
                      sx={{ color: "red", mt: -2, fontSize: 10, mb: -1.3 }}
                      textAlign={"left"}
                    >
                      * please fill the Strong Password
                    </Typography>
                  ) : null}
                  {password.length < 8 && submitForm === true ? (
                    <Typography
                      sx={{ color: "red", mt: -2, fontSize: 10, mb: -1.3 }}
                      textAlign={"left"}
                    >
                      * please fill Minimum eight characters, at least one
                      letter, one number and one special character:
                    </Typography>
                  ) : null} */}
                    <CardActions>
                      <Button
                        variant="outlined"
                        sx={{
                          bgcolor: "#2192FF",
                          "&:hover": {
                            bgcolor: "#2192FF",
                          },
                          fontSize: "14px",
                          borderRadius: "26px",
                          border: "1px solid #D4D3E8",
                          textTransform: " uppercase",
                          fontWeight: "700",
                          display: "flex",
                          alignItems: "center",
                          width: "100%",
                          color: "white",
                          boxShadow: "0px 2px 2px ##55ceb4",
                          // cursor: "pointer",
                          // transition: "2s",
                        }}
                        // sx={{backgroundImage: 'linear-gradient( 95.2deg, rgba(173,252,234,1) 26.8%, rgba(192,229,246,1) 64% )'}}
                        size="small"
                        onClick={handleSubmit}
                      >
                        Login With OTP
                      </Button>
                    </CardActions>
                  </Stack>
                </form>

                <Typography
                  variant="body1"
                  textAlign={"center"}
                  sx={{ color: "grey.700" }}
                >
                  New user?!...{" "}
                  <a href="/register" style={{ textDecoration: "none" }}>
                    Register Here
                  </a>
                </Typography>
              </CardContent>
            )}
            {/* </Card> */}
          </Grid>

          
        </Grid>
        </>}
      </Paper>
      {/* </Box> */}
    </Stack>
    </>
  );
}

export default login;
