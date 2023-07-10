import {
  Box,
  Grid,
  Tabs,
  Tab,
  Typography,
  TextField,
  InputAdornment,
  List,
  ListItemButton,
  ListItem,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Link,
  Radio,
  RadioGroup,
  FormControl,
  Button,
  Stack,
} from "@mui/material";
import React, { createContext, useState } from "react";
import PropTypes from "prop-types";
// import FilterStates from "./State";
// import FilterCity from "./City";
// import FilterCollegetype from "./Collegetype";
// import FilterDistrict from "./District";
// import FilterCourses from "./Courses";
// import FilterStreams from "./Streams";
// import FilterDegree from "./Degree";
import { Search } from "@mui/icons-material";
import { CardListing } from "../../../Sections/CollegeLIsting/CardListing";
import { useRouter } from "next/router";
// import Streams from "./Streams";

export const allfiltersContext = createContext();
export default function AllFilters({
  stateData,
  cityData,
  districtData,
  degreeData,
  streamData,
  coursesData,
  collegetypeData,
  tabvalue,
  filterstate,
  filterstatefunc,
  checkedstatevalue,
  filtercityfunc,
  checkedcityvalue,
  filterstreamfunc,
  filterdegreefunc,
  checkedstreamvalue,
  streamID,
  checkeddegreevalue,
  totalcheckboxcount,
  districthandlefunc,
  checkeddistrictvalue,
  coursehandlefunc,
  checkedcoursevalue,
  collegetypehandlefunc,
  checkedcollegetypevalue,
  degreelistdata,

  filterstreamfunc2,
  filterdistrictfunc2,
  degreeID,
  streamfilterclear,
  degreefilterclear,
  districtID,
  filterdegreefunc2,
  apifilteroptions,
  // cityidvalue
}) {
  const [values, setValues] = useState(0);

  const router = useRouter();

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
    setValues(updvalue);
  };

  let appendQuery = (id) => {
    router.query.postId = id;
    router.push(router);
  };

  let [streammsg, setStreammsg] = useState(false);

  let [streamsearchfilter, setStreamsearchfilter] = useState("");
  let [citysearchfilter, setCitysearchfilter] = useState("");
  let [districtsearchfilter, setDistrictsearchfilter] = useState("");
  let [degreesearchfilter, setDegreesearchfilter] = useState("");
  let [coursesearchfilter, setCoursesearchfilter] = useState("");
  let [collegetypesearchfilter, setCollegetypesearchfilter] = useState("");

  const streamfilterhandle = (event) => {
    let getuserinput = event.target.value;
    setStreamsearchfilter(getuserinput);
  };
  const cityfilterhandle = (event) => {
    let getuserinput = event.target.value;
    setCitysearchfilter(getuserinput);
  };
  const districtfilterhandle = (event) => {
    let getuserinput = event.target.value;
    setDistrictsearchfilter(getuserinput);
  };
  const degreefilterhandle = (event) => {
    let getuserinput = event.target.value;
    setDegreesearchfilter(getuserinput);
  };
  const coursefilterhandle = (event) => {
    let getuserinput = event.target.value;
    setCoursesearchfilter(getuserinput);
  };

  const collegetypehandle = (event) => {
    let getuserinput = event.target.value;
    setCollegetypesearchfilter(getuserinput);
  };

  return (
    <Stack display="flex" >
      <Grid
        container
        display="flex"
        height={"600px"}
        width={"400px"}
      >
        <Grid
          xs={4}
          sx={{
            backgroundColor: "#454F5B",
            width: "100%",
            position: "relative",
          }}
        >
          <Stack
            sx={{
              backgroundColor: "#454F5B",
              width: "100%",
              overflowY: "none",
              borderRadius: "0px",
              mt: 7,
              position: "relative",
            }}
          >
            <Tabs
              value={values}
              // aria-label="Vertical tabs example"
              onChange={TabHandleChange}
              orientation="vertical"
              // sx={{ fontWeight: "bold" }}
              // sx={{ borderRight: 1, color:"white" }}
              sx={{
                "& .MuiTabs-indicator": { display: "none", height: "100%" },
              }}
            >
              {[
                "District",
                "Area",
                "Stream",
                "Degree",
                "Courses",
                "College Type",
              ].map((text, index) => {
                return (
                  <Tab
                    label={text}
                    key={index}
                    disabled={
                      (index === 1 && districtID.length == 0 ? true : false) ||
                      (index === 4 &&
                      streamID.length == 0 &&
                      degreeID.length == 0
                        ? true
                        : false)
                    }
                    sx={{
                      textAlign: "left",
                      bgcolor: index == values ? "common.white" : "transparent",
                      width: "100%",
                      borderRadius: "0px",
                      color: index == values ? "primary.main" : "common.white",
                    }}
                  ></Tab>
                );
              })}
            </Tabs>
          </Stack>
        </Grid>
        
        <Grid
          xs={8}
          sx={{
            backgroundColor: "#fff",
            width: "600px",
            height: "600px",
            // overflowY: "auto" ,
            // position: "absolute",
          }}
        >
          <Stack sx={{ width: "100%",height:'550px',backgroundColor: "#fff" , mt:8 }} >
            {/* City */}
            {values === 0 ? (
              <TextField
                id="standard-basic"
                label="Search District"
                variant="standard"
                disablePortal
                sx={{ color: "grey", ml: 4 , width:'70%'}}
                name="Search"
                // margin="normal"
                size="small"
                endAdornment={
                  <InputAdornment>
                    <Search fontSize="small" />
                  </InputAdornment>
                }
                autoComplete
                onChange={(e) => {
                  districtfilterhandle(e);
                }}
              />
            ) : null}
            <TabPanel value={values} index={0}>
              <List
                sx={{
                  width: "100%",
                  // height: "100vh",
                  //  p: 2, overflow: "scroll"
                  height: 580,  overflow: "scroll"
                }}
              >
                {apifilteroptions.city
                  ?.filter((item, index) => {
                    if (districtsearchfilter.trim() == "") {
                      return item;
                    } else if (
                      item.english_name
                        .toLowerCase()
                        .includes(districtsearchfilter)
                    ) {
                      return item;
                    }
                  })
                  .map((text, index) => {
                    return (
                      <ListItem key={index} disablePadding>
                        <ListItemButton>
                          <FormGroup>
                            <FormControlLabel
                              control={
                                <Checkbox
                                  value={text.english_name}
                                  key={index}
                                  name="mobile"
                                  id={text.id}
                                  checked={checkeddistrictvalue[text.id]}
                                  onChange={(e) => {
                                    districthandlefunc(e, text.id);
                                  }}
                                />
                              }
                              label={
                                text.english_name + " " + "(" + text.count + ")"
                              }
                            />
                          </FormGroup>
                        </ListItemButton>
                      </ListItem>
                    );
                  })}
              </List>
            </TabPanel>

            {/* area */}
            {districtID.length > 0 ? (
              <>
                {values === 1 ? (
                  <TextField
                    id="standard-basic"
                    label="Search City"
                    variant="standard"
                    disablePortal
                    sx={{ color: "grey", ml: 4, width:'70%' }}
                    type="Search"
                    // margin="normal"
                    size="small"
                    endAdornment={
                      <InputAdornment>
                        <Search fontSize="small" />
                      </InputAdornment>
                    }
                    autoComplete
                    onChange={(e) => {
                      cityfilterhandle(e);
                    }}
                  />
                ) : null}
                {districtID.length > 0 ? (
                  <TabPanel value={values} index={1}>
                    <List
                      sx={{
                        width: "100%",
                        p: 2,
                        // height: "100vh",
                        height: 580,  overflow: "scroll"
                      }}
                    >
                      {apifilteroptions.area
                        ?.filter((item, index) => {
                          if (citysearchfilter.trim() == "") {
                            return item;
                          } else if (
                            item.english_name
                              .toLowerCase()
                              .includes(citysearchfilter)
                          ) {
                            return item;
                          }
                        })
                        .map((item, index) => {
                          return (
                            <ListItem>
                              <FormGroup>
                                <FormControlLabel
                                  control={
                                    <Checkbox
                                      id={item.id}
                                      key={index}
                                      name="mobile"
                                      value={item.english_name}
                                      checked={checkedcityvalue[item.id]}
                                      autoComplete="off"
                                      onChange={(e) => {
                                        filtercityfunc(e, item.id);
                                      }}
                                      // onClick={()=>{
                                      //   appendQuery(item.id);
                                      // }}
                                    />
                                  }
                                  label={
                                    item.english_name +
                                    " " +
                                    "(" +
                                    item.count +
                                    ")"
                                  }
                                />
                              </FormGroup>
                            </ListItem>
                          );
                        })}
                    </List>
                  </TabPanel>
                ) : null}
              </>
            ) : null}

            {/* Stream  */}
            {values === 2 ? (
              <>
               <Box display='flex' >
                <TextField
                  id="standard-basic"
                  label="Search Stream"
                  variant="standard"
                  disablePortal
                  sx={{ color: "grey", ml: 4, width: "50%" }}
                  name="Search"
                  // margin="normal"
                  size="small"
                  endAdornment={
                    <InputAdornment>
                      <Search fontSize="small" />
                    </InputAdornment>
                  }
                  autoComplete
                  onChange={(e) => streamfilterhandle(e)}
                />
                {streamID != "" ? (
                  <Button sx={{ mt: 2, ml: 1 }} onClick={streamfilterclear}>
                    Clear
                  </Button>
                ) : null}
               </Box>
              </>
            ) : null}
            <TabPanel value={values} index={2}>
              <List
                sx={{
                  width: "100%",
                  p: 2,
                  // height: "100vh",
                  height: 580,  overflow: "scroll"
                }}
              >
                {apifilteroptions.streams
                  ?.filter((item, index) => {
                    if (streamsearchfilter == "") {
                      return item;
                    } else if (
                      item.name.toLowerCase().includes(streamsearchfilter)
                    ) {
                      return item;
                    }
                  })
                  .map((item, index) => {
                    if (item.count != 0) {
                      return (
                        <>
                          <ListItemButton sx={{ border: "none" }}>
                            <FormControl>
                              <RadioGroup>
                                <FormControlLabel
                                  control={
                                    <Radio
                                      id={item.id}
                                      value={item.name}
                                      name="mobile"
                                      checked={
                                        item.id == streamID ? true : false
                                      }
                                      onChange={(e) => {
                                        filterstreamfunc(e, item.id);
                                      }}
                                    />
                                  }
                                  label={
                                    item.name + " " + "(" + item.count + ")"
                                  }
                                />
                              </RadioGroup>
                            </FormControl>
                          </ListItemButton>
                        </>
                      );
                    }
                  })}
                {/* </Box> */}
              </List>
            </TabPanel>

            {/* Degree */}
            {values === 3 ? (
              <>
              <Box display='flex' >
                <TextField
                  id="standard-basic"
                  label="Search Degree"
                  variant="standard"
                  disablePortal
                  sx={{ color: "grey", ml: 4, width: "50%" }}
                  name="Search"
                  // margin="normal"
                  size="small"
                  endAdornment={
                    <InputAdornment>
                      <Search fontSize="small" />
                    </InputAdornment>
                  }
                  autoComplete
                  onChange={(e) => {
                    degreefilterhandle(e);
                  }}
                />
                {degreeID != "" ? (
                  <Button sx={{ mt: 2, ml: 1 }} onClick={degreefilterclear}>
                    Clear
                  </Button>
                ) : null}
              </Box>
              </>
            ) : null}
            <TabPanel value={values} index={3}>
              <List
                sx={{
                  width: "100%",
                  // p: 2,
                  // height: "100%",
                  height: 580,  overflow: "scroll"
                }}
              >
                {apifilteroptions.degrees
                  ?.filter((item, index) => {
                    if (degreesearchfilter.trim() == "") {
                      return item;
                    } else if (
                      item.name.toLowerCase().includes(degreesearchfilter)
                    ) {
                      return item;
                    }
                  })
                  .map((text, index) => {
                    return (
                      <ListItemButton key={index} disablePadding>
                        <FormControl>
                          <RadioGroup>
                            <FormControlLabel
                              control={
                                <Radio
                                  value={text.name}
                                  key={index}
                                  id={text.id}
                                  name="mobile"
                                  // defaultChecked={isChecked}
                                  checked={text.id == degreeID ? true : false}
                                  onChange={(e) => {
                                    filterdegreefunc(e, text.id);
                                  }}
                                />
                              }
                              label={
                                text.name +
                                " " +
                                "[" +
                                text.level +
                                "]" +
                                " " +
                                "(" +
                                text.count +
                                ")"
                              }
                            />
                          </RadioGroup>
                        </FormControl>
                      </ListItemButton>
                    );
                  })}
              </List>
            </TabPanel>

            {/* Courses */}
            {values === 4 ? (
              <TextField
                id="standard-basic"
                label="Search Courses"
                variant="standard"
                disablePortal
                sx={{ color: "grey", ml: 4 , width:'70%'}}
                type="Search"
                // margin="normal"
                size="small"
                endAdornment={
                  <InputAdornment>
                    <Search fontSize="small" />
                  </InputAdornment>
                }
                autoComplete
                onChange={(e) => {
                  coursefilterhandle(e);
                }}
              />
            ) : null}
            <TabPanel value={values} index={4}>
              <List
                sx={{
                  width: "100%",
                  p: 2,
                  // height: "100vh",
                  height: 580,  overflow: "scroll"
                }}
              >
                {apifilteroptions.courses
                  ?.filter((item, index) => {
                    if (coursesearchfilter.trim() == "") {
                      return item;
                    } else if (
                      item.course_name
                        .toLowerCase()
                        .includes(coursesearchfilter)
                    ) {
                      return item;
                    }
                  })
                  .map((text, index) => {
                    return (
                      <ListItem key={index} disablePadding>
                        <ListItemButton>
                          <FormGroup>
                            <FormControlLabel
                              control={
                                <Checkbox
                                  value={text.id}
                                  key={index}
                                  id={text.id}
                                  // defaultChecked={isChecked}
                                  name="mobile"
                                  checked={checkedcoursevalue[text.id]}
                                  onChange={(e) => {
                                    coursehandlefunc(e, text.id);
                                  }}
                                />
                              }
                              label={
                                text.course_name + " " + "(" + text.count + ")"
                              }
                            />
                          </FormGroup>
                        </ListItemButton>
                      </ListItem>
                    );
                  })}
              </List>
            </TabPanel>

            {/* College type  */}
            {values === 5 ? (
              <TextField
                id="standard-basic"
                label="Search Collegetype"
                variant="standard"
                disablePortal
                sx={{ color: "grey", ml: 4 , width:'70%'}}
                type="Search"
                // margin="normal"
                size="small"
                endAdornment={
                  <InputAdornment>
                    <Search fontSize="small" />
                  </InputAdornment>
                }
                autoComplete
                onChange={(e) => {
                  collegetypehandle(e);
                }}
              />
            ) : null}
            <TabPanel value={values} index={5}>
              <List
                sx={{
                  width: "100%",
                  p: 2,
                  // height: "100%",
                   height: 580,  overflow: "scroll"
                }}
              >
                {apifilteroptions.college_types
                  ?.filter((item, index) => {
                    if (collegetypesearchfilter.trim() == "") {
                      return item;
                    } else if (
                      item.college_types
                        .toLowerCase()
                        .includes(collegetypesearchfilter)
                    ) {
                      return item;
                    }
                  })
                  .map((item, index) => (
                    <>
                      <ListItemButton sx={{ border: "none" }}>
                        <FormGroup>
                          <FormControlLabel
                            control={
                              <Checkbox
                                value={item.college_types}
                                key={index}
                                name="mobile"
                                id={item.college_type_id}
                                checked={
                                  checkedcollegetypevalue[item.college_type_id]
                                }
                                onChange={(e) => {
                                  collegetypehandlefunc(
                                    e,
                                    item.college_type_id
                                  );
                                }}
                              />
                            }
                            label={
                              item.college_types + " " + "(" + item.count + ")"
                            }
                          />
                        </FormGroup>
                      </ListItemButton>
                    </>
                  ))}
              </List>
            </TabPanel>
          </Stack>
        </Grid>
      </Grid>
    </Stack>
  );
}

 

//---------------------------------------------------------- 