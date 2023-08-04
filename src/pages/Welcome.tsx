import { useNavigate } from 'react-router-dom';

//@mui
import { Box, Typography } from '@mui/material';

//components
import Page from '@/pages/Page';

//styled components
import { Container, CustomButton } from '@/components/shared-styles/style';

//paths
import { PATH_DOMAIN } from '@/common/routes/paths';

//................................................

export default function Welcome() {
  const navigate = useNavigate();
  return (
    <Page title="Welcome">
      <Container>
        <Box textAlign={{ xs: 'center', sm: 'center', md: 'left' }}>
          <Typography mt={10} mb={3} variant="h1" color="grey.700">
            Welcome to YURS_SHOP
          </Typography>
          <CustomButton onClick={() => navigate(PATH_DOMAIN.shop)}>Explore</CustomButton>
        </Box>
      </Container>
    </Page>
  );
}
