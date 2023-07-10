import Footer from "@/Sections/Footer/Footer";
import React, { createContext, useMemo, useState } from "react";
import Topbar from "@/Sections/Header/Topbar";
import FooterPage from "@/Sections/Footer/Footer2";
import useSettings from "@/theme/hooks/useSettings";
import {
  createTheme,
  StyledEngineProvider,
  ThemeProvider as DayNightProvider,
  useTheme,
  alpha,
} from "@mui/material/styles";
import ThemeProvider from "@/theme";
import { MotionContainer } from "@/theme/animate";
import CssBaseline from "@mui/material/CssBaseline";
import MenuPopupState from "@/Components/Navigator/HoverMenu";
import { Stack } from "@/OverViews/Stack";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";

import { pxToRem, responsiveFontSizes } from "../theme/hooks/getFontValue";
import ComponentsOverrides from "@/theme/overrides";
import shadows, { customShadows } from '@/theme/shadows';
//
import palette from '@/theme/palette';
import typography from '@/theme/typography';
import breakpoints from '@/theme/breakpoints';
import Topbarnew from "@/Sections/Header/Topbarnew";
import GoToTop from "@/Components/ScrollToTop/GoToTop";
import { useRouter } from "next/router";



export const searchContext = createContext();
export const darkLightModeContext = createContext();
export const setLocationContext = createContext();
export const latlangContext = createContext();

export default function Layout({ children, searchdata , loading }) {
  const [searchcollege, setSearchcollege] = useState("");
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [selectValue, setSelectValue] = useState([]);
  const router = useRouter();
  const [locationContext, setLocContext] = useState({
    latitude: 0,
    longitude: 0,
  });

  const handleSearch = (searchValue) => {
    setSearchcollege(searchValue);
    // console.log(searchValue);
  };

  const changeTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  const [idRouter, setIdRouter] = useState();

  // const [menubedegree, setMenubedegree] = useState(menudata);

  // console.log(menudatas[0].id)

  const routerClick = (event) => {
    setIdRouter(menubedegree[0].id);
  };

  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      location: { lat: () => 11.127123, lng: () => 78.656891 },
      radius: 100 * 100,
      componentRestrictions: {
        country: "in",
      },
    },
  });

  const handleSelect = async (address) => {
    setValue(address, false);
    clearSuggestions();

    try {
      const results = await getGeocode({ address });
      const { lat, lng } = await getLatLng(results[0]);
      setLocContext({
        latitude: lat,
        longitude: lng,
      });
    } catch (error) {
      console.log("😱 Error: ", error);
    }
  };

