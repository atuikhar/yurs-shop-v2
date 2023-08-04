import { Theme } from '@mui/material/styles';
import { BEIGE } from '../palette';

// ----------------------------------------------------------------------

export default function Slider(theme: Theme) {
  const isLight = theme.palette.mode === 'light';

  return {
    MuiSlider: {
      defaultProps: {
        size: 'small',
      },
      styleOverrides: {
        root: {
          height: '10px',
          '&.Mui-disabled': {
            color: theme.palette.action.disabled,
          },
        },
        thumb: {
          width: '24px',
          height: '24px',
          border: '2px solid white',
        },
        rail: {
          background: BEIGE[200]
        },
        markLabel: {
          fontSize: 13,
          color: theme.palette.text.disabled,
        },
        valueLabel: {
          borderRadius: 8,
          backgroundColor: theme.palette.grey[isLight ? 800 : 700],
        },
      },
    },
  };
}
