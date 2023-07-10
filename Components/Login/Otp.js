import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  FormControl,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

function Otp() {
  return (
    <div>
  
        <Grid>
          <Card
            sx={{
              height: "380px",
              width: "350px",
              background: "white",
              textAlign: "center",
            }}
          >
            <CardContent
              sx={{ justifyContent: "center", alignItems: "center" }}
            >
              <Typography> Verify Your OTP</Typography>
              <FormControl>
                <Box sx={{ display: "flex" }}>
                  <TextField sx={{ width: "45px", height: "43px", mr: 2 }} />
                  <TextField sx={{ width: "45px", height: "43px", mr: 2 }} />
                  <TextField sx={{ width: "45px", height: "43px", mr: 2 }} />
                  <TextField sx={{ width: "45px", height: "43px" }} />
                </Box>
              </FormControl>
            </CardContent>
            <CardActions sx={{ justifyContent: "center" }}>
              <Button>Next</Button>
            </CardActions>
          </Card>
        </Grid>
    
    </div>
  );
}

export default Otp;
