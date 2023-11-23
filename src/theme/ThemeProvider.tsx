import React from 'react'
import {ThemePropType} from "../interface"
import { CssVarsProvider, extendTheme } from '@mui/joy/styles';
import { Box, Sheet } from '@mui/joy';
const ThemeProvider = ({children,themeMode}:ThemePropType) => {
    const theme = extendTheme({ cssVarPrefix: 'demo' });
  return (
    themeMode==="dark"?
    <CssVarsProvider
    defaultMode="dark"
    // the props below are specific to this demo,
    // you might not need them in your app.
    //
    theme={theme}
    // the selector to apply CSS theme variables stylesheet.
    colorSchemeSelector="#demo_dark-mode-by-default"
    //
    // the local storage key to use
    modeStorageKey="demo_dark-mode-by-default"
    //
    // set as root provider
    disableNestedContext
  >
    <div id="demo_dark-mode-by-default">
      <Sheet sx={{ px: 3, py: 1.5, borderRadius: 'sm' }}>
        <Box>
            {children}
        </Box>
      </Sheet>
    </div>
  </CssVarsProvider>
  :<CssVarsProvider
  defaultMode="light"
 
  theme={theme}

  colorSchemeSelector="#demo_light-mode-by-default"
  //
  // the local storage key to use
  modeStorageKey="demo_light-mode-by-default"
  //
  // set as root provider
  disableNestedContext
>
  <div id="demo_light-mode-by-default">
    <Sheet sx={{ px: 3, py: 1.5, borderRadius: 'sm' }}>
      <Box>
          {children}
      </Box>
    </Sheet>
  </div>
</CssVarsProvider>
  )
}

export default ThemeProvider