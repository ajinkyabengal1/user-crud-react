import React from 'react'
import {ThemePropType} from "../interface"
import { CssVarsProvider, extendTheme } from '@mui/joy/styles';
const ThemeProvider = (props:ThemePropType) => {
    const theme = extendTheme({
      colorSchemes: {
        dark: {
          palette: {
            // success: {
            //   solidBg: '#2DA44E',
            //   solidHoverBg: '#2C974B',
            //   solidActiveBg: '#298E46',
            // },
            // neutral: {
            //   outlinedBg: '#F6F8FA',
            //   outlinedHoverBg: '#F3F4F6',
            //   outlinedActiveBg: 'rgba(238, 239, 242, 1)',
            //   outlinedBorder: 'rgba(27, 31, 36, 0.15)',
            // },
            primary:{
              solidBg:"#610094",
              solidHoverBg:"#420163",
              solidActiveBg:"#610094",
              outlinedActiveBg:'#610094',
              outlinedBorder:"#610094",
            },
            focusVisible: '#610094',
          },
        },
      },
      focus: {
        default: {
          outlineWidth: '3px',
          color:'red'
        },
      },
      // fontFamily: {
      //   body: 'SF Pro Text, var(--gh-fontFamily-fallback)',
      // },
      // components: {
      //   JoyButton: {
      //     styleOverrides: {
      //       root: ({ ownerState }) => ({
      //         borderRadius: '6px',
      //         boxShadow: '0 1px 0 0 rgba(27, 31, 35, 0.04)',
      //         transition: '80ms cubic-bezier(0.33, 1, 0.68, 1)',
      //         transitionProperty: 'color,background-color,box-shadow,border-color',
      //         ...(ownerState.size === 'md' && {
      //           fontWeight: 600,
      //           minHeight: '32px',
      //           fontSize: '14px',
      //           '--Button-paddingInline': '1rem',
      //         }),
      //         ...(ownerState.color === 'success' &&
      //           ownerState.variant === 'solid' && {
      //             '--gh-palette-focusVisible': 'rgba(46, 164, 79, 0.4)',
      //             border: '1px solid rgba(27, 31, 36, 0.15)',
      //             '&:active': {
      //               boxShadow: 'inset 0px 1px 0px rgba(20, 70, 32, 0.2)',
      //             },
      //           }),
      //         ...(ownerState.color === 'neutral' &&
      //           ownerState.variant === 'outlined' && {
      //             '&:active': {
      //               boxShadow: 'none',
      //             },
      //           }),
      //       }),
      //     },
      //   },
      // },
    });
  return (
    <CssVarsProvider
    defaultMode={props.mode}
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
            {props.children}
  </CssVarsProvider>)
}

export default ThemeProvider