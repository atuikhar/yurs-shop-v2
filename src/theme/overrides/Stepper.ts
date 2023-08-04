import { Theme } from '@mui/material/styles';

// ----------------------------------------------------------------------

export default function Stepper(theme: Theme) {
  return {
    MuiStepConnector: {
      styleOverrides: {
        root: {
          marginLeft: '15px',
        },
      },
    },
    MuiStepIcon: {
      styleOverrides: {
        root: {
          width: '2rem',
          height: '2rem',
        },
      },
    },
    MuiStepContent: {
      styleOverrides: {
        root: {
          marginLeft: '15px',
        },
      },
    },
    MuiStepLabel: {
      styleOverrides: {
        label: {
          color: theme.palette.common.black,
        },
      },
    },
  };
}
