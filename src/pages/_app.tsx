import MainNavbar from '@/components/main-navbar';
import MainDrawerMobile from '@/components/main-navbar/MainDrawerMobile';
import '@/scss/base/main.scss';
import type { AppProps } from 'next/app';
import React from 'react';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <MainNavbar />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
