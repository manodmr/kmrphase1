import { Search } from '@mui/icons-material';
import { Card, Checkbox, FormControlLabel, FormGroup, Grid, InputAdornment, List, ListItem, ListItemButton, TextField, Typography } from '@mui/material';
import React, { useRef, useState } from 'react'


export default function State() {

    const FilterState = 
    {
        "current_page": 1,
        "data": [
          {
            "state": "Andaman and Nicobar Islands",
            "state_id": 1,
            "country_id": 101,
            "country_name": "India"
          },
          {
            "state": "Andhra Pradesh",
            "state_id": 2,
            "country_id": 101,
            "country_name": "India"
          },
          {
            "state": "Arunachal Pradesh",
            "state_id": 3,
            "country_id": 101,
            "country_name": "India"
          },
          {
            "state": "Assam",
            "state_id": 4,
            "country_id": 101,
            "country_name": "India"
          },
          {
            "state": "Bihar",
            "state_id": 5,
            "country_id": 101,
            "country_name": "India"
          },
          {
            "state": "Chandigarh",
            "state_id": 6,
            "country_id": 101,
            "country_name": "India"
          },
          {
            "state": "Chhattisgarh",
            "state_id": 7,
            "country_id": 101,
            "country_name": "India"
          },
          {
            "state": "Dadra and Nagar Haveli",
            "state_id": 8,
            "country_id": 101,
            "country_name": "India"
          },
          {
            "state": "Daman and Diu",
            "state_id": 9,
            "country_id": 101,
            "country_name": "India"
          },
          {
            "state": "Delhi-NCR",
            "state_id": 10,
            "country_id": 101,
            "country_name": "India"
          },
          {
            "state": "Goa",
            "state_id": 11,
            "country_id": 101,
            "country_name": "India"
          },
          {
            "state": "Gujarat",
            "state_id": 12,
            "country_id": 101,
            "country_name": "India"
          },
          {
            "state": "Haryana",
            "state_id": 13,
            "country_id": 101,
            "country_name": "India"
          },
          {
            "state": "Himachal Pradesh",
            "state_id": 14,
            "country_id": 101,
            "country_name": "India"
          },
          {
            "state": "Jammu and Kashmir",
            "state_id": 15,
            "country_id": 101,
            "country_name": "India"
          },
          {
            "state": "Jharkhand",
            "state_id": 16,
            "country_id": 101,
            "country_name": "India"
          },
          {
            "state": "Karnataka",
            "state_id": 17,
            "country_id": 101,
            "country_name": "India"
          },
          {
            "state": "Kenmore",
            "state_id": 18,
            "country_id": 101,
            "country_name": "India"
          },
          {
            "state": "Kerala",
            "state_id": 19,
            "country_id": 101,
            "country_name": "India"
          },
          {
            "state": "Lakshadweep",
            "state_id": 20,
            "country_id": 101,
            "country_name": "India"
          }
        ],
        "first_page_url": "http://127.0.0.1:8000/states?page=1",
        "from": 1,
        "last_page": 3,
        "last_page_url": "http://127.0.0.1:8000/states?page=3",
        "links": [
          { "url": null, "label": "pagination.previous", "active": false },
          {
            "url": "http://127.0.0.1:8000/states?page=1",
            "label": "1",
            "active": true
          },
          {
            "url": "http://127.0.0.1:8000/states?page=2",
            "label": "2",
            "active": false
          },
          {
            "url": "http://127.0.0.1:8000/states?page=3",
            "label": "3",
            "active": false
          },
          {
            "url": "http://127.0.0.1:8000/states?page=2",
            "label": "pagination.next",
            "active": false
          }
        ],
        "next_page_url": "http://127.0.0.1:8000/states?page=2",
        "path": "http://127.0.0.1:8000/states",
        "per_page": 20,
        "prev_page_url": null,
        "to": 20,
        "total": 42
      }
      
      const [allchbxvalues, setAllchbxvalues] = useState([]);
      const [isChecked, setIschecked] = useState(false);

      const refinput = useRef();
    
      console.log(isChecked);
      let [filterinp, setFilterinp] = useState("");

      let [selected, setSelected] = useState(false);

  

      let [clearallfilters, setClearallfilters] = useState(false);
    
      const handleChange = (e) => {
        const value = e.target.value;
        let checked = e.target.checked;
    
        console.log(checked, value);
        // let g = document.getElementById("cf");
        // if(g.id==="cf")
        // {
    
        // }
    
        if (checked) {
          setAllchbxvalues([...allchbxvalues, value]);
          console.log(checked, value);
          return (
            <Grid>
              <Typography>{value}</Typography>
            </Grid>
          );
        } else {
          setAllchbxvalues(allchbxvalues.filter((e) => e != value));
        }
      };
    
      console.log(allchbxvalues);
    
      const handleDelete = (chipToDelete) => () => {
        setAllchbxvalues((chips) => chips.filter((chip) => chip !== chipToDelete));
      };
      console.log(allchbxvalues);
    
      const clearfilters = () => {
        console.log(allchbxvalues);
        // if(refinput.current.checked)
        // {
        //   alert("yes checked");
        // }
        // else
        // {
        //   alert("not checked");
        // }
    
        // allchbxvalues.map((item)=>
        // {
        //   document.getElementById(item).checked = false;
        // })
        setClearallfilters(true);
        setIschecked(false);
        allchbxvalues.splice(0, allchbxvalues.length);
        // setClearallfilters(!isChecked);
    
        console.log(allchbxvalues);
      };

     console.log(FilterState);
  return (
    <>
     <Grid container overflow={"revert"} position="sticky">
              <Grid mb={2}>
                <Card sx={{ width: "90%", pb: 2 }}>
                  <Typography
                    sx={{
                      textAlign: "left",
                      alignContent: "center",
                      bgcolor: "primary.light",
                      py: 2,
                      fontWeight: "bold",
                      fontSize: "15px",
                      paddingLeft: "15px",
                    }}
                  >
                    State
                  </Typography>

                  {/* <SearchFilter
                        filter={element.title}
                        Array={element.options}
                      /> */}

   {/* /-----------------------------Search Filters-------------------------------------------/ */}

                  <TextField
                    id="standard-basic"
                    label="Search State"
                    variant="standard"
                    disablePortal
                    sx={{ color: "grey", m: 2 }}
                    name="Search"
                    margin="normal"
                    size="small"
                    endAdornment={
                      <InputAdornment>
                        <Search fontSize="small" />
                      </InputAdornment>
                    }
                    // options={Array}
                    // placeholder={`Search City`}
                    autoComplete
                    onChange={(e) => {
                      setFilterinp(e.target.value);
                    }}
                  />

                  <List
                    sx={{
                      width: 300,
                      height: 230,
                      overflowY: "auto",
                    }}
                    dense
                    component="div"
                    role="list"
                  >
                    { 
                     FilterState.data.filter((item,index)=>
                     {
                        if(filterinp.trim() === "")
                        {
                            return item;
                        }
                        else if(item.state.includes(filterinp.charAt(0).toUpperCase()+filterinp.slice(1)))
                        {
                          // console.log(item.city.indexOf(item));
                          console.log(index);
                            return item;
                            
                        }
                     }).map((el,index)=>
                      {
                        console.log(el.state,index);
                          return(
                            <ListItem disablePadding>
                            <ListItemButton>
                              <FormGroup>
                                <FormControlLabel
                                  control={
                                    <Checkbox
                                      value={el.state}
                                      key={index}
                                      id={el.state}
                                    //   ref={refinput}
                                    //   checked={
                                    //     clearallfilters
                                    //       ? false
                                    //       : selected
                                    //       ? true
                                    //       : false
                                    //   }
                                      onChange={(e) => {
                                        // setLocChbxvalue(e.target.value);
                                        // handlefilter();
                                        // setSelected(true);
                                        setIschecked(true);
                                        handleChange(e);
                                        console.log(el.state,isChecked);
                                        // clearfilters()
                                      }}
                                    />
                                  }
                                  label={el.state}
                                  // ref={refinput}
                                />
                              </FormGroup>
                            </ListItemButton>
                          </ListItem>
                          )
                        }
                      )}

                  </List>
                </Card>
              </Grid>
            </Grid>
    </>
  )
}
