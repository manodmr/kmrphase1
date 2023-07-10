import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { useRouter } from 'next/router';
import {useState} from "react";
// import Table from "@mui/material/Table";
import Table from "@/OverViews/Table";
import TableBody from "@mui/material/TableBody";

// import { tableCellClasses } from "@mui/material/TableCell";
import TableCell from "@/OverViews/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Box, Typography, Divider, } from "@mui/material";

// const StyledTableCell = styled(TableCell)(({ theme }) => ({
//     [`&.${tableCellClasses.head}`]: {
//       backgroundColor: theme.palette.common.black,
//       color: theme.palette.common.white,
//     },
//     [`&.${tableCellClasses.body}`]: {
//       fontSize: 14,
//     },
//   }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));


function Ranking({data}) {
    const router = useRouter();
    const [jsondata,setjsondata] = useState(data[0].rankings);


    // const [rankings,setRankings] = useState(data[0].rankings);
   


    console.log(jsondata);
  return (
    <div>
        {/* {
                    rankings==="Yes" ?  */}
       <Box
      style={{
        margin: "18px 32px 0 0",
        boxShadow: "0 0 3px #ccc",
        borderRadius: "5px",
        padding:'18px',
        WebkitBoxShadow: "0 0 3px #ccc",
        backgroundColor: "common.white",
      }}
    >
            <Typography variant="h5" sx={{ paddingBottom: "5px" }}>
            College  Ranking
            </Typography>

            <Divider sx={{ marginBottom: "5px" }} />
         { jsondata.map((item)=>
         { return(
        <> 
                      <Typography variant="body2" color="text.secondary">

        <p style={{marginBottom:'10px'}}> Top Ranking Agency {item.rankings_year} considering the one-year full-time shown below: </p> 
        </Typography>

      

    <TableContainer component={Paper}>
                    <Table size="small" arialabel="a dense table">
                      <TableHead>
                        <StyledTableRow>
                          <TableCell
                            sx={{
                              boxShadow: "none!important",
                              background: "#0093AB!important",
                            }}
                          >
                            Agency
                          </TableCell>
                          <TableCell
                            align="right"
                            sx={{ background: "#0093AB!important" }}
                          >
                            Rating
                          </TableCell>
                          <TableCell
                            align="right"
                            sx={{
                              boxShadow: "none!important",
                              background: "#0093AB!important",
                            }}
                          >
                            Year
                          </TableCell>
                        </StyledTableRow>
                      </TableHead>
                      <TableBody>
                        
                            <StyledTableRow key={item.courses_id}>
                              <TableCell component="th" scope="row">
                              NFIR
                              </TableCell>
                              <TableCell align="right">
                              {item.rankings_nirf}
                              </TableCell>
                              <TableCell align="right">
                              {item.rankings_year}
                              </TableCell>
                            </StyledTableRow>

                            <StyledTableRow key={item.courses_id}>
                              <TableCell component="th" scope="row">
                              Outlook
                              </TableCell>
                              <TableCell align="right">
                              {item.rankings_outlook}
                              </TableCell>
                              <TableCell align="right">
                              {item.rankings_year}
                              </TableCell>
                            </StyledTableRow>

                            <StyledTableRow key={item.courses_id}>
                              <TableCell component="th" scope="row">
                              Dinamalar
                              </TableCell>
                              <TableCell align="right">
                              {item.rankings_dmr}
                              </TableCell>
                              <TableCell align="right">
                              {item.rankings_year}
                              </TableCell>
                            </StyledTableRow>
                         
                      </TableBody>
                    </Table>
                  </TableContainer>
    </>
    )
        })
        }
    </Box>
    {/* : null
} */}
    </div>
  )
}
export default Ranking
