import Head from 'next/head';
import React from 'react';

interface SeoProps {
  title?: string;
}

const Seo: React.FC<SeoProps> = ({ title }) => {
  const fullTitle = `Sreekar Venkata Nutulapati ${title ? `| ${title}` : ''}`;

  return (
    <Head>
      <title>{fullTitle}</title>

      <meta
        name="description"
        content="I am a self-taught full stack web and app developer. Currently a student at the University of BITS Pilani, Hyderabad Campus."
      />

      <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />

      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
    </Head>
  );
};

export default Seo;
