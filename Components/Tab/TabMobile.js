import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Link from "next/link";
import { darkLightModeContext } from "@/Layout/Layout";
import { useRouter } from "next/router";
import { InputAdornment } from "@mui/material";
import { ArrowRight } from "@mui/icons-material";

let TabArray = [
  "Info",
  "Courses & Fees",
  "Reviews",
  "Placement",
  "Ranking",
  "Gallery",
  "Faculty",
  "News",
  "Q&A",
];

export default function TabMobile() {
  const router = useRouter();
  const [value, setValue] = React.useState(0);
  const [tabValues, setTabValues] = React.useState(TabArray);
  const [data, setData] = React.useState("");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const themeMode = React.useContext(darkLightModeContext);
  React.useEffect(() => {
    setTabValues(TabArray);
  }, [router.query.leaf]);

  console.log("leaf " + router.query.leaf);
  return (
    <Box
      sx={{
        maxWidth: { xs: "100%", sm: "100%" },
        bgcolor: themeMode === true ? "grey.900" : "#eaeef7",
        margin: "0em 0",
        justifyContent:'left'
      }}
    >
      <Tabs
        // value={value}
        // onChange={handleChange}
        variant="scrollable"
        // scrollButtons={window.scrollX > 5 ? true : false}
        // allowScrollButtonsMobile={ window.scrollX > 5 ? true : false }
        selectionFollowsFocus={true}
        // TabScrollButtonProps={">"}
        // ScrollButtonComponent={
        //   <InputAdornment>
        //  {`>`}
        //   </InputAdornment>
        // }
        aria-label="scrollable force tabs example"
        visibleScrollbar={false}
      >
        {tabValues.map((element, ind) => {
          return (
            <Tab
              key={ind}
              tabIndex={ind}
              label={element}
              sx={{
                minHeight: "48px",
                marginRight: "5px!important",
                color: themeMode === true ? "grey.500" : "grey.700",
                borderBottom:
                  router.query.leaf ===
                  element.toLocaleLowerCase().replace(/ & /g, "-")
                    ? "2px solid goldenrod"
                    : ind === 0 && router.query.leaf == undefined
                    ? "2px solid goldenrod"
                    : null,
              }}
              onClick={() => {
                setData(element.replace(/Info/g, ""));

                const datal = element.replace(/Info/g, "").toLocaleLowerCase();
                router.push(
                  `/${router.query.collegelist}/${
                    router.query.college
                  }/${datal.replace(/ & /g, "-")}`,
                  undefined,
                  { scroll: false }
                );
                if (
                  router.query.leaf ===
                    element.toLocaleLowerCase().replace(/ & /g, "-") ||
                  router.query.leaf != undefined ||
                  element != "Info"
                ) {
                  window.scrollTo({ top: 249, left: 0, behavior: "smooth" });
                }
              }}
            />
          );
        })}
      </Tabs>
    </Box>
  );
}
