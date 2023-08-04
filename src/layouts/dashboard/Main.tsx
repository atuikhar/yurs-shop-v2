// @mui
import { Box, BoxProps } from '@mui/material';
// components
import { useSettingsContext } from '../../components/settings';

// ----------------------------------------------------------------------

export default function Main({ children, sx, ...other }: BoxProps) {
  const { themeLayout } = useSettingsContext();

  const isNavHorizontal = themeLayout === 'horizontal';

  if (isNavHorizontal) {
    return <Box component="main">{children}</Box>;
  }

  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        ...sx,
      }}
      {...other}
    >
      {children}
    </Box>
  );
}
