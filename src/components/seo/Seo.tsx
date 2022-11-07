import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';

interface SeoProps {
  title?: string;
}

const description =
  'I am a self-taught full stack web and app developer. Currently a student at the University of BITS Pilani, Hyderabad Campus.';

const Seo: React.FC<SeoProps> = ({ title }) => {
  const router = useRouter();
  const fullTitle = `Sreekar Venkata Nutulapati ${title ? `| ${title}` : ''}`;

  return (
    <Head>
      <title>{fullTitle}</title>

      <meta name="description" content={description} />

      <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={'website'} />
      <meta
        property="og:url"
        content={`${process.env.NEXT_PUBLIC_SITE_URL}${router.pathname}`}
      />
      <meta
        property="og:image"
        content={`${process.env.NEXT_PUBLIC_SITE_URL}/og-image.png`}
      />
      <meta
        property="og:image:secure_url"
        content={`${process.env.NEXT_PUBLIC_SITE_URL}/og-image.png`}
      />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@sreekarnv1" />
      <meta name="twitter:description" content={description} />

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
