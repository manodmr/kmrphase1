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
  Autocomplete,
  FormGroup,
  Checkbox,
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
  LocationCity,
  Clear,
  Email,
  Phone,
  ArrowBackIos,
  CheckBoxOutlineBlank,
  CheckBox,
} from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import kmrLogotam from "/public/icons/kalvimalar-english-logo.png";
import { MuiOtpInput } from 'mui-one-time-password-input'
import Image from "next/image";
import Link from "next/link";
import { Stack } from "@/OverViews/Stack";
import LoginImage from "@/public/3DImages/Reg.png";
import OTPSideImage from "@/public/3DImages/GirlMobile.png";
// import LoginImage from "@/public/3DImages/Login.png";
import UserImage from "@/public/3DImages/RegPad.png";
import OTPImage from "@/public/3DImages/OtpIcon.png";
// import UserImage from "@/public/3DImages/User.png";
import LoginComponent from "@/Components/Login/Login";
import PhoneIcon from "@mui/icons-material/Phone";
import { TextAnimate } from "@/theme/animate";
import { useRouter } from "next/router";
import Axios from "axios";
import axios from "axios";
import Sign from "@/public/3DImages/Signup.png";

function register1() {
  var router = useRouter();
  // var router1 = useParams();
  const [viewState, setViewState] = useState(false);
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [city, setCity] = useState();
  const [course, setCourse] = useState();
  const [unameValid, setUnameValid] = useState(false);
  const [submitForm, setSubmitForm] = useState(false);
  const [formData, setFormData] = useState([]);
  const [otpNumber, setOtpNumber] = useState("");
  const [otpDataFromApi, setOtpDataFromApi] = useState([]);
  const [otpRouteStatus, setOtpRouteStatus] = useState(false); ////////////////////////////////
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [cityError, setCityError] = useState("");
  const [courseError, setCourseError] = useState("");
  const [cityApi, setCityApi] = useState([]);
  const [courseApi, setCourseApi] = useState([]);
  const [count, setCount] = useState(25);
  //   const [viewState, setViewState] = useState(true);
  const [showPassword, setShowPassword] = React.useState(false);
  const [datas , setDatas] = useState([]);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  console.log(phoneNumber, "phonecheck");
  console.log(formData, "formdaata");
  console.log(submitForm, "formsubmission");
  console.log(otpDataFromApi, "otp api data");
  console.log(courseApi, "course api data");

  var loginemailExp = /\S+@\S+\.\S+/;
  
  const userNameChange = (e) => {
    e.preventDefault();
    setUserName(e.target.value);
  };

  const EmailChange = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };

  const PhoneNumberChange = (e) => {
    e.preventDefault();
    setPhoneNumber(e.target.value);
  };
  const PassWordChange = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  };

  const CityChange = (e) => {
    // e.preventDefault()
    setCity(e.target.value);
  };

  const CourseChange = (e) => {
    // e.preventDefault()
    setCourse(e.target.value);
  };
 console.log(router)
  const [user , setUser] = useState([{
      user_name : '',
      email : '' ,
      // password : string,
      mobile : 0,
      user_profile : '',
      user_city : '' ,
  }])
  


  const handleSubmit = (e) => {

    e.preventDefault();
    setSubmitForm(true);
    setCount(25);
   
    if (userName === "") {
      setNameError("* please enter your name");
    } else if (!loginemailExp.test(email)) {
      setEmailError("* please fill the valid email");
    } else if (!phoneNumber.match("[0-9]{10}") || phoneNumber.length > 10) {
      setPhoneError("* please fill the valid phone number");
    }



    // else if (!password.match("^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$") || password.length >= 8) {
    //   setPhoneError("* please fill the valid password");
    // }
    else if (city === "") {
      setCityError("* please fill the city field");
    } else if (course === "") {
      setCourseError("* please fill the course field");
    } else {
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

      if (phoneNumber.length === 10 || user.mobile.includes(phoneNumber) == false ) {
        setOtpRouteStatus(true);
      }
    }

    setUser( (p) => [ ...p ,[{
      user_name : userName,
      email : email,
      // password : string,
      mobile : phoneNumber,
      user_profile : course,
      user_city : city ,
      
    }]])
    
    localStorage.setItem('name' , userName);
    localStorage.setItem('email', email);
    localStorage.setItem('mobile', phoneNumber);
    // localStorage.setItem('degree',)
    // router.push({path: '/register1', params: { id: 1 }})
  };

  const handleResend = (e) => {
    e.preventDefault(); 
    setSubmitForm(true);
    setCount(25);
   axios.get("https://w.kalvimalar.com/phpmyadmin/soft/send_otp.php", 
   {
          params: {
            mobile: phoneNumber,
          },
        })
        .then((response) => {
          setFormData(response.data);
        });
     
  }
  
  // console.log(router.params.id);
  

  useEffect(() => {
    axios.get("https://w.kalvimalar.com/places").then((response) => {
      setCityApi(response.data.data);
    });
  }, []);

  useEffect(() => {
    axios.get("https://w.kalvimalar.com/degrees").then((response) => {
      setCourseApi(response.data);
    });
  }, []);

  // const handleChangeOtp = ((e) => {
  //     // e.preventDefault()
  //     setOtpNumber(e.target.value);

  const handleChangeOtp = (e) => {
    // e.preventDefault();
    setOtpNumber(e);
  };

  const handleOtpSubmit = async(e) => {
    Axios.get("https://w.kalvimalar.com/phpmyadmin/soft/otpverify.php", {
      params: {
        mobile: phoneNumber,
        otp: otpNumber,
      },
    }).then((response) => {
      setOtpDataFromApi(response.data);
    });

    // console.log(otpDataFromApi.status,"c1");

    if (otpDataFromApi.status === "1") {
    
      const response = await fetch("https://w.kalvimalar.com/register",{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify({
          user_name : userName,
          email:email,
          mobile : phoneNumber,
          password:email,
          user_profile : userName,
          user_city : userName ,
        })
    })

    const data = await response.json();
    console.log(response , data);
    if (response.status === 200 || response.ok == 'true') {
        // history('/Login')
        setDatas(data);
        router.back();
        setViewState(false);
        // setLoginOpen(false);
        localStorage.setItem('name' , userName);
        localStorage.setItem('email', email);
    }
    
    } 
  
  };

  console.log(datas);

