import { useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
// import { Card, CardHeader, Grid } from "@mui/material";
import { Card, CardHeader, Grid } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import SearchFilter from "./SearchFilter";


export default function DesktopFilter() {
  const Filter = [
    {
      title: "State", 
      options: [
        {
          value: 'Tamilnadu' ,
        },
        {
          value: 'Andrapredesh' ,
        },
        {
          value: 'Mathyapradesh' ,
        },
        {
          value: 'Kerala' ,
        },
        {
          value: 'Delhi' ,
        },
      ]
  
  },
    {
      title: "District",
      options: [
        {
          value: 'Chennai' ,
        },
        {
          value: 'Madurai' ,
        },
        {
          value: 'Kovai' ,
        },
        {
          value: 'Vilupuram' ,
        },
        {
          value: 'Kanyakumari' ,
        },
      ],
  
  },
    {
      title: "Stream",
      options: [
        {
          value: 'Engineering' ,
        },
        {
          value: 'Management' ,
        },
        {
          value: 'Arts & Science' ,
        },
        {
          value: 'Psychology' ,
        },
        {
          value: 'Computer Application' ,
        },
      ],
  
  },
  ];
  const [srcValue , setSrcValue] = useState('');
  const [courses, setCourses] = useState(Filter,[ ]);
  const filterChange = event => {
    const search = event.target.value.toLowerCase()
    const filterOptions = Filter.filter((e) => {  e.options.map((ele) => ele.value.toLowerCase().includes(search) )} )
    setCourses(filterOptions)
}
  return (
    <Grid container  position="sticky">
      {Filter.map((element) => {
        return (
          <Grid  mb={2}>
            <Card sx={{ width: "90%", pb: 2 }}>
              <CardHeader
                title={element.title}
                sx={{
                  textAlign: "left",
                  alignContent: "center",
                  bgcolor: "primary.light",
                  py: 2,
                }}
              />
              <SearchFilter filter={element.title} Array={element.options.filter((e) => e.value.toLowerCase().includes(srcValue))} onchange={(e) => setSrcValue(e.target.value)} />
              <List
                sx={{
                  width: 300,
                  height: 230,
                  overflow: "auto",
                }}
                dense
                component="div"
                role="list"
              >
                {element.options.map((text, index) => (
                  <ListItem key={text} disablePadding>
                    <ListItemButton>
                      <Checkbox disableRipple   />
                      <ListItemText primary={text.value} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
}

