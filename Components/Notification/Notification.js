import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import {
  Box,
  Card,
  Divider,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";

export default function Notification() {
  return (
    <div>
      <List>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar
              alt="Remy Sharp"
              src="https://w.kalvimalar.com/images/colleges/1EDp6kAuomUVGrzr1_lpOvm17Wa6kgKWG.jpg"
            />
          </ListItemAvatar>
          <Box sx={{ display: "grid" }}>
            <Typography
              fontWeight="normal"
              sx={{ color: "#55ceb4", fontSize: "0.9em" }}
            >
              GATE COAP 2023 Registration Open...
            </Typography>

            <Typography
              variant="caption"
              sx={{ color: "#666", fontSize: "0.8em" }}
            >
              GATE COAP 2023 application form is available at coap.iitkgp.ac.in.
              Candidates..
            </Typography>
          </Box>
        </ListItem>
        <Divider />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar
              alt="Remy Sharp"
              src="https://w.kalvimalar.com/images/colleges/1EDp6kAuomUVGrzr1_lpOvm17Wa6kgKWG.jpg"
            />
          </ListItemAvatar>
          <Box sx={{ display: "grid" }}>
            <Typography
              fontWeight="normal"
              sx={{ color: "#55ceb4", fontSize: "0.9em" }}
            >
              GATE COAP 2023 Registration Open...
            </Typography>

            <Typography variant="caption" sx={{ color: "#666" }}>
              GATE COAP 2023 application form is available at coap.iitkgp.ac.in.
              Candidates..
            </Typography>
          </Box>
        </ListItem>
        <Divider />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar
              alt="Remy Sharp"
              src="https://w.kalvimalar.com/images/colleges/1EDp6kAuomUVGrzr1_lpOvm17Wa6kgKWG.jpg"
            />
          </ListItemAvatar>
          <Box sx={{ display: "grid" }}>
            <Typography
              fontWeight="normal"
              sx={{ color: "#55ceb4", fontSize: "0.9em" }}
            >
              GATE COAP 2023 Registration Open...
            </Typography>

            <Typography
              variant="caption"
              sx={{ color: "#666", fontSize: "0.8em" }}
            >
              GATE COAP 2023 application form is available at coap.iitkgp.ac.in.
              Candidates..
            </Typography>
          </Box>
        </ListItem>
        <Divider />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar
              alt="Remy Sharp"
              src="https://w.kalvimalar.com/images/colleges/1EDp6kAuomUVGrzr1_lpOvm17Wa6kgKWG.jpg"
            />
          </ListItemAvatar>
          <Box sx={{ display: "grid" }}>
            <Typography
              fontWeight="normal"
              sx={{ color: "#55ceb4", fontSize: "0.9em" }}
            >
              GATE COAP 2023 Registration Open...
            </Typography>

            <Typography
              variant="caption"
              sx={{ color: "#666", fontSize: "0.8em" }}
            >
              GATE COAP 2023 application form is available at coap.iitkgp.ac.in.
              Candidates..
            </Typography>
          </Box>
        </ListItem>
        <Divider />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar
              alt="Remy Sharp"
              src="https://w.kalvimalar.com/images/colleges/1EDp6kAuomUVGrzr1_lpOvm17Wa6kgKWG.jpg"
            />
          </ListItemAvatar>
          <Box sx={{ display: "grid" }}>
            <Typography
              fontWeight="normal"
              sx={{ color: "#55ceb4", fontSize: "0.9em" }}
            >
              GATE COAP 2023 Registration Open...
            </Typography>

            <Typography
              variant="caption"
              sx={{ color: "#666", fontSize: "0.8em" }}
            >
              GATE COAP 2023 application form is available at coap.iitkgp.ac.in.
              Candidates..
            </Typography>
          </Box>
        </ListItem>
      </List>
    </div>
  );
}
