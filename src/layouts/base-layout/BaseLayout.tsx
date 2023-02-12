import React from 'react';
import Navigation from '@/layouts/navigation';
import { Inter } from '@next/font/google';

const inter = Inter({
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  subsets: ['latin'],
});

const BaseLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <>
      <div className={inter.className}>
        <Navigation />
        <main>{children}</main>
      </div>
    </>
  );
};

export default BaseLayout;
