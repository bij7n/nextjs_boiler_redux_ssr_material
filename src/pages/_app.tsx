import "@/styles/globals.css";

import type { EmotionCache } from "@emotion/react";
import { CacheProvider } from "@emotion/react";
import { GlobalStyles } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import * as React from "react";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import ErrorBoundary from "src/components/ErrorBounadry";
import ProgressBar from "src/components/ProgressBar";
import myTheme from "src/theme";
import createEmotionCache from "src/utils/createEmotionCache";
import { wrapper } from "store";
// ----------------------------------------------------------------------
const clientSideEmotionCache = createEmotionCache();
type NextPageWithLayout = NextPage & {
  getLayout?: (page: React.ReactElement) => React.ReactNode;
};

interface MyAppProps extends AppProps {
  Component: NextPageWithLayout;
  emotionCache?: EmotionCache;
}

const MyApp = ({ Component, emotionCache = clientSideEmotionCache, ...appProps }: MyAppProps) => {
  const { props, store } = wrapper.useWrappedStore(appProps);
  const resetWindowScrollPosition = React.useCallback(() => window.scrollTo(0, 0), []);

  React.useEffect(() => {
    window.onbeforeunload = () => {
      resetWindowScrollPosition();
    };
  }, [resetWindowScrollPosition]);

  return (
    <Provider store={store}>
      <CacheProvider value={emotionCache}>
        <ThemeProvider theme={myTheme}>
          <CssBaseline />
          <GlobalStyles
            styles={(theme) => ({
              body: {
                "&::-webkit-scrollbar": {
                  width: 12,
                },

                "&::-webkit-scrollbar-track": {
                  background: theme.palette.grey[900],
                  borderRadius: 8,
                },

                "&::-webkit-scrollbar-thumb": {
                  backgroundColor: theme.palette.grey[700],
                  borderRadius: 10,
                  border: `4px solid ${theme.palette.grey[900]}`,
                },
              },
              ".Toastify__toast": {
                fontFamily: `${theme.typography.fontFamily} !important`,
              },
            })}
          />
          <ProgressBar />
          <ErrorBoundary>
            <Component {...props.pageProps} />
          </ErrorBoundary>
        </ThemeProvider>
      </CacheProvider>
      <ToastContainer
        rtl
        icon={false}
        hideProgressBar
        theme="colored"
        autoClose={3000}
        closeButton
        pauseOnFocusLoss={false}
      />
    </Provider>
  );
};

export default MyApp;
