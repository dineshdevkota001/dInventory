import { useEffect } from 'react';
import { ThemeProvider } from '@mui/system';
import CssBaseline from '@mui/material/CssBaseline';
import Head from 'next/head';
import { CacheProvider, EmotionCache } from '@emotion/react';
import type { AppProps } from 'next/app';
import theme from '../constants/mui';
import Layout from 'components/Layout';
import createCache from '@emotion/cache';

import 'index.css';
import UserPrefsProvider from 'contexts/UserPrefs';

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
export default function (props: MyAppProps) {
  const { Component, emotionCache, pageProps } = props;

  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <CacheProvider value={emotionCache ?? clientSideEmotionCache}>
      <meta name="viewport" content="initial-scale=1, width=device-width" />
      <UserPrefsProvider>
        <CssBaseline />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </UserPrefsProvider>
    </CacheProvider>
  );
}
