import BaseLayout from '@/layouts/base-layout';
import '@/scss/base/main.scss';
import type { AppProps } from 'next/app';
import React from 'react';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <BaseLayout>
        <Component {...pageProps} />
      </BaseLayout>
    </>
  );
};

export default MyApp;
