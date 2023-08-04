import { Theme } from '@mui/material/styles';
import { BEIGE } from '../palette';

// ----------------------------------------------------------------------

export default function Popover(theme: Theme) {
  return {
    MuiPopover: {
      styleOverrides: {
        paper: {
          boxShadow: theme.customShadows.dropdown,
          borderRadius: '16px',
          border: `1px solid ${BEIGE[300]}`,
          background: BEIGE[100],
        },
      },
    },
  };
}
