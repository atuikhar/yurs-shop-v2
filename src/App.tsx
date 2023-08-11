// scroll bar
import 'simplebar-react/dist/simplebar.min.css';

// lazy image
import 'react-lazy-load-image-component/src/effects/blur.css';

// ----------------------------------------------------------------------

import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
// routes
import Router from './common/routes';
// theme
import ThemeProvider from './theme';

import SnackbarProvider from './components/snackbar';
import ScrollToTop from './components/scroll-to-top';
import { MotionLazyContainer } from './components/animate';
import { ThemeSettings, SettingsProvider } from './components/settings';

// Check our docs
// https://docs.minimals.cc/authentication/ts-version

// redux
import { persistor, store } from './common/redux/store';
import { Provider as ReduxProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';

// ----------------------------------------------------------------------

export default function App() {
  return (
    <ReduxProvider store={store}>
      <HelmetProvider>
        <PersistGate loading={null} persistor={persistor}>
          <SettingsProvider>
            <BrowserRouter>
              <ScrollToTop />
              <MotionLazyContainer>
                <ThemeProvider>
                  <ThemeSettings>
                    <SnackbarProvider>
                      <Router />
                    </SnackbarProvider>
                  </ThemeSettings>
                </ThemeProvider>
              </MotionLazyContainer>
            </BrowserRouter>
          </SettingsProvider>
        </PersistGate>
      </HelmetProvider>
    </ReduxProvider>
  );
}
