import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { darkLightModeContext } from "@/Layout/Layout";
import { Box, Divider, Typography } from "@mui/material";
import { Stack } from "@/OverViews/Stack";

export default function About({ data }) {
  const router = useRouter();
  const [jsondata, setJsondata] = useState(data);
  useEffect(() => {
    setJsondata(data);
  }, [router.query.college]);

  const themeMode = useContext(darkLightModeContext);

  return (
    <Stack >
      <Typography
        variant="h6"
        sx={{
          marginBottom: "8px",
          paddingBottom: "3px",
          display: "inline-block",
          width: "100%",
        }}
      >
        About{" "}
        <Divider
          sx={{
            width: "30px",
            border: "2px solid green",
            borderRadius: "2px",
          }}
        />
      </Typography>
      {jsondata.map((item, index) => {
        return (
          <>
            {item.college_desc != "" ? (
              <Box
                sx={{
                  padding: "0px 20px 20px 0px",
                  display: "flex",
                  justifyContent: "flex-start",
                }}
              >
                <Typography
                  sx={{
                    color: themeMode === true ? "grey.500" : "text.secondary",
                    fontSize: "13px",
                    lineHeight: "25px", 
                  }}
                 height={100}
                >
                  {item.college_desc}
                </Typography>
              </Box>
            ) : null}
          </>
        );
      })}
    </Stack>
  );
}
