import { Search } from '@mui/icons-material';
import { Card, Checkbox, FormControlLabel, FormGroup, Grid, InputAdornment, List, ListItem, ListItemButton, TextField, Typography } from '@mui/material';
import React, { useRef, useState } from 'react'


export default function City() {

    const FilterCity = {
        current_page: 1,
        data: [
          {
            id: 101,
            state_id: 13,
            country_id: 101,
            city_id: 10,
            country_name: "India",
            state: "Haryana",
            city: "Faridabad",
          },
          {
            id: 101,
            state_id: 13,
            country_id: 101,
            city_id: 11,
            country_name: "India",
            state: "Haryana",
            city: "Palwal",
          },
          {
            id: 101,
            state_id: 13,
            country_id: 101,
            city_id: 12,
            country_name: "India",
            state: "Haryana",
            city: "Hathin",
          },
          {
            id: 101,
            state_id: 13,
            country_id: 101,
            city_id: 13,
            country_name: "India",
            state: "Haryana",
            city: "Hassanpur",
          },
          {
            id: 101,
            state_id: 13,
            country_id: 101,
            city_id: 14,
            country_name: "India",
            state: "Haryana",
            city: "Gurgaon",
          },
          {
            id: 101,
            state_id: 13,
            country_id: 101,
            city_id: 15,
            country_name: "India",
            state: "Haryana",
            city: "Sohna",
          },
          {
            id: 101,
            state_id: 13,
            country_id: 101,
            city_id: 16,
            country_name: "India",
            state: "Haryana",
            city: "Ferozepur Jhirka",
          },
          {
            id: 101,
            state_id: 13,
            country_id: 101,
            city_id: 17,
            country_name: "India",
            state: "Haryana",
            city: "Dharuhera",
          },
          {
            id: 101,
            state_id: 13,
            country_id: 101,
            city_id: 18,
            country_name: "India",
            state: "Haryana",
            city: "Nuh",
          },
          {
            id: 101,
            state_id: 13,
            country_id: 101,
            city_id: 19,
            country_name: "India",
            state: "Haryana",
            city: "Narnaul",
          },
          {
            id: 101,
            state_id: 13,
            country_id: 101,
            city_id: 20,
            country_name: "India",
            state: "Haryana",
            city: "Bhiwani",
          },
          {
            id: 101,
            state_id: 13,
            country_id: 101,
            city_id: 21,
            country_name: "India",
            state: "Haryana",
            city: "Kanina",
          },
          {
            id: 101,
            state_id: 13,
            country_id: 101,
            city_id: 22,
            country_name: "India",
            state: "Haryana",
            city: "Loharu",
          },
          {
            id: 101,
            state_id: 13,
            country_id: 101,
            city_id: 23,
            country_name: "India",
            state: "Haryana",
            city: "Rewari",
          },
          {
            id: 101,
            state_id: 13,
            country_id: 101,
            city_id: 24,
            country_name: "India",
            state: "Haryana",
            city: "Charkhi Dadri",
          },
          {
            id: 101,
            state_id: 13,
            country_id: 101,
            city_id: 25,
            country_name: "India",
            state: "Haryana",
            city: "Bawal",
          },
          {
            id: 101,
            state_id: 13,
            country_id: 101,
            city_id: 26,
            country_name: "India",
            state: "Haryana",
            city: "Pataudi",
          },
          {
            id: 101,
            state_id: 13,
            country_id: 101,
            city_id: 27,
            country_name: "India",
            state: "Haryana",
            city: "Rohtak",
          },
          {
            id: 101,
            state_id: 13,
            country_id: 101,
            city_id: 28,
            country_name: "India",
            state: "Haryana",
            city: "Jhajjar",
          },
          {
            id: 101,
            state_id: 13,
            country_id: 101,
            city_id: 29,
            country_name: "India",
            state: "Haryana",
            city: "Kalanaur",
          },
        ],
        first_page_url: "http://127.0.0.1:8000/cities?page=1",
        from: 1,
        last_page: 367,
        last_page_url: "http://127.0.0.1:8000/cities?page=367",
        links: [
          { url: null, label: "pagination.previous", active: false },
          {
            url: "http://127.0.0.1:8000/cities?page=1",
            label: "1",
            active: true,
          },
          {
            url: "http://127.0.0.1:8000/cities?page=2",
            label: "2",
            active: false,
          },
          {
            url: "http://127.0.0.1:8000/cities?page=3",
            label: "3",
            active: false,
          },
          {
            url: "http://127.0.0.1:8000/cities?page=4",
            label: "4",
            active: false,
          },
          {
            url: "http://127.0.0.1:8000/cities?page=5",
            label: "5",
            active: false,
          },
          {
            url: "http://127.0.0.1:8000/cities?page=6",
            label: "6",
            active: false,
          },
          {
            url: "http://127.0.0.1:8000/cities?page=7",
            label: "7",
            active: false,
          },
          {
            url: "http://127.0.0.1:8000/cities?page=8",
            label: "8",
            active: false,
          },
          {
            url: "http://127.0.0.1:8000/cities?page=9",
            label: "9",
            active: false,
          },
          {
            url: "http://127.0.0.1:8000/cities?page=10",
            label: "10",
            active: false,
          },
          { url: null, label: "...", active: false },
          {
            url: "http://127.0.0.1:8000/cities?page=366",
            label: "366",
            active: false,
          },
          {
            url: "http://127.0.0.1:8000/cities?page=367",
            label: "367",
            active: false,
          },
          {
            url: "http://127.0.0.1:8000/cities?page=2",
            label: "pagination.next",
            active: false,
          },
        ],
        next_page_url: "http://127.0.0.1:8000/cities?page=2",
        path: "http://127.0.0.1:8000/cities",
        per_page: 20,
        prev_page_url: null,
        to: 20,
        total: 7334,
      };
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
            console.log(allchbxvalues);
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
    //   let [cities,setCities] = useState(FilterCity.data);
    //   const citynames = (e)=>
    //   {
    //     const searchfilter = e.target.value;
    //     const fname = cities.filter(item=>item.city.includes(searchfilter));
    //     setCities(fname);
    //   }
    
    
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
                    City
                  </Typography>

                  {/* <SearchFilter
                        filter={element.title}
                        Array={element.options}
                      /> */}

   {/* /-----------------------------Search Filters-------------------------------------------/ */}

                  <TextField
                    id="standard-basic"
                    label="Search City"
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
                    // autoComplete
                    onChange={(e) => 
                        setFilterinp(e.target.value.charAt(0).toUpperCase()+e.target.value.slice(1))
                    }
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
                     FilterCity.data.filter((item,index)=>
                     {
                        if(filterinp.trim() === "")
                        {
                            return item;
                        }
                        else if(item.city.includes(filterinp))
                        {
                          // console.log(item.city.indexOf(item));
                          console.log(index);
                            return item;
                            
                        }
                     }).map((el,index)=>
                      {
                        console.log(el.city,index);
                          return(
                            <ListItem disablePadding>
                            <ListItemButton>
                              <FormGroup>
                                <FormControlLabel
                                  control={
                                    <Checkbox
                                      value={el.city}
                                      key={index}
                                      id={el.city}
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
                                        console.log(el.city,isChecked);
                                        // clearfilters()
                                      }}
                                    />
                                  }
                                  label={el.city}
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
