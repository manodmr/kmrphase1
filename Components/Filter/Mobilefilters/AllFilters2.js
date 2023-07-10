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
import index from "@/pages/404";
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
  filterdegreefunc2
  // cityidvalue
}) {
  const [values, setValues] = useState(0);

  // console.log(cityidvalue.length);

  const [citychecked,setCitychecked] = useState(localStorage.getItem("selectedFilter"));
  // console.log("in",degreelistdata,streamID);
  
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
    // console.log(updvalue);
    setValues(updvalue);
  };

  let appendQuery = (id) => {
    router.query.postId = id;
    router.push(router);
  };

  let [streammsg, setStreammsg] = useState(false);
  // console.log(streamData);

  let [streamsearchfilter, setStreamsearchfilter] = useState("");
  let [citysearchfilter, setCitysearchfilter] = useState("");
  let [districtsearchfilter, setDistrictsearchfilter] = useState("");
  let [degreesearchfilter,setDegreesearchfilter] = useState("");
  let [coursesearchfilter,setCoursesearchfilter] = useState("");
  let [collegetypesearchfilter,setCollegetypesearchfilter] = useState("");



  const streamfilterhandle = (event) => {
    let getuserinput = event.target.value;
    setStreamsearchfilter(getuserinput);
  };
  const cityfilterhandle = (event) => {
    let getuserinput = event.target.value;
    setCitysearchfilter(getuserinput);
  };
  const districtfilterhandle = (event) =>
  {
    let getuserinput = event.target.value;
    setDistrictsearchfilter(getuserinput);
  }
  const degreefilterhandle = (event) =>
  {
    let getuserinput = event.target.value;
    setDegreesearchfilter(getuserinput);
  }
  const coursefilterhandle = (event) =>
  {
    let getuserinput = event.target.value;
    setCoursesearchfilter(getuserinput);
  }

  const collegetypehandle = (event) =>
  {
    let getuserinput = event.target.value;
    setCollegetypesearchfilter(getuserinput);
  }
  const [filterinput, setFilterinput] = useState("");
  const [saveindex,setSaveindex] = useState([]);

  // console.log(router);
  return (
    <>
    <Grid container display={'flex'} >
      <Grid
        item
        xs={4}
        sm={4}
        pt={1}
        // mb={-2.5}
        justifyItems="left"

        sx={{ backgroundColor: "primary.main", borderRadius: "0px" }}
      >
        <Tabs
          value={values}
          // aria-label="Vertical tabs example"
          onChange={TabHandleChange}
          orientation="vertical"
          // sx={{ fontWeight: "bold" }}
          // sx={{ borderRight: 1, color:"white" }}
          sx={{
             "& .MuiTabs-indicator": { display: "none" } ,
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
            // console.log(index,values);
           
              return (  
                <Tab
                  label={text}
                  key={index}
                  id={`vertical-tab-${index}`}
                  aria-controls={`vertical-tabpanel-${index}`}
                  sx={{
                    textAlign: "left",
                    bgcolor: index == values ? "common.white" : "transparent",
                    width: "100%",
                    borderRadius: "0px",
                    color: index == values ? "primary.main" : "common.white",
                  }}
                ></Tab>
              );
            
            }
              )}
        </Tabs>
      </Grid>

       {/* Ride side panel */}
      <Grid item xs={8} sm={8} pt={2} height={760}>

        {/* Distict */}
        {
          values === 0 ?
          <TextField
            id="standard-basic"
            label="Search District"
            variant="standard"
            disablePortal
            sx={{ color: "grey", ml: 4 }}
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
              districtfilterhandle(e)
            }}
          /> : null
        }
      
        <TabPanel value={values} index={0}  >
          <List sx={{ width: "100%", height:620, mt:3, p: 2, overflow: "scroll" }}>
            {districtData.filter((item,index) => 
            {
                if(districtsearchfilter.trim() == "") 
                {
                  // console.log(index,item.english_name);
                  return item;
                } 
                else if(item.english_name.toLowerCase().includes(districtsearchfilter) )
                {
                  // console.log(index,item.english_name);
                  return item;
                }
            }).
            map((text, index) => {
              // console.log(checkeddistrictvalue[text.id]);
              return (
                <ListItem key={index} id={`vertical-tab-${index}`} aria-controls={`vertical-tabpanel-${index}`} >
                  <ListItemButton >
                    <FormGroup>
                      <FormControlLabel
                        control={
                          <Checkbox
                            value={text.english_name}
                            key={index}
                            // name="mobile"
                            id={text.id}
                            // defaultChecked={isChecked}
                            checked={checkeddistrictvalue[text.id]}
                            onChange={(e) => {
                              districthandlefunc(e, text.id);
                            }}
                          />
                        }
                        label={text.english_name  + " " + "(" + text.count + ")"}
                      />
                    </FormGroup>
                  </ListItemButton>
                </ListItem>
              )
            
            })}
          </List>
        </TabPanel>


         {/* City */}
        {
          districtID.length > 0 ?
          <>
           {
          values === 1 ?
          <TextField
            id="standard-basic"
            label="Search City"
            variant="standard"
            disablePortal
            sx={{ color: "grey", ml: 4 }}
            type="Search"
            // margin="normal"
            size="small"
            endAdornment={
              <InputAdornment>
                <Search fontSize="small" />
              </InputAdornment>
            }
            autoComplete
            onChange={(e) => {cityfilterhandle(e)}}
          />: null
        }
       {
        districtID.length > 0 ?
        <TabPanel value={values} index={1}>
        <List sx={{ width: "100%", p: 2, mt:3, height: 620, overflowX: "scroll" }}>
          {
           cityData.filter((item,index) => 
           {
              if(citysearchfilter.trim() == "") 
              {
                // console.log(index,item.english_name);
                return item;
              } 
              else if(item.english_name.toLowerCase().includes(citysearchfilter) )
              {
                // console.log(index,item.english_name);
                return item;
              }
          }).map((item,index)=>
          {
            // console.log(checkedcityvalue,item.id);
            if(districtID.includes(item.districtid))
            {
            return(
              <ListItem >
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
                          filtercityfunc(e,item.id);
                        }}
                        // onClick={()=>{
                        //   appendQuery(item.id);
                        // }}
                      />
                    }
                    label={item.english_name}
                  />
                </FormGroup>
              </ListItem>
            )
          }
          })}
          
        </List>
      </TabPanel> : null
       }
          </> : null
        }

        {/* Stream  */}
        {
          values === 2 ?  
          <>
          <TextField
          id="standard-basic"
          label="Search Stream"
          variant="standard"
          disablePortal
          sx={{ color: "grey", ml: 4,width:"50%" }}
          name="Search"
          // margin="normal"
          size="small"
          endAdornment={
            <InputAdornment>
              <Search fontSize="small" />
            </InputAdornment>
          }
          autoComplete
          onChange={(e)=>streamfilterhandle(e)}
        /> 
            {
              streamID != "" ?
              <Button sx={{mt:2,ml:1}} onClick={streamfilterclear}>Clear</Button>
              :null
            }
        </>: null
        }
        <TabPanel value={values} index={2}>
          <List sx={{ width: "100%", p: 2, mt:3,height: 620, overflow: "scroll" }}>
            {streamData
              .filter((item, index) => {
                if (streamsearchfilter == "") 
                {
                  return item;
                } 
                else if (
                  item.name.toLowerCase().includes(streamsearchfilter)
                ) {
                  return item;
                }
              })  
              .map((item, index) => {
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
                                checked={item.id == streamID ? true : false} 
                                onChange={(e) => {
                                  filterstreamfunc(e,item.id);
                                  // console.log(e.type);
                                }}
                              />
                            } 
                            label={item.name + " " + "(" + item.count + ")"}
                          />
                        </RadioGroup>
                      </FormControl>
                    </ListItemButton>
                  </>
                );
              })}
            {/* </Box> */}
          </List>
        </TabPanel>
                
        {/* Degree */}
        {
          values === 3 ?
          <>
          <TextField
            id="standard-basic"
            label="Search Degree"
            variant="standard"
            disablePortal
            sx={{ color: "grey", ml: 4, width:"50%" }}
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
              degreefilterhandle(e)
            }}
          /> 
           {
              degreeID != "" ?
              <Button sx={{mt:2,ml:1}} onClick={degreefilterclear}>Clear</Button>
              :null
            }
          </>: null
        }
        <TabPanel value={values} index={3}>
          {
            streamID.length > 0 ?
            <List sx={{ width: "100%", height: 620, mt:3, p: 2, overflow: "scroll" }}>
            {degreeData.filter((item,index) => 
            {
                if(degreesearchfilter.trim() == "") 
                {
                  // console.log(index,item.name);
                  return item;
                } 
                else if(item.name.toLowerCase().includes(degreesearchfilter) )
                {
                  // console.log(index,item.name);
                  return item;
                }
            }).
            map((text, index) => {
              if (text.streamid == streamID) {

                  // console.log(streamID);
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
                              // name="mobile"
                              // defaultChecked={isChecked}
                              checked={text.id == degreeID ? true : false}
                              onChange={(e) => {
                                filterdegreefunc(e, text.id);
                              }}
                            />
                          }
                          label={text.name + " " + "[" + text.level + "]" + " " + "(" + text.count + ")"}
                        />
                        </RadioGroup>     
                      </FormControl>
                  </ListItemButton>
                );
            }
            })}
            </List>  :
            <List sx={{ width: "100%", height: 620, mt:3, p: 2, overflow: "scroll" }}>
            {degreeData.filter((item,index) => 
            {
                if(degreesearchfilter.trim() == "") 
                {
                  // console.log(index,item.name);
                  return item;
                } 
                else if(item.name.toLowerCase().includes(degreesearchfilter) )
                {
                  // console.log(index,item.name);
                  return item;
                }
            }).
            map((text, index) => {       
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
                                filterdegreefunc2(e, text.id);
                              }}
                            />
                          }
                          label={text.name + " " + "[" + text.level + "]" + " " + "(" + text.count + ")"}
                        />
                        </RadioGroup>
                       
                      </FormControl>
                  </ListItemButton>
                );
            })}
            </List>  
          } 
         
        </TabPanel>

        {/* Courses */}
        {
          values === 4 ?
          <TextField
            id="standard-basic"
            label="Search Courses"
            variant="standard"
            disablePortal
            sx={{ color: "grey", ml: 4 }}
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
              coursefilterhandle(e)
            }}
          /> : null
        }
        <TabPanel value={values} index={4}>
          <List sx={{ width: "100%", height: 620, mt:3, p: 2, overflow: "scroll" }}>
            {coursesData.filter((item,index) => 
            {
                if(coursesearchfilter.trim() == "") 
                {
                  // console.log(index,item.course_name);
                  return item;
                } 
                else if(item.course_name.toLowerCase().includes(coursesearchfilter) )
                {
                  // console.log(index,item.course_name);
                  return item;
                }
            }).
            map((text, index) => {
              // console.log(streamID, text.streamid);
              if (text.streamid == streamID || text.degreeid == degreeID ) {
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
                              checked={checkedcoursevalue[text.id]}
                              onChange={(e) => {
                                coursehandlefunc(e, text.id);
                              }}
                            />
                          }
                          label={text.course_name + " " + "(" + text.count + ")" +  " " + "[" + text.degree_level + "]"}
                        />
                      </FormGroup>
                    </ListItemButton>
                  </ListItem>
                );
              } 
            })}
            {streamID.length == 0 ? (
              <Typography justifyItems="center">
                Please Select any one of the Stream
              </Typography>
            ) : null}
          </List>
        </TabPanel>

        {/* College type  */}
        {
          values === 5 ?
          <TextField
            id="standard-basic"
            label="Search Collegetype"
            variant="standard"
            disablePortal
            sx={{ color: "grey", ml: 4 }}
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
          /> : null
        }
        <TabPanel value={values} index={5}>
          
          <List sx={{ width: "100%", height: 620, mt:3, p: 2, overflow: "scroll" }}>
            {collegetypeData.filter((item,index) => 
            {
                if(collegetypesearchfilter.trim() == "") 
                {
                  return item;
                } 
                else if(item.college_types.toLowerCase().includes(collegetypesearchfilter) )
                {
                  return item;
                }
            }).map((item, index) => (
              <>
                <ListItemButton sx={{ border: "none" }}>
                   <FormGroup>
                   <FormControlLabel
                          control={
                            <Checkbox
                            value={item.college_types}
                            // key={index}
                            id={item.college_type_id}
                            // defaultChecked={isChecked}
                            checked={checkedcollegetypevalue[item.college_type_id]}
                            // sx={{ position: "none" }}
                            onChange={(e) => {
                              filtercollegetypefunc2(e,item.college_type_id);
                            }}
                            /> 
                          }
                          label={item.college_types + " " + "(" + item.count + ")"}
                        />
                   </FormGroup>
                </ListItemButton>
              </>
            ))}
          </List>
        </TabPanel>
      </Grid>
    </Grid>
    </>
  );
}
