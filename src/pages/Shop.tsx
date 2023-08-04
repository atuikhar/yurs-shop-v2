//@mui
import { Typography } from '@mui/material';

//components
import Page from 'src/pages/Page';

//styled components
import { Container } from 'src/components/shared-styles/style';

//................................................

export default function Shop() {
  return (
    <Page title="Welcome">
      <Container>
        <Typography mt={10} mb={3} variant="h1" color="grey.700">
          SHOP LIST
        </Typography>
      </Container>
    </Page>
  );
}
