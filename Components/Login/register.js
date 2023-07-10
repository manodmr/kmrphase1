import React, { useEffect, useState } from "react";
import {
  Autocomplete,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import SchoolIcon from "@mui/icons-material/School";
import ClearIcon from "@mui/icons-material/Clear";
import Axios from "axios";
import { useRouter } from "next/router";
import axios from "axios";
import { Password, Visibility, VisibilityOff } from "@mui/icons-material";

function RegisterForm({ setViewState, setLoginOpen }) {
  var router = useRouter();

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
  const [otpRouteStatus, setOtpRouteStatus] = useState(false);
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [cityError, setCityError] = useState("");
  const [courseError, setCourseError] = useState("");
  const [cityApi, setCityApi] = useState([]);
  const [courseApi, setCourseApi] = useState([]);
  //   const [viewState, setViewState] = useState(true);
  const [showPassword, setShowPassword] = React.useState(false);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitForm(true);

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

      if (phoneNumber.length === 10) {
        setOtpRouteStatus(true);
      }
    }
  };

  useEffect(() => {
    axios.get("https://w.kalvimalar.com/city").then((response) => {
      setCityApi(response.data);
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
    e.preventDefault();
    setOtpNumber(e.target.value);
  };

  const handleOtpSubmit = (e) => {
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
      // router.push("/");
      setViewState(false);
      setLoginOpen(false);
    }
  };

  // useEffect(() => {
  //     if(otpDataFromApi.status === 0){
  //         router.push("/CollegeDetail");
  //     }
  // },[otpDataFromApi.status]);

  return (
    <Stack sx={{ background: "none" , top:0}}>
      <Grid
        container
        justifyContent={"center"}
        width={"100%"}
        height={"100%"}
        maxWidth={{ lg: "lg", xl: "xl", md: "md" }}
        display={{ xs: "none", md: "flex" }}
      >
        {otpRouteStatus === true ? (
          <Card
            sx={{
              height: "380px",
              width: "330px",
              background: "white",
              textAlign: "center",
              borderRadius: "15px",
              boxShadow: 7,
            }}
          >
            <form onSubmit={handleOtpSubmit}>
              <CardActions sx={{ ml: 36 }}>
                <IconButton aria-label="clear" disabled color="primary">
                  <ClearIcon />
                </IconButton>
              </CardActions>

              <CardContent
                sx={{ justifyContent: "center", alignItems: "center", mt: -4 }}
              >
                <Stack rowGap={5}>
                  <Typography
                    sx={{ color: "primary.main", fontWeight: "bold" }}
                    variant="h6"
                  >
                    {" "}
                    Verify Your OTP
                  </Typography>
                  <Typography sx={{ color: "grey" }} variant="body1">
                    Enter 4 digit OTP sent to {phoneNumber}
                  </Typography>
                  <TextField
                    sx={{ width: "100%", height: "43px" }}
                    value={otpNumber}
                    onChange={handleChangeOtp}
                  />
                  {/* <MuiOtpInput length={4} value={otpNumber} onChange={handleChangeOtp} /> */}
                  <Typography sx={{ color: "grey" }} variant="subtitle2">
                    Didn't get the OTP ? Resend OTP in 00:25
                  </Typography>
                </Stack>
              </CardContent>
              <CardActions sx={{ justifyContent: "center" }}>
                <Button sx={{ fontSize: "15px", fontWeight: "bold" }}>
                  Resend OTP
                </Button>
                <Button
                  sx={{
                    color: "white",
                    bgcolor: "primay.main",
                    // background:
                    //   "linear-gradient(to right bottom,  #229e5b 4%,  #5bd9bd 100%)",
                    width: "100px",
                    heightL: "50px",
                    fontWeight: "bold",
                    fontSize: "15px",
                  }}
                  onClick={() => {
                    setLoginOpen(false);
                    setViewState(false);
                  }}
                >
                  Next
                </Button>
              </CardActions>
            </form>
          </Card>
        ) : (
          <>
            <Box
              sx={{
                borderRadius: "15px",
                justifyContent: "center",
              }}
            >
              <Card
                sx={{
                  width: "360px",
                  height: "100%",
                  justifyContent: "center",
                  textAlign: "center",
                  borderRadius: "15px",
                }}
              >
                <CardActions sx={{ ml: 43 }}>
                  <IconButton aria-label="clear" disabled color="primary"  >
                    <ClearIcon  />
                  </IconButton>
                </CardActions>

                <CardHeader
                  sx={{ mt: -6 }}
                  title={
                    <Typography sx={{ color: "primary.main" }} variant="h5">
                      Register
                    </Typography>
                  }
                />

                <CardContent sx={{ justifyContent: "center" }}>
                  <form>
                    <Stack rowGap={2}>
                      <FormControl sx={{ width: "40ch" }} variant="outlined">
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
                              <AccountCircleIcon
                                sx={{ color: "primary.main" }}
                              />
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
                          sx={{ color: "red", mt: -2, fontSize: 10, mb: -1.3 }}
                          textAlign={"left"}
                        >
                          * please enter your name
                        </Typography>
                      ) : null}

                      <FormControl sx={{ width: "40ch" }} variant="outlined">
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
                              <EmailIcon sx={{ color: "primary.main" }} />
                            </InputAdornment>
                          }
                          value={email}
                          onChange={EmailChange}
                        />
                      </FormControl>
                      {!loginemailExp.test(email) && submitForm === true ? (
                        <Typography
                          sx={{ color: "red", mt: -2, fontSize: 10, mb: -1.3 }}
                          textAlign={"left"}
                        >
                          {" "}
                          * please fill the valid email{" "}
                        </Typography>
                      ) : null}

                      <Stack columnGap={1} direction={"row"}>
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
                                <PhoneIcon sx={{ color: "primary.main" }} />
                              </InputAdornment>
                            }
                            value={phoneNumber}
                            onChange={PhoneNumberChange}
                          />
                        </FormControl>
                      </Stack>
                      {!phoneNumber.match("[0-9]{10}") &&
                      submitForm === true ? (
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

                      <Stack direction={"row"}>
                        <FormControl sx={{ width: "40ch" }} variant="outlined">
                          <InputLabel htmlFor="outlined-adornment-phone">
                            Password
                          </InputLabel>

                          <OutlinedInput
                            id="outlined-adornment-password"
                            type={showPassword ? "text" : "password"}
                            size="small"
                            endAdornment={
                              <InputAdornment position="end">
                                <IconButton
                                  aria-label="toggle password visibility"
                                  onClick={handleClickShowPassword}
                                  onMouseDown={handleMouseDownPassword}
                                  edge="end"
                                >
                                  {showPassword ? (
                                    <VisibilityOff />
                                  ) : (
                                    <Visibility />
                                  )}
                                </IconButton>
                              </InputAdornment>
                            }
                            label="Password"
                            value={password}
                            onChange={PassWordChange}
                          />
                        </FormControl>
                      </Stack>
                      {!password.match("^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$") &&
                      submitForm === true ? (
                        <Typography
                          sx={{ color: "red", mt: -2, fontSize: 10, mb: -1.3 }}
                          textAlign={"left"}
                        >
                          * please fill the Strong Password
                        </Typography>
                      ) : null}
                      {password.length >= 6 && submitForm === true ? (
                        <Typography
                          sx={{ color: "red", mt: -2, fontSize: 10, mb: -1.3 }}
                          textAlign={"left"}
                        >
                          * please fill Minimum eight characters, at least one letter, one number and one special character:
                        </Typography>
                      ) : null}

                      <Autocomplete
                        disablePortal
                        id="combo-box-city"
                        size="small"
                        options={cityApi.map((option) => option.english_name)}
                        sx={{ width: "40ch" }}
                        renderInput={(params) => (
                          <TextField {...params} label="City" />
                        )}
                        endAdornment={
                          <InputAdornment position="Start">
                            <LocationCityIcon sx={{ color: "primary.main" }} />
                          </InputAdornment>
                        }
                        value={city}
                        onChange={CityChange}
                      />
                      {city === "" && submitForm === true ? (
                        <Typography
                          sx={{ color: "red", mt: -2, fontSize: 10, mb: -1.3 }}
                          textAlign={"left"}
                        >
                          {" "}
                          * please fill the city field{" "}
                        </Typography>
                      ) : null}

                      {/* <FormControl sx={{ width: '40ch' }} variant="outlined">
                                                    <InputLabel htmlFor="outlined-adornment-course">Course</InputLabel>

                                                    <OutlinedInput
                                                        id="outlined-adornment-course"
                                                        type='text'
                                                        label="Course"
                                                        endAdornment={
                                                            <InputAdornment position="Start">
                                                                <SchoolIcon sx={{ color: 'primary.main' }} />
                                                            </InputAdornment>
                                                        }
                                                        value={course}
                                                        onChange={CourseChange}
                                                    />
                                                </FormControl> */}

                      <Autocomplete
                        disablePortal
                        id="combo-box-city"
                        size="small"
                        options={courseApi.map((option) => option.name)}
                        sx={{ width: "40ch" }}
                        renderInput={(params) => (
                          <TextField {...params} label="Course" />
                        )}
                        endAdornment={
                          <InputAdornment position="Start">
                            <LocationCityIcon sx={{ color: "primary.main" }} />
                          </InputAdornment>
                        }
                        value={course}
                        onChange={CourseChange}
                      />

                      {course === "" && submitForm === true ? (
                        <Typography
                          sx={{ color: "red", mt: -2, fontSize: 10, mb: -1.3 }}
                          textAlign={"left"}
                        >
                          {" "}
                          * please fill the course field
                        </Typography>
                      ) : null}
                    </Stack>
                  </form>
                </CardContent>

                <CardActions sx={{ justifyContent: "center" }}>
                  <Button
                    sx={{
                      fontWeight: "bold",
                      fontSize: "18px",
                      color: "white",
                      bgcolor: "primay.main",

                      // background:
                      //   "linear-gradient(to right bottom,  #229e5b 4%,  #5bd9bd 100%)",
                    }}
                    size="small"
                    variant={"contained"}
                    onClick={handleSubmit}

                    // router.push(formData.status === 1 ? `${"/OtpFormForregister"}`: null);
                  >
                    Request OTP
                  </Button>
                </CardActions>
              </Card>
            </Box>
          </>
        )}
      </Grid>
      {/* -------------------------------------------mobile view------------------------------------------------ */}
      <Grid
        container
        justifyContent={"center"}
        maxWidth={{ sm: "sm", xs: "xs" }}
        display={{ sm: "flex", md: "none" }}
      >
        {otpRouteStatus === true ? (
          <Grid>
            <Card
              sx={{
                height: "380px",
                width: "330px",
                background: "white",
                textAlign: "center",
                borderRadius: "15px",
                boxShadow: 7,
              }}
            >
              <CardActions sx={{ ml: 36 }}>
                <IconButton aria-label="clear" disabled color="primary">
                  <ClearIcon />
                </IconButton>
              </CardActions>

              <CardContent
                sx={{ justifyContent: "center", alignItems: "center", mt: -4 }}
              >
                <Stack rowGap={5}>
                  <Typography
                    sx={{ color: "primary.main", fontWeight: "bold" }}
                    variant="h6"
                  >
                    {" "}
                    Verify Your OTP
                  </Typography>
                  <Typography sx={{ color: "grey" }} variant="body1">
                    Enter 4 digit OTP sent to {phoneNumber}
                  </Typography>
                  {/* <Box  >
                                    <TextField sx={{ width: '45px', height: '43px', mr: 2 }} />
                                    <TextField sx={{ width: '45px', height: '43px', mr: 2 }} />
                                    <TextField sx={{ width: '45px', height: '43px', mr: 2 }} />
                                    <TextField sx={{ width: '45px', height: '43px', }} />

                                </Box> */}
                  <TextField
                    sx={{ width: "100%", height: "43px" }}
                    value={otpNumber}
                    onChange={handleChangeOtp}
                  />
                  {/* <MuiOtpInput length={4} value={otpNumber} onChange={handleChangeOtp} /> */}
                  <Typography sx={{ color: "grey" }} variant="subtitle2">
                    Didn't get the OTP ? Resend OTP in 00:25
                  </Typography>
                </Stack>
              </CardContent>
              <CardActions sx={{ justifyContent: "center" }}>
                <Button sx={{ fontSize: "15px", fontWeight: "bold" }}>
                  Resend OTP
                </Button>
                <Button
                  sx={{
                    color: "white",
                    bgcolor: "primay.main",
                    // background:
                    //   "linear-gradient(to right bottom,  #229e5b 4%,  #5bd9bd 100%)",
                    width: "100px",
                    heightL: "50px",
                    fontWeight: "bold",
                    fontSize: "15px",
                  }}
                  onClick={handleOtpSubmit}
                >
                  Next
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ) : (
          <Box
            sx={{
              borderRadius: "15px",
              zIndex: 5000,
              boxShadow: 10,
              height: "520px",
            }}
            width={{ xs: "100%", sm: "400px" }}
          >
            <Card
              sx={{
                width: "100%",
                height: "520px",
                justifyContent: "center",
                textAlign: "center",
                borderRadius: "15px",
              }}
            >
              <CardActions sx={{ ml: 43 }}>
                <IconButton aria-label="clear" disabled color="primary">
                  <ClearIcon />
                </IconButton>
              </CardActions>

              <CardHeader
                sx={{ mt: -6 }}
                title={
                  <Typography sx={{ color: "primary.main" }} variant="h5">
                    Register
                  </Typography>
                }
              />

              <CardContent sx={{ justifyContent: "center" }}>
                <form>
                  <Stack rowGap={"17px"}>
                    <FormControl sx={{ width: "100%" }} variant="outlined">
                      <InputLabel htmlFor="outlined-adornment-name">
                        Name
                      </InputLabel>
                      <OutlinedInput
                        id="outlined-adornment-name"
                        type="text"
                        label="Name"
                        value={userName}
                        onChange={userNameChange}
                        endAdornment={
                          <InputAdornment position="Start">
                            <AccountCircleIcon sx={{ color: "primary.main" }} />
                          </InputAdornment>
                        }
                      />
                    </FormControl>

                    {userName === "" && submitForm === true ? (
                      <Typography
                        sx={{ color: "red", mt: -2, fontSize: 10, mb: -1.3 }}
                        textAlign={"left"}
                      >
                        {" "}
                        {nameError}{" "}
                      </Typography>
                    ) : null}

                    <FormControl sx={{ width: "100%" }} variant="outlined">
                      <InputLabel htmlFor="outlined-adornment-email">
                        Email
                      </InputLabel>

                      <OutlinedInput
                        id="outlined-adornment-email"
                        type="text"
                        label="Email"
                        value={email}
                        onChange={EmailChange}
                        endAdornment={
                          <InputAdornment position="Start">
                            <EmailIcon sx={{ color: "primary.main" }} />
                          </InputAdornment>
                        }
                      />
                    </FormControl>

                    {!loginemailExp.test(email) && submitForm === true ? (
                      <Typography
                        sx={{ color: "red", mt: -2, fontSize: 10, mb: -1.3 }}
                        textAlign={"left"}
                      >
                        {" "}
                        {emailError}{" "}
                      </Typography>
                    ) : null}

                    <Stack columnGap={1.5} direction={"row"}>
                      <TextField
                        id="outlined-basic"
                        value={+91}
                        variant="outlined"
                        sx={{ width: "60px" }}
                      />
                      <FormControl sx={{ width: "100%" }} variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-phone">
                          Phone number
                        </InputLabel>

                        <OutlinedInput
                          id="outlined-adornment-phone"
                          type="text"
                          label="Phone number"
                          value={phoneNumber}
                          onChange={PhoneNumberChange}
                          endAdornment={
                            <InputAdornment position="Start">
                              <PhoneIcon sx={{ color: "primary.main" }} />
                            </InputAdornment>
                          }
                        />
                      </FormControl>
                      {!phoneNumber.match("[0-9]{10}") &&
                      submitForm === true ? (
                        <Typography
                          sx={{ color: "red", mt: -2, fontSize: 10, mb: -1.3 }}
                          textAlign={"left"}
                        >
                          {" "}
                          {phoneError}{" "}
                        </Typography>
                      ) : null}
                      {phoneNumber.length > 10 && submitForm === true ? (
                        <Typography
                          sx={{ color: "red", mt: -2, fontSize: 10, mb: -1.3 }}
                          textAlign={"left"}
                        >
                          {" "}
                          {phoneError}{" "}
                        </Typography>
                      ) : null}
                    </Stack>

                    {/* <FormControl sx={{ width: "100%" }} variant="outlined"> */}
                    {/* <InputLabel htmlFor="outlined-adornment-city">
                        City
                      </InputLabel> */}

                    <Autocomplete
                      disablePortal
                      id="combo-box-city"
                      options={cityApi.map((option) => option.english_name)}
                      sx={{ width: "40ch" }}
                      renderInput={(params) => (
                        <TextField {...params} label="City" />
                      )}
                      endAdornment={
                        <InputAdornment position="Start">
                          <LocationCityIcon sx={{ color: "primary.main" }} />
                        </InputAdornment>
                      }
                      value={city}
                      onChange={CityChange}
                    />
                    {city === "" && submitForm === true ? (
                      <Typography
                        sx={{ color: "red", mt: -2, fontSize: 10, mb: -1.3 }}
                        textAlign={"left"}
                      >
                        {" "}
                        * please fill the city field{" "}
                      </Typography>
                    ) : null}
                    {/* </FormControl> */}

                    {city === "" && submitForm === true ? (
                      <Typography
                        sx={{ color: "red", mt: -2, fontSize: 10, mb: -1.3 }}
                        textAlign={"left"}
                      >
                        {" "}
                        {cityError}{" "}
                      </Typography>
                    ) : null}

                    <Autocomplete
                      disablePortal
                      id="combo-box-city"
                      options={courseApi.map((option) => option.name)}
                      sx={{ width: "40ch" }}
                      renderInput={(params) => (
                        <TextField {...params} label="Course" />
                      )}
                      endAdornment={
                        <InputAdornment position="Start">
                          <LocationCityIcon sx={{ color: "primary.main" }} />
                        </InputAdornment>
                      }
                      value={course}
                      onChange={CourseChange}
                    />

                    {course === "" && submitForm === true ? (
                      <Typography
                        sx={{ color: "red", mt: -2, fontSize: 10, mb: -1.3 }}
                        textAlign={"left"}
                      >
                        {" "}
                        * please fill the course field
                      </Typography>
                    ) : null}
                  </Stack>
                </form>
              </CardContent>

              <CardActions sx={{ justifyContent: "center" }}>
                <Button
                  sx={{
                    fontWeight: "bold",
                    fontSize: "18px",
                    color: "white",
                    bgcolor: "primay.main",
                    // background:
                    //   "linear-gradient(to right bottom,  #229e5b 4%,  #5bd9bd 100%)",
                  }}
                  variant={"contained"}
                  onClick={handleSubmit}
                >
                  Request OTP
                </Button>
              </CardActions>
            </Card>
          </Box>
        )}
      </Grid>
    </Stack>
  );
}

export default RegisterForm;
