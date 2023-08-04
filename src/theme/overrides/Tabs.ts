import { Theme } from '@mui/material/styles';
import { TabProps } from '@mui/material';

// ----------------------------------------------------------------------

export default function Tabs(theme: Theme) {
  return {
    MuiTabs: {
      defaultProps: {
        textColor: 'inherit',
        allowScrollButtonsMobile: true,
        variant: 'scrollable',
      },
      styleOverrides: {
        root: {
          background: 'white',
          borderRadius: '30px',
          minHeight: 40,
          padding: theme.spacing(0.7),
        },
        scrollButtons: {
          width: 48,
          borderRadius: '50%',
        },
        indicator: {
          display: 'none',
        },
      },
    },
    MuiTab: {
      defaultProps: {
        disableRipple: true,
        iconPosition: 'start',
      },
      styleOverrides: {
        root: ({ ownerState }: { ownerState: TabProps }) => ({
          padding: theme.spacing(0, 3),
          opacity: 1,
          minWidth: 48,
          fontWeight: theme.typography.fontWeightMedium,
          fontSize: '14px',
          '&:not(:last-of-type)': {
            // marginRight: theme.spacing(3),
            // [theme.breakpoints.up('sm')]: {
            //   marginRight: theme.spacing(5),
            // },
          },
          '&:not(.Mui-selected)': {
            color: theme.palette.text.secondary,
          },
          '&.Mui-selected': {
            background: 'black',
            borderRadius: '30px',
            color: 'white',
          },

          ...((ownerState.iconPosition === 'start' || ownerState.iconPosition === 'end') && {
            minHeight: 40,
          }),
        }),
      },
    },
  };
}
