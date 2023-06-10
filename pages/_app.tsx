import React, { ReactElement } from 'react';
import 'global.css';
import Header from '../components/header';

interface MyAppProps {
  Component: React.ComponentType<any>;
  pageProps: any;
}

function MyApp({ Component, pageProps }: MyAppProps): ReactElement {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
