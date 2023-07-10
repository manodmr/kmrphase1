import {
  Button,
  Card,
  CardActions,
  CardContent,
  FormGroup,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

function Mobile() {
  return (
    <div>
        <form action="#">
          <Card
            sx={{
              
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              // padding: "30px 65px",
              px:'30px',
              borderRadius: "12px",
              boxSizing: "border-box",
              width: "360px",
              height: "280px",
            }}
          >
            <CardContent>
              <Typography
                sx={{
                  marginTop: "25px",
                  marginBottom: "20px",
                  textAlign: "center",
                  flexWrap: "wrap",
                  wordBreak: "break-word",
                }}
              >
                Enter your Mobile Number{" "}
              </Typography>
              <FormGroup>
                <Stack direction="row">
                  <input
                    // type="number"
                    defaultValue="+91"
                    style={{
                      height: "43px",
                      width: "45px",
                      // WebkitAppearance: "none",
                      borderRadius: "6px",
                      outline: "none",
                      marginRight: "5px",
                      textAlign: "center",
                      fontSize: "13px",
                    }}
                  />
                  <TextField type="number" size="small" placeholder="Mobile Number" sx={{ fontSize:'18px' }} />
                </Stack>
              </FormGroup>
              <CardActions
                sx={{ justifyContent: "center", alignItems: "center" }}
              >
                <Button
                  variant="contained"
                  sx={{
                    marginTop: "25px",
                    width: "100%",
                    fontSize: "1rem",
                    padding: "9px 0",
                    cursor: "pointer",
                    "&:hover": { background: "primary.dark" },
                  }}
                >
                  {" "}
                  Send OTP
                </Button>
              </CardActions>
            </CardContent>
          </Card>
        </form>
    </div>
  );
}

export default Mobile;
