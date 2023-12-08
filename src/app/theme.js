import { createTheme } from '@mui/material'

import YSdisplayRegular from '../vendor/fonts/YS Display-Regular.ttf'
import YSdisplayMedium from '../vendor/fonts/YS Display-Medium.ttf'
import YStextRegular from '../vendor/fonts/YS Text-Regular.ttf'
import YStextMedium from '../vendor/fonts/YS Text-Medium.ttf'


const theme = createTheme({
  typography: {
    fontFamily: 'YS Display, YS Text, Arial',
  },
  palette: {
    primary: {
      main: 'rgba(90, 155, 255, 1)',
      light: 'rgba(241, 246, 255, 1)',
      dark: 'rgba(29, 107, 243, 1)',
    },
    black: {
      main: 'rgba(26, 27, 34, 1)',
      light: 'rgba(181, 181, 183, 1)',
      black100: 'rgba(221, 224, 228, 1)',
      black300: 'rgba(181, 181, 183, 1)',
      black500: 'rgba(121, 121, 129, 1)',
      black600: 'rgba(76, 79, 93, 1)',
      black700: 'rgba(46, 48, 56, 1)',
    },
    grey: {
      main: 'rgba(248, 248, 248, 1)',
    },
    green: {
      main: 'rgba(135, 204, 158, 1)',
      light: 'rgba(194, 229, 206, 1)',
      dark: 'rgba(70, 134, 107, 1)',
    },
    purple: {
      main: 'rgba(127, 103, 210, 1)',
      light: 'rgba(204, 194, 237, 1)',
    },
    orange: {
      main: 'rgba(255, 206, 146, 1)',
      light: 'rgba(255, 225, 189, 1)',
    },
    rose: {
      main: 'rgba(255, 221, 229, 1)',
    },
    yellow: {
      main: 'rgba(255, 249, 211, 1)',
    },
    pink: {
      main: 'rgba(255, 191, 253, 0.87)',
    },
    brown: {
      main: 'rgba(169, 145, 117, 0.26',
    },
    white: {
      main: 'rgba(255, 255, 255, 1)',
    },
    blue: {
      main: 'rgba(172, 204, 255, 1)',
      light: 'rgba(172, 204, 255, 1)',
      dark: 'rgba(29, 107, 243, 1)',
    },
    progressBarOrange: {
      main: 'rgba(255, 225, 189, 1)',
    },
    progressBarBlue: {
      main: 'rgba(172, 204, 255, 1)',
    },
    progressBarGrey: {
      main: 'rgba(181, 181, 183, 1)',
    },
    error: {
      main: 'rgba(255, 2, 0, 1)',
    },
    text: {
      primary: 'rgba(26, 27, 34, 1)',
      secondary: 'rgba(121, 121, 129, 1)',
      disabled: 'rgba(181, 181, 183, 1)',
    },
    action: {
      disabled: 'rgba(221, 224, 228, 1)',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'YS Display';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: local('YS Display'), url(${YSdisplayRegular}) format('ttf');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
        @font-face {
          font-family: 'YS Display';
          font-style: normal;
          font-display: swap;
          font-weight: 500;
          src: local('YS Display'), url(${YSdisplayMedium}) format('ttf');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
        @font-face {
          font-family: 'YS Text';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: local('YS Text'), url(${YStextRegular}) format('ttf');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
        @font-face {
          font-family: 'YS Text';
          font-style: normal;
          font-display: swap;
          font-weight: 500;
          src: local('YS Text'), url(${YStextMedium}) format('ttf');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
      `,
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
    MuiStep: {
      styleOverrides: {
        root: {
          padding: '0px 0px 0px 24px',
          height: '18px',
        },
      },
    },
    MuiStepButton: {
      styleOverrides: {
        root: {
          fontFamily: 'YS Text',
          margin: '0',
          padding: '0',
          verticalAlign: 'top',
        },
      },
    },
    MuiStepLabel: {
      styleOverrides: {
        label: {
          fontFamily: 'YS Text',
          fontSize: '14px',
          fontWeight: '400',
          lineHeight: '18px',
          color: '#797981',
          '&.Mui-active': {
            color: '#1D6BF3',
          },
        },
        iconContainer: {
          color: '#797981',
          '&.Mui-active': {
            color: '#1D6BF3',

          },
        },
      },
    },
    MuiTypography: {
      variants: [
        {
          props: { variant: 'h1-regular' },
          style: {
            fontFamily: 'YS Display',
            fontWeight: 400,
            fontSize: 34,
            lineHeight: 40 / 34,
          },
        },
        {
          props: { variant: 'h1-medium' },
          style: {
            fontFamily: 'YS Display',
            fontWeight: 500,
            fontSize: 34,
            lineHeight: 40 / 34,
          },
        },
        {
          props: { variant: 'h2-regular' },
          style: {
            fontFamily: 'YS Display',
            fontWeight: 400,
            fontSize: 24,
            lineHeight: 32 / 24,
          },
        },
        {
          props: { variant: 'h2-medium' },
          style: {
            fontFamily: 'YS Display',
            fontWeight: 500,
            fontSize: 24,
            lineHeight: 32 / 24,
          },
        },
        {
          props: { variant: 'h3-regular' },
          style: {
            fontFamily: 'YS Display',
            fontWeight: 400,
            fontSize: 20,
            lineHeight: 24 / 20,
          },
        },
        {
          props: { variant: 'h3-medium' },
          style: {
            fontFamily: 'YS Display',
            fontWeight: 500,
            fontSize: 20,
            lineHeight: 24 / 20,
          },
        },
        {
          props: { variant: 'subtitle1-regular' },
          style: {
            fontFamily: 'YS Text',
            fontWeight: 400,
            fontSize: 18,
            lineHeight: 24 / 18,
          },
        },
        {
          props: { variant: 'subtitle1-medium' },
          style: {
            fontFamily: 'YS Text',
            fontWeight: 500,
            fontSize: 18,
            lineHeight: 24 / 18,
          },
        },
        {
          props: { variant: 'body1-regular' },
          style: {
            fontFamily: 'YS Text',
            fontWeight: 400,
            fontSize: 16,
            lineHeight: 20 / 16,
          },
        },
        {
          props: { variant: 'body1-medium' },
          style: {
            fontFamily: 'YS Text',
            fontWeight: 500,
            fontSize: 16,
            lineHeight: 20 / 16,
          },
        },
        {
          props: { variant: 'body2-regular' },
          style: {
            fontFamily: 'YS Text',
            fontWeight: 400,
            fontSize: 14,
            lineHeight: '18px',
          },
        },
        {
          props: { variant: 'body2-medium' },
          style: {
            fontFamily: 'YS Text',
            fontWeight: 500,
            fontSize: 14,
            lineHeight: 20 / 14,
          },
        },
        {
          props: { variant: 'body3-regular' },
          style: {
            fontFamily: 'YS Display',
            fontWeight: 400,
            fontSize: 12,
            lineHeight: 14 / 12,
          },
        },
        {
          props: { variant: 'body3-medium' },
          style: {
            fontFamily: 'YS Display',
            fontWeight: 500,
            fontSize: 12,
            lineHeight: 14 / 12,
          },
        },
        {
          props: { variant: 'body4-regular' },
          style: {
            fontFamily: 'YS Display',
            fontWeight: 400,
            fontSize: 9,
            lineHeight: 11/9,
          },
        },
        {
          props: { variant: 'body4-medium' },
          style: {
            fontFamily: 'YS Display',
            fontWeight: 500,
            fontSize: 9,
            lineHeight: 11/9,
          },
        },
        {
          props: { variant: 'caption1-regular' },
          style: {
            fontFamily: 'YS Text',
            fontWeight: 400,
            fontSize: 13,
            lineHeight: 16 / 13,
          },
        },
        {
          props: { variant: 'caption1-medium' },
          style: {
            fontFamily: 'YS Text',
            fontWeight: 500,
            fontSize: 13,
            lineHeight: 16 / 13,
          },
        },
        {
          props: { variant: 'caption2-regular' },
          style: {
            fontFamily: 'YS Text',
            fontWeight: 400,
            fontSize: 11,
            lineHeight: 12 / 11,
          },
        },
        {
          props: { variant: 'caption2-medium' },
          style: {
            fontFamily: 'YS Text',
            fontWeight: 500,
            fontSize: 11,
            lineHeight: 12 / 11,
          },
        },
        {
          props: { variant: 'caption3-regular' },
          style: {
            fontFamily: 'YS Text',
            fontWeight: 400,
            fontSize: 8,
            lineHeight: 10/8,
          },
        },
        {
          props: { variant: 'caption3-medium' },
          style: {
            fontFamily: 'YS Text',
            fontWeight: 500,
            fontSize: 8,
            lineHeight: 10/8,
          },
        },
      ],
    }
  },
});

export default theme;