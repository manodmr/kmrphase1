import { AccountCircle, Mail, Password, Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

function LoginComponent({onClick , setMobilePage, setLoginOpen}) {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [pwdError, setPwdError] = useState("");
  const [submitForm, setSubmitForm] = useState(false);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitForm(true);
    setMobilePage(false);
    if (password === "") {
      setPwdError("* please enter valid Password");
    } else if (!loginemailExp.test(email)) {
      setEmailError("* please fill the valid email");
      setMobilePage(false);
    } 
  }
  
  console.log("log " + password.match("^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"))
  return (
    <div>
       <Card
         sx={{
                // mt: "20px",
                height: "100%",
                // boxShadow: " 0px 0px 24px #55ceb4",
                position: "relative",
                width: "360px",
              }}
       >
              {/* <CardHeader sx={{ height: "70px" }} /> */}
              <Typography
                sx={{ mt: "30px", marginBottom: "10px" , fontWeight:'bold' }}
                variant="body1"
                textAlign="center"
              >
                LOGIN
              </Typography>
              <CardContent sx={{ justifyContent:'center' }} >
                  <form onSubmit={handleSubmit}>
                <Stack direction="column" spacing={2}>

                  <TextField
                    id="outlined-required"
                    label="Email"
                    defaultValue=""
                    size="small"
                    value={email}
                    onChange={EmailChange}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <Mail sx={{ "&:hover": { color: "primary.main" } }} />
                        </InputAdornment>
                      ),
                    }}
                  />
                   {!loginemailExp.test(email) && submitForm === true ? (
                        <Typography
                          sx={{ color: "red",  fontSize: 10,}}
                          textAlign={"left"}
                        >
                          * please fill the valid email
                        </Typography>
                      ) : null}
                  <TextField
                    id="outlined-required"
                    label="Password"
                    type={showPassword ? "text" : "password"}
                    defaultValue=""
                    size="small"
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
                                >
                                  {showPassword ? (
                                    <VisibilityOff />
                                  ) : (
                                    <Visibility />
                                  )}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  /> 
                  {password.match("^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$") &&
                  submitForm === true ? (
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
                      * please fill Minimum eight characters, at least one letter, one number and one special character:
                    </Typography>
                  ) : null}
                  <CardActions>
                    <Button
                      variant="outlined"
                      sx={{
                        bgcolor: "primary.main",
                        '&:hover' : {
                          bgcolor: "primary.dark",
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
                      Login
                    </Button>
                    
                  </CardActions>
                  
                </Stack>
                  </form>

                  <Typography variant="body1" textAlign={'center'}>New user?!... <a onClick={() =>{ setLoginOpen(true); setMobilePage(false)}} >Register Here</a></Typography>
              </CardContent>

       </Card>
    </div>
  );
}

export default LoginComponent;
