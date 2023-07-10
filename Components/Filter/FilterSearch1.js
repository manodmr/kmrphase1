import { Typography, Box, ListItem, ListItemText} from '@mui/material'
import React, { useState } from 'react'
import Checkbox from '@mui/material/Checkbox';
import SearchIcon from '@mui/icons-material/Search';
import List from '@mui/material/List';
import TextField from '@mui/material/TextField';


function FilterSearch1() {

    const course1 = [
        { id: 1, title4: 'BE/B.Tech' },
        { id: 2, title4: 'ME/M.Tech' },
        { id: 3, title4: 'Polytechnic' },
        { id: 4, title4: 'M.Phil/Ph.D in Engineering' },
        { id: 5, title4: 'Diploma in Engineering' },
        { id: 6, title4: 'Traning Programs' },
       
    ]

    
    const [courses, setCourses] = useState(course1)

   
    const filterNames4 = e => {
        const search = e.target.value.toLowerCase()
        const filteredNames4 = course1.filter(course => course.title4.toLowerCase().includes(search))
        setCourses(filteredNames4)
    }


    return (
 
        <Box
            display="flex"
            flexDirection={"column"}
            maxWidth={400}
            alignItems="center"
            justifyContent={"center"}
            margin="auto"
            marginTop={4}
            padding={3}
            borderRadius={5}
            boxShadow={'5px 3px 10px #ccc'}>
      
      <div style={{ marginTop: '50px', marginLeft: '50px', alignItems: 'center' }}> <SearchIcon sx={{ position: 'absolute', ml: 20, fontSize: '18px',marginTop:'20px' }} />
               <TextField 
               variant='outlined' 
               sx={{width:'200px'}} 
               label='Search Course' 
               type='text' 
               onChange={(e) => filterNames4(e)}>
                
               </TextField>
               


                <List sx={{ width: '200px', height: "300px",overflowY:"scroll" }}>
                    {courses.map((e) => {
                        return (
                            <ListItem >
                                <Checkbox />
                                <ListItemText>
                                    <Typography >{e.title4}</Typography>
                                </ListItemText>
                            </ListItem>
                        )
                    })}
                </List>
            </div>    
       
        </Box>
        


    )
}

export default FilterSearch1