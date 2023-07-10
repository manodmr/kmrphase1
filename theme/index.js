import PropTypes from 'prop-types';
import { useContext, useMemo } from 'react';
// @mui
import { CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider as MUIThemeProvider, StyledEngineProvider } from '@mui/material/styles';
// hooks
import useSettings from './hooks/useSettings';
//
import palette from './palette';
import typography from './typography';
import breakpoints from './breakpoints';
import componentsOverride from './overrides';
import shadows, { customShadows } from './shadows';
import { darkLightModeContext } from '@/Layout/Layout';

// ----------------------------------------------------------------------

// ThemeProvider.propTypes = {
//   children: PropTypes.node,
// };

export default function ThemeProvider({ children, onChange }) {
  const { themeMode, themeDirection } = useSettings();
  const themeMM = useContext(darkLightModeContext);
  const isLight = themeMM === false;

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

  // const theme = createTheme(themeOptions);
  const theme = createTheme(themeOptions , {
    components: {
      // Change the default options of useMediaQuery
      MuiUseMediaQuery: {
        defaultProps: {
          noSsr: true,
        },
      },
    }
  }
  );

  theme.components = componentsOverride(theme);

  return (
    <StyledEngineProvider injectFirst>
      <MUIThemeProvider theme={theme}>
        {/* <CssBaseline /> */}
        {children}
      </MUIThemeProvider>
     </StyledEngineProvider>
  );
}
