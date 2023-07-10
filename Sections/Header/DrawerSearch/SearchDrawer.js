
import { useContext, useState } from "react";





export default function SearchDrawer({ handleSearch, sx, searchApi },props) {
  const [state, setState] = useState({
    top: false,
  });


  // const toggleDrawer = (anchor, open) => (event) => {
  //   if (
  //     event.type === "keydown" &&
  //     (event.key === "Tab" || event.key === "Shift")
  //   ) {
  //     return;
  //   }

  //   setState({ ...state, [anchor]: open });
  // };
  
  
  // const [array, setArray] = useState({searchApi});
  // console.log(array);

  // const list = (anchor) => (
  //   <Box
  //     sx={{
  //       width: "top",
  //       bgcolor: themeMode === true ? "grey.700" : "common.white",
  //       color: themeMode === true ? "common.white" : "common.black",
  //     }}
  //     role="presentation"
  //   >
  //     <List>
  //       <ListItem sx={{ justifyContent: "center", width: "100vw" }}>
  //         <InputBase
  //           onChange={(e) => {
  //             setSearchValue(e.target.value);
  //           }}
  //           value={searchValue}
  //           type="search"
  //           placexholder="Search for Colleges, Exam ..."
  //           sx={{
  //             width: "70%",
  //             height: "50px",
  //             border: "1px solid grey",
  //             px: "15px",
  //             borderRadius: "30px",
  //             fontSize: "22px",
  //             color: themeMode === true ? "grey.400" : "common.black",
  //           }}
  //           startAdornment={
  //             <Search
  //               color="black"
  //               sx={{ color: "primary.main", mr: 1 }}
  //               fontSize="large"
  //             />
  //           }
  //           endAdornment={
  //             <Button onClick={ClearsearchField} sx={{ fontSize: "18px" }}>
  //               Clear
  //             </Button>
  //           }
  //         />
  //       </ListItem>
  //     </List>
  //     <List
  //       sx={{
  //         width: "100vw",
  //         maxHeight: "70vh",
  //         justifyContent: "center",
  //         alignItems: "center",
  //         overflow: "auto",
  //       }}
  //       role='list'
  //     >
  //       {output
  //         .filter((item, i) => {
  //           console.log(searchApi);
  //           // const value = item[0];
  //           if (item.searchable_values.toLowerCase().includes(searchValue)) {
  //             return item;
  //           }
  //         })
  //         .map((e) => {
  //           // console.log(searchApi.colleges);
  //           if (searchValue !== "") {
  //             return (
  //               <>
  //                 <ListItem
  //                   sx={{
  //                     justifyContent: "center",
  //                     width: { xl: "100%", lg: "100%", md: "100%" },
  //                     // width:"100%",
  //                     maxHeight: "600px",
  //                     px: { xl: 10, lg: 10, md: 1 },
  //                   }}
  //                 >
  //                   <Grid
  //                     component="a"
  //                     href={e.url}
  //                     columnSpacing={4}
  //                     width={"100%"}
  //                     height={"100%"}
  //                     sx={{
  //                       display: "flex",
  //                       justifyContent: "space-between",
  //                       textDecoration: "none",
  //                     }}
  //                   >
  //                     <Grid
  //                       item
  //                       lg={3}
  //                       justifyContent="left"
  //                       display={"flex"}
  //                       sx={{ alignItems: "center" }}
  //                     >
  //                       <Avatar sx={{ width: "50px", heigth: "50px", mr: 2 }}>
  //                         <img src={e.logo} width={50} />
  //                       </Avatar>

  //                       <Typography variant="h5"> {e.name}</Typography>
  //                     </Grid>

  //                     <Grid item lg={3}>
  //                       <Typography variant="h6"> {e.item_type}</Typography>
  //                     </Grid>
  //                   </Grid>
  //                 </ListItem>
  //               </>
  //             );
  //           }
  //         })}
  //       {/* {array?.map((ele, index) => {
  //         console.log(ele.institute_name);
  //         return (
  //           <ListItem
  //             sx={{
  //               justifyContent: "center",
  //               width: { xl: "100%", lg: "100%", md: "100%" },
  //               // width:"100%",
  //               maxHeight: "600px",
  //               px: { xl: 10, lg: 10, md: 1 },
  //             }}
  //           >
  //             <Grid
  //               component="a"
  //               href={""}
  //               columnSpacing={4}
  //               width={"100%"}
  //               height={"100%"}
  //               sx={{
  //                 display: "flex",
  //                 justifyContent: "space-between",
  //                 textDecoration: "none",
  //               }}
  //             >
  //               <Grid
  //                 item
  //                 lg={3}
  //                 justifyContent="left"
  //                 display={"flex"}
  //                 sx={{ alignItems: "center" }}
  //               >
  //                 <Avatar sx={{ width: "50px", heigth: "50px", mr: 2 }}>
  //                   <img src={ele.logo} width={50} />
  //                 </Avatar>

  //                 <Typography variant="h5"> {ele.institute_name}</Typography>
  //               </Grid>

  //               <Grid item lg={3}>
  //                 <Typography variant="h6"> {ele.city_name}</Typography>
  //               </Grid>
  //             </Grid>
  //           </ListItem>
  //         );
  //       })} */}

  //     </List>

  //     {!searchValue ? (
  //       <>
  //       <List
  //         sx={{ bgcolor: themeMode === true ? "grey.700" : "common.white" }}
  //       >
  //         <Box sx={{ display: "flex", width: "100%" }}>
  //           <TrendingUpIcon
  //             sx={{ color: "primary.main", fontSize: "35px", ml: 2.3 }}
  //           />
  //           <Typography sx={{ ml: 0.5 }} variant="h4">
  //             Trending Search
  //           </Typography>
  //         </Box>
  //         <ListItem sx={{ display: "grid", justifyContent: "space-between" }}>
  //           {trendingSearch.map((items) => {
  //             return (
  //               <Link href={items.url}>
  //                 <Typography variant="subtitle">{items.name}</Typography>
  //               </Link>
  //             );
  //           })}
  //         </ListItem>
  //       </List>
  //       </>
  //     ) : null}
  //   </Box>
  // );

  return (
    <>hellow</>
    // <div>
      
    //     <>
    //       {/* ------------------desktop main search bar-------------------- */}
    //       <Box sx={{ justifyContent: "center", width: "350px" }}>
    //         <InputBase
    //           type="search"
    //           placeholder="search..."
    //           onClick={toggleDrawer('top', true)}
    //           onKeyDown={toggleDrawer('top', true)}
    //           sx={{
    //             borderRadius: "6px",
    //             minWidth: "350px",
    //             color: themeMode === true ?  "common.white" : 'grey.700',
    //             bgcolor: themeMode === true ? "grey.700" : "common.white",
    //             display: { lg: "flex", xs: "flex", md: "flex" },
    //             border: "1px solid #eee",
    //             // flexGrow: 1,
    //             p: 1,
    //             ...sx,
    //           }}
    //         />
    //       </Box>


    //       <Drawer
    //         anchor={'top'}
    //         open={state['top']}
    //         onClose={toggleDrawer('top', false)}
    //       >
    //         {list('top')}
    //       </Drawer>
  
    //     </>
    
    // </div>
  );
}


