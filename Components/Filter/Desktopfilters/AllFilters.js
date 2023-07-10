import { GridItem } from "@/OverViews/GridItem";
import {
  FormControl,
  FormControlLabel,
  FormGroup,
  InputAdornment,
  List,
  Radio,
  RadioGroup,
  Skeleton,
  TextField,
  Checkbox,
  Typography,
  Button,
} from "@mui/material";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { GridContainer } from "@/OverViews/GridContainer";
import { Stack } from "@/OverViews/Stack";
import React, { useState } from "react";
import { CheckBox, Search } from "@mui/icons-material";
import { useRouter } from "next/router";
import { Card } from "@/OverViews/Card/Card";
import NearBySlider from "@/Components/Slider/NearBySlider";

export default function AllFilters({
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
  districtID,
  checkeddegreevalue,
  totalcheckboxcount,
  districthandlefunc,
  checkeddistrictvalue,
  coursehandlefunc,
  checkedcoursevalue,
  collegetypehandlefunc,
  checkedcollegetypevalue,
  cityidvalue,

  filtercityfunc2,
  filtercityparams,
  filtercityclick,
  filterdistrictfunc2,
  filterdegreefunc2,
  filtercoursefunc2,
  filtercollegetypefunc2,
  filterstreamfunc2,
  degreeID,
  streamfilterclear,
  degreefilterclear,
  degreelistdata,
  NearValue,
  setNearByState,
  splicedatas,
}) {
  const router = useRouter();

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
    <div>
      <GridItem width={"100%"} height="100%">
        {/* Near by range */}
        <GridItem mb={2} sx={{ background: "background.default" }}>
          <Card
            sx={{
              width: "90%",
              pb: 2,
              py: 2,
              pt: 4,
            }}
          >
            <NearBySlider
              value={NearValue}
              onchange={(e) => {
                // setNearByState1(e.target.value);
                setNearByState(e.target.value);
              }}
            />
            <Typography
              variant="body1"
              sx={{
                justifyContent: "Center",
                ml: 0,
                display: { xs: "none", sm: "none", md: "flex" },
              }}
            >
              Near By {NearValue}kms
            </Typography>
          </Card>
        </GridItem>

        {/* ----------------District Filter */}

        <GridItem mb={2} sx={{ background: "background.default" }}>
          <Card
            sx={{
              width: "90%",
              pb: 2,
            }}
          >
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
              onChange={(e) => {
                districtfilterhandle(e);
              }}
            />
            <List
              sx={{
                width: "auto",
                mineight: "100%",
                maxHeight: 230,
                overflowY: "auto",
                fontSize: "18px",
              }}
              dense
              component="div"
              role="list"
            >
              {districtData
                .filter((item, index) => {
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
                                id={text.id}
                                name="desktop"
                                // defaultChecked={isChecked}
                                checked={checkeddistrictvalue[text.id]}
                                onChange={(e) => {
                                  filterdistrictfunc2(e, text.id);
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
            {/* ---------------------------------------------------------------- */}
          </Card>
        </GridItem>

        {/* ----------------City Filter */}
        {districtID.length > 0 ? (
          <GridItem mb={2} sx={{ background: "background.default" }}>
            <Card
              sx={{
                width: "90%",
                pb: 2,
              }}
            >
              <TextField
                id="standard-basic"
                label="Search Area"
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
                  cityfilterhandle(e);
                }}
              />
              <List
                sx={{
                  width: 300,
                  mineight: "100%",
                  maxHeight: 230,
                  overflowY: "auto",
                  fontSize: "18px",
                }}
                dense
                component="div"
                role="list"
              >
                {degreelistdata.colleges
                  .filter((item, index) => {
                    if (citysearchfilter.trim() == "") {
                      return item;
                    } else if (
                      item.english_name.toLowerCase().includes(citysearchfilter)
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
                                name="desktop"
                                value={item.english_name}
                                checked={checkedcityvalue[item.id]}
                                onChange={(e) => {
                                  filtercityfunc2(e, item.id);
                                }}
                                // onClick={filtercityparams}
                              />
                            }
                            label={
                              item.english_name + " " + "(" + item.count + ")"
                            }
                          />
                        </FormGroup>
                      </ListItem>
                    );
                  })}
              </List>
              {/* ---------------------------------------------------------------- */}
            </Card>
          </GridItem>
        ) : null}

        {/* ----------------Stream Filter */}

        <GridItem mb={2} sx={{ background: "background.default" }}>
          <Card
            sx={{
              width: "90%",
              pb: 2,
            }}
          >
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
            <>
              {streamID != "" ? (
                <Button sx={{ m: 2 }} onClick={streamfilterclear}>
                  Clear
                </Button>
              ) : null}
            </>
            <List
              sx={{
                width: "auto",
                mineight: "100%",
                maxHeight: 230,
                overflowY: "auto",
                fontSize: "18px",
              }}
              dense
              component="div"
              role="list"
            >
              {streamData
                .filter((item) => {
                  if (streamsearchfilter === "") {
                    return item;
                  } else if (
                    item.name.toLowerCase().includes(streamsearchfilter)
                  ) {
                    return item;
                  }
                })
                .map((item, index) => {
                  return (
                    <ListItemButton sx={{ border: "none" }}>
                      <FormControl>
                        <RadioGroup name="desktop">
                          <FormControlLabel
                            control={
                              <Radio
                                id={item.id}
                                name="desktop"
                                value={item.name}
                                checked={item.id == streamID ? true : false}
                                onChange={(e) => {
                                  filterstreamfunc(e, item.id);
                                }}
                              />
                            }
                            label={item.name + " " + "(" + item.count + ")"}
                          />
                        </RadioGroup>
                      </FormControl>
                    </ListItemButton>
                  );
                })}
            </List>
            {/* ---------------------------------------------------------------- */}
          </Card>
        </GridItem>

        {/* ----------------Degree Filter */}
        {streamID.length > 0 ? (
          <GridItem mb={2} sx={{ background: "background.default" }}>
            <Card
              sx={{
                width: "90%",
                pb: 2,
              }}
            >
              <TextField
                id="standard-basic"
                label="Search Degree"
                variant="standard"
                disablePortal
                sx={{ color: "grey", ml: 4, width: "50%" }}
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
                  degreefilterhandle(e);
                }}
              />
              <>
                {degreeID != "" ? (
                  <Button sx={{ m: 2 }} onClick={degreefilterclear}>
                    Clear
                  </Button>
                ) : null}
              </>
              <List
                sx={{
                  width: "auto",
                  mineight: "100%",
                  maxHeight: 230,
                  overflowY: "auto",
                  fontSize: "18px",
                }}
                dense
                component="div"
                role="list"
              >
                {degreeData
                  .filter((item, index) => {
                    if (degreesearchfilter.trim() == "") {
                      return item;
                    } else if (
                      item.name.toLowerCase().includes(degreesearchfilter)
                    ) {
                      return item;
                    }
                  })
                  .map((text, index) => {
                    if (text.streamid == streamID) {
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
                                    name="desktop"
                                    // defaultChecked={isChecked}
                                    checked={text.id == degreeID ? true : false}
                                    onChange={(e) => {
                                      filterdegreefunc(e, text.id);
                                    }}
                                  />
                                }
                                label={text.name + " " + "(" + text.count + ")"}
                              />
                            </RadioGroup>
                          </FormControl>
                        </ListItemButton>
                      );
                    }
                  })}
              </List>
              {/* ---------------------------------------------------------------- */}
            </Card>
          </GridItem>
        ) : (
          <GridItem mb={2} sx={{ background: "background.default" }}>
            <Card
              sx={{
                width: "90%",
                pb: 2,
              }}
            >
              <TextField
                id="standard-basic"
                label="Search Degree"
                variant="standard"
                disablePortal
                sx={{ color: "grey", ml: 4, width: "50%" }}
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
                  degreefilterhandle(e);
                }}
              />
              <>
                {degreeID != "" ? (
                  <Button sx={{ m: 2 }} onClick={degreefilterclear}>
                    Clear
                  </Button>
                ) : null}
              </>
              <List
                sx={{
                  width: "auto",
                  mineight: "100%",
                  maxHeight: 230,
                  overflowY: "auto",
                  fontSize: "18px",
                }}
                dense
                component="div"
                role="list"
              >
                {degreeData
                  .filter((item, index) => {
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
                                  name="desktop"
                                  // defaultChecked={isChecked}
                                  checked={text.id == degreeID ? true : false}
                                  onChange={(e) => {
                                    filterdegreefunc(e, text.id);
                                  }}
                                />
                              }
                              label={text.name + " " + "(" + text.count + ")"}
                            />
                          </RadioGroup>
                        </FormControl>
                      </ListItemButton>
                    );
                  })}
              </List>
              {/* ---------------------------------------------------------------- */}
            </Card>
          </GridItem>
        )}

        {/* ----------------Courses Filter */}
        {streamID.length > 0 || degreeID.length > 0 ? (
          <GridItem mb={2} sx={{ background: "background.default" }}>
            <Card
              sx={{
                width: "90%",
                pb: 2,
              }}
            >
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
                  coursefilterhandle(e);
                }}
              />
              <List
                sx={{
                  width: "auto",
                  mineight: "100%",
                  maxHeight: 230,
                  overflowY: "auto",
                  fontSize: "18px",
                }}
                dense
                component="div"
                role="list"
              >
                {coursesData
                  .filter((item, index) => {
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
                    if (
                      text.streamid == streamID ||
                      degreeID == text.degreeid
                    ) {
                      return (
                        <ListItem key={index} disablePadding>
                          <ListItemButton>
                            <FormGroup>
                              <FormControlLabel
                                control={
                                  <Checkbox
                                    value={text.course_name}
                                    name="desktop"
                                    key={index}
                                    id={text.id}
                                    // defaultChecked={isChecked}
                                    checked={checkedcoursevalue[text.id]}
                                    onChange={(e) => {
                                      filtercoursefunc2(e, text.id);
                                    }}
                                  />
                                }
                                label={
                                  text.course_name +
                                  " " +
                                  "(" +
                                  text.count +
                                  ")" +
                                  " " +
                                  "[" +
                                  text.degree_level +
                                  "]"
                                }
                              />
                            </FormGroup>
                          </ListItemButton>
                        </ListItem>
                      );
                    }
                  })}
              </List>
              {/* ---------------------------------------------------------------- */}
            </Card>
          </GridItem>
        ) : null}

        {/* ----------------CollegeType Filter */}

        <GridItem mb={2} sx={{ background: "background.default" }}>
          <Card
            sx={{
              width: "90%",
              pb: 2,
            }}
          >
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
            />
            <List
              sx={{
                width: "auto",
                mineight: "100%",
                maxHeight: 230,
                overflowY: "auto",
                fontSize: "18px",
              }}
              dense
              component="div"
              role="list"
            >
              {degreelistdata.college_types
                .filter((item, index) => {
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
                              // key={index}
                              name="desktop"
                              id={item.college_type_id}
                              // defaultChecked={isChecked}
                              checked={
                                checkedcollegetypevalue[item.college_type_id]
                              }
                              // sx={{ position: "none" }}
                              onChange={(e) => {
                                filtercollegetypefunc2(e, item.college_type_id);
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
            {/* ---------------------------------------------------------------- */}
          </Card>
        </GridItem>
      </GridItem>
    </div>
  );
}