//   useEffect(() => {
//     // if (otpDataFromApi.status === "1") {
//       Axios.post("https://jsonplaceholder.typicode.com/posts" , {user})
//       .then((res) => {
//         console.log(res.data.user);
//       })
//       .catch((err) => console.log(err));
// // }
//   })
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
   console.log(user);
   
  return (
    <Stack
      width="100vw"
      height="100vh"
      justifyContent={"center"}
      alignItems={"start"}
      sx={{bgcolor: "common.white"}}
    >
      <Box sx={{ right: 0, justifyContent: "space-between", width: "100%", mt:2 , display:'flex' , px:2 }}>
          <IconButton
            onClick={() => {
              router.back();
            }}
            size="small"
            mt={1}
          >
            <ArrowBackIos fontSize={'22px'} /> Back
          </IconButton>
          <Box>
            {/* <Link href={"/"}>
              <Image
                src={themeMode === true ? kmrLogoDark : kmrLogo}
                alt="KMR Logo"
                // className="mlogo"
                style={{ width:'180px' , height:'50px' }}


              />
            </Link> */}
          </Box>
          <Divider orientation="horizontal" sx={{ bgcolor:"black" }} />
        </Box>
      <Paper sx={{ width: "100vw", height: "100%", bgcolor: "common.white" }} >
      <Grid
          container
          justifyContent={"center"}
          alignItems={"start"}
          width={"100%"}
          height={"100%"}
          >
          <Grid
            container
            item
            xs={12}
            sx={{
              background: "transparent",
              width: "100%",
              height: "100%",
              color: "common.white",
              alignItems: "start",
              justifyContent: "center",
              display: "grid",
            }}
          >
       
            <Box sx={{ 
              color: "common.black", 
              // color: "#1D267D", 
              mt: 1, 
              height:'100px' }}>
                {otpRouteStatus === true ?
              <Typography
                variant="h4"
                sx={{
                  textAlign: "center",
                  // textShadow: "1px 1px 1px black",
                  fontFamily: "'Alata', cursive",
                }}
              >
                Verify Your Mobile Number With OTP
              </Typography>
                  :
              <Typography
                variant="h4"
                sx={{
                  textAlign: "center",
                  // textShadow: "1px 1px 1px black",
                  fontFamily: "'Alata', cursive",
                }}
              >
                Registeration Form
              </Typography>
                }
            </Box>
              <Grid mt={-30} >
              {otpRouteStatus === true ? (
                    <CardContent
                     sx={{
                        justifyContent: "center",
                        width: "300px",
                        background: "transparent",
                        alignItems: "center",
                        // mt: ,
                        display:'grid'
                      }}
                    >
                    <Box sx={{ justifyContent: "center", ml:2 }}>
                      <Image src={OTPImage} alt="user" width={190} />
                    </Box>
                        <form onSubmit={handleOtpSubmit}>
                      <Stack rowGap={5} sx={{ background:'transparent' , color:'common.white' ,  justifyContent:'center' }} >
                       
                        <Typography   sx={{ color: "grey" , mb:1 , display:'flex' }} variant="caption">
                          Enter 4 digit OTP sent to {phoneNumber}
                        </Typography>
                        {/* <TextField
                          sx={{ width: "100%", height: "43px" }}
                          value={otpNumber}
                          onChange={handleChangeOtp}
                        /> */}
                        <MuiOtpInput length={4} value={otpNumber} fontSize='small' onChange={handleChangeOtp} />
                        <Typography sx={{ color: "grey" ,mt:1 }} variant="subtitle2">
                         {
                         count === 0 ? null : 
                         <>Didn't get the OTP ? Resend OTP in 00:{count}</>  
                         }
                        </Typography>
                      </Stack>
                      </form>
                      {count === 0 ?
                    <CardActions sx={{ justifyContent: "center" }}>
                      <Button variant='contained'  sx={{ fontSize: "15px", fontWeight: "bold", width: "100%", }} 
                      onClick={handleResend} 
                      // onClickCapture={()=>{setCount(25)}} 
                       >
                        Resend OTP
                      </Button>
                    </CardActions>
                       : count > 0 ?
                       <CardActions sx={{ justifyContent: "center" }}>
                       <Button
                        variant='contained'
                         sx={{
                             bgcolor: "primary.main",
                             "&:hover": {
                               bgcolor: "#primary.main",
                             },
                             // bgcolor: "#2192FF",
                             // "&:hover": {
                             //   bgcolor: "#2192FF",
                             // },
                             fontSize: "14px",
                             borderRadius: "26px",
                             border: "1px solid #D4D3E8",
                             textTransform: " uppercase",
                             fontWeight: "700",
                             display: "flex",
                             alignItems: "center",
                             width: "100%",
                             height:'50px',
                             color: "white",
                             boxShadow: "0px 2px 2px ##55ceb4",
                         }}
                        //  onClick={() => {
                        //  //   setLoginOpen(false);
                        //  router.push('/',undefined ,{shallow:'true'});
                        //    setViewState(false);
                        //  }}
                        onClick={handleOtpSubmit}
                       >
                         Next
                       </Button>
                     </CardActions>
                       : null}
                    </CardContent>
              ) : (
                <>
                  <CardContent
                    sx={{
                      justifyContent: "center",
                      width: "300px",
                      background: "transparent",
                      alignItems: "start",
                      mt: -5,
                      display:'grid'
                    }}
                  >
                    {/* <Box sx={{ justifyContent: "center", ml: 10 }}>
                      <Image src={UserImage} alt="user" width={190} />
                    </Box> */}
                    <form>
                     
                        <FormControl sx={{ width: "40ch" , mb:2 }} variant="outlined">
                          <InputLabel
                            htmlFor="outlined-adornment-name"
                            sx={{ alignItems: "center" }}
                          >
                            Name
                          </InputLabel>
                          <OutlinedInput
                            // id="outlined-adornment-name"
                            type="text"
                            label="Name"
                            size="small"
                            endAdornment={
                              <InputAdornment position="Start">
                                <AccountCircle sx={{ color: "primary.main" }} />
                              </InputAdornment>
                            }
                            value={userName}
                            onChange={userNameChange}
                            onKeyDown={(e) => {
                              setUnameValid(true);
                            }}
                          />
                        </FormControl>
                        {userName === "" && submitForm === true ? (
                          <Typography
                            sx={{
                              color: "red",
                              mt: -2,
                              fontSize: 10,
                              mb: -1.3,
                            }}
                            textAlign={"left"}
                          >
                            * please enter your name
                          </Typography>
                        ) : null}

                        <FormControl sx={{ width: "40ch" , mb:2}} variant="outlined">
                          <InputLabel htmlFor="outlined-adornment-email">
                            Email
                          </InputLabel>

                          <OutlinedInput
                            id="outlined-adornment-email"
                            type="text"
                            label="Email"
                            size="small"
                            endAdornment={
                              <InputAdornment position="Start">
                                <Email sx={{ color: "primary.main" }} />
                              </InputAdornment>
                            }
                            value={email}
                            onChange={EmailChange}
                          />
                        </FormControl>
                        {!loginemailExp.test(email) && submitForm === true ? (
                          <Typography
                            sx={{
                              color: "red",
                              mt: -2,
                              fontSize: 10,
                              mb: -1.3,
                            }}
                            textAlign={"left"}
                          >
                            {" "}
                            * please fill the valid email{" "}
                          </Typography>
                        ) : null}
                     

                        <Stack columnGap={1} direction={"column"} sx={{ background:'transparent' , color:'common.white' ,  justifyContent:'center' }} >
                          <Box sx={{ display:'flex' }} >
                          <TextField
                            // id="outlined-basic"
                            disabled
                            value={"+91"}
                            variant="outlined"
                            size="small"
                            sx={{ width: "60px", fontSize: "8px" , mr:1}}
                          />
                          <FormControl
                            sx={{ width: "31ch" , mb:2 }}
                            variant="outlined"
                          >
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
                                  <Phone sx={{ color: "primary.main" }} />
                                </InputAdornment>
                              }
                              value={phoneNumber}
                              onChange={PhoneNumberChange}
                            />
                          </FormControl>
                          </Box>
                        {!phoneNumber.match("[0-9]{10}") &&
                        submitForm === true ? (
                          <Typography
                            sx={{
                              color: "red",
                              mt: -2,
                              fontSize: 10,
                              mb: -1.3,
                            }}
                            textAlign={"left"}
                          >
                            * please fill the valid phone number
                          </Typography>
                        ) : null}
                        {phoneNumber.length > 10 && submitForm === true ? (
                          <Typography
                            sx={{
                              color: "red",
                              mt: -2,
                              fontSize: 10,
                              mb: -1.3,
                            }}
                            textAlign={"left"}
                          >
                            * please fill the valid phone number
                          </Typography>
                        ) : null}
                        </Stack>

                 <Box display='grid' >
                        <Autocomplete
                          disablePortal
                          id="combo-box-city"
                          size="small"
                          options={cityApi.map((option) => option.combinedname)}
                          sx={{ width: "100%" }}
                          renderInput={(params) => (
                            <TextField {...params} label="City" />
                          )}
                          endAdornment={
                            <InputAdornment position="Start">
                              <LocationCity sx={{ color: "primary.main" }} />
                            </InputAdornment>
                          }
                          value={city}
                          onChange={CityChange}
                        />
                        {city === "" && submitForm === true ? (
                          <Typography
                            sx={{
                              color: "red",
                              mt: -2,
                              fontSize: 10,
                              mb: -1.3,
                            }}
                            textAlign={"left"}
                          >
                            {" "}
                            * please fill the city field{" "}
                          </Typography>
                        ) : null}


                        {/* <Autocomplete
                          multiple
                          id="checkboxes-tags-demo"
                          size="small"
                          options={courseApi.map((option) => option.name)}
                          sx={{ width: "100%" , display:'flex' , overflowX:'auto'}}
                          renderOption={(props, option, { selected }) => (
                            <li {...props}>
                              <Checkbox
                                icon={<><CheckBoxOutlineBlank fontSize="small" /></>}
                                checkedIcon={<><CheckBox  fontSize="small" /></>}
                                style={{ marginRight: 1 }}
                                checked={selected}
                              />
                              {option}
                            </li>
                          )}
                          renderInput={(params) => (
                            <TextField {...params} label="Course"  />
                          )}
                          endAdornment={
                            <InputAdornment position="Start">
                              <LocationCity sx={{ color: "primary.main" }} />
                            </InputAdornment>
                          }
                          value={course}
                          onChange={CourseChange}
                        />
                        {course === "" && submitForm === true ? (
                          <Typography
                            sx={{
                              color: "red",
                              mt: -2,
                              fontSize: 10,
                              mb: -1.3,
                            }}
                            textAlign={"left"}
                          >
                            {" "}
                            * please fill the course field
                          </Typography>
                        ) : null} */}
                 </Box>
                    </form>
                    <CardActions sx={{ justifyContent: "center" , mt:1, display:'grid'  }}>
                    <Typography variant="caption" sx={{ color:'grey.800' , py:1 }} gutterBottom > 
                      By logging in, I agree to <Link href='/terms' style={{ color:'#2192FF' }}  >terms</Link> and  <Link href='/privacy_policy' style={{ color:'#2192FF' }} >privacy policy</Link></Typography>
                    <Button
                      sx={{
                        bgcolor: "primary.main",
                        "&:hover": {
                          bgcolor: "primary.dark",
                        },
                        // bgcolor: "#2192FF",
                        // "&:hover": {
                        //   bgcolor: "#2192FF",
                        // },
                        fontSize: "14px",
                        borderRadius: "26px",
                        border: "1px solid #D4D3E8",
                        textTransform: " uppercase",
                        fontWeight: "700",
                        fontFamily:'Ubuntu',
                        display: "flex",
                        alignItems: "center",
                        justifyContent:"center",
                        width: "100%",
                        height:"50px",
                        color: "white",
                        boxShadow: "0px 2px 2px ##55ceb4",
                        // background:
                        //   "linear-gradient(to right bottom,  #229e5b 4%,  #5bd9bd 100%)",
                      }}
                      // size="small"
                      variant={"contained"}
                      onClick={handleSubmit}
                      // router.push(formData.status === 1 ? `${"/OtpFormForregister"}`: null);
                    >
                      Request OTP For Sign-UP
                    </Button>
                  <Typography
                  variant="body1"
                  textAlign={"center"}
                  sx={{color:'grey.700' , mt:1}}
                  // sx={{ color: themeMode === true? "grey.100" : "grey.700" }}
                >
                  Already a user?..{" "}
                  <a href="/login1" style={{ textDecoration:'none' }}>
                   Log-In
                  </a>
                </Typography>
                  </CardActions>
                  </CardContent>
                </>
              )}
          </Grid>
          </Grid>
          {otpRouteStatus === true ? 
            null 
            :
            <Grid sx={{ position:'relative' ,borderRadius:'100% 10% 10% 100%' , mt:-30  }} >
            <Image src={Sign} width={250} height={250} />
            </Grid>
            }
      </Grid>
      </Paper>
    </Stack>
  );
          }  


export default register1;
