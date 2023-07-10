import React, { useContext, useEffect } from "react";
import Box from "@mui/material/Box";
import {
  Grid,
  Typography,
  Link,
  CardHeader,
  Avatar,
  Card,
} from "@mui/material";
import AssignmentIcon from "@mui/icons-material/Assignment";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import NoteAltIcon from "@mui/icons-material/NoteAlt";
import SchoolIcon from "@mui/icons-material/School";
import { GridContainer } from "@/OverViews/GridContainer";
import { GridItem } from "@/OverViews/GridItem";
import { darkLightModeContext } from "@/Layout/Layout";

import Image from "next/image";
import { Stack } from "@/OverViews/Stack";
import { useRouter } from "next/router";
// import { Card } from "@/OverViews/Card/Card";
export default function ApplicationMobile({ data }) {
  const router =  useRouter();
  const [jsondata, setJsondata] = React.useState(data);
  const themeMode = useContext(darkLightModeContext);
  useEffect(() => {
    setJsondata(data);
  },[router.query.college]);
  return (
    <>
      {jsondata.map((item) => {
        return (
          <>
            <Card
              sx={{
                boxShadow: "0px 10px 50px 0px rgb(26 46 85 / 7%)",
                background: "url('/application.png') no-repeat bottom center",
                backgroundSize: "contain",
                borderRadius: "20px",
                // bgColor: "#fff",
                padding: "20px 20px 60px 20px",
                bgcolor: themeMode === true ? "grey.800" : "#ffffff",
                color: themeMode === true ? "common.white" : "grey.700",
              }}
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
                Application & Eligibility
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: themeMode === true ? "grey.500" : "text.secondary",
                }}
              >
                UG: Eligibility criteria: 10 and +2 with 50% + TNEA PG:
                Graduation with 50% + TANCET Pass in Graduation + GATE
              </Typography>
              <Box>
                {item.application_mode != "" &&
                item.application_mode != null ? (
                  <>
                    <GridContainer
                      sx={{
                        margin: "0.8em 0",
                        width: "auto!important",
                        background: "inherit",
                      }}
                    >
                      <Grid
                        Item
                        sx={{
                          paddingTop: "0px !important",
                          paddingLeft: "0 !important",
                        }}
                      >
                        <Avatar
                          sx={{
                            background: "#0087a5",
                            border: "1px solid #0087a5",
                            marginRight: "10px",
                          }}
                        >
                          {" "}
                          <AssignmentIcon
                            style={{
                              color: "#fff",
                              fontSize: "1em",
                              textShadow: "1px 1px 1px rgba(0,0,0, 0.5)",
                            }}
                          />
                        </Avatar>
                      </Grid>
                      <Grid
                        Item
                        sx={{
                          paddingLeft: "0px !important",
                          paddingTop: "0px !important",
                        }}
                      >
                        <Typography sx={{ fontSize: ".8em", color: "#0087a5" }}>
                          Application Mode
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: "0.9em",
                            fontWeight: "bold",
                            color: themeMode === true ? "grey.100" : "#415067",
                            lineHeight: "22px",
                          }}
                        >
                          {item.application_mode}
                        </Typography>
                      </Grid>
                    </GridContainer>
                  </>
                ) : null}
                {item.application_fee != "" && item.application_fee != null ? (
                  <>
                    <GridContainer
                      sx={{
                        margin: "0.8em 0",
                        width: "auto!important",
                        background: "inherit",
                      }}
                    >
                      <GridItem
                        sx={{
                          paddingTop: "0px !important",
                          paddingLeft: "0 !important",
                        }}
                      >
                        <Avatar
                          sx={{
                            background: "#0087a5",
                            border: "1px solid #0087a5",
                            marginRight: "10px",
                          }}
                        >
                          {" "}
                          <CurrencyRupeeIcon
                            style={{
                              color: "#fff",
                              fontSize: "1em",
                              textShadow: "1px 1px 1px rgba(0,0,0, 0.5)",
                            }}
                          />
                        </Avatar>
                      </GridItem>
                      <GridItem
                        xs
                        sx={{
                          paddingLeft: "0px !important",
                          paddingTop: "0px !important",
                        }}
                      >
                        <Typography sx={{ fontSize: ".8em", color: "#0087a5" }}>
                          Application Fees
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: "0.9em",
                            fontWeight: "bold",
                            color: themeMode === true ? "grey.100" : "#415067",
                            lineHeight: "22px",
                          }}
                        >
                          {item.application_fee}
                        </Typography>
                      </GridItem>
                    </GridContainer>
                  </>
                ) : null}

                {item.admission_criteria != "" &&
                item.admission_criteria != null ? (
                  <>
                    <GridContainer
                      sx={{
                        margin: "0.8em 0",
                        width: "auto!important",
                        background: "inherit",
                      }}
                    >
                      <GridItem
                        sx={{
                          paddingTop: "0px !important",
                          paddingLeft: "0 !important",
                        }}
                      >
                        <Avatar
                          sx={{
                            background: "#0087a5",
                            border: "1px solid #0087a5",
                            marginRight: "10px",
                          }}
                        >
                          {" "}
                          <NoteAltIcon
                            style={{
                              color: "#fff",
                              fontSize: "1em",
                              textShadow: "1px 1px 1px rgba(0,0,0, 0.5)",
                            }}
                          />
                        </Avatar>
                      </GridItem>
                      <GridItem
                        xs
                        sx={{
                          paddingLeft: "0px !important",
                          paddingTop: "0px !important",
                        }}
                      >
                        <Typography sx={{ fontSize: ".8em", color: "#0087a5" }}>
                          Admission Criteria
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: "0.9em",
                            fontWeight: "bold",
                            color: themeMode === true ? "grey.100" : "#415067",
                            lineHeight: "22px",
                          }}
                        >
                          {item.admission_criteria}
                        </Typography>
                      </GridItem>
                    </GridContainer>
                  </>
                ) : null}
                {item.eligibility_criteria != "" &&
                item.eligibility_criteria != null ? (
                  <>
                    <GridContainer
                      sx={{
                        margin: "0.8em 0",
                        width: "auto!important",
                        background: "inherit",
                      }}
                    >
                      <GridItem
                        sx={{
                          paddingTop: "0px !important",
                          paddingLeft: "0 !important",
                        }}
                      >
                        <Avatar
                          sx={{
                            background: "#0087a5",
                            border: "1px solid #0087a5",
                            marginRight: "10px",
                          }}
                        >
                          {" "}
                          <SchoolIcon
                            style={{
                              color: "#fff",
                              fontSize: "1em",
                              textShadow: "1px 1px 1px rgba(0,0,0, 0.5)",
                            }}
                          />
                        </Avatar>
                      </GridItem>
                      <GridItem
                        xs
                        sx={{
                          paddingLeft: "0px !important",
                          paddingTop: "0px !important",
                        }}
                      >
                        <Typography sx={{ fontSize: ".8em", color: "#0087a5" }}>
                          Application Mode
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: "0.9em",
                            fontWeight: "bold",
                            color: themeMode === true ? "grey.100" : "#415067",
                            lineHeight: "22px",
                          }}
                        >
                          {" "}
                          {item.eligibility_criteria}
                        </Typography>
                      </GridItem>
                    </GridContainer>
                  </>
                ) : null}
                {/* <Box sx={{ background: "url('/application.png') no-repeat bottom center",
                backgroundSize: "contain", height:'94px'}}>
                 
              </Box> */}
                {/* <Image src="/application.png" className="respimg" width={'700'} height={94} alt="Application" />        */}
              </Box>
            </Card>
          </>
        );
      })}
    </>
  );
}
