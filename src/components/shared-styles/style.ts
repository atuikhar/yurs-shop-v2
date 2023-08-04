import { Box, Button, styled } from '@mui/material';

export const Container = styled(Box)(({ theme }) => ({
  height: '100vh',
  padding: theme.spacing(10, 2, 0, 2),
  width: '100%',
  margin: 'auto',
  [theme.breakpoints.up('xl')]: {
    maxWidth: 1440,
  },
}));

export const CustomButton = styled(Button)(({ theme }) => ({
  borderRadius: 6,
  padding: theme.spacing(1, 3),
  background: '#edfafd',
  boxShadow: ' rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px',
  transition: '0.2s',
}));
