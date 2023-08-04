import { Box, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();
  return (
    <Box>
      <Typography variant="h1">abc </Typography>
      <Button onClick={() => navigate('/next')}>Next</Button>
    </Box>
  );
}
