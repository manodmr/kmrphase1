import React from "react";
import {
  Box,
  Card,
  Divider,
  CardContent,
  CardMedia,
  Stack,
  Typography,
  Button,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

export default function Review() {
  return (
    <Stack
      sx={{
        justifyContent: "center",
        justifyItems: "center",

        textAlign: "center",
        display: { lg: "block", xs: "block" },
      }}
      spacing={2}
    >
      <Card
        sx={{
          background: "#4e629a",
          padding: "1em 0",
          color: "#fff",
          fontWeight: "normal",
          maxWidth: "100%",
          margin: "0px auto 10px auto",
          boxShadow: "none",
        }}
      >
        <Box sx={{ display: "grid", mb: -1.4 }}>
          <Typography fontWeight="bold" sx={{ fontSize: "1.8" }}>
            Jeppiaar Engineering College -<br /> Chennai, Tamilnadu
          </Typography>
          <Divider sx={{ margin: "2px 0px" }} />
          <Typography
            variant="subtitle1"
            sx={{
              fontWeight: "normal",
              textAlign: "center",
              marginTop: "8px",
              color: "#f8b81f",
              textShadow: "1px 1px 1px rgba(0,0,0, 0.5)",
              marginRight: "15px",
            }}
          >
            <StarIcon
              style={{
                marginBottom: "-6px",
                color: "#f8b81f",
                textShadow: "1px 1px 1px rgba(0,0,0, 0.5)",
                marginRight: "5px",
              }}
            />
            <StarIcon
              style={{
                marginBottom: "-6px",
                color: "#f8b81f",
                textShadow: "1px 1px 1px rgba(0,0,0, 0.5)",
                marginRight: "5px",
              }}
            />

            <StarIcon
              style={{
                marginBottom: "-6px",
                color: "#f8b81f",
                textShadow: "1px 1px 1px rgba(0,0,0, 0.5)",
                marginRight: "5px",
              }}
            />

            <StarIcon
              style={{
                marginBottom: "-6px",
                color: "#f8b81f",
                textShadow: "1px 1px 1px rgba(0,0,0, 0.5)",
                marginRight: "5px",
              }}
            />

            <StarIcon
              style={{
                marginBottom: "-6px",
                color: "#f8b81f",
                textShadow: "1px 1px 1px rgba(0,0,0, 0.5)",
                marginRight: "5px",
              }}
            />
          </Typography>{" "}
          <Divider sx={{ margin: "2px 0px" }} />
          <Typography fontWeight="normal" sx={{ fontSize: "1.8" }}>
            Write a Review & Approval in 15 Min
          </Typography>
          <Box sx={{ zIndex: "1", display: "flex", flexDirection: "column" }}>
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Button
                className="grad"
                size="large"
                variant="contained"
                sx={{ textTransform: "uppercase", width: "300px" }}
              >
                Start Writing
              </Button>
            </CardContent>
          </Box>
        </Box>
      </Card>
    </Stack>
  );
}
