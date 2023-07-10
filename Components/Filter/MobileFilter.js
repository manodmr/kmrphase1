import {
  Box,
  Button,
  Checkbox,
  Divider,
  Grid,
  ListItemButton,
  Stack,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import { useContext, useState } from "react";
import { List, ListItem, ListItemText } from "@mui/material";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import PropTypes from "prop-types";
import { BiFilter, BiSort } from "react-icons/bi";
import { darkLightModeContext } from "@/Layout/Layout";

export default function MobileFilter({ 
  FilterType, 
  handleChange,
  handle3to4,
  handle4to5,
  handlebellow3, 
  handlePriceLow , 
  handlePriceHigh , 
  handleClearRate, 
  handleClearPrice
 }) {
  const [right, setRight] = useState(false);
  const [left, setLeft] = useState(false);
  const [value, setValue] = useState(0);
  const [valueSort, setValueSort] = useState(0);

  const [chbxvalue, setChbxvalue] = useState();

  console.log(chbxvalue);

  function TabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };

  const TabHandleChange = (event, updvalue) => {
    console.log(updvalue);
    setValue(updvalue);
  };

  const toggleDrawer = (right) => (event) => {
    setRight(right);
  };

  const TabHandleChangeLeft = (event, sortvalue) => {
    setValueSort(sortvalue);
  };

  const toggleDrawerLeft = (left) => (event) => {
    setLeft(left);
  };

  console.log(FilterType.options);
  var Filter = FilterType;
  const themeMode = useContext(darkLightModeContext)

  // ---------------Filter-----------------
  const list = (anchor) => (
    <Box
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : "100%",
        bgcolor: themeMode === true? 'grey.700' : 'common.white' ,
        color: themeMode === true ? 'common.white' : 'common.black' ,
        height: 600,
      }}
      role="presentation"
    >
      <Grid container display="flex" justifyContent="space-between" sx={{ 
          bgcolor: themeMode === true? 'grey.700' : 'common.white' ,
          color: themeMode === true ? 'common.white' : 'common.black' ,
       }} >
        <Grid item>
          <Typography fontWeight="bold" fontSize="large" p={2}>
            Filters
          </Typography>
        </Grid>
        <Grid item pt={1.5} pr={1.5}>
          <Button fontWeight="bold" fontSize="large">
            Clear All
          </Button>
        </Grid>
      </Grid>

      <Divider sx={{ bgcolor: "black" }} />

      <Grid container pt={5} >
        <Grid item xs={4} justifyItems="left">
          <Tabs
            value={value}
            // aria-label="Vertical tabs example"
            onChange={TabHandleChange}
            orientation="vertical"
            sx={{ 
            fontWeight: "bold",     
            bgcolor: themeMode === true? 'grey.700' : 'common.white' ,
            color: themeMode === true ? 'common.white' : 'common.black' , }}
          >
            {Filter.map((text, index) => {
              console.log(text.title);
              return <Tab label={text.title} key={index}></Tab>;
            })}
          </Tabs>
        </Grid>
        <Divider sx={{ bgcolor: "black" }} />
        <Grid item xs={8}>
          {Filter.map((e, i) => {
            console.log(e.options);
            <TabPanel value={value} index={0}>
              <List sx={{ width: "100%", height: 420, overflow: "scroll" }}>
                {e.options.map((text, index) => (
                  <ListItem disablePadding>
                    <Checkbox
                      value={text}
                      onChange={(e) => {
                        handleChange(e.target.value);
                      }}
                    />
                    <ListItemText primary={text} />
                  </ListItem>
                ))}
              </List>
            </TabPanel>;
          })}

          <TabPanel value={value} index={1}>
            <List sx={{ width: "100%", height: 420, overflow: "scroll" }}>
              {[
                "Tamil Nadu",
                "Maharashtra",
                "Uttar Pradesh",
                "Delhi NCR",
                "Andhra Pradesh",
                "Karnataka",
                "Madhya Pradesh",
                "Telangana",
                "Gujarat",
                "Kerala",
                "Rajasthan",
              ].map((text, index) => (
                <ListItem key={text} disablePadding>
                  <Checkbox disableRipple />
                  <ListItemText primary={text} key={index} />
                </ListItem>
              ))}
            </List>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <List sx={{ width: "100%", height: 420, overflow: "scroll" }}>
              {[
                "Chennai",
                "Madurai",
                "Kovai",
                "Villupuram",
                "Salem",
                "Namakkal",
                "Tirunelveli",
                "Kallakurichi",
                "Cuddalore",
                "Trichy",
                "Pudukottai",
                "Kanyakumari",
                "Thuthukudi",
              ].map((text, index) => (
                <ListItem key={text} disablePadding>
                  <Checkbox disableRipple />
                  <ListItemText primary={text} key={index} />
                </ListItem>
              ))}
            </List>
          </TabPanel>
          <TabPanel value={value} index={3}>
            <List sx={{ width: "100%", height: 420, overflow: "scroll" }}>
              {[
                "BE/B.Tech",
                "ME/M.Tech",
                "Polytechnic",
                "M.Phil/Ph.D in Engineering",
                "Diploma in Engineering",
                "Training Programs",
              ].map((text, index) => (
                <ListItem key={text} disablePadding>
                  <Checkbox disableRipple />
                  <ListItemText primary={text} key={index} />
                </ListItem>
              ))}
            </List>
          </TabPanel>
          <TabPanel value={value} index={4}>
            <List sx={{ width: "100%", height: 420, overflow: "scroll" }}>
              {["Full Time", "Part Time"].map((text, index) => (
                <ListItem key={text} disablePadding>
                  <Checkbox disableRipple />
                  <ListItemText primary={text} key={index} />
                </ListItem>
              ))}
            </List>
          </TabPanel>
        </Grid>
      </Grid>
      <Grid
        container
        display="flex"
        textAlign="center"
        pl={2}
        pr={2}
        mt={2}
        spacing={1}
        sx={{ boxShadow: "rgb(0 0 0 / 50%) 0px -6px 6px -6px" }}
      >
        <Grid item xs={6} mt={0.5}>
          <Button
            variant="outlined"
            onClick={(e) => {
              setRight(false);
            }}
            sx={{ borderRadius: "80px", width: "80%" }}
          >
            Cancel
          </Button>
        </Grid>

        <Grid item xs={6} mt={0.5}>
          <Button
            variant="outlined"
            sx={{ borderRadius: "80px", width: "80%" }}
            onClick={(e) => {
              setRight(false);
            }}
          >
            Apply Filter
          </Button>
        </Grid>
      </Grid>
    </Box>
  );


  //----------------Sort -----------------
  const sort = (anchor) => (
    <Box
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : "100%",
        height: "100%",
      }}
      role="presentation"
    >
      <Grid container display="flex" justifyContent="space-between">
        <Grid item>
          <Typography fontWeight="bold" fontSize="large" p={2}>
            Sort
          </Typography>
        </Grid>
        <Grid item pt={1.5} pr={1.5}>
          <Button fontWeight="bold" fontSize="large" onClick={(e) => { handleClearPrice() ; handleClearRate() ; toggleDrawer(false) }} >
            Clear All
          </Button>
        </Grid>
      </Grid> 

      <Divider sx={{ bgcolor: "black" }} />

      <Grid container pt={5} pl={2} height="250px">
        <Grid item xs={4} justifyItems="left">
          <Tabs
            value={valueSort}
            // aria-label="Vertical tabs example"
            onChange={TabHandleChangeLeft}
            orientation="vertical"
            sx={{ fontWeight: "bold", width: "100%" }}
          >
            {["Admission Price", "Ratting"].map((text, index) => {
              return (
                <Tab label={text} key={index}>
                </Tab>
              );
            })}
          </Tabs>
        </Grid>
        <Divider sx={{ bgcolor: "black" }} />
        <Grid item xs={8}>
          <TabPanel value={valueSort} index={0}>
            <List sx={{ width: "100%", height: "100%", overflow: "scroll" }}>
             
                <ListItem  disablePadding>
                  {/* <Checkbox
                    onChange={(e) => {
                      setChbxvalue(e.target.checked);
                    }}
                  /> */}
                  <ListItemButton onClick={handlePriceHigh} >
                  <ListItemText primary='High to Low'  />
                  </ListItemButton>
                </ListItem>
                <ListItem  disablePadding>
                  {/* <Checkbox
                    onChange={(e) => {
                      setChbxvalue(e.target.checked);
                    }}
                  /> */}
                 <ListItemButton onClick={handlePriceLow}  >
                  <ListItemText primary='Low to High'  />
                  </ListItemButton>
                </ListItem>
                <ListItem  disablePadding>
                  {/* <Checkbox
                    onChange={(e) => {
                      setChbxvalue(e.target.checked);
                    }}
                  /> */}
                 <ListItemButton onClick={handleClearPrice} >
                  <ListItemText primary='All'  />
                  </ListItemButton>
                </ListItem>
             
            </List>
          </TabPanel>
          <TabPanel value={valueSort} index={1}>
            <List sx={{ width: "100%", height: 420, overflow: "scroll" }}>
              
                <ListItem  disablePadding>
                <ListItemButton onClick={handle4to5} >
                  {/* <Checkbox disableRipple /> */}
                  <ListItemText primary={'4&5'}  />
                  </ListItemButton>
                </ListItem>
                <ListItem  disablePadding>
                <ListItemButton onClick={handle3to4} >
                  {/* <Checkbox disableRipple  /> */}
                  <ListItemText primary={'3&4'} />
                </ListItemButton>
                </ListItem>
                <ListItem  disablePadding>
                <ListItemButton onClick={handlebellow3} >
                  {/* <Checkbox disableRipple  /> */}
                  <ListItemText primary={'Below 3'}  />
                  </ListItemButton>
                </ListItem>
                <ListItem  disablePadding>
                  <ListItemButton onClick={handleClearRate} >
                  <ListItemText primary={'All'}  />
                  </ListItemButton>
                </ListItem>
              
            </List>
          </TabPanel>
        </Grid>
      </Grid>
      <Grid
        container
        display="flex"
        textAlign="center"
        pl={2}
        pr={2}
        mt={2}
        spacing={1}
        sx={{ boxShadow: "rgb(0 0 0 / 50%) 0px -6px 6px -6px" }}
      >
        <Grid item xs={6} mt={0.5}>
          <Button
            variant="outlined"
            onClick={(e) => {
              setLeft(false);
            }}
            sx={{ borderRadius: "80px", width: "100%", mb: 1.4 }}
          >
            Cancel
          </Button>
        </Grid>

        <Grid item xs={6} mt={0.5}>
          <Button
            variant="outlined"
            sx={{ borderRadius: "80px", width: "100%", mb: 1.4 }}
            onClick={(e) => {
              setLeft(false);
            }}
          >
            Apply Sort
          </Button>
        </Grid>
      </Grid>
    </Box>
  );

  return (
    <>
      {/* -------------------------Sort and Filter Buttons------------------------------ */}
      <Grid
        container
        display={{ xs: "flex" }}
        sx={{
          position: "fixed",
          bottom: "0px",
          justifyContent: "space-around",
          zIndex: 10,
          bgcolor: themeMode === true? 'grey.700' : 'common.white' ,
          color: themeMode === true ? 'common.white' : 'common.black' ,
          display: { xs: "flex", md: "none", lg: "none " },
        }}
      >
        <Grid item xs={6} sx={{  
          bgcolor: themeMode === true? 'grey.700' : 'common.white' ,
        color: themeMode === true ? 'common.white' : 'common.black' ,}}>
          <Button
            onClick={toggleDrawerLeft(true)}
            sx={{
              textAlign: "center",
              fontSize: "15px",
              boxShadow: "",
              backgroundColor: "azure",
              width: "100%",
              borderRadius: "0px",
              bgcolor: themeMode === true? 'grey.700' : 'common.white' ,
              color: themeMode === true ? 'common.white' : 'common.black' ,
            }}
            endIcon={<BiSort fontSize="small" />}
          >
            Sort
          </Button>
        </Grid>
        <Divider />
        <Grid item xs={6} bgcolor="common.white">
          <Button
            onClick={toggleDrawer(true)}
            sx={{
              fontSize: "15px",
              textAlign: "center",
              backgroundColor: "azure",
              width: "100%",
              borderRadius: "0px",
            }}
            endIcon={<BiFilter />}
          >
            Filter
          </Button>
        </Grid>
      </Grid>
      {/* ----------------------Drawer------------------------- */}
      <Grid>
        <SwipeableDrawer
          anchor="bottom"
          open={left}
          onClose={toggleDrawer(false)}
          onOpen={toggleDrawer(true)}
          sx={{
            bgcolor: themeMode === true? 'grey.700' : 'common.white' ,
            color: themeMode === true ? 'common.white' : 'common.black' ,
          }}
        >
          {sort(left)}
        </SwipeableDrawer>
        <SwipeableDrawer
          anchor="bottom"
          open={right}
          onClose={toggleDrawer(false)}
          onOpen={toggleDrawer(true)}
        >
          {list(right)}
        </SwipeableDrawer>
      </Grid>
    </>
  );
}
