import { useEffect } from 'react';

import CssBaseline from '@mui/material/CssBaseline';
import createCache from '@emotion/cache';
import type { AppProps } from 'next/app';
import { CacheProvider, EmotionCache } from '@emotion/react';
import { Provider } from 'urql';

import Layout from '@components/Layout';
import DarkModePrefsProvider from '@contexts/DarkModePrefs';
import LanguageProvider from '@contexts/LanguageContext';
import client from '@utils/urql';
import '../index.css';
import { SnackbarProvider } from 'notistack';

const isBrowser = typeof document !== 'undefined';

function createEmotionCache() {
  let insertionPoint;

  if (isBrowser) {
    const emotionInsertionPoint = document.querySelector<HTMLMetaElement>(
      'meta[name="emotion-insertion-point"]',
    );
    insertionPoint = emotionInsertionPoint ?? undefined;
  }

  return createCache({ key: 'mui-style', insertionPoint });
}

const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}
export default function App(props: MyAppProps) {
  const { Component, emotionCache, pageProps } = props;

  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <SnackbarProvider variant="success">
      <CacheProvider value={emotionCache ?? clientSideEmotionCache}>
        <Provider value={client}>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
          <DarkModePrefsProvider>
            <LanguageProvider>
              <CssBaseline />
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </LanguageProvider>
          </DarkModePrefsProvider>
        </Provider>
      </CacheProvider>
    </SnackbarProvider>
  );
}
