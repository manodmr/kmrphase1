import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Box, Typography, Divider, Card } from "@mui/material";
import React from "react";
import { darkLightModeContext } from "@/Layout/Layout";
import Link from "next/link";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function Ranking({ data }) {
  const router = useRouter();
  const [jsondata1, setJsondata1] = React.useState(data);
  const [jsondata, setjsondata] = useState(data[0].rankings);
  useEffect(() => {
    // jsondata.splice(0,jsondata.length);
    // if (router.query.college) {
    setjsondata(data[0].rankings);
    // }
  }, [router.query.college]);
  // const [rankings,setRankings] = useState(data[0].rankings);

  console.log(jsondata);
  const themeMode = useContext(darkLightModeContext);
  return (
    <>
      {/* {
                    rankings==="Yes" ?  */}
      <Card
        sx={{
          boxShadow: "0px 10px 50px 0px rgb(26 46 85 / 7%)",
          background: "url('/ranking.png') no-repeat bottom center",
          backgroundSize: "contain",
          borderRadius: "10px",
          bgcolor: themeMode === true ? "grey.800" : "#ffffff",
          color: themeMode === true ? "common.white" : "grey.700",
          padding: "20px 10px 100px 10px",
          height:'93%'
        }}
      >
        <Link
          style={{ display: "block", width: "100%" }}
          href={`/${router.query.collegelist}/${router.query.college}/ranking`}
        >
          <Typography
            variant="h5"
            sx={{
              marginBottom: "8px",
              paddingBottom: "3px",
              display: "inline-block",
              borderBottom: "#5bd9bd solid 3px",
            }}
          >
            Ranking{" "}
            <ArrowForwardOutlinedIcon
              style={{
                marginBottom: "-6px",
                textShadow: "1px 1px 1px rgba(0,0,0, 0.5)",
              }}
            />
          </Typography>
        </Link>
        {jsondata.map((item) => {
          return (
            <>
              <Typography
                variant="body2"
                sx={{
                  color: themeMode === true ? "grey.500" : "text.secondary",
                }}
              >
                <p style={{ marginBottom: "10px" }}>
                  Top Ranking Agency {item.rankings_year} considering the
                  one-year full-time shown below:{" "}
                </p>
              </Typography>

              <TableContainer
                component={Paper}
                sx={{
                  margin: "1.2em 0",
                  bgcolor: themeMode === true ? "grey.400" : "grey.300",
                  color: themeMode === true ? "common.white" : "grey.700",
                }}
              >
                <Table aria-label="customized dense table"  sx={{ height:'80%' , mt:-1 }} >
                  <TableHead>
                    <TableRow align="center">
                      <TableCell
                        sx={{
                          boxShadow: "none!important",
                          bgcolor: themeMode === true ? "grey.700" : "grey.600",
                          color:
                            themeMode === true
                              ? "common.white"
                              : "common.white",
                          textAlign: "left",
                        }}
                      >
                        Agency{" "}
                      </TableCell>
                      <TableCell
                        sx={{
                          // background: "#eaeef7!important",
                          bgcolor: themeMode === true ? "grey.700" : "grey.600",
                          color:
                            themeMode === true
                              ? "common.white"
                              : "common.white",
                          textAlign: "center",
                        }}
                      >
                        Rating
                      </TableCell>
                      <TableCell
                        sx={{
                          boxShadow: "none!important",
                          bgcolor: themeMode === true ? "grey.700" : "grey.600",
                          color:
                            themeMode === true
                              ? "common.white"
                              : "common.white",
                          textAlign: "center",
                        }}
                      >
                        Year
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <StyledTableRow sx={{ background: "none !important" }}>
                      <StyledTableCell
                        component="th"
                        scope="row"
                        sx={{ textAlign: "left" }}
                      >
                        NIRF{" "}
                      </StyledTableCell>
                      <StyledTableCell
                        sx={{
                          background: "#eaeef7!important",
                          textAlign: "center",
                        }}
                      >
                        {" "}
                        {item.rankings_nirf}{" "}
                      </StyledTableCell>
                      <StyledTableCell sx={{ textAlign: "center" }}>
                        {item.rankings_year}
                      </StyledTableCell>
                    </StyledTableRow>

                    <StyledTableRow>
                      <StyledTableCell
                        component="th"
                        scope="row"
                        sx={{ textAlign: "left" }}
                      >
                        Outlook{" "}
                      </StyledTableCell>
                      <StyledTableCell
                        sx={{
                          background: "#eaeef7!important",
                          textAlign: "center",
                        }}
                      >
                        {" "}
                        {item.rankings_outlook}{" "}
                      </StyledTableCell>
                      <StyledTableCell sx={{ textAlign: "center" }}>
                        {item.rankings_year}
                      </StyledTableCell>
                    </StyledTableRow>

                    <StyledTableRow sx={{ background: "none !important" }}>
                      <StyledTableCell
                        component="th"
                        scope="row"
                        sx={{ textAlign: "left" }}
                      >
                        Dinamalar{" "}
                      </StyledTableCell>
                      <StyledTableCell
                        sx={{
                          background: "#eaeef7!important",
                          textAlign: "center",
                        }}
                      >
                        {" "}
                        {item.rankings_dmr}{" "}
                      </StyledTableCell>
                      <StyledTableCell sx={{ textAlign: "center" }}>
                        {item.rankings_year}
                      </StyledTableCell>
                    </StyledTableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </>
          );
        })}
      </Card>
      {/* : null
} */}
    </>
  );
}
export default Ranking;