// -----------------Theming
const isLight = isDarkTheme === false
const themeOptions = useMemo(
  () => ({
    palette: 'isLight' ? palette.light : palette.dark,
    typography,
    breakpoints,
    shape: { borderRadius: 8 },
    shadows: isLight ? shadows.light : shadows.dark,
    customShadows: isLight ? customShadows.light : customShadows.dark,
  }),
  [isLight]
);


  const theme1 = useTheme();
  
  const FONT_PRIMARY = "Public Sans, sans-serif";
 
  const theme = createTheme(themeOptions ,{
    palette: {
      mode: isDarkTheme ? "dark" : "light",
      primary: {
        lighter: "#ffff",
        light: "#e6fff9",
        main: "#0093AB",
        dark: "#006778",
        darker: "#005249",
        link: "#56ccb2",
      },
      grey: {
        0: "#FFFFFF",
        100: "#F9FAFB",
        200: "#F4F6F8",
        300: "#DFE3E8",
        400: "#C4CDD5",
        500: "#919EAB",
        600: "#637381",
        700: "#454F5B",
        800: "#212B36",
        900: "#161C24",
        500_8: alpha("#919EAB", 0.08),
        500_12: alpha("#919EAB", 0.12),
        500_16: alpha("#919EAB", 0.16),
        500_24: alpha("#919EAB", 0.24),
        500_32: alpha("#919EAB", 0.32),
        500_48: alpha("#919EAB", 0.48),
        500_56: alpha("#919EAB", 0.56),
        500_80: alpha("#919EAB", 0.8),  
      },
    },
    typography: {
      fontFamily: FONT_PRIMARY,
      fontWeightRegular: 400,
      fontWeightMedium: 600,
      fontWeightBold: 700,
      megatitle: {
        fontWeight: 600,
        lineHeight: 80 / 64,
        fontSize: pxToRem(25),
        letterSpacing: 2,
        ...responsiveFontSizes({ sm: 28, md: 30, lg: 36 }),
      },
      h1: {
        fontWeight: 400,
        lineHeight: 80 / 64,
        fontSize: pxToRem(40),
        letterSpacing: 2,
        ...responsiveFontSizes({ sm: 52, md: 58, lg: 64 }),
      },
      h2: {
        fontWeight: 700,
        lineHeight: 64 / 48,
        fontSize: pxToRem(32),
        ...responsiveFontSizes({ sm: 40, md: 44, lg: 48 }),
      },
      h3: {
        fontWeight: 700,
        lineHeight: 1.5,
        fontSize: pxToRem(24),
        ...responsiveFontSizes({ sm: 26, md: 30, lg: 32 }),
      },
      h4: {
        fontWeight: 700,
        lineHeight: 1.5,
        fontSize: pxToRem(20),
        ...responsiveFontSizes({ sm: 20, md: 24, lg: 24 }),
      },
      h5: {
        fontWeight: 700,
        lineHeight: 1.5,
        fontSize: pxToRem(18),
        ...responsiveFontSizes({ sm: 19, md: 20, lg: 20 }),
      },
      h6: {
        fontWeight: 700,
        lineHeight: 28 / 18,
        fontSize: pxToRem(16),
        ...responsiveFontSizes({ sm: 18, md: 18, lg: 18 }),
      },
      title: {
        fontWeight: 700,
        lineHeight: 1.5,
        fontSize: pxToRem(13),
        ...responsiveFontSizes({ sm: 13, md: 14, lg: 15 }),
      },
      subtitle: {
        fontWeight: 500,
        lineHeight: 22 / 14,
        fontSize: pxToRem(14),
        ...responsiveFontSizes({ sm: 16, md: 17, lg: 18 }),
      },
      subtitle1: {
        fontWeight: 600,
        lineHeight: 1.5,
        fontSize: pxToRem(16),
      },
      subtitle2: {
        fontWeight: 450,
        lineHeight: 22 / 14,
        fontSize: pxToRem(14),
      },
      body1: {
        lineHeight: 1.5,
        fontSize: pxToRem(16),
      },
      body2: {
        lineHeight: 22 / 14,
        fontSize: pxToRem(14),
      },
      caption: {
        lineHeight: 1.5,
        fontSize: pxToRem(12),
      },
      overline: {
        fontWeight: 700,
        lineHeight: 1.5,
        fontSize: pxToRem(12),
        textTransform: "uppercase",
      },
      button: {
        fontWeight: 700,
        lineHeight: 24 / 14,
        fontSize: pxToRem(14),
        textTransform: "capitalize",
      },
    },
    
    components: {
      // Change the default options of useMediaQuery
      MuiUseMediaQuery: {
        defaultProps: {
          noSsr: true,
        },
      },
      MuiTypography: {
        styleOverrides: {
          paragraph: {
            marginBottom: theme1.spacing(2),
          },
          gutterBottom: {
            marginBottom: theme1.spacing(1),
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            "&:hover": {
              boxShadow: "none",
            },
          },
          sizeLarge: {
            height: 48,
          },
          // contained
          containedInherit: {
            color: theme1.palette.grey[800],
            boxShadow: theme1.shadows[10],
            "&:hover": {
              backgroundColor: theme1.palette.grey[400],
              // backgroundColor: theme.palette.grey[400],
            },
          },
          containedPrimary: {
            // boxShadow: theme1.customShadows,
          },
          containedSecondary: {
            // boxShadow: theme1.customShadows.secondary,
          },
          containedInfo: {
            // boxShadow: theme1.customShadows.info,
          },
          containedSuccess: {
            // boxShadow: theme1.customShadows.success,
          },
          containedWarning: {
            // boxShadow: theme1.customShadows.warning,
          },
          containedError: {
            // boxShadow: theme1.customShadows.error,
          },
          // outlined
          outlinedInherit: {
            border: `1px solid ${theme1.palette.grey[500_32]}`,
            "&:hover": {
              backgroundColor: theme1.palette.action.hover,
            },
          },
          textInherit: {
            "&:hover": {
              backgroundColor: theme1.palette.action.hover,
            },
          },
        },
      },
      MuiMenuItem: {
        styleOverrides: {
          root: {
            "&.Mui-selected": {
              backgroundColor: theme1.palette.action.selected,
              "&:hover": {
                backgroundColor: theme1.palette.action.hover,
              },
            },
          },
        },
      },
    },
  });
  theme.components = ComponentsOverrides(theme);

  return (
    <Stack width={'100vw'}>
      {/* <DayNightProvider theme={theme}> */}
        {/* <CssBaseline /> */}
        <darkLightModeContext.Provider value={isDarkTheme}  >
          <ThemeProvider>
            <latlangContext.Provider value={selectValue} >
            <searchContext.Provider value={loading} >
          <MotionContainer>
          
            <Topbarnew
              handleSearch={handleSearch}
              ChangeMode={changeTheme}
              search={searchdata}
              handleSelect={handleSelect}
              setValue={setValue}
              value={value}
              dataList={data}
              status={status}
              ready={ready}
              clearSuggestions={clearSuggestions}
              locationContext={locationContext}
              locationContextLat={locationContext.latitude}
              locationContextLon={locationContext.longitude}
              isDarkTheme={isDarkTheme}
              setIsDarkTheme={setIsDarkTheme}
              setSelectValue={setSelectValue}
              selectValue={selectValue}
            />
          
            {children}
           
            <GoToTop />
            <FooterPage />
           
          </MotionContainer>
            </searchContext.Provider>
            </latlangContext.Provider>
          </ThemeProvider>  
        </darkLightModeContext.Provider>
      {/* </DayNightProvider> */}
    </Stack>
  );
}
