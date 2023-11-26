import { createTheme } from '@mui/material'

import YSdisplayRegular from '../vendor/fonts/YS Display-Regular.ttf'
import YSdisplayMedium from '../vendor/fonts/YS Display-Medium.ttf'
import YStextRegular from '../vendor/fonts/YS Text-Regular.ttf'
import YStextMedium from '../vendor/fonts/YS Text-Medium.ttf'


const theme = createTheme({
  typography: {
    fontFamily: 'YS Display, YS Text, Arial',
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
  },
});

export default theme;