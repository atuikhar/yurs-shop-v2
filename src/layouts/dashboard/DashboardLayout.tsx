import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';

import Main from './Main';

// ----------------------------------------------------------------------

export default function DashboardLayout() {
  return (
    <Box
      sx={{
        maxHeight: '100%',
        overflow: 'auto',
        overflowY: 'scroll',
        '&::-webkit-scrollbar': {
          width: '0.3em',
          backgroundColor: '#000',
        },
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: '#E6E0CE',
        },
      }}
    >
      <Main>
        <Outlet />
      </Main>
    </Box>
  );
}
