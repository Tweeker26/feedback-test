import { useEffect } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { Global, css } from '@emotion/react';
import { MDXProvider } from '@mdx-js/react';
import { DefaultSeo } from 'next-seo';
import Head from 'next/head';
import Router from 'next/router';
import * as Fathom from 'fathom-client';

import MDXComponents from '@/components/MDXComponents';
import { AuthProvider } from '@/lib/auth';
import theme from '@/styles/theme';

import SEO from '../next-seo.config';

Router.events.on('routeChangeComplete', () => {
  Fathom.trackPageview();
});

const GlobalStyle = ({ children }) => {
  return (
    <>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <Global
        styles={css`
          html {
            scroll-behavior: smooth;
          }
          #__next {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
          }
        `}
      />
      {children}
    </>
  );
};

const App = ({ Component, pageProps }) => {
  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      Fathom.load(process.env.NEXT_PUBLIC_FATHOM_SITE_ID, {
        includedDomains: ['feedback-test.vercel.app']
      });
    }
  }, []);

  return (
    <ChakraProvider theme={theme} resetCSS>
      <AuthProvider>
        <MDXProvider components={MDXComponents}>
          <DefaultSeo {...SEO} />
          <GlobalStyle />
          <Component {...pageProps} />
        </MDXProvider>
      </AuthProvider>
    </ChakraProvider>
  );
};

export default App;
