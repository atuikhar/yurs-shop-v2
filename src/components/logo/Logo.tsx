import { forwardRef } from 'react';
import { Link as RouterLink } from 'react-router-dom';
// @mui
import { Box, Link, BoxProps } from '@mui/material';

// ----------------------------------------------------------------------

export interface LogoProps extends BoxProps {
  disabledLink?: boolean;
}

const Logo = forwardRef<HTMLDivElement, LogoProps>(
  ({ disabledLink = false, sx, ...other }, ref) => {
    const logo = (
      <Box
        ref={ref}
        component="div"
        sx={{
          width: 140,
          height: 140,
          display: 'inline-flex',
          ...sx,
        }}
        {...other}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="200px"
          height="200px"
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid"
        >
          <g transform="translate(26.666666666666668,26.666666666666668)">
            <rect x="-20" y="-20" width="40" height="40" fill="#c93c1f">
              <animateTransform
                attributeName="transform"
                type="scale"
                repeatCount="indefinite"
                dur="1s"
                keyTimes="0;1"
                values="1.1500000000000001;1"
                begin="-0.3s"
              ></animateTransform>
            </rect>
          </g>
          <g transform="translate(73.33333333333333,26.666666666666668)">
            <rect x="-20" y="-20" width="40" height="40" fill="#24ab04">
              <animateTransform
                attributeName="transform"
                type="scale"
                repeatCount="indefinite"
                dur="1s"
                keyTimes="0;1"
                values="1.1500000000000001;1"
                begin="-0.2s"
              ></animateTransform>
            </rect>
          </g>
          <g transform="translate(26.666666666666668,73.33333333333333)">
            <rect x="-20" y="-20" width="40" height="40" fill="#2b37a0">
              <animateTransform
                attributeName="transform"
                type="scale"
                repeatCount="indefinite"
                dur="1s"
                keyTimes="0;1"
                values="1.1500000000000001;1"
                begin="0s"
              ></animateTransform>
            </rect>
          </g>
          <g transform="translate(73.33333333333333,73.33333333333333)">
            <rect x="-20" y="-20" width="40" height="40" fill="#d8bb36">
              <animateTransform
                attributeName="transform"
                type="scale"
                repeatCount="indefinite"
                dur="1s"
                keyTimes="0;1"
                values="1.1500000000000001;1"
                begin="-0.1s"
              ></animateTransform>
            </rect>
          </g>
        </svg>
      </Box>
    );

    if (disabledLink) {
      return logo;
    }

    return (
      <Link component={RouterLink} to="/" sx={{ display: 'contents' }}>
        {logo}
      </Link>
    );
  }
);

export default Logo;
