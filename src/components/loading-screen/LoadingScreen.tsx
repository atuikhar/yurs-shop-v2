import { m } from 'framer-motion';
// @mui
import { alpha, styled } from '@mui/material/styles';
import { Box } from '@mui/material';
// config
import { NAV, HEADER } from '../../config-global';
import Logo from '../logo';
import ProgressBar from '../progress-bar';
import { useSettingsContext } from '../settings';

// ----------------------------------------------------------------------

const StyledRoot = styled('div')(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  right: '50%',
  transform: 'translate(50%,-50%)',
  zIndex: 9998,
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: theme.palette.background.default,
}));

// ----------------------------------------------------------------------

export default function LoadingScreen() {
  const { themeLayout } = useSettingsContext();

  const size = 300;

  return (
    <>
      <ProgressBar />

      <StyledRoot
        sx={{
          width: `calc(100% - ${size}px)`,
          height: `calc(100% - ${500}px)`,
          ...(themeLayout === 'horizontal' && {
            width: 1,
            height: `calc(100% - ${size}px)`,
          }),
        }}
      >
        <m.div
          animate={{
            scale: [1, 0.9, 0.9, 1, 1],
            opacity: [1, 0.48, 0.48, 1, 1],
          }}
          transition={{
            duration: 2,
            ease: 'easeInOut',
            repeatDelay: 1,
            repeat: Infinity,
          }}
        >
          <Logo disabledLink sx={{ width: 200, height: 200 }} />
        </m.div>
      </StyledRoot>
    </>
  );
}
